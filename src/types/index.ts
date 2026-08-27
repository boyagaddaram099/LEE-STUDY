export type Language = 'en' | 'te' | 'hi';

export type ViewMode = 
  | 'home'
  | 'courses'
  | 'course-detail'
  | 'topic-reader'
  | 'practice-exam'
  | 'mock-tests'
  | 'mock-test-runner'
  | 'notifications'
  | 'dashboard'
  | 'offline-vault';

export type ExamCategory = 
  | 'all'
  | 'appsc' 
  | 'police' 
  | 'dsc' 
  | 'secretariat' 
  | 'court' 
  | 'revenue_forest' 
  | 'central'
  | 'State Services'
  | 'Teacher Recruitment'
  | 'Police & Defense'
  | 'Local Governance'
  | 'High Court'
  | 'Central Government';

export interface NoteTable {
  title?: string;
  titleTe?: string;
  titleHi?: string;
  headers: string[];
  headersTe?: string[];
  rows: string[][];
  rowsTe?: string[][];
}

export interface NoteCaseLawOrAct {
  title: string;
  titleTe?: string;
  year?: string;
  verdictOrProvision: string;
  verdictOrProvisionTe?: string;
  examSignificance: string;
  examSignificanceTe?: string;
}

export interface NoteMnemonic {
  title: string;
  titleTe?: string;
  acronym: string;
  breakdown: Array<{ letter: string; term: string; termTe?: string }>;
  tip: string;
  tipTe?: string;
}

export interface NoteTimelineItem {
  yearOrEra: string;
  event: string;
  eventTe?: string;
  impact: string;
  impactTe?: string;
}

export interface NotePyqInsight {
  exam: string;
  year: string;
  topicTested: string;
  topicTestedTe?: string;
  examinerTrap: string;
  examinerTrapTe?: string;
  winningTip: string;
  winningTipTe?: string;
}

export interface NoteFaq {
  q: string;
  qTe?: string;
  a: string;
  aTe?: string;
  caution?: string;
  cautionTe?: string;
}

export type DiagramType = 'hierarchy' | 'mindmap' | 'cycle' | 'matrix';

export interface DiagramNode {
  id: string;
  label: string;
  labelTe?: string;
  description?: string;
  descriptionTe?: string;
  badge?: string;
  badgeTe?: string;
  category?: 'primary' | 'secondary' | 'accent' | 'warning' | 'success' | 'info';
  children?: DiagramNode[];
}

export interface TopicDiagram {
  id: string;
  title: string;
  titleTe?: string;
  type: DiagramType;
  caption?: string;
  captionTe?: string;
  nodes?: DiagramNode[];
  steps?: Array<{
    stepNumber: number;
    title: string;
    titleTe?: string;
    description: string;
    descriptionTe?: string;
    tag?: string;
    tagTe?: string;
    arrowLabel?: string;
  }>;
  cycleItems?: Array<{
    phase: string;
    phaseTe?: string;
    title: string;
    titleTe?: string;
    detail: string;
    detailTe?: string;
  }>;
  matrixColumns?: Array<{
    header: string;
    headerTe?: string;
    items: Array<{ title: string; titleTe?: string; points: string[]; pointsTe?: string[] }>;
  }>;
}

export interface TopicSection {
  title: string;
  titleTe?: string;
  titleHi?: string;
  paragraphs: string[];
  paragraphsTe?: string[];
  paragraphsHi?: string[];
  keyPoints?: string[];
  keyPointsTe?: string[];
  keyPointsHi?: string[];
  examAlert?: string;
  examAlertTe?: string;
  examAlertHi?: string;
  tables?: NoteTable[];
  caseLaws?: NoteCaseLawOrAct[];
}

export interface TopicContent {
  overview: string;
  overviewTe?: string;
  overviewHi?: string;
  sections: TopicSection[];
  diagrams?: TopicDiagram[];
  quickFacts?: Array<{ label: string; val: string }>;
  quickFactsTe?: Array<{ label: string; val: string }>;
  quickFactsHi?: Array<{ label: string; val: string }>;
  revisionPoints: string[];
  revisionPointsTe?: string[];
  revisionPointsHi?: string[];
  apSpecificFocus?: string;
  apSpecificFocusTe?: string;
  apSpecificFocusHi?: string;
  tables?: NoteTable[];
  caseLaws?: NoteCaseLawOrAct[];
  mnemonics?: NoteMnemonic[];
  timeline?: NoteTimelineItem[];
  pyqInsights?: NotePyqInsight[];
  faqs?: NoteFaq[];
}

