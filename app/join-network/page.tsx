import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FileCheck2, MessageCircle, Users } from "lucide-react";
import NetworkApplicationForm from "@/components/forms/NetworkApplicationForm";
import { applicationRoles } from "@/lib/network-application";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata({ title: "Join Our Professional Network", description: "Apply to join the Platinum Accolades education professional network. Submit your expertise, CV and supporting documents for review.", path: "/join-network" });
export default function JoinNetworkPage() {
  return <main className="network-page">
    <section className="network-page-hero"><div className="editorial-shell"><Link href="/" className="editorial-breadcrumb">Home / Professional network</Link><p className="eyebrow">For education professionals</p><h1>Your expertise.<br /><em>A wider impact.</em></h1><a href="#application-form" className="action-gold">Start your application <ArrowUpRight size={18} /></a><div className="network-role-list">{applicationRoles.map(role => <span key={role}>{role}</span>)}</div></div></section>
    <section className="section-padding editorial-shell application-layout"><NetworkApplicationForm /><aside className="application-aside"><p className="eyebrow">What happens next?</p><h2>A thoughtful review.<br />A personal connection.</h2><ol>{[{ icon: FileCheck2, title: "We review your profile", text: "We look at your expertise, qualifications and supporting documents." }, { icon: MessageCircle, title: "We get in touch", text: "Where there is a potential fit, we contact you to discuss your experience and availability." }, { icon: Users, title: "We explore opportunities", text: "Suitable professionals may be considered for relevant opportunities as they arise." }].map(({ icon: Icon, title, text }) => <li key={title}><Icon size={23} /><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol><p className="application-aside-note">Applying to the network does not guarantee a role or placement.</p><a href="mailto:platinumaccolades@gmail.com">Need help with your application? <ArrowUpRight size={15} /></a></aside></section>
  </main>;
}
