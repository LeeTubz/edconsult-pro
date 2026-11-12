import { GraduationCap, HeartHandshake, Quote } from "lucide-react";
const testimonials = [
  { name: "Vayera Ndoda", initials: "VN", category: "Academic Support", icon: GraduationCap, quote: "The tuition sessions helped me understand difficult topics and approach my schoolwork with more confidence." },
  { name: "Shammah Ndoda", initials: "SN", category: "Academic Support", icon: GraduationCap, quote: "The academic support helped me build better study habits and work towards stronger grades." },
  { name: "Muku Munemo", initials: "MM", category: "Guidance & Counselling", icon: HeartHandshake, quote: "Having someone listen helped me talk through my concerns and think more clearly about my next steps." },
  { name: "Timothy Chanaiwa", initials: "TC", category: "Guidance & Counselling", icon: HeartHandshake, quote: "The guidance sessions helped me reflect on my goals and consider a path that fits my interests." },
  { name: "Theo Chanaiwa", initials: "TC", category: "Guidance & Counselling", icon: HeartHandshake, quote: "The counselling sessions gave me space to ask questions and feel supported through challenges." },
  { name: "Chris Chanaiwa", initials: "CC", category: "Guidance & Counselling", icon: HeartHandshake, quote: "The guidance helped me feel more prepared to make decisions about my future." },
];
export default function ResultsSection() {
  return <section id="results" className="section-padding testimonial-section"><div className="editorial-shell">
    <div className="testimonial-heading"><div><p className="eyebrow">Testimonials</p><h2 className="editorial-title">Every journey<br /><em>has a story.</em></h2></div></div>
    <div className="testimonial-grid individual-testimonials">{testimonials.map(({ name, initials, category, icon: Icon, quote }, i) => <article key={name} className="testimonial-card" data-tone={i % 3 === 1 ? 1 : 0}>
      <div className="testimonial-card-heading"><span className="testimonial-category"><Icon size={17} />{category}</span><Quote size={29} strokeWidth={1.2} aria-hidden="true" /></div>
      <p className="testimonial-draft-label">Draft · pending client approval</p>
      <blockquote><p>&ldquo;{quote}&rdquo;</p></blockquote>
      <div className="testimonial-author"><div className="testimonial-initials" aria-hidden="true"><span>{initials}</span></div><div><span className="testimonial-prepared-for">Suggested wording for</span><h3>{name}</h3></div></div>
    </article>)}</div>
    <p className="testimonial-approval-note">These are suggested testimonial drafts. Each person must approve their wording before it is presented as verified feedback.</p>
  </div></section>;
}
