import React from 'react';
import { useApp } from '../context/AppContext';
import { BookOpen, CheckSquare, Bell, Globe, Headphones, Wifi, Heart } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const { setViewMode, t, language } = useApp();

  return (
    <footer className="bg-slate-950/80 backdrop-blur-md border-t border-slate-800/80 text-slate-300 py-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-600/30">
                LS
              </div>
              <span className="text-lg font-bold text-white tracking-tight">LEE STUDY</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              {t('subTagline')}
            </p>
            <div className="text-[11px] text-slate-400">
              Tagline: <em className="text-slate-200">"Learn Smart. Practice Better. Achieve More."</em>
            </div>
          </div>

          {/* Col 2: AP Exams */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              AP Government Exams
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => { setViewMode('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400 transition-colors text-slate-300">
                  APPSC Group 1, 2, 3, 4
                </button>
              </li>
              <li>
                <button onClick={() => { setViewMode('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400 transition-colors text-slate-300">
                  AP Mega DSC & TET (Teacher Recruitment)
                </button>
              </li>
              <li>
                <button onClick={() => { setViewMode('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400 transition-colors text-slate-300">
                  AP Police SI & Constable
                </button>
              </li>
              <li>
                <button onClick={() => { setViewMode('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400 transition-colors text-slate-300">
                  Grama & Ward Sachivalayam
                </button>
              </li>
              <li>
                <button onClick={() => { setViewMode('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400 transition-colors text-slate-300">
                  AP High Court & District Court Staff
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal Features */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Features & Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5 text-slate-300">
                <CheckSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Negative Marking Exam Simulator</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <Headphones className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Multilingual Telugu & English Audio</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <Wifi className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Offline Vault Storage</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Andhra Pradesh Current Affairs</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform Guarantee & Admin */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Free Access & Portal
            </h4>
            <p className="text-xs leading-relaxed text-slate-300">
              LEE STUDY provides 100% free educational resources, syllabus outlines, and tests for all AP aspirants.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenAdmin}
                className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-slate-200 hover:text-white hover:border-slate-500 text-xs font-semibold transition-all"
              >
                🔒 Faculty & Admin Portal
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © 2026 LEE STUDY — Andhra Pradesh State Government Exam Portal.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with focus for AP aspirants</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
