import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Language, 
  ViewMode, 
  Course, 
  Topic, 
  MockTest, 
  NotificationItem, 
  UserProgressState, 
  UserTopicScore, 
  UserMockScore 
} from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { MOCK_TESTS_DATA } from '../data/mockTestsData';
import { NOTIFICATIONS_DATA } from '../data/notificationsData';
import { UI_STRINGS } from '../data/translations';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  
  // Data
  courses: Course[];
  mockTests: MockTest[];
  notifications: NotificationItem[];
  
  // Active Selections
  activeCourse: Course | null;
  activeCourseId: string | null;
  setActiveCourse: (c: Course | null) => void;
  activeTopic: Topic | null;
  activeTopicId: string | null;
  setActiveTopic: (t: Topic | null) => void;
  activeMockTest: MockTest | null;
  setActiveMockTest: (m: MockTest | null) => void;
  activeNotification: NotificationItem | null;
  setActiveNotification: (n: NotificationItem | null) => void;
  
  // Navigation helpers
  openCourse: (courseId: string) => void;
  openTopic: (topicId: string, courseId?: string) => void;
  openPracticeExam: (topicId: string, courseId?: string) => void;
  openMockTest: (testId: string) => void;
  openNotifications: () => void;
  
  // User progress
  userProgress: UserProgressState;
  toggleBookmark: (topicId: string) => void;
  toggleBookmarkTopic: (topicId: string) => void;
  toggleDownloadOffline: (topicId: string) => void;
  toggleOfflineSaveTopic: (topicId: string) => void;
  markTopicCompleted: (topicId: string) => void;
  recordTopicScore: (topicId: string, score: UserTopicScore) => void;
  recordMockScore: (score: UserMockScore, questionIdsAttempted?: string[]) => void;
  markQuestionsAttempted: (questionIds: string[]) => void;
  resetAttemptedQuestions: () => void;
  startCustomMockTest: (customTest: MockTest) => void;
  isTopicCompleted: (topicId: string) => boolean;
  isTopicBookmarked: (topicId: string) => boolean;
  isTopicOfflineSaved: (topicId: string) => boolean;
  
  // Search
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;

  // Notification Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const PROGRESS_STORAGE_KEY = 'leestudy_user_progress_v1';
const LANG_STORAGE_KEY = 'leestudy_user_lang_v1';

