import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useProgress();

  return (
    <div
      className={`inline-flex items-center p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-xs transition-colors ${className}`}
      role="group"
      aria-label="Mavzuni tanlash"
    >
      <button
        type="button"
        onClick={() => {
          if (theme !== 'light') toggleTheme();
        }}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
          theme === 'light'
            ? 'bg-white text-amber-600 shadow-xs'
            : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'
        }`}
        title="Yorug‘ rejim (☀️)"
        aria-pressed={theme === 'light'}
      >
        <Sun className={`w-3.5 h-3.5 ${theme === 'light' ? 'text-amber-500 fill-amber-500' : ''}`} />
        <span className="text-[11px] font-semibold">Yorug‘</span>
      </button>

      <button
        type="button"
        onClick={() => {
          if (theme !== 'dark') toggleTheme();
        }}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
          theme === 'dark'
            ? 'bg-slate-900 text-blue-400 shadow-xs ring-1 ring-slate-700'
            : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'
        }`}
        title="Qorong‘i rejim (🌙)"
        aria-pressed={theme === 'dark'}
      >
        <Moon className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-blue-400 fill-blue-400' : ''}`} />
        <span className="text-[11px] font-semibold">Qorong‘i</span>
      </button>
    </div>
  );
};
