import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/home/AboutPreview";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreview from "@/components/sections/home/BlogPreview";
import HomeCTA from "@/components/sections/home/HomeCTA";

export const metadata: Metadata = {
  title: "EduConsult Pro — Premier Educational Consulting in Botswana & Africa",
  description:
    "Botswana's leading educational consulting firm. Expert guidance in higher education, school placement, academic planning, special education, and institutional strategy.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <BlogPreview />
      <HomeCTA />
    </main>
  );
}
