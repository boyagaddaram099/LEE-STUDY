import React from 'react';
import { useApp } from '../context/AppContext';
import { Search, Globe, Flame, User } from 'lucide-react';
import { Language } from '../types';

export const Header: React.FC = () => {
  const { 
    viewMode, 
    setViewMode, 
    language, 
    setLanguage, 
    t, 
    setIsSearchOpen, 
    userProgress 
  } = useApp();

  const handleNavClick = (mode: typeof viewMode) => {
    setViewMode(mode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/70 bg-slate-950/75 backdrop-blur-xl transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* ZONE 1: Single brand title */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg group shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-sm sm:text-base shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform shrink-0">
            LS
          </div>
          <span className="text-base sm:text-xl font-extrabold tracking-tight text-white whitespace-nowrap drop-shadow-sm">
            LEE STUDY
          </span>
        </button>

        {/* ZONE 2: 4–5 single-line nav links (hidden on mobile, visible on md+) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
              viewMode === 'home' 
                ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40 shadow-sm' 
                : 'text-slate-200 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            {t('navHome')}
          </button>

          <button
            onClick={() => handleNavClick('courses')}
            className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
              viewMode === 'courses' || viewMode === 'course-detail' || viewMode === 'topic-reader' || viewMode === 'practice-exam'
                ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40 shadow-sm' 
                : 'text-slate-200 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            {t('navCourses')}
          </button>

          <button
            onClick={() => handleNavClick('mock-tests')}
            className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
              viewMode === 'mock-tests' || viewMode === 'mock-test-runner'
                ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40 shadow-sm' 
                : 'text-slate-200 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            {t('navMockTests')}
          </button>

          <button
            onClick={() => handleNavClick('notifications')}
            className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap shrink-0 relative ${
              viewMode === 'notifications' 
                ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40 shadow-sm' 
                : 'text-slate-200 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            {t('navNotifications')}
            <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-400 rounded-full ring-2 ring-slate-950 animate-ping"></span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-400 rounded-full ring-2 ring-slate-950"></span>
          </button>

          <button
            onClick={() => handleNavClick('dashboard')}
            className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
              viewMode === 'dashboard' 
                ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40 shadow-sm' 
                : 'text-slate-200 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            {t('navDashboard')}
          </button>
        </nav>

        {/* ZONE 3: 1–2 primary actions + Language & Search */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-slate-900/70 border border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-500 flex items-center gap-2 text-sm backdrop-blur-md transition-all focus-visible:ring-2 focus-visible:ring-blue-500"
            title="Search courses and exams"
          >
            <Search className="w-4 h-4 text-slate-300 shrink-0" />
            <span className="hidden xl:inline text-xs text-slate-300">Search (Ctrl+K)</span>
          </button>

          {/* Multilingual Selector */}
          <div className="relative flex items-center bg-slate-900/70 border border-slate-700/80 rounded-xl p-0.5 backdrop-blur-md">
            <Globe className="w-3.5 h-3.5 text-blue-400 ml-1.5 hidden sm:block shrink-0" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent text-xs sm:text-sm text-slate-100 font-bold py-1 px-1.5 sm:px-2 focus:outline-none cursor-pointer"
              aria-label="Select Language"
            >
              <option value="en" className="bg-slate-900 text-slate-100 font-semibold">EN</option>
              <option value="te" className="bg-slate-900 text-slate-100 font-semibold">తెలుగు</option>
              <option value="hi" className="bg-slate-900 text-slate-100 font-semibold">हिन्दी</option>
            </select>
          </div>

          {/* User Streak / Profile Pill */}
          <button
            onClick={() => handleNavClick('dashboard')}
            className="hidden sm:flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-blue-950/70 border border-blue-700/60 text-blue-300 hover:bg-blue-900/70 backdrop-blur-md transition-colors text-xs font-bold whitespace-nowrap shrink-0 shadow-sm"
          >
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
            <span>{userProgress.streakDays}d Streak</span>
          </button>

          <button
            onClick={() => handleNavClick('dashboard')}
            className="w-8 h-8 rounded-xl bg-slate-900/80 border border-slate-700 flex items-center justify-center text-slate-200 hover:text-white md:hidden shrink-0"
            aria-label="User Profile"
          >
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
