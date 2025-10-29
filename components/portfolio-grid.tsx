"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Portfolio item data structure.
 * @internal
 */
interface PortfolioItem {
  /** Unique item ID */
  id: number;
  /** Project title */
  title: string;
  /** Project category */
  category: string;
  /** Project image URL */
  image: string;
  /** Project description */
  description: string;
  /** Performance metrics */
  metrics: {
    /** Conversion rate increase */
    conversion: string;
    /** Average order value increase */
    aov: string;
  };
}

/**
 * Portfolio projects data.
 * @internal
 */
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Dryon Body Care",
    category: "Design",
    image: "/portfolio/dryon-co.png",
    description: "Premium sweatproof body spray brand with modern dark-themed e-commerce",
    metrics: { conversion: "+340%", aov: "+125%" },
  },
  {
    id: 2,
    title: "RevelryStyle Eyewear",
    category: "Development",
    image: "/portfolio/revelry-style.png",
    description: "Designer-inspired sunglasses store with custom product filtering",
    metrics: { conversion: "+285%", aov: "+95%" },
  },
  {
    id: 3,
    title: "Bilaario Cosmetics",
    category: "Optimization",
    image: "/portfolio/bilaario-cosmetics.png",
    description: "Multi-brand beauty retailer featuring The Ordinary, CeraVe, and premium skincare",
    metrics: { conversion: "+420%", aov: "+180%" },
  },
  {
    id: 4,
    title: "Essencia Perfumery",
    category: "Design",
    image: "/portfolio/essencia.png",
    description: "Luxury fragrance boutique with designer-inspired scents for men and women",
    metrics: { conversion: "+215%", aov: "+110%" },
  },
  {
    id: 5,
    title: "Chuzoify",
    category: "Development",
    image: "/portfolio/chuzoify.png",
    description: "Multi-category lifestyle store for fashion, home & kitchen, and tech accessories",
    metrics: { conversion: "+310%", aov: "+200%" },
  },
];

/**
 * Available portfolio filter categories.
 * @internal
 */
const categories = ["All", "Design", "Development", "Optimization"];

/**
 * Portfolio grid component with filtering.
 *
 * Features:
 * - Category filter buttons
 * - Animated grid layout
 * - Project cards with hover overlays
 * - Performance metrics display
 * - Smooth transitions when filtering
 *
 * @component
 * @example
 * ```tsx
 * <PortfolioGrid />
 * ```
 */
export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-10 md:mb-12 px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 sm:px-6 py-2 min-h-10 sm:min-h-12 rounded-lg text-sm sm:text-base font-semibold smooth-transition ${
              activeCategory === category
                ? "text-white shadow-md"
                : "border-2 hover:shadow-md"
            }`}
            style={
              activeCategory === category
                ? { backgroundColor: "#ab2645" }
                : { borderColor: "#0b464f", color: "#0b464f" }
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Portfolio Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="group cursor-pointer rounded-xl overflow-hidden smooth-transition hover:shadow-xl border border-gray-100 bg-white shadow-md"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gray-50">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover smooth-transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 smooth-transition flex flex-col justify-end p-4 sm:p-5 md:p-6">
                  <p
                    className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2"
                    style={{ color: "#ab2645" }}
                  >
                    {item.category}
                  </p>
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4">
                    {item.description}
                  </p>
                  <div className="flex gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <p className="font-semibold" style={{ color: "#ab2645" }}>
                        {item.metrics.conversion}
                      </p>
                      <p className="text-white/60">Conversion</p>
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: "#ab2645" }}>
                        {item.metrics.aov}
                      </p>
                      <p className="text-white/60">AOV Increase</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-5 md:p-6 bg-white">
                <p
                  className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 tracking-wide"
                  style={{ color: "#ab2645" }}
                >
                  {item.category}
                </p>
                <h3
                  className="text-base sm:text-lg font-bold"
                  style={{ color: "#0b464f" }}
                >
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
