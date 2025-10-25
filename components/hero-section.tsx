import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-20 sm:pb-0"
      style={{
        background:
          "linear-gradient(180deg, rgba(171, 38, 69, 0.02) 0%, rgba(255, 255, 255, 1) 100%)",
      }}
    >
      {/* Minimal decorative elements - very subtle */}
      <div
        className="absolute top-[15%] right-[8%] w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-full blur-3xl opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #ab2645 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[15%] left-[8%] w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-full blur-3xl opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #0b464f 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[20%] left-[10%] w-40 h-40 sm:w-60 sm:h-60 rounded-full blur-3xl opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #ab2645 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[20%] right-[10%] w-40 h-40 sm:w-60 sm:h-60 rounded-full blur-3xl opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #0b464f 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small badge - minimal, professional */}
          <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-gray-200 bg-gray-50/50">
            <Sparkles size={14} style={{ color: "#ab2645" }} />
            <span className="text-[10px] sm:text-xs font-medium tracking-wide text-gray-700">
              PREMIUM SHOPIFY SOLUTIONS
            </span>
          </div>

          {/* Main headline - clean, bold, dark */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.1] tracking-tight px-2">
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
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
            Expert Shopify design and development that transforms your online
            store into a revenue-generating machine. Beautiful design meets
            high-performance code.
          </p>

          {/* CTA Buttons - clean, professional - mobile first */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-12 sm:mb-16 px-3 sm:px-4">
            <button
              className="group w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 min-h-[48px] text-sm sm:text-base text-white rounded-lg font-semibold smooth-transition hover:opacity-90 flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-95"
              style={{ backgroundColor: "#ab2645" }}
            >
              <span>Get Started</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
            <button
              className="w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 min-h-[48px] text-sm sm:text-base border-2 rounded-lg font-semibold smooth-transition hover:shadow-md flex items-center justify-center gap-2 active:scale-95"
              style={{
                borderColor: "#0b464f",
                color: "#0b464f",
              }}
            >
              View Our Work
            </button>
          </div>

          {/* Stats - clean cards with subtle styling */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
            {[
              { number: "150+", label: "Stores Launched", color: "#ab2645" },
              { number: "$50M+", label: "Revenue Generated", color: "#0b464f" },
              { number: "98%", label: "Client Satisfaction", color: "#ab2645" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 rounded-xl smooth-transition"
              >
                <div
                  className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide">
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
