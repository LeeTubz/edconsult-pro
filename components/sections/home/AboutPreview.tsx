import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
export default function AboutPreview() {
  return <section id="about-preview" className="section-padding editorial-shell story-grid">
    <div className="story-photo"><Image quality={90} src="/images/collaboration.jpg" alt="A diverse team collaborating around a table" fill sizes="(max-width: 700px) 100vw, 45vw" className="object-cover" /><span className="story-photo-caption">Big ambitions deserve thoughtful support.</span></div>
    <div><p className="eyebrow">Your partner in possibility</p><h2 className="editorial-title">More than advice.<br /><em>Someone in your corner.</em></h2><p className="editorial-lead">Every student has a different story. Every institution has a different ambition.</p><p>We bring academic expertise and real-world understanding together to help you take your next step. Based in Botswana and serving southern Africa, we offer support that fits your goals.</p><ul className="about-checks">{["Guidance grounded in your context", "Specialist support for students and institutions", "A personal approach: Best Fit For Purpose"].map(text => <li key={text}><Check size={17} />{text}</li>)}</ul><Link href="/about" className="action-text">Get to know Platinum Accolades <ArrowUpRight size={18} /></Link></div>
  </section>;
}
