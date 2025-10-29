"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Project data for featured work showcase.
 * @internal
 */
const projects = [
  {
    id: 1,
    title: "Dryon Body Care",
    category: "Premium Grooming Products",
    image: "/portfolio/dryon-co.png",
    increase: "340%",
  },
  {
    id: 2,
    title: "RevelryStyle Eyewear",
    category: "Designer Sunglasses Store",
    image: "/portfolio/revelry-style.png",
    increase: "285%",
  },
  {
    id: 3,
    title: "Bilaario Cosmetics",
    category: "Beauty & Skincare E-commerce",
    image: "/portfolio/bilaario-cosmetics.png",
    increase: "420%",
  },
];

/**
 * Featured work section showcasing portfolio projects.
 *
 * Features:
 * - Grid layout of project cards
 * - Hover effects revealing conversion metrics
 * - Animated card-by-card entrance
 * - Category labels and project titles
 * - "View All Projects" call-to-action button
 *
 * @component
 * @example
 * ```tsx
 * <FeaturedWork />
 * ```
 */
export function FeaturedWork() {
  return (
    <section
      className="py-12 sm:py-16 md:py-20"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(11, 70, 79, 0.015) 100%)",
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
            Featured Work
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            See how we've transformed Shopify stores into high-performing sales
            machines
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer rounded-xl overflow-hidden smooth-transition hover:shadow-xl border border-gray-100 hover:border-gray-200 bg-white shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px", amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-50">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover smooth-transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 smooth-transition flex items-end p-4 sm:p-6">
                  <div className="text-white">
                    <p
                      className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2"
                      style={{ color: "#ab2645" }}
                    >
                      +{project.increase} Conversion
                    </p>
                    <p className="text-sm sm:text-base font-semibold flex items-center gap-1">
                      View Case Study <ArrowRight size={16} />
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-white">
                <p
                  className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 tracking-wide"
                  style={{ color: "#ab2645" }}
                >
                  {project.category}
                </p>
                <h3
                  className="text-lg sm:text-xl font-bold"
                  style={{ color: "#0b464f" }}
                >
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8 sm:mt-10 md:mt-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.button
            className="w-full sm:w-auto min-h-12 px-6 sm:px-8 py-4 text-white rounded-lg font-semibold smooth-transition hover:opacity-90 flex items-center justify-center gap-2 mx-auto shadow-sm hover:shadow-md"
            style={{ backgroundColor: "#ab2645" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
