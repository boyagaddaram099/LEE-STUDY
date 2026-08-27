import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Play, 
  CheckSquare, 
  Volume2, 
  DownloadCloud, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  ShieldCheck, 
  Award,
  Flame,
  Globe
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setViewMode, courses, mockTests, language, t } = useApp();

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80 py-10 sm:py-16 lg:py-20">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-5 sm:space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs sm:text-sm font-semibold shadow-inner">
            <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Dedicated to Andhra Pradesh State Govt Aspirants</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] break-words">
            {t('heroTitle')}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => { setViewMode('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 active:scale-95 transition-all"
            >
              <BookOpen className="w-5 h-5 shrink-0" />
              <span>{t('heroCtaExplore')}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>

            <button
              onClick={() => { setViewMode('mock-tests'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all"
            >
              <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{t('heroCtaMockTests')}</span>
            </button>
          </div>

          {/* Target Exam Badges */}
          <div className="pt-4 sm:pt-6 border-t border-slate-800/80">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block mb-3">
              Covering Official Syllabi For
            </span>
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {[
                'APPSC Group 2 (Exec & Non-Exec)',
                'AP Mega DSC 2026',
                'AP Police SI & Constable',
                'Grama / Ward Sachivalayam',
                'AP High Court Staff',
                'TET Exam'
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 sm:px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* 4 Trust Metrics Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto text-center">
          <div className="p-3.5 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-blue-400">100%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">AP Govt Syllabus Covered</div>
          </div>
          <div className="p-3.5 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">Instant</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">MCQ Correct/Wrong Feedback</div>
          </div>
          <div className="p-3.5 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-purple-400">3 Languages</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Telugu, English & Hindi Notes</div>
          </div>
          <div className="p-3.5 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">100% Free</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Offline Learning Vault</div>
          </div>
        </div>

      </div>

    </div>
  );
};
