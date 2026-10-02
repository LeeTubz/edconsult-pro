import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ClientsSection from "@/components/sections/ClientsSection";
import HomeCTA from "@/components/sections/home/HomeCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Clients | Who We Serve in Botswana",
  description:
    "Platinum Accolades serves individual students and families, and schools and institutions, across Botswana and southern Africa. Discover how we tailor our support to every client type.",
  path: "/clients",
});

export default function ClientsPage() {
  return (
    <main>
      <PageHero
        badge="Who We Serve"
        title={
          <>
            Our{" "}
            <span style={{ background: "linear-gradient(135deg,#B1B3B8,#EFB31E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Clients
            </span>
          </>
        }
        subtitle="From individual students and families to schools and institutions, Platinum Accolades delivers tailored student support for every client type."
        breadcrumbs={[{ label: "Clients" }]}
        primaryCta={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/services/academic-support" }}
        accentColor="#EFB31E"
      />
      <ClientsSection />
      <HomeCTA />
    </main>
  );
}
