"use client";

import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Luxury Fashion Brand",
    category: "Design",
    image: "/placeholder.svg?height=500&width=600",
    description: "Complete store redesign with custom product pages",
    metrics: { conversion: "+340%", aov: "+125%" },
  },
  {
    id: 2,
    title: "Sustainable Beauty",
    category: "Development",
    image: "/placeholder.svg?height=500&width=600",
    description: "Custom app integration and checkout optimization",
    metrics: { conversion: "+280%", aov: "+95%" },
  },
  {
    id: 3,
    title: "Tech Accessories",
    category: "Optimization",
    image: "/placeholder.svg?height=500&width=600",
    description: "Performance optimization and mobile redesign",
    metrics: { conversion: "+420%", aov: "+180%" },
  },
  {
    id: 4,
    title: "Organic Skincare",
    category: "Design",
    image: "/placeholder.svg?height=500&width=600",
    description: "Brand refresh with modern aesthetic",
    metrics: { conversion: "+215%", aov: "+110%" },
  },
  {
    id: 5,
    title: "Fitness Equipment",
    category: "Development",
    image: "/placeholder.svg?height=500&width=600",
    description: "Custom bundle builder and subscription setup",
    metrics: { conversion: "+310%", aov: "+200%" },
  },
  {
    id: 6,
    title: "Artisan Jewelry",
    category: "Optimization",
    image: "/placeholder.svg?height=500&width=600",
    description: "SEO optimization and content strategy",
    metrics: { conversion: "+185%", aov: "+75%" },
  },
];

const categories = ["All", "Design", "Development", "Optimization"];

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-10 md:mb-12 px-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 sm:px-6 py-2 min-h-10 sm:min-h-12 rounded-lg text-sm sm:text-base font-semibold smooth-transition active:scale-95 ${
              activeCategory === category
                ? "text-white shadow-md"
                : "border-2 hover:shadow-md"
            }`}
            style={
              activeCategory === category
                ? { backgroundColor: "#ab2645" }
                : { borderColor: "#0b464f", color: "#0b464f" }
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer rounded-xl overflow-hidden smooth-transition hover:shadow-xl border border-gray-100 bg-white shadow-md active:scale-[0.98]"
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
          </div>
        ))}
      </div>
    </div>
  );
}
