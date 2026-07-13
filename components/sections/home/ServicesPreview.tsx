"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, School, Brain, Layers, Cpu, BarChart3, BookOpen, ArrowRight } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Higher Education",
    description: "Expert guidance on university admissions, graduate programs, scholarships, and international study for students across Botswana and Africa.",
    color: "#2563eb",
    href: "/services/higher-education",
  },
  {
    icon: School,
    title: "School Placement",
    description: "Find the right K-12 school for your child — from government and private schools to boarding and international institutions.",
    color: "#7c3aed",
    href: "/services/school-placement",
  },
  {
    icon: BookOpen,
    title: "Academic Consulting",
    description: "Personalised academic planning, study skills coaching, test preparation, and college essay support to maximise student potential.",
    color: "#059669",
    href: "/services/academic-consulting",
  },
  {
    icon: Brain,
    title: "Special Education",
    description: "Dedicated support for students with diverse learning needs — IEP development, learning disability advocacy, and inclusive education planning.",
    color: "#dc2626",
    href: "/services/special-education",
  },
  {
    icon: Layers,
    title: "Curriculum Development",
    description: "Evidence-based curriculum design, standards alignment, and programme evaluation for schools and educational institutions.",
    color: "#d97706",
    href: "/services/curriculum-development",
  },
  {
    icon: Cpu,
    title: "Educational Technology",
    description: "Strategic integration of LMS platforms, AI-powered learning tools, and digital transformation frameworks for modern institutions.",
    color: "#0891b2",
    href: "/services/educational-technology",
  },
  {
    icon: BarChart3,
    title: "Strategic Planning",
    description: "Institutional strategic planning, accreditation preparation, data analytics, and change management for sustained educational excellence.",
    color: "#0f766e",
    href: "/services/strategic-planning",
  },
];

export default function ServicesPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--background)" }}
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)" }}>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">What We Offer</span>
          </div>
          <h2 className="section-title mb-4" style={{ color: "var(--foreground)" }}>
            Consulting Services for{" "}
            <span style={{ background: "linear-gradient(135deg,#2563eb,#fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Every Need
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            From individual students to entire institutions — we offer a full suite of
            educational consulting services tailored to your unique goals.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.slice(0, 6).map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.55 }}
              >
                <Link
                  href={s.href}
                  className="group block p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full"
                  style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${s.color}15` }}>
                    <Icon className="w-6 h-6" style={{ color: s.color }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{s.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all duration-200" style={{ color: s.color }}>
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45 }}
          className="text-center"
        >
          <Link
            href="/services/higher-education"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
