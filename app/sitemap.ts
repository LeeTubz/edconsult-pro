import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oliveshoots.com";

const serviceSlugs = [
  "academic-support",
  "quality-assurance",
  "educational-technology",
  "institutional-audits",
  "career-guidance",
  "student-counselling",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "clients", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "contact", priority: 0.9, changeFrequency: "monthly" as const },
    ...serviceSlugs.map((slug) => ({
      path: `services/${slug}`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    })),
    ...blogPosts.map((post) => ({
      path: `blog/${post.slug}`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),
  ];

  return pages.map((page) => ({
    url: `${baseUrl}/${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
