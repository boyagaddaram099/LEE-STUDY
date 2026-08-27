import { ExamCategory, MockTest, Question, Course } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { MOCK_TESTS_DATA } from '../data/mockTestsData';
import { COMPREHENSIVE_MOCK_QUESTION_BANK } from '../data/mockQuestionBank';

// Category mapping helper
function mapCourseToExamCategory(courseId: string, courseCategory?: ExamCategory): string {
  if (courseId.includes('appsc') || courseCategory === 'appsc' || courseCategory === 'State Services') return 'appsc';
  if (courseId.includes('dsc') || courseId.includes('tet') || courseCategory === 'dsc' || courseCategory === 'Teacher Recruitment') return 'dsc';
  if (courseId.includes('police') || courseCategory === 'police' || courseCategory === 'Police & Defense') return 'police';
  if (courseId.includes('sachivalayam') || courseCategory === 'secretariat' || courseCategory === 'Local Governance') return 'secretariat';
  if (courseId.includes('court') || courseCategory === 'court' || courseCategory === 'High Court') return 'court';
  if (courseId.includes('central') || courseCategory === 'central' || courseCategory === 'Central Government') return 'central';
  return 'appsc';
}

/**
 * Aggregates all questions across all 470+ topics in all courses,
 * pre-defined mock tests, and the comprehensive question bank.
 */
export function getAllBankQuestions(): Array<Question & { category: string; source: string }> {
  const aggregated: Array<Question & { category: string; source: string }> = [];
  const seenIds = new Set<string>();

  // 1. Collect from Comprehensive Question Bank
  COMPREHENSIVE_MOCK_QUESTION_BANK.forEach(q => {
    if (!seenIds.has(q.id)) {
      seenIds.add(q.id);
      let cat = 'appsc';
      if (q.id.startsWith('dsc')) cat = 'dsc';
      else if (q.id.startsWith('police')) cat = 'police';
      else if (q.id.startsWith('sachivalayam')) cat = 'secretariat';
      else if (q.id.startsWith('court')) cat = 'court';
      else if (q.id.startsWith('central')) cat = 'central';

      aggregated.push({
        ...q,
        category: cat,
        source: 'Grand Question Bank'
      });
    }
  });

  // 2. Collect from Existing Mock Tests
  MOCK_TESTS_DATA.forEach(test => {
    test.questions.forEach((q, idx) => {
      const qId = q.id || `${test.id}-q-${idx}`;
      if (!seenIds.has(qId)) {
        seenIds.add(qId);
        aggregated.push({
          ...q,
          id: qId,
          subjectName: q.subjectName || test.subjectsCovered[0] || 'General Studies',
          category: test.category as string,
          source: test.title
        });
      }
    });
  });

  // 3. Collect from all Courses & Topics (over 470 topics!)
  COURSES_DATA.forEach((course: Course) => {
    const courseCat = mapCourseToExamCategory(course.id, course.category);
    course.subjects.forEach(subject => {
      subject.topics.forEach(topic => {
        topic.questions.forEach((q, qIdx) => {
          const qId = q.id || `${topic.id}-q-${qIdx}`;
          if (!seenIds.has(qId)) {
            seenIds.add(qId);
            aggregated.push({
              ...q,
              id: qId,
              topicId: topic.id,
              subjectName: q.subjectName || subject.name,
              category: courseCat,
              source: topic.title
            });
          }
        });
      });
    });
  });

  return aggregated;
}

// Global cached bank
let cachedBank: Array<Question & { category: string; source: string }> | null = null;
export function getUnifiedQuestionBank() {
  if (!cachedBank) {
    cachedBank = getAllBankQuestions();
  }
  return cachedBank;
}

/**
 * Get category-specific questions and unattempted metrics
 */
export function getCategoryQuestionStats(
  category: ExamCategory | string,
  attemptedQuestionIds: string[] = []
) {
  const bank = getUnifiedQuestionBank();
  const catKey = (category || 'all').toLowerCase();

  const matching = bank.filter(q => {
    if (catKey === 'all') return true;
    return q.category.toLowerCase() === catKey;
  });

  const attemptedSet = new Set(attemptedQuestionIds);
  const unattempted = matching.filter(q => !attemptedSet.has(q.id));
  const attempted = matching.filter(q => attemptedSet.has(q.id));

  // Subject breakdown
  const subjectMap = new Map<string, { total: number; unattempted: number }>();
  matching.forEach(q => {
    const sName = q.subjectName || 'General Studies';
    const curr = subjectMap.get(sName) || { total: 0, unattempted: 0 };
    curr.total++;
    if (!attemptedSet.has(q.id)) {
      curr.unattempted++;
    }
    subjectMap.set(sName, curr);
  });

  const subjects = Array.from(subjectMap.entries()).map(([name, data]) => ({
    name,
    total: data.total,
    unattempted: data.unattempted
  }));

  return {
    totalQuestions: matching.length,
    unattempted: unattempted.length,
    attempted: attempted.length,
    subjects
  };
}

/**
 * Fisher-Yates shuffle helper
 */
function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export interface DynamicTestOptions {
  baseTest: MockTest;
  targetQuestionCount: number; // 50 to 100
  customDurationMinutes?: number;
  customNegativeMarking?: number;
  preventRepeat?: boolean;
  attemptedQuestionIds: string[];
  selectedSubjects?: string[];
}

