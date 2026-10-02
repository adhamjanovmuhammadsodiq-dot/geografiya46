import React, { useState } from 'react';
import {
  CheckSquare,
  Sparkles,
  Shuffle,
  BookOpen,
  ArrowRight,
  Award,
  Zap,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { LESSONS_DATA } from '../data/lessonsData';
import { useProgress } from '../context/ProgressContext';

interface QuizzesPageProps {
  onStartQuiz: (lessonId?: number, isRandom?: boolean, questionCount?: number) => void;
}

export const QuizzesPage: React.FC<QuizzesPageProps> = ({ onStartQuiz }) => {
  const { progress } = useProgress();
  const [randomCount, setRandomCount] = useState<number>(10);

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-2">
          <CheckSquare className="w-3.5 h-3.5" />
          <span>Interaktiv bilim sinovi</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Geografiya testlari
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          O‘rgangan mavzulardan mustahkamlovchi testlarni ishlang yoki tasodifiy universal test orqali o‘z bilimingizni baholang.
        </p>
      </div>

      {/* Hero: "Tasodifiy test" Feature Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 text-white p-6 sm:p-8 shadow-lg">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-amber-200 backdrop-blur-xs">
            <Zap className="w-3.5 h-3.5" />
            <span>Eng mashhur rejim</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black">
            Tasodifiy umumiy test
          </h2>

          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            Barcha 16 ta darsdagi 80 dan ortiq savollardan saralab olingan tasodifiy test. Har gal yangi savollar va yangi variantlar ketma-ketligi!
          </p>

          {/* Question count selector */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="text-xs font-semibold text-blue-100">Savollar soni:</span>
            {[5, 10, 15, 20].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setRandomCount(count)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  randomCount === count
                    ? 'bg-white text-blue-700 shadow-md scale-105'
                    : 'bg-white/15 text-white hover:bg-white/25'
                }`}
              >
                {count} ta savol
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => onStartQuiz(undefined, true, randomCount)}
              className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-sm shadow-md hover:shadow-xl hover:scale-102 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Shuffle className="w-4 h-4" />
              <span>Tasodifiy testni boshlash ({randomCount} savol)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Section: Lesson-by-lesson Quizzes */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Darslar bo‘yicha testlar
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Har bir dars bo‘yicha 5 tadan tuzilgan aniq savollar to‘plami
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LESSONS_DATA.map((lesson) => {
            // Find student's best score for this lesson
            const lessonResults = progress.quizResults.filter(
              (r) => r.lessonId === lesson.id
            );
            const bestScore =
              lessonResults.length > 0
                ? Math.max(...lessonResults.map((r) => r.percentage))
                : null;

            return (
              <div
                key={lesson.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 flex flex-col justify-between shadow-xs hover:border-blue-400 dark:hover:border-blue-500 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      {lesson.order}-mavzu testi
                    </span>
                    {bestScore !== null ? (
                      <span
                        className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md flex items-center gap-1 ${
                          bestScore >= 80
                            ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                            : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                        }`}
                      >
                        <Award className="w-3 h-3" />
                        {bestScore}%
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-400 font-medium">Topshirilmagan</span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1 mb-1.5 group-hover:text-blue-600 transition-colors">
                    {lesson.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                    {lesson.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    5 ta savol
                  </span>

                  <button
                    onClick={() => onStartQuiz(lesson.id, false, 5)}
                    className="px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-600 dark:bg-blue-950 text-blue-700 hover:text-white dark:text-blue-300 dark:hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Testni boshlash</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
