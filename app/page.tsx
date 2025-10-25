import { HeroSection } from "@/components/hero-section";
import { FeaturedWork } from "@/components/featured-work";
import { ServicesPreview } from "@/components/services-preview";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";

/**
 * Homepage component.
 *
 * Displays the main landing page with:
 * - Hero section with CTA
 * - Featured work showcase
 * - Services preview
 * - Client testimonials
 * - Call-to-action section
 *
 * @page
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedWork />
      <ServicesPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
