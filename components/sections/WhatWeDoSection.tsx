import { ClipboardList, Map, Lightbulb, Cog, BarChart2 } from "lucide-react";

const processes = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Discovery Call",
    description:
      "We start with a free discovery call to understand your goals, challenges, and what the right kind of support looks like for you.",
    color: "#0F2F57",
    features: ["Free consultation", "Goal setting", "Needs assessment", "No obligation"],
  },
  {
    step: "02",
    icon: Map,
    title: "Personalised Plan",
    description:
      "We build a practical plan around your learning goals or institutional priorities, with clear milestones and the right specialist support.",
    color: "#EFB31E",
    features: ["Tailored plan", "Right-fit service", "Clear milestones", "Flexible scheduling"],
  },
  {
    step: "03",
    icon: Lightbulb,
    title: "One-on-One Support",
    description:
      "You work directly with a dedicated consultant through regular sessions, not a call centre, and not a one-size-fits-all template.",
    color: "#14325E",
    features: ["Dedicated consultant", "Regular sessions", "Confidential", "Personal attention"],
  },
  {
    step: "04",
    icon: Cog,
    title: "Practical Tools & Resources",
    description:
      "We equip you with practical techniques, coaching tools, and resources you can keep using long after our sessions end.",
    color: "#4A6B8A",
    features: ["Practical techniques", "Take-home resources", "Real-world skills", "Ongoing access"],
  },
  {
    step: "05",
    icon: BarChart2,
    title: "Ongoing Check-ins",
    description:
      "We follow up regularly to track progress and adjust the plan as your needs evolve. Support doesn't end after the first session.",
    color: "#B1B3B8",
    features: ["Progress tracking", "Regular follow-up", "Plan adjustments", "Long-term support"],
  },
];

export default function WhatWeDoSection() {
  return <section id="support-process" className="section-padding support-process-section"><div className="editorial-shell">
    <div className="editorial-section-heading"><p className="eyebrow">How we work</p><h2 className="editorial-title">Our support process.</h2></div>
    <div className="support-process-grid">{processes.map(({ step, icon: Icon, title, description, features }) => <article key={step} className="support-process-card"><div className="support-process-top"><Icon size={27} strokeWidth={1.5} /><span>STEP {step}</span></div><h3>{title}</h3><p>{description}</p><ul>{features.map(feature => <li key={feature}>{feature}</li>)}</ul></article>)}</div>
  </div></section>;
}
