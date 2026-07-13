"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  School,
  BookOpen,
  Brain,
  Layers,
  Cpu,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const consultants = [
  {
    icon: GraduationCap,
    title: "Higher Education Consultant",
    tagline: "University & College Admissions",
    description:
      "Expert guidance for undergraduate and graduate admissions, scholarship applications, and navigating the complex landscape of higher education pathways worldwide.",
    specialties: ["University Admissions", "Graduate Programs", "Scholarship Guidance", "Study Abroad"],
    color: "#2563eb",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    icon: School,
    title: "School Placement Consultant",
    tagline: "K-12 School Selection",
    description:
      "Strategic support for finding the perfect K-12 school environment — from public to private, boarding to international — aligned with each student's learning style and goals.",
    specialties: ["Private Schools", "Boarding Schools", "International Schools", "School Transitions"],
    color: "#7c3aed",
    gradient: "from-violet-600 to-violet-800",
  },
  {
    icon: BookOpen,
    title: "Academic Consultant",
    tagline: "Academic Planning & Support",
    description:
      "Comprehensive academic coaching and planning that optimizes student performance, develops study strategies, and builds the academic profile needed for top-tier opportunities.",
    specialties: ["Academic Planning", "Study Skills", "Test Prep", "College Essays"],
    color: "#059669",
    gradient: "from-emerald-600 to-emerald-800",
  },
  {
    icon: Brain,
    title: "Special Education Consultant",
    tagline: "Inclusive Learning Support",
    description:
      "Specialized advocacy and guidance for students with learning differences — developing individualized education plans and connecting families with the right resources.",
    specialties: ["IEP Development", "Learning Disabilities", "504 Plans", "Parent Advocacy"],
    color: "#dc2626",
    gradient: "from-red-600 to-red-800",
  },
  {
    icon: Layers,
    title: "Curriculum Development",
    tagline: "Curriculum Design & Innovation",
    description:
      "Designing rigorous, engaging, and standards-aligned curricula that inspire student achievement and meet institutional goals — from course design to full program development.",
    specialties: ["Curriculum Design", "Standards Alignment", "Assessment Design", "Program Evaluation"],
    color: "#d97706",
    gradient: "from-amber-600 to-amber-800",
  },
  {
    icon: Cpu,
    title: "Educational Technology",
    tagline: "EdTech Integration & Innovation",
    description:
      "Bridging the gap between cutting-edge technology and classroom learning — from LMS implementation to AI integration and digital transformation strategies.",
    specialties: ["LMS Implementation", "Digital Learning", "AI in Education", "EdTech Strategy"],
    color: "#0891b2",
    gradient: "from-cyan-600 to-cyan-800",
  },
  {
    icon: BarChart3,
    title: "Institutional Effectiveness",
    tagline: "Strategic Planning & Accreditation",
    description:
      "Supporting educational institutions in achieving operational excellence, accreditation readiness, data-driven decision making, and sustainable strategic growth.",
    specialties: ["Strategic Planning", "Accreditation", "Data Analytics", "Change Management"],
    color: "#0f766e",
    gradient: "from-teal-700 to-teal-900",
  },
];

export default function TeamSection() {
  const router = useRouter();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const scrollToConsultation = () => router.push("/contact");

  return (
    <section
      id="team"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--section-alt)" }}
      ref={ref}
    >
      {/* Background decoration */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(37, 99, 235, 0.08)", border: "1px solid rgba(37, 99, 235, 0.2)" }}
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Our Expertise</span>
          </div>
          <h2 className="section-title mb-4" style={{ color: "var(--foreground)" }}>
            Specialized Consulting{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Services
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            Our team of specialized consultants brings deep expertise across every
            dimension of education, ready to guide you toward excellence.
          </p>
        </motion.div>

        {/* All 7 cards in one unified grid — last card centred via col-start-2 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {consultants.map((c, i) => {
            const Icon = c.icon;
            const isLast = i === consultants.length - 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.55 }}
                className={`group relative overflow-hidden rounded-2xl border p-6 cursor-pointer
                            transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5
                            ${isLast ? "md:col-start-1 lg:col-start-2" : ""}`}
                style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
              >
                {/* Hover tint */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background: `linear-gradient(135deg,${c.color}08,${c.color}03)` }} />
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg,${c.color},transparent)` }} />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${c.color}15` }}>
                    <Icon className="w-6 h-6" style={{ color: c.color }} />
                  </div>

                  <div className="text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: c.color }}>
                    {c.tagline}
                  </div>
                  <h3 className="text-base font-bold mb-2.5 leading-snug" style={{ color: "var(--foreground)" }}>
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                    {c.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.specialties.map((s, j) => (
                      <span key={j} className="text-[11px] px-2 py-0.5 rounded-full font-medium"
                        style={{ background: `${c.color}10`, color: c.color, border: `1px solid ${c.color}22` }}>
                        {s}
                      </span>
                    ))}
                  </div>

                  <button onClick={scrollToConsultation}
                    className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 hover:gap-2.5"
                    style={{ color: c.color }}>
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, #0a1628 0%, #112044 100%)",
          }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Not sure which service is right for you?
          </h3>
          <p className="text-white/60 mb-6">
            Book a free discovery call and our experts will identify the perfect consulting pathway for your needs.
          </p>
          <button
            onClick={scrollToConsultation}
            className="px-8 py-4 rounded-full text-white font-semibold transition-all hover:shadow-lg hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
              boxShadow: "0 4px 20px rgba(37, 99, 235, 0.4)",
            }}
          >
            Book Free Discovery Call
          </button>
        </motion.div>
      </div>
    </section>
  );
}
