import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ClientsSection from "@/components/sections/ClientsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HomeCTA from "@/components/sections/home/HomeCTA";

export const metadata: Metadata = {
  title: "Our Clients — Who We Serve",
  description:
    "Olive Shoots serves students, families, and schools across Botswana and Africa. Discover how we tailor our support to every client type.",
};

export default function ClientsPage() {
  return (
    <main>
      <PageHero
        badge="Who We Serve"
        title={
          <>
            Our{" "}
            <span style={{ background: "linear-gradient(135deg,#A8C4A2,#6B8FA3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Clients
            </span>
          </>
        }
        subtitle="From individual students and families to schools and institutions — Olive Shoots delivers tailored student support for every client type."
        breadcrumbs={[{ label: "Clients" }]}
        primaryCta={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/services/career-guidance" }}
        accentColor="#6B8FA3"
      />
      <ClientsSection />
      <TestimonialsSection />
      <HomeCTA />
    </main>
  );
}
