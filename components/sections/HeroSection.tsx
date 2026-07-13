"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap, Target, Cpu, Award,
  ArrowRight, ChevronDown, Star,
} from "lucide-react";

const floatingCards = [
  { icon: GraduationCap, label: "Higher Education",    color: "#3b82f6", side: "left",  top: "calc(50% - 120px)" },
  { icon: Target,        label: "Strategic Planning",  color: "#6366f1", side: "right", top: "calc(50% - 120px)" },
  { icon: Cpu,           label: "Ed Technology",       color: "#8b5cf6", side: "left",  top: "calc(50% + 60px)"  },
  { icon: Award,         label: "Academic Excellence", color: "#f59e0b", side: "right", top: "calc(50% + 60px)"  },
];

export default function HeroSection() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();

    const pts = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,  y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,  vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.4,     a: Math.random() * 0.3 + 0.07,
      col: ["rgba(37,99,235,","rgba(99,102,241,"][Math.floor(Math.random() * 2)],
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.col}${p.a})`; ctx.fill();
        pts.slice(i + 1).forEach(q => {
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 100) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(37,99,235,${0.06*(1-d/100)})`; ctx.lineWidth=0.5; ctx.stroke();
          }
        });
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg,#040c1f 0%,#071233 60%,#0a1628 100%)",
      }}
    >
      {/* ── Background image + deep overlay ── */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1655720348590-c739c860beed?w=1920&h=1080&q=75&auto=format&fit=crop"
          alt="African university students collaborating with laptops"
          fill className="object-cover object-center" priority sizes="100vw"
          onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(160deg,rgba(4,12,31,0.94),rgba(7,18,51,0.90),rgba(10,22,40,0.94))" }} />
      </div>

      {/* ── Particle canvas ── */}
      <canvas ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1, opacity: 0.4 }} />

      {/* ── Ambient orbs ── */}
      <div className="absolute pointer-events-none" style={{ zIndex: 1, top: "-10%", left: "-5%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle,rgba(37,99,235,0.1),transparent 70%)", filter: "blur(48px)" }} />
      <div className="absolute pointer-events-none" style={{ zIndex: 1, bottom: "-5%", right: "-3%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(30,64,175,0.08),transparent 70%)", filter: "blur(40px)" }} />

      {/* ── Subtle grid overlay ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, backgroundImage: "linear-gradient(rgba(37,99,235,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,0.025) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* ── Floating service badges — xl+ only, pinned to sides safely ── */}
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

      {/* ── Main content — top padding clears fixed navbar ── */}
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
              style={{ background: "rgba(37,99,235,0.14)", border: "1px solid rgba(37,99,235,0.3)" }}
            >
              {[0,1,2,3,4].map(i => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="text-xs font-semibold text-blue-300 ml-1">
                Trusted by 500+ Students &amp; 200+ Institutions
              </span>
            </motion.div>

            {/* Headline — fluid size via clamp: 2.25rem (mobile) → 3.25rem (desktop) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold text-white tracking-tight leading-tight mb-5"
              style={{ fontSize: "clamp(1.875rem, 3vw + 1rem, 3rem)" }}
            >
              Empowering{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#60a5fa 0%,#3b82f6 40%,#fbbf24 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Educational
              </span>{" "}
              Excellence
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mb-8 leading-relaxed"
            >
              Helping students, schools, and organisations across Botswana and
              southern Africa achieve academic excellence through expert consulting.
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
                style={{ background: "linear-gradient(135deg,#2563eb,#1e40af)", boxShadow: "0 6px 22px rgba(37,99,235,0.4)" }}
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </button>
              <button
                onClick={() => router.push("/services/higher-education")}
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
    </section>
  );
}
