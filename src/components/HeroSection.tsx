import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  CheckSquare, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  ShieldCheck, 
  Award,
  Zap,
  Globe2
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setViewMode, t } = useApp();

  return (
    <div className="relative overflow-hidden bg-slate-950/40 backdrop-blur-[2px] border-b border-slate-800/60 py-12 sm:py-18 lg:py-24">
      
      {/* Dynamic Ambient Light Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-blue-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-5 sm:space-y-7">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-600/40 text-blue-300 text-xs sm:text-sm font-semibold shadow-lg shadow-blue-950/40 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 animate-pulse" />
            <span className="tracking-wide">Dedicated to Andhra Pradesh State Govt Aspirants</span>
          </div>

          {/* Main Headline with high readability contrast */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-md">
            {t('heroTitle')}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow">
            {t('heroSubtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-3">
            <button
              onClick={() => { setViewMode('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-blue-600/40 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <BookOpen className="w-5 h-5 shrink-0" />
              <span>{t('heroCtaExplore')}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>

            <button
              onClick={() => { setViewMode('mock-tests'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-100 hover:text-white border border-slate-700/80 hover:border-slate-500 font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 backdrop-blur-md hover:scale-[1.02] active:scale-95 transition-all shadow-lg"
            >
              <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{t('heroCtaMockTests')}</span>
            </button>
          </div>

          {/* Target Exam Badges */}
          <div className="pt-5 sm:pt-7 border-t border-slate-800/60">
            <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold block mb-3">
              Covering Official Syllabi For
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
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
                  className="px-3 py-1 rounded-xl bg-slate-900/70 border border-slate-700/70 text-slate-200 text-xs font-medium backdrop-blur-sm shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* 4 Trust Metrics Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto text-center">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/65 backdrop-blur-md border border-slate-800/80 hover:border-blue-500/40 transition-all shadow-lg">
            <div className="text-2xl sm:text-3xl font-black text-blue-400 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-5 h-5" /> 100%
            </div>
            <div className="text-xs text-slate-300 mt-1 font-semibold">AP Govt Syllabus Covered</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/65 backdrop-blur-md border border-slate-800/80 hover:border-emerald-500/40 transition-all shadow-lg">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 flex items-center justify-center gap-1.5">
              <Zap className="w-5 h-5" /> Instant
            </div>
            <div className="text-xs text-slate-300 mt-1 font-semibold">MCQ Correct/Wrong Feedback</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/65 backdrop-blur-md border border-slate-800/80 hover:border-purple-500/40 transition-all shadow-lg">
            <div className="text-2xl sm:text-3xl font-black text-purple-400 flex items-center justify-center gap-1.5">
              <Globe2 className="w-5 h-5" /> 3 Languages
            </div>
            <div className="text-xs text-slate-300 mt-1 font-semibold">Telugu, English & Hindi Notes</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/65 backdrop-blur-md border border-slate-800/80 hover:border-amber-500/40 transition-all shadow-lg">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 flex items-center justify-center gap-1.5">
              <Award className="w-5 h-5" /> 100% Free
            </div>
            <div className="text-xs text-slate-300 mt-1 font-semibold">Offline Learning Vault</div>
          </div>
        </div>

      </div>

    </div>
  );
};
