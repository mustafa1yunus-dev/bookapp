"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles, Heart, MessageCircle, Volume2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0506] text-[#f5ebe0]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0506]/80 backdrop-blur-md border-b border-[#6b0f1a]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <BookOpen className="text-[#d4af37]" size={28} />
            <span className="font-playfair text-2xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f0d057] bg-clip-text text-transparent">
              Velvet Pages
            </span>
          </motion.div>

          <div className="flex gap-6 items-center">
            <Link href="/library" className="hover:text-[#d4af37] transition-colors font-inter">
              Library
            </Link>
            <Link href="/about" className="hover:text-[#d4af37] transition-colors font-inter">
              About
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#6b0f1a] to-[#8b1e2b] px-6 py-2 rounded-full font-inter font-medium hover:from-[#8b1e2b] hover:to-[#6b0f1a] transition-all"
            >
              Join Now
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6b0f1a]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-[#6b0f1a]/30 border border-[#d4af37]/30 px-4 py-2 rounded-full text-sm font-inter">
              <Sparkles className="text-[#d4af37]" size={16} />
              Where passion meets the page
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Lose Yourself in
            <br />
            <span className="bg-gradient-to-r from-[#d4af37] via-[#f0d057] to-[#d4af37] bg-clip-text text-transparent">
              Dark Romance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-cormorant text-xl md:text-2xl text-[#e5d5c0] mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Immerse yourself in stories that ignite your soul. Experience passion, mystery,
            and unforgettable characters in our curated collection of dark romance novels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link href="/library">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#6b0f1a] to-[#8b1e2b] px-8 py-4 rounded-full font-inter font-semibold text-lg hover:shadow-lg hover:shadow-[#6b0f1a]/50 transition-all"
              >
                Start Reading
              </motion.button>
            </Link>
            <Link href="/preview">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#d4af37] px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-[#d4af37]/10 transition-all"
              >
                Preview Books
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "50+", label: "Dark Romance Novels" },
              { number: "10K+", label: "Happy Readers" },
              { number: "500K+", label: "Pages Read" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-playfair text-4xl font-bold text-[#d4af37] mb-2">
                  {stat.number}
                </div>
                <div className="font-inter text-sm text-[#e5d5c0]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#0a0506] to-[#1a1516]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-playfair text-5xl font-bold mb-6">
              An Experience Like
              <span className="text-[#d4af37]"> No Other</span>
            </h2>
            <p className="font-cormorant text-xl text-[#e5d5c0] max-w-2xl mx-auto">
              We've crafted every detail to make your reading journey unforgettable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="text-[#d4af37]" size={32} />,
                title: "Immersive Reading",
                description: "Beautiful page-turn animations and customizable reading experience"
              },
              {
                icon: <Volume2 className="text-[#d4af37]" size={32} />,
                title: "Ambient Sounds",
                description: "Rain, fireplace, or music to set the perfect mood while you read"
              },
              {
                icon: <Heart className="text-[#d4af37]" size={32} />,
                title: "Save Favorites",
                description: "Highlight scenes, bookmark pages, and track your reading journey"
              },
              {
                icon: <MessageCircle className="text-[#d4af37]" size={32} />,
                title: "Book Clubs",
                description: "Connect with readers, discuss your favorite moments and characters"
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#1a1516] border border-[#6b0f1a]/30 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-playfair text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="font-inter text-[#e5d5c0] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#6b0f1a] via-[#8b1e2b] to-[#4a0a12] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Ready to Escape Reality?
            </h2>
            <p className="font-cormorant text-2xl mb-12 text-[#f5ebe0]/90">
              Join thousands of readers who have found their sanctuary in our stories
            </p>
            <Link href="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#d4af37] text-[#0a0506] px-12 py-5 rounded-full font-inter font-bold text-xl hover:bg-[#f0d057] transition-all shadow-2xl"
              >
                Start Your Journey - 500 KES/month
              </motion.button>
            </Link>
            <p className="mt-6 font-inter text-sm text-[#f5ebe0]/70">
              First 100 members get founding rate: 399 KES/month forever
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0506] border-t border-[#6b0f1a]/20 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="text-[#d4af37]" size={24} />
            <span className="font-playfair text-xl font-bold text-[#d4af37]">
              Velvet Pages
            </span>
          </div>
          <p className="font-inter text-sm text-[#e5d5c0] mb-4">
            Your sanctuary for dark romance
          </p>
          <div className="flex gap-6 justify-center text-sm font-inter text-[#e5d5c0]">
            <Link href="/terms" className="hover:text-[#d4af37] transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-[#d4af37] transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-[#d4af37] transition-colors">
              Contact
            </Link>
          </div>
          <p className="mt-6 text-xs text-[#e5d5c0]/50 font-inter">
            © 2025 Velvet Pages. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
