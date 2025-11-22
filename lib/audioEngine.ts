/**
 * Audio Engine - Manages layered soundscapes for immersive reading
 * Supports: Background music, ambient sounds, SFX, voice lines
 */

export type MoodType = 'romantic' | 'tense' | 'action' | 'sad' | 'mysterious' | 'suspenseful' | 'neutral';
export type AmbienceType = 'rain' | 'fireplace' | 'cafe' | 'city' | 'forest' | 'thunder' | 'none';
export type MusicType = 'romantic_piano' | 'dark_orchestral' | 'tension_strings' | 'sad_violin' | 'action_drums' | 'mysterious_ambient' | 'none';
export type SFXType = 'thunder' | 'heartbeat' | 'door_slam' | 'glass_break' | 'footsteps' | 'whisper_echo' | 'kiss' | 'gunshot' | 'scream';

export class AudioEngine {
  private audioContext: AudioContext | null = null;
  private musicGain: GainNode | null = null;
  private ambienceGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private voiceGain: GainNode | null = null;

  private currentMusic: HTMLAudioElement | null = null;
  private currentAmbience: HTMLAudioElement | null = null;

  private masterVolume = 1.0;
  private musicVolume = 0.4;
  private ambienceVolume = 0.3;
  private sfxVolume = 0.6;
  private voiceVolume = 0.8;

  constructor() {
    if (typeof window !== 'undefined') {
      this.init();
    }
  }

  private init() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

      // Create gain nodes for each audio layer
      this.musicGain = this.audioContext.createGain();
      this.ambienceGain = this.audioContext.createGain();
      this.sfxGain = this.audioContext.createGain();
      this.voiceGain = this.audioContext.createGain();

      // Set initial volumes
      this.musicGain.gain.value = this.musicVolume;
      this.ambienceGain.gain.value = this.ambienceVolume;
      this.sfxGain.gain.value = this.sfxVolume;
      this.voiceGain.gain.value = this.voiceVolume;

