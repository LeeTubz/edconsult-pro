"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  accentColor?: string;
}

export default function PageHero({
  badge,
  title,
  subtitle,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  accentColor = "#5A6B4F",
}: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
      style={{ background: "linear-gradient(135deg, #10150c 0%, #1c2417 50%, #141a10 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accentColor}18 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(107,143,163,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(143,174,122,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(143,174,122,0.05) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 text-sm mb-8 flex-wrap"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="text-white/40 hover:text-white/70 transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-white/25" />
                {crumb.href && i < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className="text-white/40 hover:text-white/70 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/70 font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{
              background: `${accentColor}18`,
              border: `1px solid ${accentColor}35`,
            }}
          >
            <span className="text-sm font-semibold" style={{ color: accentColor }}>
              {badge}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl"
        >
          <h1 className="font-bold text-white mb-5 leading-tight" style={{ fontSize: "clamp(2rem, 4vw + 1rem, 3.5rem)" }}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg leading-relaxed text-white/65 max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* CTAs */}
        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg, ${accentColor}, #5A6B4F)`, boxShadow: `0 4px 20px ${accentColor}40` }}
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white/80 font-semibold text-sm border border-white/20 hover:border-white/40 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
