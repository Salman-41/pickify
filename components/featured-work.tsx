import { ArrowRight } from "lucide-react";

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
];

export function FeaturedWork() {
  return (
    <section
      className="py-20"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(11, 70, 79, 0.015) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-balance-custom"
            style={{ color: "#0b464f" }}
          >
            Featured Work
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See how we've transformed Shopify stores into high-performing sales
            machines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer rounded-xl overflow-hidden smooth-transition hover:shadow-xl border border-gray-100 hover:border-gray-200 bg-white shadow-md"
            >
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover smooth-transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 smooth-transition flex items-end p-6">
                  <div className="text-white">
                    <p
                      className="text-sm font-semibold mb-2"
                      style={{ color: "#ab2645" }}
                    >
                      +{project.increase} Conversion
                    </p>
                    <p className="font-semibold flex items-center gap-1">
                      View Case Study <ArrowRight size={16} />
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p
                  className="text-sm font-medium mb-2 tracking-wide"
                  style={{ color: "#ab2645" }}
                >
                  {project.category}
                </p>
                <h3 className="text-xl font-bold" style={{ color: "#0b464f" }}>
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="px-8 py-4 text-white rounded-lg font-semibold smooth-transition hover:opacity-90 flex items-center justify-center gap-2 mx-auto shadow-sm hover:shadow-md"
            style={{ backgroundColor: "#ab2645" }}
          >
            View All Projects <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
