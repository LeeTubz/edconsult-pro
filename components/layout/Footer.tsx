"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const quickLinks = [
  { label: "About Us",       href: "/about/our-story"     },
  { label: "Our Services",   href: "/services/higher-education" },
  { label: "Our Process",    href: "/services/higher-education" },
  { label: "Who We Serve",   href: "/clients"             },
  { label: "Why Choose Us",  href: "/about/why-choose-us" },
  { label: "Our Team",       href: "/about/our-team"      },
  { label: "Blog & Insights",href: "/blog"                },
  { label: "Contact Us",     href: "/contact"             },
];

const services = [
  { label: "Higher Education Consulting", href: "/services/higher-education"      },
  { label: "School Placement",            href: "/services/school-placement"      },
  { label: "Academic Consulting",         href: "/services/academic-consulting"   },
  { label: "Special Education",           href: "/services/special-education"     },
  { label: "Curriculum Development",      href: "/services/curriculum-development"},
  { label: "Educational Technology",      href: "/services/educational-technology"},
  { label: "Strategic Planning",          href: "/services/strategic-planning"    },
];

const socials = [
  { label: "in", href: "#", ariaLabel: "LinkedIn", color: "#0a66c2" },
  { label: "𝕏", href: "#", ariaLabel: "Twitter / X", color: "#1da1f2" },
  { label: "f", href: "#", ariaLabel: "Facebook", color: "#1877f2" },
  { label: "ig", href: "#", ariaLabel: "Instagram", color: "#e1306c" },
  { label: "▶", href: "#", ariaLabel: "YouTube", color: "#ff0000" },
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
    <footer style={{ background: "#040c1f" }}>
      {/* Newsletter Banner */}
      <div
        className="py-10"
        style={{ background: "linear-gradient(135deg, #0d1840 0%, #1a2f6b 50%, #0d1840 100%)" }}
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
            <form onSubmit={handleNewsletter} className="flex gap-3 w-full md:w-auto">
              {newsletterState === "success" ? (
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">You're subscribed!</span>
                </div>
              ) : (
                <div className="flex gap-3 w-full md:w-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-5 py-3 rounded-full text-sm bg-white/10 text-white placeholder-white/40 border border-white/15 focus:outline-none focus:border-blue-400 flex-1 md:w-64"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full text-white font-semibold text-sm flex items-center gap-2 transition-all hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
                    style={{ background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)" }}
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
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #2563eb, #1e40af)" }}
                >
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-tight">
                    EduConsult<span className="text-yellow-400">Pro</span>
                  </div>
                  <div className="text-xs text-white/40 font-medium tracking-wider uppercase">
                    Educational Consulting
                  </div>
                </div>
              </div>

              <p className="text-sm text-white/55 leading-relaxed mb-6">
                Empowering students, schools, and organizations through strategic
                educational consulting. Your trusted partner for academic excellence.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:info@edconsultpro.com"
                  className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  info@edconsultpro.com
                </a>
                <a href="tel:+26771234567"
                  className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  +267 71 234 567
                </a>
                <div className="flex items-start gap-2 text-sm text-white/55">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  Plot 1234, Luthuli Road<br />Gaborone, Botswana
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
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-blue-400">›</span>
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
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-blue-400">›</span>
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
                  "15+ Years of Experience",
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
                className="mt-6 w-full py-3 rounded-xl text-white text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #2563eb, #1e40af)" }}
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
              © {new Date().getFullYear()} EduConsult Pro. All rights reserved.
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
