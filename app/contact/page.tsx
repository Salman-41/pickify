import { ContactForm } from "@/components/contact-form";
import { Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50/50">
            <Sparkles size={14} style={{ color: "#ab2645" }} />
            <span className="text-xs font-medium tracking-wide text-gray-700">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
            <span style={{ color: "#0b464f" }}>Let's Work</span>{" "}
            <span style={{ color: "#ab2645" }}>Together</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your Shopify store? Get in touch with our team
            today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(11, 70, 79, 0.015) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(11, 70, 79, 0.015) 0%, rgba(171, 38, 69, 0.015) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4 text-balance-custom"
              style={{ color: "#0b464f" }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What's your typical project timeline?",
                a: "Most projects take 4-8 weeks depending on scope. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                q: "Do you work with existing Shopify stores?",
                a: "Yes! We work with stores at any stage—from brand new to established. We can redesign, optimize, or develop new features.",
              },
              {
                q: "What's included in your services?",
                a: "Each service is customizable, but typically includes design, development, testing, and ongoing support. We'll create a custom package for your needs.",
              },
              {
                q: "How do you measure success?",
                a: "We track conversion rates, average order value, page load times, and other KPIs. You'll receive monthly reports on your progress.",
              },
              {
                q: "What if I'm not happy with the work?",
                a: "We offer unlimited revisions until you're satisfied. Your success is our success, and we won't stop until you're happy.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes! We offer maintenance and support packages to keep your store running smoothly and continuously optimized.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-100 smooth-transition hover:shadow-xl shadow-md"
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "#0b464f" }}
                >
                  {item.q}
                </h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
