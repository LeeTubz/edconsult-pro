import type { Metadata } from "next";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://platinumaccolades.co.bw"
).replace(/\/$/, "");

/**
 * Builds consistent per-page metadata: canonical URL, Open Graph, and
 * Twitter card, so every route (not just the homepage) carries its own
 * title/description into social shares and search results.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  /** Route path starting with "/", or "" for the homepage. */
  path: string;
  /** Absolute or site-relative image URL. Defaults to the site OG image. */
  image?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : `${siteUrl}/og-image.png`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Platinum Accolades",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

interface BreadcrumbEntry {
  label: string;
  path?: string;
}

/** JSON-LD BreadcrumbList for a page's breadcrumb trail (always starts at Home). */
export function breadcrumbSchema(trail: BreadcrumbEntry[]) {
  const items = [{ label: "Home", path: "" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${siteUrl}${item.path || ""}`,
    })),
  };
}
