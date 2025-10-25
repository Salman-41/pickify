"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Call-to-action section component.
 *
 * Features:
 * - Centered content layout
 * - Animated entrance on scroll
 * - Gradient background
 * - Primary CTA button with hover effects
 * - Responsive typography
 *
 * @component
 * @example
 * ```tsx
 * <CTASection />
 * ```
 */
export function CTASection() {
  return (
    <section
      className="py-12 sm:py-16 md:py-20"
      style={{
        background:
          "linear-gradient(180deg, rgba(11, 70, 79, 0.02) 0%, rgba(171, 38, 69, 0.015) 100%)",
      }}
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance-custom px-2"
          style={{ color: "#0b464f" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Transform Your Store?
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's discuss your Shopify goals and create a custom plan to boost
          your revenue
        </motion.p>

        <motion.button
          className="w-full sm:w-auto min-h-12 px-6 sm:px-8 py-4 text-white rounded-lg font-semibold smooth-transition hover:opacity-90 flex items-center justify-center gap-2 mx-auto shadow-sm hover:shadow-md"
          style={{ backgroundColor: "#ab2645" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule a Free Consultation <ArrowRight size={20} />
        </motion.button>
      </div>
    </section>
  );
}
