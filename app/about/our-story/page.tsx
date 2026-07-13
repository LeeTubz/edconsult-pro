import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "Our Story — About EduConsult Pro",
  description:
    "Learn about EduConsult Pro's mission, vision, core values, and our 15-year journey of transforming educational outcomes across Botswana and southern Africa.",
};

export default function OurStoryPage() {
  return (
    <main>
      <PageHero
        badge="About EduConsult Pro"
        title={
          <>
            Our Story &amp; <span style={{ background: "linear-gradient(135deg,#60a5fa,#fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Mission</span>
          </>
        }
        subtitle="For over 15 years, EduConsult Pro has been Botswana's most trusted educational consulting partner — empowering students, schools, and organisations to achieve extraordinary outcomes."
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
