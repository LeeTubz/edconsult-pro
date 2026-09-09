import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import TeamSection from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "Our Team — Meet Our Expert Consultants",
  description:
    "Meet Olive Shoots' team of specialist consultants covering career guidance, student counselling, academic writing coaching, internship guidance, and educational technology.",
};

export default function OurTeamPage() {
  return (
    <main>
      <PageHero
        badge="Our Expert Team"
        title={
          <>
            Meet the{" "}
            <span style={{ background: "linear-gradient(135deg,#A8C4A2,#6B8FA3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Consultants
            </span>
          </>
        }
        subtitle="Our team of specialist consultants brings deep expertise across every area of student support — from career guidance to educational technology."
        breadcrumbs={[
          { label: "About", href: "/about/our-story" },
          { label: "Our Team" },
        ]}
        primaryCta={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Our Story", href: "/about/our-story" }}
        accentColor="#6B8FA3"
      />
      <TeamSection />
    </main>
  );
}
