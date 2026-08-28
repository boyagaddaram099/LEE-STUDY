import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { speechService, AudioPlaybackState } from '../utils/audioSpeech';
import { Play, Pause, Square, Volume2 } from 'lucide-react';

interface AudioPlayerBarProps {
  textToSpeak?: string;
  topicTitle?: string;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({ 
  textToSpeak = '', 
  topicTitle = 'Andhra Pradesh Competitive Examination Audio Notes' 
}) => {
  const { language, t } = useApp();
  const [playbackState, setPlaybackState] = useState<AudioPlaybackState>({
    isPlaying: false,
    isPaused: false,
    rate: 1.0,
    currentSentenceIndex: 0,
    totalSentences: 1,
    progressPercent: 0
  });

  const [currentSentence, setCurrentSentence] = useState<string>('');

  useEffect(() => {
    speechService.setCallback((state) => {
      setPlaybackState(state);
      setCurrentSentence(speechService.getCurrentSentence());
    });

    return () => {
      speechService.stop();
    };
  }, []);

  // Stop playback when language changes
  useEffect(() => {
    speechService.stop();
  }, [language, textToSpeak]);

  const handlePlayPause = () => {
    if (playbackState.isPlaying) {
      speechService.pause();
    } else if (playbackState.isPaused) {
      speechService.resume();
    } else {
      speechService.playText(textToSpeak || 'Welcome to LEE STUDY audio notes for APPSC, DSC and Police exams.', language);
    }
  };

  const handleStop = () => {
    speechService.stop();
  };

  const handleSpeedChange = (speed: number) => {
    speechService.setRate(speed);
  };

  const speeds = [0.75, 1.0, 1.25, 1.5, 2.0];

  // Only show full player if there's active topic text or actively playing
  if (!textToSpeak && !playbackState.isPlaying && !playbackState.isPaused) {
    return null;
  }

  return (
    <div className="w-full bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-3.5 sm:p-4 shadow-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        
        {/* Left: Audio Info & Visualizer */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0 shadow-inner">
            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-blue-400">
                {t('btnListenAudio')} • {language === 'te' ? 'తెలుగు వాయిస్' : language === 'hi' ? 'हिन्दी वॉयस' : 'English Voice'}
              </span>
              {playbackState.isPlaying && (
                <div className="flex items-center gap-0.5 sm:gap-1 h-3 ml-1">
                  <span className="w-0.5 sm:w-1 bg-blue-400 rounded-full animate-pulse inline-block h-2"></span>
                  <span className="w-0.5 sm:w-1 bg-blue-400 rounded-full animate-pulse delay-75 inline-block h-3"></span>
                  <span className="w-0.5 sm:w-1 bg-blue-400 rounded-full animate-pulse delay-150 inline-block h-2"></span>
                  <span className="w-0.5 sm:w-1 bg-blue-400 rounded-full animate-pulse inline-block h-2.5"></span>
                </div>
              )}
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-100 truncate mt-0.5">
              {topicTitle}
            </p>
          </div>
        </div>

        {/* Right: Controls & Speed */}
        <div className="flex items-center flex-wrap gap-2 w-full sm:w-auto justify-between sm:justify-end shrink-0">
          
          {/* Speed Selector */}
          <div className="flex items-center bg-slate-950/80 border border-slate-800 rounded-lg p-0.5 sm:p-1">
            <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 px-1 hidden md:inline">
              Speed:
            </span>
            {speeds.map((s) => (
              <button
                key={s}
                onClick={() => handleSpeedChange(s)}
                className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded font-semibold transition-all ${
                  playbackState.rate === s
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {s}x
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handlePlayPause}
              className={`flex items-center gap-1 sm:gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 whitespace-nowrap shrink-0 ${
                playbackState.isPlaying
                  ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/30'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30'
              }`}
            >
              {playbackState.isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Pause</span>
                </>
              ) : playbackState.isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
                  <span>Listen Note</span>
                </>
              )}
            </button>

            {(playbackState.isPlaying || playbackState.isPaused) && (
              <button
                onClick={handleStop}
                className="p-1.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all shadow-sm shrink-0"
                title="Stop Audio"
              >
                <Square className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-slate-300" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Progress Bar & Subtitle Teleprompter */}
      {playbackState.isPlaying && (
        <div className="mt-3 pt-2.5 border-t border-slate-800/80 space-y-1.5">
          <div className="w-full bg-slate-950/80 rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-400 h-full rounded-full transition-all duration-300"
              style={{ width: `${playbackState.progressPercent}%` }}
            />
          </div>
          {currentSentence && (
            <p className="text-xs text-blue-200 font-medium italic truncate">
              "{currentSentence}"
            </p>
          )}
        </div>
      )}
    </div>
  );
};
