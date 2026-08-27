import React from 'react';
import { useApp } from '../context/AppContext';
import { Home, BookOpen, CheckSquare, Bell, User } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const { viewMode, setViewMode, t } = useApp();

  const isCurrent = (mode: string) => {
    if (mode === 'courses') {
      return ['courses', 'course-detail', 'topic-reader', 'practice-exam'].includes(viewMode);
    }
    if (mode === 'mock-tests') {
      return ['mock-tests', 'mock-test-runner'].includes(viewMode);
    }
    return viewMode === mode;
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-slate-800/90 backdrop-blur-lg px-1.5 py-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))] flex items-center justify-around shadow-2xl">
      <button
        onClick={() => { setViewMode('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] sm:text-[11px] font-medium transition-colors ${
          isCurrent('home') ? 'text-blue-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <Home className="w-5 h-5 mb-0.5 shrink-0" />
        <span className="truncate max-w-[54px]">{t('navHome')}</span>
      </button>

      <button
        onClick={() => { setViewMode('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] sm:text-[11px] font-medium transition-colors ${
          isCurrent('courses') ? 'text-blue-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <BookOpen className="w-5 h-5 mb-0.5 shrink-0" />
        <span className="truncate max-w-[54px]">{t('navCourses')}</span>
      </button>

      <button
        onClick={() => { setViewMode('mock-tests'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] sm:text-[11px] font-medium transition-colors ${
          isCurrent('mock-tests') ? 'text-blue-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <CheckSquare className="w-5 h-5 mb-0.5 shrink-0" />
        <span className="truncate max-w-[54px]">{t('navMockTests')}</span>
      </button>

      <button
        onClick={() => { setViewMode('notifications'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] sm:text-[11px] font-medium transition-colors relative ${
          isCurrent('notifications') ? 'text-blue-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <Bell className="w-5 h-5 mb-0.5 shrink-0" />
        <span className="truncate max-w-[54px]">{t('navNotifications')}</span>
        <span className="absolute top-1 right-2 w-2 h-2 bg-emerald-500 rounded-full"></span>
      </button>

      <button
        onClick={() => { setViewMode('dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] sm:text-[11px] font-medium transition-colors ${
          isCurrent('dashboard') ? 'text-blue-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <User className="w-5 h-5 mb-0.5 shrink-0" />
        <span className="truncate max-w-[54px]">{t('navDashboard')}</span>
      </button>
    </div>
  );
};
