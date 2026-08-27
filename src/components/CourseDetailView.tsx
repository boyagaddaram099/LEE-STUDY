import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  PlayCircle, 
  Layers, 
  Sparkles, 
  ChevronDown,
  ChevronUp,
  FileText,
  Search,
  Check,
  Filter
} from 'lucide-react';

export const CourseDetailView: React.FC = () => {
  const { 
    activeCourse, 
    courses,
    setViewMode, 
    openTopic, 
    openPracticeExam, 
    userProgress, 
    language, 
    t 
  } = useApp();

  const currentCourse = activeCourse || (courses.length > 0 ? courses[0] : null);

  const [expandedSubjectIds, setExpandedSubjectIds] = useState<string[]>(() => 
    currentCourse?.subjects?.map(s => s.id) || []
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'completed' | 'pending'>('all');

  if (!currentCourse) {
    return (
      <div className="py-16 text-center text-slate-400 px-4">
        <p>No course selected.</p>
        <button 
          onClick={() => setViewMode('courses')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold"
        >
          View Courses
        </button>
      </div>
    );
  }

  const courseTitle = language === 'te' ? currentCourse.titleTe : language === 'hi' ? currentCourse.titleHi : currentCourse.title;
  const courseDesc = language === 'te' ? currentCourse.shortDescTe : language === 'hi' ? currentCourse.shortDescHi : currentCourse.shortDesc;
  const courseBadge = language === 'te' ? currentCourse.badgeTe : language === 'hi' ? currentCourse.badgeHi : currentCourse.badge;

  // Calculate stats
  let totalTopics = 0;
  let completedTopics = 0;
  let firstUncompletedTopicId: string | null = null;

  currentCourse.subjects.forEach(subject => {
    subject.topics.forEach(topic => {
      totalTopics++;
      if ((userProgress.completedTopicIds || []).includes(topic.id)) {
        completedTopics++;
      } else if (!firstUncompletedTopicId) {
        firstUncompletedTopicId = topic.id;
      }
    });
  });

  const progressPercent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  const continueTargetTopicId = firstUncompletedTopicId || currentCourse.subjects[0]?.topics[0]?.id;

  const toggleSubject = (subId: string) => {
    setExpandedSubjectIds(prev => 
      prev.includes(subId) ? prev.filter(id => id !== subId) : [...prev, subId]
    );
  };

  const expandAll = () => {
    setExpandedSubjectIds(currentCourse.subjects.map(s => s.id));
  };

  const collapseAll = () => {
    setExpandedSubjectIds([]);
  };

  // Filtered topics calculation
  const filteredSubjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return currentCourse.subjects.map(subject => {
      const filteredTopics = subject.topics.filter(topic => {
        const titleMatch = 
          topic.title.toLowerCase().includes(q) ||
          (topic.titleTe && topic.titleTe.toLowerCase().includes(q)) ||
          (topic.titleHi && topic.titleHi.toLowerCase().includes(q)) ||
          (topic.shortDesc && topic.shortDesc.toLowerCase().includes(q));

        const isCompleted = (userProgress.completedTopicIds || []).includes(topic.id);
        
        if (filterMode === 'completed') {
          return titleMatch && isCompleted;
        }
        if (filterMode === 'pending') {
          return titleMatch && !isCompleted;
        }
        return titleMatch;
      });

      return {
        ...subject,
        topics: filteredTopics,
        totalInSubject: subject.topics.length
      };
    });
  }, [currentCourse, searchQuery, filterMode, userProgress.completedTopicIds]);

  return (
    <div className="py-6 sm:py-8 max-w-7xl mx-auto px-3 sm:px-6 overflow-x-hidden">
      
      {/* Back Button */}
      <button
        onClick={() => setViewMode('courses')}
        className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 shrink-0" />
        <span>Back to All Courses</span>
      </button>

      {/* Course Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          <div className="max-w-3xl flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800/60 text-blue-300 text-xs font-semibold mb-3 flex-wrap">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{courseBadge}</span>
              <span>•</span>
              <span>{currentCourse.examCategory}</span>
            </div>

            <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3 break-words">
              {courseTitle}
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-6 leading-relaxed">
              {courseDesc}
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <Layers className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{currentCourse.subjects.length} Subjects</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold text-emerald-300">{totalTopics} Detailed Topics</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{currentCourse.durationWeeks} Weeks Plan</span>
              </div>
            </div>
          </div>

          {/* Progress Box & Action */}
          <div className="w-full lg:w-72 bg-slate-950/80 border border-slate-800 rounded-2xl p-4 sm:p-5 shrink-0 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-400">Course Mastery</span>
                <span className="text-sm font-bold text-blue-400">{progressPercent}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-3">
                <div
                  className="bg-blue-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                {completedTopics} of {totalTopics} topics completed
              </p>
            </div>

            {continueTargetTopicId && (
              <button
                onClick={() => openTopic(continueTargetTopicId, currentCourse.id)}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 active:scale-95 transition-all"
              >
                <PlayCircle className="w-4 h-4 shrink-0" />
                <span>{t('btnContinueLearning')}</span>
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 sm:p-4 mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${totalTopics} topics...`}
            className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Filter buttons */}
        <div className="flex items-center flex-wrap gap-2 w-full md:w-auto justify-between md:justify-end">
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                filterMode === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({totalTopics})
            </button>
            <button
              onClick={() => setFilterMode('completed')}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                filterMode === 'completed' 
                  ? 'bg-emerald-600 text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Done ({completedTopics})
            </button>
            <button
              onClick={() => setFilterMode('pending')}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                filterMode === 'pending' 
                  ? 'bg-amber-600 text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Left ({totalTopics - completedTopics})
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 shrink-0">
            <button 
              onClick={expandAll}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium whitespace-nowrap"
            >
              Expand All
            </button>
            <button 
              onClick={collapseAll}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium whitespace-nowrap"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {/* Subjects & Topics Syllabus Accordion */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
            Course Curriculum & Structured Topics ({totalTopics} Total)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Select any topic to start reading with multilingual support, quick facts, revision points, and practice tests.
          </p>
        </div>

        <div className="space-y-4">
          {filteredSubjects.map((subject, subIndex) => {
            const isExpanded = expandedSubjectIds.includes(subject.id) || searchQuery.trim().length > 0;
            const subjectName = language === 'te' ? subject.nameTe : language === 'hi' ? subject.nameHi : subject.name;
            
            return (
              <div 
                key={subject.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all"
              >
                {/* Subject Header */}
                <button
                  onClick={() => toggleSubject(subject.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-slate-800/40 transition-colors gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs sm:text-sm shrink-0">
                      0{subIndex + 1}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-white truncate">
                        {subjectName}
                      </h3>
                      <p className="text-xs text-slate-400 truncate">
                        {subject.topics.length} of {subject.totalInSubject} Topics • {subject.totalHours} Hours
                      </p>
                    </div>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-lg bg-slate-800 text-slate-400 shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Topics List */}
                {isExpanded && (
                  <div className="p-3 sm:p-5 pt-0 border-t border-slate-800 space-y-3">
                    {subject.topics.length === 0 ? (
                      <p className="text-xs text-slate-500 py-3 text-center">
                        No topics match your search or filter criteria in this subject.
                      </p>
                    ) : (
                      subject.topics.map((topic, topicIndex) => {
                        const isCompleted = userProgress.completedTopicIds.includes(topic.id);
                        const topicScore = userProgress.topicScores[topic.id];
                        const topicTitle = language === 'te' ? topic.titleTe : language === 'hi' ? topic.titleHi : topic.title;
                        const topicDesc = language === 'te' ? topic.shortDescTe : language === 'hi' ? topic.shortDescHi : topic.shortDesc;

                        return (
                          <div
                            key={topic.id}
                            className="p-3.5 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 transition-all"
                          >
                            <div className="flex items-start gap-3 min-w-0 flex-1">
                              <div className="mt-0.5">
                                {isCompleted ? (
                                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                ) : (
                                  <div className="w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center text-[10px] font-bold text-slate-400 shrink-0">
                                    {topicIndex + 1}
                                  </div>
                                )}
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center flex-wrap gap-1.5 sm:gap-2 mb-1">
                                  <h4 
                                    className="text-xs sm:text-sm md:text-base font-bold text-white hover:text-blue-300 transition-colors cursor-pointer break-words"
                                    onClick={() => openTopic(topic.id, currentCourse.id)}
                                  >
                                    {topicTitle}
                                  </h4>
                                  <span className="px-2 py-0.5 rounded bg-blue-950 border border-blue-800/50 text-[10px] font-semibold text-blue-300 shrink-0">
                                    {topic.highYieldWeightage}
                                  </span>
                                </div>
                                <p className="text-xs text-slate-400 line-clamp-2 mb-2 leading-relaxed">
                                  {topicDesc}
                                </p>
                                <div className="flex items-center flex-wrap gap-2 text-[11px] text-slate-400">
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3 text-slate-400" />
                                    {topic.readTimeMinutes} min
                                  </span>
                                  <span>•</span>
                                  <span className="text-slate-400 font-medium">
                                    10–15 MCQs Practice
                                  </span>
                                  {topicScore && (
                                    <>
                                      <span>•</span>
                                      <span className="text-emerald-400 font-semibold">
                                        Score: {topicScore.score}/{topicScore.totalQuestions} ({topicScore.percentage}%)
                                      </span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-2 w-full md:w-auto justify-end shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800/60">
                              <button
                                onClick={() => openTopic(topic.id, currentCourse.id)}
                                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm shadow-blue-600/30 transition-all"
                              >
                                <FileText className="w-3.5 h-3.5 shrink-0" />
                                <span>{t('btnReadTopic')}</span>
                              </button>

                              <button
                                onClick={() => openPracticeExam(topic.id, currentCourse.id)}
                                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 flex items-center gap-1.5 transition-all"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                <span>Practice (10-15 Qs)</span>
                              </button>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
