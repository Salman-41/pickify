"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <img
              src="/Pickify - logo.svg"
              alt="Pickify Logo"
              className="h-14 w-auto object-contain"
              style={{
                maxWidth: "160px",
                objectFit: "contain",
                objectPosition: "left center",
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-sm smooth-transition relative group"
                style={{ color: "#0b464f" }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#ab2645" }}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className="hidden md:block px-6 py-2 text-white rounded-lg font-medium smooth-transition hover:opacity-90"
            style={{
              backgroundColor: "#0b464f",
            }}
          >
            Hire Us
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
                className="block px-4 py-2 font-medium smooth-transition hover:bg-gray-50 rounded-lg"
                style={{ color: "#0b464f" }}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="w-full mt-4 px-6 py-2 text-white rounded-lg font-medium hover:opacity-90 smooth-transition"
              style={{ backgroundColor: "#0b464f" }}
            >
              Hire Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
