"use client";

import { CTASection } from "@/components/cta-section";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-16 md:py-20 pt-24 sm:pt-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(171, 38, 69, 0.06) 0%, rgba(255, 255, 255, 1) 100%)",
        }}
      >
        <div
          className="absolute top-[10%] right-[8%] w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-full blur-3xl opacity-[0.12]"
          style={{
            background: "radial-gradient(circle, #ab2645 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[10%] left-[8%] w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-full blur-3xl opacity-[0.12]"
          style={{
            background: "radial-gradient(circle, #0b464f 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-gray-200 bg-gray-50/50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Sparkles size={14} style={{ color: "#ab2645" }} />
            <span className="text-[10px] sm:text-xs font-medium tracking-wide text-gray-700">
              LEGAL
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.1] tracking-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span style={{ color: "#0b464f" }}>Privacy</span>{" "}
            <span style={{ color: "#ab2645" }}>Policy</span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            How we collect, use, and protect your information
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section
        className="py-12 sm:py-16 md:py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(11, 70, 79, 0.015) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="prose prose-sm sm:prose-base max-w-none"
          >
            <div className="space-y-8">
              <div>
                <h2
                  style={{ color: "#0b464f" }}
                  className="text-2xl font-bold mb-4"
                >
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We collect information you provide directly to us, such as
                  when you contact us through our website, email, or WhatsApp.
                  This may include your name, email address, phone number, and
                  message content.
                </p>
              </div>

              <div>
                <h2
                  style={{ color: "#0b464f" }}
                  className="text-2xl font-bold mb-4"
                >
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We use the information we collect to respond to your
                  inquiries, provide our services, and communicate with you
                  about Pickify's offerings. We do not share your personal
                  information with third parties without your consent.
                </p>
              </div>

              <div>
                <h2
                  style={{ color: "#0b464f" }}
                  className="text-2xl font-bold mb-4"
                >
                  3. Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate security measures to protect your
                  personal information. However, no method of transmission over
                  the internet is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
              </div>

              <div>
                <h2
                  style={{ color: "#0b464f" }}
                  className="text-2xl font-bold mb-4"
                >
                  4. Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this privacy policy, please
                  contact us at:
                  <br />
                  Email: pickify109@gmail.com
                  <br />
                  WhatsApp: +92 370 012 9502
                </p>
              </div>

              <div>
                <p className="text-gray-600 text-sm">
                  Last updated: October 29, 2025
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
