import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | Free Consultation in Gaborone, Botswana",
  description:
    "Get in touch with Platinum Accolades in Gaborone, Botswana by phone, WhatsApp, or email. Book a free consultation for academic support, career guidance, or institutional consulting.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <PageHero
        badge="Get In Touch"
        title={
          <>
            Book a{" "}
            <span style={{ background: "linear-gradient(135deg,#B1B3B8,#EFB31E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Free Consultation
            </span>
          </>
        }
        subtitle="Ready to take the next step? Reach out today. Your first consultation is completely free, with no obligation."
        breadcrumbs={[{ label: "Contact" }]}
        primaryCta={{ label: "Call Us Now", href: "tel:+26776150511" }}
        secondaryCta={{ label: "Email Us", href: "mailto:knowledgelab.bw@gmail.com" }}
        accentColor="#EFB31E"
      />
      <ContactSection />
    </main>
  );
}
