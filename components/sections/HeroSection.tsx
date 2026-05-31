"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Target,
  Cpu,
  ArrowRight,
  ChevronDown,
  Star,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const floatingCards = [
  {
    icon: GraduationCap,
    label: "Higher Education",
    color: "#2563eb",
    delay: 0,
    position: "top-[15%] left-[5%]",
  },
  {
    icon: Target,
    label: "Strategic Planning",
    color: "#1e40af",
    delay: 1,
    position: "top-[20%] right-[3%]",
  },
  {
    icon: Cpu,
    label: "Ed Technology",
    color: "#7c3aed",
    delay: 2,
    position: "bottom-[28%] left-[3%]",
  },
  {
    icon: Award,
    label: "Academic Excellence",
    color: "#d97706",
    delay: 1.5,
    position: "bottom-[22%] right-[4%]",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Students Guided", icon: Users },
  { value: 200, suffix: "+", label: "Schools Served", icon: BookOpen },
  { value: 15, suffix: "+", label: "Years Experience", icon: Award },
  { value: 98, suffix: "%", label: "Success Rate", icon: TrendingUp },
];

export default function HeroSection() {
  const particlesRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      radius: number; alpha: number; color: string;
    }> = [];

    const colors = ["rgba(37, 99, 235,", "rgba(251, 191, 36,", "rgba(30, 64, 175,"];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(135deg, #040c1f 0%, #071233 50%, #0a1628 100%)" }}
    >
      {/* Particle Canvas */}
      <canvas
        ref={particlesRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Background Orbs */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(30, 64, 175, 0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(251, 191, 36, 0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Cards (Desktop only) */}
      {floatingCards.map((card, i) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={i}
            className={`hidden xl:flex absolute ${card.position} items-center gap-3 px-4 py-3 rounded-2xl z-10`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + card.delay * 0.2, duration: 0.6 }}
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              animation: `float ${6 + card.delay}s ease-in-out infinite ${card.delay}s`,
            }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: `${card.color}22` }}
            >
              <Icon className="w-5 h-5" style={{ color: card.color }} />
            </div>
            <span className="text-sm font-medium text-white/80">{card.label}</span>
          </motion.div>
        );
      })}

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(37, 99, 235, 0.15)",
                border: "1px solid rgba(37, 99, 235, 0.3)",
              }}
            >
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
                    style={{ marginLeft: i > 0 ? "-1px" : "0" }}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-blue-300">
                Trusted by 500+ Students &amp; 200+ Institutions
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.08] tracking-tight mb-6"
            >
              Empowering
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 40%, #fbbf24 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Educational
              </span>
              <br />
              Excellence
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Helping students, schools, institutions, and organizations achieve academic
              success through expert strategic educational consulting.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
            >
              <button
                onClick={() => scrollToSection("#consultation")}
                className="group flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
                  boxShadow: "0 8px 30px rgba(37, 99, 235, 0.4)",
                }}
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("#services")}
                className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-white/10"
                style={{
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1.5px solid rgba(255, 255, 255, 0.2)",
                  color: "white",
                }}
              >
                Explore Services
              </button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center p-5 rounded-2xl text-center"
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Icon className="w-5 h-5 text-blue-400 mb-2" />
                    <div className="text-3xl font-bold text-white">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-white/50 mt-1 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection("#about")}
      >
        <span className="text-xs text-white/30 font-medium tracking-widest uppercase">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
