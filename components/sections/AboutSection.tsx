import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, ShieldCheck, Sparkles, TrendingUp, Ear, Search, Network, Sprout } from "lucide-react";
const values = [
  { icon: ShieldCheck, title: "Integrity", text: "Honest guidance, ethical practice, and transparency in every relationship." },
  { icon: Sparkles, title: "Innovation", text: "Fresh thinking and modern educational tools that make learning more meaningful." },
  { icon: TrendingUp, title: "Impact", text: "A focus on meaningful progress for each learner, educator, and institution." },
];
const stepIcons = [Ear, Search, Network, Sprout];
const steps = [
  ["Listen", "We get to know your goals, your challenges, and what matters to you."],
  ["Understand", "We explore the support and expertise that will make the biggest difference."],
  ["Connect", "We build a pathway with the right guidance, tools, and specialist support."],
  ["Grow", "We walk alongside you, reviewing progress and adapting as you move forward."],
];
export default function AboutSection() {
  return (
    <div id="about" className="about-editorial">
      <section className="section-padding editorial-shell story-grid">
        <div className="story-photo"><Image quality={90} src="/images/mentoring.jpg" alt="A team exchanging ideas and learning from one another" fill sizes="(max-width: 800px) 100vw, 45vw" className="object-cover" /><span className="story-photo-caption">Better learning begins with people.</span></div>
        <div><p className="eyebrow">Who we are</p><h2 className="editorial-title">The right support.<br /><em>A world of possibility.</em></h2><p className="editorial-lead">We believe that better futures begin with understanding the person behind the potential.</p><p>Platinum Accolades is a purpose-driven educational consultancy based in Gaborone, Botswana. We connect students, educators, and institutions with the guidance they need to thrive.</p><p>From tuition, academic writing, and research to quality assurance, institutional audits, and teacher development, our work bridges the classroom and the wider world. Career guidance, counselling, and mentorship help us support the whole student.</p><Link href="/contact" className="action-text">Meet your next chapter <ArrowUpRight size={18} /></Link></div>
      </section>
      <section className="purpose-section"><div className="editorial-shell purpose-grid"><div><p className="eyebrow">Our purpose</p><h2 className="editorial-title">Education with direction.<br />Progress with purpose.</h2><Compass size={48} strokeWidth={1} /></div><div className="purpose-statements"><article><span>01 / Our mission</span><h3>To empower and guide minds, strengthen institutions, and shape futures.</h3></article><article><span>02 / Our approach</span><h3>Best Fit For Purpose.</h3><p>Every journey is different. We tailor our support to the learner or institution, with care for their goals, context, and next steps.</p></article></div></div></section>
      <section className="section-padding editorial-shell"><div className="editorial-section-heading"><p className="eyebrow">What guides us</p><h2 className="editorial-title">Values that turn<br />guidance into growth.</h2></div><div className="value-grid">{values.map(({ icon: Icon, title, text }, i) => <article className="value-panel" key={title}><div><Icon size={28} strokeWidth={1.5} /><span>0{i + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="approach-section section-padding"><div className="editorial-shell"><div className="editorial-section-heading"><p className="eyebrow">How we work</p><h2 className="editorial-title">A human approach.<br /><em>A clear path forward.</em></h2><p>Thoughtful conversations. Practical guidance. Support that grows with you.</p></div><div className="approach-grid">{steps.map(([title, text], i) => { const Icon = stepIcons[i]; return <article key={title}><div className="process-card-top"><span className="step-number">0{i + 1}</span><Icon size={27} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p></article>; })}</div></div></section>
    </div>
  );
}
