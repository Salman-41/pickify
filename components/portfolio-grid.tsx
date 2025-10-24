"use client"

import { useState } from "react"

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
]

const categories = ["All", "Design", "Development", "Optimization"]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-medium smooth-transition ${
              activeCategory === category ? "text-white" : "border border-border text-foreground hover:border-primary"
            }`}
            style={
              activeCategory === category ? { background: "linear-gradient(to right, #E34D78, #FF6F91)" } : undefined
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer rounded-xl overflow-hidden smooth-transition hover:shadow-xl"
          >
            <div className="relative h-80 overflow-hidden bg-foreground/5">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover smooth-transition group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 smooth-transition flex flex-col justify-end p-6">
                <p className="text-primary font-semibold mb-2">{item.category}</p>
                <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm mb-4">{item.description}</p>
                <div className="flex gap-4 text-sm">
                  <div>
                    <p className="text-primary font-semibold">{item.metrics.conversion}</p>
                    <p className="text-white/60">Conversion</p>
                  </div>
                  <div>
                    <p className="text-primary font-semibold">{item.metrics.aov}</p>
                    <p className="text-white/60">AOV Increase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white">
              <p className="text-sm text-primary font-medium mb-2">{item.category}</p>
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
