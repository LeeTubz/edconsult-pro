import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/home/AboutPreview";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreview from "@/components/sections/home/BlogPreview";
import HomeCTA from "@/components/sections/home/HomeCTA";

export const metadata: Metadata = {
  title: "Olive Shoots | Educational Consultancy in Botswana & Africa",
  description:
    "Guiding students through career clarity, counselling, academic-writing coaching, internship guidance, and educational technology.",
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
