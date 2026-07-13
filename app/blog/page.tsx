import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import BlogSection from "@/components/sections/BlogSection";
import HomeCTA from "@/components/sections/home/HomeCTA";

export const metadata: Metadata = {
  title: "Blog — Educational Insights & Articles",
  description:
    "Expert insights on higher education, school placement, curriculum development, EdTech, and more from the EduConsult Pro team.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        badge="Insights & Articles"
        title={
          <>
            Educational{" "}
            <span style={{ background: "linear-gradient(135deg,#60a5fa,#fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Insights
            </span>
          </>
        }
        subtitle="Expert perspectives on education, strategy, and the future of learning in Botswana and across Africa — from the EduConsult Pro team."
        breadcrumbs={[{ label: "Blog" }]}
        primaryCta={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/services/higher-education" }}
        accentColor="#2563eb"
      />
      <BlogSection />
      <HomeCTA />
    </main>
  );
}
