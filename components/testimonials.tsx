"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, Luxe Essentials",
    content:
      "Pickify completely transformed our store. Within 3 months, our conversion rate increased by 340%. They truly understand e-commerce.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "CEO, Tech Gear Co",
    content:
      "The team's attention to detail and understanding of conversion optimization is unmatched. Best investment we made for our business.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Owner, Sustainable Beauty",
    content:
      "Professional, responsive, and results-driven. They delivered exactly what we needed and more. Highly recommend!",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 sm:p-8 rounded-xl bg-gray-50 border border-gray-100 smooth-transition hover:shadow-xl hover:border-gray-200 shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
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
        </motion.div>
      </div>
    </section>
  );
}
