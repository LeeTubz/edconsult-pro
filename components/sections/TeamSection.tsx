"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSafeInView } from "@/hooks/useSafeInView";
import {
  BookOpen,
  ShieldCheck,
  Cpu,
  ClipboardCheck,
  Compass,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const consultants = [
  {
    icon: BookOpen,
    title: "Academic Support Consultant",
    tagline: "Tuition, Writing & Research",
    description:
      "Delivering tuition (IGCSE & IB), academic writing consultation, editing and proofreading, and research consultation for learners at every level.",
    specialties: ["Tuition", "Academic Writing", "Editing & Proofreading", "Research Consultation"],
    color: "#8FAE7A",
    gradient: "from-[#8FAE7A] to-[#5a6b4f]",
    photo: "https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?w=160&h=160&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance Consultant",
    tagline: "QA & External Moderation",
    description:
      "Promoting quality standards through benchmarking, policy review, audits and observations, and external moderation and staff appraisals.",
    specialties: ["Benchmarking", "Policy Review", "Audits & Observations", "External Moderation"],
    color: "#5A6B4F",
    gradient: "from-[#5A6B4F] to-[#3a4534]",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    icon: Cpu,
    title: "Educational Technology Trainer",
    tagline: "Staff Capacity Building",
    description:
      "Training staff and educators via webinars, and consulting on navigating online classes, AI in education, and e-learning content creation.",
    specialties: ["Staff Webinars", "AI in Education", "Online Classes", "Content Creation"],
    color: "#A8C4A2",
    gradient: "from-[#A8C4A2] to-[#8FAE7A]",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=160&h=160&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    icon: ClipboardCheck,
    title: "Institutional Audit Consultant",
    tagline: "Program & Institutional Audits",
    description:
      "Developing audit scopes, engaging with staff throughout the process, and compiling clear findings, recommendations, and timelines.",
    specialties: ["Audit Scoping", "Compliance Review", "Reporting", "5-Year Review Cycle"],
    color: "#4A6B7A",
    gradient: "from-[#4A6B7A] to-[#2f434c]",
    photo: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?w=160&h=160&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    icon: Compass,
    title: "Career Guidance Consultant",
    tagline: "Career Clarity & Pathways",
    description:
      "Helping students choose the right subjects and map an academic pathway, from O-Level to post-university, with a focus on 'best fit', not university admission only.",
    specialties: ["Subject Choice Advice", "Alternative Pathways", "University Admissions", "Skills & Trade"],
    color: "#6B8FA3",
    gradient: "from-[#6B8FA3] to-[#3d5763]",
    photo: "https://images.unsplash.com/photo-1573497491207-618cc224f243?w=160&h=160&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    icon: HeartHandshake,
    title: "Counselling & Mentorship Consultant",
    tagline: "Academic, Work, Social & Spiritual Life",
    description:
      "Supporting students through academic life, work life and internships, social challenges, and, for those who want it, a balanced Christian student life.",
    specialties: ["Academic Life", "Work Life", "Social Life", "Spiritual Life"],
    color: "#6F8C5B",
    gradient: "from-[#6F8C5B] to-[#4a5842]",
    photo: "https://images.unsplash.com/photo-1757744705465-ea08b0ddc38a?w=160&h=160&q=80&auto=format&fit=crop&crop=faces",
  },
];

export default function TeamSection() {
  const router = useRouter();
  const { ref, inView } = useSafeInView({ triggerOnce: true, threshold: 0.05 });

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
          background: "radial-gradient(circle, rgba(90, 107, 79, 0.05) 0%, transparent 70%)",
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
            style={{ background: "rgba(90, 107, 79, 0.08)", border: "1px solid rgba(90, 107, 79, 0.2)" }}
          >
            <span className="text-sm font-semibold text-[#5A6B4F] dark:text-[#A8C4A2]">Our Expertise</span>
          </div>
          <h2 className="section-title mb-4" style={{ color: "var(--foreground)" }}>
            Specialized Support{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8FAE7A 0%, #5A6B4F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Services
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            Our team brings focused expertise across every dimension of student
            support, ready to guide you toward growth.
          </p>
        </motion.div>

        {/* 5 cards in a unified grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {consultants.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.55 }}
                className="group relative overflow-hidden rounded-2xl border p-6 cursor-pointer
                            transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
                style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
              >
                {/* Hover tint */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background: `linear-gradient(135deg,${c.color}08,${c.color}03)` }} />
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg,${c.color},transparent)` }} />

                <div className="relative">
                  <div className="relative w-14 h-14 mb-4 transition-transform duration-300 group-hover:scale-110">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2"
                      style={{ borderColor: `${c.color}40` }}>
                      <Image src={c.photo} alt={c.title} fill className="object-cover" sizes="56px" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center border-2"
                      style={{ background: c.color, borderColor: "var(--card-bg)" }}>
                      <Icon className="w-3 h-3 text-white" />
                    </div>
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
          transition={{ delay: 0.2, duration: 0.45 }}
          className="rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, #1c2417 0%, #2b3327 100%)",
          }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Not sure which service is right for you?
          </h3>
          <p className="text-white/60 mb-6">
            Book a free discovery call and our team will identify the perfect support pathway for your needs.
          </p>
          <button
            onClick={scrollToConsultation}
            className="px-8 py-4 rounded-full text-white font-semibold transition-all hover:shadow-lg hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, #8FAE7A 0%, #5A6B4F 100%)",
              boxShadow: "0 4px 20px rgba(90, 107, 79, 0.4)",
            }}
          >
            Book Free Discovery Call
          </button>
        </motion.div>
      </div>
    </section>
  );
}
