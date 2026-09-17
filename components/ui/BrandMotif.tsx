interface BrandMotifProps {
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Large decorative silhouette used as a soft background accent, echoing the
 * Platinum Accolades mark (star, mortarboard, reaching figure, open book)
 * as a single-color watermark. Purely ornamental, not the real logo.
 */
export function BrandMotif({ className = "", style }: BrandMotifProps) {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Star */}
      <path
        d="M200,40 L212.34,77.99 L252.31,77.99 L219.97,101.49 L232.33,139.5 L200,116 L167.67,139.5 L180.03,101.49 L147.69,77.99 L187.66,78.01 Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Mortarboard */}
      <path d="M135,178 L200,160 L265,178 L200,196 Z" fill="currentColor" opacity="0.75" />
      <rect x="177" y="188" width="46" height="16" rx="2" fill="currentColor" opacity="0.6" />
      {/* Sphere */}
      <circle cx="200" cy="232" r="19" fill="currentColor" opacity="0.7" />
      {/* Reaching wings */}
      <ellipse cx="128" cy="278" rx="44" ry="92" transform="rotate(-35 128 278)" fill="currentColor" opacity="0.6" />
      <ellipse cx="272" cy="278" rx="44" ry="92" transform="rotate(35 272 278)" fill="currentColor" opacity="0.6" />
      {/* Stem */}
      <path d="M200 252V392" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      {/* Open book */}
      <path
        d="M200,480 C130,478 60,455 25,405 C75,420 140,430 200,428 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M200,480 C270,478 340,455 375,405 C325,420 260,430 200,428 Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}

export default BrandMotif;
