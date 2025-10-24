import Link from "next/link"
import { Mail, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="relative text-white py-12 overflow-hidden"
      style={{ background: "linear-gradient(to right, #007C83, #E34D78)" }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pikify-8T0LA3AE8W1XQ1Sw5tBRTIUhODt8C6.jpeg"
                alt="Pickify Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold text-lg">Pickify</span>
            </div>
            <p className="text-white/70 text-sm">Premium Shopify design & development services</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/portfolio" className="hover:text-white smooth-transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white smooth-transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white smooth-transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
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
              <a href="#" className="text-white/70 hover:text-white smooth-transition hover:scale-110">
                <Mail size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white smooth-transition hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white smooth-transition hover:scale-110">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
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
  )
}
