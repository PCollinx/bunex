"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Trade", href: "#" },
    { label: "Markets", href: "#markets" },
    { label: "Features", href: "#features" },
    { label: "Company", href: "#", hasDropdown: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#e2e8f0] backdrop-blur-xl bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center">
              <span className="text-white text-sm font-extrabold">B</span>
            </div>
            <span className="text-[#0f172a] text-xl font-bold font-[family-name:var(--font-space-grotesk)]">
              Bunex
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#64748b] hover:text-[#0f172a] transition-colors flex items-center gap-1 text-sm"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} />}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-5 py-2.5 text-[#0f172a] hover:text-[#2563eb] transition-colors rounded-xl text-sm">
              Log In
            </button>
            <button className="px-5 py-2.5 bg-[#2563eb] text-white rounded-xl hover:bg-[#1d4ed8] transition-colors text-sm font-semibold">
              Get Started
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-[#0f172a] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[#e2e8f0] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-[#64748b] hover:text-[#0f172a] transition-colors py-2 text-[15px]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#e2e8f0] space-y-2">
                <button className="w-full py-3 text-[#0f172a] rounded-xl border border-[#e2e8f0] text-sm">
                  Log In
                </button>
                <button className="w-full py-3 bg-[#2563eb] text-white rounded-xl hover:bg-[#1d4ed8] text-sm font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
