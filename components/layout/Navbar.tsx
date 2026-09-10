"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown,
  Phone, Mail, Sun, Moon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

const navItems = [
  { label: "Home",  href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services/academic-support",
    children: [
      { label: "Academic Support",       href: "/services/academic-support"     },
      { label: "Quality Assurance",      href: "/services/quality-assurance"    },
      { label: "Educational Technology", href: "/services/educational-technology" },
      { label: "Institutional Audits",   href: "/services/institutional-audits" },
      { label: "Career Guidance",        href: "/services/career-guidance"      },
      { label: "Counselling & Mentorship", href: "/services/student-counselling" },
    ],
  },
  { label: "Clients", href: "/clients"  },
  { label: "Blog",    href: "/blog"     },
  { label: "Contact", href: "/contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled]             = useState(false);
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { setTheme, resolvedTheme }         = useTheme();
  const [mounted, setMounted]               = useState(false);
  const router   = useRouter();
  const pathname = usePathname();
  const isHome   = pathname === "/";

  useEffect(() => { setMounted(true); }, []);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    if (!isHome) { setScrolled(true); return; }
    setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome, handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navigate = (href: string) => {
    setMobileOpen(false);
    setActiveDropdown(null);
    router.push(href);
  };

  // Dark style when scrolled OR on any inner page
  const dark = scrolled || !isHome;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex flex-col"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {/* ── Top info strip (desktop, hides on scroll / inner pages) ── */}
      <div
        className="hidden lg:flex items-center justify-between px-6 xl:px-10 text-xs text-white/70 overflow-hidden transition-all duration-300"
        style={{
          background:    "#10150c",
          maxHeight:     dark ? "0px" : "34px",
          paddingTop:    dark ? "0" : "6px",
          paddingBottom: dark ? "0" : "6px",
          opacity:       dark ? 0 : 1,
          borderBottom:  dark ? "none" : "1px solid rgba(255,255,255,0.06)",
        }}
        aria-hidden={dark}
      >
        <div className="flex items-center gap-5">
          <a href="mailto:knowledgelab.bw@gmail.com"
            className="flex items-center gap-1.5 hover:text-[#A8C4A2] transition-colors">
            <Mail className="w-3 h-3" />
            knowledgelab.bw@gmail.com
          </a>
          <a href="tel:+26774332739"
            className="flex items-center gap-1.5 hover:text-[#A8C4A2] transition-colors">
            <Phone className="w-3 h-3" />
            +267 74332739
          </a>
        </div>
        <span className="font-medium tracking-wide">
          Guiding Students, Growing Futures
        </span>
      </div>

      {/* ── Main nav bar ── */}
      <nav
        className={`transition-all duration-300 ${dark ? "py-2" : "py-3"}`}
        style={{
          background:     dark ? "rgba(16,21,12,0.97)" : "transparent",
          backdropFilter: dark ? "blur(18px)" : "none",
          boxShadow:      dark ? "0 1px 24px rgba(0,0,0,0.3)" : "none",
          borderBottom:   dark ? "1px solid rgba(255,255,255,0.07)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-11 h-11 shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image src="/logo-mark.png" alt="Olive Shoots" fill className="object-contain" priority />
            </div>
            <div>
              <div className="text-white font-bold text-base leading-tight tracking-tight">
                Olive<span className="text-[#A8C4A2]">Shoots</span>
              </div>
              <div className="text-[10px] text-white/40 font-medium tracking-widest uppercase">
                Educational Consultancy
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => navigate(item.href)}
                  className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium
                             text-white/75 hover:text-white rounded-lg
                             transition-colors duration-200 hover:bg-white/[0.07] whitespace-nowrap"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200
                        ${activeDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0,  scale: 1    }}
                      exit={{    opacity: 0, y: 8,  scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-1.5 w-52 rounded-xl overflow-hidden shadow-2xl"
                      style={{
                        background:     "rgba(16,21,12,0.98)",
                        border:         "1px solid rgba(255,255,255,0.09)",
                        backdropFilter: "blur(20px)",
                      }}
                    >
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => navigate(child.href)}
                          className="w-full text-left px-4 py-2.5 text-sm text-white/65
                                     hover:text-white hover:bg-white/[0.06]
                                     transition-all duration-150 flex items-center gap-2.5 group"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#8FAE7A]
                                           group-hover:bg-[#A8C4A2] transition-colors flex-shrink-0" />
                          {child.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="w-8 h-8 rounded-lg flex items-center justify-center
                           text-white/60 hover:text-white hover:bg-white/[0.07]
                           transition-all duration-200"
                aria-label="Toggle colour theme"
              >
                {resolvedTheme === "dark"
                  ? <Sun  className="w-4 h-4" />
                  : <Moon className="w-4 h-4" />
                }
              </button>
            )}

            {/* CTA — desktop */}
            <button
              onClick={() => navigate("/contact")}
              className="hidden md:flex items-center gap-1.5 px-5 py-2 rounded-full
                         text-sm font-semibold text-white transition-all duration-250
                         hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg,#8FAE7A,#5A6B4F)",
                boxShadow:  "0 3px 12px rgba(90,107,79,0.35)",
              }}
            >
              Book Consultation
            </button>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center
                         text-white hover:bg-white/[0.07] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen
                ? <X    className="w-5 h-5" />
                : <Menu className="w-5 h-5" />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{    opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
            style={{
              background:   "rgba(15,20,11,0.99)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="px-4 py-5 space-y-0.5">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <button
                    onClick={() => navigate(item.href)}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-white/80
                               hover:text-white hover:bg-white/[0.06] font-medium
                               transition-all duration-200 text-sm"
                  >
                    {item.label}
                  </button>
                  {item.children && (
                    <div className="ml-4 mt-0.5 mb-1 space-y-0.5">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => navigate(child.href)}
                          className="w-full text-left px-4 py-2 rounded-lg text-sm
                                     text-white/55 hover:text-white/90 hover:bg-white/[0.05]
                                     transition-all duration-150"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28 }}
                className="pt-3 border-t border-white/[0.07]"
              >
                <button
                  onClick={() => navigate("/contact")}
                  className="w-full py-3 rounded-xl text-white font-semibold text-sm"
                  style={{ background: "linear-gradient(135deg,#8FAE7A,#5A6B4F)" }}
                >
                  Book Free Consultation
                </button>
                <div className="flex flex-col gap-2 mt-3 px-1">
                  <a href="mailto:knowledgelab.bw@gmail.com"
                    className="text-xs text-white/45 flex items-center gap-2">
                    <Mail className="w-3 h-3" /> knowledgelab.bw@gmail.com
                  </a>
                  <a href="tel:+26774332739"
                    className="text-xs text-white/45 flex items-center gap-2">
                    <Phone className="w-3 h-3" /> +267 74332739
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
