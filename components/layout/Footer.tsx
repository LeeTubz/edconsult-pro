"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "About Us",       href: "/about"   },
  { label: "Our Services",   href: "/services/academic-support" },
  { label: "Who We Serve",   href: "/clients" },
  { label: "Blog & Insights",href: "/blog"    },
  { label: "Contact Us",     href: "/contact" },
];

const services = [
  { label: "Academic Support",                          href: "/services/academic-support"     },
  { label: "Career Guidance, Counselling & Mentorship",  href: "/services/career-guidance"      },
  { label: "Quality Assurance",                          href: "/services/quality-assurance"    },
  { label: "Teacher and Staff Capacity Building and Mentorship", href: "/services/educational-technology" },
  { label: "Institutional Audits and Visits",            href: "/services/institutional-audits" },
];

const socials = [
  { label: "in", href: "#", ariaLabel: "LinkedIn", color: "#0a66c2" },
  { label: "f", href: "#", ariaLabel: "Facebook", color: "#1877f2" },
  { label: "ig", href: "#", ariaLabel: "Instagram", color: "#e1306c" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterState, setNewsletterState] = useState<"idle" | "success" | "error">("idle");
  const router = useRouter();

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setNewsletterState("error");
      return;
    }
    setNewsletterState("success");
    setEmail("");
    setTimeout(() => setNewsletterState("idle"), 5000);
  };

  return (
    <footer style={{ background: "#0A1628" }}>
      {/* Newsletter Banner */}
      <div
        className="py-10"
        style={{ background: "linear-gradient(135deg, #0F2545 0%, #1c4372 50%, #0F2545 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Ahead in Education
              </h3>
              <p className="text-white/60">
                Subscribe to our newsletter for expert insights, tips, and the latest
                educational trends delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletter} className="flex gap-3 w-full sm:w-auto">
              {newsletterState === "success" ? (
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">You're subscribed!</span>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-5 py-3 rounded-full text-sm bg-white/10 text-white placeholder-white/40 border border-white/15 focus:outline-none focus:border-[#14325E] w-full sm:flex-1 md:w-64"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap w-full sm:w-auto"
                    style={{ background: "linear-gradient(135deg, #EFB31E 0%, #C98F1B 100%)", color: "#0A1628" }}
                  >
                    Subscribe <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
              {newsletterState === "error" && (
                <p className="text-red-400 text-xs flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> Invalid email
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-12 h-12 shrink-0">
                  <Image src="/logo-mark.png" alt="Platinum Accolades" fill className="object-contain" />
                </div>
                <div>
                  <div className="font-display text-white font-bold text-lg leading-tight">
                    Platinum<span className="text-[#EFB31E]"> Accolades</span>
                  </div>
                  <div className="text-xs text-white/40 font-medium tracking-wider uppercase">
                    Educational Consultancy
                  </div>
                </div>
              </div>

              <p className="text-sm text-white/55 leading-relaxed mb-6">
                Academic support, institutional consulting, and student guidance,
                best fit for purpose, not one size fits all.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:knowledgelab.bw@gmail.com"
                  className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[#EFB31E] shrink-0" />
                  knowledgelab.bw@gmail.com
                </a>
                <a href="tel:+26776150511"
                  className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#EFB31E] shrink-0" />
                  +267 76150511 (Call/WhatsApp)
                </a>
                <a href="tel:+26774332739"
                  className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#EFB31E] shrink-0" />
                  +267 74332739 (Call/WhatsApp)
                </a>
                <div className="flex items-start gap-2 text-sm text-white/55">
                  <MapPin className="w-4 h-4 text-[#EFB31E] shrink-0 mt-0.5" />
                  Gaborone, Botswana
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-2 mt-6">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.ariaLabel}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all hover:scale-110 text-xs font-bold"
                    style={{ background: "rgba(255, 255, 255, 0.06)" }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => router.push(link.href)}
                      className="text-sm text-white/55 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-[#EFB31E]">›</span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((s, i) => (
                  <li key={i}>
                    <button
                      onClick={() => router.push(s.href)}
                      className="text-sm text-white/55 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-[#EFB31E]">›</span>
                      {s.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications & Trust */}
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                Why Trust Us
              </h4>
              <div className="space-y-3">
                {[
                  "18+ Years of Experience",
                  "500+ Students Guided",
                  "98% Client Satisfaction",
                  "Internationally Recognized",
                  "Certified Consultants",
                  "Evidence-Based Methods",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/55">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => router.push("/contact")}
                className="mt-6 w-full py-3 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #EFB31E, #C98F1B)", color: "#0A1628" }}
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/35">
            <p>
              © {new Date().getFullYear()} Platinum Accolades. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="hover:text-white/70 transition-colors">Privacy Policy</button>
              <button className="hover:text-white/70 transition-colors">Terms of Service</button>
              <button className="hover:text-white/70 transition-colors">Cookies</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
