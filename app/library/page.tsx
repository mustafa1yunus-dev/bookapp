"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, Heart, Star, TrendingUp, Filter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock book data - you'll replace this with your actual books
const books = [
  {
    id: 1,
    title: "Shadows of Desire",
    author: "Anonymous",
    cover: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    rating: 4.8,
    reads: "12.5K",
    chapters: 45,
    status: "Completed",
    tags: ["Dark Romance", "Mafia", "Enemies to Lovers"],
    description: "In the darkest corners of the city, power and passion collide..."
  },
  {
    id: 2,
    title: "Crimson Hearts",
    author: "Anonymous",
    cover: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    rating: 4.9,
    reads: "18.2K",
    chapters: 38,
    status: "Ongoing",
    tags: ["Dark Romance", "Billionaire", "Second Chance"],
    description: "When the past refuses to stay buried, love becomes the ultimate risk..."
  },
  {
    id: 3,
    title: "Midnight Confessions",
    author: "Anonymous",
    cover: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    rating: 4.7,
    reads: "9.8K",
    chapters: 52,
    status: "Completed",
    tags: ["Dark Romance", "Forbidden Love", "Age Gap"],
    description: "Some secrets are meant to be whispered in the dark..."
  },
  {
    id: 4,
    title: "Broken Vows",
    author: "Anonymous",
    cover: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    rating: 4.6,
    reads: "15.7K",
    chapters: 41,
    status: "Completed",
    tags: ["Dark Romance", "Marriage of Convenience", "Redemption"],
    description: "A contract. A wedding. A love that was never supposed to happen..."
  },
  {
    id: 5,
    title: "Velvet Lies",
    author: "Anonymous",
    cover: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    rating: 4.9,
    reads: "21.3K",
    chapters: 47,
    status: "Ongoing",
    tags: ["Dark Romance", "Revenge", "Forced Proximity"],
    description: "Revenge tastes sweet until love complicates everything..."
  },
  {
    id: 6,
    title: "Sinful Obsession",
    author: "Anonymous",
    cover: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    rating: 4.8,
    reads: "14.1K",
    chapters: 36,
    status: "Completed",
    tags: ["Dark Romance", "Stalker", "Possessive Hero"],
    description: "He watched. He waited. Now, he'll claim what's his..."
  },
];

export default function Library() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  const filters = ["All", "Ongoing", "Completed", "Trending", "New Releases"];

  return (
    <div className="min-h-screen bg-[#0a0506] text-[#f5ebe0]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0506]/80 backdrop-blur-md border-b border-[#6b0f1a]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="text-[#d4af37]" size={28} />
            <span className="font-playfair text-2xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f0d057] bg-clip-text text-transparent">
              Velvet Pages
            </span>
          </Link>

          <div className="flex gap-6 items-center">
            <Link href="/library" className="text-[#d4af37] transition-colors font-inter">
              Library
            </Link>
            <Link href="/about" className="hover:text-[#d4af37] transition-colors font-inter">
              About
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#6b0f1a] to-[#8b1e2b] px-6 py-2 rounded-full font-inter font-medium"
            >
              Join Now
            </motion.button>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
              Your Library of
              <span className="text-[#d4af37]"> Passion</span>
            </h1>
            <p className="font-cormorant text-xl text-[#e5d5c0] max-w-2xl">
              Discover captivating dark romance stories that will keep you turning pages all night
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 flex gap-3 flex-wrap items-center"
          >
            <Filter className="text-[#d4af37]" size={20} />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full font-inter text-sm transition-all ${
                  selectedFilter === filter
                    ? "bg-[#6b0f1a] text-[#f5ebe0] border-2 border-[#d4af37]"
                    : "bg-[#1a1516] text-[#e5d5c0] border-2 border-transparent hover:border-[#6b0f1a]"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Books Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, idx) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredBook(book.id)}
                onMouseLeave={() => setHoveredBook(null)}
                className="group relative"
              >
                <Link href={`/book/${book.id}`}>
                  <div className="bg-[#1a1516] border border-[#6b0f1a]/30 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#6b0f1a]/20">
                    {/* Book Cover */}
                    <div className="relative h-64 overflow-hidden">
                      <div
                        className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                        style={{ background: book.cover }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1516] via-transparent to-transparent" />

                      {/* Floating badges */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-inter font-semibold ${
                          book.status === "Ongoing"
                            ? "bg-[#d4af37]/90 text-[#0a0506]"
                            : "bg-[#6b0f1a]/90 text-[#f5ebe0]"
                        }`}>
                          {book.status}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#0a0506]/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <Star className="text-[#d4af37] fill-[#d4af37]" size={16} />
                        <span className="font-inter text-sm font-semibold">{book.rating}</span>
                      </div>

                      {/* Heart icon */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute bottom-4 right-4 bg-[#0a0506]/80 backdrop-blur-sm p-2 rounded-full hover:bg-[#6b0f1a]/80 transition-colors"
                      >
                        <Heart className="text-[#f5ebe0]" size={18} />
                      </motion.button>
                    </div>

                    {/* Book Info */}
                    <div className="p-6">
                      <h3 className="font-playfair text-2xl font-semibold mb-2 group-hover:text-[#d4af37] transition-colors">
                        {book.title}
                      </h3>
                      <p className="font-inter text-sm text-[#e5d5c0] mb-4">
                        by {book.author}
                      </p>

                      {/* Description */}
                      <p className="font-cormorant text-[#e5d5c0]/80 mb-4 line-clamp-2">
                        {book.description}
                      </p>

                      {/* Stats */}
                      <div className="flex gap-4 mb-4 text-sm font-inter text-[#e5d5c0]">
                        <div className="flex items-center gap-1">
                          <BookOpen size={16} className="text-[#d4af37]" />
                          <span>{book.chapters} chapters</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp size={16} className="text-[#d4af37]" />
                          <span>{book.reads} reads</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex gap-2 flex-wrap">
                        {book.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-[#6b0f1a]/20 border border-[#6b0f1a]/40 rounded-md text-xs font-inter text-[#e5d5c0]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read button - appears on hover */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: hoveredBook === book.id ? 1 : 0,
                          y: hoveredBook === book.id ? 0 : 10
                        }}
                        className="mt-4"
                      >
                        <button className="w-full bg-gradient-to-r from-[#6b0f1a] to-[#8b1e2b] px-4 py-3 rounded-lg font-inter font-semibold hover:from-[#8b1e2b] hover:to-[#6b0f1a] transition-all">
                          Start Reading
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <button className="border-2 border-[#d4af37] px-8 py-3 rounded-full font-inter font-semibold hover:bg-[#d4af37]/10 transition-all">
              Load More Books
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
