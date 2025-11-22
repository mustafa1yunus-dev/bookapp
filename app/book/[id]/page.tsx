"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Settings,
  Heart,
  MessageCircle,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Bookmark,
  Share2,
  X,
  Music,
  Headphones
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { use } from "react";
import { immersiveBooks } from '../../../data/immersiveBooks';
import { getAudioEngine } from '../../../lib/audioEngine';
import { SceneSegment, VisualEffectType, HapticPattern } from '../../../lib/bookTypes';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default function ImmersiveBookReader(props: PageProps) {
  const params = use(props.params);
  const book = immersiveBooks[0]; // For now, use first book

  const [currentChapter, setCurrentChapter] = useState(0);
  const [currentSegment, setCurrentSegment] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [fontSize, setFontSize] = useState(18);
  const [readingMode, setReadingMode] = useState<"light" | "dark">("dark");
  const [pageDirection, setPageDirection] = useState<"next" | "prev">("next");
  const [immersiveMode, setImmersiveMode] = useState(true);

  // Audio engine
  const audioEngineRef = useRef(getAudioEngine());

  // Volume controls
  const [musicVolume, setMusicVolume] = useState(0.4);
  const [ambienceVolume, setAmbienceVolume] = useState(0.3);
  const [sfxVolume, setSfxVolume] = useState(0.6);
  const [voiceVolume, setVoiceVolume] = useState(0.8);

  // Visual effects state
  const [currentVisualEffect, setCurrentVisualEffect] = useState<VisualEffectType>('none');
  const [currentParticles, setCurrentParticles] = useState<string | null>(null);

  const chapter = book.chapters[currentChapter];
  const segment = chapter.segments[currentSegment];

  // Navigate to next segment
  const nextSegment = () => {
    if (currentSegment < chapter.segments.length - 1) {
      setPageDirection("next");
      setCurrentSegment(currentSegment + 1);
    } else if (currentChapter < book.chapters.length - 1) {
      setPageDirection("next");
      setCurrentChapter(currentChapter + 1);
      setCurrentSegment(0);
    }
  };

  // Navigate to previous segment
  const prevSegment = () => {
    if (currentSegment > 0) {
      setPageDirection("prev");
      setCurrentSegment(currentSegment - 1);
    } else if (currentChapter > 0) {
      setPageDirection("prev");
      setCurrentChapter(currentChapter - 1);
      const prevChapter = book.chapters[currentChapter - 1];
      setCurrentSegment(prevChapter.segments.length - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSegment();
      if (e.key === "ArrowLeft") prevSegment();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSegment, currentChapter]);

  // Trigger immersive effects when segment changes
  useEffect(() => {
    if (!immersiveMode) return;

    const activeSegment = chapter.segments[currentSegment];
    const audioEngine = audioEngineRef.current;

    // Play music if specified
    if (activeSegment.music && activeSegment.music !== 'none') {
      audioEngine.playMusic(activeSegment.music);
    }

    // Play ambience if specified
    if (activeSegment.ambience && activeSegment.ambience !== 'none') {
      audioEngine.playAmbience(activeSegment.ambience);
    }

    // Trigger SFX at specific timings
    if (activeSegment.sfx && activeSegment.sfx.length > 0) {
      activeSegment.sfx.forEach((sfx) => {
        // Convert timing percentage to milliseconds (assume average reading time per segment)
        const delay = (sfx.timing / 100) * 3000; // 3 seconds average per segment
        setTimeout(() => {
          audioEngine.playSFX(sfx.type, sfx.volume);
        }, delay);
      });
    }

    // Trigger voice lines at specific timings
    if (activeSegment.voiceLines && activeSegment.voiceLines.length > 0) {
      activeSegment.voiceLines.forEach((voiceLine) => {
        const delay = (voiceLine.timing / 100) * 3000;
        setTimeout(() => {
          audioEngine.playVoiceLine(voiceLine.text, voiceLine.voice);
        }, delay);
      });
    }

    // Apply visual effects
    if (activeSegment.visualEffect) {
      setCurrentVisualEffect(activeSegment.visualEffect);
    }

    // Set particles
    if (activeSegment.particles) {
      setCurrentParticles(activeSegment.particles === 'none' ? null : activeSegment.particles);
    } else {
      setCurrentParticles(null);
    }

    // Trigger haptic feedback
    if (activeSegment.haptic && activeSegment.haptic !== 'none') {
      triggerHaptic(activeSegment.haptic);
    }

    // Resume audio context (needed for browsers)
    audioEngine.resume();
  }, [currentChapter, currentSegment, immersiveMode]);

  // Haptic feedback function
  const triggerHaptic = (pattern: HapticPattern) => {
    if (!('vibrate' in navigator)) return;

    switch (pattern) {
      case 'pulse':
        navigator.vibrate(200);
        break;
      case 'strong':
        navigator.vibrate(400);
        break;
      case 'gentle':
        navigator.vibrate(100);
        break;
      case 'heartbeat':
        navigator.vibrate([100, 50, 100, 50, 100]);
        break;
      case 'double_tap':
        navigator.vibrate([100, 100, 100]);
        break;
    }
  };

  // Update audio engine volumes when sliders change
  useEffect(() => {
    const audioEngine = audioEngineRef.current;
    audioEngine.setVolume('music', musicVolume);
    audioEngine.setVolume('ambience', ambienceVolume);
    audioEngine.setVolume('sfx', sfxVolume);
    audioEngine.setVolume('voice', voiceVolume);
  }, [musicVolume, ambienceVolume, sfxVolume, voiceVolume]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      audioEngineRef.current.stopAll();
    };
  }, []);

  // Visual effect classes
  const getVisualEffectClass = () => {
    switch (currentVisualEffect) {
      case 'darken':
        return 'brightness-75 contrast-110';
      case 'glow':
        return 'brightness-110 saturate-150';
      case 'shake':
        return 'animate-shake';
      case 'blur':
        return 'blur-sm';
      case 'sepia':
        return 'sepia';
      case 'red_tint':
        return 'hue-rotate-[-15deg] saturate-150';
      case 'warm_glow':
        return 'brightness-105 contrast-105 saturate-125';
      default:
        return '';
    }
  };

  const pageVariants = {
    enter: (direction: string) => ({
      x: direction === "next" ? 1000 : -1000,
      opacity: 0,
      rotateY: direction === "next" ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: string) => ({
      x: direction === "next" ? -1000 : 1000,
      opacity: 0,
      rotateY: direction === "next" ? -45 : 45,
    }),
  };

  // Calculate total progress
  const totalSegments = book.chapters.reduce((sum, ch) => sum + ch.segments.length, 0);
  const segmentsRead = book.chapters.slice(0, currentChapter).reduce((sum, ch) => sum + ch.segments.length, 0) + currentSegment + 1;
  const progress = (segmentsRead / totalSegments) * 100;

  return (
    <div className={`min-h-screen transition-all duration-500 ${readingMode === "dark" ? "bg-[#0a0506] text-[#f5ebe0]" : "bg-[#f5ebe0] text-[#0a0506]"} ${getVisualEffectClass()}`}>
      {/* Particle effects */}
      {currentParticles && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {currentParticles === 'hearts' && <ParticleEffect type="hearts" />}
          {currentParticles === 'sparkles' && <ParticleEffect type="sparkles" />}
          {currentParticles === 'petals' && <ParticleEffect type="petals" />}
          {currentParticles === 'embers' && <ParticleEffect type="embers" />}
        </div>
      )}

      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#0a0506] to-transparent p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/library" className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
            <ChevronLeft size={20} />
            <span className="font-inter text-sm">Back to Library</span>
          </Link>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setImmersiveMode(!immersiveMode)}
              className={`p-2 transition-colors ${immersiveMode ? 'text-[#d4af37]' : 'text-[#f5ebe0]'}`}
              title={immersiveMode ? 'Immersive Mode: ON' : 'Immersive Mode: OFF'}
            >
              {immersiveMode ? <Headphones size={20} /> : <VolumeX size={20} />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:text-[#d4af37] transition-colors"
            >
              <Heart size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:text-[#d4af37] transition-colors"
            >
              <Bookmark size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:text-[#d4af37] transition-colors"
            >
              <Share2 size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 hover:text-[#d4af37] transition-colors"
            >
              <Settings size={20} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className="fixed right-0 top-0 h-full w-96 bg-[#1a1516] border-l border-[#6b0f1a]/30 p-6 z-50 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-playfair text-2xl font-semibold">Settings</h3>
              <button onClick={() => setShowSettings(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Font Size */}
            <div className="mb-6">
              <label className="font-inter text-sm text-[#e5d5c0] mb-2 block">
                Font Size: {fontSize}px
              </label>
              <input
                type="range"
                min="14"
                max="28"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full accent-[#d4af37]"
              />
            </div>

            {/* Reading Mode */}
            <div className="mb-6">
              <label className="font-inter text-sm text-[#e5d5c0] mb-2 block">
                Reading Mode
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setReadingMode("dark")}
                  className={`flex-1 p-3 rounded-lg border-2 transition-all ${
                    readingMode === "dark"
                      ? "border-[#d4af37] bg-[#6b0f1a]/20"
                      : "border-[#6b0f1a]/30"
                  }`}
                >
                  <Moon size={20} className="mx-auto" />
                </button>
                <button
                  onClick={() => setReadingMode("light")}
                  className={`flex-1 p-3 rounded-lg border-2 transition-all ${
                    readingMode === "light"
                      ? "border-[#d4af37] bg-[#6b0f1a]/20"
                      : "border-[#6b0f1a]/30"
                  }`}
                >
                  <Sun size={20} className="mx-auto" />
                </button>
              </div>
            </div>

            {/* Immersive Mode Toggle */}
            <div className="mb-6">
              <label className="font-inter text-sm text-[#e5d5c0] mb-2 block">
                Immersive Experience
              </label>
              <button
                onClick={() => setImmersiveMode(!immersiveMode)}
                className={`w-full p-4 rounded-lg border-2 transition-all ${
                  immersiveMode
                    ? "border-[#d4af37] bg-[#6b0f1a]/20 text-[#d4af37]"
                    : "border-[#6b0f1a]/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{immersiveMode ? 'ON' : 'OFF'}</span>
                  {immersiveMode ? <Headphones size={20} /> : <VolumeX size={20} />}
                </div>
                <p className="text-xs mt-2 text-[#e5d5c0]/70">
                  {immersiveMode
                    ? 'Sound effects, music, and haptic feedback enabled'
                    : 'Reading in silent mode'}
                </p>
              </button>
            </div>

            {/* Audio Controls */}
            {immersiveMode && (
              <>
                <div className="mb-4">
                  <label className="font-inter text-sm text-[#e5d5c0] mb-2 block flex items-center gap-2">
                    <Music size={16} /> Music Volume: {Math.round(musicVolume * 100)}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={musicVolume}
                    onChange={(e) => setMusicVolume(Number(e.target.value))}
                    className="w-full accent-[#d4af37]"
                  />
                </div>

                <div className="mb-4">
                  <label className="font-inter text-sm text-[#e5d5c0] mb-2 block flex items-center gap-2">
                    <Volume2 size={16} /> Ambience Volume: {Math.round(ambienceVolume * 100)}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={ambienceVolume}
                    onChange={(e) => setAmbienceVolume(Number(e.target.value))}
                    className="w-full accent-[#d4af37]"
                  />
                </div>

                <div className="mb-4">
                  <label className="font-inter text-sm text-[#e5d5c0] mb-2 block">
                    Sound Effects: {Math.round(sfxVolume * 100)}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={sfxVolume}
                    onChange={(e) => setSfxVolume(Number(e.target.value))}
                    className="w-full accent-[#d4af37]"
                  />
                </div>

                <div className="mb-4">
                  <label className="font-inter text-sm text-[#e5d5c0] mb-2 block">
                    Voice Acting: {Math.round(voiceVolume * 100)}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={voiceVolume}
                    onChange={(e) => setVoiceVolume(Number(e.target.value))}
                    className="w-full accent-[#d4af37]"
                  />
                </div>
              </>
            )}

            {/* Current Scene Info */}
            {immersiveMode && segment && (
              <div className="mt-6 p-4 bg-[#0a0506]/50 rounded-lg border border-[#6b0f1a]/30">
                <h4 className="font-inter text-xs uppercase tracking-wider text-[#d4af37] mb-3">Current Scene</h4>
                <div className="space-y-2 text-xs text-[#e5d5c0]/80">
                  {segment.mood && segment.mood !== 'neutral' && (
                    <p>Mood: <span className="text-[#d4af37]">{segment.mood}</span></p>
                  )}
                  {segment.music && segment.music !== 'none' && (
                    <p>Music: <span className="text-[#d4af37]">{segment.music.replace(/_/g, ' ')}</span></p>
                  )}
                  {segment.ambience && segment.ambience !== 'none' && (
                    <p>Ambience: <span className="text-[#d4af37]">{segment.ambience}</span></p>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Reading Area */}
      <div className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl w-full">
          {/* Chapter Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="font-playfair text-4xl font-bold text-[#d4af37] mb-2">
              {book.title}
            </h1>
            <p className="font-cormorant text-xl text-[#e5d5c0]">
              Chapter {chapter.number}: {chapter.title}
            </p>
          </motion.div>

          {/* Segment Content with Animation */}
          <div className="relative min-h-[600px] perspective-1000">
            <AnimatePresence mode="wait" custom={pageDirection}>
              <motion.div
                key={`${currentChapter}-${currentSegment}`}
                custom={pageDirection}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  rotateY: { duration: 0.6 },
                }}
                className="bg-gradient-to-br from-[#1a1516] to-[#0a0506] border border-[#6b0f1a]/30 rounded-2xl p-12 shadow-2xl"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="font-cormorant leading-relaxed"
                  style={{ fontSize: `${fontSize}px` }}
                >
                  {segment.text}
                </div>

                {/* Segment Number */}
                <div className="mt-8 text-center font-inter text-sm text-[#e5d5c0]/50">
                  Segment {currentSegment + 1} of {chapter.segments.length}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSegment}
              disabled={currentChapter === 0 && currentSegment === 0}
              className="flex items-center gap-2 px-6 py-3 bg-[#6b0f1a] rounded-full font-inter font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#8b1e2b] transition-colors"
            >
              <ChevronLeft size={20} />
              Previous
            </motion.button>

            {/* Progress Bar */}
            <div className="flex-1 mx-8">
              <div className="h-2 bg-[#1a1516] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#6b0f1a] to-[#d4af37]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="text-center mt-2 font-inter text-xs text-[#e5d5c0]/70">
                {Math.round(progress)}% Complete
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSegment}
              disabled={currentChapter === book.chapters.length - 1 && currentSegment === chapter.segments.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-[#6b0f1a] rounded-full font-inter font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#8b1e2b] transition-colors"
            >
              Next
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Comments Section Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 p-6 bg-[#1a1516] border border-[#6b0f1a]/30 rounded-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="text-[#d4af37]" size={20} />
              <h3 className="font-playfair text-xl font-semibold">Reader Reactions</h3>
            </div>
            <div className="space-y-3 text-sm font-inter text-[#e5d5c0]">
              <p className="italic">"OMG this chapter!! 🔥 The sound effects are INSANE!"</p>
              <p className="italic">"I can't stop reading. The immersive experience is next level!"</p>
              <p className="italic">"Dante's voice when he said 'I want you' - I DIED 💀"</p>
            </div>
            <button className="mt-4 w-full py-2 border border-[#d4af37] rounded-lg hover:bg-[#d4af37]/10 transition-colors font-inter">
              Join the Discussion
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Particle Effect Component
function ParticleEffect({ type }: { type: string }) {
  return (
    <div className="particle-container">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`particle particle-${type}`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            opacity: 0.8,
          }}
          animate={{
            y: window.innerHeight + 20,
            x: Math.random() * window.innerWidth,
            opacity: 0,
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            delay: Math.random() * 2,
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            width: type === 'hearts' ? '20px' : '8px',
            height: type === 'hearts' ? '20px' : '8px',
            background: type === 'hearts' ? '#d4af37' : type === 'embers' ? '#ff6b6b' : '#fff',
            borderRadius: type === 'hearts' ? '50%' : '50%',
          }}
        />
      ))}
    </div>
  );
}
