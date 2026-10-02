import React, { useState } from 'react';
import {
  Award,
  BookOpen,
  CheckSquare,
  TrendingUp,
  RotateCcw,
  Sparkles,
  Calendar,
  CheckCircle2,
  XCircle,
  User,
  Edit2,
  Check
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { ProgressBar } from '../components/ProgressBar';
import { LESSONS_DATA } from '../data/lessonsData';

interface ProgressPageProps {
  onGoToLesson: (id: number) => void;
  onGoToQuiz: () => void;
}

export const ProgressPage: React.FC<ProgressPageProps> = ({
  onGoToLesson,
  onGoToQuiz
}) => {
  const { progress, stats, badges, resetProgress, updateUserName } = useProgress();
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(progress.userName);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleSaveName = () => {
    updateUserName(nameInput);
    setIsEditingName(false);
  };

  const handleConfirmReset = () => {
    resetProgress();
    setShowResetConfirm(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-16 max-w-5xl mx-auto">
      {/* Student Profile Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
            🎓
          </div>
          <div>
            <div className="flex items-center gap-2">
              {isEditingName ? (
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="text-base sm:text-lg font-bold px-2 py-0.5 border rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                  <button
                    onClick={handleSaveName}
                    className="p-1 rounded-lg bg-emerald-600 text-white text-xs"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {progress.userName}
                  </h1>
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    title="Ismni o‘zgartirish"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              6-sinf o‘quvchisi • Geografiya kursi ishtirokchisi
            </p>
          </div>
        </div>

        {/* Reset progress toggle */}
        <div>
          {showResetConfirm ? (
            <div className="flex items-center gap-2 bg-rose-50 dark:bg-rose-950/40 p-2 rounded-xl border border-rose-200 dark:border-rose-900">
              <span className="text-xs text-rose-700 dark:text-rose-300 font-semibold">
                Barcha natijalar o‘chirilsinmi?
              </span>
              <button
                onClick={handleConfirmReset}
                className="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-xs font-bold"
              >
                Ha
              </button>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-2.5 py-1 rounded-lg bg-slate-200 text-slate-700 text-xs font-bold"
              >
                Yo‘q
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="text-xs text-slate-400 hover:text-rose-600 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Natijalarni tozalash</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Statistics Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Darslar */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Darslar</span>
            <BookOpen className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-2xl font-black text-slate-900 dark:text-white font-mono">
            {stats.completedCount} / {stats.totalLessons}
          </p>
          <ProgressBar value={stats.lessonsPercentage} size="sm" color="blue" />
        </div>

        {/* Testlar */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Testlar</span>
            <CheckSquare className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl font-black text-slate-900 dark:text-white font-mono">
            {stats.totalQuizzes} ta
          </p>
          <p className="text-[11px] text-slate-400">
            Eng yuqori: <strong className="text-emerald-600">{stats.bestScore}%</strong>
          </p>
        </div>

        {/* O‘rtacha natija */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>O‘rtacha natija</span>
            <Award className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-2xl font-black text-amber-500 font-mono">
            {stats.averageScore}%
          </p>
          <p className="text-[11px] text-slate-400">Barcha testlar bo‘yicha</p>
        </div>

        {/* Umumiy progress */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Umumiy progress</span>
            <TrendingUp className="w-4 h-4 text-indigo-500" />
          </div>
          <p className="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
            {stats.overallProgress}%
          </p>
          <ProgressBar value={stats.overallProgress} size="sm" color="green" />
        </div>
      </div>

      {/* Badges / Yutuqlar Section */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Yutuqlar va nishonlar
            </h2>
          </div>
          <span className="text-xs text-slate-500">
            {badges.filter((b) => b.unlocked).length} / {badges.length} ochilgan
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`p-4 rounded-2xl border text-center transition-all ${
                badge.unlocked
                  ? 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/40 text-slate-900 dark:text-white shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-50 grayscale'
              }`}
            >
              <div className="text-3xl mb-2">{badge.icon}</div>
              <h3 className="text-xs font-bold leading-tight mb-1">{badge.title}</h3>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-snug">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Completed Lessons Checklist */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Darslarni o‘zlashtirish jadvali
            </h2>
          </div>
          <span className="text-xs font-mono font-bold text-blue-600">
            {stats.completedCount} / 16 dars
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {LESSONS_DATA.map((lesson) => {
            const isDone = progress.completedLessonIds.includes(lesson.id);
            return (
              <div
                key={lesson.id}
                onClick={() => onGoToLesson(lesson.id)}
                className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                  isDone
                    ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50 text-slate-900 dark:text-white'
                    : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-400'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="w-5 h-5 rounded-md text-[11px] font-mono font-bold bg-white dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                    {lesson.order}
                  </span>
                  <span className="text-xs font-semibold truncate">{lesson.title}</span>
                </div>
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                ) : (
                  <span className="text-[10px] text-slate-400 shrink-0 ml-2">Boshlash →</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Quiz History Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Testlar tarixi
            </h2>
          </div>
          {progress.quizResults.length > 0 && (
            <button
              onClick={onGoToQuiz}
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              Yangi test ishlash
            </button>
          )}
        </div>

        {progress.quizResults.length === 0 ? (
          <div className="text-center py-8 bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-6">
            <p className="text-xs text-slate-500 mb-3">
              Hali birorta test topshirilmadi. Birinchi testni boshlab, bilimlaringizni sinab ko‘ring!
            </p>
            <button
              onClick={onGoToQuiz}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
            >
              Test topshirish
            </button>
          </div>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800 overflow-x-auto">
            {progress.quizResults.map((result) => {
              const formattedDate = new Date(result.date).toLocaleDateString('uz-UZ', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              });

              return (
                <div
                  key={result.id}
                  className="py-3 flex items-center justify-between gap-4 text-xs"
                >
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 dark:text-white truncate">
                      {result.lessonTitle || 'Tasodifiy test'}
                    </p>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <Calendar className="w-3 h-3" />
                      <span>{formattedDate}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 font-mono">
                    <div className="text-right">
                      <span className="text-emerald-600 font-bold">{result.correctCount} to‘g‘ri</span>
                      <span className="text-slate-400 mx-1">/</span>
                      <span className="text-slate-500">{result.totalQuestions} jami</span>
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded-lg font-bold text-xs ${
                        result.percentage >= 80
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                          : result.percentage >= 60
                          ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                          : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                      }`}
                    >
                      {result.percentage}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
