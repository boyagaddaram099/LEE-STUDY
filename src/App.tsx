import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { MobileNav } from './components/MobileNav';
import { HeroSection } from './components/HeroSection';
import { FeatureGrid } from './components/FeatureGrid';
import { CourseCard } from './components/CourseCard';
import { CourseListView } from './components/CourseListView';
import { CourseDetailView } from './components/CourseDetailView';
import { TopicReaderView } from './components/TopicReaderView';
import { TopicPracticeExamView } from './components/TopicPracticeExamView';
import { MockTestsListView } from './components/MockTestsListView';
import { MockTestRunnerView } from './components/MockTestRunnerView';
import { NotificationsView } from './components/NotificationsView';
import { UserDashboardView } from './components/UserDashboardView';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { AdminPortalModal } from './components/AdminPortalModal';
import { Footer } from './components/Footer';
import { 
  BookOpen, 
  CheckSquare, 
  Bell, 
  ArrowRight, 
  Sparkles, 
  Volume2, 
  Globe, 
  Flame,
  CheckCircle2
} from 'lucide-react';

const MainContent: React.FC = () => {
  const { 
    viewMode, 
    setViewMode, 
    courses, 
    mockTests, 
    notifications, 
    openMockTest, 
    toastMessage, 
    language, 
    t 
  } = useApp();

  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const isRunnerMode = viewMode === 'mock-test-runner' || viewMode === 'practice-exam';

  return (
    <div className="w-full min-h-screen min-h-[100dvh] bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* Top Header */}
      <Header />

      {/* Main View Router */}
      <main className={`flex-1 w-full max-w-full overflow-x-hidden ${isRunnerMode ? 'pb-20 md:pb-12' : 'pb-24 md:pb-0'}`}>
        {viewMode === 'home' && (
          <div className="w-full max-w-full overflow-x-hidden">
            {/* Landing Hero */}
            <HeroSection />

            {/* 4 Pillars Grid */}
            <FeatureGrid />

            {/* Featured Courses Section */}
            <section className="py-12 sm:py-16 bg-slate-950 border-t border-slate-800/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
                      {t('featuredCourses')}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Popular AP Competitive Exam Courses
                    </h2>
                  </div>
                  <button
                    onClick={() => { setViewMode('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>View All {courses.length} Courses</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.slice(0, 3).map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            </section>

            {/* Featured Mock Tests Banner Section */}
            <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-900/60 to-slate-950 border-t border-slate-800/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      {t('latestMockTests')}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Live State Rank Simulator
                    </h2>
                  </div>
                  <button
                    onClick={() => { setViewMode('mock-tests'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>All Mock Tests</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockTests.slice(0, 2).map(test => (
                    <div
                      key={test.id}
                      className="p-5 sm:p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-800">
                            {test.targetExam}
                          </span>
                          <span className="text-xs text-slate-400 font-semibold">
                            {test.durationMinutes} Mins • -{test.negativeMarking} Neg
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {language === 'te' ? test.titleTe : test.title}
                        </h3>
                        <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                          Comprehensive state pattern test covering {test.subjectsCovered.join(', ')}.
                        </p>
                      </div>
                      <button
                        onClick={() => openMockTest(test.id)}
                        className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/30 transition-all"
                      >
                        <CheckSquare className="w-4 h-4" />
                        <span>Start Mock Simulation</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Quick Live Notifications Section on Home */}
            <section className="py-12 sm:py-16 bg-slate-950 border-t border-slate-800/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-1">
                      Live AP Announcements
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Latest Andhra Pradesh Job Recruitment
                    </h2>
                  </div>
                  <button
                    onClick={() => { setViewMode('notifications'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>View All Alerts</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {notifications.slice(0, 2).map(n => (
                    <div
                      key={n.id}
                      onClick={() => { setViewMode('notifications'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 cursor-pointer transition-all flex items-start justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 text-[10px] font-bold border border-purple-800">
                            {n.department}
                          </span>
                          <span className="text-xs text-rose-400 font-semibold">
                            Apply by: {n.lastDateToApply}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1 line-clamp-1">
                          {language === 'te' ? n.titleTe : n.title}
                        </h4>
                        <span className="text-xs text-emerald-400 font-bold">
                          {n.vacanciesCount}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 shrink-0 mt-2" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {viewMode === 'courses' && <CourseListView />}
        {viewMode === 'course-detail' && <CourseDetailView />}
        {viewMode === 'topic-reader' && <TopicReaderView />}
        {viewMode === 'practice-exam' && <TopicPracticeExamView />}
        {viewMode === 'mock-tests' && <MockTestsListView />}
        {viewMode === 'mock-test-runner' && <MockTestRunnerView />}
        {viewMode === 'notifications' && <NotificationsView />}
        {viewMode === 'dashboard' && <UserDashboardView />}
      </main>

      {/* Global Modals */}
      <GlobalSearchModal />
      <AdminPortalModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      {/* Footer */}
      {!isRunnerMode && <Footer onOpenAdmin={() => setIsAdminOpen(true)} />}

      {/* Mobile Bottom Navigation Bar (Hidden during active test runner to maximize screen space) */}
      {!isRunnerMode && <MobileNav />}

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-8 right-4 sm:right-8 z-50 bg-slate-900 border border-blue-500/60 text-white text-xs sm:text-sm font-semibold px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom duration-200 max-w-[calc(100vw-2rem)]">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="truncate">{toastMessage}</span>
        </div>
      )}

    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

export default App;
