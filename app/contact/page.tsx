import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Consultation",
  description:
    "Get in touch with EduConsult Pro. Book a free consultation and start your journey toward educational excellence today.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        badge="Get In Touch"
        title={
          <>
            Book a{" "}
            <span style={{ background: "linear-gradient(135deg,#60a5fa,#fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Free Consultation
            </span>
          </>
        }
        subtitle="Ready to transform your educational journey? Reach out today — your first consultation is completely free, with no obligation."
        breadcrumbs={[{ label: "Contact" }]}
        primaryCta={{ label: "Call Us Now", href: "tel:+26771234567" }}
        secondaryCta={{ label: "Email Us", href: "mailto:info@educonsultpro.co.bw" }}
        accentColor="#2563eb"
      />
      <ContactSection />
    </main>
  );
}
