import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckSquare,
  CheckCircle2,
  Bookmark,
  Lightbulb,
  Clock,
  BookOpen,
  Share2,
  Sparkles
} from 'lucide-react';
import { LESSONS_DATA } from '../data/lessonsData';
import { useProgress } from '../context/ProgressContext';
import { ProgressBar } from '../components/ProgressBar';

interface LessonDetailPageProps {
  lessonId: number;
  onNavigateBack: () => void;
  onSelectLesson: (id: number) => void;
  onStartQuiz: (lessonId: number) => void;
  onNavigateToTerm: (term: string) => void;
}

export const LessonDetailPage: React.FC<LessonDetailPageProps> = ({
  lessonId,
  onNavigateBack,
  onSelectLesson,
  onStartQuiz,
  onNavigateToTerm
}) => {
  const { progress, markLessonComplete, setCurrentLesson } = useProgress();
  const [scrollProgress, setScrollProgress] = useState(25);
  const [copied, setCopied] = useState(false);

  const lesson = LESSONS_DATA.find((l) => l.id === lessonId) || LESSONS_DATA[0];
  const isCompleted = progress.completedLessonIds.includes(lesson.id);

  const prevLesson = LESSONS_DATA.find((l) => l.id === lesson.id - 1);
  const nextLesson = LESSONS_DATA.find((l) => l.id === lesson.id + 1);

  useEffect(() => {
    setCurrentLesson(lesson.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setScrollProgress(isCompleted ? 100 : 45);
  }, [lesson.id, isCompleted, setCurrentLesson]);

  const handleCompleteAndNext = () => {
    markLessonComplete(lesson.id);
    setScrollProgress(100);
    if (nextLesson) {
      onSelectLesson(nextLesson.id);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300 pb-16">
      {/* Top back navigation & action bar */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onNavigateBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Darslarga qaytish</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors text-xs flex items-center gap-1.5"
            title="Dars havolasini nusxalash"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">{copied ? 'Nusxalandi!' : 'Ulashish'}</span>
          </button>

          <button
            onClick={() => onStartQuiz(lesson.id)}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
          >
            <CheckSquare className="w-4 h-4" />
            <span>Testni boshlash</span>
          </button>
        </div>
      </div>

      {/* Lesson Header Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
              {lesson.order}-dars
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {lesson.category}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {lesson.durationMinutes} daqiqa
            </span>
            <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300">
              {lesson.difficulty}
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {lesson.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-l-4 border-blue-500 pl-4 py-1 italic">
          {lesson.shortDescription}
        </p>

        {/* Progress indicator */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <ProgressBar
            value={isCompleted ? 100 : scrollProgress}
            label={isCompleted ? 'Dars to‘liq o‘rganilgan' : 'Dars progressi:'}
            color={isCompleted ? 'green' : 'blue'}
            showLabel
          />
        </div>
      </div>

      {/* Learning Objectives Box */}
      <div className="bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-900/50 rounded-2xl p-6 space-y-3">
        <div className="flex items-center gap-2 text-blue-800 dark:text-blue-300">
          <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="text-sm font-bold uppercase tracking-wider">
            Darsning asosiy maqsadlari
          </h2>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          {lesson.objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-blue-200 dark:bg-blue-900/80 text-blue-800 dark:text-blue-200 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="leading-relaxed">{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Lesson Explanation Sections */}
      <div className="space-y-6">
        {lesson.sections.map((section, idx) => (
          <article
            key={idx}
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <span className="w-2 h-6 bg-blue-600 rounded-full" />
              <span>{section.heading}</span>
            </h3>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {section.content}
            </p>

            {section.subpoints && (
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 mt-3 border border-slate-200/60 dark:border-slate-700/60">
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {section.subpoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">•</span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Key Facts Section */}
      <div className="bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300">
          <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <h3 className="text-base font-bold">Muhim faktlar</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {lesson.keyFacts.map((fact, idx) => (
            <div
              key={idx}
              className="bg-white/80 dark:bg-slate-900/80 p-3.5 rounded-xl border border-amber-200/50 dark:border-amber-900/50 text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-start gap-2.5"
            >
              <span className="text-amber-600 font-bold">✓</span>
              <span>{fact}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Terms to Explore */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Ushbu darsning asosiy atamalari
            </h3>
          </div>
          <span className="text-xs text-slate-500">Lug‘atdan bilib oling</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {lesson.keyTerms.map((term) => (
            <button
              key={term}
              onClick={() => onNavigateToTerm(term)}
              className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>{term}</span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400">↗</span>
            </button>
          ))}
        </div>
      </div>

      {/* Summary Box */}
      <div className="bg-slate-100 dark:bg-slate-800/80 rounded-2xl p-6 text-center space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Xulosa
        </p>
        <p className="text-sm font-medium text-slate-800 dark:text-slate-200 max-w-xl mx-auto">
          {lesson.summary}
        </p>
      </div>

      {/* Bottom Completion & Navigation Buttons */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => markLessonComplete(lesson.id)}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              isCompleted
                ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? 'Dars o‘zlashtirildi (Saqlangan)' : 'Darsni tugatdim deb belgilash'}</span>
          </button>

          <button
            onClick={() => onStartQuiz(lesson.id)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <CheckSquare className="w-4 h-4" />
            <span>Testni boshlash</span>
          </button>
        </div>

        {/* Previous and Next Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          {prevLesson ? (
            <button
              onClick={() => onSelectLesson(prevLesson.id)}
              className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-3 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-slate-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">
                  Oldingi dars
                </span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate block">
                  {prevLesson.title}
                </span>
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextLesson && (
            <button
              onClick={handleCompleteAndNext}
              className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 text-right hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-end gap-3 cursor-pointer ml-auto w-full"
            >
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">
                  Keyingi dars
                </span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate block">
                  {nextLesson.title}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
