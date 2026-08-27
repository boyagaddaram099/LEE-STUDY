import React, { useState, useEffect, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Topic, Question } from '../types';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Award, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  BookOpen,
  Check,
  Zap,
  Sliders
} from 'lucide-react';
import { getTopicPracticeQuestions } from '../utils/topicQuestionEngine';

export const TopicPracticeExamView: React.FC = () => {
  const { 
    activeTopic,
    activeTopicId, 
    activeCourse,
    activeCourseId, 
    courses, 
    setViewMode, 
    openTopic, 
    recordTopicScore, 
    userProgress, 
    language, 
    showToast,
    t 
  } = useApp();

  // Find topic and course with multi-tier fallback
  let currentTopic: Topic | null = activeTopic;
  let currentCourse = activeCourse || (activeCourseId ? courses.find(c => c.id === activeCourseId) : null);

  if (!currentTopic && activeTopicId) {
    for (const c of courses) {
      for (const s of c.subjects) {
        const found = s.topics.find(t => t.id === activeTopicId);
        if (found) {
          currentTopic = found;
          if (!currentCourse) currentCourse = c;
          break;
        }
      }
      if (currentTopic) break;
    }
  }

  // Fallback to last studied topic or first topic
  if (!currentTopic && userProgress?.lastStudiedTopicId) {
    for (const c of courses) {
      for (const s of c.subjects) {
        const found = s.topics.find(t => t.id === userProgress.lastStudiedTopicId);
        if (found) {
          currentTopic = found;
          if (!currentCourse) currentCourse = c;
          break;
        }
      }
      if (currentTopic) break;
    }
  }

  if (!currentCourse && courses.length > 0) {
    currentCourse = courses[0];
  }

  if (!currentTopic && currentCourse && currentCourse.subjects.length > 0 && currentCourse.subjects[0].topics.length > 0) {
    currentTopic = currentCourse.subjects[0].topics[0];
  }

  // Desired question count: default to 15 questions (10 to 15 questions)
  const [targetCount, setTargetCount] = useState<number>(15);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Retrieve 10 to 15 verified questions for this specific topic using our intelligent engine
  const questions = useMemo(() => {
    if (!currentTopic) return [];
    return getTopicPracticeQuestions(currentTopic, targetCount);
  }, [currentTopic, targetCount]);

  const currentQ = questions[currentIndex];

  if (!currentTopic || questions.length === 0) {
    return (
      <div className="py-16 text-center text-slate-400 px-4">
        <p>No practice questions found for this topic.</p>
        <button 
          onClick={() => setViewMode('courses')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold"
        >
          Return to Courses
        </button>
      </div>
    );
  }

  const topicTitle = language === 'te' ? currentTopic.titleTe : language === 'hi' ? currentTopic.titleHi : currentTopic.title;

  const handleSelectOption = (optIndex: number) => {
    if (isCompleted) return;

    setSelectedAnswers(prev => {
      const isFirst = prev[currentIndex] === undefined;
      const isCorrect = optIndex === currentQ.correctIndex;

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
        [currentIndex]: optIndex
      };
    });
  };

  const handleFinishExam = () => {
    setIsCompleted(true);
    let correct = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correct++;
      }
    });

    const percentage = Math.round((correct / questions.length) * 100);

    if (currentTopic) {
      recordTopicScore(currentTopic.id, correct, questions.length, percentage);
    }

    if (percentage >= 70) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsCompleted(false);
  };

  const handleCountChange = (count: number) => {
    setTargetCount(count);
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsCompleted(false);
    showToast(`Switched to ${count} questions set`);
  };

  // Stats calculation
  let correctCount = 0;
  let wrongCount = 0;
  questions.forEach((q, idx) => {
    if (selectedAnswers[idx] !== undefined) {
      if (selectedAnswers[idx] === q.correctIndex) {
        correctCount++;
      } else {
        wrongCount++;
      }
    }
  });

  const attemptedCount = Object.keys(selectedAnswers).length;
  const currentAnswer = selectedAnswers[currentIndex];
  const isCurrentAnswered = currentAnswer !== undefined;
  const isCurrentCorrect = isCurrentAnswered && currentAnswer === currentQ.correctIndex;

  return (
    <div className="py-6 sm:py-8 max-w-4xl mx-auto px-3 sm:px-6 overflow-x-hidden">
      
      {/* Top Breadcrumb & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <button
          onClick={() => {
            if (currentTopic && currentCourse) {
              openTopic(currentTopic.id, currentCourse.id);
            } else {
              setViewMode('courses');
            }
          }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          <span className="truncate max-w-[200px] sm:max-w-none">{t('btnBackToTopic')}</span>
        </button>

        {/* Question Count Switcher (10, 12, 15 MCQs) */}
        {!isCompleted && (
          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs">
            <span className="text-[11px] font-semibold text-slate-400 px-1.5 hidden sm:inline">
              Exam Size:
            </span>
            {[10, 12, 15].map((cnt) => (
              <button
                key={cnt}
                onClick={() => handleCountChange(cnt)}
                className={`px-2.5 py-1 rounded-lg font-bold text-xs transition-all ${
                  targetCount === cnt
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cnt} Qs
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Header Card */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-4 sm:p-6 mb-6 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-1 rounded-full bg-blue-950 border border-blue-800/60 text-blue-300 text-xs font-semibold">
              Topic Practice Exam
            </span>
            <span className="px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-800/60 text-emerald-300 text-xs font-semibold flex items-center gap-1">
              <Zap className="w-3 h-3 text-emerald-400" />
              Instant Feedback Active
            </span>
            <span className="text-xs text-slate-400 font-bold">
              {questions.length} Questions
            </span>
          </div>

          {!isCompleted && (
            <div className="flex items-center gap-2 text-xs font-bold bg-slate-950 px-2.5 py-1 rounded-xl border border-slate-800">
              <span className="text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                {correctCount}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-rose-400 flex items-center gap-1">
                <XCircle className="w-3.5 h-3.5" />
                {wrongCount}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">{questions.length - attemptedCount} Left</span>
            </div>
          )}
        </div>

        <h1 className="text-lg sm:text-2xl font-extrabold text-white mb-2 break-words">
          {topicTitle}
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Targeted AP competitive exam multiple choice questions with real-time correct/wrong verification and comprehensive conceptual explanations.
        </p>
      </div>

      {/* Main Examination View */}
      {!isCompleted ? (
        <div className="space-y-6">
          
          {/* Question Navigation Palette */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3 sm:p-4">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2.5">
              <span>Question {currentIndex + 1} of {questions.length}</span>
              <span>{Math.round(((currentIndex + 1) / questions.length) * 100)}% Progress</span>
            </div>
            
            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-15 gap-1.5">
              {questions.map((q, idx) => {
                const ans = selectedAnswers[idx];
                const isAns = ans !== undefined;
                const isCorr = isAns && ans === q.correctIndex;
                const isCurr = currentIndex === idx;

                let btnStyle = 'bg-slate-950 text-slate-400 border border-slate-800';
                if (isAns) {
                  if (isCorr) {
                    btnStyle = 'bg-emerald-600 text-white font-bold border-emerald-500 shadow-sm shadow-emerald-950/40';
                  } else {
                    btnStyle = 'bg-rose-600 text-white font-bold border-rose-500 shadow-sm shadow-rose-950/40';
                  }
                }
                if (isCurr) {
                  btnStyle += ' ring-2 ring-blue-400 ring-offset-1 ring-offset-slate-950';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-8 rounded-lg text-xs font-semibold transition-all ${btnStyle}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Question Container */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl">
            
            {/* Question Label */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 sm:pb-4 mb-4 sm:mb-6">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                <span className="px-2.5 py-1 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  Question {currentIndex + 1} of {questions.length}
                </span>
                {currentQ.subjectName && (
                  <span className="text-slate-300 font-semibold truncate max-w-[160px] sm:max-w-xs">{currentQ.subjectName}</span>
                )}
              </div>

              {isCurrentAnswered && (
                <div className={`text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-1.5 ${
                  isCurrentCorrect 
                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' 
                    : 'bg-rose-950 text-rose-400 border border-rose-800'
                }`}>
                  {isCurrentCorrect ? (
                    <>
                      <Check className="w-3.5 h-3.5 shrink-0" />
                      <span>Correct Choice</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Incorrect Choice</span>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Question Text */}
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-6 leading-relaxed break-words">
              {language === 'te' && currentQ.questionTe ? currentQ.questionTe :
                language === 'hi' && currentQ.questionHi ? currentQ.questionHi : currentQ.question}
            </h3>

            {/* Options List with Real-Time Instant Feedback */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((opt, optIdx) => {
                const optText = language === 'te' && currentQ.optionsTe ? currentQ.optionsTe[optIdx] :
                  language === 'hi' && currentQ.optionsHi ? currentQ.optionsHi[optIdx] : opt;

                const isSelected = currentAnswer === optIdx;
                const isCorrect = optIdx === currentQ.correctIndex;

                let optionStyle = 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900';
                let letterStyle = 'bg-slate-900 border-slate-700 text-slate-400';

                if (isCurrentAnswered) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-950/90 border-emerald-500 text-emerald-100 font-semibold shadow-md shadow-emerald-950/60 ring-1 ring-emerald-500';
                    letterStyle = 'bg-emerald-600 border-emerald-400 text-white font-bold';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-rose-950/90 border-rose-500 text-rose-100 font-semibold shadow-md shadow-rose-950/60 ring-1 ring-rose-500';
                    letterStyle = 'bg-rose-600 border-rose-400 text-white font-bold';
                  } else {
                    optionStyle = 'bg-slate-950/30 border-slate-800/40 text-slate-500 opacity-50';
                    letterStyle = 'bg-slate-950 border-slate-800 text-slate-600';
                  }
                }

                const optionLetters = ['A', 'B', 'C', 'D'];

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-start sm:items-center justify-between gap-3 ${optionStyle}`}
                  >
                    <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 border mt-0.5 sm:mt-0 ${letterStyle}`}>
                        {optionLetters[optIdx]}
                      </span>
                      <span className="text-xs sm:text-sm md:text-base leading-snug break-words flex-1">
                        {optText}
                      </span>
                    </div>

                    {isCurrentAnswered && (
                      <div className="shrink-0 mt-0.5 sm:mt-0">
                        {isCorrect && (
                          <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-900/60 px-2 py-1 rounded-lg border border-emerald-700/60">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                            <span className="hidden sm:inline">Correct</span>
                          </span>
                        )}
                        {isSelected && !isCorrect && (
                          <span className="flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-900/60 px-2 py-1 rounded-lg border border-rose-700/60">
                            <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                            <span className="hidden sm:inline">Wrong</span>
                          </span>
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Immediate Solution & Conceptual Explanation Card */}
            {isCurrentAnswered && (
              <div className={`p-4 sm:p-5 rounded-2xl border mb-6 animate-in fade-in zoom-in-95 duration-200 ${
                isCurrentCorrect
                  ? 'bg-emerald-950/40 border-emerald-800/80 shadow-lg shadow-emerald-950/30' 
                  : 'bg-rose-950/40 border-rose-800/80 shadow-lg shadow-rose-950/30'
              }`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    {isCurrentCorrect ? (
                      <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        <Check className="w-4 h-4 shrink-0" /> Correct Answer! (+1 Mark)
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs font-bold text-rose-400 uppercase tracking-wider">
                        <XCircle className="w-4 h-4 shrink-0" /> Incorrect Choice. Correct: Option {['A', 'B', 'C', 'D'][currentQ.correctIndex]}
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-slate-400">
                    Solution Explanation
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed break-words">
                  {language === 'te' && currentQ.explanationTe ? currentQ.explanationTe : 
                    language === 'hi' && currentQ.explanationHi ? currentQ.explanationHi : currentQ.explanation}
                </p>

                {currentQ.referenceAct && (
                  <div className="mt-2.5 pt-2 border-t border-slate-800/60 text-[11px] text-sky-400 font-mono break-words">
                    Reference: {currentQ.referenceAct}
                  </div>
                )}
              </div>
            )}

            {/* Bottom Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-xs sm:text-sm text-slate-300 font-semibold flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4 shrink-0" />
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-2">
                {attemptedCount === questions.length ? (
                  <button
                    onClick={handleFinishExam}
                    className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 flex items-center gap-1.5"
                  >
                    <span>View Scorecard & Mastery</span>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (currentIndex < questions.length - 1) {
                        setCurrentIndex(prev => prev + 1);
                      } else {
                        handleFinishExam();
                      }
                    }}
                    className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 flex items-center gap-1.5"
                  >
                    <span className="whitespace-nowrap">{currentIndex === questions.length - 1 ? 'Finish Exam' : `Next (${currentIndex + 2}/${questions.length})`}</span>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* Final Scorecard View */
        <div className="space-y-6 animate-in zoom-in-95 duration-200">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-8 text-center shadow-2xl">
            <div className="inline-flex p-3 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 mb-4">
              <Award className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2 break-words">
              Practice Exam Finished!
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-md mx-auto">
              Your performance on {topicTitle} has been logged to your daily streak and revision registry.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-xl mx-auto mb-6">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">Score</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400">
                  {correctCount} <span className="text-xs text-slate-400 font-normal">/ {questions.length}</span>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">Accuracy</div>
                <div className="text-xl sm:text-2xl font-black text-blue-400">
                  {Math.round((correctCount / questions.length) * 100)}%
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">Correct</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400">
                  {correctCount}
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">Wrong</div>
                <div className="text-xl sm:text-2xl font-black text-rose-400">
                  {wrongCount}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <button
                onClick={handleRestart}
                className="px-4 sm:px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4 shrink-0" />
                <span>Retake Exam</span>
              </button>

              <button
                onClick={() => {
                  if (currentTopic && currentCourse) {
                    openTopic(currentTopic.id, currentCourse.id);
                  }
                }}
                className="px-4 sm:px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>Return to Chapter Notes</span>
              </button>
            </div>
          </div>

          {/* Solutions Review */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-4 sm:p-6 md:p-8">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4">
              Review Detailed Solutions ({questions.length} MCQs)
            </h3>

            <div className="space-y-4">
              {questions.map((q, idx) => {
                const ans = selectedAnswers[idx];
                const isCorrect = ans === q.correctIndex;

                return (
                  <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
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
                      {isCorrect ? (
                        <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-800 shrink-0 whitespace-nowrap">
                          Correct
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-400 text-[10px] font-bold border border-rose-800 shrink-0 whitespace-nowrap">
                          Wrong
                        </span>
                      )}
                    </div>

                    <div className="text-xs space-y-1 pt-1">
                      <div className="text-emerald-400 break-words">
                        <strong>Correct Answer:</strong> {language === 'te' && q.optionsTe ? q.optionsTe[q.correctIndex] :
                          language === 'hi' && q.optionsHi ? q.optionsHi[q.correctIndex] : q.options[q.correctIndex]}
                      </div>
                      {ans !== undefined && !isCorrect && (
                        <div className="text-rose-400 break-words">
                          <strong>Your Answer:</strong> {language === 'te' && q.optionsTe ? q.optionsTe[ans] :
                            language === 'hi' && q.optionsHi ? q.optionsHi[ans] : q.options[ans]}
                        </div>
                      )}
                      <div className="text-slate-300 mt-2 bg-slate-900 p-3 rounded-xl border border-slate-800/80 break-words leading-relaxed">
                        <span className="text-sky-400 font-semibold block mb-0.5">Explanation:</span>
                        {language === 'te' && q.explanationTe ? q.explanationTe :
                          language === 'hi' && q.explanationHi ? q.explanationHi : q.explanation}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
