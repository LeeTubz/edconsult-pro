import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import HomeCTA from "@/components/sections/home/HomeCTA";
import {
  Compass, Users2, PenLine, Briefcase, Cpu,
  CheckCircle, ArrowRight, Users, Star,
} from "lucide-react";

const serviceData = {
  "career-guidance": {
    badge: "Career Guidance",
    title: (
      <>
        Career{" "}
        <span style={{ background: "linear-gradient(135deg,#8FAE7A,#5A6B4F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Guidance
        </span>
      </>
    ),
    titleText: "Career Guidance",
    subtitle:
      "Subject-choice advice and reality checks that push for the 'best fit' — not university admission only — plus academic pathway mapping and university admissions support.",
    accentColor: "#5A6B4F",
    icon: Compass,
    metaTitle: "Career Guidance — Subject Choice, Pathways & University Admissions",
    metaDesc:
      "Career clarity and reality checks, academic pathway mapping from O-Level to post-university, and university admissions support for students in Botswana and Africa.",
    headline: "Find the Path That Actually Fits",
    intro:
      "Choosing subjects, careers, and universities can feel overwhelming — and most advice pushes toward one narrow idea of success. Our career guidance consultants work alongside students, and their school counsellors, to build a clear, honest picture of where their strengths and interests point — mapping pathways that go beyond 'get into university' to what will genuinely fit.",
    offerings: [
      { title: "Career Clarity & Reality Checks", desc: "Honest, practical conversations about subject choice and career direction — pushing for the 'best fit', not university admission only." },
      { title: "Works Alongside School Counsellors", desc: "We don't compete with school counsellors and advisors — we work together with them for the same goal: the student's best outcome." },
      { title: "Academic Pathway Mapping", desc: "Mapping an academic pathway — and alternative pathways — from O-Level all the way through to post-university." },
      { title: "University Admissions Assistance", desc: "Support with university admissions and queries, so families aren't navigating the process alone." },
      { title: "Personal Statement Coaching", desc: "One-on-one coaching to help students write personal statements that reflect their genuine voice and story." },
      { title: "Interview Preparation", desc: "Practice and coaching to help students walk into admissions interviews with confidence." },
    ],
    stats: [
      { value: "500+", label: "Students guided" },
      { value: "98%", label: "Would recommend us" },
      { value: "40+", label: "Pathways mapped" },
      { value: "15+", label: "Years combined experience" },
    ],
    clients: ["School leavers choosing subjects", "Students planning post-O-Level pathways", "Families navigating university applications", "Students seeking alternative pathways"],
    color: "#5A6B4F",
  },
  "student-counselling": {
    badge: "Student Counselling",
    title: (
      <>
        Student{" "}
        <span style={{ background: "linear-gradient(135deg,#A8C4A2,#6B8FA3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Counselling
        </span>
      </>
    ),
    titleText: "Student Counselling",
    subtitle:
      "Support for the social and academic sides of student life — navigating challenges and striking a balance while studying for success.",
    accentColor: "#6B8FA3",
    icon: Users2,
    metaTitle: "Student Counselling — Social & Academic Life Support",
    metaDesc:
      "Confidential student counselling covering social life and academic life — helping students navigate challenges and study for success.",
    headline: "A Space to Talk, Balance, and Grow",
    intro:
      "Academic success rarely happens in isolation from everything else going on in a student's life. Our counsellors give students a confidential, supportive space to work through social pressures and academic stress alike — building the balance and habits that let them study for success without burning out.",
    offerings: [
      { title: "Social Life Support", desc: "Guidance for navigating friendships, social pressure, and the challenges of student social life." },
      { title: "Academic Life Coaching", desc: "Practical support for studying effectively and staying on track academically." },
      { title: "Balance & Wellbeing", desc: "Helping students strike a healthy balance between social, academic, and personal life." },
      { title: "Confidential One-on-One Sessions", desc: "A safe, private space for students to talk through whatever they're navigating." },
      { title: "Study Habit Building", desc: "Practical routines and habits that make studying for success sustainable, not stressful." },
      { title: "Ongoing Check-ins", desc: "Regular follow-up so support continues beyond a single conversation." },
    ],
    stats: [
      { value: "300+", label: "Students supported" },
      { value: "95%", label: "Report improved balance" },
      { value: "100%", label: "Confidential support" },
      { value: "10+", label: "Specialist counsellors" },
    ],
    clients: ["Students navigating social pressures", "Students balancing academic and personal life", "Parents seeking support for their child", "Students needing a confidential space"],
    color: "#6B8FA3",
  },
  "coaching": {
    badge: "Coaching",
    title: (
      <>
        Academic Writing{" "}
        <span style={{ background: "linear-gradient(135deg,#8FAE7A,#5A6B4F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Coaching
        </span>
      </>
    ),
    titleText: "Coaching",
    subtitle:
      "Mastering academic writing at college and university level — assignment writing, research projects, and dissertations.",
    accentColor: "#8FAE7A",
    icon: PenLine,
    metaTitle: "Coaching — Academic Writing for College & University",
    metaDesc:
      "Academic writing coaching for assignments, research projects, and dissertations at college and university level.",
    headline: "Master Academic Writing, One Draft at a Time",
    intro:
      "Strong academic writing is a skill, not a talent you're born with — and most students are never taught it directly. Our coaching sessions work one-on-one with students to build the structure, argument, and academic voice needed for assignments, research projects, and dissertations at college and university level.",
    offerings: [
      { title: "Assignment Writing Coaching", desc: "Structured, one-on-one coaching through the assignment writing process, from outline to final draft." },
      { title: "Research Project Support", desc: "Guidance through planning, structuring, and writing up research projects." },
      { title: "Dissertation Coaching", desc: "Sustained support through the dissertation process — structure, argument, and academic style." },
      { title: "Academic Style & Referencing", desc: "Building the academic writing conventions and referencing skills examiners expect." },
      { title: "Draft Review & Feedback", desc: "Detailed, constructive feedback on drafts before submission." },
      { title: "Writing Confidence Building", desc: "Helping students move from anxious about writing to genuinely confident in it." },
    ],
    stats: [
      { value: "200+", label: "Students coached" },
      { value: "1.5x", label: "Avg. writing improvement" },
      { value: "92%", label: "Assignment score improvement" },
      { value: "80+", label: "Dissertations supported" },
    ],
    clients: ["University and college students", "Postgraduate researchers", "Students writing dissertations", "Students preparing major assignments"],
    color: "#8FAE7A",
  },
  "navigating-internship": {
    badge: "Navigating Internship",
    title: (
      <>
        Navigating{" "}
        <span style={{ background: "linear-gradient(135deg,#8FAE7A,#4a5842)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Internship
        </span>
      </>
    ),
    titleText: "Navigating Internship",
    subtitle:
      "Practical guidance for students transitioning into and succeeding in internships and early work experience.",
    accentColor: "#6F8C5B",
    icon: Briefcase,
    metaTitle: "Navigating Internship — Work Life Guidance for Students",
    metaDesc:
      "Practical guidance helping students transition into internships and early work experience with confidence.",
    headline: "Your First Step Into Work Life, Supported",
    intro:
      "The jump from classroom to workplace is one of the biggest transitions a student makes — and it rarely comes with instructions. Our internship guidance helps students prepare for, navigate, and get the most out of internships and early work experience, so that first step into work life is a confident one.",
    offerings: [
      { title: "Internship Readiness", desc: "Preparing students for what to expect and how to make a strong first impression." },
      { title: "Workplace Transition Support", desc: "Practical guidance for adjusting from classroom life to workplace expectations." },
      { title: "Professional Conduct Coaching", desc: "Building the professional habits and communication skills workplaces expect." },
      { title: "Navigating Challenges at Work", desc: "Support for working through the inevitable early challenges of a first internship." },
      { title: "Work-Life Balance Guidance", desc: "Helping students manage the balance between internship demands and personal life." },
      { title: "Reflection & Next Steps", desc: "Helping students reflect on their internship experience and plan their next move." },
    ],
    stats: [
      { value: "150+", label: "Students placed in internships" },
      { value: "100%", label: "Success rate" },
      { value: "30+", label: "Partner organisations" },
      { value: "10+", label: "Industries covered" },
    ],
    clients: ["Students starting their first internship", "Recent graduates entering the workplace", "Students choosing between internship offers", "Young professionals early in their careers"],
    color: "#6F8C5B",
  },
  "educational-technology": {
    badge: "Educational Technology",
    title: (
      <>
        Educational{" "}
        <span style={{ background: "linear-gradient(135deg,#A8C4A2,#6B8FA3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Technology
        </span>
      </>
    ),
    titleText: "Educational Technology",
    subtitle:
      "Staff capacity building and training via webinars, plus consultancy on ODL and e-learning, and video/audio content creation.",
    accentColor: "#A8C4A2",
    icon: Cpu,
    metaTitle: "Educational Technology — Staff Training, ODL & E-Learning",
    metaDesc:
      "Staff capacity building and training via webinars, plus consultancy on ODL, e-learning, and video/audio content creation for classrooms.",
    headline: "Build Real Capacity for Digital Learning",
    intro:
      "Technology only helps learning when the people using it are genuinely equipped for it. Our educational technology service builds staff capacity through practical training and webinars, and consults on open and distance learning (ODL), e-learning, and creating effective video and audio lessons.",
    offerings: [
      { title: "Staff Capacity Building", desc: "Practical training that builds real, lasting confidence with classroom and administrative technology." },
      { title: "Training via Webinars", desc: "Accessible webinar-based training for staff and teachers, wherever they are." },
      { title: "ODL & E-Learning Consultancy", desc: "Guidance on setting up and running effective open and distance learning and e-learning programmes." },
      { title: "Video Lesson Content Creation", desc: "Support for planning and producing engaging video lessons for e-learning." },
      { title: "Audio Lesson Content Creation", desc: "Guidance on producing clear, effective audio lessons for remote and blended learning." },
      { title: "Digital Classroom Strategy", desc: "Practical planning for integrating technology into everyday teaching and learning." },
    ],
    stats: [
      { value: "40+", label: "Institutions trained" },
      { value: "10K+", label: "Students impacted" },
      { value: "3x", label: "Avg. engagement increase" },
      { value: "8+", label: "Platforms supported" },
    ],
    clients: ["Schools seeking digital transformation", "Teachers adopting new tools", "Institutions delivering remote learning", "Organisations running ODL programmes"],
    color: "#A8C4A2",
  },
};

type ServiceSlug = keyof typeof serviceData;
const slugs = Object.keys(serviceData) as ServiceSlug[];

export function generateStaticParams() {
  return slugs.map((service) => ({ service }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params;
  const data = serviceData[service as ServiceSlug];
  if (!data) return { title: "Service Not Found" };
  return {
    title: data.metaTitle,
    description: data.metaDesc,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const data = serviceData[service as ServiceSlug];
  if (!data) notFound();

  const Icon = data.icon;
  const otherServices = slugs.filter((s) => s !== service).slice(0, 3);

  return (
    <main>
      <PageHero
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Services", href: "/services/career-guidance" },
          { label: data.badge },
        ]}
        primaryCta={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCta={{ label: "All Services", href: "/services/career-guidance" }}
        accentColor={data.accentColor}
      />

      {/* Intro + Stats */}
      <section className="section-padding" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left: headline + intro */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
                style={{ background: `${data.color}12`, border: `1px solid ${data.color}30` }}
              >
                <Icon className="w-4 h-4" style={{ color: data.color }} />
                <span className="text-sm font-semibold" style={{ color: data.color }}>{data.badge}</span>
              </div>
              <h2 className="font-bold mb-5" style={{ fontSize: "clamp(1.5rem,2vw+1rem,2.25rem)", color: "var(--foreground)", lineHeight: 1.2 }}>
                {data.headline}
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                {data.intro}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg,${data.color},${data.color}cc)`, boxShadow: `0 4px 20px ${data.color}40` }}
              >
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            {/* Right: stats */}
            <div className="grid grid-cols-2 gap-4">
              {data.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border text-center"
                  style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
                >
                  <div className="text-3xl font-black mb-1" style={{ color: data.color }}>{stat.value}</div>
                  <div className="text-sm font-medium" style={{ color: "var(--muted)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Offerings grid */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8" style={{ color: "var(--foreground)" }}>What's Included</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.offerings.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                  style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: data.color }} />
                    <div>
                      <h4 className="font-semibold mb-1.5 text-sm" style={{ color: "var(--foreground)" }}>{item.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who it's for */}
          <div
            className="rounded-2xl p-8 lg:p-10"
            style={{ background: `${data.color}08`, border: `1px solid ${data.color}20` }}
          >
            <div className="flex items-center gap-3 mb-5">
              <Users className="w-5 h-5" style={{ color: data.color }} />
              <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>Who This Service Is For</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {data.clients.map((client, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <Star className="w-3.5 h-3.5 shrink-0" style={{ color: data.color }} />
                  <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <WhatWeDoSection />

      {/* Other services */}
      <section className="section-padding" style={{ background: "var(--section-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>Explore Other Services</h2>
            <p className="text-base" style={{ color: "var(--muted)" }}>We offer a full range of educational consulting services tailored to your needs.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {otherServices.map((slug) => {
              const s = serviceData[slug];
              const SIcon = s.icon;
              return (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="group flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${s.color}15` }}>
                    <SIcon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>{s.badge}</h4>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: s.color }}>
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center">
            <Link
              href="/services/career-guidance"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              View all 5 services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <HomeCTA />
    </main>
  );
}
