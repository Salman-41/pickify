"use client";

import { CTASection } from "@/components/cta-section";
import { Award, Users, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

/**
 * About page component.
 * 
 * Displays:
 * - Hero section with page title
 * - Company story section with highlighted metrics
 * - Core values cards
 * - Team member profiles
 * - Statistics section
 * - Call-to-action section
 * 
 * @page
 */
export default function AboutPage() {
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
              ABOUT US
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.1] tracking-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span style={{ color: "#0b464f" }}>About</span>{" "}
            <span style={{ color: "#ab2645" }}>Pickify</span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            We're passionate about helping Shopify store owners build thriving,
            profitable businesses
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section
        className="py-12 sm:py-16 md:py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(11, 70, 79, 0.015) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px", amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h2
                className="text-section-title mb-4 sm:mb-8 text-balance-custom"
                style={{ color: "#0b464f" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                Our Story
              </motion.h2>

              <div className="space-y-4 sm:space-y-6">
                <motion.p
                  className="text-body"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  Pickify was founded by a team of e-commerce experts who saw a
                  gap in the market. Too many Shopify store owners were
                  struggling with design, development, and optimization—leaving
                  money on the table.
                </motion.p>

                <motion.p
                  className="text-body"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  We decided to change that. We built Pickify to be the partner
                  that Shopify store owners could trust to transform their
                  stores into{" "}
                  <span style={{ color: "#ab2645", fontWeight: "600" }}>
                    high-performing revenue machines
                  </span>
                  .
                </motion.p>

                <motion.p
                  className="text-body"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  Today, we've helped over{" "}
                  <span style={{ color: "#ab2645", fontWeight: "700" }}>
                    150 stores
                  </span>{" "}
                  generate more than{" "}
                  <span style={{ color: "#ab2645", fontWeight: "700" }}>
                    $50 million in revenue
                  </span>
                  . And we're just getting started.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2 relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-md hover:shadow-xl smooth-transition group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px", amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Pickify team"
                className="w-full h-full object-cover smooth-transition group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        className="py-12 sm:py-16 md:py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(11, 70, 79, 0.015) 0%, rgba(171, 38, 69, 0.015) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="text-section-title mb-3 sm:mb-4 text-balance-custom px-2"
              style={{ color: "#0b464f" }}
            >
              Our Values
            </h2>
            <p className="text-body lead max-w-2xl mx-auto px-4">
              The principles that guide everything we do
            </p>
          </motion.div>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We never settle for mediocre. Every project is an opportunity to deliver exceptional results.",
              },
              {
                icon: Users,
                title: "Partnership",
                description:
                  "Your success is our success. We're invested in your growth and committed to your goals.",
              },
              {
                icon: Zap,
                title: "Innovation",
                description:
                  "We stay ahead of trends and constantly explore new ways to drive results for our clients.",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="p-5 sm:p-6 md:p-8 bg-white rounded-xl smooth-transition hover:shadow-xl border border-gray-100 shadow-md active:scale-[0.98]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 shadow-sm"
                    style={{ backgroundColor: "#ab2645" }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3
                    className="text-card-title mb-2 sm:mb-3"
                    style={{ color: "#0b464f" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-body-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="py-12 sm:py-16 md:py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(171, 38, 69, 0.015) 0%, rgba(11, 70, 79, 0.02) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="text-section-title mb-3 sm:mb-4 text-balance-custom px-2"
              style={{ color: "#0b464f" }}
            >
              Meet the Team
            </h2>
            <p className="text-body lead max-w-2xl mx-auto px-4">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Founder & Creative Director",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Jordan Smith",
                role: "Lead Developer",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Casey Rodriguez",
                role: "Conversion Specialist",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="mb-3 sm:mb-4 rounded-xl overflow-hidden h-56 sm:h-64 shadow-md hover:shadow-xl smooth-transition">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover smooth-transition group-hover:scale-105"
                  />
                </div>
                <h3
                  className="text-card-title mb-1"
                  style={{ color: "#0b464f" }}
                >
                  {member.name}
                </h3>
                <p className="text-body-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-12 sm:py-16 md:py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(11, 70, 79, 0.02) 0%, rgba(171, 38, 69, 0.015) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { number: "150+", label: "Stores Transformed" },
              { number: "$50M+", label: "Revenue Generated" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2"
                  style={{ color: "#ab2645" }}
                >
                  {stat.number}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
