"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSafeInView } from "@/hooks/useSafeInView";
import { ArrowRight, Phone } from "lucide-react";
import { BrandMotif } from "@/components/ui/BrandMotif";

export default function HomeCTA() {
  const { ref, inView } = useSafeInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      className="py-20 relative overflow-hidden"
      ref={ref}
      style={{ background: "linear-gradient(135deg, #10150c 0%, #1c2417 50%, #141a10 100%)" }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,174,122,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <BrandMotif
        className="absolute pointer-events-none hidden md:block"
        style={{ top: "-15%", right: "-3%", width: 260, height: "auto", color: "#A8C4A2", opacity: 0.1, transform: "rotate(14deg)" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(143,174,122,0.15)", border: "1px solid rgba(143,174,122,0.3)" }}>
            <span className="text-sm font-semibold text-[#A8C4A2]">Ready to Get Started?</span>
          </div>

          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: "clamp(1.875rem, 3vw + 1rem, 3rem)" }}>
            Grow Your{" "}
            <span style={{ background: "linear-gradient(135deg,#A8C4A2,#6B8FA3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Future Today
            </span>
          </h2>

          <p className="text-lg text-white/65 max-w-2xl mx-auto mb-10">
            Join 500+ students, schools, and organisations who have grown with
            Olive Shoots. Your first consultation is free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ background: "linear-gradient(135deg,#8FAE7A,#5A6B4F)", boxShadow: "0 4px 20px rgba(90,107,79,0.4)" }}
            >
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+26774332739"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white/80 font-semibold border border-white/20 hover:border-white/40 hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <Phone className="w-4 h-4" /> +267 74332739
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
