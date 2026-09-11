"use client";

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

/** Infinite scrolling text ticker. Duplicates the item list so the loop is seamless. */
export function Marquee({ items, speed = 28, className = "", style }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`} style={style}>
      <div
        className="flex w-max"
        style={{ animation: `olive-marquee ${speed}s linear infinite` }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center shrink-0" aria-hidden={copy === 1}>
            {items.map((item, i) => (
              <span key={i} className="flex items-center shrink-0">
                <span className="px-6 sm:px-8 text-base sm:text-lg font-display font-semibold whitespace-nowrap">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full shrink-0 opacity-50" style={{ background: "currentColor" }} />
              </span>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes olive-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default Marquee;
