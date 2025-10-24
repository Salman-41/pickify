import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  price,
}: ServiceCardProps) {
  return (
    <div className="group p-8 rounded-xl border border-gray-100 smooth-transition hover:shadow-xl bg-white shadow-md">
      <div
        className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition shadow-sm"
        style={{ backgroundColor: "#ab2645" }}
      >
        <Icon size={28} className="text-white" />
      </div>

      <h3 className="text-2xl font-bold mb-3" style={{ color: "#0b464f" }}>
        {title}
      </h3>
      <p className="text-gray-600 mb-6">{description}</p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ backgroundColor: "rgba(171, 38, 69, 0.2)" }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#ab2645" }}
              />
            </div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {price && (
        <div className="text-2xl font-bold mb-6" style={{ color: "#ab2645" }}>
          {price}
        </div>
      )}

      <button
        className="w-full px-6 py-3 border-2 rounded-lg font-semibold smooth-transition hover:shadow-md"
        style={{
          borderColor: "#0b464f",
          color: "#0b464f",
        }}
      >
        Learn More
      </button>
    </div>
  );
}
