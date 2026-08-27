import React from 'react';
import { useApp } from '../context/AppContext';
import { BookOpen, CheckSquare, Bell, Globe, Headphones, Wifi, Heart } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const { setViewMode, t, language } = useApp();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm">
                LS
              </div>
              <span className="text-lg font-bold text-white tracking-tight">LEE STUDY</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              {t('subTagline')}
            </p>
            <div className="text-[11px] text-slate-400">
              Tagline: <em className="text-slate-300">"Learn Smart. Practice Better. Achieve More."</em>
            </div>
          </div>

          {/* Col 2: AP Exams */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              AP Government Exams
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => { setViewMode('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400 transition-colors">
                  APPSC Group 1, 2, 3, 4
                </button>
              </li>
              <li>
                <button onClick={() => { setViewMode('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400 transition-colors">
                  AP Mega DSC & TET (Teacher Recruitment)
                </button>
              </li>
              <li>
                <button onClick={() => { setViewMode('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400 transition-colors">
                  AP Police SI & Constable
                </button>
              </li>
              <li>
                <button onClick={() => { setViewMode('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400 transition-colors">
                  Grama & Ward Sachivalayam
                </button>
              </li>
              <li>
                <button onClick={() => { setViewMode('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400 transition-colors">
                  High Court & District Court Staff
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Features */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Core Ecosystem
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => { setViewMode('mock-tests'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-emerald-400 transition-colors">
                  Negative Marking Mock Tests
                </button>
              </li>
              <li>
                <button onClick={() => { setViewMode('notifications'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-purple-400 transition-colors">
                  Official Job Notifications Alert
                </button>
              </li>
              <li>
                <button onClick={() => { setViewMode('dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-400 transition-colors">
                  Offline Learning Vault & Streaks
                </button>
              </li>
              <li>
                <span className="text-slate-400">
                  Multilingual Web Speech Synthesis
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Faculty & Offline */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Accessibility & Admin
            </h4>
            <p className="text-xs text-slate-400">
              Offline caching integrated to enable continuous learning across rural Andhra Pradesh.
            </p>
            <button
              onClick={onOpenAdmin}
              className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Faculty CMS Portal
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-900 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>&copy; {new Date().getFullYear()} LEE STUDY. All rights reserved. Dedicated to Andhra Pradesh Aspirants.</span>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Built for Speed & Reliability</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
