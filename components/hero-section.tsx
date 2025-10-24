import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-16 bg-gradient-to-br from-white via-gray-50/30 to-white">
      {/* Animated gradient orbs with glassmorphism */}
      <div
        className="absolute top-10 right-[10%] w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(227, 77, 120, 0.3) 0%, rgba(255, 111, 145, 0.15) 50%, transparent 100%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-10 left-[5%] w-[450px] h-[450px] rounded-full blur-3xl opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 124, 131, 0.3) 0%, rgba(0, 183, 161, 0.15) 50%, transparent 100%)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(227, 77, 120, 0.12), rgba(0, 183, 161, 0.12))",
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #222222 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glassmorphism badge */}
        <div className="mb-6 inline-block">
          <span
            className="px-5 py-2 rounded-full text-xs font-semibold backdrop-blur-xl border tracking-wide uppercase"
            style={{
              background:
                "linear-gradient(135deg, rgba(227, 77, 120, 0.08), rgba(255, 111, 145, 0.12))",
              borderColor: "rgba(227, 77, 120, 0.2)",
              color: "#E34D78",
              boxShadow:
                "0 4px 16px rgba(227, 77, 120, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
            }}
          >
            ✦ Premium Shopify Solutions
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance-custom leading-[1.1]">
          <span style={{ color: "#222222" }}>Transform Your</span>
          <br />
          <span
            className="inline-block mt-1"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #E34D78 0%, #FF6F91 70%, #00B7A1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 2px 8px rgba(227, 77, 120, 0.12))",
            }}
          >
            Shopify Store
          </span>
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto text-balance-custom leading-relaxed"
          style={{ color: "#555555" }}
        >
          Award-winning design meets proven conversion strategies. We craft
          stunning, high-performance Shopify experiences that turn browsers into
          buyers and
          <span
            className="font-semibold"
            style={{
              backgroundImage: "linear-gradient(135deg, #E34D78, #FF6F91)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {" "}
            boost your revenue
          </span>
          .
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            className="group px-8 py-3.5 text-white rounded-xl font-semibold text-sm smooth-transition hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #E34D78 0%, #FF6F91 100%)",
              boxShadow:
                "0 6px 24px rgba(227, 77, 120, 0.25), 0 2px 8px rgba(227, 77, 120, 0.15)",
            }}
          >
            <span className="relative z-10">Get Started Free</span>
            <ArrowRight
              size={18}
              className="relative z-10 group-hover:translate-x-1 transition-transform"
            />
            {/* Shine effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)",
              }}
            />
          </button>
          <button
            className="group px-8 py-3.5 rounded-xl font-semibold text-sm smooth-transition hover:scale-[1.02] active:scale-[0.98] backdrop-blur-xl border-2 relative overflow-hidden"
            style={{
              borderColor: "rgba(227, 77, 120, 0.3)",
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(227, 77, 120, 0.05))",
              color: "#E34D78",
              boxShadow:
                "0 4px 16px rgba(227, 77, 120, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
            }}
          >
            <span className="relative z-10">View Portfolio</span>
          </button>
        </div>

        {/* Stats with glassmorphism cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            {
              number: "150+",
              label: "Stores Transformed",
              gradient: "135deg, #E34D78, #FF6F91",
            },
            {
              number: "$50M+",
              label: "Revenue Generated",
              gradient: "135deg, #007C83, #00B7A1",
            },
            {
              number: "98%",
              label: "Client Satisfaction",
              gradient: "135deg, #E34D78, #FF6F91",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl backdrop-blur-xl border smooth-transition hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(227, 77, 120, 0.04))",
                borderColor: "rgba(227, 77, 120, 0.15)",
                boxShadow:
                  "0 6px 24px rgba(227, 77, 120, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
              }}
            >
              <div
                className="text-3xl md:text-4xl font-black mb-2 group-hover:scale-110 transition-transform"
                style={{
                  backgroundImage: `linear-gradient(${stat.gradient})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.number}
              </div>
              <p
                className="text-xs font-semibold tracking-wide"
                style={{ color: "#555555" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
