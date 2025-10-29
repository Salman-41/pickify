"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Testimonial data structure.
 * @internal
 */
interface Testimonial {
  /** Client name */
  name: string;
  /** Client role/position */
  role: string;
  /** Testimonial content */
  content: string;
  /** Star rating (1-5) */
  rating: number;
}

/**
 * Client testimonials data.
 * @internal
 */
const testimonials: Testimonial[] = [
  {
    name: "Faizan Butt",
    role: "Founder, TZ Store",
    content:
      "They truly understood my vision from the start and turned my ideas into a website that perfectly represents my brand. Extremely cooperative and professional — highly recommended for marketing and advertising.",
    rating: 5,
  },
  {
    name: "Humaira Khatoon",
    role: "Founder, Zeeshan Herbal Products",
    content:
      "Their team made promoting my small business effortless. Pickify handled everything with care and creativity, and my brand started growing faster than I expected. Reliable, affordable, and genuinely supportive — couldn't ask for better service.",
    rating: 5,
  },
  {
    name: "Salman Yousufzai",
    role: "Founder, Tolwaz",
    content:
      "They built a beautiful, high-performing website for us at a very reasonable cost. Friendly, responsive, and skilled — the entire process was smooth from start to finish. Absolutely recommended.",
    rating: 5,
  },
];

/**
 * Testimonials section component.
 *
 * Features:
 * - Grid of client testimonial cards
 * - Star ratings display
 * - Animated card entrances on scroll
 * - Hover effects with card lift
 * - Responsive grid layout
 *
 * @component
 * @example
 * ```tsx
 * <Testimonials />
 * ```
 */
export function Testimonials() {
  return (
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance-custom px-2"
            style={{ color: "#0b464f" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Join 150+ successful Shopify store owners who've transformed their
            business with Pickify
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 sm:p-8 rounded-xl bg-gray-50 border border-gray-100 smooth-transition hover:shadow-xl hover:border-gray-200 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px", amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex gap-1 mb-3 sm:mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-current"
                    style={{ color: "#ab2645" }}
                  />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <p
                  className="font-semibold text-sm sm:text-base"
                  style={{ color: "#0b464f" }}
                >
                  {testimonial.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
