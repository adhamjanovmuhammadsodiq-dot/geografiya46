import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { LESSONS_DATA } from './src/data/lessonsData.ts';
import { QUESTIONS_DATA } from './src/data/questionsData.ts';
import { TERMS_DATA } from './src/data/termsData.ts';
import { REGIONS_DATA, GEOGRAPHIC_LANDMARKS } from './src/data/regionsData.ts';
import { QuizResult, UserProgress } from './src/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// In-memory persistent stores with backup
const quizResultsStore = new Map<string, QuizResult[]>();
const userProgressStore = new Map<string, UserProgress>();

// Helper search function
function performSearch(query: string) {
  const cleanQ = query.trim().toLowerCase();
  if (!cleanQ) return [];

  const matchedLessons = LESSONS_DATA.filter(
    (l) =>
      l.title.toLowerCase().includes(cleanQ) ||
      l.shortDescription.toLowerCase().includes(cleanQ) ||
      l.keyFacts.some((f) => f.toLowerCase().includes(cleanQ)) ||
      l.keyTerms.some((t) => t.toLowerCase().includes(cleanQ))
  ).map((l) => ({
    type: 'lesson' as const,
    id: l.id,
    title: l.title,
    subtitle: `${l.order}-dars: ${l.category}`,
    link: `/lessons/${l.id}`
  }));

  const matchedTerms = TERMS_DATA.filter(
    (t) =>
      t.term.toLowerCase().includes(cleanQ) ||
      t.definition.toLowerCase().includes(cleanQ) ||
      t.category.toLowerCase().includes(cleanQ)
  ).map((t) => ({
    type: 'term' as const,
    id: t.id,
    title: t.term,
    subtitle: `${t.category}: ${t.definition.substring(0, 60)}...`,
    link: `/dictionary?term=${encodeURIComponent(t.term)}`
  }));

  const matchedRegions = REGIONS_DATA.filter(
    (r) =>
      r.name.toLowerCase().includes(cleanQ) ||
      r.center.toLowerCase().includes(cleanQ) ||
      r.landscape.toLowerCase().includes(cleanQ) ||
      r.notableFeatures.some((f) => f.toLowerCase().includes(cleanQ))
  ).map((r) => ({
    type: 'region' as const,
    id: r.id,
    title: r.name,
    subtitle: `Markazi: ${r.center} | Maydoni: ${r.areaKm2.toLocaleString()} km²`,
    link: `/map?region=${r.id}`
  }));

  return [...matchedLessons, ...matchedTerms, ...matchedRegions];
}

// ================= API ENDPOINTS =================

// GET /api/lessons
app.get('/api/lessons', (_req: Request, res: Response) => {
  res.json({
    success: true,
    total: LESSONS_DATA.length,
    data: LESSONS_DATA
  });
});

// GET /api/lessons/:id
app.get('/api/lessons/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const lesson = LESSONS_DATA.find((l) => l.id === id);
  if (!lesson) {
    res.status(404).json({ success: false, message: 'Dars topilmadi' });
    return;
  }
  res.json({ success: true, data: lesson });
});

// GET /api/questions
app.get('/api/questions', (req: Request, res: Response) => {
  const { lessonId, count, random } = req.query;
  let questions = [...QUESTIONS_DATA];

  if (lessonId) {
    const lId = parseInt(lessonId as string, 10);
    questions = questions.filter((q) => q.lessonId === lId);
  }

  if (random === 'true') {
    // Fisher-Yates shuffle
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }

  if (count) {
    const limit = parseInt(count as string, 10);
    if (!isNaN(limit) && limit > 0) {
      questions = questions.slice(0, limit);
    }
  }

  res.json({
    success: true,
    total: questions.length,
    data: questions
  });
});

// GET /api/questions/:id
app.get('/api/questions/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const question = QUESTIONS_DATA.find((q) => q.id === id);
  if (!question) {
    res.status(404).json({ success: false, message: 'Savol topilmadi' });
    return;
  }
  res.json({ success: true, data: question });
});

// GET /api/terms
app.get('/api/terms', (req: Request, res: Response) => {
  const { category, search } = req.query;
  let terms = [...TERMS_DATA];

  if (category && typeof category === 'string' && category !== 'Barchasi') {
    terms = terms.filter((t) => t.category.toLowerCase() === category.toLowerCase());
  }

  if (search && typeof search === 'string') {
    const q = search.toLowerCase();
    terms = terms.filter(
      (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
    );
  }

  res.json({
    success: true,
    total: terms.length,
    data: terms
  });
});

// GET /api/regions
app.get('/api/regions', (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: {
      regions: REGIONS_DATA,
      landmarks: GEOGRAPHIC_LANDMARKS
    }
  });
});

// GET /api/regions/:id
app.get('/api/regions/:id', (req: Request, res: Response) => {
  const region = REGIONS_DATA.find((r) => r.id === req.params.id);
  if (!region) {
    res.status(404).json({ success: false, message: 'Hudud topilmadi' });
    return;
  }
  res.json({ success: true, data: region });
});

// GET /api/search
app.get('/api/search', (req: Request, res: Response) => {
  const q = (req.query.q as string) || '';
  if (!q.trim()) {
    res.json({ success: true, results: [] });
    return;
  }
  const results = performSearch(q);
  res.json({ success: true, query: q, total: results.length, results });
});

// POST /api/results
app.post('/api/results', (req: Request, res: Response) => {
  const body = req.body as QuizResult;
  if (!body || !body.userId) {
    res.status(400).json({ success: false, message: 'Noto‘g‘ri ma’lumotlar' });
    return;
  }

  const userResults = quizResultsStore.get(body.userId) || [];
  userResults.unshift(body);
  quizResultsStore.set(body.userId, userResults);

  // Update or calculate user stats
  res.status(201).json({
    success: true,
    message: 'Natija muvaffaqiyatli saqlandi',
    data: body
  });
});

// GET /api/results/:userId
app.get('/api/results/:userId', (req: Request, res: Response) => {
  const userId = req.params.userId;
  const results = quizResultsStore.get(userId) || [];
  res.json({
    success: true,
    userId,
    total: results.length,
    data: results
  });
});

// POST /api/progress/:userId
app.post('/api/progress/:userId', (req: Request, res: Response) => {
  const userId = req.params.userId;
  const progress = req.body as UserProgress;
  if (!progress) {
    res.status(400).json({ success: false, message: 'Progress ma’lumotlari kerak' });
    return;
  }
  userProgressStore.set(userId, progress);
  res.json({ success: true, data: progress });
});

// GET /api/progress/:userId
app.get('/api/progress/:userId', (req: Request, res: Response) => {
  const userId = req.params.userId;
  const progress = userProgressStore.get(userId) || null;
  res.json({ success: true, data: progress });
});

// ================= SERVER STARTUP & VITE INTEGRATION =================

async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
    console.log('⚡ Vite dev middleware mounted');
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (_req: Request, res: Response) => {
        res.sendFile(path.resolve(distPath, 'index.html'));
      });
      console.log('📦 Serving production static build from dist');
    }
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🌍 Geografiya O‘zbekiston server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Server failed to start:', err);
  process.exit(1);
});
