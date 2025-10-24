import { GradientAccent } from "@/components/gradient-accent"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <GradientAccent />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance-custom">
            Let's Work{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #E34D78, #FF6F91)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Together
            </span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Ready to transform your Shopify store? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-balance-custom">Frequently Asked Questions</h2>
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
                className="p-6 bg-white rounded-lg border border-border smooth-transition hover:border-primary"
              >
                <h3 className="text-lg font-bold mb-3 text-foreground">{item.q}</h3>
                <p className="text-foreground/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
