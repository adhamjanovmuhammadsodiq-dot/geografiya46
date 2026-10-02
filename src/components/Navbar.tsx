import React, { useState } from 'react';
import {
  Globe,
  BookOpen,
  CheckSquare,
  Map,
  Bookmark,
  Award,
  Search,
  Menu,
  X
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useProgress } from '../context/ProgressContext';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string, param?: string | number) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { stats } = useProgress();

  const navItems = [
    { id: 'home', label: 'Bosh sahifa', icon: Globe },
    { id: 'lessons', label: 'Darslar', icon: BookOpen, badge: '16' },
    { id: 'quizzes', label: 'Testlar', icon: CheckSquare },
    { id: 'map', label: 'Xarita', icon: Map },
    { id: 'dictionary', label: 'Lug‘at', icon: Bookmark },
    {
      id: 'progress',
      label: 'Mening natijalarim',
      icon: Award,
      badge: `${stats.overallProgress}%`
    }
  ];

  const handleTabClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-sky-600 to-emerald-500 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <Globe className="w-5 h-5 text-white animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
                  Geografiya
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/80 text-blue-700 dark:text-blue-300">
                  6-sinf
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                O‘zbekiston tabiati va xo‘jaligi
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                currentTab === item.id ||
                (item.id === 'lessons' && currentTab === 'lesson-detail') ||
                (item.id === 'quizzes' && currentTab === 'quiz-active');

              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive
                          ? 'bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center space-x-2">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-medium transition-colors"
              title="Qidiruv (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-slate-400" />
              <span className="hidden lg:inline">Qidiruv...</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 text-slate-400 rounded-md border border-slate-200 dark:border-slate-700">
                ⌘K
              </kbd>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="p-2 mb-2 bg-blue-50 dark:bg-blue-950/40 rounded-xl flex items-center justify-between text-xs text-blue-900 dark:text-blue-200">
            <span>O‘qish jarayoni:</span>
            <span className="font-bold">{stats.completedCount} / 16 dars tugatildi</span>
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              currentTab === item.id ||
              (item.id === 'lessons' && currentTab === 'lesson-detail') ||
              (item.id === 'quizzes' && currentTab === 'quiz-active');

            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-blue-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          {/* Mobile Theme Toggle Section */}
          <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between px-1">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              Interfeys rejimi:
            </span>
            <ThemeToggle />
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation Bar for effortless one-handed use */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-2 py-1.5 flex justify-around items-center">
        {navItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const isActive =
            currentTab === item.id ||
            (item.id === 'lessons' && currentTab === 'lesson-detail') ||
            (item.id === 'quizzes' && currentTab === 'quiz-active');

          return (
            <button
              key={`bottom-${item.id}`}
              onClick={() => handleTabClick(item.id)}
              className={`flex flex-col items-center py-1 px-2.5 rounded-lg text-[10px] font-medium transition-colors ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span>{item.id === 'home' ? 'Bosh sahifa' : item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
