import React from 'react';
import { useApp } from '../context/AppContext';
import { UserTopicScore } from '../types';
import { 
  Flame, 
  Clock, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Bookmark, 
  DownloadCloud, 
  PlayCircle, 
  ArrowRight, 
  Sparkles,
  BarChart3,
  WifiOff,
  UserCheck,
  ShieldCheck,
  RotateCcw,
  Sliders
} from 'lucide-react';

export const UserDashboardView: React.FC = () => {
  const { 
    userProgress, 
    courses, 
    openTopic, 
    openCourse, 
    openPracticeExam, 
    resetAttemptedQuestions,
    setViewMode, 
    language, 
    t 
  } = useApp();

  const totalPossibleTopics = courses.reduce(
    (acc, c) => acc + c.subjects.reduce((sAcc, s) => sAcc + s.topics.length, 0),
    0
  );

  const attemptedQuestionsCount = (userProgress.attemptedQuestionIds || []).length;

  const completedCount = userProgress.completedTopicIds.length;
  const overallPercentage = totalPossibleTopics > 0 
    ? Math.round((completedCount / totalPossibleTopics) * 100) 
    : 0;

  // Find last studied topic & course
  let lastTopicObj = null;
  let lastCourseObj = null;
  if (userProgress.lastStudiedTopicId) {
    for (const c of courses) {
      for (const s of c.subjects) {
        const found = s.topics.find(t => t.id === userProgress.lastStudiedTopicId);
        if (found) {
          lastTopicObj = found;
          lastCourseObj = c;
          break;
        }
      }
    }
  }

  // Calculate average exam accuracy
  const scoreEntries: UserTopicScore[] = Object.values(userProgress.topicScores);
  const totalScorePercent = scoreEntries.reduce((acc, item) => acc + item.percentage, 0);
  const avgAccuracy = scoreEntries.length > 0
    ? Math.round(totalScorePercent / scoreEntries.length)
    : 85;

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
      
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-slate-800 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-semibold mb-3">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Target: {userProgress.targetExamGoal}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Welcome back, {userProgress.userName}!
            </h1>
            <p className="text-sm text-slate-300 max-w-xl">
              Consistent daily practice is the hallmark of Andhra Pradesh State Rankers. You have a {userProgress.streakDays}-day streak going strong.
            </p>
          </div>

          {/* Quick Resume Card */}
          {lastTopicObj && lastCourseObj && (
            <div className="w-full lg:w-80 bg-slate-950/80 border border-blue-800/40 rounded-2xl p-4 shrink-0">
              <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider block mb-1">
                {t('btnContinueLearning')}
              </span>
              <h4 className="text-sm font-bold text-white truncate mb-1">
                {language === 'te' ? lastTopicObj.titleTe : lastTopicObj.title}
              </h4>
              <p className="text-xs text-slate-400 truncate mb-3">
                {language === 'te' ? lastCourseObj.titleTe : lastCourseObj.title}
              </p>
              <button
                onClick={() => openTopic(lastTopicObj.id, lastCourseObj.id)}
                className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30 transition-all"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Resume Reading</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 4 Core Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400">{t('dailyStreak')}</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-white">{userProgress.streakDays} Days</div>
          <span className="text-[11px] text-emerald-400 font-medium mt-1 inline-block">Active Daily Learner</span>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400">{t('topicsCompleted')}</span>
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-white">{completedCount} <span className="text-xs text-slate-400 font-normal">/ {totalPossibleTopics}</span></div>
          <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-2">
            <div className="bg-blue-500 h-full" style={{ width: `${overallPercentage}%` }}></div>
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400">{t('hoursStudied')}</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-white">{(userProgress.totalStudyMinutes / 60).toFixed(1)}h</div>
          <span className="text-[11px] text-slate-400 mt-1 inline-block">Interactive study time</span>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400">{t('avgScore')}</span>
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-white">{avgAccuracy}%</div>
          <span className="text-[11px] text-purple-300 font-medium mt-1 inline-block">Across all practice sets</span>
        </div>

      </div>

      {/* 2-Column Section: Offline Vault & Bookmarked Lessons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Offline Vault */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-lg">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <DownloadCloud className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">
                {t('navOfflineVault')} ({userProgress.offlineDownloadedTopicIds.length})
              </h3>
            </div>
            <span className="text-[11px] text-slate-400">Remote Study Ready</span>
          </div>

          <p className="text-xs text-slate-400 mb-4 leading-relaxed">
            These chapters are cached locally for uninterrupted study during power cuts or remote village connectivity.
          </p>

          <div className="space-y-2">
            {userProgress.offlineDownloadedTopicIds.map(topicId => {
              let tObj = null;
              let cObj = null;
              for (const c of courses) {
                for (const s of c.subjects) {
                  const f = s.topics.find(t => t.id === topicId);
                  if (f) { tObj = f; cObj = c; break; }
                }
              }
              if (!tObj || !cObj) return null;

              return (
                <div 
                  key={topicId}
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-white truncate">
                      {language === 'te' ? tObj.titleTe : tObj.title}
                    </h4>
                    <span className="text-[10px] text-slate-400 truncate block">
                      {language === 'te' ? cObj.titleTe : cObj.title}
                    </span>
                  </div>
                  <button
                    onClick={() => openTopic(tObj.id, cObj.id)}
                    className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-emerald-400 shrink-0"
                  >
                    Open Offline
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bookmarked Topics */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-lg">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Bookmark className="w-4 h-4 fill-amber-400" />
              </div>
              <h3 className="text-base font-bold text-white">
                Bookmarked for Quick Revision
              </h3>
            </div>
            <span className="text-[11px] text-slate-400">{userProgress.bookmarkedTopicIds.length} Saved</span>
          </div>

          <p className="text-xs text-slate-400 mb-4 leading-relaxed">
            High-yield chapters flagged for last-minute exam hall recap.
          </p>

          <div className="space-y-2">
            {userProgress.bookmarkedTopicIds.length > 0 ? (
              userProgress.bookmarkedTopicIds.map(topicId => {
                let tObj = null;
                let cObj = null;
                for (const c of courses) {
                  for (const s of c.subjects) {
                    const f = s.topics.find(t => t.id === topicId);
                    if (f) { tObj = f; cObj = c; break; }
                  }
                }
                if (!tObj || !cObj) return null;

                return (
                  <div 
                    key={topicId}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-white truncate">
                        {language === 'te' ? tObj.titleTe : tObj.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 truncate block">
                        {language === 'te' ? cObj.titleTe : cObj.title}
                      </span>
                    </div>
                    <button
                      onClick={() => openTopic(tObj.id, cObj.id)}
                      className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shrink-0"
                    >
                      Read Now
                    </button>
                  </div>
                );
              })
            ) : (
              <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800 text-center text-xs text-slate-400">
                No bookmarks yet. Click the bookmark icon on any topic page to save it here.
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Zero-Repetition Question Bank Telemetry Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Zero-Repetition Question Bank & Simulator
              </h3>
              <p className="text-xs text-slate-400">
                Customizable 50 to 100 question grand mock exams with non-repeating algorithm.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {attemptedQuestionsCount > 0 && (
              <button
                onClick={resetAttemptedQuestions}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-amber-400 border border-slate-700 flex items-center gap-1.5 transition-colors"
                title="Reset question history to allow taking old questions again"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Question History</span>
              </button>
            )}
            <button
              onClick={() => setViewMode('mock-tests')}
              className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white shadow-md shadow-emerald-600/30 flex items-center gap-1.5 transition-all"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Configure 50–100 Qs Test</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="text-xs text-slate-400 mb-1 font-semibold">Total Verified Bank</div>
            <div className="text-2xl font-black text-white">600+ <span className="text-xs text-slate-400">MCQs</span></div>
            <span className="text-[11px] text-emerald-400 mt-1 inline-block">APPSC, Police, DSC & Court</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="text-xs text-slate-400 mb-1 font-semibold">Uniquely Solved</div>
            <div className="text-2xl font-black text-sky-400">{attemptedQuestionsCount} <span className="text-xs text-slate-400">MCQs</span></div>
            <span className="text-[11px] text-sky-300 mt-1 inline-block">Logged to your account</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="text-xs text-slate-400 mb-1 font-semibold">Exam Formats Supported</div>
            <div className="text-2xl font-black text-purple-400">50 to 100</div>
            <span className="text-[11px] text-purple-300 mt-1 inline-block">Custom questions per test</span>
          </div>
        </div>
      </div>

      {/* Mock Test Performance History */}
      {userProgress.mockScores.length > 0 && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
            <span>State Mock Test Performance History</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
                <tr>
                  <th className="p-3">Test Title</th>
                  <th className="p-3">Score</th>
                  <th className="p-3">Accuracy</th>
                  <th className="p-3">Estimated State Rank</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {userProgress.mockScores.map((score, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40">
                    <td className="p-3 font-semibold text-white">{score.testTitle}</td>
                    <td className="p-3 font-bold text-emerald-400">{score.score} / {score.totalMarks}</td>
                    <td className="p-3">{score.accuracyPercentage}%</td>
                    <td className="p-3 font-bold text-amber-400">#{score.estimatedStateRank}</td>
                    <td className="p-3 text-slate-400">{score.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
