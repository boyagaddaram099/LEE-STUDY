import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  CheckSquare, 
  Volume2, 
  DownloadCloud, 
  Bell, 
  ArrowRight, 
  Zap, 
  Sparkles,
  BookOpen,
  Award
} from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  const { setViewMode, t } = useApp();

  return (
    <section className="py-12 sm:py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
            Engineered For Excellence
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why AP Aspirants Trust LEE STUDY
          </h2>
          <p className="text-xs sm:text-base text-slate-400 mt-2">
            Every feature is tailored to simulate real APPSC, APSLPRB, and AP DSC exam environments.
          </p>
        </div>

        {/* 4 Feature Surfaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Feature 1 */}
          <div 
            onClick={() => { setViewMode('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {t('feature1Title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                {t('feature1Desc')}
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-blue-400 pt-2 border-t border-slate-800">
              <span>Explore Syllabus</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Feature 2 */}
          <div 
            onClick={() => { setViewMode('mock-tests'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <CheckSquare className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {t('feature2Title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                {t('feature2Desc')}
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-emerald-400 pt-2 border-t border-slate-800">
              <span>Practice MCQs</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Feature 3 */}
          <div 
            onClick={() => { setViewMode('dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <DownloadCloud className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {t('feature3Title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                {t('feature3Desc')}
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-400 pt-2 border-t border-slate-800">
              <span>View Offline Vault</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Feature 4 */}
          <div 
            onClick={() => { setViewMode('notifications'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {t('feature4Title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                {t('feature4Desc')}
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-purple-400 pt-2 border-t border-slate-800">
              <span>Live AP Notifications</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
