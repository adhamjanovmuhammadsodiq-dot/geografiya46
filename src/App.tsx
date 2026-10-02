import React, { useState, useEffect } from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { LessonsPage } from './pages/LessonsPage';
import { LessonDetailPage } from './pages/LessonDetailPage';
import { QuizzesPage } from './pages/QuizzesPage';
import { QuizActivePage } from './pages/QuizActivePage';
import { MapPage } from './pages/MapPage';
import { DictionaryPage } from './pages/DictionaryPage';
import { ProgressPage } from './pages/ProgressPage';

function AppContent() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [activeLessonId, setActiveLessonId] = useState<number>(1);
  const [activeMapRegionId, setActiveMapRegionId] = useState<string | undefined>(undefined);
  const [dictionarySearch, setDictionarySearch] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Active quiz parameters
  const [quizParams, setQuizParams] = useState<{
    lessonId?: number;
    isRandom?: boolean;
    questionCount?: number;
  }>({ isRandom: false, questionCount: 5 });

  // Sync with browser back/forward or hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      const [route, param] = hash.split('/');
      if (['home', 'lessons', 'quizzes', 'map', 'dictionary', 'progress'].includes(route)) {
        setCurrentTab(route);
      } else if (route === 'lesson' && param) {
        setActiveLessonId(parseInt(param, 10) || 1);
        setCurrentTab('lesson-detail');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (tab: string, param?: string | number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (tab === 'lesson-detail' && typeof param === 'number') {
      setActiveLessonId(param);
      setCurrentTab('lesson-detail');
      window.location.hash = `lesson/${param}`;
      return;
    }

    if (tab === 'quiz-active') {
      setCurrentTab('quiz-active');
      return;
    }

    if (tab === 'map') {
      if (typeof param === 'string') {
        setActiveMapRegionId(param);
      }
      setCurrentTab('map');
      window.location.hash = 'map';
      return;
    }

    if (tab === 'dictionary') {
      if (typeof param === 'string') {
        setDictionarySearch(param);
      }
      setCurrentTab('dictionary');
      window.location.hash = 'dictionary';
      return;
    }

    setCurrentTab(tab);
    window.location.hash = tab;
  };

  const handleStartQuiz = (lessonId?: number, isRandom = false, questionCount = 5) => {
    setQuizParams({ lessonId, isRandom, questionCount });
    setCurrentTab('quiz-active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchResultClick = (link: string) => {
    if (link.startsWith('/lessons/')) {
      const id = parseInt(link.replace('/lessons/', ''), 10);
      handleNavigate('lesson-detail', id);
    } else if (link.startsWith('/dictionary?term=')) {
      const term = decodeURIComponent(link.replace('/dictionary?term=', ''));
      handleNavigate('dictionary', term);
    } else if (link.startsWith('/map?region=')) {
      const regId = link.replace('/map?region=', '');
      handleNavigate('map', regId);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Top Main Navigation */}
      <Navbar
        currentTab={currentTab}
        onNavigate={(tab) => handleNavigate(tab)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={(tab, param) => handleNavigate(tab, param)}
          />
        )}

        {currentTab === 'lessons' && (
          <LessonsPage
            onSelectLesson={(id) => handleNavigate('lesson-detail', id)}
          />
        )}

        {currentTab === 'lesson-detail' && (
          <LessonDetailPage
            lessonId={activeLessonId}
            onNavigateBack={() => handleNavigate('lessons')}
            onSelectLesson={(id) => handleNavigate('lesson-detail', id)}
            onStartQuiz={(id) => handleStartQuiz(id, false, 5)}
            onNavigateToTerm={(term) => handleNavigate('dictionary', term)}
          />
        )}

        {currentTab === 'quizzes' && (
          <QuizzesPage
            onStartQuiz={(lId, isRand, count) => handleStartQuiz(lId, isRand, count)}
          />
        )}

        {currentTab === 'quiz-active' && (
          <QuizActivePage
            lessonId={quizParams.lessonId}
            isRandom={quizParams.isRandom}
            questionCount={quizParams.questionCount}
            onFinishQuiz={() => handleNavigate('progress')}
            onBackToQuizzes={() => handleNavigate('quizzes')}
            onGoToLesson={(id) => handleNavigate('lesson-detail', id)}
          />
        )}

        {currentTab === 'map' && (
          <MapPage initialRegionId={activeMapRegionId} />
        )}

        {currentTab === 'dictionary' && (
          <DictionaryPage
            initialSearch={dictionarySearch}
            onNavigateToLesson={(lId) => handleNavigate('lesson-detail', lId)}
          />
        )}

        {currentTab === 'progress' && (
          <ProgressPage
            onGoToLesson={(id) => handleNavigate('lesson-detail', id)}
            onGoToQuiz={() => handleNavigate('quizzes')}
          />
        )}
      </main>

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleSearchResultClick}
      />

      {/* Educational Footer */}
      <Footer onNavigate={(tab) => handleNavigate(tab)} />
    </div>
  );
}

export default function App() {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
}
