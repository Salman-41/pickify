import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  price?: string
}

export function ServiceCard({ icon: Icon, title, description, features, price }: ServiceCardProps) {
  return (
    <div className="group p-8 rounded-xl border border-border smooth-transition hover:border-primary hover:shadow-xl hover:bg-primary/5">
      <div
        className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition"
        style={{ background: "linear-gradient(to right, #E34D78, #FF6F91)" }}
      >
        <Icon size={28} className="text-white" />
      </div>

      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-foreground/60 mb-6">{description}</p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <span className="text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>

      {price && <div className="text-2xl font-bold text-primary mb-6">{price}</div>}

      <button className="w-full px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold smooth-transition hover:bg-primary hover:text-white">
        Learn More
      </button>
    </div>
  )
}
