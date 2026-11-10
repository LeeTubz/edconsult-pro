import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/home/AboutPreview";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import ProfessionalNetworkSection from "@/components/sections/home/ProfessionalNetworkSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ResultsSection from "@/components/sections/ResultsSection";
import BlogPreview from "@/components/sections/home/BlogPreview";
import HomeCTA from "@/components/sections/home/HomeCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Platinum Accolades | Educational Consultancy in Botswana & Africa",
  description:
    "Platinum Accolades is an educational consultancy in Gaborone, Botswana offering academic support, career guidance, counselling and mentorship, quality assurance, institutional audits, and educational technology capacity building for students and institutions across Botswana and southern Africa.",
  path: "",
});

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <ProfessionalNetworkSection />
      <WhyChooseUsSection />
      <ResultsSection />
      <BlogPreview />
      <HomeCTA />
    </main>
  );
}
