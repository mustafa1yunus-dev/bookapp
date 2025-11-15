"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
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
  X
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { use } from "react";

// Mock book content - you'll replace with real content
const bookContent = {
  id: 1,
  title: "Shadows of Desire",
  author: "Anonymous",
  chapters: [
    {
      number: 1,
      title: "The Meeting",
      content: `The rain fell in sheets against the tall windows of the penthouse, each droplet racing down the glass like tears I refused to shed. I stood there, champagne glass in hand, surrounded by the city's elite—people who knew my name but nothing of my truth.

"Ms. Thorne," a deep voice cut through my thoughts, sending an involuntary shiver down my spine.

I turned, and there he was. Dante Moretti. The man who shouldn't exist in my carefully constructed world. Dark eyes that seemed to see through every wall I'd built, a suit that cost more than most people's cars, and a reputation that preceded him like a storm warning.

"Mr. Moretti," I acknowledged, keeping my voice steady even as my pulse quickened. "I didn't expect to see you here."

"I go where I please." His lips curved into something that wasn't quite a smile. "And tonight, it pleased me to find you."

The way he said it—like I was prey he'd been hunting—should have sent me running. Instead, I found myself rooted to the spot, drawn in by the danger he represented.

"Careful," I warned, lifting my chin. "I'm not what you think I am."

"No?" He stepped closer, close enough that I could smell his cologne—sandalwood and sin. "Then tell me, Elena. What are you?"

My name on his lips was a caress and a threat all at once. This was a man who dealt in secrets and shadows, who ruled an empire built on fear and loyalty. And somehow, he'd set his sights on me.

"I'm the woman who's going to walk away," I said, even as every fiber of my being screamed at me to stay.

His hand caught my wrist—not painful, but possessive. "No, you're not."

And in that moment, as lightning illuminated his face and thunder echoed the pounding of my heart, I realized he was right. Whatever this was, whatever darkness he brought with him, I was already caught in it.

The question was: did I want to escape?`,
    },
    {
      number: 2,
      title: "Dangerous Games",
      content: `Three days. That's how long I'd managed to avoid Dante Moretti after that night at the penthouse.

Three days of jumping at shadows, of checking over my shoulder, of lying awake wondering when—not if—he would appear again.

I should have known better than to think I could hide.

"Your usual, Elena?" Marcus, my favorite barista, asked as I walked into the coffee shop that had become my sanctuary.

"Please," I managed, even as the hairs on the back of my neck stood up. Someone was watching me. I could feel it.

I collected my latte and turned to find my regular table in the corner—only to discover it was already occupied.

By him.

Dante sat there like he owned the place, probably because he did. The man seemed to own half the city, and what he didn't own, he controlled through less... legitimate means.

"You're in my seat," I said, proud that my voice didn't shake.

"Then sit with me." It wasn't a request.

Against every instinct for self-preservation, I did. "What do you want?"

"Straight to the point. I like that." He leaned back, studying me with those dark eyes that missed nothing. "I want you to work for me."

I nearly choked on my coffee. "Excuse me?"

"You're an art appraiser. One of the best. I'm acquiring a collection that needs... authentication."

"There are dozens of appraisers in this city—"

"I don't want dozens. I want you."

The intensity in his voice made my breath catch. This wasn't just about art, and we both knew it.

"And if I say no?"

"You won't." He pulled out a folder, sliding it across the table. "Because you're curious. Because you need the money—yes, I know about your mother's medical bills. And because..."

He leaned forward, and suddenly the busy coffee shop felt very small.

"Because you felt it too, that night. This thing between us. And you want to know where it leads as much as I do."

I should have thrown the coffee in his face. Should have walked out. Should have done anything except open that folder and look at the figure he was offering.

The amount would cover my mother's treatment and then some. It was too good to be true, which meant there was a catch.

"What's the real job?" I asked.

His smile was all predator. "Smart girl. The art is real, but so is the danger. There are people who don't want this collection found. People who would kill to keep it hidden."

"Then why pursue it?"

"Because it was my father's dying wish. Because it holds secrets that could change everything. And because..." He reached across the table, his fingers brushing mine with deliberate intent. "I protect what's mine."

"I'm not yours."

"Not yet."

The promise in those two words should have terrified me. Instead, I felt heat pool in my stomach, desire warring with common sense.

"One job," I heard myself say. "Then we're done."

"Of course." His smile said he knew better. "We start tomorrow. I'll pick you up at seven."

"I didn't give you my address."

"Elena." He stood, buttoning his jacket. "I know everything about you. Your address, your favorite wine, the fact that you read in the bathtub when you're stressed. I've known since the moment I decided you were going to be mine."

He should have sounded creepy. Stalker-ish. Instead, his words sent a thrill through me that I'd never felt before.

"Seven o'clock," he repeated. "Wear something you don't mind getting dirty. This won't be like your usual gallery work."

And then he was gone, leaving me with a folder full of priceless art, an offer I couldn't refuse, and the sinking feeling that I'd just agreed to something far more dangerous than I could imagine.

But as I opened the folder and saw the first painting—a masterpiece thought lost to history—I couldn't deny the excitement coursing through my veins.

Dante Moretti was dangerous. This job was reckless.

And I'd never wanted anything more.`,
    },
  ],
};

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default function BookReader(props: PageProps) {
  const params = use(props.params);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [fontSize, setFontSize] = useState(18);
  const [ambientSound, setAmbientSound] = useState<string | null>(null);
  const [readingMode, setReadingMode] = useState<"light" | "dark">("dark");
  const [pageDirection, setPageDirection] = useState<"next" | "prev">("next");

  // Split content into pages (approximate)
  const wordsPerPage = 350;
  const chapter = bookContent.chapters[currentChapter];
  const words = chapter.content.split(" ");
  const pages = [];
  for (let i = 0; i < words.length; i += wordsPerPage) {
    pages.push(words.slice(i, i + wordsPerPage).join(" "));
  }

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setPageDirection("next");
      setCurrentPage(currentPage + 1);
    } else if (currentChapter < bookContent.chapters.length - 1) {
      setPageDirection("next");
      setCurrentChapter(currentChapter + 1);
      setCurrentPage(0);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setPageDirection("prev");
      setCurrentPage(currentPage - 1);
    } else if (currentChapter > 0) {
      setPageDirection("prev");
      setCurrentChapter(currentChapter - 1);
      setCurrentPage(0);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextPage();
      if (e.key === "ArrowLeft") prevPage();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentPage, currentChapter]);

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

  return (
    <div className={`min-h-screen ${readingMode === "dark" ? "bg-[#0a0506] text-[#f5ebe0]" : "bg-[#f5ebe0] text-[#0a0506]"}`}>
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
            className="fixed right-0 top-0 h-full w-80 bg-[#1a1516] border-l border-[#6b0f1a]/30 p-6 z-50 overflow-y-auto"
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
                max="24"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full"
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

            {/* Ambient Sounds */}
            <div className="mb-6">
              <label className="font-inter text-sm text-[#e5d5c0] mb-2 block">
                Ambient Sounds
              </label>
              <div className="space-y-2">
                {["Rain", "Fireplace", "Coffee Shop", "None"].map((sound) => (
                  <button
                    key={sound}
                    onClick={() => setAmbientSound(sound === "None" ? null : sound)}
                    className={`w-full p-3 rounded-lg border-2 transition-all text-left font-inter ${
                      (ambientSound === sound || (sound === "None" && !ambientSound))
                        ? "border-[#d4af37] bg-[#6b0f1a]/20"
                        : "border-[#6b0f1a]/30 hover:border-[#6b0f1a]/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{sound}</span>
                      {ambientSound === sound && <Volume2 size={16} className="text-[#d4af37]" />}
                      {sound === "None" && !ambientSound && <VolumeX size={16} className="text-[#d4af37]" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
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
              {bookContent.title}
            </h1>
            <p className="font-cormorant text-xl text-[#e5d5c0]">
              Chapter {chapter.number}: {chapter.title}
            </p>
          </motion.div>

          {/* Page Content with Animation */}
          <div className="relative min-h-[600px] perspective-1000">
            <AnimatePresence mode="wait" custom={pageDirection}>
              <motion.div
                key={`${currentChapter}-${currentPage}`}
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
                  className="font-cormorant leading-relaxed text-justify"
                  style={{ fontSize: `${fontSize}px` }}
                >
                  {pages[currentPage]}
                </div>

                {/* Page Number */}
                <div className="mt-8 text-center font-inter text-sm text-[#e5d5c0]/50">
                  Page {currentPage + 1} of {pages.length}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevPage}
              disabled={currentChapter === 0 && currentPage === 0}
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
                  animate={{
                    width: `${((currentChapter * pages.length + currentPage + 1) /
                            (bookContent.chapters.length * pages.length)) * 100}%`
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="text-center mt-2 font-inter text-xs text-[#e5d5c0]/70">
                {Math.round(((currentChapter * pages.length + currentPage + 1) /
                            (bookContent.chapters.length * pages.length)) * 100)}% Complete
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextPage}
              disabled={
                currentChapter === bookContent.chapters.length - 1 &&
                currentPage === pages.length - 1
              }
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
              <p className="italic">"OMG this chapter!! 🔥 Dante is so intense!"</p>
              <p className="italic">"I can't stop reading. This is SO good!"</p>
              <p className="italic">"Elena better not walk away... I need more!"</p>
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
