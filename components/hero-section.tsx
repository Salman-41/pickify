import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Minimal decorative elements - very subtle */}
      <div
        className="absolute top-[15%] right-[8%] w-[280px] h-[280px] rounded-full blur-3xl opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #E34D78 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[20%] left-[10%] w-[240px] h-[240px] rounded-full blur-3xl opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #00B7A1 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small badge - minimal, professional */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50/50">
            <Sparkles size={14} style={{ color: "#ab2645" }} />
            <span className="text-xs font-medium tracking-wide text-gray-700">
              PREMIUM SHOPIFY SOLUTIONS
            </span>
          </div>

          {/* Main headline - clean, bold, dark */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
            <span style={{ color: "#0b464f" }}>
              We Design & Build Shopify Stores That
            </span>{" "}
            <span
              className="relative inline-block font-bold"
              style={{ color: "#ab2645" }}
            >
              Convert
            </span>
          </h1>

          {/* Subheading - simple gray text */}
          <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Expert Shopify design and development that transforms your online
            store into a revenue-generating machine. Beautiful design meets
            high-performance code.
          </p>

          {/* CTA Buttons - clean, professional */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              className="group px-8 py-4 text-white rounded-lg font-semibold smooth-transition hover:opacity-90 flex items-center gap-2 shadow-sm hover:shadow-md"
              style={{ backgroundColor: "#0b464f" }}
            >
              <span>Start Your Project</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
            <button className="px-8 py-4 border-2 border-gray-200 text-gray-900 rounded-lg font-semibold smooth-transition hover:border-gray-300 hover:bg-gray-50">
              View Our Work
            </button>
          </div>

          {/* Stats - clean cards with subtle styling */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { number: "150+", label: "Stores Launched", color: "#ab2645" },
              { number: "$50M+", label: "Revenue Generated", color: "#0b464f" },
              { number: "98%", label: "Client Satisfaction", color: "#ab2645" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-100 bg-white smooth-transition hover:border-gray-200 hover:shadow-sm"
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