export interface Question {
  id: string;
  topicId?: string;
  subjectName?: string;
  question: string;
  questionTe?: string;
  questionHi?: string;
  options: string[];
  optionsTe?: string[];
  optionsHi?: string[];
  correctIndex: number;
  explanation: string;
  explanationTe?: string;
  explanationHi?: string;
  referenceAct?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface Topic {
  id: string;
  subjectId: string;
  courseId: string;
  order: number;
  title: string;
  titleTe: string;
  titleHi: string;
  shortDesc: string;
  shortDescTe: string;
  shortDescHi: string;
  readTimeMinutes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Standard' | 'Foundation';
  highYieldWeightage: string;
  content: TopicContent;
  questions: Question[];
}

export interface Subject {
  id: string;
  courseId: string;
  name: string;
  nameTe: string;
  nameHi: string;
  icon: string;
  totalHours: number;
  topics: Topic[];
}

export interface Course {
  id: string;
  slug?: string;
  title: string;
  titleTe: string;
  titleHi: string;
  category?: ExamCategory;
  examCategory?: string;
  badge: string;
  badgeTe: string;
  badgeHi: string;
  description?: string;
  descriptionTe?: string;
  descriptionHi?: string;
  shortDesc?: string;
  shortDescTe?: string;
  shortDescHi?: string;
  iconName?: string;
  icon?: string;
  colorAccent?: string;
  accentColor?: string;
  totalTopics: number;
  durationHours?: number;
  durationWeeks?: number;
  difficulty: 'Foundation' | 'Standard' | 'Intensive' | 'Intermediate' | 'Advanced';
  rating: number;
  enrolledCount: number;
  officialCadre?: string;
  syllabusOverview?: string;
  syllabusOverviewTe?: string;
  targetPosts?: string[];
  subjects: Subject[];
}

export interface MockTest {
  id: string;
  title: string;
  titleTe: string;
  titleHi: string;
  category: ExamCategory;
  targetExam: string;
  questionsCount: number;
  durationMinutes: number;
  totalMarks: number;
  negativeMarking: number;
  passingMarks: number;
  difficulty: 'Moderate' | 'Challenging' | 'Expert';
  subjectsCovered: string[];
  questions: Question[];
  featured?: boolean;
}

export interface MockTestConfig {
  questionCount: number; // 50 to 100
  durationMinutes: number;
  negativeMarking: number;
  preventRepeat: boolean;
  selectedSubjects?: string[];
}

export interface UserTopicScore {
  score: number;
  totalQuestions: number;
  percentage: number;
  timestamp?: number;
  timeSpentSeconds?: number;
  completedAt?: string;
}

export interface UserMockScore {
  testId?: string;
  testTitle?: string;
  score: number;
  totalMarks: number;
  correct: number;
  incorrect: number;
  correctCount?: number;
  wrongCount?: number;
  unattempted?: number;
  unattemptedCount?: number;
  timeSpentSeconds: number;
  percentage?: number;
  accuracyPercentage?: number;
  estimatedStateRank?: number;
  percentile?: number;
  questionCount?: number;
  completedAt?: string;
  date?: string;
}

export interface UserProgressState {
  completedTopicIds: string[];
  topicScores: Record<string, UserTopicScore>;
  mockScores: UserMockScore[];
  mockTestScores?: Record<string, UserMockScore>;
  savedOfflineTopicIds?: string[];
  offlineDownloadedTopicIds?: string[];
  bookmarkedTopicIds?: string[];
  bookmarkedQuestionIds?: string[];
  attemptedQuestionIds?: string[];
  streakDays: number;
  lastActiveDate?: string;
  totalStudyMinutes: number;
  lastStudiedTopicId?: string;
  lastStudiedCourseId?: string;
  targetExamGoal?: string;
  userName?: string;
}

export type UserProgress = UserProgressState;

export interface NotificationItem {
  id: string;
  title: string;
  titleTe: string;
  titleHi: string;
  department: string;
  departmentTe: string;
  departmentHi: string;
  category: ExamCategory | string;
  publishedDate: string;
  lastDateToApply: string;
  examDate: string;
  vacanciesCount: string;
  eligibility: string;
  eligibilityTe: string;
  eligibilityHi: string;
  officialNotificationUrl: string;
  applyUrl: string;
  isNew: boolean;
  importantDates: Array<{ label: string; date: string }>;
  description: string;
  descriptionTe: string;
  descriptionHi: string;
}

export type JobNotification = NotificationItem;
