import { MoodType, AmbienceType, MusicType, SFXType } from './audioEngine';

/**
 * Visual effects that can be applied to the page
 */
export type VisualEffectType = 'darken' | 'glow' | 'shake' | 'blur' | 'sepia' | 'red_tint' | 'warm_glow' | 'none';

/**
 * Haptic feedback patterns
 */
export type HapticPattern = 'pulse' | 'strong' | 'gentle' | 'heartbeat' | 'double_tap' | 'none';

/**
 * Voice types for dialogue
 */
export type VoiceType = 'male_deep' | 'female_soft' | 'whisper' | 'menacing';

/**
 * Sound effect trigger - defines when and what SFX to play
 */
export interface SFXTrigger {
  type: SFXType;
  /** Percentage through the segment (0-100) or word index */
  timing: number;
  /** Optional volume override (0-1) */
  volume?: number;
}

/**
 * Voice line trigger - defines dialogue that should be spoken
 */
export interface VoiceLineTrigger {
  /** The text to be spoken */
  text: string;
  /** Voice type to use */
  voice: VoiceType;
  /** Percentage through the segment (0-100) or word index */
  timing: number;
}

/**
 * Scene segment - a piece of the story with immersive metadata
 */
export interface SceneSegment {
  /** The actual text content */
  text: string;

  /** Overall mood/emotion of this segment */
  mood?: MoodType;

  /** Ambient background sound */
  ambience?: AmbienceType;

  /** Background music track */
  music?: MusicType;

  /** Sound effects to trigger at specific moments */
  sfx?: SFXTrigger[];

  /** Voice lines to speak at specific moments */
  voiceLines?: VoiceLineTrigger[];

  /** Visual effect to apply to the page */
  visualEffect?: VisualEffectType;

  /** Haptic feedback pattern */
  haptic?: HapticPattern;

  /** Particle effect (for romantic/magical moments) */
  particles?: 'hearts' | 'sparkles' | 'petals' | 'embers' | 'none';
}

/**
 * Chapter with immersive scene segments
 */
export interface ImmersiveChapter {
  number: number;
  title: string;
  /** Array of scene segments with immersive metadata */
  segments: SceneSegment[];
}

/**
 * Complete immersive book
 */
export interface ImmersiveBook {
  id: number;
  title: string;
  author: string;
  coverImage?: string;
  description?: string;
  tags?: string[];
  chapters: ImmersiveChapter[];
}

/**
 * Helper function to convert plain text chapter to segmented format
 */
export function createSimpleSegment(text: string): SceneSegment {
  return {
    text,
    mood: 'neutral',
    ambience: 'none',
    music: 'none',
    visualEffect: 'none',
    haptic: 'none'
  };
}

/**
 * Helper function to detect mood from text (basic sentiment analysis)
 */
export function detectMoodFromText(text: string): MoodType {
  const lowerText = text.toLowerCase();

  // Keywords for different moods
  const moodKeywords = {
    romantic: ['love', 'kiss', 'caress', 'desire', 'passion', 'heart', 'lips', 'touch', 'warmth'],
    tense: ['fear', 'danger', 'threat', 'warning', 'careful', 'nervous', 'anxiety', 'hesitated'],
    action: ['ran', 'fight', 'attack', 'punch', 'grabbed', 'chased', 'explosion', 'gunshot'],
    sad: ['cry', 'tears', 'sorrow', 'loss', 'grief', 'pain', 'died', 'alone', 'empty'],
    mysterious: ['secret', 'hidden', 'shadow', 'unknown', 'mystery', 'whisper', 'darkness'],
    suspenseful: ['suddenly', 'slowly', 'creeping', 'waiting', 'silence', 'watching']
  };

  let maxScore = 0;
  let detectedMood: MoodType = 'neutral';

  for (const [mood, keywords] of Object.entries(moodKeywords)) {
    const score = keywords.filter(keyword => lowerText.includes(keyword)).length;
    if (score > maxScore) {
      maxScore = score;
      detectedMood = mood as MoodType;
    }
  }

  return detectedMood;
}
