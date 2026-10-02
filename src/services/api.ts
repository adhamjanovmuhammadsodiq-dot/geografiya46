import { Lesson, Question, QuizResult, Term, RegionInfo, SearchResult, UserProgress } from '../types';
import { LESSONS_DATA } from '../data/lessonsData';
import { QUESTIONS_DATA } from '../data/questionsData';
import { TERMS_DATA } from '../data/termsData';
import { REGIONS_DATA, GEOGRAPHIC_LANDMARKS, GeographicFeature } from '../data/regionsData';

const BASE_URL = '/api';

export const apiService = {
  // Lessons
  async getLessons(): Promise<Lesson[]> {
    try {
      const res = await fetch(`${BASE_URL}/lessons`);
      if (!res.ok) throw new Error('Darslarni yuklab bo‘lmadi');
      const data = await res.json();
      return data.data;
    } catch {
      // Fallback to local data
      return LESSONS_DATA;
    }
  },

  async getLessonById(id: number): Promise<Lesson | null> {
    try {
      const res = await fetch(`${BASE_URL}/lessons/${id}`);
      if (!res.ok) throw new Error('Dars topilmadi');
      const data = await res.json();
      return data.data;
    } catch {
      const found = LESSONS_DATA.find((l) => l.id === id);
      return found || null;
    }
  },

  // Questions
  async getQuestions(lessonId?: number, count?: number, random?: boolean): Promise<Question[]> {
    try {
      const params = new URLSearchParams();
      if (lessonId !== undefined) params.append('lessonId', lessonId.toString());
      if (count !== undefined) params.append('count', count.toString());
      if (random) params.append('random', 'true');

      const res = await fetch(`${BASE_URL}/questions?${params.toString()}`);
      if (!res.ok) throw new Error('Savollarni yuklab bo‘lmadi');
      const data = await res.json();
      return data.data;
    } catch {
      let filtered = [...QUESTIONS_DATA];
      if (lessonId !== undefined) {
        filtered = filtered.filter((q) => q.lessonId === lessonId);
      }
      if (random) {
        filtered.sort(() => Math.random() - 0.5);
      }
      if (count && count > 0) {
        filtered = filtered.slice(0, count);
      }
      return filtered;
    }
  },

  // Terms
  async getTerms(category?: string, search?: string): Promise<Term[]> {
    try {
      const params = new URLSearchParams();
      if (category && category !== 'Barchasi') params.append('category', category);
      if (search) params.append('search', search);

      const res = await fetch(`${BASE_URL}/terms?${params.toString()}`);
      if (!res.ok) throw new Error('Lug‘at atamalarini yuklab bo‘lmadi');
      const data = await res.json();
      return data.data;
    } catch {
      let filtered = [...TERMS_DATA];
      if (category && category !== 'Barchasi') {
        filtered = filtered.filter((t) => t.category.toLowerCase() === category.toLowerCase());
      }
      if (search) {
        const q = search.toLowerCase();
        filtered = filtered.filter(
          (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
        );
      }
      return filtered;
    }
  },

  // Regions & Map
  async getRegions(): Promise<{ regions: RegionInfo[]; landmarks: GeographicFeature[] }> {
    try {
      const res = await fetch(`${BASE_URL}/regions`);
      if (!res.ok) throw new Error('Xarita ma’lumotlarini yuklab bo‘lmadi');
      const data = await res.json();
      return data.data;
    } catch {
      return {
        regions: REGIONS_DATA,
        landmarks: GEOGRAPHIC_LANDMARKS
      };
    }
  },

  async getRegionById(id: string): Promise<RegionInfo | null> {
    try {
      const res = await fetch(`${BASE_URL}/regions/${id}`);
      if (!res.ok) throw new Error('Hudud topilmadi');
      const data = await res.json();
      return data.data;
    } catch {
      const found = REGIONS_DATA.find((r) => r.id === id);
      return found || null;
    }
  },

  // Global Search
  async search(query: string): Promise<SearchResult[]> {
    try {
      const res = await fetch(`${BASE_URL}/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error('Qidiruvda xatolik');
      const data = await res.json();
      return data.results || [];
    } catch {
      const cleanQ = query.trim().toLowerCase();
      if (!cleanQ) return [];

      const matchedLessons: SearchResult[] = LESSONS_DATA.filter(
        (l) =>
          l.title.toLowerCase().includes(cleanQ) ||
          l.shortDescription.toLowerCase().includes(cleanQ) ||
          l.keyTerms.some((t) => t.toLowerCase().includes(cleanQ))
      ).map((l) => ({
        type: 'lesson',
        id: l.id,
        title: l.title,
        subtitle: `${l.order}-dars: ${l.category}`,
        link: `/lessons/${l.id}`
      }));

      const matchedTerms: SearchResult[] = TERMS_DATA.filter(
        (t) => t.term.toLowerCase().includes(cleanQ) || t.definition.toLowerCase().includes(cleanQ)
      ).map((t) => ({
        type: 'term',
        id: t.id,
        title: t.term,
        subtitle: `${t.category}: ${t.definition.substring(0, 60)}...`,
        link: `/dictionary?term=${encodeURIComponent(t.term)}`
      }));

      const matchedRegions: SearchResult[] = REGIONS_DATA.filter(
        (r) =>
          r.name.toLowerCase().includes(cleanQ) ||
          r.center.toLowerCase().includes(cleanQ)
      ).map((r) => ({
        type: 'region',
        id: r.id,
        title: r.name,
        subtitle: `Markazi: ${r.center} | Maydoni: ${r.areaKm2.toLocaleString()} km²`,
        link: `/map?region=${r.id}`
      }));

      return [...matchedLessons, ...matchedTerms, ...matchedRegions];
    }
  },

  // Save Quiz Result
  async saveResult(result: QuizResult): Promise<boolean> {
    try {
      const res = await fetch(`${BASE_URL}/results`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result)
      });
      return res.ok;
    } catch {
      return false;
    }
  },

  // Save Progress
  async syncProgress(userId: string, progress: UserProgress): Promise<boolean> {
    try {
      const res = await fetch(`${BASE_URL}/progress/${userId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(progress)
      });
      return res.ok;
    } catch {
      return false;
    }
  }
};
