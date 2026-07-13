"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  User,
  School,
  Building2,
  CheckCircle,
  GraduationCap,
  Brain,
  BookOpen,
  Users,
  BarChart3,
  Cpu,
  Briefcase,
  Globe,
} from "lucide-react";

const clientSegments = [
  {
    id: "individuals",
    icon: User,
    label: "Individuals & Families",
    tagline: "Personalized guidance for students at every level",
    color: "#2563eb",
    services: [
      {
        icon: GraduationCap,
        title: "College Admissions Counseling",
        desc: "Strategic support for undergraduate and graduate school applications to competitive universities worldwide.",
      },
      {
        icon: BookOpen,
        title: "Higher Education Advising",
        desc: "Expert guidance on program selection, financial aid, scholarships, and long-term academic planning.",
      },
      {
        icon: School,
        title: "K-12 School Placement",
        desc: "Finding the right school environment to match each student's learning style, interests, and aspirations.",
      },
      {
        icon: Brain,
        title: "Learning Disability Support",
        desc: "Specialized advocacy and resources for students with learning differences to thrive academically.",
      },
      {
        icon: BookOpen,
        title: "Academic Planning",
        desc: "Comprehensive academic roadmaps ensuring students build the profiles needed for their goals.",
      },
      {
        icon: Users,
        title: "Counselor Collaboration",
        desc: "Working alongside school counselors to provide complementary, expert support for student success.",
      },
    ],
  },
  {
    id: "schools",
    icon: School,
    label: "Schools & Districts",
    tagline: "Elevating institutional performance and outcomes",
    color: "#7c3aed",
    services: [
      {
        icon: BookOpen,
        title: "Curriculum Development",
        desc: "Design and review of rigorous, standards-aligned curricula that engage students and drive achievement.",
      },
      {
        icon: Users,
        title: "Teacher Professional Development",
        desc: "Impactful training programs that build teacher capacity and improve classroom effectiveness.",
      },
      {
        icon: BarChart3,
        title: "Accreditation Support",
        desc: "Comprehensive preparation and guidance through regional and national accreditation processes.",
      },
      {
        icon: Globe,
        title: "Strategic Planning",
        desc: "Long-term institutional planning that aligns resources, stakeholders, and goals for sustainable growth.",
      },
      {
        icon: Brain,
        title: "Special Education Evaluation",
        desc: "Expert assessment and program development for students requiring specialized educational support.",
      },
      {
        icon: School,
        title: "School Consulting",
        desc: "Holistic school improvement consulting covering leadership, culture, operations, and academics.",
      },
    ],
  },
  {
    id: "organizations",
    icon: Building2,
    label: "Organizations & Businesses",
    tagline: "Corporate education solutions that drive results",
    color: "#d97706",
    services: [
      {
        icon: Briefcase,
        title: "Employee Training Programs",
        desc: "Custom learning and development programs that enhance workforce skills and organizational performance.",
      },
      {
        icon: Cpu,
        title: "EdTech Integration",
        desc: "Strategic integration of educational technology tools to modernize training and learning systems.",
      },
      {
        icon: BarChart3,
        title: "Educational Market Research",
        desc: "In-depth research and analysis of educational markets, trends, and opportunities for strategic decision-making.",
      },
      {
        icon: BookOpen,
        title: "Corporate Training Design",
        desc: "Instructional design services that create engaging, effective corporate learning experiences.",
      },
      {
        icon: Globe,
        title: "Policy & Compliance Advisory",
        desc: "Expert guidance on educational regulations, policies, and compliance requirements across jurisdictions.",
      },
      {
        icon: BarChart3,
        title: "Impact Assessment",
        desc: "Measuring the ROI and educational impact of organizational learning and development investments.",
      },
    ],
  },
];

export default function ClientsSection() {
  const [activeTab, setActiveTab] = useState("individuals");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

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
            style={{ background: "rgba(37, 99, 235, 0.08)", border: "1px solid rgba(37, 99, 235, 0.2)" }}
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Who We Serve</span>
          </div>
          <h2 className="section-title mb-4" style={{ color: "var(--foreground)" }}>
            Solutions for Every{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Client
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            Whether you're an individual seeking personal guidance, a school looking to
            improve, or an organization investing in education — we have the expertise.
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
