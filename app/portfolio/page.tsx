import { PortfolioGrid } from "@/components/portfolio-grid";
import { CTASection } from "@/components/cta-section";
import { Sparkles } from "lucide-react";

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section - Combined with Filter Buttons */}
      <section
        className="relative py-20 pt-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(171, 38, 69, 0.02) 0%, rgba(255, 255, 255, 1) 100%)",
        }}
      >
        {/* Decorative gradient orbs */}
        <div
          className="absolute top-[10%] right-[8%] w-[280px] h-[280px] rounded-full blur-3xl opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #ab2645 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[10%] left-[8%] w-[280px] h-[280px] rounded-full blur-3xl opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #0b464f 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50/50">
              <Sparkles size={14} style={{ color: "#ab2645" }} />
              <span className="text-xs font-medium tracking-wide text-gray-700">
                OUR WORK
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              <span style={{ color: "#0b464f" }}>Our</span>{" "}
              <span style={{ color: "#ab2645" }}>Portfolio</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
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
