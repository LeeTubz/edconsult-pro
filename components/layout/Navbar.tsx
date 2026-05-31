"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  GraduationCap,
  ChevronDown,
  Phone,
  Mail,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { label: "Home", href: "#home" },
  {
    label: "About",
    href: "#about",
    children: [
      { label: "Our Story", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Why Choose Us", href: "#why-us" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Higher Education", href: "#services" },
      { label: "School Placement", href: "#services" },
      { label: "Academic Consulting", href: "#services" },
      { label: "Special Education", href: "#services" },
      { label: "Curriculum Development", href: "#services" },
      { label: "Educational Technology", href: "#services" },
      { label: "Strategic Planning", href: "#services" },
    ],
  },
  { label: "Clients", href: "#clients" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    setActiveDropdown(null);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Top bar */}
      <div
        className="hidden lg:flex items-center justify-between px-8 py-2 text-xs text-white/80"
        style={{ background: "#080f2a" }}
      >
        <div className="flex items-center gap-6">
          <a
            href="mailto:info@edconsult.com"
            className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            info@edconsult.com
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            +1 (234) 567-8900
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span>Transforming Education, One Student at a Time</span>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "shadow-2xl py-3"
            : "py-4"
        }`}
        style={{
          background: scrolled
            ? "rgba(8, 15, 42, 0.97)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.08)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="#home"
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-3 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
                }}
              >
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight tracking-tight">
                  EduConsult
                  <span className="text-yellow-400">Pro</span>
                </div>
                <div className="text-xs text-white/50 font-medium tracking-wider uppercase">
                  Educational Consulting
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded-lg transition-all duration-200 hover:bg-white/5"
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-52 rounded-xl overflow-hidden shadow-2xl"
                        style={{
                          background: "rgba(8, 15, 42, 0.98)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(20px)",
                        }}
                      >
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => scrollToSection(child.href)}
                            className="w-full text-left px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 flex items-center gap-2 group"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-yellow-400 transition-colors" />
                            {child.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                  aria-label="Toggle theme"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="w-4.5 h-4.5" />
                  ) : (
                    <Moon className="w-4.5 h-4.5" />
                  )}
                </button>
              )}

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection("#consultation")}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
                  boxShadow: "0 4px 15px rgba(37, 99, 235, 0.3)",
                }}
              >
                Book Consultation
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
              style={{
                background: "rgba(8, 15, 42, 0.99)",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="px-4 py-6 space-y-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="w-full text-left px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 font-medium transition-all duration-200"
                    >
                      {item.label}
                    </button>
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => scrollToSection(child.href)}
                            className="w-full text-left px-4 py-2 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                  <button
                    onClick={() => scrollToSection("#consultation")}
                    className="w-full py-3 rounded-full text-white font-semibold"
                    style={{
                      background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
                    }}
                  >
                    Book Free Consultation
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
