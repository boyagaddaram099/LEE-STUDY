import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  CheckSquare, 
  Clock, 
  Award, 
  AlertCircle, 
  ArrowRight, 
  Sparkles, 
  Flame,
  Filter,
  Sliders,
  ShieldCheck,
  Zap,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import { ExamCategory, MockTest } from '../types';
import { MockTestConfigModal } from './MockTestConfigModal';
import { generateDynamicMockTest, getCategoryQuestionStats } from '../utils/mockQuestionEngine';

export const MockTestsListView: React.FC = () => {
  const { 
    mockTests, 
    startCustomMockTest, 
    userProgress, 
    resetAttemptedQuestions,
    language, 
    t,
    showToast 
  } = useApp();

  const [filterCategory, setFilterCategory] = useState<ExamCategory>('all');
  const [selectedTestForConfig, setSelectedTestForConfig] = useState<MockTest | null>(null);

  const categories: Array<{ id: ExamCategory; label: string }> = [
    { id: 'all', label: t('filterAll') },
    { id: 'appsc', label: t('filterAppsc') },
    { id: 'dsc', label: t('filterDsc') },
    { id: 'police', label: t('filterPolice') },
  ];

  const filteredTests = mockTests.filter(m => {
    if (filterCategory === 'all') return true;
    return m.category === filterCategory;
  });

  const attemptedIds = userProgress.attemptedQuestionIds || [];

  // Quick 1-click launcher for specific question counts
  const handleQuickLaunch = (test: MockTest, questionCount: number) => {
    const generated = generateDynamicMockTest({
      baseTest: test,
      targetQuestionCount: questionCount,
      customDurationMinutes: Math.round(questionCount * 1.2),
      customNegativeMarking: test.negativeMarking || 0.33,
      preventRepeat: true,
      attemptedQuestionIds: attemptedIds
    });

    if (generated.stats.isRecycled) {
      showToast(`Loaded ${questionCount} questions (Fresh: ${generated.stats.unattemptedUsed}, Recycled: ${generated.stats.recycledUsed}).`);
    } else {
      showToast(`Generated ${questionCount} fresh, non-repeated MCQs for ${test.targetExam}.`);
    }

    startCustomMockTest(generated.mockTest);
  };

  return (
    <div className="py-6 sm:py-10 pb-24 md:pb-12 max-w-7xl mx-auto px-3.5 sm:px-6">
      
      {/* Header Banner */}
      <div className="mb-8 bg-slate-900/90 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-800/80 text-[11px] sm:text-xs font-bold text-emerald-300 flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Guaranteed Zero-Repetition Engine Active
            </span>
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-[11px] sm:text-xs font-bold text-sky-300 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              Configurable: 50 to 100 Questions
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2.5 sm:mb-3 break-words">
            State-Level Grand Mock Tests
          </h1>
          
          <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed mb-4">
            Simulate real APPSC, AP Police, AP DSC/TET, and State Secretariat exams. Choose between <strong className="text-emerald-400">50 to 100 questions per test</strong> with negative marking penalties (-0.33 / -0.25). Our intelligent question bank engine ensures you <strong className="text-sky-300">never face repeated questions</strong> across test sessions.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs font-medium text-slate-400">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Total Bank: 600+ Verified AP Questions
              </span>
              <span className="flex items-center gap-1.5 text-sky-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                {attemptedIds.length} Questions Solved
              </span>
            </div>
            {attemptedIds.length > 0 && (
              <button
                onClick={resetAttemptedQuestions}
                className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 hover:underline ml-auto"
              >
                <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                Reset Attempt History
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilterCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
              filterCategory === cat.id
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTests.map((test) => {
          const title = language === 'te' ? test.titleTe : language === 'hi' ? test.titleHi : test.title;
          const userPreviousAttempt = userProgress.mockScores.find(s => s.testId === test.id || s.testId?.includes(test.id));
          const stats = getCategoryQuestionStats(test.category, attemptedIds);

          return (
            <div
              key={test.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-200 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-[11px] font-semibold text-emerald-300">
                    {test.targetExam}
                  </span>
                  <span className="text-[11px] font-bold text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded-full border border-sky-800/50">
                    {stats.unattempted} Fresh Qs
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors line-clamp-2">
                  {title}
                </h3>

                <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                  Select question count (50–100) or take a quick timed sprint. Non-repeated question engine active.
                </p>

                {/* Key Spec Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800/80 mb-4 text-center">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Options</div>
                    <div className="text-xs font-bold text-emerald-300">50 - 100 Qs</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Duration</div>
                    <div className="text-xs font-bold text-slate-200">60 - 120 Mins</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Negative Mark</div>
                    <div className="text-xs font-bold text-rose-400">
                      {test.negativeMarking > 0 ? `-${test.negativeMarking}` : 'None'}
                    </div>
                  </div>
                </div>

                {/* Quick Question Count Launch Chips */}
                <div className="mb-4">
                  <div className="text-[11px] font-bold text-slate-400 mb-1.5 flex items-center justify-between">
                    <span>Quick Start (Zero Repetition):</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      onClick={() => handleQuickLaunch(test, 50)}
                      className="py-1.5 px-2 rounded-lg bg-slate-800/80 hover:bg-emerald-700/40 border border-slate-700 hover:border-emerald-500/50 text-[11px] font-bold text-slate-200 transition-colors text-center"
                      title="50 Questions - 60 Minutes"
                    >
                      50 Qs <span className="text-[10px] text-slate-400 font-normal block">60 Min</span>
                    </button>
                    <button
                      onClick={() => handleQuickLaunch(test, 75)}
                      className="py-1.5 px-2 rounded-lg bg-slate-800/80 hover:bg-emerald-700/40 border border-slate-700 hover:border-emerald-500/50 text-[11px] font-bold text-slate-200 transition-colors text-center"
                      title="75 Questions - 90 Minutes"
                    >
                      75 Qs <span className="text-[10px] text-slate-400 font-normal block">90 Min</span>
                    </button>
                    <button
                      onClick={() => handleQuickLaunch(test, 100)}
                      className="py-1.5 px-2 rounded-lg bg-slate-800/80 hover:bg-emerald-700/40 border border-slate-700 hover:border-emerald-500/50 text-[11px] font-bold text-emerald-400 transition-colors text-center"
                      title="100 Questions - 120 Minutes Full Grand Mock"
                    >
                      100 Qs <span className="text-[10px] text-emerald-400/80 font-normal block">120 Min</span>
                    </button>
                  </div>
                </div>

                {/* Subjects Tag List */}
                <div className="mb-4">
                  <div className="text-[11px] font-semibold text-slate-400 mb-1.5">Subjects Covered:</div>
                  <div className="flex flex-wrap gap-1">
                    {test.subjectsCovered.slice(0, 3).map((sub, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 rounded bg-slate-950 text-[10px] text-slate-300 border border-slate-800">
                        {sub}
                      </span>
                    ))}
                    {test.subjectsCovered.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-slate-950 text-[10px] text-slate-400">
                        +{test.subjectsCovered.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Previous Score if any */}
                {userPreviousAttempt && (
                  <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 mb-4 flex items-center justify-between text-xs">
                    <span className="text-slate-300">Last Score:</span>
                    <span className="font-bold text-emerald-400">
                      {userPreviousAttempt.score} / {userPreviousAttempt.totalMarks} ({userPreviousAttempt.accuracyPercentage || Math.round((userPreviousAttempt.score / userPreviousAttempt.totalMarks) * 100)}%)
                    </span>
                  </div>
                )}
              </div>

              {/* Configure & Launch Button */}
              <button
                onClick={() => setSelectedTestForConfig(test)}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-95 transition-all mt-2"
              >
                <Sliders className="w-4 h-4" />
                <span>Customize (50–100 Qs) & Start</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Dynamic Test Configuration Modal */}
      {selectedTestForConfig && (
        <MockTestConfigModal
          testTemplate={selectedTestForConfig}
          isOpen={!!selectedTestForConfig}
          onClose={() => setSelectedTestForConfig(null)}
        />
      )}

    </div>
  );
};
