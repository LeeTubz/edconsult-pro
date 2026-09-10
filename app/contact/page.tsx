import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Consultation",
  description:
    "Get in touch with Olive Shoots. Book a free consultation and start growing toward your future today.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        badge="Get In Touch"
        title={
          <>
            Book a{" "}
            <span style={{ background: "linear-gradient(135deg,#A8C4A2,#6B8FA3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Free Consultation
            </span>
          </>
        }
        subtitle="Ready to take the next step? Reach out today — your first consultation is completely free, with no obligation."
        breadcrumbs={[{ label: "Contact" }]}
        primaryCta={{ label: "Call Us Now", href: "tel:+26774332739" }}
        secondaryCta={{ label: "Email Us", href: "mailto:knowledgelab.bw@gmail.com" }}
        accentColor="#5A6B4F"
      />
      <ContactSection />
    </main>
  );
}
