"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useSafeInView } from "@/hooks/useSafeInView";
import { Users2, ArrowRight, CheckCircle2 } from "lucide-react";

const roles = [
  "Educators & Lecturers",
  "Teachers & Tutors",
  "Moderators & Assessors",
  "Mentors & Counsellors",
  "Facilitators",
  "Quality Assurance Experts",
  "School Coordinators",
  "Administrators",
];

export default function ProfessionalNetworkSection() {
  const router = useRouter();
  const { ref, inView } = useSafeInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--section-alt)" }}
      ref={ref}
    >
      <div
        className="absolute top-0 right-0 w-[480px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(239, 179, 30, 0.14) 0%, transparent 70%)", filter: "blur(70px)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[420px] h-[360px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(15, 47, 87, 0.12) 0%, transparent 70%)", filter: "blur(70px)" }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={false}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(239, 179, 30, 0.12)", border: "1px solid rgba(239, 179, 30, 0.3)" }}
          >
            <Users2 className="w-4 h-4 text-[#C98F1B]" />
            <span className="text-sm font-semibold text-[#0F2F57] dark:text-[#B1B3B8]">For Education Professionals</span>
          </div>

          <h2 className="section-title mb-5" style={{ color: "var(--foreground)" }}>
            Join Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #14325E 0%, #EFB31E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Professional Network
            </span>
          </h2>



          <div className="flex flex-wrap justify-center gap-2.5 mb-10 max-w-3xl mx-auto">
            {roles.map((role, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-sm px-3.5 py-1.5 rounded-full"
                style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", color: "var(--foreground)" }}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C98F1B]" />
                {role}
              </span>
            ))}
          </div>

          <button
            onClick={() => router.push("/join-network")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg,#EFB31E,#C98F1B)", boxShadow: "0 6px 22px rgba(239,179,30,0.4)", color: "#0A1628" }}
          >
            Apply to Join Our Network
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
