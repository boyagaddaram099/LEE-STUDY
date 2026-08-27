import React, { useState, useEffect, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { MockTest, Question, Language } from '../types';
import confetti from 'canvas-confetti';
import { 
  Clock, 
  ArrowLeft, 
  Flag, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Award, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft,
  AlertTriangle,
  FileText,
  BarChart3,
  ShieldCheck,
  Languages,
  Sliders,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';
import { generateDynamicMockTest } from '../utils/mockQuestionEngine';

export const MockTestRunnerView: React.FC = () => {
  const { 
    activeMockTest, 
    setViewMode, 
    recordMockScore, 
    startCustomMockTest,
    userProgress, 
    language, 
    setLanguage,
    showToast,
    t 
  } = useApp();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [remainingSeconds, setRemainingSeconds] = useState<number>(
    (activeMockTest?.durationMinutes || 60) * 60
  );
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct'>('all');
  const [paletteFilter, setPaletteFilter] = useState<'all' | 'correct' | 'wrong' | 'unanswered' | 'flagged'>('all');

  const questions: Question[] = useMemo(() => activeMockTest?.questions || [], [activeMockTest]);
  const currentQ = questions[currentIndex];

  useEffect(() => {
    if (isTestFinished) return;
    const timer = setInterval(() => {
      setRemainingSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTestFinished]);

  // Handle immediate answer selection with instant correct/wrong feedback
  const handleSelectAnswer = (optionIdx: number) => {
    if (isTestFinished) return;
    
    setSelectedAnswers(prev => {
      const isFirst = prev[currentIndex] === undefined;
      const isCorrect = optionIdx === currentQ.correctIndex;

      if (isFirst && isCorrect) {
        try {
          confetti({
            particleCount: 20,
            spread: 45,
            origin: { y: 0.7 }
          });
        } catch (e) {}
      }

      return {
        ...prev,
        [currentIndex]: optionIdx
      };
    });
  };

  const handleToggleFlag = () => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [currentIndex]: !prev[currentIndex]
    }));
  };

  const handleClearAnswer = () => {
    setSelectedAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentIndex];
      return copy;
    });
  };

  const calculateFinalResults = () => {
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    // Subject breakdown calculation
    const subjectScores: Record<string, { correct: number; wrong: number; total: number }> = {};

    questions.forEach((q, idx) => {
      const sub = q.subjectName || 'General Studies';
      if (!subjectScores[sub]) subjectScores[sub] = { correct: 0, wrong: 0, total: 0 };
      subjectScores[sub].total++;

      const ans = selectedAnswers[idx];
      if (ans === undefined) {
        unattempted++;
      } else if (ans === q.correctIndex) {
        correct++;
        subjectScores[sub].correct++;
      } else {
        wrong++;
        subjectScores[sub].wrong++;
      }
    });

    const negPerWrong = activeMockTest?.negativeMarking || 0;
    const rawScore = (correct * 1) - (wrong * negPerWrong);
    const finalScore = Math.max(0, Number(rawScore.toFixed(2)));
    const totalMarks = questions.length;
    const accuracy = (correct + wrong) > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;
    
    // Realistic AP State rank estimation
    const percentile = Math.min(99.4, Math.max(45, Math.round((finalScore / totalMarks) * 100 * 0.95 + 5)));
    const stateRank = Math.max(12, Math.round((100 - percentile) * 120 + 4));

    return {
      correct,
      wrong,
      unattempted,
      totalMarks,
      finalScore,
      accuracy,
      percentile,
      stateRank,
      subjectScores
    };
  };

  const handleSubmitTest = () => {
    setShowSubmitModal(false);
    setIsTestFinished(true);
    const results = calculateFinalResults();

    if (activeMockTest) {
      const timeSpent = (activeMockTest.durationMinutes * 60) - remainingSeconds;
      const questionIdsAttempted = questions.map(q => q.id).filter(Boolean);

      recordMockScore({
        testId: activeMockTest.id,
        testTitle: activeMockTest.title,
        score: results.finalScore,
        totalMarks: results.totalMarks,
        correct: results.correct,
        incorrect: results.wrong,
        correctCount: results.correct,
        wrongCount: results.wrong,
        unattempted: results.unattempted,
        unattemptedCount: results.unattempted,
        accuracyPercentage: results.accuracy,
        timeSpentSeconds: timeSpent,
        date: new Date().toISOString().split('T')[0],
        estimatedStateRank: results.stateRank,
        percentile: results.percentile,
        questionCount: results.totalMarks
      }, questionIdsAttempted);
    }

    if (results.finalScore >= results.totalMarks * 0.6) {
      try {
        confetti({ particleCount: 120, spread: 85, origin: { y: 0.6 } });
      } catch (e) {}
    }
  };

  const handleStartNextFreshTest = (count: number = questions.length) => {
    if (!activeMockTest) return;
    const nextTest = generateDynamicMockTest({
      baseTest: activeMockTest,
      targetQuestionCount: count,
      customDurationMinutes: Math.round(count * 1.2),
      customNegativeMarking: activeMockTest.negativeMarking || 0.33,
      preventRepeat: true,
      attemptedQuestionIds: userProgress.attemptedQuestionIds || []
    });

    startCustomMockTest(nextTest.mockTest);
    setSelectedAnswers({});
    setFlaggedQuestions({});
    setIsTestFinished(false);
    setCurrentIndex(0);
    setRemainingSeconds((nextTest.mockTest.durationMinutes || 60) * 60);
    showToast(`Generated next fresh ${count}-Question Exam with zero repeated questions!`);
  };

  const formatTimer = (totalSecs: number) => {
    const hours = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    if (hours > 0) {
      return `${hours}h ${mins < 10 ? '0' : ''}${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
    }
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!activeMockTest || questions.length === 0) {
    return (
      <div className="py-16 text-center text-slate-400 px-4">
        <p>No test data available.</p>
        <button 
          onClick={() => setViewMode('mock-tests')}
          className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl"
        >
          Back to Mock Tests
        </button>
      </div>
    );
  }

  const title = language === 'te' ? activeMockTest.titleTe : language === 'hi' ? activeMockTest.titleHi : activeMockTest.title;
  const currentAnswer = selectedAnswers[currentIndex];
  const isCurrentAnswered = currentAnswer !== undefined;
  const isCurrentCorrect = isCurrentAnswered && currentAnswer === currentQ.correctIndex;
  const finalStats = calculateFinalResults();

  // Filter palette indices
  const filteredPaletteIndices = questions.map((_, idx) => idx).filter(idx => {
    const ans = selectedAnswers[idx];
    const isCorr = ans !== undefined && ans === questions[idx].correctIndex;
    const isWro = ans !== undefined && ans !== questions[idx].correctIndex;

    if (paletteFilter === 'correct') return isCorr;
    if (paletteFilter === 'wrong') return isWro;
    if (paletteFilter === 'unanswered') return ans === undefined;
    if (paletteFilter === 'flagged') return !!flaggedQuestions[idx];
    return true;
  });

  return (
    <div className="w-full min-h-screen bg-slate-950 pb-20 overflow-x-hidden">
      
      {/* Top Test Navigation Bar */}
      <div className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur border-b border-slate-800 px-3 sm:px-6 py-2.5 sm:py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <button
              onClick={() => setViewMode('mock-tests')}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
              title="Exit Test"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <span className="text-[10px] sm:text-[11px] font-bold text-emerald-400 uppercase tracking-wider block truncate max-w-[120px] sm:max-w-none">
                  {activeMockTest.targetExam}
                </span>
                <span className="text-[10px] font-bold text-sky-400 bg-sky-950/80 px-1.5 sm:px-2 py-0.5 rounded-full border border-sky-800/60 shrink-0">
                  {questions.length} MCQs
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-[10px] font-bold text-emerald-300 hidden lg:inline-flex items-center gap-1">
                  <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                  Instant Answer Feedback Active
                </span>
              </div>
              <h2 className="text-xs sm:text-sm font-bold text-white truncate max-w-[180px] sm:max-w-md">
                {title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            
            {/* Live Correct/Wrong Tally */}
            {!isTestFinished && (
              <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold bg-slate-950 px-1.5 sm:px-2 py-1 rounded-xl border border-slate-800 shrink-0">
                <span className="text-emerald-400 bg-emerald-950/60 px-1.5 sm:px-2 py-0.5 rounded-lg border border-emerald-800/50 flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  {finalStats.correct}
                </span>
                <span className="text-rose-400 bg-rose-950/60 px-1.5 sm:px-2 py-0.5 rounded-lg border border-rose-800/50 flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  {finalStats.wrong}
                </span>
              </div>
            )}

            {/* Mid-Exam Language Switcher */}
            <div className="flex items-center bg-slate-950 p-0.5 sm:p-1 rounded-xl border border-slate-800 text-[10px] sm:text-[11px] font-bold shrink-0">
              {(['en', 'te', 'hi'] as Language[]).map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-1.5 sm:px-2 py-0.5 rounded-lg uppercase transition-colors ${
                    language === lang 
                      ? 'bg-emerald-600 text-white' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Live Countdown Clock */}
            {!isTestFinished && (
              <div className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl border text-[11px] sm:text-xs md:text-sm font-bold shrink-0 ${
                remainingSeconds < 300 
                  ? 'bg-rose-950/80 border-rose-600 text-rose-300 animate-pulse' 
                  : 'bg-slate-950 border-slate-800 text-amber-400'
              }`}>
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="whitespace-nowrap">{formatTimer(remainingSeconds)}</span>
              </div>
            )}

            {!isTestFinished && (
              <button
                onClick={() => setShowSubmitModal(true)}
                className="px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/30 transition-all shrink-0 whitespace-nowrap"
              >
                Submit ({Object.keys(selectedAnswers).length}/{questions.length})
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-4 sm:pt-6">
        
        {!isTestFinished ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Left 3 cols: Question Player */}
            <div className="lg:col-span-3 space-y-4">
              
              {/* Question Progress & Live Feedback Banner */}
              <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
                <div className="flex items-center gap-2 font-semibold">
                  <span className="text-white font-bold">Question {currentIndex + 1}</span> of {questions.length}
                  <span className="text-slate-600">•</span>
                  <span className="text-emerald-400 font-bold">{Math.round(((currentIndex + 1) / questions.length) * 100)}% Progress</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    {finalStats.correct} Correct
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-rose-400 font-bold flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5" />
                    {finalStats.wrong} Wrong
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-300">{questions.length - Object.keys(selectedAnswers).length} Left</span>
                </div>
              </div>

              {currentQ && (
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl">
                  
                  {/* Question Header & Subject */}
                  <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 border-b border-slate-800 pb-3 sm:pb-4 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 min-w-0">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-emerald-300 font-black text-xs shrink-0">
                        Q {currentIndex + 1}
                      </span>
                      <span>•</span>
                      <span className="text-slate-300 font-bold truncate max-w-[150px] sm:max-w-xs">{currentQ.subjectName || 'General Studies'}</span>
                      {currentQ.referenceAct && (
                        <>
                          <span className="hidden sm:inline text-slate-600">•</span>
                          <span className="hidden sm:inline text-sky-400 font-mono text-[11px] truncate max-w-[180px]">{currentQ.referenceAct}</span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {isCurrentAnswered && (
                        <div className={`text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-1.5 ${
                          isCurrentCorrect 
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' 
                            : 'bg-rose-950 text-rose-400 border border-rose-800'
                        }`}>
                          {isCurrentCorrect ? (
                            <>
                              <Check className="w-3.5 h-3.5 shrink-0" />
                              <span className="whitespace-nowrap">Correct (+1.00)</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-3.5 h-3.5 shrink-0" />
                              <span className="whitespace-nowrap">Wrong (-{activeMockTest.negativeMarking || 0.33})</span>
                            </>
                          )}
                        </div>
                      )}

                      <button
                        onClick={handleToggleFlag}
                        className={`flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
                          flaggedQuestions[currentIndex]
                            ? 'bg-amber-950/80 border-amber-500 text-amber-300'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        <Flag className={`w-3.5 h-3.5 shrink-0 ${flaggedQuestions[currentIndex] ? 'fill-amber-400 text-amber-400' : ''}`} />
                        <span className="hidden sm:inline">{flaggedQuestions[currentIndex] ? 'Flagged' : 'Flag'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Question Text */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-6 leading-relaxed break-words">
                    {language === 'te' && currentQ.questionTe ? currentQ.questionTe : 
                      language === 'hi' && currentQ.questionHi ? currentQ.questionHi : currentQ.question}
                  </h3>

                  {/* Options List with Immediate Correct / Wrong Feedback */}
                  <div className="space-y-3 mb-6">
                    {currentQ.options.map((opt, optIndex) => {
                      const optLabel = language === 'te' && currentQ.optionsTe ? currentQ.optionsTe[optIndex] : 
                        language === 'hi' && currentQ.optionsHi ? currentQ.optionsHi[optIndex] : opt;

                      const isSelected = currentAnswer === optIndex;
                      const isCorrect = optIndex === currentQ.correctIndex;

                      let optionStyle = 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900';
                      let letterStyle = 'bg-slate-900 border-slate-700 text-slate-400';

                      if (isCurrentAnswered) {
                        if (isCorrect) {
                          // Correct option is ALWAYS highlighted green with checkmark
                          optionStyle = 'bg-emerald-950/90 border-emerald-500 text-emerald-100 font-semibold shadow-md shadow-emerald-950/60 ring-1 ring-emerald-500';
                          letterStyle = 'bg-emerald-600 border-emerald-400 text-white font-bold';
                        } else if (isSelected && !isCorrect) {
                          // Selected wrong option is highlighted red with X-mark
                          optionStyle = 'bg-rose-950/90 border-rose-500 text-rose-100 font-semibold shadow-md shadow-rose-950/60 ring-1 ring-rose-500';
                          letterStyle = 'bg-rose-600 border-rose-400 text-white font-bold';
                        } else {
                          // Unselected non-correct options are dimmed
                          optionStyle = 'bg-slate-950/30 border-slate-800/40 text-slate-500 opacity-50';
                          letterStyle = 'bg-slate-950 border-slate-800 text-slate-600';
                        }
                      }

                      const optionLetters = ['A', 'B', 'C', 'D'];

                      return (
                        <button
                          key={optIndex}
                          onClick={() => handleSelectAnswer(optIndex)}
                          className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-start sm:items-center justify-between gap-3 ${optionStyle}`}
                        >
                          <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
                            <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 border mt-0.5 sm:mt-0 ${letterStyle}`}>
                              {optionLetters[optIndex]}
                            </span>
                            <span className="text-xs sm:text-sm md:text-base leading-snug break-words flex-1">
                              {optLabel}
                            </span>
                          </div>

                          {/* Right Status Badge */}
                          {isCurrentAnswered && (
                            <div className="shrink-0 mt-0.5 sm:mt-0">
                              {isCorrect && (
                                <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-900/60 px-2 py-1 rounded-lg border border-emerald-700/60">
                                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                                  <span className="hidden sm:inline whitespace-nowrap">Correct</span>
                                </span>
                              )}
                              {isSelected && !isCorrect && (
                                <span className="flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-900/60 px-2 py-1 rounded-lg border border-rose-700/60">
                                  <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                                  <span className="hidden sm:inline whitespace-nowrap">Wrong</span>
                                </span>
                              )}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Immediate Solution & Answer Card (Appears as soon as user clicks an option) */}
                  {isCurrentAnswered && (
                    <div className={`p-4 sm:p-5 rounded-2xl border mb-6 animate-in fade-in zoom-in-95 duration-200 ${
                      isCurrentCorrect
                        ? 'bg-emerald-950/40 border-emerald-800/80 shadow-lg shadow-emerald-950/30' 
                        : 'bg-rose-950/40 border-rose-800/80 shadow-lg shadow-rose-950/30'
                    }`}>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800/80">
                        <div className="flex items-center gap-2">
                          {isCurrentCorrect ? (
                            <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                              <Check className="w-4 h-4 shrink-0" /> Correct Answer! (+1.00 Mark)
                            </span>
                          ) : (
                            <span className="flex items-center gap-1.5 text-xs font-bold text-rose-400 uppercase tracking-wider">
                              <XCircle className="w-4 h-4 shrink-0" /> Incorrect. Correct: Option {['A', 'B', 'C', 'D'][currentQ.correctIndex]} (-{activeMockTest.negativeMarking || 0.33})
                            </span>
                          )}
                        </div>

                        <span className="text-[11px] font-mono text-slate-400">
                          Instant Solution
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed break-words">
                        {language === 'te' && currentQ.explanationTe ? currentQ.explanationTe : 
                          language === 'hi' && currentQ.explanationHi ? currentQ.explanationHi : currentQ.explanation}
                      </p>

                      {currentQ.referenceAct && (
                        <div className="mt-2.5 pt-2 border-t border-slate-800/60 text-[11px] text-sky-400 font-mono break-words">
                          Syllabus Reference: {currentQ.referenceAct}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Bottom Question Controls */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                        disabled={currentIndex === 0}
                        className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-xs sm:text-sm text-slate-300 font-semibold flex items-center gap-1 shrink-0"
                      >
                        <ChevronLeft className="w-4 h-4 shrink-0" />
                        <span>Previous</span>
                      </button>

                      {selectedAnswers[currentIndex] !== undefined && (
                        <button
                          onClick={handleClearAnswer}
                          className="px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs text-slate-400 hover:text-white shrink-0"
                        >
                          Clear Choice
                        </button>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        if (currentIndex < questions.length - 1) {
                          setCurrentIndex(prev => prev + 1);
                        } else {
                          setShowSubmitModal(true);
                        }
                      }}
                      className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-md shadow-emerald-600/30 transition-all active:scale-95 shrink-0"
                    >
                      <span className="whitespace-nowrap">{currentIndex === questions.length - 1 ? 'Finish & Submit Test' : `Next (${currentIndex + 2}/${questions.length})`}</span>
                      <ChevronRight className="w-4 h-4 shrink-0" />
                    </button>
                  </div>

                </div>
              )}

            </div>

            {/* Right 1 col: Question Palette with Real-Time Correct/Wrong Indicators */}
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-5 shadow-xl lg:sticky lg:top-36">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h4 className="text-sm font-bold text-white">
                    Question Palette
                  </h4>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800">
                    {questions.length} MCQs
                  </span>
                </div>

                {/* Filter Palette Buttons */}
                <div className="flex items-center gap-1 mb-3 overflow-x-auto pb-1 text-[10px] font-bold scrollbar-none">
                  <button
                    onClick={() => setPaletteFilter('all')}
                    className={`px-2 py-1 rounded-md transition-colors whitespace-nowrap shrink-0 ${paletteFilter === 'all' ? 'bg-slate-700 text-white' : 'bg-slate-950 text-slate-400'}`}
                  >
                    All ({questions.length})
                  </button>
                  <button
                    onClick={() => setPaletteFilter('correct')}
                    className={`px-2 py-1 rounded-md transition-colors whitespace-nowrap shrink-0 ${paletteFilter === 'correct' ? 'bg-emerald-700 text-white' : 'bg-slate-950 text-slate-400'}`}
                  >
                    Correct ({finalStats.correct})
                  </button>
                  <button
                    onClick={() => setPaletteFilter('wrong')}
                    className={`px-2 py-1 rounded-md transition-colors whitespace-nowrap shrink-0 ${paletteFilter === 'wrong' ? 'bg-rose-700 text-white' : 'bg-slate-950 text-slate-400'}`}
                  >
                    Wrong ({finalStats.wrong})
                  </button>
                  <button
                    onClick={() => setPaletteFilter('unanswered')}
                    className={`px-2 py-1 rounded-md transition-colors whitespace-nowrap shrink-0 ${paletteFilter === 'unanswered' ? 'bg-slate-700 text-white' : 'bg-slate-950 text-slate-400'}`}
                  >
                    Left ({questions.length - Object.keys(selectedAnswers).length})
                  </button>
                  <button
                    onClick={() => setPaletteFilter('flagged')}
                    className={`px-2 py-1 rounded-md transition-colors whitespace-nowrap shrink-0 ${paletteFilter === 'flagged' ? 'bg-amber-700 text-white' : 'bg-slate-950 text-slate-400'}`}
                  >
                    Flagged ({Object.keys(flaggedQuestions).filter(k => flaggedQuestions[Number(k)]).length})
                  </button>
                </div>

                {/* Status Legend */}
                <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-400 mb-3 pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-emerald-600 inline-block"></span>
                    <span>Correct</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-rose-600 inline-block"></span>
                    <span>Wrong</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-amber-500 inline-block"></span>
                    <span>Flagged</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-slate-950 border border-slate-800 inline-block"></span>
                    <span>Unanswered</span>
                  </div>
                </div>

                {/* Grid of 50-100 question buttons with fluid responsive columns */}
                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-5 gap-1.5 max-h-72 overflow-y-auto pr-1 scrollbar-thin">
                  {filteredPaletteIndices.map((qIdx) => {
                    const ans = selectedAnswers[qIdx];
                    const isAnswered = ans !== undefined;
                    const isCorrect = isAnswered && ans === questions[qIdx].correctIndex;
                    const isFlagged = flaggedQuestions[qIdx];
                    const isCurrent = currentIndex === qIdx;

                    let bg = 'bg-slate-950 border border-slate-800 text-slate-400';
                    if (isAnswered) {
                      if (isCorrect) {
                        bg = 'bg-emerald-600 text-white font-bold border-emerald-500 shadow-sm shadow-emerald-900/40';
                      } else {
                        bg = 'bg-rose-600 text-white font-bold border-rose-500 shadow-sm shadow-rose-900/40';
                      }
                    }
                    if (isFlagged) {
                      bg = 'bg-amber-500 text-slate-950 font-bold border-amber-400';
                    }
                    if (isCurrent) {
                      bg += ' ring-2 ring-emerald-400 ring-offset-1 ring-offset-slate-950';
                    }

                    return (
                      <button
                        key={qIdx}
                        onClick={() => setCurrentIndex(qIdx)}
                        className={`h-8 rounded-lg text-xs font-semibold flex items-center justify-center transition-all ${bg}`}
                      >
                        {qIdx + 1}
                      </button>
                    );
                  })}
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800">
                  <button
                    onClick={() => setShowSubmitModal(true)}
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all"
                  >
                    Submit Test ({Object.keys(selectedAnswers).length}/{questions.length})
                  </button>
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* MOCK TEST SCORE & ANALYTICS REPORT */
          <div className="space-y-6 animate-in zoom-in-95 duration-300">
            
            {/* Grand Score Banner */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-8 text-center shadow-2xl">
              <div className="inline-flex p-3 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 mb-4">
                <Award className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Official Exam Simulation Completed
                </span>
                <span className="px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-xs font-bold text-sky-300 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  {questions.length} Unique MCQs Logged
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2 break-words">
                {title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-xl mx-auto">
                Graded with AP State Rubric ({activeMockTest.negativeMarking > 0 ? `-${activeMockTest.negativeMarking} penalty for wrong answers` : 'No negative marking'}).
              </p>

              {/* 4 Stat Boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-3xl mx-auto mb-6">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Final Score</div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">
                    {finalStats.finalScore} <span className="text-xs text-slate-400 font-normal">/ {finalStats.totalMarks}</span>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Estimated Rank</div>
                  <div className="text-xl sm:text-2xl font-black text-amber-400">
                    #{finalStats.stateRank}
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Percentile</div>
                  <div className="text-xl sm:text-2xl font-black text-sky-400">
                    {finalStats.percentile}%
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Accuracy</div>
                  <div className="text-xl sm:text-2xl font-black text-purple-400">
                    {finalStats.accuracy}%
                  </div>
                </div>
              </div>

              {/* Anti-Repetition Guarantee Confirmation Badge */}
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 max-w-2xl mx-auto mb-6 text-xs sm:text-sm text-slate-300 flex items-start sm:items-center gap-3 text-left">
                <div className="p-2 rounded-xl bg-emerald-900/60 text-emerald-300 shrink-0">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-bold text-white">Anti-Repetition Guaranteed</div>
                  <p className="text-xs text-slate-400">
                    All <strong className="text-emerald-300">{questions.length} questions</strong> from this test have been added to your solved history. When you launch your next 50 to 100 question mock test, you will receive brand new, unseen questions!
                  </p>
                </div>
              </div>

              {/* Actions & Next Fresh Test Options */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                <button
                  onClick={() => handleStartNextFreshTest(50)}
                  className="px-4 sm:px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-600/30 flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>Start Next Fresh 50-Q Test</span>
                </button>

                <button
                  onClick={() => handleStartNextFreshTest(100)}
                  className="px-4 sm:px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-sky-600/30 flex items-center gap-1.5"
                >
                  <Sliders className="w-4 h-4 shrink-0" />
                  <span>Start Fresh 100-Q Grand Mock</span>
                </button>

                <button
                  onClick={() => setViewMode('mock-tests')}
                  className="px-4 sm:px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700"
                >
                  Back to All Tests
                </button>
              </div>
            </div>

            {/* Complete Solution Key & Explanations */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Complete Answer Key & In-Depth Solutions ({questions.length} MCQs)
                  </h3>
                  <p className="text-xs text-slate-400">
                    Multilingual verified conceptual explanations for all questions.
                  </p>
                </div>

                <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs shrink-0">
                  <button
                    onClick={() => setReviewFilter('all')}
                    className={`px-2.5 sm:px-3 py-1 rounded-lg font-medium ${reviewFilter === 'all' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
                  >
                    All ({questions.length})
                  </button>
                  <button
                    onClick={() => setReviewFilter('wrong')}
                    className={`px-2.5 sm:px-3 py-1 rounded-lg font-medium ${reviewFilter === 'wrong' ? 'bg-rose-600 text-white' : 'text-slate-400'}`}
                  >
                    Wrong ({finalStats.wrong})
                  </button>
                  <button
                    onClick={() => setReviewFilter('correct')}
                    className={`px-2.5 sm:px-3 py-1 rounded-lg font-medium ${reviewFilter === 'correct' ? 'bg-emerald-600 text-white' : 'text-slate-400'}`}
                  >
                    Correct ({finalStats.correct})
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {questions
                  .map((q, idx) => ({ q, idx }))
                  .filter(({ q, idx }) => {
                    const ans = selectedAnswers[idx];
                    const isCorrect = ans === q.correctIndex;
                    if (reviewFilter === 'wrong') return !isCorrect;
                    if (reviewFilter === 'correct') return isCorrect;
                    return true;
                  })
                  .map(({ q, idx }) => {
                    const ans = selectedAnswers[idx];
                    const isCorrect = ans === q.correctIndex;

                    return (
                      <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-2 flex-1">
                            <span className="w-6 h-6 rounded-lg bg-slate-900 text-xs font-bold text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-white leading-relaxed break-words">
                              {language === 'te' && q.questionTe ? q.questionTe : 
                                language === 'hi' && q.questionHi ? q.questionHi : q.question}
                            </span>
                          </div>
                          {ans === undefined ? (
                            <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-800 text-slate-400 text-[10px] sm:text-xs font-bold border border-slate-700 shrink-0 whitespace-nowrap">
                              Unattempted
                            </span>
                          ) : isCorrect ? (
                            <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-emerald-950 text-emerald-400 text-[10px] sm:text-xs font-bold border border-emerald-800 shrink-0 whitespace-nowrap">
                              +1.00 Mark
                            </span>
                          ) : (
                            <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-rose-950 text-rose-400 text-[10px] sm:text-xs font-bold border border-rose-800 shrink-0 whitespace-nowrap">
                              -{activeMockTest.negativeMarking} Penalty
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40">
                            <span className="text-emerald-400 font-semibold block mb-0.5">Correct Answer:</span>
                            <span className="text-slate-200 font-medium break-words">
                              {language === 'te' && q.optionsTe ? q.optionsTe[q.correctIndex] : 
                                language === 'hi' && q.optionsHi ? q.optionsHi[q.correctIndex] : q.options[q.correctIndex]}
                            </span>
                          </div>
                          {ans !== undefined && !isCorrect && (
                            <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-800/40">
                              <span className="text-rose-400 font-semibold block mb-0.5">Your Choice:</span>
                              <span className="text-slate-200 font-medium break-words">
                                {language === 'te' && q.optionsTe ? q.optionsTe[ans] : 
                                  language === 'hi' && q.optionsHi ? q.optionsHi[ans] : q.options[ans]}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                          <span className="font-semibold text-sky-400 block mb-1">Solution Breakdown:</span>
                          <p className="break-words leading-relaxed">{language === 'te' && q.explanationTe ? q.explanationTe : 
                            language === 'hi' && q.explanationHi ? q.explanationHi : q.explanation}</p>
                          {q.referenceAct && (
                            <div className="mt-1 text-[11px] text-slate-500 font-mono break-words">
                              Reference: {q.referenceAct}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              Ready to submit your examination?
            </h3>

            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              You have answered <span className="text-emerald-400 font-bold">{Object.keys(selectedAnswers).length}</span> out of <span className="font-bold text-white">{questions.length}</span> questions (<span className="text-emerald-400 font-bold">{finalStats.correct} Correct</span>, <span className="text-rose-400 font-bold">{finalStats.wrong} Wrong</span>). Once submitted, your score, accuracy, AP state rank, and anti-repetition registry will be permanently logged.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs"
              >
                Continue Test
              </button>

              <button
                onClick={handleSubmitTest}
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30"
              >
                Yes, Submit Now
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
