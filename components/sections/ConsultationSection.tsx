"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import {
  Calendar,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Phone,
  Mail,
  Clock,
  MessageSquare,
} from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

const services = [
  "Higher Education Consulting",
  "School Placement",
  "Academic Consulting",
  "Special Education",
  "Curriculum Development",
  "Educational Technology",
  "Institutional Effectiveness",
  "Strategic Planning",
  "Other / Not Sure",
];

const benefits = [
  { icon: Clock, text: "Free 45-minute discovery call" },
  { icon: CheckCircle2, text: "No obligation, no pressure" },
  { icon: MessageSquare, text: "Expert guidance from day one" },
  { icon: Phone, text: "Same-week availability" },
];

export default function ConsultationSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
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

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3.5 rounded-xl text-sm border outline-none transition-all duration-200 ${
      hasError
        ? "border-red-400 bg-red-50/50 dark:bg-red-900/10"
        : "border-[var(--card-border)] bg-[var(--muted-bg)] focus:border-blue-500"
    }`;

  return (
    <section
      id="consultation"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--section-alt)" }}
      ref={ref}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(37, 99, 235, 0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(37, 99, 235, 0.08)", border: "1px solid rgba(37, 99, 235, 0.2)" }}
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Get Started</span>
          </div>
          <h2 className="section-title mb-4" style={{ color: "var(--foreground)" }}>
            Book Your Free{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Consultation
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            Take the first step toward your educational goals. Our experts are ready
            to guide you — at no cost and no commitment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Hero image card */}
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "220px" }}>
              <Image
                src="https://images.unsplash.com/photo-1642257834579-eee89ff3e9fd?w=800&h=440&q=80&auto=format&fit=crop"
                alt="Professional African educational consultant ready to guide students and families in Botswana"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div
                className="absolute inset-0 flex items-end p-6"
                style={{ background: "linear-gradient(to top, rgba(8,15,42,0.85) 0%, rgba(8,15,42,0.3) 60%, transparent 100%)" }}
              >
                <div>
                  <p className="text-white font-bold text-lg leading-tight">
                    Expert Consultants
                  </p>
                  <p className="text-white/70 text-sm">Serving Botswana &amp; Southern Africa</p>
                </div>
              </div>
            </div>

            {/* Main info card */}
            <div
              className="p-8 rounded-2xl text-white"
              style={{ background: "linear-gradient(135deg, #0a1628 0%, #1e3a8a 100%)" }}
            >
              <Calendar className="w-10 h-10 text-blue-400 mb-5" />
              <h3 className="text-2xl font-bold mb-3">
                Start Your Educational Journey Today
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Complete the form and one of our expert consultants will reach out
                within 24 hours to schedule your personalised consultation session.
              </p>

              <div className="space-y-4">
                {benefits.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 shrink-0">
                        <Icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-white/80 text-sm">{b.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact shortcuts */}
            <div
              className="p-6 rounded-2xl space-y-4"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              <h4 className="font-semibold text-sm uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                Or Reach Us Directly
              </h4>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-medium" style={{ color: "var(--muted)" }}>Phone</div>
                  <div className="text-sm font-semibold group-hover:text-blue-600 transition-colors" style={{ color: "var(--foreground)" }}>
                    +1 (234) 567-8900
                  </div>
                </div>
              </a>
              <a
                href="mailto:info@edconsult.com"
                className="flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-medium" style={{ color: "var(--muted)" }}>Email</div>
                  <div className="text-sm font-semibold group-hover:text-blue-600 transition-colors" style={{ color: "var(--foreground)" }}>
                    info@edconsult.com
                  </div>
                </div>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-green-50 dark:hover:bg-green-900/20 group"
              >
                <div className="w-9 h-9 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-medium" style={{ color: "var(--muted)" }}>WhatsApp</div>
                  <div className="text-sm font-semibold group-hover:text-green-600 transition-colors" style={{ color: "var(--foreground)" }}>
                    Chat with Us
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div
              className="p-6 sm:p-8 rounded-2xl"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              {submitState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "rgba(5, 150, 105, 0.1)" }}
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                    Thank You!
                  </h3>
                  <p style={{ color: "var(--muted)" }}>
                    Your consultation request has been received. One of our expert consultants
                    will contact you within 24 hours to schedule your session.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <h3 className="text-xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                    Tell Us About You
                  </h3>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "var(--foreground)" }}>
                      Full Name *
                    </label>
                    <input
                      {...register("fullName")}
                      placeholder="John Smith"
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
                        Email Address *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="john@example.com"
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
                        Phone Number *
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
                      Service Needed *
                    </label>
                    <select
                      {...register("service")}
                      className={`${inputClass(!!errors.service)} cursor-pointer`}
                      style={{ color: "var(--foreground)" }}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
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
                      Tell Us More *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Describe your educational goals, challenges, or questions..."
                      className={`${inputClass(!!errors.message)} resize-none`}
                      style={{ color: "var(--foreground)" }}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Error state */}
                  {submitState === "error" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                    >
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <p className="text-sm text-red-600 dark:text-red-400">
                        Something went wrong. Please try again or contact us directly.
                      </p>
                    </motion.div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="w-full py-4 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{
                      background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
                      boxShadow: "0 4px 20px rgba(37, 99, 235, 0.3)",
                    }}
                  >
                    {submitState === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Book Free Consultation"
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: "var(--muted)" }}>
                    By submitting, you agree to our Privacy Policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
