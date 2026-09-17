import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://platinumaccolades.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Platinum Accolades | Educational Consultancy in Botswana & Africa",
    template: "%s | Platinum Accolades",
  },
  description:
    "Platinum Accolades is a full-service educational consultancy offering academic support (tuition, writing, editing, research), quality assurance and institutional audits, educational technology training, career guidance, and student counselling, coaching and mentorship. Serving students and institutions across Botswana and southern Africa.",
  keywords: [
    "educational consultancy Botswana",
    "IGCSE tuition Botswana",
    "IB tuition Botswana",
    "academic writing consultation Africa",
    "academic editing and proofreading Botswana",
    "research consultation Botswana",
    "quality assurance educational institutions",
    "external moderation Botswana",
    "institutional audits education",
    "educational technology training Africa",
    "career guidance Botswana",
    "student counselling Botswana",
    "university admissions Botswana",
    "UB admission help",
    "UNISA guidance",
    "subject choice advice Botswana",
    "ODL and e-learning Botswana",
  ],
  authors: [{ name: "Platinum Accolades" }],
  creator: "Platinum Accolades",
  publisher: "Platinum Accolades",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Platinum Accolades",
    title: "Platinum Accolades | Educational Consultancy",
    description:
      "Academic support, quality assurance, educational technology, career guidance, and student counselling. 500+ students guided, 200+ schools served, 98% success rate.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Platinum Accolades | Educational Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Platinum Accolades | Educational Consultancy",
    description:
      "Academic support, quality assurance, educational technology, career guidance, and student counselling. Book your free consultation today.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@platinumaccolades",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "education",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F4F0" },
    { media: "(prefers-color-scheme: dark)", color: "#0D2038" },
  ],
};

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Platinum Accolades",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Full-service educational consultancy offering academic support (tuition, writing, editing, research), quality assurance and institutional audits, educational technology training, career guidance, and student counselling, coaching and mentorship.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gaborone",
    addressRegion: "South-East District",
    addressCountry: "BW",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+267-76-150-511",
    contactType: "customer service",
    email: "knowledgelab.bw@gmail.com",
    areaServed: ["BW", "ZA", "ZW", "NA", "ZM", "MW"],
    availableLanguage: ["English", "Setswana"],
  },
  sameAs: [
    "https://www.linkedin.com/company/platinumaccolades",
    "https://www.facebook.com/platinumaccolades",
    "https://www.instagram.com/platinumaccolades",
  ],
  foundingDate: "2009",
  numberOfEmployees: "25",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
