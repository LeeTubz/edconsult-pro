"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Compass, ShieldCheck, Cpu, BookOpen,
  ArrowRight, ChevronDown, Star,
} from "lucide-react";
import { BrandMotif } from "@/components/ui/BrandMotif";

const floatingCards = [
  { icon: BookOpen,    label: "Academic Support", color: "#8FAE7A", side: "left",  top: "calc(50% - 120px)" },
  { icon: Compass,     label: "Career Guidance",  color: "#6B8FA3", side: "right", top: "calc(50% - 120px)" },
  { icon: ShieldCheck, label: "Quality Assurance",color: "#5A6B4F", side: "left",  top: "calc(50% + 70px)"  },
  { icon: Cpu,         label: "Ed Technology",    color: "#A8C4A2", side: "right", top: "calc(50% + 70px)"  },
];

export default function HeroSection() {
  const router = useRouter();

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "radial-gradient(120% 90% at 15% 0%, #223019 0%, #141a10 45%, #10150c 100%)",
      }}
    >
      {/* ── Large decorative olive-branch motif ── */}
      <BrandMotif
        className="absolute pointer-events-none hidden md:block"
        style={{
          top: "-6%",
          right: "-4%",
          width: "42vw",
          maxWidth: 560,
          height: "auto",
          color: "#8FAE7A",
          opacity: 0.14,
          transform: "rotate(8deg)",
        }}
      />
      <BrandMotif
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%",
          left: "-8%",
          width: "30vw",
          maxWidth: 380,
          height: "auto",
          color: "#6B8FA3",
          opacity: 0.1,
          transform: "rotate(-18deg) scaleX(-1)",
        }}
      />

      {/* ── Ambient orbs ── */}
      <div className="absolute pointer-events-none" style={{ zIndex: 1, top: "-10%", left: "-5%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle,rgba(143,174,122,0.14),transparent 70%)", filter: "blur(48px)" }} />
      <div className="absolute pointer-events-none" style={{ zIndex: 1, bottom: "-5%", right: "-3%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(107,143,163,0.12),transparent 70%)", filter: "blur(40px)" }} />

      {/* ── Subtle grid overlay ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, backgroundImage: "linear-gradient(rgba(143,174,122,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(143,174,122,0.025) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Floating service badges, xl+ only, pinned to sides safely */}
      {floatingCards.map((card, i) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={i}
            className="hidden xl:flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl absolute pointer-events-none"
            initial={{ opacity: 0, x: card.side === "left" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              opacity: { duration: 0.6, delay: 1 + i * 0.15 },
              x:       { duration: 0.6, delay: 1 + i * 0.15 },
            }}
            style={{
              [card.side]: "2%",
              top: card.top,
              zIndex: 5,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `${card.color}28` }}>
              <Icon className="w-4 h-4" style={{ color: card.color }} />
            </div>
            <span className="text-xs font-semibold text-white/80 whitespace-nowrap">{card.label}</span>
          </motion.div>
        );
      })}

      {/* Main content, top padding clears fixed navbar */}
      <div
        className="relative flex flex-col pt-20 sm:pt-24 lg:pt-[7.5rem] pb-8"
        style={{ zIndex: 10, minHeight: "100vh" }}
      >
        {/* Central content block */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-3xl mx-auto text-center w-full">

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(143,174,122,0.14)", border: "1px solid rgba(143,174,122,0.3)" }}
            >
              {[0,1,2,3,4].map(i => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="text-xs font-semibold text-[#A8C4A2] ml-1">
                Trusted by 500+ Students &amp; 200+ Institutions
              </span>
            </motion.div>

            {/* Headline: fluid size via clamp, 2.5rem (mobile) to 4rem (desktop) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-white tracking-tight leading-[1.08] mb-5"
              style={{ fontSize: "clamp(2.25rem, 4vw + 1rem, 4rem)" }}
            >
              Guiding{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#A8C4A2 0%,#8FAE7A 40%,#6B8FA3 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Minds
              </span>
              , Building Futures
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mb-8 leading-relaxed"
            >
              A full-service educational consultancy helping students and institutions
              across Botswana and southern Africa with academic support, quality assurance,
              educational technology, career guidance, and counselling.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <button
                onClick={() => router.push("/contact")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full
                           text-white font-semibold text-sm transition-all duration-250
                           hover:-translate-y-0.5 w-full sm:w-auto"
                style={{ background: "linear-gradient(135deg,#8FAE7A,#5A6B4F)", boxShadow: "0 6px 22px rgba(90,107,79,0.4)" }}
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </button>
              <button
                onClick={() => router.push("/services/academic-support")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full
                           font-semibold text-sm text-white transition-all duration-250
                           hover:bg-white/10 w-full sm:w-auto"
                style={{ background: "rgba(255,255,255,0.06)", border: "1.5px solid rgba(255,255,255,0.2)" }}
              >
                Explore Services
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="shrink-0 pb-10 flex justify-center">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center gap-1.5 text-white/30 hover:text-white/55 transition-colors cursor-pointer"
            onClick={scrollToNext}
            aria-label="Scroll down"
          >
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase">Scroll</span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* ── Wave divider into next section ── */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ zIndex: 8, height: "60px" }}
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,32 C240,60 480,0 720,18 C960,36 1200,58 1440,24 L1440,60 L0,60 Z" style={{ fill: "var(--background)" }} />
      </svg>
    </section>
  );
}
