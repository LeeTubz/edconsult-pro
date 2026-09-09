"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

const posts = blogPosts.slice(0, 3);

export default function BlogPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--background)" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
              style={{ background: "rgba(90,107,79,0.08)", border: "1px solid rgba(90,107,79,0.2)" }}>
              <span className="text-sm font-semibold text-[#5A6B4F] dark:text-[#A8C4A2]">Insights & Articles</span>
            </div>
            <h2 className="section-title" style={{ color: "var(--foreground)" }}>
              Latest{" "}
              <span style={{ background: "linear-gradient(135deg,#8FAE7A,#6B8FA3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Insights
              </span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-semibold text-[#5A6B4F] hover:text-[#4a5842] transition-colors shrink-0"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full"
                style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm"
                      style={{ background: `${post.categoryColor}dd`, color: "white" }}
                    >
                      <Tag className="w-2.5 h-2.5" />
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-xs" style={{ color: "var(--muted)" }}>
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                    <span>·</span>
                    {post.date}
                  </div>
                  <h3 className="text-base font-bold mb-2 leading-snug group-hover:text-[#5A6B4F] transition-colors line-clamp-2"
                    style={{ color: "var(--foreground)" }}>
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed line-clamp-2 mb-4" style={{ color: "var(--muted)" }}>
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2 transition-all"
                    style={{ color: post.categoryColor }}>
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
