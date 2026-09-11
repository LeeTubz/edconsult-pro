"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSafeInView } from "@/hooks/useSafeInView";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { BrandMotif } from "@/components/ui/BrandMotif";

const testimonials = [
  {
    id: 1,
    name: "Lesego Mokobi",
    role: "Parent",
    organization: "Gaborone, Botswana",
    content:
      "Olive Shoots gave my son real clarity on his subject choices and mapped a pathway that actually fit him, not just 'go to university'. Their career guidance and admissions support helped him secure a place at the University of Cape Town. The personalised attention was unlike anything we had experienced before.",
    rating: 5,
    initials: "LM",
    color: "#5A6B4F",
    photo: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?w=120&h=120&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    id: 2,
    name: "Dr. Ontiretse Segokgo",
    role: "Principal",
    organization: "Francistown Senior Secondary School",
    content:
      "The student counselling framework Olive Shoots helped us put in place completely changed how we support learners through the social and academic sides of student life. Their approach helped us improve our national examination pass rates by 28% in a single academic year. Students who feel supported perform better.",
    rating: 5,
    initials: "OS",
    color: "#6B8FA3",
    photo: "https://images.unsplash.com/photo-1642257834579-eee89ff3e9fd?w=120&h=120&q=80&auto=format&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Naledi Dube",
    role: "University Student",
    organization: "University of Botswana, Gaborone",
    content:
      "As a first-generation university student from Maun, I was completely overwhelmed by academic writing at university level. Olive Shoots' coaching gave me the structure and confidence to actually enjoy my assignments and research work. I am now excelling in Business Administration at UB, a version of myself I once thought was out of reach.",
    rating: 5,
    initials: "ND",
    color: "#8FAE7A",
    photo: "https://images.unsplash.com/photo-1602177282000-235ad226ca4a?w=120&h=120&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    id: 4,
    name: "Thabo Sithole",
    role: "Chief Executive Officer",
    organization: "BotswanaLearn EdTech",
    content:
      "Olive Shoots' educational technology training transformed how we deliver professional development to our 3,000+ employees across southern Africa. Their webinar-based staff capacity building and ODL/e-learning consultancy delivered measurable results within the first quarter.",
    rating: 5,
    initials: "TS",
    color: "#A8C4A2",
    photo: "https://images.unsplash.com/photo-1645736593932-2c877741fd6c?w=120&h=120&q=80&auto=format&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Mrs. Keabetswe Motlogelwa",
    role: "Deputy Principal",
    organization: "Mochudi Community Junior Secondary",
    content:
      "When our senior students needed better preparation before their first workplace placements, Olive Shoots' internship guidance was our anchor. Their systematic approach helped every one of our final-year students walk in ready, and several employers specifically asked for more of our graduates.",
    rating: 5,
    initials: "KM",
    color: "#6F8C5B",
    photo: "https://images.unsplash.com/photo-1653669486816-660abac02954?w=120&h=120&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    id: 6,
    name: "Mpho & Neo Kgari",
    role: "Parents",
    organization: "Lobatse, Botswana",
    content:
      "Our son was completely lost on which subjects to take and what came after school. Olive Shoots' career guidance consultant helped him find real clarity, not just 'get into university', but a path that actually fit him. He is thriving today and we are forever grateful.",
    rating: 5,
    initials: "MK",
    color: "#5A6B4F",
    photo: "https://images.unsplash.com/photo-1644042282339-767092de616b?w=120&h=120&q=80&auto=format&fit=crop&crop=faces",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const { ref, inView } = useSafeInView({ triggerOnce: true, threshold: 0.1 });

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--background)" }}
      ref={ref}
    >
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(90, 107, 79, 0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <BrandMotif
        className="absolute pointer-events-none hidden lg:block"
        style={{ bottom: "-12%", right: "-5%", width: 300, height: "auto", color: "#6B8FA3", opacity: 0.07, transform: "rotate(16deg)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={false}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(90, 107, 79, 0.08)", border: "1px solid rgba(90, 107, 79, 0.2)" }}
          >
            <span className="text-sm font-semibold text-[#5A6B4F] dark:text-[#A8C4A2]">Client Stories</span>
          </div>
          <h2 className="section-title mb-4" style={{ color: "var(--foreground)" }}>
            Voices from{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8FAE7A 0%, #5A6B4F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Botswana & Beyond
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            Real stories from students, parents, educators, and organisations
            across Botswana and southern Africa who transformed their educational journeys.
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          initial={false}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Quote icon */}
          <div
            className="absolute -top-6 -left-4 w-16 h-16 rounded-2xl flex items-center justify-center z-10"
            style={{ background: "linear-gradient(135deg, #8FAE7A, #5A6B4F)" }}
          >
            <Quote className="w-7 h-7 text-white" />
          </div>

          <div
            className="relative overflow-hidden rounded-3xl p-7 sm:p-10 border"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
              boxShadow: "0 24px 60px -20px rgba(43,51,39,0.18)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[3px] transition-colors duration-500"
              style={{ background: `linear-gradient(90deg, ${t.color}, ${t.color}33)` }}
            />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  className="text-base sm:text-lg leading-relaxed mb-6 font-medium"
                  style={{ color: "var(--foreground)" }}
                >
                  &ldquo;{t.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2"
                    style={{ borderColor: t.color }}
                  >
                    <Image
                      src={t.photo}
                      alt={`Photo of ${t.name}`}
                      fill
                      className="object-cover"
                      sizes="56px"
                      onError={(e) => {
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML = `<div style="width:100%;height:100%;background:${t.color};display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:14px">${t.initials}</div>`;
                        }
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-bold text-lg" style={{ color: "var(--foreground)" }}>
                      {t.name}
                    </div>
                    <div className="text-sm" style={{ color: "var(--muted)" }}>
                      {t.role} · {t.organization}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8 justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: i === current ? "28px" : "8px",
                      height: "8px",
                      background: i === current ? "#5A6B4F" : "var(--card-border)",
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:border-[#8FAE7A] hover:text-[#5A6B4F]"
                  style={{ borderColor: "var(--card-border)", color: "var(--muted)" }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all"
                  style={{ background: "linear-gradient(135deg, #8FAE7A, #5A6B4F)" }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini Avatar Grid */}
        <motion.div
          initial={false}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-8"
        >
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className="p-3 rounded-xl border text-center transition-all duration-200 hover:shadow-md group"
              style={{
                background: i === current ? "rgba(90, 107, 79, 0.08)" : "var(--card-bg)",
                borderColor: i === current ? "rgba(90, 107, 79, 0.35)" : "var(--card-border)",
              }}
              aria-label={`Select testimonial from ${item.name}`}
            >
              <div
                className="relative w-10 h-10 rounded-full overflow-hidden mx-auto mb-2 border-2 transition-all group-hover:scale-105"
                style={{ borderColor: i === current ? item.color : "transparent" }}
              >
                <Image
                  src={item.photo}
                  alt={`${item.name}`}
                  fill
                  className="object-cover"
                  sizes="40px"
                  onError={(e) => {
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      parent.innerHTML = `<div style="width:100%;height:100%;background:${item.color};display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:11px">${item.initials}</div>`;
                    }
                  }}
                />
              </div>
              <div
                className="text-xs font-medium leading-tight"
                style={{ color: i === current ? "#5A6B4F" : "var(--foreground)" }}
              >
                {item.name.split(" ")[0]}
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
