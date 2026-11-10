"use client";

import { motion } from "framer-motion";
import { useSafeInView } from "@/hooks/useSafeInView";
import { GraduationCap, HeartHandshake } from "lucide-react";
import { BrandMotif } from "@/components/ui/BrandMotif";

const results = [
  {
    icon: GraduationCap,
    category: "Academic Support",
    names: "Vayera & Shammah Ndoda",
    outcome: "Improved their academic grades through our tuition and academic support programme.",
    color: "#0F2F57",
  },
  {
    icon: HeartHandshake,
    category: "Guidance & Counselling",
    names: "Muku Munemo, Timothy Chanaiwa, Theo Chanaiwa & Chris Chanaiwa",
    outcome: "Took part in our Guidance and Counselling sessions.",
    color: "#EFB31E",
  },
];

export default function ResultsSection() {
  const { ref, inView } = useSafeInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="results"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--background)" }}
      ref={ref}
    >
      <BrandMotif
        className="absolute pointer-events-none hidden lg:block"
        style={{ bottom: "-10%", right: "-6%", width: 300, height: "auto", color: "#EFB31E", opacity: 0.07, transform: "rotate(14deg)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={false}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(15, 47, 87, 0.08)", border: "1px solid rgba(15, 47, 87, 0.2)" }}
          >
            <span className="text-sm font-semibold text-[#0F2F57] dark:text-[#B1B3B8]">Real Results</span>
          </div>
          <h2 className="section-title mb-4" style={{ color: "var(--foreground)" }}>
            Students We&apos;ve{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #14325E 0%, #0F2F57 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Helped
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            A few of the students and families who've worked with us.
          </p>
        </motion.div>

        {/* Results grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {results.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                initial={false}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-7 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${r.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: r.color }} />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: r.color }}>
                  {r.category}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>
                  {r.names}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {r.outcome}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
