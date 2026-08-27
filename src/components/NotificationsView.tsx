import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { NotificationItem } from '../types';
import { 
  Bell, 
  Calendar, 
  ExternalLink, 
  FileText, 
  Building, 
  Users, 
  Clock, 
  Sparkles, 
  Search, 
  ChevronRight, 
  X,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const NotificationsView: React.FC = () => {
  const { notifications, language, t } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedNotif, setSelectedNotif] = useState<NotificationItem | null>(null);
  const [searchFilter, setSearchFilter] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Updates' },
    { id: 'appsc', label: 'APPSC' },
    { id: 'dsc', label: 'AP Mega DSC' },
    { id: 'police', label: 'AP Police' },
    { id: 'secretariat', label: 'Grama Sachivalayam' },
  ];

  const filteredNotifs = notifications.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const q = searchFilter.toLowerCase().trim();
    const matchesQuery = !q || 
      item.title.toLowerCase().includes(q) ||
      item.titleTe.toLowerCase().includes(q) ||
      item.department.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">
          <Bell className="w-4 h-4" />
          <span>Andhra Pradesh Official Recruitment Alerts</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Latest AP Government Job Notifications
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
          Real-time verified announcements, eligibility criteria, vacancy breakdowns, application deadlines, and exam schedules directly from APPSC, APSLPRB, and AP Govt Departments.
        </p>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                activeCategory === tab.id
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search recruitment..."
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifs.map((item) => {
          const title = language === 'te' ? item.titleTe : language === 'hi' ? item.titleHi : item.title;
          const dept = language === 'te' ? item.departmentTe : language === 'hi' ? item.departmentHi : item.department;

          return (
            <div
              key={item.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 group"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-950/80 border border-purple-800/60 text-[11px] font-semibold text-purple-300">
                    {dept}
                  </span>
                  {item.isNew && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-800 animate-pulse">
                      NEW NOTIFICATION
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span><strong className="text-white">{item.vacanciesCount}</strong></span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>Apply by: <strong className="text-white">{item.lastDateToApply}</strong></span>
                  </div>

                  {item.examDate && (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Exam: <strong className="text-white">{item.examDate}</strong></span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 shrink-0 w-full lg:w-auto justify-end">
                <button
                  onClick={() => setSelectedNotif(item)}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md shadow-purple-600/20 active:scale-95 transition-all"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Notification Modal */}
      {selectedNotif && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[85vh] space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                  {selectedNotif.department}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  {language === 'te' ? selectedNotif.titleTe : selectedNotif.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedNotif(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Core Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block mb-0.5">Vacancies</span>
                <span className="text-sm font-bold text-emerald-400">{selectedNotif.vacanciesCount}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Last Date to Apply</span>
                <span className="text-sm font-bold text-rose-400">{selectedNotif.lastDateToApply}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Exam Date</span>
                <span className="text-sm font-bold text-amber-400">{selectedNotif.examDate || 'TBA'}</span>
              </div>
            </div>

            {/* Eligibility */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Educational Qualification & Eligibility Criteria
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 leading-relaxed">
                {language === 'te' ? selectedNotif.eligibilityTe : selectedNotif.eligibility}
              </p>
            </div>

            {/* Key Schedule Dates */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Official Recruitment Schedule
              </h4>
              <div className="space-y-2">
                {selectedNotif.importantDates.map((d, dIdx) => (
                  <div key={dIdx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                    <span className="text-slate-300">{d.label}</span>
                    <span className="font-bold text-purple-300">{d.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Detailed Brief
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'te' ? selectedNotif.descriptionTe : selectedNotif.description}
              </p>
            </div>

            {/* External Links */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800">
              <a
                href={selectedNotif.applyUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all"
              >
                <span>{t('applyOnline')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={selectedNotif.officialNotificationUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>{t('officialPdf')}</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
