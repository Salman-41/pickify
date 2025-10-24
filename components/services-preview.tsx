import { Palette, Code, TrendingUp, Zap } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Store Design",
    description: "Custom, conversion-focused Shopify store designs that reflect your brand",
  },
  {
    icon: Code,
    title: "Development",
    description: "Expert Liquid coding and custom app integration for unique functionality",
  },
  {
    icon: TrendingUp,
    title: "Optimization",
    description: "Data-driven improvements to boost conversion rates and average order value",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast load times and mobile optimization for better rankings",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance-custom">Our Services</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Complete Shopify solutions from design to optimization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-6 rounded-2xl glass-card smooth-transition hover:shadow-xl hover-glow"
                style={{ borderColor: "rgba(227, 77, 120, 0.5)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  style={{ background: "linear-gradient(to right, #E34D78, #FF6F91)" }}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
