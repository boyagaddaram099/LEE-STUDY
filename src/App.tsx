import React, { useEffect, useRef, useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileNav } from './components/MobileNav';
import { CourseListView } from './components/CourseListView';
import { CourseDetailView } from './components/CourseDetailView';
import { TopicReaderView } from './components/TopicReaderView';
import { TopicPracticeExamView } from './components/TopicPracticeExamView';
import { MockTestsListView } from './components/MockTestsListView';
import { MockTestRunnerView } from './components/MockTestRunnerView';
import { NotificationsView } from './components/NotificationsView';
import { UserDashboardView } from './components/UserDashboardView';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { MockTestConfigModal } from './components/MockTestConfigModal';
import { AdminPortalModal } from './components/AdminPortalModal';
import { 
  Sparkles
} from 'lucide-react';

function MainAppContent() {
  const { 
    viewMode, 
    setViewMode, 
    courses, 
    mockTests,
    language, 
    setLanguage, 
    openCourse,
    toastMessage, 
    t 
  } = useApp();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoOpacity, setVideoOpacity] = useState<number>(0);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const videoUrl =
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number;
    let isTransitioning = false;

    const updateVideoFade = () => {
      if (isTransitioning || !video) return;

      const { currentTime, duration } = video;

      if (duration && !isNaN(duration) && duration > 0) {
        if (currentTime < 0.5) {
          // Fade in over 0.5s at the start (opacity 0 to 1)
          const opacity = Math.min(1, Math.max(0, currentTime / 0.5));
          setVideoOpacity(opacity);
        } else if (duration - currentTime <= 0.5) {
          // Fade out over 0.5s before the end (opacity 1 to 0)
          const opacity = Math.min(1, Math.max(0, (duration - currentTime) / 0.5));
          setVideoOpacity(opacity);
        } else {
          setVideoOpacity(1);
        }
      }

      animationFrameId = requestAnimationFrame(updateVideoFade);
    };

    const handleEnded = () => {
      isTransitioning = true;
      setVideoOpacity(0);

      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video
            .play()
            .then(() => {
              isTransitioning = false;
              animationFrameId = requestAnimationFrame(updateVideoFade);
            })
            .catch(() => {
              isTransitioning = false;
            });
        }
      }, 100);
    };

    video.addEventListener('ended', handleEnded);
    video.play().catch(() => {});
    animationFrameId = requestAnimationFrame(updateVideoFade);

    return () => {
      cancelAnimationFrame(animationFrameId);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#FFFFFF] font-body text-[#000000] selection:bg-[#000000] selection:text-[#FFFFFF] flex flex-col justify-between">
      
      {/* Background Video Layer (z-0) */}
      <div
        id="video-background-wrapper"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-0 overflow-hidden top-40 sm:top-52 md:top-64"
        style={{
          height: 'auto',
          minHeight: '300px',
        }}
      >
        <video
          id="hero-looping-video"
          ref={videoRef}
          src={videoUrl}
          playsInline
          muted
          autoPlay
          preload="auto"
          className="h-full w-full object-cover object-center transition-opacity duration-75 ease-linear"
          style={{ opacity: videoOpacity }}
        />

        {/* Gradient overlays */}
        <div
          id="video-gradient-overlay"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, #FFFFFF 0%, rgba(255, 255, 255, 0.4) 20%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.6) 80%, #FFFFFF 100%)',
          }}
        />
      </div>

      {/* Global Navigation Bar */}
      <Header />

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 w-full">
        {viewMode === 'home' && (
          <div className="w-full">
            {/* Cinematic Hero Section */}
            <main
              id="hero-main-section"
              className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center pt-8 sm:pt-14 md:pt-16 pb-8"
            >
              {/* Headline: "Welcome to the,\nLee Study" */}
              <h1
                id="hero-headline"
                className="animate-fade-rise font-display w-full max-w-7xl font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight"
                style={{
                  lineHeight: 1.05,
                  color: '#000000',
                }}
              >
                <span className="block">Welcome to the,</span>
                <span className="italic block mt-1" style={{ color: '#6F6F6F' }}>
                  Lee Study
                </span>
              </h1>

              {/* Description: "Learn Smart. Practice Better. Achieve More." */}
              <p
                id="hero-description"
                className="animate-fade-rise-delay mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg md:text-xl font-medium leading-relaxed px-2"
                style={{
                  color: '#4B5563',
                }}
              >
                Learn Smart. Practice Better. Achieve More.
              </p>
            </main>
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
      </div>

      {/* Global Footer (shown on sub-pages) & Floating Nav */}
      {viewMode !== 'home' && <Footer onOpenAdmin={() => setIsAdminModalOpen(true)} />}
      <MobileNav />

      {/* Modals */}
      <GlobalSearchModal />
      <MockTestConfigModal 
        testTemplate={mockTests[0]}
        isOpen={isConfigModalOpen} 
        onClose={() => setIsConfigModalOpen(false)} 
      />
      <AdminPortalModal 
        isOpen={isAdminModalOpen} 
        onClose={() => setIsAdminModalOpen(false)} 
      />

      {/* Toast Feedback Notification */}
      {toastMessage && (
        <div 
          id="global-toast-notification"
          className="fixed bottom-20 sm:bottom-6 right-6 z-50 px-4 py-3 bg-slate-900/95 text-white text-xs sm:text-sm font-medium rounded-2xl shadow-2xl border border-slate-700/80 flex items-center gap-2.5 animate-fade-rise"
        >
          <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}

export function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}

export default App;
