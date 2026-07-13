"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Phone } from "lucide-react";

export default function HomeCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      className="py-20 relative overflow-hidden"
      ref={ref}
      style={{ background: "linear-gradient(135deg, #040c1f 0%, #070e24 50%, #0a1640 100%)" }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)" }}>
            <span className="text-sm font-semibold text-blue-400">Ready to Get Started?</span>
          </div>

          <h2 className="font-bold text-white mb-5" style={{ fontSize: "clamp(1.875rem, 3vw + 1rem, 3rem)" }}>
            Transform Your Educational{" "}
            <span style={{ background: "linear-gradient(135deg,#60a5fa,#fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Journey Today
            </span>
          </h2>

          <p className="text-lg text-white/65 max-w-2xl mx-auto mb-10">
            Join 500+ students, schools, and organisations who have transformed their
            educational outcomes with EduConsult Pro. Your first consultation is free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ background: "linear-gradient(135deg,#2563eb,#1e40af)", boxShadow: "0 4px 20px rgba(37,99,235,0.4)" }}
            >
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+26771234567"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white/80 font-semibold border border-white/20 hover:border-white/40 hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <Phone className="w-4 h-4" /> +267 71 234 567
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
