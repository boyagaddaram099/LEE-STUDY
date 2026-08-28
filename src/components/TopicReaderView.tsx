import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { Topic, Course, Subject } from '../types';
import { AudioPlayerBar } from './AudioPlayerBar';
import { enrichTopicContent } from '../utils/topicNotesEnricher';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Bookmark, 
  DownloadCloud, 
  Clock, 
  BookOpen, 
  Share2, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  Zap,
  Info,
  Lightbulb,
  Search,
  Copy,
  Check,
  Type,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

export const TopicReaderView: React.FC = () => {
  const { 
    activeTopic,
    activeTopicId, 
    activeCourse,
    activeCourseId, 
    courses, 
    setViewMode, 
    openPracticeExam, 
    openTopic,
    toggleBookmark, 
    toggleDownloadOffline, 
    markTopicCompleted, 
    userProgress, 
    language, 
    setLanguage, 
    showToast, 
    t 
  } = useApp();

  // Font size multiplier state (1 = default, 1.15 = large, 0.9 = compact)
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'large' | 'compact'>('normal');
  const [noteSearchQuery, setNoteSearchQuery] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Find active topic & course with bulletproof fallbacks
  let currentTopic: Topic | null = activeTopic;
  let currentSubject: Subject | null = null;
  let currentCourse: Course | null = activeCourse || (activeCourseId ? courses.find(c => c.id === activeCourseId) || null : null);

  // If currentTopic not set directly, look up by activeTopicId
  if (!currentTopic && activeTopicId) {
    for (const c of courses) {
      for (const s of c.subjects) {
        const found = s.topics.find(t => t.id === activeTopicId);
        if (found) {
          currentTopic = found;
          currentSubject = s;
          if (!currentCourse) currentCourse = c;
          break;
        }
      }
      if (currentTopic) break;
    }
  }

  // If still no topic, check last studied topic in user progress
  if (!currentTopic && userProgress?.lastStudiedTopicId) {
    for (const c of courses) {
      for (const s of c.subjects) {
        const found = s.topics.find(t => t.id === userProgress.lastStudiedTopicId);
        if (found) {
          currentTopic = found;
          currentSubject = s;
          if (!currentCourse) currentCourse = c;
          break;
        }
      }
      if (currentTopic) break;
    }
  }

  // Ultimate fallback: select the first topic of the current or first available course
  if (!currentCourse && courses.length > 0) {
    currentCourse = courses[0];
  }

  if (!currentTopic && currentCourse && currentCourse.subjects.length > 0 && currentCourse.subjects[0].topics.length > 0) {
    currentSubject = currentCourse.subjects[0];
    currentTopic = currentSubject.topics[0];
  }

  // Ensure currentSubject is found
  if (currentTopic && !currentSubject && currentCourse) {
    for (const s of currentCourse.subjects) {
      if (s.topics.some(t => t.id === currentTopic!.id)) {
        currentSubject = s;
        break;
      }
    }
  }

  // Find next and previous topics in course
  let allCourseTopics: Topic[] = [];
  if (currentCourse) {
    currentCourse.subjects.forEach(s => {
      allCourseTopics.push(...s.topics);
    });
  }

  const currentTopicIndex = currentTopic ? allCourseTopics.findIndex(t => t.id === currentTopic!.id) : -1;
  const prevTopic = currentTopicIndex > 0 ? allCourseTopics[currentTopicIndex - 1] : null;
  const nextTopic = currentTopicIndex >= 0 && currentTopicIndex < allCourseTopics.length - 1 ? allCourseTopics[currentTopicIndex + 1] : null;

  const isBookmarked = currentTopic ? (userProgress.bookmarkedTopicIds || []).includes(currentTopic.id) : false;
  const isDownloaded = currentTopic ? (userProgress.offlineDownloadedTopicIds || []).includes(currentTopic.id) : false;
  const isCompleted = currentTopic ? (userProgress.completedTopicIds || []).includes(currentTopic.id) : false;

  // Enriched notes content (adds deep academic sections, tables, case laws, mnemonics, timeline, and PYQs)
  const enrichedContent = useMemo(() => {
    if (!currentTopic) return null;
    return enrichTopicContent(currentTopic);
  }, [currentTopic]);

  // Scroll Progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setNoteSearchQuery('');
  }, [activeTopicId, currentTopic?.id]);

  if (!currentTopic || !currentCourse || !enrichedContent) {
    return (
      <div className="py-16 text-center text-slate-400 px-4">
        <p>Loading course topic syllabus...</p>
        <button 
          onClick={() => setViewMode('courses')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold"
        >
          View Courses
        </button>
      </div>
    );
  }

  const topicTitle = language === 'te' ? currentTopic.titleTe : language === 'hi' ? currentTopic.titleHi : currentTopic.title;
  const courseTitle = language === 'te' ? currentCourse.titleTe : language === 'hi' ? currentCourse.titleHi : currentCourse.title;

  const overview = language === 'te' ? (enrichedContent.overviewTe || enrichedContent.overview) : language === 'hi' ? (enrichedContent.overviewHi || enrichedContent.overview) : enrichedContent.overview;
  const apFocus = language === 'te' ? (enrichedContent.apSpecificFocusTe || enrichedContent.apSpecificFocus) : (enrichedContent.apSpecificFocus || '');
  const mnemonics = enrichedContent.mnemonics || [];

  // Build spoken text for Audio Player
  const fullTextToSpeak = useMemo(() => {
    let text = `${topicTitle}. ${overview}. `;
    enrichedContent.sections.forEach(s => {
      const sTitle = language === 'te' ? (s.titleTe || s.title) : s.title;
      const sParas = language === 'te' && s.paragraphsTe ? s.paragraphsTe : s.paragraphs;
      text += `${sTitle}. ${sParas.join(' ')}. `;
    });
    return text;
  }, [topicTitle, overview, enrichedContent, language]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: topicTitle,
        text: `Study "${topicTitle}" for Andhra Pradesh competitive exams on LEE STUDY!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Topic link copied to clipboard!');
    }
  };

  const handleCopyNotesSummary = () => {
    const keyTakeaways = enrichedContent.sections.flatMap(s => s.keyPoints || []).slice(0, 5);
    const summaryText = `${topicTitle}\n\nOVERVIEW:\n${overview}${keyTakeaways.length > 0 ? `\n\nKEY TAKEAWAYS:\n- ${keyTakeaways.join('\n- ')}` : ''}\n\n(Source: LEE STUDY - AP Competitive Exams Platform)`;
    navigator.clipboard.writeText(summaryText);
    setIsCopied(true);
    showToast('Chapter notes summary copied to clipboard!');
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Font size classes
  const fontBodyClass = fontSizeLevel === 'large' 
    ? 'text-sm sm:text-base md:text-lg leading-relaxed' 
    : fontSizeLevel === 'compact' 
      ? 'text-xs sm:text-xs md:text-sm leading-normal' 
      : 'text-xs sm:text-sm md:text-base leading-relaxed';

  return (
    <div className="py-6 sm:py-8 pb-24 md:pb-12 max-w-4xl mx-auto px-3 sm:px-6 overflow-x-hidden relative">
      
      {/* Scroll Progress Bar at top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Breadcrumb & Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        
        {/* Back Link */}
        <button
          onClick={() => setViewMode('course-detail')}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors min-w-0"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          <span className="truncate max-w-[150px] sm:max-w-xs">{courseTitle}</span>
        </button>

        {/* Action icons row */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
          {/* Font Size Adjuster */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs">
            <button
              onClick={() => setFontSizeLevel('compact')}
              className={`px-1.5 py-1 rounded font-bold ${fontSizeLevel === 'compact' ? 'bg-slate-800 text-blue-400' : 'text-slate-400 hover:text-white'}`}
              title="Compact Font Size"
            >
              A-
            </button>
            <button
              onClick={() => setFontSizeLevel('normal')}
              className={`px-1.5 py-1 rounded font-bold ${fontSizeLevel === 'normal' ? 'bg-slate-800 text-blue-400' : 'text-slate-400 hover:text-white'}`}
              title="Standard Font Size"
            >
              A
            </button>
            <button
              onClick={() => setFontSizeLevel('large')}
              className={`px-1.5 py-1 rounded font-bold ${fontSizeLevel === 'large' ? 'bg-slate-800 text-blue-400' : 'text-slate-400 hover:text-white'}`}
              title="Large Font Size"
            >
              A+
            </button>
          </div>

          {/* In-Reader Language Selector */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded font-semibold transition-colors ${language === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('te')}
              className={`px-2 py-1 rounded font-semibold transition-colors ${language === 'te' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              తెలుగు
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-2 py-1 rounded font-semibold transition-colors ${language === 'hi' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              हिन्दी
            </button>
          </div>

          {/* Copy Summary */}
          <button
            onClick={handleCopyNotesSummary}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Copy Notes Summary"
          >
            {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>

          {/* Bookmark Button */}
          <button
            onClick={() => currentTopic && toggleBookmark(currentTopic.id)}
            className={`p-2 rounded-xl border transition-all ${
              isBookmarked 
                ? 'bg-amber-950/80 border-amber-500 text-amber-300' 
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Topic'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
          </button>

          {/* Download Offline Button */}
          <button
            onClick={() => currentTopic && toggleDownloadOffline(currentTopic.id)}
            className={`p-2 rounded-xl border transition-all ${
              isDownloaded 
                ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300' 
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            title={isDownloaded ? 'Cached Offline' : 'Save for Offline Study'}
          >
            <DownloadCloud className={`w-4 h-4 ${isDownloaded ? 'text-emerald-400' : ''}`} />
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Share Note"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Topic Header Card */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-4 sm:p-6 md:p-8 mb-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-full bg-blue-950 border border-blue-800/60 text-blue-300 text-xs font-semibold">
            {currentSubject?.name}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
            {currentTopic.highYieldWeightage}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-400 ml-auto">
            <Clock className="w-3.5 h-3.5" />
            <span>{currentTopic.readTimeMinutes} min comprehensive read</span>
          </span>
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3 break-words">
          {topicTitle}
        </h1>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          {language === 'te' ? currentTopic.shortDescTe : language === 'hi' ? currentTopic.shortDescHi : currentTopic.shortDesc}
        </p>

        {/* Multilingual Voice Note Audio Bar */}
        <AudioPlayerBar 
          textToSpeak={fullTextToSpeak} 
          topicTitle={topicTitle}
        />
      </div>

      {/* Detailed Chapter Notes Body */}
      <div className="space-y-6 mb-8">
        
        {/* Chapter Executive Overview Box */}
        {overview && (
          <div className="bg-slate-900/90 border border-blue-900/40 rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Info className="w-4 h-4" />
                <span>Chapter Executive Overview & Blueprint</span>
              </div>
              <span className="text-[11px] bg-blue-950 text-blue-300 border border-blue-800 px-2 py-0.5 rounded font-mono">
                Syllabus Benchmark
              </span>
            </div>
            <p className={`${fontBodyClass} text-slate-200 break-words`}>
              {overview}
            </p>
          </div>
        )}

        {/* In-Depth Sections list */}
        {enrichedContent.sections.map((section, sIdx) => {
          const secTitle = language === 'te' ? (section.titleTe || section.title) : language === 'hi' ? (section.titleHi || section.title) : section.title;
          const secParas = language === 'te' && section.paragraphsTe ? section.paragraphsTe : language === 'hi' && section.paragraphsHi ? section.paragraphsHi : section.paragraphs;
          const secKeyPoints = language === 'te' && section.keyPointsTe ? section.keyPointsTe : language === 'hi' && section.keyPointsHi ? section.keyPointsHi : section.keyPoints;
          const secExamAlert = language === 'te' ? (section.examAlertTe || section.examAlert) : (section.examAlert || '');

          return (
            <div 
              key={sIdx}
              className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <span className="w-7 h-7 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold text-xs flex items-center justify-center shrink-0">
                  {sIdx + 1}
                </span>
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight break-words">
                  {secTitle}
                </h2>
              </div>

              <div className="space-y-3.5">
                {secParas.map((para, pIdx) => (
                  <p key={pIdx} className={`${fontBodyClass} text-slate-300 break-words`}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Section Key Takeaways */}
              {secKeyPoints && secKeyPoints.length > 0 && (
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 mt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                    Key Takeaways & Core Rules:
                  </span>
                  <ul className="space-y-1.5 list-disc pl-5 text-xs sm:text-sm text-slate-300">
                    {secKeyPoints.map((kp, kIdx) => (
                      <li key={kIdx} className="leading-relaxed">{kp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Exam Alert Note */}
              {secExamAlert && (
                <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-800/40 flex items-start gap-2.5 text-xs text-amber-200">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-400 font-bold block mb-0.5">High-Yield Exam Trap Alert:</strong>
                    <span className="leading-relaxed">{secExamAlert}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Section: Memory Mnemonics & Recall Codes */}
        {mnemonics.length > 0 && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold text-violet-400 uppercase tracking-wider border-b border-slate-800 pb-3">
              <Lightbulb className="w-4 h-4" />
              <span>Memory Mnemonics & Exam Speed Recall Codes</span>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {mnemonics.map((m, mIdx) => {
                const mTitle = language === 'te' ? (m.titleTe || m.title) : m.title;
                const mTip = language === 'te' ? (m.tipTe || m.tip) : m.tip;

                return (
                  <div key={mIdx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {mTitle}
                      </h4>
                      <span className="px-2.5 py-1 rounded-lg bg-violet-950 text-violet-300 border border-violet-800 font-mono font-bold text-xs">
                        {m.acronym}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {m.breakdown.map((item, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800/80 text-xs">
                          <span className="w-5 h-5 rounded-md bg-violet-600/30 text-violet-300 font-bold flex items-center justify-center shrink-0">
                            {item.letter}
                          </span>
                          <span className="text-slate-200">
                            {language === 'te' && item.termTe ? item.termTe : item.term}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-violet-300 bg-violet-950/40 p-2.5 rounded-xl border border-violet-900/50 leading-relaxed">
                      <strong>Memory Trick: </strong> {mTip}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* AP Specific Focus Callout */}
        {apFocus && (
          <div className="p-4 sm:p-6 rounded-3xl bg-emerald-950/30 border border-emerald-800/60 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Andhra Pradesh State Specific Focus</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed break-words">
              {apFocus}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Floating/Fixed Action Banner */}
      <div className="bg-slate-900 border border-blue-800/40 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>10–15 Practice Exam Questions Ready</span>
          </div>
          <p className="text-xs text-slate-300">
            Reinforce this chapter immediately with instant feedback practice questions.
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap justify-end shrink-0">
          <button
            onClick={() => currentTopic && markTopicCompleted(currentTopic.id)}
            className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
              isCompleted
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{isCompleted ? 'Completed' : 'Mark Complete'}</span>
          </button>

          <button
            onClick={() => currentTopic && openPracticeExam(currentTopic.id, currentCourse.id)}
            className="px-4 sm:px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 flex items-center gap-2 active:scale-95 transition-all"
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>{t('btnTakePracticeExam')} (10-15 Qs)</span>
          </button>
        </div>
      </div>

      {/* Previous / Next Topic Bottom Navigator */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800">
        {prevTopic ? (
          <button
            onClick={() => openTopic(prevTopic.id, currentCourse.id)}
            className="p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left transition-all group flex items-center gap-3"
          >
            <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-white shrink-0" />
            <div className="min-w-0 flex-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Previous Topic</span>
              <h4 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-blue-300">
                {language === 'te' ? prevTopic.titleTe : prevTopic.title}
              </h4>
            </div>
          </button>
        ) : <div />}

        {nextTopic && (
          <button
            onClick={() => openTopic(nextTopic.id, currentCourse.id)}
            className="p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-right transition-all group flex items-center justify-end gap-3"
          >
            <div className="min-w-0 flex-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Next Topic</span>
              <h4 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-blue-300">
                {language === 'te' ? nextTopic.titleTe : nextTopic.title}
              </h4>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white shrink-0" />
          </button>
        )}
      </div>

    </div>
  );
};
