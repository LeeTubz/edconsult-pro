"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

const services = [
  ["Academic Support", "academic-support"],
  ["Career Guidance, Counselling & Mentorship", "career-guidance"],
  ["Quality Assurance", "quality-assurance"],
  ["Teacher & Staff Development", "educational-technology"],
  ["Institutional Audits & Visits", "institutional-audits"],
];
const links = [["Home", "/"], ["About us", "/about"], ["Our clients", "/clients"], ["Insights", "/blog"], ["Contact", "/contact"]];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  useEffect(() => { setOpen(false); setServicesOpen(false); }, [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); setServicesOpen(false); } };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="header-strip"><span>Guiding minds. Building futures.</span><a href="tel:+26777662151">Let&apos;s talk: +267 77 662 151 <ArrowUpRight size={13} /></a></div>
      <nav className="editorial-shell main-navigation" aria-label="Main navigation">
        <Link href="/" className="brand-lockup"><Image src="/logo-mark.png" alt="" width={52} height={52} priority /><span><strong>Platinum Accolades</strong><small>Educational Consultancy</small></span></Link>
        <div className="desktop-navigation">
          {links.slice(0, 2).map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}
          <div className="services-navigation" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false); }}>
            <button aria-expanded={servicesOpen} aria-controls="desktop-services" onClick={() => setServicesOpen(!servicesOpen)}>Services <ChevronDown size={14} /></button>
            {servicesOpen && <div id="desktop-services" className="services-dropdown">{services.map(([label, slug]) => <Link key={slug} href={`/services/${slug}`} onClick={() => setServicesOpen(false)}>{label}<ArrowUpRight size={14} /></Link>)}</div>}
          </div>
          {links.slice(2).map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}
        </div>
        <Link href="/contact" className="nav-consultation">Book a consultation <ArrowUpRight size={16} /></Link>
        <button className="mobile-menu-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<span>Our services</span>{services.map(([label, slug]) => <Link key={slug} href={`/services/${slug}`} onClick={() => setOpen(false)}>{label}</Link>)}</nav>}
    </header>
  );
}
