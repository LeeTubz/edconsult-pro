import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import { pageMetadata } from "@/lib/seo";
import {
  Compass, BookOpen, ShieldCheck, ClipboardCheck,
  CheckCircle, ArrowRight, Users, Star,
} from "lucide-react";

const serviceData = {
  "academic-support": {
    badge: "Academic Support Services",
    title: (
      <>
        Academic{" "}
        <span style={{ background: "linear-gradient(135deg,#B1B3B8,#4A6B8A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Support
        </span>
      </>
    ),
    titleText: "Academic Support",
    subtitle:
      "Tuition and global tutor matching, academic writing, editing and proofreading, and research consultation: tailored academic support with purpose, for every learner.",
    accentColor: "#8a9bb5",
    icon: BookOpen,
    metaTitle: "Academic Support Services: Tuition, Writing, Editing & Research",
    metaDesc:
      "Tuition and tutor matching for IGCSE and IB, academic writing consultation, editing and proofreading, and research consultation from Platinum Accolades.",
    headline: "Academic Support With Purpose",
    intro:
      "From the classroom to the research desk, our academic support services are built for real learners with real deadlines. Whether you need subject tuition, help structuring a dissertation, a second pair of eyes on your writing, or guidance through a research project, we tailor our support to fit, not a one-size-fits-all approach.",
    offerings: [
      { title: "Tuition", desc: "One-on-one and group tuition for IGCSE (O-Level, AS and A-Level) and all IB programmes (PYP, MYP, IB Diploma), across subjects. We match students and tutors from across the globe, recommending the right tutor fit for your purpose." },
      { title: "Academic Writing Consultation", desc: "Support for assignments, research proposals, dissertations, journal articles, review papers, and conference papers." },
      { title: "Academic Editing & Proofreading", desc: "Careful editing and proofreading of academic work, papers, and documents before submission." },
      { title: "Research Consultation", desc: "One-on-one or group research consultation, from proposal development through methodology and write-up." },
    ],
    stats: [
      { value: "50+", label: "Students guided" },
      { value: "98%", label: "Would recommend us" },
      { value: "18+", label: "Years combined experience" },
      { value: "100%", label: "Confidential support" },
    ],
    clients: ["IGCSE and IB students", "University and postgraduate researchers", "Students preparing dissertations and papers", "Anyone needing academic editing support"],
    color: "#1c4372",
  },
  "quality-assurance": {
    badge: "Quality Assurance & External Moderation",
    title: (
      <>
        Quality Assurance{" "}
        <span style={{ background: "linear-gradient(135deg,#4A6B8A,#EFB31E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          & Moderation
        </span>
      </>
    ),
    titleText: "Quality Assurance & External Moderation",
    subtitle:
      "Promoting quality standards throughout your institution through research, benchmarking, documentation review, audits, and external moderation.",
    accentColor: "#4A6B8A",
    icon: ShieldCheck,
    metaTitle: "Quality Assurance & External Moderation for Educational Institutions",
    metaDesc:
      "Quality assurance, benchmarking, policy review, audits, and external moderation services for educational institutions from Platinum Accolades.",
    headline: "Promoting Quality Standards Throughout Your Institution",
    intro:
      "Quality doesn't happen by accident. It's built through research, clear standard operating procedures, and honest review. We work alongside educational institutions to benchmark against best practice, review policies and procedures, and conduct the audits and appraisals that keep standards high.",
    offerings: [
      { title: "Best-Practice Research & Benchmarking", desc: "Research into best practices, benchmarked against other institutions, to strengthen the management of quality processes." },
      { title: "Institutional Document Review", desc: "Review of policies, procedures, website content, and other materials intended for stakeholder consumption." },
      { title: "Standard Operating Procedures", desc: "Guidance for developing standard operating procedures for departments that don't yet have them." },
      { title: "Audits, Visits & Observations", desc: "Surprise and organised visits, audits, and observations in departments, meetings, and live or online classes." },
      { title: "Non-Compliance Investigations", desc: "Investigation, on request, of non-compliance with or violations of institutional policies, procedures, and regulations." },
      { title: "External Moderation & Staff Appraisals", desc: "External moderation exercises where required, and external staff/teacher appraisal exercises that gather feedback from learners." },
    ],
    stats: [
      { value: "5+", label: "Institutions supported" },
      { value: "100%", label: "Confidential process" },
      { value: "18+", label: "Years combined experience" },
      { value: "5-year", label: "Audit review cycle" },
    ],
    clients: ["Schools and colleges", "Higher education institutions", "Skills centres", "Institutions preparing for external review"],
    color: "#4A6B8A",
  },
  "educational-technology": {
    badge: "Teacher and Staff Capacity Building and Mentorship",
    title: (
      <>
        Teacher & Staff{" "}
        <span style={{ background: "linear-gradient(135deg,#B1B3B8,#EFB31E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Capacity Building & Mentorship
        </span>
      </>
    ),
    titleText: "Teacher and Staff Capacity Building and Mentorship",
    subtitle:
      "Educational technology, plus hands-on mentorship in pedagogy, curriculum planning, assessment, and classroom practice.",
    accentColor: "#B1B3B8",
    icon: Users,
    metaTitle: "Teacher and Staff Capacity Building and Mentorship: EdTech, Pedagogy & Classroom Support",
    metaDesc:
      "Educational technology guidance, mentorship in pedagogy, curriculum planning and assessment, and classroom lesson modelling and observation for teachers and staff.",
    headline: "Real Capacity Building for Teachers and Staff",
    intro:
      "Growing teachers and staff takes more than a one-off workshop. We combine practical educational technology guidance with hands-on mentorship, in the classroom and alongside your staff, so capacity actually sticks.",
    offerings: [
      { title: "Educational Technology", desc: "Navigating online classes and e-learning, AI in education and administration, and content creation for e-learning, from planning through production." },
      { title: "Pedagogy, Curriculum & Assessment Mentorship", desc: "Supporting and mentoring teachers in pedagogy, curriculum planning, and assessment." },
      { title: "Classroom Modelling & Observation", desc: "Modelling lessons in classrooms, observing teachers, and giving feedback for professional growth." },
    ],
    stats: [
      { value: "5+", label: "Institutions supported" },
      { value: "10K+", label: "Students impacted" },
      { value: "3x", label: "Avg. engagement increase" },
      { value: "8+", label: "Platforms supported" },
    ],
    clients: ["Schools seeking digital transformation", "Teachers adopting new tools", "Institutions delivering remote learning", "Organisations running ODL programmes"],
    color: "#B1B3B8",
  },
  "institutional-audits": {
    badge: "Institutional Audits and Visits",
    title: (
      <>
        Institutional Audits{" "}
        <span style={{ background: "linear-gradient(135deg,#EFB31E,#C98F1B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          and Visits
        </span>
      </>
    ),
    titleText: "Institutional Audits and Visits",
    subtitle:
      "Developing audit scopes, engaging with staff throughout the process, conducting on-site visits, and compiling clear, actionable audit reports.",
    accentColor: "#C98F1B",
    icon: ClipboardCheck,
    metaTitle: "Institutional Audits and Visits for Educational Institutions",
    metaDesc:
      "Audit scope development, on-site institutional visits, compliance review, and audit reporting for educational institutions from Platinum Accolades.",
    headline: "Audits and Visits That Lead to Real Improvement",
    intro:
      "An audit should leave an institution stronger, not just scrutinised. We develop clear audit scopes, conduct organised and surprise institutional visits, work transparently with staff throughout the process, and compile findings into practical recommendations with agreed timelines, reviewed on a five-year cycle.",
    offerings: [
      { title: "Audit Scope Development", desc: "Developing audit scopes and generating audit working documents, communicated clearly to the relevant process owners." },
      { title: "Compliance Review", desc: "Reviewing compliance with regulatory requirements and institutional policies and procedures." },
      { title: "Institutional Visits & Observations", desc: "Organised and surprise on-site visits, audits, and observations in departments, meetings, and live or online classes." },
      { title: "Staff Engagement Throughout", desc: "Engaging with staff throughout the audit to ensure conformity with applicable policy and procedure at every phase." },
      { title: "Findings & Reporting", desc: "Consolidating results, compiling audit reports, and discussing findings, recommendations, and timelines." },
      { title: "Monitoring & Review Cycle", desc: "Monitoring implementation of agreed recommendations and establishing audit review dates within a five-year cycle." },
    ],
    stats: [
      { value: "25+", label: "Audits completed" },
      { value: "100%", label: "Reports delivered on time" },
      { value: "5-year", label: "Review cycle" },
      { value: "18+", label: "Years combined experience" },
    ],
    clients: ["School boards and principals", "Education departments", "Institutions preparing for review", "Institutions building internal audit capacity"],
    color: "#C98F1B",
  },
  "career-guidance": {
    badge: "Career Guidance, Counselling & Mentorship",
    title: (
      <>
        Career Guidance, Counselling{" "}
        <span style={{ background: "linear-gradient(135deg,#B1B3B8,#EFB31E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          & Mentorship
        </span>
      </>
    ),
    titleText: "Career Guidance, Counselling & Mentorship",
    subtitle:
      "Subject-choice advice and reality checks that push for the 'best fit', academic pathway mapping and university admissions support, plus counselling and mentorship across academic, work, social, and spiritual life.",
    accentColor: "#EFB31E",
    icon: Compass,
    metaTitle: "Career Guidance, Counselling & Mentorship: Pathways, Admissions & Whole-Student Support",
    metaDesc:
      "Career clarity, academic pathway mapping, university admissions assistance, skills & trade guidance, and counselling, coaching and mentorship for students in Botswana and Africa.",
    headline: "Career Guidance, Counselling & Mentorship, Together",
    intro:
      "From classroom to career, and everything a student carries in between, we help students choose subjects and directions with real clarity, pushing for the 'best fit' rather than university admission only. We work alongside school counsellors and advisors, not in competition with them, mapping academic and alternative pathways from O-Level through to post-university, while supporting students through the academic, work, social, and spiritual sides of student life.",
    offerings: [
      { title: "Career Clarity & Reality Checks", desc: "Honest, practical advice on subject choice and career direction, pushing for the 'best fit' rather than university admission only." },
      { title: "Works Alongside School Counsellors", desc: "We don't compete with school counsellors and advisors. We work together with them for a common cause." },
      { title: "Academic Pathway Mapping", desc: "Mapping an academic pathway, and 'alternative pathways', from O-Level all the way through to post-university." },
      { title: "University Admissions Assistance", desc: "Assistance with university admissions and queries, including personal statement coaching and interview preparation." },
      { title: "Skills & Trade (Non-Academic Pathway)", desc: "Guidance into skills and trade pathways for students who aren't academically inclined. There's a place for everyone in a knowledge- and practical-based economy." },
      { title: "Academic Life: Studying for Success", desc: "Practical coaching and mentorship to help students study effectively and achieve academic success." },
      { title: "Work Life: Navigating Internships", desc: "Guidance for students transitioning into and navigating internships and early work experience." },
      { title: "Social Life: Navigating Challenges & Balance", desc: "Support for navigating social challenges and striking a healthy balance in student life." },
      { title: "Spiritual Life: Disciplines of a Balanced Christian Student", desc: "Mentorship in the spiritual disciplines that support a balanced Christian student life, for students who want this dimension of support." },
    ],
    stats: [
      { value: "50+", label: "Students guided" },
      { value: "98%", label: "Would recommend us" },
      { value: "100%", label: "Confidential support" },
      { value: "18+", label: "Years combined experience" },
    ],
    clients: ["School leavers choosing subjects", "Families navigating university applications", "Students starting internships", "Students seeking counselling or spiritual mentorship"],
    color: "#EFB31E",
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
  return pageMetadata({
    title: data.metaTitle,
    description: data.metaDesc,
    path: `/services/${service}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const data = serviceData[service as ServiceSlug];
  if (!data) notFound();
  const Icon = data.icon;
  const otherServices = slugs.filter(s => s !== service).slice(0, 3);
  return <main className="service-detail-page">
    <PageHero badge={data.badge} title={data.title} breadcrumbs={[{ label: data.badge }]} primaryCta={{ label: "Book Free Consultation", href: "/contact" }} secondaryCta={{ label: "All Services", href: "/#services" }} />
    <section className="section-padding editorial-shell">
      <div className="service-introduction">
        <div><p className="eyebrow"><Icon size={18} />Our expertise</p><h2 className="editorial-title">{data.headline}</h2><p className="service-intro-copy">{data.intro}</p><Link href="/contact" className="action-gold">Talk to a consultant <ArrowRight size={17} /></Link></div>
        <div className="service-facts"><p className="eyebrow">At a glance</p><div>{data.stats.map(stat => <article key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></article>)}</div></div>
      </div>
      <div className="service-offerings"><div className="editorial-section-heading"><p className="eyebrow">Tailored to your needs</p><h2 className="editorial-title">What&apos;s included.</h2></div><div className="service-offerings-grid">
        {data.offerings.map((item, i) => <article key={item.title} className="service-offering-card" data-featured={i === 0}><div className="service-offering-top"><span><Icon size={24} strokeWidth={1.5} /></span><small>0{i + 1}</small></div><h3>{item.title}</h3><p>{item.desc}</p><span className="service-offering-rule" aria-hidden="true" /></article>)}
      </div></div>
      <div className="service-audience"><div><p className="eyebrow">The right fit</p><h2>Who this service<br />is for.</h2></div><ul>{data.clients.map(client => <li key={client}><CheckCircle size={19} />{client}</li>)}</ul></div>
    </section>
    <WhatWeDoSection />
    <section className="section-padding editorial-shell"><div className="editorial-section-heading"><p className="eyebrow">Keep exploring</p><h2 className="editorial-title">More ways we can help.</h2></div><div className="related-services-grid">{otherServices.map(slug => { const related = serviceData[slug]; const RelatedIcon = related.icon; return <Link key={slug} href={"/services/" + slug} className="related-service-card"><RelatedIcon size={30} strokeWidth={1.4} /><h3>{related.titleText}</h3><span>Explore service <ArrowRight size={17} /></span></Link>; })}</div></section>
  </main>;
}
