import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance-custom">Ready to Transform Your Store?</h2>
        <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto">
          Let's discuss your Shopify goals and create a custom plan to boost your revenue
        </p>

        <button
          className="px-8 py-4 text-white rounded-lg font-semibold smooth-transition hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 mx-auto"
          style={{
            background: "linear-gradient(to right, #E34D78, #FF6F91)",
            boxShadow: "0 0 20px rgba(227, 77, 120, 0.3)",
          }}
        >
          Schedule a Free Consultation <ArrowRight size={20} />
        </button>
      </div>
    </section>
  )
}
