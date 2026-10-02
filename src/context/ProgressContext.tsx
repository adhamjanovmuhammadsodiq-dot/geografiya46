import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { QuizResult, UserProgress } from '../types';
import { apiService } from '../services/api';

const STORAGE_KEY_PROGRESS = 'geografiya_6_progress';
const STORAGE_KEY_THEME = 'geografiya_6_theme';

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

interface ProgressContextType {
  progress: UserProgress;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  markLessonComplete: (lessonId: number) => void;
  setCurrentLesson: (lessonId: number) => void;
  addQuizResult: (result: Omit<QuizResult, 'id' | 'userId' | 'date'>) => Promise<QuizResult>;
  resetProgress: () => void;
  updateUserName: (name: string) => void;
  stats: {
    totalLessons: number;
    completedCount: number;
    lessonsPercentage: number;
    totalQuizzes: number;
    averageScore: number;
    bestScore: number;
    overallProgress: number;
  };
  badges: Badge[];
}

const TOTAL_LESSONS = 16;

const defaultProgress: UserProgress = {
  userId: 'student-' + Math.random().toString(36).substring(2, 9),
  userName: '6-sinf o‘quvchisi',
  completedLessonIds: [],
  currentLessonId: 1,
  quizResults: [],
  lastVisitedAt: new Date().toISOString(),
  earnedBadges: ['first_step']
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // Progress state
  const [progress, setProgress] = useState<UserProgress>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // parse error fallback
        }
      }
    }
    return defaultProgress;
  });

  // Apply theme class to document
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (theme === 'dark') {
      root.classList.add('dark');
      body?.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      body?.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem(STORAGE_KEY_THEME, theme);
  }, [theme]);

  // Persist progress to localStorage & sync to server
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
    // Background sync to backend
    apiService.syncProgress(progress.userId, progress).catch(() => {});
  }, [progress]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const markLessonComplete = (lessonId: number) => {
    setProgress((prev) => {
      const completed = new Set(prev.completedLessonIds);
      completed.add(lessonId);
      const earned = new Set(prev.earnedBadges);

      if (completed.size >= 1) earned.add('first_lesson');
      if (completed.size >= 5) earned.add('curious_explorer');
      if (completed.size >= 10) earned.add('geography_enthusiast');
      if (completed.size >= TOTAL_LESSONS) earned.add('grand_master');

      return {
        ...prev,
        completedLessonIds: Array.from(completed),
        currentLessonId: Math.min(lessonId + 1, TOTAL_LESSONS),
        lastVisitedAt: new Date().toISOString(),
        earnedBadges: Array.from(earned)
      };
    });
  };

  const setCurrentLesson = (lessonId: number) => {
    setProgress((prev) => ({
      ...prev,
      currentLessonId: lessonId,
      lastVisitedAt: new Date().toISOString()
    }));
  };

  const addQuizResult = async (
    resultData: Omit<QuizResult, 'id' | 'userId' | 'date'>
  ): Promise<QuizResult> => {
    const newResult: QuizResult = {
      ...resultData,
      id: 'res-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      userId: progress.userId,
      date: new Date().toISOString()
    };

    setProgress((prev) => {
      const updatedResults = [newResult, ...prev.quizResults];
      const earned = new Set(prev.earnedBadges);

      earned.add('first_quiz');
      if (updatedResults.length >= 5) earned.add('quiz_veteran');
      if (newResult.percentage === 100) earned.add('perfect_score');
      if (updatedResults.filter((r) => r.percentage >= 80).length >= 5) earned.add('honors_student');

      return {
        ...prev,
        quizResults: updatedResults,
        earnedBadges: Array.from(earned)
      };
    });

    // Save to API
    apiService.saveResult(newResult).catch(() => {});
    return newResult;
  };

  const updateUserName = (name: string) => {
    setProgress((prev) => ({
      ...prev,
      userName: name.trim() || '6-sinf o‘quvchisi'
    }));
  };

  const resetProgress = () => {
    const fresh: UserProgress = {
      ...defaultProgress,
      userId: progress.userId,
      userName: progress.userName
    };
    setProgress(fresh);
    localStorage.removeItem(STORAGE_KEY_PROGRESS);
  };

  // Derived statistics
  const stats = useMemo(() => {
    const completedCount = progress.completedLessonIds.length;
    const lessonsPercentage = Math.round((completedCount / TOTAL_LESSONS) * 100);

    const totalQuizzes = progress.quizResults.length;
    const averageScore =
      totalQuizzes > 0
        ? Math.round(
            progress.quizResults.reduce((acc, curr) => acc + curr.percentage, 0) / totalQuizzes
          )
        : 0;

    const bestScore =
      totalQuizzes > 0
        ? Math.max(...progress.quizResults.map((r) => r.percentage))
        : 0;

    // Overall progress: 60% lesson completion + 40% quiz performance
    const overallProgress = Math.min(
      100,
      Math.round(lessonsPercentage * 0.6 + averageScore * 0.4)
    );

    return {
      totalLessons: TOTAL_LESSONS,
      completedCount,
      lessonsPercentage,
      totalQuizzes,
      averageScore,
      bestScore,
      overallProgress
    };
  }, [progress]);

  // Achievement Badges
  const badges: Badge[] = useMemo(() => {
    const list: Badge[] = [
      {
        id: 'first_step',
        title: 'Boshlang‘ich qadam',
        description: 'Geografiya platformasiga birinchi tashrif',
        icon: '🌱',
        unlocked: true
      },
      {
        id: 'first_lesson',
        title: 'Birinchi saboq',
        description: 'Birinchi darsni muvaffaqiyatli yakunladingiz',
        icon: '📖',
        unlocked: progress.earnedBadges.includes('first_lesson')
      },
      {
        id: 'first_quiz',
        title: 'Sinovdan o‘tuvchi',
        description: 'Birinchi testni yakunladingiz',
        icon: '📝',
        unlocked: progress.earnedBadges.includes('first_quiz')
      },
      {
        id: 'perfect_score',
        title: 'Mutlaq natija (100%)',
        description: 'Testdan 100% natijaga erishdingiz',
        icon: '🌟',
        unlocked: progress.earnedBadges.includes('perfect_score')
      },
      {
        id: 'curious_explorer',
        title: 'Qiziquvchan tadqiqotchi',
        description: 'Kamida 5 ta darsni to‘liq o‘rgangansiz',
        icon: '🧭',
        unlocked: progress.earnedBadges.includes('curious_explorer')
      },
      {
        id: 'quiz_veteran',
        title: 'Test ustasi',
        description: 'Kamida 5 marta test topshirdingiz',
        icon: '🎯',
        unlocked: progress.earnedBadges.includes('quiz_veteran')
      },
      {
        id: 'honors_student',
        title: 'A’lochi geograf',
        description: '5 ta testda 80% dan yuqori ball oldingiz',
        icon: '🏆',
        unlocked: progress.earnedBadges.includes('honors_student')
      },
      {
        id: 'grand_master',
        title: 'Vatan bilimdoni',
        description: 'Barcha 16 ta darsni muvaffaqiyatli tugatdingiz',
        icon: '👑',
        unlocked: progress.earnedBadges.includes('grand_master')
      }
    ];
    return list;
  }, [progress.earnedBadges]);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        theme,
        toggleTheme,
        markLessonComplete,
        setCurrentLesson,
        addQuizResult,
        resetProgress,
        updateUserName,
        stats,
        badges
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
