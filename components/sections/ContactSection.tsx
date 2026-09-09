"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "Plot 1234, Luthuli Road\nGaborone, Botswana",
    color: "#5A6B4F",
    action: "https://maps.google.com",
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: "+267 71 234 567",
    color: "#8FAE7A",
    action: "tel:+26771234567",
  },
  {
    icon: Mail,
    label: "Email Address",
    value: "info@oliveshoots.com",
    color: "#6B8FA3",
    action: "mailto:info@oliveshoots.com",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon–Fri: 9AM – 6PM CAT\nSat: 10AM – 2PM CAT",
    color: "#6F8C5B",
    action: null,
  },
];

const socials = [
  { text: "in", label: "LinkedIn", href: "#", color: "#0a66c2" },
  { text: "𝕏", label: "Twitter / X", href: "#", color: "#1da1f2" },
  { text: "f", label: "Facebook", href: "#", color: "#1877f2" },
  { text: "ig", label: "Instagram", href: "#", color: "#e1306c" },
];

export default function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitState("success");
        reset();
        setTimeout(() => setSubmitState("idle"), 6000);
      } else {
        setSubmitState("error");
        setTimeout(() => setSubmitState("idle"), 5000);
      }
    } catch {
      setSubmitState("error");
      setTimeout(() => setSubmitState("idle"), 5000);
    }
  };

  const inputClass = (err: boolean) =>
    `w-full px-4 py-3.5 rounded-xl text-sm border outline-none transition-all duration-200 ${
      err
        ? "border-red-400 bg-red-50/30"
        : "border-[var(--card-border)] bg-[var(--muted-bg)] focus:border-[#8FAE7A]"
    }`;

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--background)" }}
      ref={ref}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(90, 107, 79, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(90, 107, 79, 0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            <span className="text-sm font-semibold text-[#5A6B4F] dark:text-[#A8C4A2]">Contact Us</span>
          </div>
          <h2 className="section-title mb-4" style={{ color: "var(--foreground)" }}>
            Let's Start a{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8FAE7A 0%, #6B8FA3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Conversation
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            We're here to help. Reach out through any channel — we typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-5"
          >
            {/* Contact Info Cards */}
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-2xl border transition-all hover:shadow-md group"
                  style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${info.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: info.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-1"
                      style={{ color: "var(--muted)" }}>
                      {info.label}
                    </div>
                    {info.action ? (
                      <a
                        href={info.action}
                        target={info.action.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-medium whitespace-pre-line hover:text-[#5A6B4F] transition-colors"
                        style={{ color: "var(--foreground)" }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium whitespace-pre-line"
                        style={{ color: "var(--foreground)" }}>
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/26771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:shadow-lg hover:-translate-y-1 group"
              style={{
                background: "linear-gradient(135deg, rgba(5, 150, 105, 0.1), rgba(5, 150, 105, 0.05))",
                border: "1px solid rgba(5, 150, 105, 0.25)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                style={{ background: "rgba(5, 150, 105, 0.15)" }}
              >
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="font-bold text-green-700 dark:text-green-400">
                  Chat on WhatsApp
                </div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>
                  Get instant answers — usually responds in minutes
                </div>
              </div>
            </a>

            {/* Social Links */}
            <div
              className="p-5 rounded-2xl border"
              style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
            >
              <p className="text-sm font-semibold mb-4 uppercase tracking-wider"
                style={{ color: "var(--muted)" }}>
                Follow Us
              </p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-md text-xs font-bold"
                    style={{ background: `${s.color}18`, color: s.color }}
                  >
                    {s.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Map embed */}
            <div
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: "var(--card-border)", height: "260px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228547.59!2d25.8159!3d-24.6541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfdf5f77c73b5b%3A0x7f49aeabb02ebbde!2sGaborone%2C%20Botswana!5e0!3m2!1sen!2sbw!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Olive Shoots Office — Gaborone, Botswana"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div
              className="p-8 sm:p-10 rounded-2xl"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              {submitState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 bg-green-100 dark:bg-green-900/20">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "var(--muted)" }}>
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                    Send Us a Message
                  </h3>
                  <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                    Fill in the form below and we'll respond as soon as possible.
                  </p>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "var(--foreground)" }}>
                      Full Name *
                    </label>
                    <input
                      {...register("fullName")}
                      placeholder="Your full name"
                      className={inputClass(!!errors.fullName)}
                      style={{ color: "var(--foreground)" }}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "var(--foreground)" }}>
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="your@email.com"
                        className={inputClass(!!errors.email)}
                        style={{ color: "var(--foreground)" }}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "var(--foreground)" }}>
                        Phone *
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className={inputClass(!!errors.phone)}
                        style={{ color: "var(--foreground)" }}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "var(--foreground)" }}>
                      Service *
                    </label>
                    <select
                      {...register("service")}
                      className={`${inputClass(!!errors.service)} cursor-pointer`}
                      style={{ color: "var(--foreground)" }}
                    >
                      <option value="">Select a service</option>
                      <option>Career Guidance</option>
                      <option>Student Counselling</option>
                      <option>Coaching</option>
                      <option>Navigating Internship</option>
                      <option>Educational Technology</option>
                      <option>Other</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "var(--foreground)" }}>
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="How can we help you?"
                      className={`${inputClass(!!errors.message)} resize-none`}
                      style={{ color: "var(--foreground)" }}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message.message}
                      </p>
                    )}
                  </div>

                  {submitState === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <p className="text-sm text-red-600">
                        Something went wrong. Please try again.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, #8FAE7A 0%, #5A6B4F 100%)" }}
                  >
                    {submitState === "loading" ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
