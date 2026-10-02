import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  BookOpen,
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Question, QuizResult } from '../types';
import { apiService } from '../services/api';
import { useProgress } from '../context/ProgressContext';
import { ProgressBar } from '../components/ProgressBar';
import { LoadingState, ErrorState } from '../components/LoadingErrorStates';

interface QuizActivePageProps {
  lessonId?: number;
  isRandom?: boolean;
  questionCount?: number;
  onFinishQuiz: () => void;
  onBackToQuizzes: () => void;
  onGoToLesson: (id: number) => void;
}

export const QuizActivePage: React.FC<QuizActivePageProps> = ({
  lessonId,
  isRandom = false,
  questionCount = 10,
  onFinishQuiz,
  onBackToQuizzes,
  onGoToLesson
}) => {
  const { addQuizResult, markLessonComplete } = useProgress();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Active quiz state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [userMistakes, setUserMistakes] = useState<QuizResult['mistakes']>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [finalResult, setFinalResult] = useState<QuizResult | null>(null);

  // Load questions
  const loadQuestions = async () => {
    setLoading(true);
    setError(null);
    try {
      let data: Question[] = [];
      if (isRandom) {
        data = await apiService.getQuestions(undefined, questionCount, true);
      } else {
        data = await apiService.getQuestions(lessonId, questionCount, false);
      }

      if (data.length === 0) {
        setError('Ushbu mavzu bo‘yicha savollar topilmadi.');
      } else {
        setQuestions(data);
        setCurrentIndex(0);
        setSelectedOption(null);
        setIsAnswerSubmitted(false);
        setCorrectCount(0);
        setUserMistakes([]);
        setIsCompleted(false);
        setFinalResult(null);
      }
    } catch {
      setError('Savollarni yuklashda xatolik yuz berdi.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, [lessonId, isRandom, questionCount]);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;

    setIsAnswerSubmitted(true);
    const isCorrect = selectedOption === currentQ.correctAnswerIndex;

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setUserMistakes((prev) => [
        ...prev,
        {
          question: currentQ.question,
          userAnswer: currentQ.options[selectedOption],
          correctAnswer: currentQ.options[currentQ.correctAnswerIndex],
          explanation: currentQ.explanation
        }
      ]);
    }
  };

  const handleNextQuestion = async () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      // Quiz completed!
      const total = questions.length;
      const finalCorrect = correctCount + (selectedOption === currentQ.correctAnswerIndex ? 0 : 0);
      const percentage = Math.round((finalCorrect / total) * 100);

      const saved = await addQuizResult({
        lessonId: isRandom ? undefined : lessonId,
        lessonTitle: isRandom ? 'Tasodifiy test' : currentQ.lessonTitle,
        totalQuestions: total,
        correctCount: finalCorrect,
        incorrectCount: total - finalCorrect,
        percentage,
        mistakes: userMistakes
      });

      // If passing score on lesson quiz, also mark lesson complete
      if (lessonId && percentage >= 60) {
        markLessonComplete(lessonId);
      }

      setFinalResult(saved);
      setIsCompleted(true);

      // Trigger celebratory confetti for good result
      if (percentage >= 70) {
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore confetti fallback
        }
      }
    }
  };

  if (loading) {
    return <LoadingState message="Test savollari tayyorlanmoqda..." />;
  }

  if (error || questions.length === 0) {
    return <ErrorState message={error || 'Savollar mavjud emas'} onRetry={loadQuestions} />;
  }

  // ================= RESULT SUMMARY SCREEN =================
  if (isCompleted && finalResult) {
    const isSuccess = finalResult.percentage >= 70;
    const isMedium = finalResult.percentage >= 50 && finalResult.percentage < 70;

    return (
      <div className="max-w-2xl mx-auto space-y-6 animate-in zoom-in-95 duration-200 pb-16">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 text-center shadow-lg space-y-6">
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto text-3xl shadow-md ${
              isSuccess
                ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 border-2 border-emerald-400'
                : isMedium
                ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-600 border-2 border-amber-400'
                : 'bg-rose-100 dark:bg-rose-950/80 text-rose-600 border-2 border-rose-400'
            }`}
          >
            {isSuccess ? '🏆' : isMedium ? '👍' : '📚'}
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {isSuccess
                ? 'Ajoyib natija! Barakalla!'
                : isMedium
                ? 'Yaxshi natija!'
                : 'Yana biroz mashq qilish kerak'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {finalResult.lessonTitle} bo‘yicha test yakunlandi
            </p>
          </div>

          {/* Score cards */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Foiz</p>
              <p className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">
                {finalResult.percentage}%
              </p>
            </div>
            <div>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">To‘g‘ri</p>
              <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                {finalResult.correctCount}
              </p>
            </div>
            <div>
              <p className="text-xs text-rose-600 dark:text-rose-400 font-semibold">Noto‘g‘ri</p>
              <p className="text-2xl font-black text-rose-600 dark:text-rose-400 font-mono">
                {finalResult.incorrectCount}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={loadQuestions}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Qayta ishlash</span>
            </button>

            {lessonId && (
              <button
                onClick={() => onGoToLesson(lessonId)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Darsga qaytish</span>
              </button>
            )}

            <button
              onClick={onBackToQuizzes}
              className="w-full sm:w-auto px-5 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 text-xs sm:text-sm font-semibold transition-colors"
            >
              Testlar ro‘yxati
            </button>
          </div>
        </div>

        {/* Mistakes Review Section */}
        {finalResult.mistakes.length > 0 && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
              <XCircle className="w-5 h-5" />
              <h3 className="text-base font-bold">
                Xatolarni ko‘rib chiqish ({finalResult.mistakes.length} ta)
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Quyidagi savollarda yo‘l qo‘yilgan xatolarni o‘rganib, bilimingizni boyiting:
            </p>

            <div className="space-y-4">
              {finalResult.mistakes.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/70 dark:border-rose-900/40 space-y-2 text-xs"
                >
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                    {idx + 1}. {m.question}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    <p className="text-rose-700 dark:text-rose-400 bg-white/70 dark:bg-slate-900/60 p-2 rounded-lg border border-rose-200/50">
                      <span className="font-semibold block text-[10px] uppercase">Sizning javobingiz:</span>
                      {m.userAnswer}
                    </p>
                    <p className="text-emerald-700 dark:text-emerald-400 bg-white/70 dark:bg-slate-900/60 p-2 rounded-lg border border-emerald-200/50">
                      <span className="font-semibold block text-[10px] uppercase">To‘g‘ri javob:</span>
                      {m.correctAnswer}
                    </p>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 italic pt-1 border-t border-rose-200/40 dark:border-rose-900/40">
                    💡 <span className="font-semibold">Izoh:</span> {m.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ================= ACTIVE QUESTION SCREEN =================
  const letterLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-200 pb-16">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onBackToQuizzes}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Chiqish</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 font-mono">
            Savol {currentIndex + 1} / {questions.length}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <ProgressBar
        value={Math.round(((currentIndex + 1) / questions.length) * 100)}
        size="sm"
        color="blue"
      />

      {/* Question Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono">
              {currentQ.lessonTitle}
            </span>
            <span className="text-[10px] font-semibold text-slate-400">
              {currentQ.difficulty}
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug">
            {currentQ.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map((option, idx) => {
            const letter = letterLabels[idx] || `${idx + 1}`;
            const isSelected = selectedOption === idx;
            const isCorrectAnswer = idx === currentQ.correctAnswerIndex;

            let cardStyle =
              'border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200';

            if (isAnswerSubmitted) {
              if (isCorrectAnswer) {
                cardStyle =
                  'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/30';
              } else if (isSelected && !isCorrectAnswer) {
                cardStyle =
                  'border-rose-500 bg-rose-50/70 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 ring-2 ring-rose-500/30';
              } else {
                cardStyle =
                  'border-slate-200 dark:border-slate-800 opacity-50 bg-white dark:bg-slate-900';
              }
            } else if (isSelected) {
              cardStyle =
                'border-blue-600 bg-blue-50/80 dark:bg-blue-950/50 text-blue-900 dark:text-blue-100 ring-2 ring-blue-500/30';
            }

            return (
              <button
                key={idx}
                disabled={isAnswerSubmitted}
                onClick={() => handleSelectOption(idx)}
                className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between gap-3 cursor-pointer ${cardStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {letter}
                  </span>
                  <span className="leading-relaxed">{option}</span>
                </div>

                {isAnswerSubmitted && isCorrectAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                )}
                {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                  <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Alert after submitting */}
        {isAnswerSubmitted && (
          <div
            className={`p-4 rounded-2xl border text-xs sm:text-sm animate-in fade-in duration-200 space-y-1 ${
              selectedOption === currentQ.correctAnswerIndex
                ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                : 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200'
            }`}
          >
            <div className="flex items-center gap-2 font-bold">
              <HelpCircle className="w-4 h-4 shrink-0" />
              <span>
                {selectedOption === currentQ.correctAnswerIndex
                  ? 'To‘g‘ri javob!'
                  : 'Noto‘g‘ri javob! To‘g‘ri javob: ' +
                    letterLabels[currentQ.correctAnswerIndex] +
                    ') ' +
                    currentQ.options[currentQ.correctAnswerIndex]}
              </span>
            </div>
            <p className="text-xs leading-relaxed opacity-90 pl-6">
              {currentQ.explanation}
            </p>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2">
          {!isAnswerSubmitted ? (
            <button
              disabled={selectedOption === null}
              onClick={handleSubmitAnswer}
              className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                selectedOption === null
                  ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
              }`}
            >
              <span>Javobni tasdiqlash</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>
                {currentIndex + 1 < questions.length
                  ? 'Keyingi savol'
                  : 'Natijani ko‘rish'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
