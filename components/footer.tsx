import Link from "next/link";
import { Mail, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: "#0b464f" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src="/Pickify - logo.svg"
                alt="Pickify Logo"
                className="h-12 w-auto object-contain"
                style={{
                  maxWidth: "140px",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
            <p className="text-white/80 text-sm">
              Premium Shopify design & development services
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
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
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
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
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/80 hover:text-white smooth-transition"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white smooth-transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white smooth-transition"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
          <p>&copy; 2025 Pickify. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
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
