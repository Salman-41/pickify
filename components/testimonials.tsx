import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, Luxe Essentials",
    content:
      "Pickify completely transformed our store. Within 3 months, our conversion rate increased by 340%. They truly understand e-commerce.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "CEO, Tech Gear Co",
    content:
      "The team's attention to detail and understanding of conversion optimization is unmatched. Best investment we made for our business.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Owner, Sustainable Beauty",
    content:
      "Professional, responsive, and results-driven. They delivered exactly what we needed and more. Highly recommend!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance-custom">What Our Clients Say</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Join 150+ successful Shopify store owners who've transformed their business with Pickify
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-8 smooth-transition hover:shadow-xl hover-glow">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" style={{ color: "#E34D78" }} />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
