import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import BlogSection from "@/components/sections/BlogSection";
import HomeCTA from "@/components/sections/home/HomeCTA";

export const metadata: Metadata = {
  title: "Blog | Student Support Insights & Articles",
  description:
    "Expert insights on career guidance, student counselling, academic writing coaching, internships, and educational technology from the Platinum Accolades team.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        badge="Insights & Articles"
        title={
          <>
            Student Support{" "}
            <span style={{ background: "linear-gradient(135deg,#B1B3B8,#EFB31E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Insights
            </span>
          </>
        }
        subtitle="Expert perspectives on career guidance, counselling, coaching, and the future of learning in Botswana and across Africa, from the Platinum Accolades team."
        breadcrumbs={[{ label: "Blog" }]}
        primaryCta={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/services/academic-support" }}
        accentColor="#EFB31E"
      />
      <BlogSection />
      <HomeCTA />
    </main>
  );
}
