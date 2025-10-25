"use client";

import { ContactForm } from "@/components/contact-form";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
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
        {/* Decorative gradient orbs */}
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
              GET IN TOUCH
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.1] tracking-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span style={{ color: "#0b464f" }}>Let's Work</span>{" "}
            <span style={{ color: "#ab2645" }}>Together</span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Ready to transform your Shopify store? Get in touch with our team
            today.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-12 sm:py-16 md:py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(11, 70, 79, 0.015) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-12 sm:py-16 md:py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(11, 70, 79, 0.015) 0%, rgba(171, 38, 69, 0.015) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-balance-custom px-2"
              style={{ color: "#0b464f" }}
            >
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                q: "What's your typical project timeline?",
                a: "Most projects take 4-8 weeks depending on scope. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                q: "Do you work with existing Shopify stores?",
                a: "Yes! We work with stores at any stage—from brand new to established. We can redesign, optimize, or develop new features.",
              },
              {
                q: "What's included in your services?",
                a: "Each service is customizable, but typically includes design, development, testing, and ongoing support. We'll create a custom package for your needs.",
              },
              {
                q: "How do you measure success?",
                a: "We track conversion rates, average order value, page load times, and other KPIs. You'll receive monthly reports on your progress.",
              },
              {
                q: "What if I'm not happy with the work?",
                a: "We offer unlimited revisions until you're satisfied. Your success is our success, and we won't stop until you're happy.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes! We offer maintenance and support packages to keep your store running smoothly and continuously optimized.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-4 sm:p-5 md:p-6 bg-white rounded-lg border border-gray-100 smooth-transition hover:shadow-xl shadow-md"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px", amount: 0.4 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <h3
                  className="text-base sm:text-lg font-bold mb-2 sm:mb-3"
                  style={{ color: "#0b464f" }}
                >
                  {item.q}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
