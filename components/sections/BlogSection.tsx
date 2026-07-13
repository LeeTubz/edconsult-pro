"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

const posts = blogPosts;

export default function BlogSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="blog"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--background)" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14"
        >
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
              style={{ background: "rgba(37, 99, 235, 0.08)", border: "1px solid rgba(37, 99, 235, 0.2)" }}
            >
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Insights & Articles</span>
            </div>
            <h2 className="section-title" style={{ color: "var(--foreground)" }}>
              Educational{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #fbbf24 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Insights
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-base" style={{ color: "var(--muted)" }}>
            Expert perspectives on education, strategy, and the future of learning in Botswana and Africa.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
        <Link
          href={`/blog/${posts[0].slug}`}
          className="group relative rounded-3xl overflow-hidden mb-10 block border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="relative md:w-80 lg:w-96 h-56 md:h-auto shrink-0 overflow-hidden">
              <Image
                src={posts[0].imageUrl}
                alt={posts[0].imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 384px"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, transparent 60%, var(--card-bg) 100%)" }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-8 md:p-10 lg:p-12">
              <div className="flex flex-wrap gap-3 mb-4">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: `${posts[0].categoryColor}18`, color: posts[0].categoryColor }}
                >
                  <Tag className="w-3 h-3" />
                  {posts[0].category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                  style={{ background: "var(--muted-bg)", color: "var(--muted)" }}>
                  <Clock className="w-3 h-3" />
                  {posts[0].readTime}
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-blue-600 transition-colors leading-tight"
                style={{ color: "var(--foreground)" }}
              >
                {posts[0].title}
              </h3>
              <p className="mb-6 leading-relaxed" style={{ color: "var(--muted)" }}>
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium" style={{ color: "var(--muted)" }}>
                  {posts[0].date}
                </span>
                <span
                  className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200"
                  style={{ color: posts[0].categoryColor }}
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </Link>
        </motion.div>

        {/* Grid of remaining posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
            >
            <Link
              href={`/blog/${post.slug}`}
              className="group relative rounded-2xl overflow-hidden block border transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                {/* Category badge over image */}
                <div className="absolute top-3 left-3">
                  <span
                    className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm"
                    style={{
                      background: `${post.categoryColor}dd`,
                      color: "white",
                    }}
                  >
                    <Tag className="w-2.5 h-2.5" />
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs flex items-center gap-1" style={{ color: "var(--muted)" }}>
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span className="text-xs" style={{ color: "var(--muted)" }}>·</span>
                  <span className="text-xs font-medium" style={{ color: "var(--muted)" }}>
                    {post.date}
                  </span>
                </div>

                <h3
                  className="text-base font-bold mb-2 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2"
                  style={{ color: "var(--foreground)" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4 line-clamp-2"
                  style={{ color: "var(--muted)" }}
                >
                  {post.excerpt}
                </p>

                <span
                  className="flex items-center gap-1.5 text-xs font-semibold transition-all group-hover:gap-2"
                  style={{ color: post.categoryColor }}
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-14"
        >
          <Link
            href="/blog"
            className="inline-block px-8 py-4 rounded-full font-semibold text-base border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
