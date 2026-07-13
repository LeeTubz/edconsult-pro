"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle, MapPin, GraduationCap, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: MapPin,
    title: "Built for Botswana & Africa",
    desc: "Our strategies are grounded in local context — we understand the educational landscape here in a way no foreign consultancy can.",
    color: "#2563eb",
  },
  {
    icon: GraduationCap,
    title: "Specialist Consultants, Not Generalists",
    desc: "Every client works with a dedicated specialist — not a call centre. Our consultants hold advanced degrees and lived experience in their fields.",
    color: "#7c3aed",
  },
  {
    icon: Lightbulb,
    title: "Outcomes You Can Measure",
    desc: "We set clear goals at the start of every engagement and report transparently on progress — because your results are our reputation.",
    color: "#d97706",
  },
];

export default function AboutPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section
      id="about-preview"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--background)" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — Image with floating badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1473649085228-583485e6e4d7?w=900&h=680&q=80&auto=format&fit=crop"
                alt="Students in a Botswana classroom engaged in learning"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* gradient overlay */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(4,12,31,0.25),transparent 60%)" }} />
            </div>

            {/* Floating credential badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 p-4 rounded-2xl shadow-xl flex items-center gap-3"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", backdropFilter: "blur(12px)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(37,99,235,0.12)" }}>
                <CheckCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-bold" style={{ color: "var(--foreground)" }}>Trusted Since 2009</div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>15+ years of excellence</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
                style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)" }}>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">About EduConsult Pro</span>
              </div>

              <h2 className="section-title mb-5" style={{ color: "var(--foreground)" }}>
                Botswana&apos;s Most Trusted{" "}
                <span style={{ background: "linear-gradient(135deg,#2563eb,#fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Educational Partner
                </span>
              </h2>

              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                For over 15 years, EduConsult Pro has worked alongside students, schools, and
                organisations to achieve educational outcomes that matter. We bring deep local
                knowledge, international standards, and genuine care to every engagement.
              </p>

              {/* Pillars */}
              <div className="space-y-5 mb-9">
                {pillars.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + i * 0.12, duration: 0.55 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `${p.color}12` }}>
                        <Icon className="w-5 h-5" style={{ color: p.color }} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>{p.title}</h4>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{p.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/about/our-story"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg,#2563eb,#1e40af)", boxShadow: "0 4px 20px rgba(37,99,235,0.3)" }}
                >
                  Our Full Story <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
