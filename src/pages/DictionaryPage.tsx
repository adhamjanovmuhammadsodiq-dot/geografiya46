import React, { useState, useMemo } from 'react';
import { Bookmark, Search, Filter, BookOpen, Volume2, ArrowRight } from 'lucide-react';
import { TERMS_DATA } from '../data/termsData';
import { Term } from '../types';

interface DictionaryPageProps {
  initialSearch?: string;
  onNavigateToLesson?: (lessonId: number) => void;
}

export const DictionaryPage: React.FC<DictionaryPageProps> = ({
  initialSearch = '',
  onNavigateToLesson
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>('Barchasi');
  const [selectedLetter, setSelectedLetter] = useState<string>('Barchasi');

  const categories = useMemo(() => {
    const set = new Set(TERMS_DATA.map((t) => t.category));
    return ['Barchasi', ...Array.from(set)];
  }, []);

  // Available unique starting letters
  const letters = useMemo(() => {
    const set = new Set(TERMS_DATA.map((t) => t.term[0].toUpperCase()));
    return ['Barchasi', ...Array.from(set).sort()];
  }, []);

  const filteredTerms = useMemo(() => {
    return TERMS_DATA.filter((item) => {
      const q = searchTerm.toLowerCase();
      const matchesSearch =
        item.term.toLowerCase().includes(q) || item.definition.toLowerCase().includes(q);

      const matchesCat =
        selectedCategory === 'Barchasi' || item.category === selectedCategory;

      const matchesLetter =
        selectedLetter === 'Barchasi' || item.term[0].toUpperCase() === selectedLetter;

      return matchesSearch && matchesCat && matchesLetter;
    });
  }, [searchTerm, selectedCategory, selectedLetter]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-semibold mb-2">
          <Bookmark className="w-3.5 h-3.5" />
          <span>Geografik terminlar va tushunchalar</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Geografik lug‘at
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          6-sinf darsligidagi barcha muhim geografik atamalar, ularning sodda ta’riflari va hayotiy misollari.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Atamani yoki tushunchani qidiring (masalan: atmosfera, iqlim, relyef)..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-xs"
          />
        </div>

        {/* Categories selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Alphabet bar */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none pt-1">
          <span className="text-[11px] font-bold text-slate-400 mr-1 hidden sm:inline">
            Alifbo:
          </span>
          {letters.map((char) => (
            <button
              key={char}
              onClick={() => setSelectedLetter(char)}
              className={`px-2 py-1 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
                selectedLetter === char
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {char}
            </button>
          ))}
        </div>
      </div>

      {/* Terms Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>Ko‘rsatilmoqda: <strong>{filteredTerms.length}</strong> ta atama</span>
        {(searchTerm || selectedCategory !== 'Barchasi' || selectedLetter !== 'Barchasi') && (
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('Barchasi');
              setSelectedLetter('Barchasi');
            }}
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            Filtrlarni tozalash
          </button>
        )}
      </div>

      {/* Terms Grid */}
      {filteredTerms.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-xs">
          <Bookmark className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
            Atama topilmadi
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Kiritilgan so‘rov bo‘yicha lug‘atdan natija chiqmadi. Boshqa atamani qidiring.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTerms.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 shadow-xs hover:border-purple-300 dark:hover:border-purple-800 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                    {item.term}
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                    {item.category}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                  {item.definition}
                </p>

                {item.example && (
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-800 dark:text-slate-200 font-semibold block text-[11px] mb-0.5">
                      💡 Misol:
                    </strong>
                    {item.example}
                  </div>
                )}
              </div>

              {item.relatedLessonId && onNavigateToLesson && (
                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <button
                    onClick={() => onNavigateToLesson(item.relatedLessonId!)}
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Tegishli darsni ochish</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
