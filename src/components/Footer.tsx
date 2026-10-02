import React from 'react';
import { Globe, Heart, BookOpen, CheckSquare, Map, Bookmark, Award } from 'lucide-react';

export const Footer: React.FC<{
  onNavigate: (tab: string) => void;
}> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-12 pb-24 md:pb-12 mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Globe className="w-4 h-4" />
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                Geografiya O‘zbekiston — 6-sinf
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              6-sinf o‘quvchilari uchun interaktiv geografiya platformasi. O‘zbekistonning tabiiy boyliklari, relyefi, daryolari, iqlimi va ma’muriy hududlarini qiziqarli o‘rganing.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              O‘zbekiston umumta’lim dasturi asosida tuzilgan
            </div>
          </div>

          {/* Sahifalar */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Asosiy bo‘limlar
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Bosh sahifa</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('lessons')}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Darslar (16 ta)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quizzes')}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <CheckSquare className="w-3.5 h-3.5" />
                  <span>Testlar va viktorinalar</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('map')}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <Map className="w-3.5 h-3.5" />
                  <span>Interaktiv xarita</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Qo‘shimcha manbalar */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Foydali sahifalar
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('dictionary')}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Geografik lug‘at</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('progress')}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Mening natijalarim</span>
                </button>
              </li>
              <li>
                <span className="text-slate-400 dark:text-slate-500 text-[11px] block mt-2">
                  Dastur tili: O‘zbek tili (Lotin alifbosi)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} Geografiya O‘zbekiston — 6-sinf ta’lim portali.</p>
          <p className="flex items-center gap-1">
            <span>O‘zbekiston yoshlari uchun mehr bilan yaratilgan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
