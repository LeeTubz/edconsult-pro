interface BrandMotifProps {
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Large decorative olive-sprig silhouette used as a soft background accent.
 * Purely ornamental, not the real logo, just an echo of its branch/leaf shape
 * so brand-heavy sections don't rely on stock photography alone.
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
      <path d="M200 500V180" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <ellipse cx="200" cy="120" rx="42" ry="78" transform="rotate(-14 200 120)" fill="currentColor" opacity="0.9" />
      <ellipse cx="120" cy="160" rx="36" ry="68" transform="rotate(-48 120 160)" fill="currentColor" opacity="0.75" />
      <ellipse cx="280" cy="160" rx="36" ry="68" transform="rotate(48 280 160)" fill="currentColor" opacity="0.75" />
      <ellipse cx="70" cy="240" rx="30" ry="58" transform="rotate(-68 70 240)" fill="currentColor" opacity="0.6" />
      <ellipse cx="330" cy="240" rx="30" ry="58" transform="rotate(68 330 240)" fill="currentColor" opacity="0.6" />
      <ellipse cx="150" cy="90" rx="26" ry="50" transform="rotate(-30 150 90)" fill="currentColor" opacity="0.55" />
      <ellipse cx="250" cy="90" rx="26" ry="50" transform="rotate(30 250 90)" fill="currentColor" opacity="0.55" />
    </svg>
  );
}

export default BrandMotif;
