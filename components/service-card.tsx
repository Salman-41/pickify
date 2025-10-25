import type { LucideIcon } from "lucide-react";

/**
 * Props for the ServiceCard component.
 */
interface ServiceCardProps {
  /** Icon component from lucide-react */
  icon: LucideIcon;
  /** Service title */
  title: string;
  /** Service description */
  description: string;
  /** List of service features */
  features: string[];
  /** Optional pricing information */
  price?: string;
}

/**
 * Service card component displaying service details.
 *
 * Features:
 * - Animated icon with gradient background
 * - Service title and description
 * - Feature list with custom bullet points
 * - Optional pricing display
 * - Hover effects and transitions
 *
 * @component
 * @example
 * ```tsx
 * <ServiceCard
 *   icon={Palette}
 *   title="Store Design"
 *   description="Custom Shopify designs"
 *   features={["Feature 1", "Feature 2"]}
 *   price="$5,000"
 * />
 * ```
 */
export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  price,
}: ServiceCardProps) {
  return (
    <div className="group p-5 sm:p-6 md:p-8 rounded-xl border border-gray-100 smooth-transition hover:shadow-xl bg-white shadow-md active:scale-[0.98]">
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 smooth-transition shadow-sm"
        style={{ backgroundColor: "#ab2645" }}
      >
        <Icon size={24} className="sm:hidden text-white" />
        <Icon size={28} className="hidden sm:block text-white" />
      </div>

      <h3
        className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3"
        style={{ color: "#0b464f" }}
      >
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
        {description}
      </p>

      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 sm:gap-3">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ backgroundColor: "rgba(171, 38, 69, 0.2)" }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#ab2645" }}
              />
            </div>
            <span className="text-sm sm:text-base text-gray-700">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {price && (
        <div
          className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
          style={{ color: "#ab2645" }}
        >
          {price}
        </div>
      )}

      <button
        className="w-full min-h-12 px-6 py-3 border-2 rounded-lg text-sm sm:text-base font-semibold smooth-transition hover:shadow-md active:scale-95"
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
