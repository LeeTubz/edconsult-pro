import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-1.5 text-sm ${className}`}
    >
      <Link
        href="/"
        className="flex items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="w-3.5 h-3.5 text-white/20" />
          {item.href && i < items.length - 1 ? (
            <Link href={item.href} className="text-white/40 hover:text-white/70 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-white/70 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
