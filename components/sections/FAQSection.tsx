"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of student support services do you offer?",
    answer:
      "We offer five core services: career guidance (subject choice, pathway mapping, and university admissions support), student counselling (social and academic life support), coaching (academic writing at college and university level), navigating internship (work-life guidance for students), and educational technology (staff training, webinars, and ODL/e-learning consultancy).",
  },
  {
    question: "How does the consultation process work?",
    answer:
      "Our process begins with a free discovery call to understand your unique needs and goals. From there, we agree on the right service, develop a tailored plan, and support you through implementation. We maintain ongoing communication and check in regularly throughout our engagement.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our fees vary based on the scope of the service and the length of engagement. We offer flexible pricing including per-session coaching or counselling, package rates for admissions support, and training-day rates for institutional webinars. Your initial consultation is always free, and we'll provide a clear, transparent fee proposal before any commitment.",
  },
  {
    question: "How long does support typically take?",
    answer:
      "Timelines vary by service. Career guidance and university admissions support typically runs across a school term. Academic writing coaching is often booked per assignment, research project, or dissertation. Student counselling and internship guidance are ongoing and open-ended, for as long as the student needs support. We always agree on expected milestones upfront.",
  },
  {
    question: "Do you compete with school counsellors and advisors?",
    answer:
      "No — we work alongside them, not in place of them. Our career guidance pushes for the 'best fit' for each student rather than university admission only, and we're glad to coordinate directly with a student's existing school counsellors and advisors toward the same goal.",
  },
  {
    question: "What makes Olive Shoots different from other consultancies?",
    answer:
      "We differentiate ourselves through three key pillars: expertise (our team brings focused experience across career guidance, counselling, coaching, and educational technology), personalization (every plan is built around the individual student — no templates or one-size-fits-all solutions), and results (we have a documented 98% success rate and a track record of positive outcomes across 500+ students).",
  },
  {
    question: "Do you work with individual students, or with schools too?",
    answer:
      "Both. Students and families can book career guidance, counselling, coaching, or internship guidance directly. Schools and institutions can also book our educational technology service for staff capacity building, training webinars, and ODL/e-learning consultancy.",
  },
  {
    question: "How do I get started with Olive Shoots?",
    answer:
      "Getting started is easy. Simply complete the consultation booking form on our website, and one of our team will contact you within 24 hours to schedule your free discovery call. You can also reach us directly via phone, email, or WhatsApp. There's no obligation — our goal is simply to understand your needs and see how we can help.",
  },
];

export default function FAQSection() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--section-alt)" }}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(90, 107, 79, 0.08)", border: "1px solid rgba(90, 107, 79, 0.2)" }}
          >
            <span className="text-sm font-semibold text-[#5A6B4F] dark:text-[#A8C4A2]">FAQ</span>
          </div>
          <h2 className="section-title mb-4" style={{ color: "var(--foreground)" }}>
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8FAE7A 0%, #5A6B4F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Questions
            </span>
          </h2>
          <p className="text-lg" style={{ color: "var(--muted)" }}>
            Everything you need to know about working with Olive Shoots.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className="rounded-2xl border overflow-hidden transition-all duration-300"
              style={{
                background: openIndex === i ? "var(--card-bg)" : "var(--card-bg)",
                borderColor: openIndex === i ? "rgba(90, 107, 79, 0.3)" : "var(--card-border)",
                boxShadow: openIndex === i ? "0 4px 20px rgba(90, 107, 79, 0.08)" : "none",
              }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span
                  className="font-semibold text-base pr-4 leading-snug"
                  style={{ color: "var(--foreground)" }}
                >
                  {faq.question}
                </span>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{
                    background: openIndex === i
                      ? "linear-gradient(135deg, #8FAE7A, #5A6B4F)"
                      : "var(--muted-bg)",
                  }}
                >
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4" style={{ color: "var(--muted)" }} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="px-6 pb-6 text-base leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 p-8 rounded-2xl"
          style={{
            background: "rgba(90, 107, 79, 0.06)",
            border: "1px solid rgba(90, 107, 79, 0.15)",
          }}
        >
          <p className="text-base mb-4" style={{ color: "var(--foreground)" }}>
            Still have questions? We'd love to hear from you.
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="px-8 py-3 rounded-full text-white font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #8FAE7A 0%, #5A6B4F 100%)" }}
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
