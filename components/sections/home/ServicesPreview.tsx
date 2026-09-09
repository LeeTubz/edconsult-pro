"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Compass, Users, PenLine, Briefcase, Cpu, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Career Guidance",
    description: "Subject-choice advice and reality checks that push for the 'best fit' — not university admission only — plus academic pathway mapping and university admissions support.",
    color: "#5A6B4F",
    href: "/services/career-guidance",
  },
  {
    icon: Users,
    title: "Student Counselling",
    description: "Support for the social and academic sides of student life — navigating challenges and striking a balance while studying for success.",
    color: "#6B8FA3",
    href: "/services/student-counselling",
  },
  {
    icon: PenLine,
    title: "Coaching",
    description: "Mastering academic writing at college and university level — assignment writing, research projects, and dissertation support.",
    color: "#8FAE7A",
    href: "/services/coaching",
  },
  {
    icon: Briefcase,
    title: "Navigating Internship",
    description: "Practical guidance for students transitioning into and succeeding in internships and early work experience.",
    color: "#6F8C5B",
    href: "/services/navigating-internship",
  },
  {
    icon: Cpu,
    title: "Educational Technology",
    description: "Staff capacity building and training via webinars, plus consultancy on ODL, e-learning, and video/audio content creation.",
    color: "#A8C4A2",
    href: "/services/educational-technology",
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
            Support Services for{" "}
            <span style={{ background: "linear-gradient(135deg,#8FAE7A,#6B8FA3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Every Student
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            From career clarity to classroom technology — we offer a focused suite of
            student support services tailored to your unique goals.
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