      // Connect to destination
      this.musicGain.connect(this.audioContext.destination);
      this.ambienceGain.connect(this.audioContext.destination);
      this.sfxGain.connect(this.audioContext.destination);
      this.voiceGain.connect(this.audioContext.destination);
    } catch (error) {
      console.error('Failed to initialize AudioContext:', error);
    }
  }

  /**
   * Play background music with crossfade
   */
  async playMusic(musicType: MusicType, fadeInDuration = 2.0) {
    if (musicType === 'none') {
      this.stopMusic();
      return;
    }

    // Map music types to file paths (we'll use royalty-free music URLs)
    const musicUrls: Record<MusicType, string> = {
      romantic_piano: '/audio/music/romantic_piano.mp3',
      dark_orchestral: '/audio/music/dark_orchestral.mp3',
      tension_strings: '/audio/music/tension_strings.mp3',
      sad_violin: '/audio/music/sad_violin.mp3',
      action_drums: '/audio/music/action_drums.mp3',
      mysterious_ambient: '/audio/music/mysterious_ambient.mp3',
      none: ''
    };

    const url = musicUrls[musicType];
    if (!url) return;

    // Fade out current music
    if (this.currentMusic) {
      this.fadeOut(this.currentMusic, 1.5);
    }

    // Create new audio element
    const audio = new Audio(url);
    audio.loop = true;
    audio.volume = 0;

    try {
      await audio.play();
      this.currentMusic = audio;

      // Fade in new music
      this.fadeIn(audio, fadeInDuration);
    } catch (error) {
      console.error('Failed to play music:', error);
    }
  }

  /**
   * Play ambient sound with crossfade
   */
  async playAmbience(ambienceType: AmbienceType, fadeInDuration = 2.0) {
    if (ambienceType === 'none') {
      this.stopAmbience();
      return;
    }

    const ambienceUrls: Record<AmbienceType, string> = {
      rain: '/audio/ambience/rain.mp3',
      fireplace: '/audio/ambience/fireplace.mp3',
      cafe: '/audio/ambience/cafe.mp3',
      city: '/audio/ambience/city.mp3',
      forest: '/audio/ambience/forest.mp3',
      thunder: '/audio/ambience/thunder.mp3',
      none: ''
    };

    const url = ambienceUrls[ambienceType];
    if (!url) return;

    // Fade out current ambience
    if (this.currentAmbience) {
      this.fadeOut(this.currentAmbience, 1.5);
    }

    // Create new audio element
    const audio = new Audio(url);
    audio.loop = true;
    audio.volume = 0;

    try {
      await audio.play();
      this.currentAmbience = audio;

      // Fade in new ambience
      this.fadeIn(audio, fadeInDuration);
    } catch (error) {
      console.error('Failed to play ambience:', error);
    }
  }

  /**
   * Play sound effect (one-shot)
   */
  async playSFX(sfxType: SFXType, volume = 1.0) {
    const sfxUrls: Record<SFXType, string> = {
      thunder: '/audio/sfx/thunder.mp3',
      heartbeat: '/audio/sfx/heartbeat.mp3',
      door_slam: '/audio/sfx/door_slam.mp3',
      glass_break: '/audio/sfx/glass_break.mp3',
      footsteps: '/audio/sfx/footsteps.mp3',
      whisper_echo: '/audio/sfx/whisper_echo.mp3',
      kiss: '/audio/sfx/kiss.mp3',
      gunshot: '/audio/sfx/gunshot.mp3',
      scream: '/audio/sfx/scream.mp3'
    };

    const url = sfxUrls[sfxType];
    if (!url) return;

    const audio = new Audio(url);
    audio.volume = this.sfxVolume * volume;

    try {
      await audio.play();
    } catch (error) {
      console.error('Failed to play SFX:', error);
    }
  }

  /**
   * Play voice line using Web Speech API (fallback) or pre-recorded audio
   */
  async playVoiceLine(text: string, voiceType: 'male_deep' | 'female_soft' | 'whisper' | 'menacing') {
    // For now, we'll use Web Speech API as a free fallback
    // Later we can integrate Edge TTS or pre-recorded voice lines
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);

      // Configure voice based on type
      const voices = window.speechSynthesis.getVoices();
      switch (voiceType) {
        case 'male_deep':
          utterance.pitch = 0.8;
          utterance.rate = 0.9;
          const maleVoice = voices.find(v => v.name.includes('Male') || v.name.includes('male'));
          if (maleVoice) utterance.voice = maleVoice;
          break;
        case 'female_soft':
          utterance.pitch = 1.2;
          utterance.rate = 0.95;
          const femaleVoice = voices.find(v => v.name.includes('Female') || v.name.includes('female'));
          if (femaleVoice) utterance.voice = femaleVoice;
          break;
        case 'whisper':
          utterance.volume = 0.4;
          utterance.rate = 0.7;
          utterance.pitch = 0.9;
          break;
        case 'menacing':
          utterance.pitch = 0.6;
          utterance.rate = 0.8;
          break;
      }

      utterance.volume = this.voiceVolume;
      window.speechSynthesis.speak(utterance);
    }
  }

  /**
   * Fade in audio element
   */
  private fadeIn(audio: HTMLAudioElement, duration: number) {
    const targetVolume = this.musicVolume;
    const steps = 50;
    const stepDuration = (duration * 1000) / steps;
    const volumeIncrement = targetVolume / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep >= steps || !audio) {
        clearInterval(interval);
        if (audio) audio.volume = targetVolume;
        return;
      }

      audio.volume = volumeIncrement * currentStep;
      currentStep++;
    }, stepDuration);
  }

  /**
   * Fade out audio element
   */
  private fadeOut(audio: HTMLAudioElement, duration: number) {
    const startVolume = audio.volume;
    const steps = 50;
    const stepDuration = (duration * 1000) / steps;
    const volumeDecrement = startVolume / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep >= steps || !audio) {
        clearInterval(interval);
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
        return;
      }

      audio.volume = startVolume - (volumeDecrement * currentStep);
      currentStep++;
    }, stepDuration);
  }

  /**
   * Stop all music
   */
  stopMusic() {
    if (this.currentMusic) {
      this.fadeOut(this.currentMusic, 1.0);
      this.currentMusic = null;
    }
  }

  /**
   * Stop all ambience
   */
  stopAmbience() {
    if (this.currentAmbience) {
      this.fadeOut(this.currentAmbience, 1.0);
      this.currentAmbience = null;
    }
  }

  /**
   * Stop all audio
   */
  stopAll() {
    this.stopMusic();
    this.stopAmbience();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  /**
   * Set volume for specific layer
   */
  setVolume(layer: 'music' | 'ambience' | 'sfx' | 'voice' | 'master', volume: number) {
    volume = Math.max(0, Math.min(1, volume)); // Clamp between 0-1

    switch (layer) {
      case 'music':
        this.musicVolume = volume;
        if (this.musicGain) this.musicGain.gain.value = volume;
        if (this.currentMusic) this.currentMusic.volume = volume;
        break;
      case 'ambience':
        this.ambienceVolume = volume;
        if (this.ambienceGain) this.ambienceGain.gain.value = volume;
        if (this.currentAmbience) this.currentAmbience.volume = volume;
        break;
      case 'sfx':
        this.sfxVolume = volume;
        if (this.sfxGain) this.sfxGain.gain.value = volume;
        break;
      case 'voice':
        this.voiceVolume = volume;
        if (this.voiceGain) this.voiceGain.gain.value = volume;
        break;
      case 'master':
        this.masterVolume = volume;
        break;
    }
  }

  /**
   * Get current volume for layer
   */
  getVolume(layer: 'music' | 'ambience' | 'sfx' | 'voice' | 'master'): number {
    switch (layer) {
      case 'music': return this.musicVolume;
      case 'ambience': return this.ambienceVolume;
      case 'sfx': return this.sfxVolume;
      case 'voice': return this.voiceVolume;
      case 'master': return this.masterVolume;
      default: return 0;
    }
  }

  /**
   * Resume AudioContext (needed for browsers that suspend it)
   */
  resume() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  }
}

// Singleton instance
let audioEngineInstance: AudioEngine | null = null;

export function getAudioEngine(): AudioEngine {
  if (!audioEngineInstance) {
    audioEngineInstance = new AudioEngine();
  }
  return audioEngineInstance;
}
