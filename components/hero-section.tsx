import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "linear-gradient(to bottom right, #E34D78, #FF6F91, #007C83)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "linear-gradient(to bottom right, rgba(227, 77, 120, 0.2), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "linear-gradient(to top right, rgba(0, 124, 131, 0.2), transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-block">
          <span
            className="px-4 py-2 text-primary rounded-full text-sm font-medium"
            style={{ backgroundColor: "rgba(227, 77, 120, 0.1)" }}
          >
            Premium Shopify Solutions
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance-custom">
          We Build Shopify Stores{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(to right, #E34D78, #FF6F91)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            That Sell
          </span>
        </h1>

        <p className="text-xl text-foreground/60 mb-8 max-w-2xl mx-auto text-balance-custom">
          Expert design and development services that turn your Shopify store into a high-converting sales powerhouse.
          We combine stunning aesthetics with proven conversion strategies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            className="px-8 py-4 text-white rounded-lg font-semibold smooth-transition hover:scale-105 flex items-center justify-center gap-2"
            style={{
              background: "linear-gradient(to right, #E34D78, #FF6F91)",
              boxShadow: "0 0 30px rgba(227, 77, 120, 0.4)",
            }}
          >
            Get a Free Quote <ArrowRight size={20} />
          </button>
          <button
            className="px-8 py-4 border-2 rounded-lg font-semibold smooth-transition"
            style={{ borderColor: "#E34D78", color: "#E34D78", backgroundColor: "rgba(227, 77, 120, 0.05)" }}
          >
            View Portfolio
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
          <div>
            <div
              className="text-3xl font-bold mb-2"
              style={{
                backgroundImage: "linear-gradient(to right, #E34D78, #FF6F91)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              150+
            </div>
            <p className="text-sm text-foreground/60">Stores Transformed</p>
          </div>
          <div>
            <div
              className="text-3xl font-bold mb-2"
              style={{
                backgroundImage: "linear-gradient(to right, #E34D78, #FF6F91)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              $50M+
            </div>
            <p className="text-sm text-foreground/60">Revenue Generated</p>
          </div>
          <div>
            <div
              className="text-3xl font-bold mb-2"
              style={{
                backgroundImage: "linear-gradient(to right, #E34D78, #FF6F91)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              98%
            </div>
            <p className="text-sm text-foreground/60">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
