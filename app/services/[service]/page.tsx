import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import HomeCTA from "@/components/sections/home/HomeCTA";
import {
  GraduationCap, School, BookOpen, Brain, Layers, Cpu, BarChart3,
  CheckCircle, ArrowRight, Users, Star,
} from "lucide-react";

const serviceData = {
  "higher-education": {
    badge: "Higher Education Consulting",
    title: (
      <>
        University &amp;{" "}
        <span style={{ background: "linear-gradient(135deg,#60a5fa,#fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Higher Education
        </span>
      </>
    ),
    titleText: "University & Higher Education",
    subtitle:
      "Expert guidance on university admissions, graduate programs, scholarships, and international study — from the University of Botswana to the world's top institutions.",
    accentColor: "#2563eb",
    icon: GraduationCap,
    metaTitle: "Higher Education Consulting — University Admissions & Scholarships",
    metaDesc:
      "Expert guidance on university admissions, graduate programs, and scholarship applications for students across Botswana and Africa.",
    headline: "Open Doors to the World's Best Universities",
    intro:
      "Navigating the path to higher education has never been more competitive — or more full of opportunity. Our higher education specialists work one-on-one with students and families to craft compelling applications, identify the right institutions, and secure funding that makes ambitions achievable.",
    offerings: [
      { title: "University Selection", desc: "Personalised shortlisting of undergraduate and postgraduate programmes matched to your academic profile, career goals, and budget." },
      { title: "Application Strategy", desc: "End-to-end application support — from personal statements and references to deadline management and interview coaching." },
      { title: "Scholarship Sourcing", desc: "Identification and application support for local, regional, and international scholarships, bursaries, and grants." },
      { title: "Graduate Admissions", desc: "Specialist support for MBA, LLM, PhD, and professional master's applications at leading global institutions." },
      { title: "Student Visa Guidance", desc: "Step-by-step support for UK, US, EU, and South African student visa applications, including documentation checklists." },
      { title: "Pre-Departure Coaching", desc: "Cultural preparation, financial planning, and accommodation guidance for students heading abroad." },
    ],
    stats: [
      { value: "500+", label: "Students placed" },
      { value: "98%", label: "Acceptance rate" },
      { value: "40+", label: "Partner universities" },
      { value: "$2M+", label: "Scholarships secured" },
    ],
    clients: ["School leavers applying to university", "Students seeking postgraduate study", "Working professionals pursuing MBAs", "Families planning international education"],
    color: "#2563eb",
  },
  "school-placement": {
    badge: "School Placement Services",
    title: (
      <>
        K-12{" "}
        <span style={{ background: "linear-gradient(135deg,#a78bfa,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          School Placement
        </span>
      </>
    ),
    titleText: "K-12 School Placement",
    subtitle:
      "Find the right school for your child — from government and private institutions to boarding and international schools — matched to their learning style, strengths, and aspirations.",
    accentColor: "#7c3aed",
    icon: School,
    metaTitle: "School Placement — K-12 & Boarding School Consulting",
    metaDesc:
      "Find the right school for your child with expert K-12 placement consulting across Botswana, Africa, and international boarding schools.",
    headline: "The Right School Changes Everything",
    intro:
      "Choosing a school is one of the most important decisions a family makes. Our school placement specialists take the time to understand your child's personality, learning style, and long-term goals — then match them with institutions where they will genuinely flourish.",
    offerings: [
      { title: "Needs Assessment", desc: "In-depth evaluation of your child's academic profile, social-emotional needs, interests, and learning style." },
      { title: "School Shortlisting", desc: "Curated selection of government, private, boarding, and international schools matched to your child's profile." },
      { title: "Application Management", desc: "Full application coordination — from school tours and entrance exams to interview preparation and submissions." },
      { title: "Boarding School Consulting", desc: "Expert guidance on regional and international boarding schools, including pastoral care considerations." },
      { title: "International School Advice", desc: "Comparison of IB, Cambridge, and national curriculum international schools for expatriate and local families." },
      { title: "Transition Support", desc: "Settling-in coaching and ongoing support to ensure a smooth transition into a new school environment." },
    ],
    stats: [
      { value: "300+", label: "Children placed" },
      { value: "50+", label: "School partnerships" },
      { value: "95%", label: "Family satisfaction" },
      { value: "15+", label: "Years of expertise" },
    ],
    clients: ["Parents of primary school children", "Families relocating to Botswana", "Expatriate families", "Parents seeking boarding options"],
    color: "#7c3aed",
  },
  "academic-consulting": {
    badge: "Academic Consulting",
    title: (
      <>
        Academic{" "}
        <span style={{ background: "linear-gradient(135deg,#34d399,#059669)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Consulting
        </span>
      </>
    ),
    titleText: "Academic Consulting",
    subtitle:
      "Personalised academic planning, study skills coaching, test preparation, and performance support to unlock every student's true potential.",
    accentColor: "#059669",
    icon: BookOpen,
    metaTitle: "Academic Consulting — Study Skills, Test Prep & Academic Planning",
    metaDesc:
      "Personalised academic consulting services including academic planning, study skills coaching, IELTS/SAT test preparation, and performance support.",
    headline: "Unlock Every Student's Full Academic Potential",
    intro:
      "Every student learns differently. Our academic consultants design bespoke plans that combine goal-setting, evidence-based study techniques, subject-specific coaching, and mindset development — helping students perform at their best in school, exams, and beyond.",
    offerings: [
      { title: "Academic Planning", desc: "Structured learning roadmaps aligned to each student's goals, timelines, and current performance levels." },
      { title: "Study Skills Coaching", desc: "Techniques for time management, note-taking, active recall, exam strategy, and avoiding burnout." },
      { title: "Test Preparation", desc: "Intensive preparation for IELTS, TOEFL, SAT, ACT, PSLE, BGCSE, and A-Level examinations." },
      { title: "Subject Tutoring", desc: "One-on-one tutoring in Mathematics, Science, English, Accounting, and other key subjects." },
      { title: "University Essay Coaching", desc: "Personal statement and application essay coaching that brings out each student's unique voice and story." },
      { title: "Performance Monitoring", desc: "Regular progress reviews and adaptive adjustments to keep students on track and motivated." },
    ],
    stats: [
      { value: "200+", label: "Students coached" },
      { value: "1.5x", label: "Avg. grade improvement" },
      { value: "92%", label: "Test score improvement" },
      { value: "100%", label: "University placement rate" },
    ],
    clients: ["Secondary school students", "A-Level and IB students", "University applicants", "Students preparing for standardised tests"],
    color: "#059669",
  },
  "special-education": {
    badge: "Special Education Services",
    title: (
      <>
        Special{" "}
        <span style={{ background: "linear-gradient(135deg,#fca5a5,#dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Education
        </span>
      </>
    ),
    titleText: "Special Education",
    subtitle:
      "Dedicated expert support for students with diverse learning needs — including IEP development, learning disability advocacy, and inclusive education planning.",
    accentColor: "#dc2626",
    icon: Brain,
    metaTitle: "Special Education Consulting — IEP, Learning Disabilities & Inclusion",
    metaDesc:
      "Expert special education consulting services including IEP development, learning disability advocacy, and inclusive education support across Botswana.",
    headline: "Every Child Deserves the Right Support",
    intro:
      "Students with diverse learning needs deserve more than a one-size-fits-all approach. Our special education specialists are trained to identify challenges early, build personalised support frameworks, and advocate powerfully for students within school systems and beyond.",
    offerings: [
      { title: "Learning Needs Assessment", desc: "Comprehensive psychoeducational evaluation to identify learning profiles, strengths, and areas needing support." },
      { title: "IEP Development", desc: "Creation and review of Individualised Education Plans tailored to each student's specific goals and needs." },
      { title: "School Advocacy", desc: "Working with schools and educators on behalf of students to ensure appropriate accommodations and resources." },
      { title: "Dyslexia & Dyscalculia Support", desc: "Specialist coaching and evidence-based interventions for students with reading and numeracy challenges." },
      { title: "ADHD & Executive Function Coaching", desc: "Structured strategies to support focus, organisation, impulse control, and task completion." },
      { title: "Inclusive Education Planning", desc: "Guidance for institutions on creating genuinely inclusive learning environments that serve all students." },
    ],
    stats: [
      { value: "150+", label: "Students supported" },
      { value: "100%", label: "IEP success rate" },
      { value: "30+", label: "Partner schools" },
      { value: "10+", label: "Specialist consultants" },
    ],
    clients: ["Families of children with learning differences", "Schools developing inclusion policies", "Teachers supporting diverse learners", "Government education departments"],
    color: "#dc2626",
  },
  "curriculum-development": {
    badge: "Curriculum Development",
    title: (
      <>
        Curriculum{" "}
        <span style={{ background: "linear-gradient(135deg,#fbbf24,#d97706)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Development
        </span>
      </>
    ),
    titleText: "Curriculum Development",
    subtitle:
      "Evidence-based curriculum design, standards alignment, and programme evaluation for schools and educational institutions seeking measurable academic excellence.",
    accentColor: "#d97706",
    icon: Layers,
    metaTitle: "Curriculum Development — Educational Programme Design & Evaluation",
    metaDesc:
      "Expert curriculum development services: evidence-based design, standards alignment, programme evaluation, and teacher training across Botswana and Africa.",
    headline: "Curriculum That Drives Real Learning Outcomes",
    intro:
      "A great curriculum is the foundation of every high-performing school. Our curriculum specialists bring international expertise and local context together to design programmes that engage students, empower teachers, and deliver measurable academic results.",
    offerings: [
      { title: "Curriculum Audit & Review", desc: "Comprehensive review of existing curriculum for alignment with national standards, learning objectives, and best practices." },
      { title: "New Curriculum Design", desc: "Development of subject syllabi, learning progressions, and assessment frameworks from scratch or adapted from global models." },
      { title: "Standards Alignment", desc: "Mapping curriculum to Cambridge, IB, BGCSE, or other national and international educational frameworks." },
      { title: "Assessment Development", desc: "Design of formative and summative assessments, rubrics, and reporting tools that accurately measure learning." },
      { title: "Teacher Training", desc: "Professional development workshops to equip teachers with the skills to deliver new curriculum with confidence." },
      { title: "Programme Evaluation", desc: "Data-driven evaluation of curriculum effectiveness, including student outcome analysis and continuous improvement cycles." },
    ],
    stats: [
      { value: "80+", label: "Programmes developed" },
      { value: "25+", label: "Schools served" },
      { value: "60%", label: "Avg. outcome improvement" },
      { value: "5+", label: "Countries reached" },
    ],
    clients: ["Private and government schools", "NGOs running education programmes", "Ministries of education", "International schools seeking localisation"],
    color: "#d97706",
  },
  "educational-technology": {
    badge: "Educational Technology",
    title: (
      <>
        Educational{" "}
        <span style={{ background: "linear-gradient(135deg,#22d3ee,#0891b2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Technology
        </span>
      </>
    ),
    titleText: "Educational Technology",
    subtitle:
      "Strategic integration of LMS platforms, AI-powered learning tools, and digital transformation frameworks to modernise institutions and enhance learning outcomes.",
    accentColor: "#0891b2",
    icon: Cpu,
    metaTitle: "Educational Technology Consulting — LMS, AI & Digital Transformation",
    metaDesc:
      "Strategic EdTech consulting: LMS implementation, AI-powered learning tools, digital transformation roadmaps, and teacher training for modern institutions.",
    headline: "Future-Proof Your Institution with the Right Technology",
    intro:
      "Technology is reshaping education at every level. Our EdTech consultants help institutions move beyond simply adopting tools — we design integrated digital ecosystems that improve pedagogy, reduce teacher workload, and deliver personalised learning experiences at scale.",
    offerings: [
      { title: "LMS Selection & Implementation", desc: "Expert evaluation and deployment of Learning Management Systems including Moodle, Canvas, Google Classroom, and Microsoft Teams Education." },
      { title: "AI Learning Tools Integration", desc: "Strategic adoption of AI-powered tutoring, adaptive assessment, and content creation tools aligned to institutional goals." },
      { title: "Digital Transformation Roadmap", desc: "Phased, practical technology adoption plans that match your institution's capacity, budget, and ambitions." },
      { title: "Edtech Training Programmes", desc: "Comprehensive teacher and administrator training to ensure confident, effective use of new technology." },
      { title: "Data Analytics for Learning", desc: "Implementation of learning analytics dashboards that give educators actionable insight into student progress." },
      { title: "Digital Inclusion Strategy", desc: "Planning for equitable technology access, including device programmes, connectivity solutions, and offline-capable tools." },
    ],
    stats: [
      { value: "40+", label: "Institutions transformed" },
      { value: "10K+", label: "Students impacted" },
      { value: "3x", label: "Avg. engagement increase" },
      { value: "8+", label: "LMS platforms supported" },
    ],
    clients: ["Schools seeking digital transformation", "Universities implementing LMS", "NGOs delivering remote learning", "Government digital education initiatives"],
    color: "#0891b2",
  },
  "strategic-planning": {
    badge: "Strategic Planning",
    title: (
      <>
        Institutional{" "}
        <span style={{ background: "linear-gradient(135deg,#2dd4bf,#0f766e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Strategic Planning
        </span>
      </>
    ),
    titleText: "Institutional Strategic Planning",
    subtitle:
      "Institutional strategic planning, accreditation preparation, data analytics, and change management for sustained educational leadership and excellence.",
    accentColor: "#0f766e",
    icon: BarChart3,
    metaTitle: "Strategic Planning — Institutional Strategy, Accreditation & Change Management",
    metaDesc:
      "Comprehensive strategic planning for educational institutions: strategic plans, accreditation readiness, data analytics, and change management consulting.",
    headline: "Build the Institution You've Always Envisioned",
    intro:
      "The most successful educational institutions don't leave their future to chance. Our strategic planning consultants work alongside school leaders, boards, and education ministries to design bold yet practical strategies that drive sustained excellence, accreditation success, and institutional growth.",
    offerings: [
      { title: "Strategic Plan Development", desc: "Facilitated strategic planning process — from stakeholder consultation and vision-setting to action plans with clear KPIs and accountability frameworks." },
      { title: "Accreditation Preparation", desc: "Comprehensive readiness support for national and international accreditation bodies, including self-study documentation and on-site preparation." },
      { title: "Institutional Data Analytics", desc: "Design and implementation of data collection, analysis, and reporting systems to drive evidence-based institutional decision-making." },
      { title: "Change Management", desc: "Structured frameworks for leading organisational change — minimising resistance and building broad stakeholder buy-in for strategic initiatives." },
      { title: "Leadership Coaching", desc: "Executive coaching for school principals, deputy heads, and education administrators to strengthen strategic leadership capacity." },
      { title: "Performance Benchmarking", desc: "Comparative analysis against regional and international benchmarks to identify competitive positioning and growth opportunities." },
    ],
    stats: [
      { value: "60+", label: "Strategic plans delivered" },
      { value: "100%", label: "Accreditation success rate" },
      { value: "20+", label: "Ministries advised" },
      { value: "15+", label: "Years in practice" },
    ],
    clients: ["School boards and principals", "Education ministries and departments", "Universities and colleges", "NGOs and development organisations"],
    color: "#0f766e",
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
          { label: "Services", href: "/services/higher-education" },
          { label: data.badge },
        ]}
        primaryCta={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCta={{ label: "All Services", href: "/services/higher-education" }}
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
              href="/services/higher-education"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              View all 7 services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <HomeCTA />
    </main>
  );
}
