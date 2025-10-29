"use client";

import { CTASection } from "@/components/cta-section";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function TermsPage() {
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
            <span style={{ color: "#0b464f" }}>Terms &</span>{" "}
            <span style={{ color: "#ab2645" }}>Conditions</span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Our terms of service and conditions for using Pickify's services
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
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using Pickify's website and services, you
                  accept and agree to be bound by the terms and provision of
                  this agreement. If you do not agree to abide by the above,
                  please do not use this service.
                </p>
              </div>

              <div>
                <h2
                  style={{ color: "#0b464f" }}
                  className="text-2xl font-bold mb-4"
                >
                  2. Use License
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on Pickify's website for
                  personal, non-commercial transitory viewing only. This is the
                  grant of a license, not a transfer of title, and under this
                  license you may not:
                  <br />• Modify or copy the materials • Use the materials for
                  any commercial purpose or for any public display • Attempt to
                  decompile or reverse engineer any software contained on the
                  website • Remove any copyright or other proprietary notations
                  from the materials
                </p>
              </div>

              <div>
                <h2
                  style={{ color: "#0b464f" }}
                  className="text-2xl font-bold mb-4"
                >
                  3. Disclaimer
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The materials on Pickify's website are provided on an "as is"
                  basis. Pickify makes no warranties, expressed or implied, and
                  hereby disclaims and negates all other warranties including,
                  without limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation
                  of rights.
                </p>
              </div>

              <div>
                <h2
                  style={{ color: "#0b464f" }}
                  className="text-2xl font-bold mb-4"
                >
                  4. Limitations
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall Pickify or its suppliers be liable for any
                  damages (including, without limitation, damages for loss of
                  data or profit, or due to business interruption) arising out
                  of the use or inability to use the materials on Pickify's
                  website, even if Pickify or an authorized representative has
                  been notified orally or in writing of the possibility of such
                  damage.
                </p>
              </div>

              <div>
                <h2
                  style={{ color: "#0b464f" }}
                  className="text-2xl font-bold mb-4"
                >
                  5. Accuracy of Materials
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The materials appearing on Pickify's website could include
                  technical, typographical, or photographic errors. Pickify does
                  not warrant that any of the materials on its website are
                  accurate, complete, or current. Pickify may make changes to
                  the materials contained on its website at any time without
                  notice.
                </p>
              </div>

              <div>
                <h2
                  style={{ color: "#0b464f" }}
                  className="text-2xl font-bold mb-4"
                >
                  6. Links
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Pickify has not reviewed all of the sites linked to its
                  website and is not responsible for the contents of any such
                  linked site. The inclusion of any link does not imply
                  endorsement by Pickify of the site. Use of any such linked
                  website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2
                  style={{ color: "#0b464f" }}
                  className="text-2xl font-bold mb-4"
                >
                  7. Modifications
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Pickify may revise these terms of service for its website at
                  any time without notice. By using this website, you are
                  agreeing to be bound by the then current version of these
                  terms of service.
                </p>
              </div>

              <div>
                <h2
                  style={{ color: "#0b464f" }}
                  className="text-2xl font-bold mb-4"
                >
                  8. Governing Law
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These terms and conditions are governed by and construed in
                  accordance with the laws of Pakistan, and you irrevocably
                  submit to the exclusive jurisdiction of the courts located in
                  Karachi, Pakistan.
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
