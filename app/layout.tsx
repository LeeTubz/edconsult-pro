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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://edconsultpro.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EduConsult Pro — Premier Educational Consulting in Botswana & Africa",
    template: "%s | EduConsult Pro",
  },
  description:
    "EduConsult Pro is Botswana's leading educational consulting firm offering expert guidance in higher education, school placement, academic planning, special education, curriculum development, and institutional strategy. Serving students, schools, and organisations across Botswana and southern Africa.",
  keywords: [
    "educational consulting Botswana",
    "Botswana education consultant",
    "college admissions consulting Africa",
    "school placement Botswana",
    "higher education advisor Gaborone",
    "academic consulting southern Africa",
    "special education consultant Botswana",
    "curriculum development Botswana",
    "educational technology Africa",
    "strategic planning education Botswana",
    "university admissions Botswana",
    "UB admission help",
    "UNISA guidance",
    "UCT admissions Africa",
    "K-12 school consultant Botswana",
    "accreditation consulting Africa",
    "education strategy Gaborone",
  ],
  authors: [{ name: "EduConsult Pro" }],
  creator: "EduConsult Pro",
  publisher: "EduConsult Pro",
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
    siteName: "EduConsult Pro",
    title: "EduConsult Pro — Premier Educational Consulting Services",
    description:
      "Empowering students, schools, and organizations through expert educational consulting. 500+ students guided, 200+ schools served, 98% success rate.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "EduConsult Pro — Educational Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduConsult Pro — Premier Educational Consulting",
    description:
      "Expert educational consulting for students, schools, and organizations. Book your free consultation today.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@edconsultpro",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "education",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080f2a" },
  ],
};

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduConsult Pro",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Premier educational consulting firm offering expert guidance in higher education, school placement, academic planning, special education, curriculum development, and institutional strategy.",
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
    email: "info@edconsultpro.com",
    areaServed: ["BW", "ZA", "ZW", "NA", "ZM", "MW"],
    availableLanguage: ["English", "Setswana"],
  },
  sameAs: [
    "https://www.linkedin.com/company/edconsultpro",
    "https://twitter.com/edconsultpro",
    "https://www.facebook.com/edconsultpro",
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
