import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "Our Story — About Olive Shoots",
  description:
    "Learn about Olive Shoots' mission, vision, core values, and our 15-year journey of growing students across Botswana and southern Africa.",
};

export default function OurStoryPage() {
  return (
    <main>
      <PageHero
        badge="About Olive Shoots"
        title={
          <>
            Our Story &amp; <span style={{ background: "linear-gradient(135deg,#A8C4A2,#6B8FA3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Mission</span>
          </>
        }
        subtitle="For over 15 years, Olive Shoots has been Botswana's most trusted student support partner — empowering students to achieve extraordinary outcomes."
        breadcrumbs={[
          { label: "About", href: "/about/our-story" },
          { label: "Our Story" },
        ]}
        primaryCta={{ label: "Meet Our Team", href: "/about/our-team" }}
        secondaryCta={{ label: "Book Consultation", href: "/contact" }}
      />
      <AboutSection />
    </main>
  );
}
