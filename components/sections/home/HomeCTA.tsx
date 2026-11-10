import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function HomeCTA() {
  return <section className="closing-section"><div className="editorial-shell closing-grid">
    <div><p className="eyebrow">For students & families</p><h2>Your future is full<br />of possibility.</h2><p>Find your direction with academic support, career guidance, and someone who listens.</p><Link href="/contact" className="action-gold">Start a conversation <ArrowUpRight size={18} /></Link></div>
    <div><p className="eyebrow">For schools & institutions</p><h2>Build a stronger<br />learning community.</h2><p>Develop your people, strengthen your standards, and move your institution forward.</p><Link href="/contact" className="action-text">Let&apos;s work together <ArrowUpRight size={18} /></Link></div>
  </div></section>;
}
