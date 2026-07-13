import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://edconsultpro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = [
    { id: "", priority: 1.0, changeFrequency: "weekly" as const },
    { id: "#about", priority: 0.9, changeFrequency: "monthly" as const },
    { id: "#services", priority: 0.9, changeFrequency: "monthly" as const },
    { id: "#what-we-do", priority: 0.8, changeFrequency: "monthly" as const },
    { id: "#clients", priority: 0.8, changeFrequency: "monthly" as const },
    { id: "#why-us", priority: 0.8, changeFrequency: "monthly" as const },
    { id: "#testimonials", priority: 0.7, changeFrequency: "monthly" as const },
    { id: "#blog", priority: 0.8, changeFrequency: "weekly" as const },
    { id: "#faq", priority: 0.7, changeFrequency: "monthly" as const },
    { id: "#contact", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return sections.map((section) => ({
    url: `${baseUrl}/${section.id}`,
    lastModified: new Date(),
    changeFrequency: section.changeFrequency,
    priority: section.priority,
  }));
}
