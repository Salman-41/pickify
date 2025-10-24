"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pikify-8T0LA3AE8W1XQ1Sw5tBRTIUhODt8C6.jpeg"
              alt="Pickify Logo"
              className="w-10 h-10 object-contain"
            />
            <span
              className="font-bold text-xl"
              style={{
                backgroundImage: "linear-gradient(to right, #E34D78, #FF6F91)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pickify
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-primary smooth-transition font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className="hidden md:block px-6 py-2 text-white rounded-lg font-medium smooth-transition hover:shadow-lg hover:scale-105"
            style={{
              background: "linear-gradient(to right, #E34D78, #FF6F91)",
              boxShadow: "0 0 20px rgba(227, 77, 120, 0.3)",
            }}
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground/70 hover:text-primary smooth-transition"
              >
                {link.label}
              </Link>
            ))}
            <button
              className="w-full mt-4 px-6 py-2 text-white rounded-lg font-medium"
              style={{ background: "linear-gradient(to right, #E34D78, #FF6F91)" }}
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
