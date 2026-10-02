import React, { useState, useMemo } from 'react';
import { BookOpen, Search, CheckCircle2, Clock, Filter, ArrowRight } from 'lucide-react';
import { LESSONS_DATA } from '../data/lessonsData';
import { useProgress } from '../context/ProgressContext';
import { ProgressBar } from '../components/ProgressBar';

interface LessonsPageProps {
  onSelectLesson: (id: number) => void;
}

export const LessonsPage: React.FC<LessonsPageProps> = ({ onSelectLesson }) => {
  const { progress } = useProgress();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Barchasi');

  const categories = useMemo(() => {
    const cats = new Set(LESSONS_DATA.map((l) => l.category));
    return ['Barchasi', ...Array.from(cats)];
  }, []);

  const filteredLessons = useMemo(() => {
    return LESSONS_DATA.filter((lesson) => {
      const matchesSearch =
        lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lesson.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lesson.keyTerms.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCat =
        selectedCategory === 'Barchasi' || lesson.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>O‘zbekiston geografiyasi bo‘yicha 16 ta asosiy mavzu</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            6-sinf geografiya darslari
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Har bir darsni diqqat bilan o‘rganib, test savollariga javob bering.
          </p>
        </div>

        {/* Learning progress count */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 shadow-xs min-w-56">
          <div className="flex justify-between items-center text-xs font-semibold mb-1">
            <span className="text-slate-600 dark:text-slate-400">O‘rganilgan darslar:</span>
            <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">
              {progress.completedLessonIds.length} / {LESSONS_DATA.length}
            </span>
          </div>
          <ProgressBar
            value={Math.round((progress.completedLessonIds.length / LESSONS_DATA.length) * 100)}
            size="sm"
            color="green"
          />
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Dars nomi yoki mavzuni qidiring..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>

        {/* Category selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Lessons List Grid */}
      {filteredLessons.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
          <p className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
            Dars topilmadi
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
            Qidiruv so‘zini o‘zgartiring yoki filterni tozalang.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('Barchasi');
            }}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700"
          >
            Filtrlarni tozalash
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredLessons.map((lesson) => {
            const isCompleted = progress.completedLessonIds.includes(lesson.id);
            const isCurrent = progress.currentLessonId === lesson.id;

            return (
              <div
                key={lesson.id}
                className={`bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-200 p-5 flex flex-col justify-between shadow-xs hover:shadow-md ${
                  isCurrent
                    ? 'border-blue-500 ring-2 ring-blue-500/20 dark:ring-blue-500/30'
                    : isCompleted
                    ? 'border-emerald-200 dark:border-emerald-950/60'
                    : 'border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                      {lesson.order}-dars
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {lesson.durationMinutes} daq
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          lesson.difficulty === 'Oson'
                            ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                            : lesson.difficulty === 'O‘rtacha'
                            ? 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                            : 'bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                        }`}
                      >
                        {lesson.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug line-clamp-1">
                    {lesson.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
                    {lesson.shortDescription}
                  </p>

                  {/* Key tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {lesson.keyTerms.slice(0, 3).map((term) => (
                      <span
                        key={term}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        #{term}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer and button */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400">Holat:</span>
                    {isCompleted ? (
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        O‘zlashtirildi
                      </span>
                    ) : (
                      <span className="text-slate-500 font-medium">Boshlanmagan</span>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectLesson(lesson.id)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isCompleted
                        ? 'bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-600 text-slate-700 dark:text-slate-200'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs'
                    }`}
                  >
                    <span>Darsni ochish</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
