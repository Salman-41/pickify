import { CTASection } from "@/components/cta-section";
import { Award, Users, Zap, Sparkles } from "lucide-react";

export default function AboutPage() {
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
              ABOUT US
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
            <span style={{ color: "#0b464f" }}>About</span>{" "}
            <span style={{ color: "#ab2645" }}>Pickify</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're passionate about helping Shopify store owners build thriving,
            profitable businesses
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(11, 70, 79, 0.015) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl font-bold mb-6 text-balance-custom"
                style={{ color: "#0b464f" }}
              >
                Our Story
              </h2>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Pickify was founded by a team of e-commerce experts who saw a
                gap in the market. Too many Shopify store owners were struggling
                with design, development, and optimization—leaving money on the
                table.
              </p>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                We decided to change that. We built Pickify to be the partner
                that Shopify store owners could trust to transform their stores
                into high-performing revenue machines.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Today, we've helped over 150 stores generate more than $50
                million in revenue. And we're just getting started.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-md">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Pickify team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(11, 70, 79, 0.015) 0%, rgba(171, 38, 69, 0.015) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 text-balance-custom"
              style={{ color: "#0b464f" }}
            >
              Our Values
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We never settle for mediocre. Every project is an opportunity to deliver exceptional results.",
              },
              {
                icon: Users,
                title: "Partnership",
                description:
                  "Your success is our success. We're invested in your growth and committed to your goals.",
              },
              {
                icon: Zap,
                title: "Innovation",
                description:
                  "We stay ahead of trends and constantly explore new ways to drive results for our clients.",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-white rounded-xl smooth-transition hover:shadow-xl border border-gray-100 shadow-md"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm"
                    style={{ backgroundColor: "#ab2645" }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#0b464f" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(171, 38, 69, 0.015) 0%, rgba(11, 70, 79, 0.02) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 text-balance-custom"
              style={{ color: "#0b464f" }}
            >
              Meet the Team
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Founder & Creative Director",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Jordan Smith",
                role: "Lead Developer",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Casey Rodriguez",
                role: "Conversion Specialist",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 rounded-xl overflow-hidden h-64 shadow-md">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: "#0b464f" }}
                >
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(11, 70, 79, 0.02) 0%, rgba(171, 38, 69, 0.015) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Stores Transformed" },
              { number: "$50M+", label: "Revenue Generated" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index}>
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: "#ab2645" }}
                >
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
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