const defaultProgress: UserProgressState = {
  completedTopicIds: ['polity-fundamental-rights'],
  topicScores: {
    'polity-fundamental-rights': {
      score: 5,
      totalQuestions: 5,
      percentage: 100,
      timeSpentSeconds: 140,
      completedAt: '2026-08-20'
    }
  },
  mockScores: [],
  bookmarkedTopicIds: ['polity-panchayati-raj'],
  offlineDownloadedTopicIds: ['polity-fundamental-rights', 'history-satavahanas'],
  attemptedQuestionIds: [],
  streakDays: 4,
  totalStudyMinutes: 185,
  lastStudiedTopicId: 'polity-fundamental-rights',
  lastStudiedCourseId: 'appsc-group2',
  targetExamGoal: 'APPSC Group 2 (Executive)',
  userName: 'Sairam AP Aspirant'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'en' || saved === 'te' || saved === 'hi') return saved;
    }
    return 'en';
  });

  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [courses] = useState<Course[]>(COURSES_DATA);
  const [mockTests] = useState<MockTest[]>(MOCK_TESTS_DATA);
  const [notifications] = useState<NotificationItem[]>(NOTIFICATIONS_DATA);

  const [activeCourse, setActiveCourse] = useState<Course | null>(COURSES_DATA[0]);
  const [activeTopic, setActiveTopic] = useState<Topic | null>(COURSES_DATA[0].subjects[0].topics[0]);
  const [activeMockTest, setActiveMockTest] = useState<MockTest | null>(MOCK_TESTS_DATA[0]);
  const [activeNotification, setActiveNotification] = useState<NotificationItem | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [userProgress, setUserProgress] = useState<UserProgressState>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to load user progress', e);
      }
    }
    return defaultProgress;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(userProgress));
    }
  }, [userProgress]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const t = (key: string): string => {
    const dict = UI_STRINGS[language] || UI_STRINGS.en;
    return dict[key] || UI_STRINGS.en[key] || key;
  };

  const openCourse = (courseId: string) => {
    const found = courses.find(c => c.id === courseId);
    if (found) {
      setActiveCourse(found);
      setViewMode('course-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openTopic = (topicId: string, courseId?: string) => {
    let targetCourse = activeCourse;
    if (courseId) {
      targetCourse = courses.find(c => c.id === courseId) || activeCourse;
    }
    
    // find topic across all courses/subjects if needed
    for (const c of courses) {
      for (const s of c.subjects) {
        const found = s.topics.find(top => top.id === topicId);
        if (found) {
          setActiveCourse(c);
          setActiveTopic(found);
          setUserProgress(prev => ({
            ...prev,
            lastStudiedTopicId: topicId,
            lastStudiedCourseId: c.id,
            totalStudyMinutes: prev.totalStudyMinutes + 5
          }));
          setViewMode('topic-reader');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
    }
  };

  const openPracticeExam = (topicId: string, courseId?: string) => {
    for (const c of courses) {
      for (const s of c.subjects) {
        const found = s.topics.find(top => top.id === topicId);
        if (found) {
          setActiveCourse(c);
          setActiveTopic(found);
          setViewMode('practice-exam');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
    }
  };

  const openMockTest = (testId: string) => {
    const found = mockTests.find(m => m.id === testId);
    if (found) {
      setActiveMockTest(found);
      setViewMode('mock-test-runner');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openNotifications = () => {
    setViewMode('notifications');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleBookmarkTopic = (topicId: string) => {
    setUserProgress(prev => {
      const isBookmarked = prev.bookmarkedTopicIds.includes(topicId);
      const updated = isBookmarked
        ? prev.bookmarkedTopicIds.filter(id => id !== topicId)
        : [...prev.bookmarkedTopicIds, topicId];
      showToast(isBookmarked ? 'Bookmark removed' : 'Topic bookmarked successfully');
      return { ...prev, bookmarkedTopicIds: updated };
    });
  };

  const toggleOfflineSaveTopic = (topicId: string) => {
    setUserProgress(prev => {
      const isSaved = prev.offlineDownloadedTopicIds.includes(topicId);
      const updated = isSaved
        ? prev.offlineDownloadedTopicIds.filter(id => id !== topicId)
        : [...prev.offlineDownloadedTopicIds, topicId];
      showToast(isSaved ? 'Removed from offline storage' : 'Saved for offline uninterrupted study');
      return { ...prev, offlineDownloadedTopicIds: updated };
    });
  };

  const recordTopicScore = (topicId: string, scoreData: UserTopicScore) => {
    setUserProgress(prev => {
      const completed = Array.from(new Set([...prev.completedTopicIds, topicId]));
      return {
        ...prev,
        completedTopicIds: completed,
        topicScores: {
          ...prev.topicScores,
          [topicId]: scoreData
        },
        totalStudyMinutes: prev.totalStudyMinutes + Math.round(scoreData.timeSpentSeconds / 60)
      };
    });
  };

  const recordMockScore = (score: UserMockScore, questionIdsAttempted: string[] = []) => {
    setUserProgress(prev => {
      const existingAttempted = prev.attemptedQuestionIds || [];
      const updatedAttempted = Array.from(new Set([...existingAttempted, ...questionIdsAttempted]));
      return {
        ...prev,
        mockScores: [score, ...prev.mockScores],
        attemptedQuestionIds: updatedAttempted,
        totalStudyMinutes: prev.totalStudyMinutes + Math.round(score.timeSpentSeconds / 60)
      };
    });
  };

  const markQuestionsAttempted = (questionIds: string[]) => {
    setUserProgress(prev => {
      const existing = prev.attemptedQuestionIds || [];
      const merged = Array.from(new Set([...existing, ...questionIds]));
      return {
        ...prev,
        attemptedQuestionIds: merged
      };
    });
  };

  const resetAttemptedQuestions = () => {
    setUserProgress(prev => ({
      ...prev,
      attemptedQuestionIds: []
    }));
    showToast('Question attempt history has been reset. All questions are now fresh!');
  };

  const startCustomMockTest = (customTest: MockTest) => {
    setActiveMockTest(customTest);
    setViewMode('mock-test-runner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const markTopicCompleted = (topicId: string) => {
    setUserProgress(prev => {
      const isAlready = prev.completedTopicIds.includes(topicId);
      const updated = isAlready
        ? prev.completedTopicIds.filter(id => id !== topicId)
        : [...prev.completedTopicIds, topicId];
      showToast(isAlready ? 'Topic marked as unread' : 'Topic marked as completed! Keep going!');
      return {
        ...prev,
        completedTopicIds: updated,
        totalStudyMinutes: isAlready ? prev.totalStudyMinutes : prev.totalStudyMinutes + 10
      };
    });
  };

  const isTopicCompleted = (topicId: string) => {
    return userProgress.completedTopicIds.includes(topicId);
  };

  const isTopicBookmarked = (topicId: string) => {
    return userProgress.bookmarkedTopicIds.includes(topicId);
  };

  const isTopicOfflineSaved = (topicId: string) => {
    return (userProgress.offlineDownloadedTopicIds || []).includes(topicId);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        viewMode,
        setViewMode,
        courses,
        mockTests,
        notifications,
        activeCourse,
        activeCourseId: activeCourse?.id || null,
        setActiveCourse,
        activeTopic,
        activeTopicId: activeTopic?.id || null,
        setActiveTopic,
        activeMockTest,
        setActiveMockTest,
        activeNotification,
        setActiveNotification,
        openCourse,
        openTopic,
        openPracticeExam,
        openMockTest,
        startCustomMockTest,
        openNotifications,
        userProgress,
        toggleBookmark: toggleBookmarkTopic,
        toggleBookmarkTopic,
        toggleDownloadOffline: toggleOfflineSaveTopic,
        toggleOfflineSaveTopic,
        markTopicCompleted,
        recordTopicScore,
        recordMockScore,
        markQuestionsAttempted,
        resetAttemptedQuestions,
        isTopicCompleted,
        isTopicBookmarked,
        isTopicOfflineSaved,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
