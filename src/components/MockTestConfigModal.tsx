import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { MockTest } from '../types';
import { 
  generateDynamicMockTest, 
  getCategoryQuestionStats 
} from '../utils/mockQuestionEngine';
import { 
  Sliders, 
  ShieldCheck, 
  Clock, 
  HelpCircle, 
  CheckCircle2, 
  RotateCcw, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  X,
  AlertCircle
} from 'lucide-react';

interface MockTestConfigModalProps {
  testTemplate?: MockTest | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MockTestConfigModal: React.FC<MockTestConfigModalProps> = ({
  testTemplate,
  isOpen,
  onClose
}) => {
  const { 
    mockTests,
    userProgress, 
    startCustomMockTest, 
    resetAttemptedQuestions, 
    language,
    showToast 
  } = useApp();

  const effectiveTemplate = testTemplate || mockTests[0] || null;

  const [questionCount, setQuestionCount] = useState<number>(50);
  const [preventRepeat, setPreventRepeat] = useState<boolean>(true);
  const [negativeMarking, setNegativeMarking] = useState<number>(effectiveTemplate?.negativeMarking ?? 0.33);
  const [customTime, setCustomTime] = useState<number>(60);

  // Sync state if effectiveTemplate changes
  React.useEffect(() => {
    if (effectiveTemplate?.negativeMarking !== undefined) {
      setNegativeMarking(effectiveTemplate.negativeMarking);
    }
  }, [effectiveTemplate?.id, effectiveTemplate?.negativeMarking]);

  // Sync custom time when question count changes
  const handleQuestionCountChange = (count: number) => {
    const valid = Math.max(50, Math.min(100, count));
    setQuestionCount(valid);
    setCustomTime(Math.round(valid * 1.2)); // e.g. 50 Qs -> 60m, 75 Qs -> 90m, 100 Qs -> 120m
  };

  const attemptedIds = userProgress.attemptedQuestionIds || [];
  
  // Real-time pool telemetry for this test category
  const poolStats = useMemo(() => {
    if (!effectiveTemplate) {
      return { totalQuestions: 0, attempted: 0, unattempted: 0, subjects: [] };
    }
    return getCategoryQuestionStats(effectiveTemplate.category, attemptedIds);
  }, [effectiveTemplate?.category, attemptedIds]);

  if (!isOpen || !effectiveTemplate) return null;

  const title = language === 'te' ? (effectiveTemplate.titleTe || effectiveTemplate.title) : language === 'hi' ? (effectiveTemplate.titleHi || effectiveTemplate.title) : effectiveTemplate.title;

  const handleLaunch = () => {
    if (!effectiveTemplate) return;
    const generated = generateDynamicMockTest({
      baseTest: effectiveTemplate,
      targetQuestionCount: questionCount,
      customDurationMinutes: customTime,
      customNegativeMarking: negativeMarking,
      preventRepeat: preventRepeat,
      attemptedQuestionIds: attemptedIds
    });

    if (generated.stats.isRecycled && preventRepeat) {
      showToast(`All ${poolStats.unattempted} fresh questions loaded + ${generated.stats.recycledUsed} recycled questions to make ${questionCount} MCQs.`);
    } else if (preventRepeat) {
      showToast(`Generated ${questionCount} completely fresh, non-repeated exam questions.`);
    }

    onClose();
    startCustomMockTest(generated.mockTest);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col justify-between">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 flex items-start justify-between gap-4 sticky top-0 bg-slate-900/95 backdrop-blur z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-800/80 text-[11px] font-bold text-emerald-300">
                {effectiveTemplate.targetExam}
              </span>
              <span className="flex items-center gap-1 text-[11px] font-semibold text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded-full border border-sky-800/60">
                <Sliders className="w-3 h-3" />
                Custom Exam Generator (50–100 Qs)
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-5 sm:p-6 space-y-6">

          {/* Question Count Selection (50 to 100) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-400" />
                <span>Select Number of Questions:</span>
              </label>
              <span className="text-lg font-black text-emerald-400 bg-emerald-950/80 px-3 py-0.5 rounded-lg border border-emerald-800/60">
                {questionCount} MCQs
              </span>
            </div>

            {/* Quick Presets */}
            <div className="grid grid-cols-3 gap-2.5 mb-3">
              {[
                { count: 50, label: '50 Qs', desc: 'Sprint Exam (60 Min)' },
                { count: 75, label: '75 Qs', desc: 'Standard (90 Min)' },
                { count: 100, label: '100 Qs', desc: 'Full Grand Mock (120 Min)' }
              ].map(preset => (
                <button
                  key={preset.count}
                  type="button"
                  onClick={() => handleQuestionCountChange(preset.count)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    questionCount === preset.count
                      ? 'bg-emerald-600/20 border-emerald-500 text-white shadow-md shadow-emerald-900/40'
                      : 'bg-slate-800/50 border-slate-700/60 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <div className="font-extrabold text-base mb-0.5">{preset.label}</div>
                  <div className="text-[11px] text-slate-400">{preset.desc}</div>
                </button>
              ))}
            </div>

            {/* Range Slider for 50-100 */}
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-semibold">
                <span>Min: 50 Questions</span>
                <span className="text-emerald-400 font-bold">{questionCount} Questions Selected</span>
                <span>Max: 100 Questions</span>
              </div>
              <input
                type="range"
                min={50}
                max={100}
                step={5}
                value={questionCount}
                onChange={(e) => handleQuestionCountChange(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
          </div>

          {/* Anti-Repetition Engine Card */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold text-white">
                  Zero-Repetition Question Engine
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preventRepeat}
                  onChange={(e) => setPreventRepeat(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-10 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
              </label>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              When enabled, LEE STUDY ensures you will <strong className="text-slate-200">never see the same question again</strong> across your test attempts. Questions are drawn strictly from your unattempted pool.
            </p>

            {/* Pool Metrics */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-center text-xs">
              <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Total Bank Size</div>
                <div className="text-sm font-bold text-white">{poolStats.totalQuestions} MCQs</div>
              </div>
              <div className="bg-emerald-950/40 p-2 rounded-lg border border-emerald-800/40">
                <div className="text-emerald-400 text-[10px]">Fresh / Unattempted</div>
                <div className="text-sm font-bold text-emerald-300">{poolStats.unattempted} Fresh</div>
              </div>
              <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Already Solved</div>
                <div className="text-sm font-bold text-slate-300">{poolStats.attempted} Solved</div>
              </div>
            </div>

            {/* Reset History Action if user wants */}
            {poolStats.attempted > 0 && (
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-slate-500">Want to start a new practice cycle?</span>
                <button
                  type="button"
                  onClick={resetAttemptedQuestions}
                  className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold hover:underline"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset Question History
                </button>
              </div>
            )}
          </div>

          {/* Duration & Negative Marking Config */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Duration */}
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5 mb-2">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                Exam Duration (Minutes)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={20}
                  max={180}
                  step={5}
                  value={customTime}
                  onChange={(e) => setCustomTime(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm font-bold text-white focus:outline-none focus:border-emerald-500"
                />
                <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">
                  ({(customTime / 60).toFixed(1)} Hours)
                </span>
              </div>
            </div>

            {/* Negative Marking */}
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5 mb-2">
                <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                Negative Marking Penalty
              </label>
              <select
                value={negativeMarking}
                onChange={(e) => setNegativeMarking(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm font-bold text-white focus:outline-none focus:border-emerald-500"
              >
                <option value={0.33}>-0.33 Mark (APPSC / AP Police Standard)</option>
                <option value={0.25}>-0.25 Mark (DSC / Central Standard)</option>
                <option value={0}>No Negative Marking (0.00)</option>
              </select>
            </div>
          </div>

          {/* Subjects Syllabus Distribution */}
          <div>
            <div className="text-xs font-bold text-slate-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              Syllabus Distribution Across Subjects:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {poolStats.subjects.map((sub, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300 flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {sub.name} <span className="text-slate-500 font-mono">({sub.unattempted} fresh)</span>
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-slate-800 bg-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            <span className="font-bold text-white">{questionCount} Questions</span> • <span className="font-bold text-sky-400">{customTime} Mins</span> • <span className="font-bold text-rose-400">-{negativeMarking} Penalty</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleLaunch}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all"
            >
              <span>Start {questionCount}-Question Exam</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
