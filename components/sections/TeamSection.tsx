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
  Globe2,
  PenLine,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const founder = {
  icon: Sparkles,
  title: "Founder & Visionary",
  tagline: "18+ Years: Industry & Education",
  description:
    "With 18 years of experience, 10 in industry and 8 as an educator, our Founder and Visionary brings a rare blend of academic depth and real-world insight to Platinum Accolades. A Master's-qualified higher education specialist and an IB Examiner in Film Studies, she has lectured across multiple universities, guided curriculum design and quality assurance for institutions, and consulted for BQA. Her vision drives our commitment to matching every student, tutor, and institution with their true best fit.",
  specialties: ["Curriculum Design", "IB Examiner", "Quality Assurance", "Published Author"],
  color: "#EFB31E",
  photo: "/founder-avatar.jpg",
  books: [
    { label: "Demystifying Assignment Writing", href: "https://www.amazon.com/Demystifying-Assignment-Writing-practical-assignment-ebook/dp/B08X7J3PQ7?ref_=litb_stb_nodl&nodl_android=1" },
    { label: "Dissertation Writing for Beginners", href: "https://www.amazon.com/DISSERTATION-WRITING-BEGINNERS-comprehensive-dissertation-ebook/dp/B08XK5F2RW?ref_=litb_stb_nodl&nodl_android=1" },
  ],
};

const consultants = [
  {
    icon: Globe2,
    title: "Tuition Consultant",
    tagline: "Matching Students & Tutors Across the Globe",
    description:
      "Matching students and tutors from across the globe, recommending the right tutor fit for your purpose, with tuition for IGCSE and IB at every level.",
    specialties: ["Global Tutor Matching", "IGCSE", "IB Programmes", "Best-Fit Coaching"],
    color: "#1c4372",
    photo: "https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?w=160&h=160&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    icon: PenLine,
    title: "Academic Writing and Research Consultant",
    tagline: "Writing, Editing & Research",
    description:
      "Supporting assignments, research proposals, dissertations, journal articles, and academic editing and proofreading for learners at every level.",
    specialties: ["Academic Writing", "Editing & Proofreading", "Research Consultation", "Dissertations"],
    color: "#0F2F57",
    photo: "https://images.unsplash.com/photo-1573497491207-618cc224f243?w=160&h=160&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    icon: Compass,
    title: "Career Guidance, Counselling & Mentorship Consultant",
    tagline: "Pathways, Counselling & Mentorship",
    description:
      "Helping students choose the right subjects and map an academic pathway, while supporting the academic, work, social, and spiritual sides of student life.",
    specialties: ["Career Clarity", "University Admissions", "Counselling", "Mentorship"],
    color: "#C98F1B",
    photo: "https://images.unsplash.com/photo-1757744705465-ea08b0ddc38a?w=160&h=160&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    icon: Cpu,
    title: "Educational Technology Consultant",
    tagline: "Staff Capacity Building & Mentorship",
    description:
      "Training and mentoring staff and educators via webinars, and consulting on navigating online classes, AI in education, and e-learning content creation.",
    specialties: ["Staff Webinars", "AI in Education", "Online Classes", "Content Creation"],
    color: "#B1B3B8",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=160&h=160&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance & External Moderation Consultant",
    tagline: "QA & External Moderation",
    description:
      "Promoting quality standards through benchmarking, policy review, audits and observations, and external moderation and staff appraisals.",
    specialties: ["Benchmarking", "Policy Review", "Audits & Observations", "External Moderation"],
    color: "#4A6B8A",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    icon: ClipboardCheck,
    title: "Institutional Audits and Visits Consultant",
    tagline: "Program Audits & On-Site Visits",
    description:
      "Developing audit scopes, conducting institutional visits, engaging with staff throughout the process, and compiling clear findings and recommendations.",
    specialties: ["Audit Scoping", "Institutional Visits", "Compliance Review", "5-Year Review Cycle"],
    color: "#14325E",
    photo: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?w=160&h=160&q=80&auto=format&fit=crop&crop=faces",
  },
];

function TeamCard({ c, i, inView, scrollToConsultation }: {
  c: typeof consultants[number] | typeof founder;
  i: number;
  inView: boolean;
  scrollToConsultation: () => void;
}) {
  const Icon = c.icon;
  const books = "books" in c ? c.books : undefined;
  return (
    <motion.div
      initial={false}
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

        {books && (
          <div className="flex flex-col gap-1.5 mb-4">
            {books.map((b, j) => (
              <a
                key={j}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium underline underline-offset-2 hover:no-underline"
                style={{ color: c.color }}
              >
                📖 {b.label} (Amazon)
              </a>
            ))}
          </div>
        )}

        <button onClick={scrollToConsultation}
          className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 hover:gap-2.5"
          style={{ color: c.color }}>
          Learn More <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}

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
          background: "radial-gradient(circle, rgba(15, 47, 87, 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-sm font-semibold text-[#0F2F57] dark:text-[#B1B3B8]">Our Expertise</span>
          </div>
          <h2 className="section-title mb-4" style={{ color: "var(--foreground)" }}>
            Specialised Support{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #14325E 0%, #0F2F57 100%)",
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

        {/* Founder & Visionary, featured */}
        <div className="mb-8 max-w-2xl mx-auto">
          <TeamCard c={founder} i={0} inView={inView} scrollToConsultation={scrollToConsultation} />
        </div>

        {/* 6 consultants in a unified grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {consultants.map((c, i) => (
            <TeamCard key={c.title} c={c} i={i + 1} inView={inView} scrollToConsultation={scrollToConsultation} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={false}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, #0F2545 0%, #14325E 100%)",
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
            className="px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, #EFB31E 0%, #C98F1B 100%)",
              boxShadow: "0 4px 20px rgba(239, 179, 30, 0.4)",
              color: "#0A1628",
            }}
          >
            Book Free Discovery Call
          </button>
        </motion.div>
      </div>
    </section>
  );
}
