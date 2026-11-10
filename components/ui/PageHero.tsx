"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { breadcrumbSchema } from "@/lib/seo";
export interface BreadcrumbItem { label: string; href?: string; }
interface PageHeroProps {
  badge?: string; title: React.ReactNode; subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  accentColor?: string;
}
export default function PageHero({ badge, title, subtitle, breadcrumbs, primaryCta, secondaryCta }: PageHeroProps) {
  const pathname = usePathname();
  const studentPage = /academic|career|counselling|clients|blog/.test(pathname);
  const photo = pathname === "/about" ? "/images/collaboration.jpg" : studentPage ? "/images/students.jpg" : "/images/mentoring.jpg";
  const alt = pathname === "/about" ? "People working together around a table" : studentPage ? "Students learning together" : "Professionals sharing ideas during a working session";
  const trail = (breadcrumbs ?? []).map((crumb, i) => ({ label: crumb.label, path: crumb.href || (i === breadcrumbs!.length - 1 ? pathname : undefined) }));
  return (
    <section className="inner-hero">
      {breadcrumbs?.length ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(trail)) }} /> : null}
      <div className="editorial-shell inner-hero-grid">
        <div className="inner-hero-copy">
          <nav aria-label="Breadcrumb" className="editorial-breadcrumb"><Link href="/">Home</Link>{breadcrumbs?.map((crumb, i) => <span key={i}><ChevronRight size={13} />{crumb.href && i < breadcrumbs.length - 1 ? <Link href={crumb.href}>{crumb.label}</Link> : crumb.label}</span>)}</nav>
          {badge && <p className="eyebrow">{badge}</p>}
          <h1>{title}</h1>
          {subtitle && <p className="inner-hero-description">{subtitle}</p>}
          <div className="editorial-actions">{primaryCta && <Link className="action-gold" href={primaryCta.href}>{primaryCta.label}<ArrowUpRight size={17} /></Link>}{secondaryCta && <Link className="action-text" href={secondaryCta.href}>{secondaryCta.label}<ArrowUpRight size={16} /></Link>}</div>
        </div>
        <div className="inner-hero-photo"><Image src={photo} alt={alt} fill sizes="(max-width: 800px) 100vw, 43vw" preload className="object-cover" /><span className="image-label">People. Purpose. Possibility.</span></div>
      </div>
    </section>
  );
}
