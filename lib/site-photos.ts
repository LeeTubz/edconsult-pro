export interface SectionPhoto { src: string; alt: string; position?: string; }

// Each section has its own photo. Repeated article covers identify the same article.
export const pageHeroPhotos: Record<string, SectionPhoto> = {
  "/about": { src: "/images/quality-assurance.jpg", alt: "A team placing their hands together in a gesture of partnership", position: "50% 50%" },
  "/clients": { src: "/images/about-partnership.jpg", alt: "Students collaborating on a learning project around a table", position: "50% 45%" },
  "/blog": { src: "/images/insights-reading.jpg", alt: "A young learner following an online lesson from home", position: "50% 45%" },
  "/contact": { src: "/images/career-coaching.jpg", alt: "Two professionals shaking hands across a desk at the start of a conversation" },
  "/services/academic-support": { src: "/images/academic-learning.jpg", alt: "A teacher supporting students during a classroom lesson", position: "50% 20%" },
  "/services/career-guidance": { src: "/images/career-conversation.jpg", alt: "A counsellor listening to a person during an individual support session" },
  "/services/quality-assurance": { src: "/images/institutional-audit.jpg", alt: "A team discussing documents and reviewing their work together" },
  "/services/educational-technology": { src: "/images/teacher-workshop.jpg", alt: "A group of professionals learning together with laptops during a workshop" },
  "/services/institutional-audits": { src: "/images/contact-advisor.jpg", alt: "A team reviewing documents and digital information around a meeting table" },
};

export const serviceCardPhotos: Record<string, SectionPhoto> = {
  "/services/academic-support": { src: "/images/tuition-support.jpg", alt: "A teacher helping pupils take part in a classroom lesson", position: "50% 20%" },
  "/services/career-guidance": { src: "/images/first-internship.jpg", alt: "A mentor presenting ideas to a small group of young professionals", position: "50% 20%" },
  "/services/quality-assurance": { src: "/images/quality-review.jpg", alt: "Colleagues carefully reviewing documents and discussing improvements" },
  "/services/educational-technology": { src: "/images/academic-writing.jpg", alt: "An educator leading an interactive lesson in a classroom", position: "50% 35%" },
  "/services/institutional-audits": { src: "/images/institutional-review.jpg", alt: "Professionals reviewing reports and data together during a working session" },
};
