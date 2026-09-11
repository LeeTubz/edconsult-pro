"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSafeInView } from "@/hooks/useSafeInView";
import {
  User,
  School,
  CheckCircle,
  GraduationCap,
  Compass,
  BookOpen,
  Users,
  Cpu,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";

const clientSegments = [
  {
    id: "individuals",
    icon: User,
    label: "Students & Families",
    tagline: "Personalised guidance and academic support for students at every level",
    color: "#5A6B4F",
    services: [
      {
        icon: BookOpen,
        title: "Tuition (IGCSE & IB)",
        desc: "One-on-one and group tuition for O-Level, AS & A-Level, and all IB programmes.",
      },
      {
        icon: BookOpen,
        title: "Academic Writing & Research",
        desc: "Support for assignments, research proposals, dissertations, and academic editing and proofreading.",
      },
      {
        icon: Compass,
        title: "Career Clarity & Reality Checks",
        desc: "Subject-choice advice and pathway guidance that pushes for the 'best fit', not university admission only.",
      },
      {
        icon: GraduationCap,
        title: "University Admissions Assistance",
        desc: "Support with university admissions and queries, including personal statement coaching and interview prep.",
      },
      {
        icon: Users,
        title: "Counselling, Coaching & Mentorship",
        desc: "Confidential support across academic, work, social, and spiritual life, including internship guidance.",
      },
      {
        icon: School,
        title: "Alongside School Counsellors",
        desc: "We work together with school counsellors and advisors, not in competition with them, for the same goal.",
      },
    ],
  },
  {
    id: "schools",
    icon: School,
    label: "Schools & Institutions",
    tagline: "Quality assurance, audits, and technology training for institutions",
    color: "#6B8FA3",
    services: [
      {
        icon: ShieldCheck,
        title: "Quality Assurance & External Moderation",
        desc: "Benchmarking, policy and procedure review, audits and observations, and external moderation exercises.",
      },
      {
        icon: ClipboardCheck,
        title: "Internal Program & Institutional Audits",
        desc: "Audit scope development, compliance review, and clear reporting on a five-year review cycle.",
      },
      {
        icon: Users,
        title: "Staff & Teacher Capacity Building",
        desc: "Practical training that builds real, lasting confidence with classroom and administrative technology.",
      },
      {
        icon: Cpu,
        title: "Navigating AI in Education & Administration",
        desc: "Guidance on using AI thoughtfully and effectively in teaching and institutional administration.",
      },
      {
        icon: Cpu,
        title: "Content Creation for E-Learning",
        desc: "Support for planning and producing engaging video and audio lessons for e-learning.",
      },
      {
        icon: Compass,
        title: "Career Guidance & Counselling Programmes",
        desc: "On-site career clarity and student wellbeing programmes delivered directly to your students.",
      },
    ],
  },
];

export default function ClientsSection() {
  const [activeTab, setActiveTab] = useState("individuals");
  const { ref, inView } = useSafeInView({ triggerOnce: true, threshold: 0.1 });

  const activeSegment = clientSegments.find((s) => s.id === activeTab)!;

  return (
    <section
      id="clients"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--section-alt)" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(90, 107, 79, 0.08)", border: "1px solid rgba(90, 107, 79, 0.2)" }}
          >
            <span className="text-sm font-semibold text-[#5A6B4F] dark:text-[#A8C4A2]">Who We Serve</span>
          </div>
          <h2 className="section-title mb-4" style={{ color: "var(--foreground)" }}>
            Solutions for Every{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8FAE7A 0%, #6B8FA3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Client
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            Whether you're a student or family seeking personal guidance, or a school
            looking to build staff capacity and support your students, we have the
            right service for you.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          {clientSegments.map((seg) => {
            const Icon = seg.icon;
            const isActive = activeTab === seg.id;
            return (
              <button
                key={seg.id}
                onClick={() => setActiveTab(seg.id)}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300"
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, ${seg.color}, ${seg.color}dd)`
                    : "var(--card-bg)",
                  color: isActive ? "white" : "var(--muted)",
                  border: isActive ? "none" : "1px solid var(--card-border)",
                  boxShadow: isActive ? `0 8px 24px ${seg.color}40` : "none",
                  transform: isActive ? "translateY(-2px)" : "none",
                }}
              >
                <Icon className="w-5 h-5" />
                {seg.label}
              </button>
            );
          })}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Segment header */}
            <div
              className="p-8 rounded-2xl mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
              style={{
                background: `linear-gradient(135deg, ${activeSegment.color}12 0%, ${activeSegment.color}06 100%)`,
                border: `1px solid ${activeSegment.color}20`,
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: `${activeSegment.color}20` }}
              >
                {(() => {
                  const Icon = activeSegment.icon;
                  return <Icon className="w-7 h-7" style={{ color: activeSegment.color }} />;
                })()}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1" style={{ color: "var(--foreground)" }}>
                  {activeSegment.label}
                </h3>
                <p style={{ color: "var(--muted)" }}>{activeSegment.tagline}</p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeSegment.services.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    style={{
                      background: "var(--card-bg)",
                      borderColor: "var(--card-border)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ background: `${activeSegment.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: activeSegment.color }} />
                    </div>
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: activeSegment.color }} />
                      <h4 className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
                        {svc.title}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed ml-6" style={{ color: "var(--muted)" }}>
                      {svc.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
