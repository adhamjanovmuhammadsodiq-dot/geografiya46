import React from 'react';
import {
  BookOpen,
  CheckSquare,
  Map,
  Bookmark,
  Award,
  ArrowRight,
  Sparkles,
  Compass,
  TrendingUp,
  Mountain,
  Sun,
  ShieldCheck
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { ProgressBar } from '../components/ProgressBar';
import { LESSONS_DATA } from '../data/lessonsData';

interface HomePageProps {
  onNavigate: (tab: string, param?: string | number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { progress, stats } = useProgress();

  const currentLesson =
    LESSONS_DATA.find((l) => l.id === progress.currentLessonId) || LESSONS_DATA[0];

  const featuredLessons = LESSONS_DATA.slice(0, 4);

  return (
    <div className="space-y-12 pb-8 animate-in fade-in duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-sky-600 to-teal-700 text-white p-6 sm:p-10 lg:p-14 shadow-xl">
        {/* Background decorative circles */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-blue-50 border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>6-sinf o‘quvchilari uchun maxsus dastur</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Geografiya O‘zbekiston — 6-sinf
          </h1>

          <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal">
            O‘zbekiston geografiyasini oson, qiziqarli va interaktiv tarzda o‘rganing. Darslarni o‘qing, bilimingizni testlarda sinang va interaktiv xaritada vatanimiz bo‘ylab sayohat qiling.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('lessons')}
              className="px-6 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Darslarni boshlash</span>
            </button>
            <button
              onClick={() => onNavigate('quizzes')}
              className="px-6 py-3.5 rounded-xl bg-blue-900/60 hover:bg-blue-900/80 text-white font-bold text-sm border border-white/20 backdrop-blur-xs hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
            >
              <CheckSquare className="w-4 h-4 text-emerald-400" />
              <span>Test ishlash</span>
            </button>
            <button
              onClick={() => onNavigate('map')}
              className="px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/10 transition-colors flex items-center gap-1.5"
            >
              <Map className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Xaritani ko‘rish</span>
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          onClick={() => onNavigate('lessons')}
          className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-blue-400 dark:hover:border-blue-500 transition-all cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-slate-900 dark:text-white font-mono">16</p>
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">📚 Darslar</p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">To‘liq mavzular to‘plami</p>
        </div>

        <div
          onClick={() => onNavigate('quizzes')}
          className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-emerald-400 dark:hover:border-emerald-500 transition-all cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <CheckSquare className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-slate-900 dark:text-white font-mono">80+</p>
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">📝 Testlar</p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">Interaktiv savollar bazasi</p>
        </div>

        <div
          onClick={() => onNavigate('map')}
          className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-amber-400 dark:hover:border-amber-500 transition-all cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Map className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-slate-900 dark:text-white font-mono">14</p>
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">🗺️ Xarita</p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">Viloyatlar va shaharlar</p>
        </div>

        <div
          onClick={() => onNavigate('dictionary')}
          className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-purple-400 dark:hover:border-purple-500 transition-all cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Bookmark className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-slate-900 dark:text-white font-mono">35+</p>
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">📖 Geografik atamalar</p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">Izohli lug‘at qidiruvi</p>
        </div>
      </section>

      {/* "Davom etish" (Continue Learning) Section */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Davom etish
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Siz to‘xtagan joyingizdan o‘rganishni davom ettiring
            </p>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-xs text-slate-500 dark:text-slate-400">Umumiy ko‘rsatkich:</span>
            <div className="text-base font-extrabold text-blue-600 dark:text-blue-400 font-mono">
              Progress: {stats.overallProgress}%
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
          {/* Last read / current lesson */}
          <div className="lg:col-span-2 bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Oxirgi o‘qilgan dars
                </span>
                <span className="text-xs px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-medium">
                  {currentLesson.order}-dars
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                {currentLesson.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                {currentLesson.shortDescription}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <ProgressBar
                value={progress.completedLessonIds.includes(currentLesson.id) ? 100 : 40}
                label={
                  progress.completedLessonIds.includes(currentLesson.id)
                    ? 'Dars o‘rganilgan'
                    : 'Dars o‘rganilmoqda'
                }
                color={progress.completedLessonIds.includes(currentLesson.id) ? 'green' : 'blue'}
              />
              <button
                onClick={() => onNavigate('lesson-detail', currentLesson.id)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Darsni ochish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick learning status card */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                O‘quvchi natijalari
              </h4>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 dark:text-slate-400">Tugatilgan darslar:</span>
                <span className="font-bold text-slate-900 dark:text-white font-mono">
                  {stats.completedCount} / {stats.totalLessons}
                </span>
              </div>
              <ProgressBar value={stats.lessonsPercentage} size="sm" color="blue" />

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 dark:text-slate-400">Ishlangan testlar:</span>
                <span className="font-bold text-slate-900 dark:text-white font-mono">
                  {stats.totalQuizzes} ta
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 dark:text-slate-400">O‘rtacha natija:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                  {stats.averageScore}%
                </span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('progress')}
              className="mt-4 w-full py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span>Barcha yutuqlar</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Lessons Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Boshlang‘ich darslar
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              O‘zbekiston geografiyasining asosiy boblari
            </p>
          </div>
          <button
            onClick={() => onNavigate('lessons')}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>Barcha darslar ({LESSONS_DATA.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredLessons.map((lesson) => {
            const isCompleted = progress.completedLessonIds.includes(lesson.id);
            return (
              <div
                key={lesson.id}
                onClick={() => onNavigate('lesson-detail', lesson.id)}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 flex flex-col justify-between shadow-xs hover:border-blue-500/60 dark:hover:border-blue-500/60 hover:shadow-md transition-all cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                      {lesson.order}-dars
                    </span>
                    {isCompleted ? (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        O‘qilgan
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold text-slate-400">
                        {lesson.difficulty}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1 mb-1.5">
                    {lesson.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {lesson.shortDescription}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                  <span>{lesson.durationMinutes} daqiqa</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Ochish →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Features Callouts */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Interactive Map Callout */}
        <div
          onClick={() => onNavigate('map')}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white p-6 sm:p-8 cursor-pointer group shadow-md"
        >
          <div className="relative z-10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Compass className="w-5 h-5 text-emerald-200" />
            </div>
            <h3 className="text-xl font-extrabold">O‘zbekiston interaktiv xaritasi</h3>
            <p className="text-xs text-emerald-100 leading-relaxed max-w-sm">
              12 ta viloyat, Qoraqalpog‘iston Respublikasi va Toshkent shahrini bosib ko‘ring. Tabiiy boyliklari, daryolari va qiziqarli joylarini bilib oling.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
              <span>Xaritani ochish</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Random Quiz Callout */}
        <div
          onClick={() => onNavigate('quizzes')}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 to-indigo-700 text-white p-6 sm:p-8 cursor-pointer group shadow-md"
        >
          <div className="relative z-10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Sun className="w-5 h-5 text-amber-300" />
            </div>
            <h3 className="text-xl font-extrabold">Tasodifiy test sinovi</h3>
            <p className="text-xs text-sky-100 leading-relaxed max-w-sm">
              Barcha mavzular bo‘yicha aralash savollardan tashkil topgan testni boshlang va bilimingizni mustahkamlang.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
              <span>Tasodifiy test boshlash</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
