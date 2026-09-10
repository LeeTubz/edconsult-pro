"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Users,
  Target,
  TrendingUp,
  Lightbulb,
  BarChart3,
  HeartHandshake,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const reasons = [
  {
    icon: Users,
    title: "Expert Consultants",
    description:
      "Our team comprises credentialed professionals with experience across academic support, institutional consulting, career guidance, and student counselling.",
    color: "#5A6B4F",
    stat: "25+",
    statLabel: "Expert Consultants",
  },
  {
    icon: Target,
    title: "Personalized Guidance",
    description:
      "Every engagement begins with deep listening. We tailor every strategy, recommendation, and solution to your specific context, goals, and challenges.",
    color: "#6B8FA3",
    stat: "100%",
    statLabel: "Customized Solutions",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Strategy",
    description:
      "Our recommendations are grounded in rigorous research, benchmarking, and educational data analytics — ensuring every decision is evidence-based.",
    color: "#8FAE7A",
    stat: "98%",
    statLabel: "Success Rate",
  },
  {
    icon: Lightbulb,
    title: "Educational Innovation",
    description:
      "We stay at the frontier of educational research, technology, and policy — bringing cutting-edge approaches to every engagement.",
    color: "#6F8C5B",
    stat: "50+",
    statLabel: "Countries Reached",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description:
      "With a track record of 500+ students guided and transformative school partnerships, our outcomes speak for themselves.",
    color: "#4A6B7A",
    stat: "500+",
    statLabel: "Students Guided",
  },
  {
    icon: HeartHandshake,
    title: "Professional Support",
    description:
      "We are committed partners throughout your entire journey — providing responsive, professional support long after the initial engagement.",
    color: "#A8C4A2",
    stat: "24/7",
    statLabel: "Support Available",
  },
];


export default function WhyChooseUsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="why-us"
      className="section-padding relative overflow-hidden"
      ref={ref}
    >
      {/* Dark background section */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #10150c 0%, #1c2417 50%, #10150c 100%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(143, 174, 122, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(143, 174, 122, 0.04) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-150 h-150 pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(143, 174, 122, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(107, 143, 163, 0.1)", border: "1px solid rgba(107, 143, 163, 0.25)" }}
          >
            <span className="text-sm font-semibold text-[#A8C4A2]">The Olive Shoots Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Why Leading Clients{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A8C4A2 0%, #6B8FA3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Choose Us
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            When it comes to your education and future, you deserve more than average.
            Here's what sets us apart.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.09, duration: 0.6 }}
                className="group relative p-7 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.07)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background: `radial-gradient(circle at top left, ${r.color}12, transparent 60%)` }}
                />

                {/* Top border glow */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${r.color}, transparent)` }}
                />

                <div className="relative">
                  {/* Icon + stat side by side */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ background: `${r.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: r.color }} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-white">{r.stat}</div>
                      <div className="text-xs text-white/40">{r.statLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">{r.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{r.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-4">
          {[
            { value: 500, suffix: "+", label: "Students Guided" },
            { value: 200, suffix: "+", label: "Schools Served" },
            { value: 98,  suffix: "%", label: "Satisfaction Rate" },
            { value: 15,  suffix: "+", label: "Years of Excellence" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center p-5 rounded-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.07)",
              }}
            >
              <div className="text-3xl font-black text-white">
                <AnimatedCounter end={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs text-white/45 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
