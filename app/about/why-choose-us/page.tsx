import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Why Choose Us — The EduConsult Difference",
  description:
    "Discover what sets EduConsult Pro apart: 15+ years of expertise, 500+ students guided, 98% client satisfaction, and a personalised approach that delivers real results.",
};

export default function WhyChooseUsPage() {
  return (
    <main>
      <PageHero
        badge="The EduConsult Difference"
        title={
          <>
            Why Clients{" "}
            <span style={{ background: "linear-gradient(135deg,#60a5fa,#fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Choose Us
            </span>
          </>
        }
        subtitle="We don't just consult — we partner with you for lasting educational transformation. Here's what makes EduConsult Pro the preferred choice across Botswana and Africa."
        breadcrumbs={[
          { label: "About", href: "/about/our-story" },
          { label: "Why Choose Us" },
        ]}
        primaryCta={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCta={{ label: "Meet Our Team", href: "/about/our-team" }}
        accentColor="#d97706"
      />
      <WhyChooseUsSection />
      <FAQSection />
    </main>
  );
}
