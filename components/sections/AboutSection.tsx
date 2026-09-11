"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSafeInView } from "@/hooks/useSafeInView";
import {
  Target,
  Compass,
  Sparkles,
  Shield,
  TrendingUp,
  CheckCircle2,
  Users,
  Globe,
  Award,
  BookOpen,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const whyChooseUs = [
  "A full-service educational consultancy, for students, institutions, and the future",
  "Best Fit For Purpose: we do not do a one-size-fits-all approach",
  "From tuition and academic writing to institutional quality assurance and audits",
  "Career guidance, counselling, coaching, and mentorship for every student",
  "Modern educational technology training for staff and teachers",
  "Driven by integrity, innovation, and impact",
];

const trustStats = [
  { value: 500, suffix: "+", label: "Students Guided", icon: Users, color: "#5A6B4F" },
  { value: 200, suffix: "+", label: "Schools Served", icon: BookOpen, color: "#6B8FA3" },
  { value: 15, suffix: "+", label: "Years of Excellence", icon: Award, color: "#8FAE7A" },
  { value: 50, suffix: "+", label: "Countries Reached", icon: Globe, color: "#6F8C5B" },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We operate with complete transparency and ethical standards in everything we do, for students and institutions alike.",
    color: "#5A6B4F",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    desc: "We stay at the frontier of educational practice and technology, bringing fresh, modern approaches to every engagement.",
    color: "#6B8FA3",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    desc: "We pursue the highest standards in learning and institutional growth, continuously improving how we guide, strengthen, and build.",
    color: "#8FAE7A",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutSection() {
  const router = useRouter();
  const { ref, inView } = useSafeInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding relative overflow-hidden" style={{ background: "var(--background)" }}>
      {/* Subtle background */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(90, 107, 79, 0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerChildren}
          className="text-center mb-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(90, 107, 79, 0.08)", border: "1px solid rgba(90, 107, 79, 0.2)" }}>
            <span className="text-sm font-semibold text-[#5A6B4F] dark:text-[#A8C4A2]">About Us</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="section-title mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Guiding Minds, Strengthening{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8FAE7A 0%, #5A6B4F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Institutions
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Building futures, best fit for purpose.
          </motion.p>
        </motion.div>

        {/* About Us copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl mx-auto text-center mb-16 space-y-4"
        >
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            We are a full-service, purpose-driven educational consultancy offering
            educational solutions at every level, for students, for institutions,
            and for the future. We don&apos;t just consult on education. We help
            build better learners and stronger institutions.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            We bridge the gap between students, educators, and institutions by
            delivering tailored academic support, institutional consulting, and
            modern educational technology training. From tuition, writing, and
            proofreading to quality assurance, audits, and staff development, we
            ensure every learner and institution thrives. We also walk with
            students beyond the classroom through career guidance, counselling,
            and pathways into skills and trade. Whether it&apos;s in the classroom,
            the boardroom, or in life, we are here to guide, strengthen, and
            unlock potential.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerChildren}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {trustStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-5 rounded-2xl text-center border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${stat.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div className="text-3xl font-bold mb-1" style={{ color: "var(--foreground)" }}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium" style={{ color: "var(--muted)" }}>
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mission / Approach / Why Us */}
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-start mb-16">
          {/* Left: Mission & Approach */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Mission */}
            <div
              className="p-6 rounded-2xl border"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(90, 107, 79, 0.1)" }}
              >
                <Target className="w-6 h-6 text-[#5A6B4F]" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                Our Mission
              </h3>
              <p style={{ color: "var(--muted)", lineHeight: "1.7" }}>
                To empower and guide minds, strengthen institutions, and shape futures.
              </p>
            </div>

            {/* Approach */}
            <div
              className="p-6 rounded-2xl border"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(107, 143, 163, 0.1)" }}
              >
                <Compass className="w-6 h-6 text-[#6B8FA3]" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                Our Approach
              </h3>
              <p style={{ color: "var(--muted)", lineHeight: "1.7" }}>
                Best Fit For Purpose. We do not do a one size fits all. We do best fit.
              </p>
            </div>
          </motion.div>

          {/* Right: Why Choose Us checklist */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
              Why Clients Trust Us
            </h3>
            <p className="mb-8" style={{ color: "var(--muted)" }}>
              We combine deep expertise with a genuine passion for education to deliver
              results that exceed expectations.
            </p>

            <div className="space-y-4">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-[#8FAE7A]" />
                  <span style={{ color: "var(--foreground)" }}>{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              onClick={() => router.push("/contact")}
              className="mt-10 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #8FAE7A 0%, #5A6B4F 100%)",
                boxShadow: "0 4px 20px rgba(90, 107, 79, 0.3)",
              }}
            >
              Start Your Journey
            </motion.button>

            {/* Feature image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-8 relative rounded-2xl overflow-hidden"
              style={{ height: "220px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?w=800&h=400&q=80&auto=format&fit=crop"
                alt="A diverse group of students collaborating together around a laptop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 flex items-end p-5"
                style={{ background: "linear-gradient(to top, rgba(16,21,12,0.8) 0%, transparent 50%)" }}
              >
                <p className="text-white text-sm font-medium">
                  Growing African students and institutions from Botswana to the world
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-bold text-center mb-10"
            style={{ color: "var(--foreground)" }}
          >
            Our Core Values
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="p-6 rounded-2xl border text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                  style={{
                    background: "var(--card-bg)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                    style={{ background: `${v.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: v.color }} />
                  </div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>
                    {v.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
