import { HeroSection } from "@/components/hero-section"
import { FeaturedWork } from "@/components/featured-work"
import { ServicesPreview } from "@/components/services-preview"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedWork />
      <ServicesPreview />
      <Testimonials />
      <CTASection />
    </>
  )
}
