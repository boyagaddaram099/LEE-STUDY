import { Language } from '../types';

export interface AudioPlaybackState {
  isPlaying: boolean;
  isPaused: boolean;
  rate: number;
  currentSentenceIndex: number;
  totalSentences: number;
  progressPercent: number;
}

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private sentences: string[] = [];
  private currentSentenceIndex = 0;
  private rate = 1.0;
  private lang: Language = 'en';
  private onStateChangeCallback: ((state: AudioPlaybackState) => void) | null = null;
  private isManuallyStopped = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public setCallback(cb: (state: AudioPlaybackState) => void) {
    this.onStateChangeCallback = cb;
  }

  private notify() {
    if (!this.onStateChangeCallback) return;
    const isPlaying = !!(this.synth && this.synth.speaking && !this.synth.paused);
    const isPaused = !!(this.synth && this.synth.paused);
    const total = this.sentences.length || 1;
    const progress = Math.min(100, Math.round(((this.currentSentenceIndex) / total) * 100));

    this.onStateChangeCallback({
      isPlaying,
      isPaused,
      rate: this.rate,
      currentSentenceIndex: this.currentSentenceIndex,
      totalSentences: total,
      progressPercent: progress
    });
  }

  public setRate(newRate: number) {
    this.rate = newRate;
    if (this.synth && this.synth.speaking) {
      // Re-read current sentence with new rate
      const idx = this.currentSentenceIndex;
      this.stop();
      this.currentSentenceIndex = idx;
      this.speakCurrentSentence();
    } else {
      this.notify();
    }
  }

  public playText(text: string, lang: Language) {
    if (!this.synth) return;
    this.stop();
    this.lang = lang;
    this.isManuallyStopped = false;

    // Split text into meaningful spoken chunks/sentences
    const rawSentences = text
      .replace(/[\n\r]+/g, '. ')
      .split(/([.!?।|]+)/)
      .map(s => s.trim())
      .filter(s => s.length > 2);

    // Group sentence delimiters together
    const cleanSentences: string[] = [];
    for (let i = 0; i < rawSentences.length; i++) {
      let chunk = rawSentences[i];
      if (i + 1 < rawSentences.length && /^[.!?।|]+$/.test(rawSentences[i + 1])) {
        chunk += rawSentences[i + 1];
        i++;
      }
      if (chunk.replace(/[.!?।|\s]/g, '').length > 0) {
        cleanSentences.push(chunk);
      }
    }

    this.sentences = cleanSentences.length > 0 ? cleanSentences : [text];
    this.currentSentenceIndex = 0;
    this.speakCurrentSentence();
  }

  private speakCurrentSentence() {
    if (!this.synth || this.currentSentenceIndex >= this.sentences.length || this.isManuallyStopped) {
      this.notify();
      return;
    }

    const sentence = this.sentences[this.currentSentenceIndex];
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.rate = this.rate;

    // Map language code
    if (this.lang === 'te') {
      utterance.lang = 'te-IN';
    } else if (this.lang === 'hi') {
      utterance.lang = 'hi-IN';
    } else {
      utterance.lang = 'en-IN';
    }

    // Try finding matching voice
    const voices = this.synth.getVoices();
    const targetLangPrefix = this.lang === 'te' ? 'te' : this.lang === 'hi' ? 'hi' : 'en';
    const matchingVoice = voices.find(v => v.lang.startsWith(targetLangPrefix));
    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    utterance.onstart = () => {
      this.notify();
    };

    utterance.onend = () => {
      this.currentSentenceIndex++;
      if (this.currentSentenceIndex < this.sentences.length && !this.isManuallyStopped) {
        this.speakCurrentSentence();
      } else {
        this.currentSentenceIndex = 0;
        this.notify();
      }
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      this.notify();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
    this.notify();
  }

  public pause() {
    if (this.synth && this.synth.speaking && !this.synth.paused) {
      this.synth.pause();
      this.notify();
    }
  }

  public resume() {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
      this.notify();
    } else if (this.sentences.length > 0) {
      this.isManuallyStopped = false;
      this.speakCurrentSentence();
    }
  }

  public stop() {
    this.isManuallyStopped = true;
    if (this.synth) {
      this.synth.cancel();
    }
    this.currentSentenceIndex = 0;
    this.notify();
  }

  public getCurrentSentence(): string {
    if (this.currentSentenceIndex < this.sentences.length) {
      return this.sentences[this.currentSentenceIndex];
    }
    return '';
  }
}

export const speechService = new SpeechService();
