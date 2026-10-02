import type { Metadata } from "next";
import Link from "next/link";
import { Home, Compass, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or may have moved.",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Our Services", href: "/#services", icon: Compass },
];

export default function NotFound() {
  return (
    <main
      className="min-h-[80vh] flex items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A1628 0%, #0F2545 50%, #0D2038 100%)" }}
    >
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(239,179,30,0.1) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center py-28">
        <div
          className="font-display font-bold text-white/10 leading-none select-none"
          style={{ fontSize: "clamp(5rem, 15vw, 9rem)" }}
        >
          404
        </div>
        <h1 className="font-display font-bold text-white mb-4 -mt-6" style={{ fontSize: "clamp(1.75rem, 3vw + 1rem, 2.5rem)" }}>
          Page Not Found
        </h1>
        <p className="text-white/60 text-lg mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have moved. Here are
          some helpful places to start instead.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                style={{ background: "rgba(255,255,255,0.06)", border: "1.5px solid rgba(255,255,255,0.2)", color: "white" }}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            style={{ background: "linear-gradient(135deg,#EFB31E,#C98F1B)", color: "#0A1628" }}
          >
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
