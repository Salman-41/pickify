import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";
import {
  Palette,
  Code,
  TrendingUp,
  Zap,
  ShoppingCart,
  BarChart3,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Store Design",
    description:
      "Custom Shopify store designs that convert visitors into customers",
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
    description:
      "Data-driven strategies to increase sales and customer lifetime value",
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
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-gray-200 bg-gray-50/50">
            <Sparkles size={14} style={{ color: "#ab2645" }} />
            <span className="text-[10px] sm:text-xs font-medium tracking-wide text-gray-700">
              OUR SERVICES
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.1] tracking-tight px-2">
            <span style={{ color: "#0b464f" }}>Our</span>{" "}
            <span style={{ color: "#ab2645" }}>Services</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Complete Shopify solutions designed to transform your store and
            maximize revenue
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="py-12 sm:py-16 md:py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(11, 70, 79, 0.015) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="py-12 sm:py-16 md:py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(11, 70, 79, 0.015) 0%, rgba(171, 38, 69, 0.015) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance-custom px-2"
              style={{ color: "#0b464f" }}
            >
              Our Process
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              How we transform your Shopify store into a revenue machine
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We analyze your store, goals, and target audience",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Create a custom roadmap for success",
              },
              {
                step: "03",
                title: "Execution",
                description: "Build and optimize your store",
              },
              {
                step: "04",
                title: "Growth",
                description: "Monitor, test, and continuously improve",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative p-5 sm:p-6 rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-xl smooth-transition"
              >
                <div
                  className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4"
                  style={{ color: "rgba(171, 38, 69, 0.2)" }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-lg sm:text-xl font-bold mb-2"
                  style={{ color: "#0b464f" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.description}
                </p>
                {index < 3 && (
                  <div
                    className="hidden lg:block absolute top-8 -right-4 text-2xl"
                    style={{ color: "rgba(171, 38, 69, 0.3)" }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
