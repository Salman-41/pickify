import { GradientAccent } from "@/components/gradient-accent"
import { ServiceCard } from "@/components/service-card"
import { CTASection } from "@/components/cta-section"
import { Palette, Code, TrendingUp, Zap, ShoppingCart, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Store Design",
    description: "Custom Shopify store designs that convert visitors into customers",
    features: [
      "Custom homepage design",
      "Product page optimization",
      "Mobile-first responsive design",
      "Brand-aligned aesthetics",
      "User experience optimization",
      "Unlimited revisions",
    ],
  },
  {
    icon: Code,
    title: "Development",
    description: "Expert Liquid coding and custom functionality for your store",
    features: [
      "Custom Liquid development",
      "App integration & setup",
      "Custom checkout flows",
      "API integrations",
      "Performance optimization",
      "Ongoing support",
    ],
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description: "Data-driven strategies to increase sales and customer lifetime value",
    features: [
      "Conversion rate analysis",
      "A/B testing setup",
      "Checkout optimization",
      "Product page testing",
      "Email integration",
      "Analytics setup",
    ],
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast load times and SEO optimization",
    features: [
      "Page speed optimization",
      "Image optimization",
      "Code minification",
      "CDN setup",
      "SEO optimization",
      "Mobile performance",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Strategy",
    description: "Complete strategy for scaling your Shopify business",
    features: [
      "Market analysis",
      "Competitor research",
      "Product strategy",
      "Pricing optimization",
      "Marketing integration",
      "Growth roadmap",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive analytics and monthly performance reports",
    features: [
      "Google Analytics setup",
      "Custom dashboards",
      "Monthly reports",
      "Performance tracking",
      "Conversion tracking",
      "ROI analysis",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <GradientAccent />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance-custom">
            Our{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #E34D78, #FF6F91)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Services
            </span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Complete Shopify solutions designed to transform your store and maximize revenue
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance-custom">Our Process</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              How we transform your Shopify store into a revenue machine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your store, goals, and target audience" },
              { step: "02", title: "Strategy", description: "Create a custom roadmap for success" },
              { step: "03", title: "Execution", description: "Build and optimize your store" },
              { step: "04", title: "Growth", description: "Monitor, test, and continuously improve" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/60">{item.description}</p>
                {index < 3 && <div className="hidden md:block absolute top-8 -right-4 text-primary/30 text-2xl">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
