import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "About Us | Platinum Accolades",
  description:
    "Platinum Accolades is a full-service, purpose-driven educational consultancy. Learn about our mission, approach, expertise, and why clients across Botswana and southern Africa trust us.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        badge="About Platinum Accolades"
        title={
          <>
            Guiding Minds, Strengthening{" "}
            <span style={{ background: "linear-gradient(135deg,#B1B3B8,#EFB31E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Institutions
            </span>
          </>
        }
        subtitle="A full-service, purpose-driven educational consultancy, for students, for institutions, and for the future. Best Fit For Purpose, not one size fits all."
        breadcrumbs={[{ label: "About" }]}
        primaryCta={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/services/academic-support" }}
      />
      <AboutSection />
      <TeamSection />
      <WhyChooseUsSection />
      <FAQSection />
    </main>
  );
}
