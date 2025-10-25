import { PortfolioGrid } from "@/components/portfolio-grid";
import { CTASection } from "@/components/cta-section";
import { Sparkles } from "lucide-react";

/**
 * Portfolio page component.
 *
 * Displays:
 * - Hero section with page title
 * - Filterable portfolio grid
 * - Call-to-action section
 *
 * @page
 */
export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section - Combined with Filter Buttons */}
      <section
        className="relative py-12 sm:py-16 md:py-20 pt-24 sm:pt-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(171, 38, 69, 0.02) 0%, rgba(255, 255, 255, 1) 100%)",
        }}
      >
        {/* Decorative gradient orbs */}
        <div
          className="absolute top-[10%] right-[8%] w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-full blur-3xl opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #ab2645 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[10%] left-[8%] w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-full blur-3xl opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #0b464f 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-gray-200 bg-gray-50/50">
              <Sparkles size={14} style={{ color: "#ab2645" }} />
              <span className="text-[10px] sm:text-xs font-medium tracking-wide text-gray-700">
                OUR WORK
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.1] tracking-tight px-2">
              <span style={{ color: "#0b464f" }}>Our</span>{" "}
              <span style={{ color: "#ab2645" }}>Portfolio</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 md:mb-12 px-4">
              Explore the Shopify stores we've transformed into high-performing
              revenue machines
            </p>
          </div>

          <PortfolioGrid />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
