import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import TeamSection from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "Our Team — Meet Our Expert Consultants",
  description:
    "Meet EduConsult Pro's team of specialist educational consultants covering higher education, school placement, special education, curriculum development, and more.",
};

export default function OurTeamPage() {
  return (
    <main>
      <PageHero
        badge="Our Expert Team"
        title={
          <>
            Meet the{" "}
            <span style={{ background: "linear-gradient(135deg,#60a5fa,#fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Consultants
            </span>
          </>
        }
        subtitle="Our team of specialist consultants brings deep expertise across every area of educational consulting — from university admissions to institutional strategy."
        breadcrumbs={[
          { label: "About", href: "/about/our-story" },
          { label: "Our Team" },
        ]}
        primaryCta={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Our Story", href: "/about/our-story" }}
        accentColor="#7c3aed"
      />
      <TeamSection />
    </main>
  );
}
