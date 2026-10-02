export interface Lesson {
  id: number;
  slug: string;
  order: number;
  title: string;
  shortDescription: string;
  difficulty: 'Oson' | 'O‘rtacha' | 'Qiyin';
  durationMinutes: number;
  category: string;
  objectives: string[];
  sections: {
    heading: string;
    content: string;
    subpoints?: string[];
  }[];
  keyFacts: string[];
  keyTerms: string[];
  summary: string;
}

export interface Question {
  id: number;
  lessonId: number;
  lessonTitle: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  difficulty: 'Oson' | 'O‘rtacha' | 'Qiyin';
}

export interface QuizResult {
  id: string;
  userId: string;
  lessonId?: number;
  lessonTitle?: string;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  percentage: number;
  date: string;
  mistakes: {
    question: string;
    userAnswer: string;
    correctAnswer: string;
    explanation: string;
  }[];
}

export interface Term {
  id: number;
  term: string;
  category: string;
  pronunciation?: string;
  definition: string;
  example?: string;
  relatedLessonId?: number;
}

export interface RegionCity {
  name: string;
  x: number;
  y: number;
  isCapital?: boolean;
}

export interface RegionInfo {
  id: string;
  name: string;
  atlasName: string;
  color: string;
  darkColor: string;
  center: string;
  areaKm2: number;
  population: string;
  landscape: string;
  rivers: string[];
  notableFeatures: string[];
  economy: string[];
  climate: string;
  pathData: string; // SVG path coordinate representation
  labelX: number;
  labelY: number;
  cities: RegionCity[];
}

export interface UserProgress {
  userId: string;
  userName: string;
  completedLessonIds: number[];
  currentLessonId: number;
  quizResults: QuizResult[];
  lastVisitedAt: string;
  earnedBadges: string[];
}

export interface SearchResult {
  type: 'lesson' | 'term' | 'region';
  id: string | number;
  title: string;
  subtitle: string;
  link: string;
}
