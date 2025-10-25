"use client";

import { Palette, Code, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Palette,
    title: "Store Design",
    description:
      "Custom, conversion-focused Shopify store designs that reflect your brand",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Expert Liquid coding and custom app integration for unique functionality",
  },
  {
    icon: TrendingUp,
    title: "Optimization",
    description:
      "Data-driven improvements to boost conversion rates and average order value",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Lightning-fast load times and mobile optimization for better rankings",
  },
];

export function ServicesPreview() {
  return (
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance-custom px-2"
            style={{ color: "#0b464f" }}
          >
            Our Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Complete Shopify solutions from design to optimization
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className="p-5 sm:p-6 rounded-xl bg-white border border-gray-100 smooth-transition hover:shadow-xl hover:border-gray-200 shadow-md"
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 shadow-sm"
                  style={{ backgroundColor: isEven ? "#ab2645" : "#0b464f" }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={24} className="text-white" />
                </motion.div>
                <h3
                  className="text-base sm:text-lg font-bold mb-2"
                  style={{ color: "#0b464f" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
