"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, ShieldCheck, Cpu, ClipboardCheck, Compass, HeartHandshake, ArrowRight } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Academic Support",
    description: "Tuition (IGCSE & IB), academic writing consultation, editing and proofreading, and research consultation — academic support with purpose.",
    color: "#8FAE7A",
    href: "/services/academic-support",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Quality assurance and external moderation — benchmarking, policy review, audits, observations, and staff appraisal for institutions.",
    color: "#5A6B4F",
    href: "/services/quality-assurance",
  },
  {
    icon: Cpu,
    title: "Educational Technology",
    description: "Staff and teacher capacity building via webinars, navigating online classes, AI in education, and e-learning content creation.",
    color: "#A8C4A2",
    href: "/services/educational-technology",
  },
  {
    icon: ClipboardCheck,
    title: "Institutional Audits",
    description: "Internal program and institutional audits — scope development, compliance review, staff engagement, and clear reporting.",
    color: "#4A6B7A",
    href: "/services/institutional-audits",
  },
  {
    icon: Compass,
    title: "Career Guidance",
    description: "Subject-choice advice that pushes for the 'best fit' — plus academic pathway mapping, university admissions, and skills & trade guidance.",
    color: "#6B8FA3",
    href: "/services/career-guidance",
  },
  {
    icon: HeartHandshake,
    title: "Counselling & Mentorship",
    description: "Supporting academic, work, social, and spiritual life — because a thriving student is more than just their grades.",
    color: "#6F8C5B",
    href: "/services/student-counselling",
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
        style={{ backgroundImage: "radial-gradient(circle, rgba(90,107,79,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(90,107,79,0.08)", border: "1px solid rgba(90,107,79,0.2)" }}>
            <span className="text-sm font-semibold text-[#5A6B4F] dark:text-[#A8C4A2]">What We Offer</span>
          </div>
          <h2 className="section-title mb-4" style={{ color: "var(--foreground)" }}>
            Solutions for Students{" "}
            <span style={{ background: "linear-gradient(135deg,#8FAE7A,#6B8FA3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              & Institutions
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            From tuition and academic writing to institutional quality assurance —
            we offer a full suite of services, best fit for purpose, not one size fits all.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((s, i) => {
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
            href="/services/career-guidance"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#5A6B4F] text-[#5A6B4F] hover:bg-[#5A6B4F] hover:text-white font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
