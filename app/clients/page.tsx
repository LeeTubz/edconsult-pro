import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ClientsSection from "@/components/sections/ClientsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HomeCTA from "@/components/sections/home/HomeCTA";

export const metadata: Metadata = {
  title: "Our Clients — Who We Serve",
  description:
    "EduConsult Pro serves individuals, families, schools, and organisations across Botswana and Africa. Discover how we tailor our expertise to every client type.",
};

export default function ClientsPage() {
  return (
    <main>
      <PageHero
        badge="Who We Serve"
        title={
          <>
            Our{" "}
            <span style={{ background: "linear-gradient(135deg,#60a5fa,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Clients
            </span>
          </>
        }
        subtitle="From individual students and families to schools, universities, and corporate organisations — EduConsult Pro delivers tailored educational consulting for every client type."
        breadcrumbs={[{ label: "Clients" }]}
        primaryCta={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/services/higher-education" }}
        accentColor="#7c3aed"
      />
      <ClientsSection />
      <TestimonialsSection />
      <HomeCTA />
    </main>
  );
}
