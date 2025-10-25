import Link from "next/link";
import { Mail, Linkedin, Twitter } from "lucide-react";

/**
 * Footer component with site navigation and social links.
 * 
 * Features:
 * - Brand logo with white filter
 * - Quick links to main pages
 * - Services links
 * - Social media icons
 * - Copyright and legal links
 * - Responsive grid layout
 * 
 * @component
 * @example
 * ```tsx
 * <Footer />
 * ```
 */
export function Footer() {
  return (
    <footer
      className="text-white py-8 sm:py-10 md:py-12"
      style={{ backgroundColor: "#0b464f" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="mb-3 sm:mb-4">
              <img
                src="/Pickify - logo.svg"
                alt="Pickify Logo"
                className="h-10 sm:h-12 w-auto object-contain"
                style={{
                  maxWidth: "120px sm:140px",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
            <p className="text-white/80 text-xs sm:text-sm">
              Premium Shopify design & development services
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Quick Links
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/80">
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white smooth-transition"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white smooth-transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white smooth-transition"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Services
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/80">
              <li>
                <Link href="#" className="hover:text-white smooth-transition">
                  Store Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white smooth-transition">
                  Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white smooth-transition">
                  Optimization
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Connect
            </h3>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="text-white/80 hover:text-white smooth-transition"
              >
                <Mail size={18} className="sm:hidden" />
                <Mail size={20} className="hidden sm:block" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white smooth-transition"
              >
                <Linkedin size={18} className="sm:hidden" />
                <Linkedin size={20} className="hidden sm:block" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white smooth-transition"
              >
                <Twitter size={18} className="sm:hidden" />
                <Twitter size={20} className="hidden sm:block" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-xs sm:text-sm text-white/80">
          <p>&copy; 2025 Pickify. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="#" className="hover:text-white smooth-transition">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white smooth-transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
