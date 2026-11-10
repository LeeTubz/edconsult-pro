import { GraduationCap, HeartHandshake, Quote } from "lucide-react";

const testimonials = [
  {
    icon: GraduationCap,
    category: "Academic Support",
    names: "Vayera & Shammah Ndoda",
    initials: ["VN", "SN"],
    quote: "The tuition and academic support helped us understand our subjects better and improve our grades.",
  },
  {
    icon: HeartHandshake,
    category: "Guidance & Counselling",
    names: "Muku Munemo, Timothy Chanaiwa, Theo Chanaiwa & Chris Chanaiwa",
    initials: ["MM", "TC", "TC", "CC"],
    quote: "The guidance and counselling sessions gave us space to talk through our challenges and feel supported as we considered our next steps.",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="section-padding testimonial-section">
      <div className="editorial-shell">
        <div className="testimonial-heading">
          <div>
            <p className="eyebrow">Testimonials</p>
            <h2 className="editorial-title">Every journey<br /><em>has a story.</em></h2>
          </div>
          <p>Personal support. Meaningful progress.<br />Stories from our student community.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(({ icon: Icon, category, names, initials, quote }, i) => (
            <article key={category} className="testimonial-card" data-tone={i}>
              <div className="testimonial-card-heading">
                <span className="testimonial-category"><Icon size={18} />{category}</span>
                <Quote size={36} strokeWidth={1.2} aria-hidden="true" />
              </div>
              <p className="testimonial-draft-label">Draft quote · pending client approval</p>
              <blockquote><p>&ldquo;{quote}&rdquo;</p></blockquote>
              <div className="testimonial-author">
                <div className="testimonial-initials" aria-hidden="true">{initials.map((initial, j) => <span key={j}>{initial}</span>)}</div>
                <div><span className="testimonial-prepared-for">Suggested wording for</span><h3>{names}</h3></div>
              </div>
            </article>
          ))}
        </div>
        <p className="testimonial-approval-note">These are suggested testimonial drafts, not verified client statements. The named clients must approve the wording before it is presented as their feedback.</p>
      </div>
    </section>
  );
}
