import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import BlogSection from "@/components/sections/BlogSection";
import HomeCTA from "@/components/sections/home/HomeCTA";

export const metadata: Metadata = {
  title: "Blog — Student Support Insights & Articles",
  description:
    "Expert insights on career guidance, student counselling, academic writing coaching, internships, and educational technology from the Olive Shoots team.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        badge="Insights & Articles"
        title={
          <>
            Student Support{" "}
            <span style={{ background: "linear-gradient(135deg,#A8C4A2,#6B8FA3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Insights
            </span>
          </>
        }
        subtitle="Expert perspectives on career guidance, counselling, coaching, and the future of learning in Botswana and across Africa — from the Olive Shoots team."
        breadcrumbs={[{ label: "Blog" }]}
        primaryCta={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/services/career-guidance" }}
        accentColor="#5A6B4F"
      />
      <BlogSection />
      <HomeCTA />
    </main>
  );
}
