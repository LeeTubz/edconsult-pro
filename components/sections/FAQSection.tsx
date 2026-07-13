"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of educational consulting services do you offer?",
    answer:
      "We offer a comprehensive range of educational consulting services including higher education consulting, school placement, academic consulting, special education support, curriculum development, educational technology integration, and institutional effectiveness & strategic planning. We serve individuals, families, K-12 schools, higher education institutions, and organizations.",
  },
  {
    question: "How does the consultation process work?",
    answer:
      "Our process begins with a free 45-minute discovery call to understand your unique needs and goals. From there, we conduct a thorough assessment, develop a customized strategy, and support you through implementation. We maintain ongoing communication and provide transparent progress reporting throughout our engagement.",
  },
  {
    question: "How much does educational consulting cost?",
    answer:
      "Our fees vary based on the scope and complexity of the engagement. We offer flexible pricing models including hourly consulting, project-based packages, and comprehensive retainer engagements. Your initial consultation is always free, and we'll provide a clear, transparent fee proposal tailored to your specific needs and budget before any commitment.",
  },
  {
    question: "How long does the consulting process typically take?",
    answer:
      "Timelines vary significantly by service. College admissions consulting typically runs 6-18 months. School placement support may take 1-3 months. Institutional strategic planning engagements generally run 6-12 months. We work within your timeline constraints and always communicate expected milestones upfront.",
  },
  {
    question: "Do you work with international students and institutions?",
    answer:
      "Absolutely. We have extensive experience supporting international students with US and global university admissions, as well as working with educational institutions across multiple countries. Our consultants are familiar with global education systems, international accreditation standards, and cross-cultural academic environments.",
  },
  {
    question: "What makes EduConsult Pro different from other educational consultants?",
    answer:
      "We differentiate ourselves through three key pillars: expertise (our team holds advanced degrees and specialized certifications across all areas of education), personalization (every strategy is custom-built — no templates or one-size-fits-all solutions), and results (we have a documented 98% success rate and a track record of transformative outcomes across 500+ clients globally).",
  },
  {
    question: "Do you offer support for students with learning differences?",
    answer:
      "Yes. Our special education consultants specialize in supporting students with learning disabilities, ADHD, autism spectrum disorder, and other learning differences. We provide IEP advocacy, school placement for specialized learning environments, 504 plan support, and connect families with appropriate therapeutic and educational resources.",
  },
  {
    question: "Can you help schools with accreditation preparation?",
    answer:
      "Yes, accreditation support is one of our core institutional services. We guide schools and higher education institutions through regional and national accreditation processes — from initial self-study and gap analysis to documentation support, mock reviews, and ongoing compliance. We have a strong track record of successful first-attempt accreditations.",
  },
  {
    question: "How do I get started with EduConsult Pro?",
    answer:
      "Getting started is easy. Simply complete the consultation booking form on our website, and one of our consultants will contact you within 24 hours to schedule your free discovery call. You can also reach us directly via phone, email, or WhatsApp. There's no obligation — our goal is simply to understand your needs and see how we can help.",
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
            style={{ background: "rgba(37, 99, 235, 0.08)", border: "1px solid rgba(37, 99, 235, 0.2)" }}
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">FAQ</span>
          </div>
          <h2 className="section-title mb-4" style={{ color: "var(--foreground)" }}>
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Questions
            </span>
          </h2>
          <p className="text-lg" style={{ color: "var(--muted)" }}>
            Everything you need to know about working with EduConsult Pro.
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
                borderColor: openIndex === i ? "rgba(37, 99, 235, 0.3)" : "var(--card-border)",
                boxShadow: openIndex === i ? "0 4px 20px rgba(37, 99, 235, 0.08)" : "none",
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
                      ? "linear-gradient(135deg, #2563eb, #1e40af)"
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
            background: "rgba(37, 99, 235, 0.06)",
            border: "1px solid rgba(37, 99, 235, 0.15)",
          }}
        >
          <p className="text-base mb-4" style={{ color: "var(--foreground)" }}>
            Still have questions? We'd love to hear from you.
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="px-8 py-3 rounded-full text-white font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)" }}
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
