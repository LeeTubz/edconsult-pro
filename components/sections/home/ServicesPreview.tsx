"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSafeInView } from "@/hooks/useSafeInView";
import { BookOpen, ShieldCheck, Users, ClipboardCheck, Compass, ArrowRight, GraduationCap, Building2 } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const forStudents = [
  {
    icon: BookOpen,
    title: "Academic Support",
    description: "Tuition (IGCSE & IB) with global tutor matching, academic writing consultation, editing and proofreading, and research consultation.",
    color: "#1c4372",
    href: "/services/academic-support",
  },
  {
    icon: Compass,
    title: "Career Guidance, Counselling & Mentorship",
    description: "Subject-choice advice that pushes for the 'best fit', pathway mapping, university admissions, and counselling and mentorship for the whole student.",
    color: "#EFB31E",
    href: "/services/career-guidance",
  },
];

const forInstitutions = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Quality assurance and external moderation: benchmarking, policy review, audits, observations, and staff appraisal for institutions.",
    color: "#4A6B8A",
    href: "/services/quality-assurance",
  },
  {
    icon: Users,
    title: "Teacher and Staff Capacity Building and Mentorship",
    description: "Educational technology, plus mentorship in pedagogy, curriculum planning and assessment, and classroom lesson modelling and observation.",
    color: "#B1B3B8",
    href: "/services/educational-technology",
  },
  {
    icon: ClipboardCheck,
    title: "Institutional Audits and Visits",
    description: "Internal program and institutional audits and visits: scope development, compliance review, staff engagement, and clear reporting.",
    color: "#C98F1B",
    href: "/services/institutional-audits",
  },
];

function ServiceCard({ s, i, inView }: { s: (typeof forStudents)[number]; i: number; inView: boolean }) {
  const Icon = s.icon;
  return (
    <motion.div
      key={s.title}
      initial={false}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.07, duration: 0.55 }}
      className="h-full"
    >
      <TiltCard max={6} className="h-full" style={{ transformStyle: "preserve-3d" }}>
        <Link
          href={s.href}
          className="group relative block p-6 pt-7 rounded-2xl border overflow-hidden transition-shadow duration-300 hover:shadow-xl h-full"
          style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}55)` }} />
          <div
            className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ boxShadow: `0 16px 40px -12px ${s.color}45` }}
          />
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
            style={{ background: `${s.color}15` }}>
            <Icon className="w-6 h-6" style={{ color: s.color }} />
          </div>
          <h3 className="text-lg font-bold mb-2 font-display" style={{ color: "var(--foreground)" }}>{s.title}</h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{s.description}</p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all duration-200" style={{ color: s.color }}>
            Learn more <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>
      </TiltCard>
    </motion.div>
  );
}

export default function ServicesPreview() {
  const { ref, inView } = useSafeInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--section-alt)" }}
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(15, 47, 87,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={false}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(15, 47, 87,0.08)", border: "1px solid rgba(15, 47, 87,0.2)" }}>
            <span className="text-sm font-semibold text-[#0F2F57] dark:text-[#B1B3B8]">What We Offer</span>
          </div>
          <h2 className="section-title mb-4" style={{ color: "var(--foreground)" }}>
            Solutions for Students{" "}
            <span style={{ background: "linear-gradient(135deg,#14325E,#EFB31E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              & Institutions
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            From tuition and academic writing to institutional quality assurance,
            we offer a full suite of services, best fit for purpose, not one size fits all.
          </p>
        </motion.div>

        {/* For Students */}
        <div className="flex items-center gap-2.5 mb-5">
          <GraduationCap className="w-5 h-5" style={{ color: "#EFB31E" }} />
          <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--foreground)" }}>For Students</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {forStudents.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} inView={inView} />
          ))}
        </div>

        {/* For Institutions */}
        <div className="flex items-center gap-2.5 mb-5">
          <Building2 className="w-5 h-5" style={{ color: "#4A6B8A" }} />
          <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--foreground)" }}>For Institutions</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {forInstitutions.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i + forStudents.length} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={false}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="text-center"
        >
          <Link
            href="/services/career-guidance"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#0F2F57] text-[#0F2F57] hover:bg-[#0F2F57] hover:text-white font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
