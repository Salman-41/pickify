import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Luxury Fashion Brand",
    category: "E-commerce Design",
    image: "/placeholder.svg?height=400&width=600",
    increase: "340%",
  },
  {
    id: 2,
    title: "Sustainable Beauty",
    category: "Full Store Redesign",
    image: "/placeholder.svg?height=400&width=600",
    increase: "280%",
  },
  {
    id: 3,
    title: "Tech Accessories",
    category: "Conversion Optimization",
    image: "/placeholder.svg?height=400&width=600",
    increase: "420%",
  },
]

export function FeaturedWork() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance-custom">Featured Work</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            See how we've transformed Shopify stores into high-performing sales machines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer rounded-2xl overflow-hidden smooth-transition hover:shadow-2xl hover-glow"
              style={{
                border: "2px solid transparent",
                backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, #E34D78, #FF6F91)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
              <div className="relative h-64 overflow-hidden bg-foreground/5">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover smooth-transition group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 smooth-transition flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm font-medium mb-2" style={{ color: "#FF6F91" }}>
                      +{project.increase} Conversion
                    </p>
                    <p className="font-semibold">View Case Study</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-sm font-medium mb-2" style={{ color: "#E34D78" }}>
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="px-8 py-3 border-2 text-white rounded-lg font-semibold smooth-transition flex items-center justify-center gap-2 mx-auto hover:shadow-lg"
            style={{
              background: "linear-gradient(to right, #E34D78, #FF6F91)",
              borderColor: "#E34D78",
            }}
          >
            View All Projects <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
