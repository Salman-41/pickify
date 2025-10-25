"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Hero section component for the homepage.
 *
 * Features:
 * - Animated gradient orbs floating in the background
 * - Premium badge with sparkles icon
 * - Main headline with brand colors
 * - Call-to-action buttons with hover effects
 * - Statistics cards with hover animations
 *
 * @component
 * @example
 * ```tsx
 * <HeroSection />
 * ```
 */
export function HeroSection() {
  return (
    <section
      className="relative min-h-[100vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-20 sm:pb-0"
      style={{
        background:
          "linear-gradient(180deg, rgba(171, 38, 69, 0.06) 0%, rgba(255, 255, 255, 1) 100%)",
      }}
    >
      {/* Minimal decorative elements - very subtle with floating animation */}
      <motion.div
        className="absolute top-[15%] right-[8%] w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-full blur-3xl opacity-[0.12]"
        style={{
          background: "radial-gradient(circle, #ab2645 0%, transparent 70%)",
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[15%] left-[8%] w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-full blur-3xl opacity-[0.12]"
        style={{
          background: "radial-gradient(circle, #0b464f 0%, transparent 70%)",
        }}
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[10%] w-40 h-40 sm:w-60 sm:h-60 rounded-full blur-3xl opacity-[0.1]"
        style={{
          background: "radial-gradient(circle, #ab2645 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-40 h-40 sm:w-60 sm:h-60 rounded-full blur-3xl opacity-[0.1]"
        style={{
          background: "radial-gradient(circle, #0b464f 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small badge - minimal, professional */}
          <motion.div
            className="mb-6 sm:mb-8 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-gray-200 bg-gray-50/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Sparkles size={14} style={{ color: "#ab2645" }} />
            <span className="text-[10px] sm:text-xs font-medium tracking-wide text-gray-700">
              PREMIUM SHOPIFY SOLUTIONS
            </span>
          </motion.div>

          {/* Main headline - clean, bold, dark */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.1] tracking-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <span style={{ color: "#0b464f" }}>
              We Design & Build Shopify Stores That
            </span>{" "}
            <span
              className="relative inline-block font-bold"
              style={{ color: "#ab2645" }}
            >
              Convert
            </span>
          </motion.h1>

          {/* Subheading - simple gray text */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            Expert Shopify design and development that transforms your online
            store into a revenue-generating machine. Beautiful design meets
            high-performance code.
          </motion.p>

          {/* CTA Buttons - clean, professional - mobile first */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-12 sm:mb-16 px-3 sm:px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <motion.button
              className="group w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 min-h-12 text-sm sm:text-base text-white rounded-lg font-semibold smooth-transition hover:opacity-90 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              style={{ backgroundColor: "#ab2645" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </motion.button>
            <motion.button
              className="w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 min-h-12 text-sm sm:text-base border-2 rounded-lg font-semibold smooth-transition hover:shadow-md flex items-center justify-center gap-2"
              style={{
                borderColor: "#0b464f",
                color: "#0b464f",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.button>
          </motion.div>

          {/* Stats - clean cards with subtle styling */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
            {[
              { number: "150+", label: "Stores Launched", color: "#ab2645" },
              { number: "$50M+", label: "Revenue Generated", color: "#0b464f" },
              { number: "98%", label: "Client Satisfaction", color: "#ab2645" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-4 sm:p-6 rounded-xl smooth-transition"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
              >
                <div
                  className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
