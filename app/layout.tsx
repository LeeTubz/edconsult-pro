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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oliveshoots.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Olive Shoots — Students Support Consultancy in Botswana & Africa",
    template: "%s | Olive Shoots",
  },
  description:
    "Olive Shoots is a students support consultancy offering career guidance, student counselling, academic-writing coaching, internship guidance, and educational technology training. Serving students and institutions across Botswana and southern Africa.",
  keywords: [
    "students support consultancy Botswana",
    "career guidance Botswana",
    "student counselling Botswana",
    "academic writing coaching Africa",
    "internship guidance Botswana",
    "educational technology Africa",
    "university admissions Botswana",
    "UB admission help",
    "UNISA guidance",
    "UCT admissions Africa",
    "subject choice advice Botswana",
    "personal statement coaching Africa",
    "school counsellor support Gaborone",
    "career clarity Botswana",
    "ODL and e-learning Botswana",
  ],
  authors: [{ name: "Olive Shoots" }],
  creator: "Olive Shoots",
  publisher: "Olive Shoots",
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
    siteName: "Olive Shoots",
    title: "Olive Shoots — Students Support Consultancy",
    description:
      "Guiding students through career clarity, counselling, coaching, and the pathways beyond the classroom. 500+ students guided, 200+ schools served, 98% success rate.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Olive Shoots — Students Support Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olive Shoots — Students Support Consultancy",
    description:
      "Career guidance, counselling, coaching, and educational technology support for students. Book your free consultation today.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@oliveshoots",
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
    { media: "(prefers-color-scheme: light)", color: "#f5f4f0" },
    { media: "(prefers-color-scheme: dark)", color: "#141a10" },
  ],
};

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Olive Shoots",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Students support consultancy offering career guidance, student counselling, academic-writing coaching, internship guidance, and educational technology training.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 1234, Luthuli Road",
    addressLocality: "Gaborone",
    addressRegion: "South-East District",
    addressCountry: "BW",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+267-71-234-567",
    contactType: "customer service",
    email: "info@oliveshoots.com",
    areaServed: ["BW", "ZA", "ZW", "NA", "ZM", "MW"],
    availableLanguage: ["English", "Setswana"],
  },
  sameAs: [
    "https://www.linkedin.com/company/oliveshoots",
    "https://twitter.com/oliveshoots",
    "https://www.facebook.com/oliveshoots",
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
