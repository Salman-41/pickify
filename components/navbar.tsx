"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.nav
      className="fixed top-0 w-full backdrop-blur-xl border-b border-white/20 z-50"
      style={{
        background:
          "linear-gradient(135deg, rgba(171, 38, 69, 0.08) 0%, rgba(255, 255, 255, 0.6) 100%)",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 smooth-transition hover:opacity-75"
          >
            {isOpen ? (
              <X size={24} style={{ color: "#ab2645" }} />
            ) : (
              <Menu size={24} style={{ color: "#0b464f" }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden pb-4 space-y-2 border-t"
              style={{
                borderColor: "rgba(11, 70, 79, 0.1)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-2 font-medium smooth-transition rounded-lg"
                    style={{
                      color: "#0b464f",
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(171, 38, 69, 0.08)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                className="w-full mt-4 px-6 py-3 text-white rounded-lg font-medium smooth-transition hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#ab2645" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Us
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
