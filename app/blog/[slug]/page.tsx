import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-data";
import PageHero from "@/components/ui/PageHero";
import HomeCTA from "@/components/sections/home/HomeCTA";
import { Clock, Tag, ArrowRight, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} | Platinum Accolades`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const postIndex = blogPosts.indexOf(post);
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main>
      <PageHero
        badge={post.category}
        title={<>{post.title}</>}
        subtitle={post.excerpt}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.category },
        ]}
        primaryCta={{ label: "Book Consultation", href: "/contact" }}
        secondaryCta={{ label: "All Articles", href: "/blog" }}
        accentColor={post.categoryColor}
      />

      <article className="section-padding" style={{ background: "var(--background)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: `${post.categoryColor}18`, color: post.categoryColor }}
            >
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-sm" style={{ color: "var(--muted)" }}>
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span className="text-sm" style={{ color: "var(--muted)" }}>{post.date}</span>
          </div>

          {/* Featured Image */}
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.imageUrl}
              alt={post.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {/* Article Body */}
          <div
            className="prose prose-lg max-w-none"
            style={{ color: "var(--foreground)" }}
          >
            <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              {post.excerpt}
            </p>

            <p className="leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              At Platinum Accolades, we believe that informed decisions lead to better outcomes for students. This article draws on our 18+ years of experience working with students and schools across Botswana and southern Africa to give you practical, actionable guidance you can apply today.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-10" style={{ color: "var(--foreground)" }}>
              Why This Matters
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              The landscape for students in Botswana and across Africa is changing rapidly. New opportunities, from alternative academic pathways to EdTech innovations, are opening up for students who know how to navigate them. Our consultants work on the frontlines of these changes every day, and we're committed to sharing what we learn.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-10" style={{ color: "var(--foreground)" }}>
              Key Takeaways
            </h2>
            <ul className="space-y-3 mb-8">
              {[
                "Understanding your specific context is the foundation of any good strategy.",
                "Expert guidance dramatically increases the chances of achieving your educational goals.",
                "Early planning and preparation make the biggest difference in outcomes.",
                "Data-driven approaches consistently outperform intuition alone.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                    style={{ background: `${post.categoryColor}20`, color: post.categoryColor }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ color: "var(--muted)" }}>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-10" style={{ color: "var(--foreground)" }}>
              How Platinum Accolades Can Help
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              Whether you're a student, parent, or school leader, our team of specialist consultants is ready to provide the guidance you need to reach your goals. We take the time to understand your unique situation and craft support that is genuinely tailored to you.
            </p>

            {/* CTA Box */}
            <div
              className="rounded-2xl p-8 mt-10 text-center"
              style={{ background: `${post.categoryColor}08`, border: `1px solid ${post.categoryColor}25` }}
            >
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                Ready to take the next step?
              </h3>
              <p className="mb-5 text-sm" style={{ color: "var(--muted)" }}>
                Book a free consultation with one of our specialist consultants and get personalised advice for your situation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg,${post.categoryColor},${post.categoryColor}cc)` }}
              >
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Post Navigation */}
          <div className="grid sm:grid-cols-2 gap-4 mt-14 pt-10 border-t" style={{ borderColor: "var(--card-border)" }}>
            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group p-5 rounded-xl border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
              >
                <div className="flex items-center gap-2 mb-2 text-xs" style={{ color: "var(--muted)" }}>
                  <ArrowLeft className="w-3.5 h-3.5" /> Previous Article
                </div>
                <p className="text-sm font-semibold line-clamp-2 group-hover:text-[#0F2F57] transition-colors" style={{ color: "var(--foreground)" }}>
                  {prevPost.title}
                </p>
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group p-5 rounded-xl border text-right transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 sm:ml-auto"
                style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
              >
                <div className="flex items-center justify-end gap-2 mb-2 text-xs" style={{ color: "var(--muted)" }}>
                  Next Article <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm font-semibold line-clamp-2 group-hover:text-[#0F2F57] transition-colors" style={{ color: "var(--foreground)" }}>
                  {nextPost.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="section-padding" style={{ background: "var(--section-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--foreground)" }}>Related Articles</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedPosts.map((related, i) => (
              <Link
                key={i}
                href={`/blog/${related.slug}`}
                className="group block rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={related.imageUrl}
                    alt={related.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <span
                    className="text-xs font-semibold"
                    style={{ color: related.categoryColor }}
                  >
                    {related.category}
                  </span>
                  <h3 className="text-sm font-bold mt-1 line-clamp-2 group-hover:text-[#0F2F57] transition-colors" style={{ color: "var(--foreground)" }}>
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />
    </main>
  );
}
