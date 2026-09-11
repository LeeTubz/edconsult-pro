"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ClipboardList,
  Map,
  Lightbulb,
  Cog,
  BarChart2,
} from "lucide-react";

const processes = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Discovery Call",
    description:
      "We start with a free discovery call to understand your goals, challenges, and what the right kind of support looks like for you.",
    color: "#5A6B4F",
    features: ["Free consultation", "Goal setting", "Needs assessment", "No obligation"],
  },
  {
    step: "02",
    icon: Map,
    title: "Personalised Plan",
    description:
      "We build a tailored support plan, whether that's career guidance, counselling, coaching, or internship guidance, matched to your specific needs.",
    color: "#6B8FA3",
    features: ["Tailored plan", "Right-fit service", "Clear milestones", "Flexible scheduling"],
  },
  {
    step: "03",
    icon: Lightbulb,
    title: "One-on-One Support",
    description:
      "You work directly with a dedicated consultant through regular sessions, not a call centre, and not a one-size-fits-all template.",
    color: "#8FAE7A",
    features: ["Dedicated consultant", "Regular sessions", "Confidential", "Personal attention"],
  },
  {
    step: "04",
    icon: Cog,
    title: "Practical Tools & Resources",
    description:
      "We equip you with practical techniques, coaching tools, and resources you can keep using long after our sessions end.",
    color: "#6F8C5B",
    features: ["Practical techniques", "Take-home resources", "Real-world skills", "Ongoing access"],
  },
  {
    step: "05",
    icon: BarChart2,
    title: "Ongoing Check-ins",
    description:
      "We follow up regularly to track progress and adjust the plan as your needs evolve. Support doesn't end after the first session.",
    color: "#A8C4A2",
    features: ["Progress tracking", "Regular follow-up", "Plan adjustments", "Long-term support"],
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
          backgroundImage: "radial-gradient(circle, rgba(90, 107, 79, 0.04) 1px, transparent 1px)",
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
            style={{ background: "rgba(90, 107, 79, 0.08)", border: "1px solid rgba(90, 107, 79, 0.2)" }}
          >
            <span className="text-sm font-semibold text-[#5A6B4F] dark:text-[#A8C4A2]">How We Work</span>
          </div>
          <h2 className="section-title mb-4" style={{ color: "var(--foreground)" }}>
            Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8FAE7A 0%, #6B8FA3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Support Process
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            A simple, structured approach that delivers real support at every
            stage of your journey.
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {processes.slice(0, 4).map((p, i) => {
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

        {/* 5th item centered */}
        <div className="flex justify-center">
          {processes.slice(4).map((p, i) => {
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
