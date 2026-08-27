import React, { useEffect, useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { Search, X, BookOpen, CheckSquare, Bell, ArrowRight, CornerDownLeft } from 'lucide-react';

export const GlobalSearchModal: React.FC = () => {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    courses, 
    mockTests, 
    notifications, 
    openCourse, 
    openTopic, 
    openMockTest, 
    language 
  } = useApp();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const cleanQ = query.trim().toLowerCase();

  // Search results
  const matchedCourses = cleanQ
    ? courses.filter(c => 
        c.title.toLowerCase().includes(cleanQ) ||
        c.titleTe.toLowerCase().includes(cleanQ) ||
        (c.description && c.description.toLowerCase().includes(cleanQ)) ||
        (c.shortDesc && c.shortDesc.toLowerCase().includes(cleanQ)) ||
        (c.badge && c.badge.toLowerCase().includes(cleanQ))
      )
    : [];

  const matchedTopics: Array<{ topicId: string; courseId: string; title: string; courseTitle: string }> = [];
  if (cleanQ) {
    for (const c of courses) {
      for (const s of c.subjects) {
        for (const t of s.topics) {
          if (
            t.title.toLowerCase().includes(cleanQ) ||
            t.titleTe.toLowerCase().includes(cleanQ) ||
            t.shortDesc.toLowerCase().includes(cleanQ)
          ) {
            matchedTopics.push({
              topicId: t.id,
              courseId: c.id,
              title: language === 'te' ? t.titleTe : t.title,
              courseTitle: language === 'te' ? c.titleTe : c.title
            });
          }
        }
      }
    }
  }

  const matchedMockTests = cleanQ
    ? mockTests.filter(m =>
        m.title.toLowerCase().includes(cleanQ) ||
        m.titleTe.toLowerCase().includes(cleanQ) ||
        m.targetExam.toLowerCase().includes(cleanQ)
      )
    : [];

  const matchedNotifications = cleanQ
    ? notifications.filter(n =>
        n.title.toLowerCase().includes(cleanQ) ||
        n.titleTe.toLowerCase().includes(cleanQ) ||
        n.department.toLowerCase().includes(cleanQ)
      )
    : [];

  const hasResults = matchedCourses.length > 0 || matchedTopics.length > 0 || matchedMockTests.length > 0 || matchedNotifications.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 gap-3">
          <Search className="w-5 h-5 text-blue-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search APPSC Group 2, DSC, Police, Fundamental Rights, Satavahanas..."
            className="flex-1 bg-transparent text-white text-base placeholder:text-slate-500 focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700 hover:bg-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 overflow-y-auto space-y-6 flex-1">
          {!cleanQ && (
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Popular Searches in AP</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'APPSC Group 2',
                  'Fundamental Rights',
                  'AP Mega DSC 2026',
                  'Satavahanas Amaravati',
                  'Police SI Arithmetic',
                  'Rythu Bharosa RBK'
                ].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {cleanQ && !hasResults && (
            <div className="text-center py-12 text-slate-400">
              <p className="text-sm">No results found for "{query}".</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for "Polity", "DSC", "Satavahanas", or "Group 2".</p>
            </div>
          )}

          {/* Courses matches */}
          {matchedCourses.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Courses ({matchedCourses.length})</span>
              </div>
              <div className="space-y-2">
                {matchedCourses.map(course => (
                  <button
                    key={course.id}
                    onClick={() => {
                      openCourse(course.id);
                      setIsSearchOpen(false);
                    }}
                    className="w-full text-left p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 flex items-center justify-between transition-all group"
                  >
                    <div>
                      <div className="font-semibold text-white text-sm group-hover:text-blue-300">
                        {language === 'te' ? course.titleTe : course.title}
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {language === 'te' ? course.descriptionTe : course.description}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Topics matches */}
          {matchedTopics.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Topics & Notes ({matchedTopics.length})</span>
              </div>
              <div className="space-y-2">
                {matchedTopics.map(item => (
                  <button
                    key={item.topicId}
                    onClick={() => {
                      openTopic(item.topicId, item.courseId);
                      setIsSearchOpen(false);
                    }}
                    className="w-full text-left p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-emerald-500/50 flex items-center justify-between transition-all group"
                  >
                    <div>
                      <div className="font-semibold text-white text-sm group-hover:text-emerald-300">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Course: {item.courseTitle}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-emerald-400 shrink-0 ml-2 font-medium">
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Mock tests matches */}
          {matchedMockTests.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Mock Tests ({matchedMockTests.length})</span>
              </div>
              <div className="space-y-2">
                {matchedMockTests.map(m => (
                  <button
                    key={m.id}
                    onClick={() => {
                      openMockTest(m.id);
                      setIsSearchOpen(false);
                    }}
                    className="w-full text-left p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-amber-500/50 flex items-center justify-between transition-all group"
                  >
                    <div>
                      <div className="font-semibold text-white text-sm group-hover:text-amber-300">
                        {language === 'te' ? m.titleTe : m.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {m.questionsCount} Questions • {m.durationMinutes} Mins • {m.targetExam}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-amber-400 shrink-0 ml-2 font-medium">
                      <span>Start</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Notifications matches */}
          {matchedNotifications.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
                <Bell className="w-3.5 h-3.5" />
                <span>Job Alerts ({matchedNotifications.length})</span>
              </div>
              <div className="space-y-2">
                {matchedNotifications.map(n => (
                  <div
                    key={n.id}
                    className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-left"
                  >
                    <div className="font-semibold text-white text-sm">
                      {language === 'te' ? n.titleTe : n.title}
                    </div>
                    <div className="text-xs text-purple-300 mt-1">
                      {n.vacanciesCount} • Last Date: {n.lastDateToApply}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Search index updated with latest APPSC 2026 syllabus</span>
          <span className="flex items-center gap-1">
            <CornerDownLeft className="w-3 h-3" /> to select
          </span>
        </div>
      </div>
    </div>
  );
};
