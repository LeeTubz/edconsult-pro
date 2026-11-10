import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Compass } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="home-hero">
      <div className="editorial-shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Your next chapter starts here</p>
          <h1>Great potential.<br />The right guidance.<br /><em>A brighter future.</em></h1>
          <p className="hero-description">Education is a journey. You don&apos;t have to navigate it alone. We help students flourish and institutions grow, with support that fits you.</p>
          <div className="editorial-actions">
            <Link href="/contact" className="action-gold">Let&apos;s find your way <ArrowUpRight size={18} /></Link>
            <Link href="#services" className="action-text">Explore our services <ArrowRight size={17} /></Link>
          </div>
          <div className="hero-location"><span className="location-dot" /> Based in Botswana. Growing futures across Africa.</div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo"><Image quality={90} src="/images/students.jpg" alt="Two students smiling and studying together outdoors" fill sizes="(max-width: 800px) 100vw, 52vw" preload className="object-cover" /></div>
          <span className="photo-note">A little guidance. A world of possibility.</span>
          <div className="hero-photo-card"><BookOpen size={23} /><div><strong>Support for every chapter</strong><span>From classroom confidence to career clarity</span></div></div>
          <div className="hero-spark" aria-hidden="true">✳</div>
        </div>
      </div>
      <div className="hero-pathways editorial-shell">
        <Link href="/services/academic-support"><BookOpen /><div><strong>For students & families</strong><span>Learn with confidence. Plan with purpose.</span></div><ArrowUpRight /></Link>
        <Link href="/services/quality-assurance"><Compass /><div><strong>For schools & institutions</strong><span>Stronger people. Better learning.</span></div><ArrowUpRight /></Link>
      </div>
    </section>
  );
}
