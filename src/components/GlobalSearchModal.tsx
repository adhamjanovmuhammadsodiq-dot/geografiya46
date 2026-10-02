import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Bookmark, MapPin, ArrowRight } from 'lucide-react';
import { apiService } from '../services/api';
import { SearchResult } from '../types';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Search effect with debounce
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await apiService.search(query);
        setResults(res);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden transition-all animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 dark:border-slate-800 gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Darslar, geografik atamalar yoki hududlarni qidiring..."
            className="flex-1 bg-transparent text-sm sm:text-base text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200"
          >
            Esc
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-96 overflow-y-auto p-3">
          {loading && (
            <div className="py-8 text-center text-xs text-slate-500">
              Qidirilmoqda...
            </div>
          )}

          {!loading && query.trim() && results.length === 0 && (
            <div className="py-10 text-center">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Hech narsa topilmadi.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Boshqa so‘z yoki atama kiritib ko‘ring (masalan: "relyef", "iqlim", "samarqand", "daryo").
              </p>
            </div>
          )}

          {!loading && !query.trim() && (
            <div className="py-6 px-3 text-left">
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                Tavsiya etilgan mavzular
              </p>
              <div className="flex flex-wrap gap-2">
                {['O‘zbekiston relyefi', 'Iqlim', 'Amudaryo', 'Muruntov', 'Farg‘ona', 'Aydarko‘l', 'Bo‘z tuproq'].map(
                  (suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setQuery(suggestion)}
                      className="text-xs px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-700 transition-colors"
                    >
                      {suggestion}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {!loading && results.length > 0 && (
            <div className="space-y-1">
              {results.map((item, idx) => {
                const getIcon = () => {
                  switch (item.type) {
                    case 'lesson':
                      return <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
                    case 'term':
                      return <Bookmark className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
                    case 'region':
                      return <MapPin className="w-4 h-4 text-amber-500 dark:text-amber-400" />;
                  }
                };

                const getBadge = () => {
                  switch (item.type) {
                    case 'lesson':
                      return <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">Dars</span>;
                    case 'term':
                      return <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">Atama</span>;
                    case 'region':
                      return <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">Xarita</span>;
                  }
                };

                return (
                  <button
                    key={`${item.type}-${item.id}-${idx}`}
                    onClick={() => {
                      onNavigate(item.link);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="mt-0.5 p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 group-hover:scale-105 transition-transform">
                        {getIcon()}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                            {item.title}
                          </p>
                          {getBadge()}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