export interface GeneratedTestResult {
  mockTest: MockTest;
  stats: {
    requestedCount: number;
    deliveredCount: number;
    unattemptedUsed: number;
    recycledUsed: number;
    isRecycled: boolean;
    totalPoolSize: number;
    categoryUnattemptedRemaining: number;
  };
}

/**
 * Assembles a bespoke 50 to 100 question mock test with guaranteed anti-repetition.
 */
export function generateDynamicMockTest(options: DynamicTestOptions): GeneratedTestResult {
  const {
    baseTest,
    targetQuestionCount,
    customDurationMinutes,
    customNegativeMarking,
    preventRepeat = true,
    attemptedQuestionIds = [],
    selectedSubjects = []
  } = options;

  const validCount = Math.max(50, Math.min(100, targetQuestionCount || 50));
  const bank = getUnifiedQuestionBank();
  const catKey = (baseTest.category || 'all').toLowerCase();

  // 1. Filter bank by exam category
  let candidatePool = bank.filter(q => {
    if (catKey === 'all') return true;
    return q.category.toLowerCase() === catKey;
  });

  // If candidate pool is too small for this category, supplement from general bank
  if (candidatePool.length < validCount) {
    const extra = bank.filter(q => !candidatePool.some(cp => cp.id === q.id));
    candidatePool = [...candidatePool, ...extra];
  }

  // 2. Filter by subjects if specified
  if (selectedSubjects && selectedSubjects.length > 0) {
    const filteredBySub = candidatePool.filter(q => selectedSubjects.includes(q.subjectName || ''));
    if (filteredBySub.length >= validCount) {
      candidatePool = filteredBySub;
    }
  }

  const attemptedSet = new Set(attemptedQuestionIds);
  const unseenPool = candidatePool.filter(q => !attemptedSet.has(q.id));
  const seenPool = candidatePool.filter(q => attemptedSet.has(q.id));

  let finalQuestions: Question[] = [];
  let unattemptedUsed = 0;
  let recycledUsed = 0;

  if (preventRepeat) {
    // ANTI-REPETITION MODE:
    // First, draw as many unique unattempted questions as possible
    const shuffledUnseen = shuffleArray(unseenPool);

    if (shuffledUnseen.length >= validCount) {
      // We have more than enough unseen questions! Pick completely fresh questions.
      finalQuestions = shuffledUnseen.slice(0, validCount);
      unattemptedUsed = validCount;
      recycledUsed = 0;
    } else {
      // Unseen questions are fewer than target count; use ALL unseen questions, then fill with least recently attempted
      finalQuestions = [...shuffledUnseen];
      unattemptedUsed = shuffledUnseen.length;

      const needed = validCount - finalQuestions.length;
      const shuffledSeen = shuffleArray(seenPool);
      const recycledFill = shuffledSeen.slice(0, needed);
      finalQuestions.push(...recycledFill);
      recycledUsed = recycledFill.length;
    }
  } else {
    // Normal randomized mode
    const shuffledAll = shuffleArray(candidatePool);
    finalQuestions = shuffledAll.slice(0, validCount);
    finalQuestions.forEach(q => {
      if (attemptedSet.has(q.id)) recycledUsed++;
      else unattemptedUsed++;
    });
  }

  // Final shuffle of selected questions so sections don't cluster
  finalQuestions = shuffleArray(finalQuestions);

  // Auto duration: standard ~1.2 minutes per question (e.g. 50 Qs = 60 mins, 75 Qs = 90 mins, 100 Qs = 120 mins)
  const autoDuration = customDurationMinutes || Math.round(validCount * 1.2);
  const negMarking = customNegativeMarking !== undefined ? customNegativeMarking : (baseTest.negativeMarking ?? 0.33);

  // Extract distinct subjects represented
  const subjectsCovered = Array.from(
    new Set(finalQuestions.map(q => q.subjectName || 'General Studies'))
  );

  const testTitle = `${baseTest.title} (${validCount} Questions)`;
  const testTitleTe = `${baseTest.titleTe} (${validCount} ప్రశ్నలు)`;
  const testTitleHi = `${baseTest.titleHi} (${validCount} प्रश्न)`;

  const dynamicTest: MockTest = {
    ...baseTest,
    id: `dyn-${baseTest.id}-${Date.now()}`,
    title: testTitle,
    titleTe: testTitleTe,
    titleHi: testTitleHi,
    questionsCount: finalQuestions.length,
    durationMinutes: autoDuration,
    totalMarks: finalQuestions.length,
    negativeMarking: negMarking,
    passingMarks: Math.round(finalQuestions.length * 0.4),
    subjectsCovered,
    questions: finalQuestions,
    featured: false
  };

  return {
    mockTest: dynamicTest,
    stats: {
      requestedCount: validCount,
      deliveredCount: finalQuestions.length,
      unattemptedUsed,
      recycledUsed,
      isRecycled: recycledUsed > 0,
      totalPoolSize: candidatePool.length,
      categoryUnattemptedRemaining: Math.max(0, unseenPool.length - unattemptedUsed)
    }
  };
}
