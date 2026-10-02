import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FAQSection from "@/components/sections/FAQSection";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us | Educational Consultancy in Botswana",
  description:
    "Meet Platinum Accolades: a Gaborone-based educational consultancy team offering academic support, career guidance, and institutional consulting across Botswana and southern Africa. Learn our mission, approach, and expertise.",
  path: "/about",
});

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
