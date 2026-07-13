"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ClipboardList,
  Map,
  Lightbulb,
  Cog,
  BarChart2,
  Cpu,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const processes = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Assessment & Needs Analysis",
    description:
      "We begin with a comprehensive evaluation of your unique educational landscape — analyzing strengths, gaps, goals, and constraints to build a complete picture of what success looks like for you.",
    color: "#2563eb",
    features: ["Diagnostic evaluation", "Stakeholder interviews", "Gap analysis", "Goal mapping"],
  },
  {
    step: "02",
    icon: Map,
    title: "Strategic Planning",
    description:
      "From insights gathered, we develop a tailored, actionable educational growth plan with clear milestones, timelines, and measurable outcomes aligned to your aspirations.",
    color: "#7c3aed",
    features: ["Custom roadmap", "KPI definition", "Resource planning", "Risk assessment"],
  },
  {
    step: "03",
    icon: Lightbulb,
    title: "Solution Development",
    description:
      "We create innovative, evidence-based educational solutions designed specifically for your context — whether it's curriculum redesign, technology adoption, or academic program development.",
    color: "#d97706",
    features: ["Custom solutions", "Best practices", "Innovation frameworks", "Prototype testing"],
  },
  {
    step: "04",
    icon: Cog,
    title: "Implementation & Training",
    description:
      "Our hands-on implementation support ensures seamless execution — including comprehensive staff training, process integration, and change management to maximize adoption.",
    color: "#059669",
    features: ["Hands-on support", "Staff training", "Change management", "Process integration"],
  },
  {
    step: "05",
    icon: BarChart2,
    title: "Evaluation & Reporting",
    description:
      "We rigorously measure outcomes against defined objectives, delivering transparent reports with actionable insights that inform continuous improvement and demonstrate impact.",
    color: "#0891b2",
    features: ["Impact measurement", "Data reporting", "Outcome analysis", "Continuous improvement"],
  },
  {
    step: "06",
    icon: Cpu,
    title: "Educational Technology",
    description:
      "We keep your institution ahead of the curve by integrating the latest educational technologies, digital platforms, and AI-powered tools that enhance learning outcomes.",
    color: "#dc2626",
    features: ["LMS integration", "AI tools", "Digital platforms", "Tech training"],
  },
  {
    step: "07",
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "We embed quality at every stage, ensuring educational programs meet the highest academic standards and regulatory requirements, and continue to evolve with excellence.",
    color: "#0f766e",
    features: ["Standards compliance", "Accreditation prep", "Quality audits", "Policy review"],
  },
];

export default function WhatWeDoSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--background)" }}
      ref={ref}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(37, 99, 235, 0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">How We Work</span>
          </div>
          <h2 className="section-title mb-4" style={{ color: "var(--foreground)" }}>
            Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Consulting Process
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            A proven, structured methodology that delivers measurable educational
            transformation at every stage of your journey.
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {processes.slice(0, 6).map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.09, duration: 0.6 }}
                className="group relative p-6 rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
              >
                {/* Background gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${p.color}08, transparent 60%)`,
                  }}
                />

                {/* Step number */}
                <div
                  className="absolute top-5 right-5 text-5xl font-black opacity-5 group-hover:opacity-10 transition-opacity select-none"
                  style={{ color: p.color }}
                >
                  {p.step}
                </div>

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${p.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: p.color }} />
                  </div>

                  {/* Step badge */}
                  <div
                    className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded mb-3"
                    style={{ background: `${p.color}15`, color: p.color }}
                  >
                    STEP {p.step}
                  </div>

                  <h3 className="text-lg font-bold mb-3" style={{ color: "var(--foreground)" }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
                    {p.description}
                  </p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2">
                    {p.features.map((f, j) => (
                      <span
                        key={j}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{
                          background: `${p.color}10`,
                          color: p.color,
                          border: `1px solid ${p.color}20`,
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 7th item centered */}
        <div className="flex justify-center">
          {processes.slice(6).map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="group relative p-6 rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 max-w-sm w-full"
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                  style={{ background: `${p.color}08` }}
                />
                <div
                  className="absolute top-5 right-5 text-5xl font-black opacity-5 select-none"
                  style={{ color: p.color }}
                >
                  {p.step}
                </div>
                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                    style={{ background: `${p.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: p.color }} />
                  </div>
                  <div className="inline-flex items-center text-xs font-bold px-2 py-0.5 rounded mb-3"
                    style={{ background: `${p.color}15`, color: p.color }}>
                    STEP {p.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: "var(--foreground)" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.features.map((f, j) => (
                      <span key={j} className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: `${p.color}10`, color: p.color, border: `1px solid ${p.color}20` }}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
