import { GradientAccent } from "@/components/gradient-accent"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { CTASection } from "@/components/cta-section"

export default function PortfolioPage() {
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
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Explore the Shopify stores we've transformed into high-performing revenue machines
          </p>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
