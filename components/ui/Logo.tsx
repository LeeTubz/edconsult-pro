interface LogoMarkProps {
  className?: string;
}

/**
 * Simplified recreation of the Olive Shoots mark — a sprig of olive leaves —
 * for use at small nav/footer sizes. Placeholder until the real logo file
 * (public/logo.png) is supplied.
 */
export function LogoMark({ className = "w-5 h-5" }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M16 27V13" stroke="#F5F4F0" strokeWidth="1.6" strokeLinecap="round" />
      <ellipse cx="16" cy="9.5" rx="3.6" ry="6.2" transform="rotate(-18 16 9.5)" fill="#A8C4A2" />
      <ellipse cx="10.2" cy="13.5" rx="3.1" ry="5.4" transform="rotate(-52 10.2 13.5)" fill="#8FAE7A" />
      <ellipse cx="21.8" cy="13.5" rx="3.1" ry="5.4" transform="rotate(52 21.8 13.5)" fill="#8FAE7A" />
      <ellipse cx="8" cy="20" rx="2.6" ry="4.6" transform="rotate(-72 8 20)" fill="#A8C4A2" />
      <ellipse cx="24" cy="20" rx="2.6" ry="4.6" transform="rotate(72 24 20)" fill="#A8C4A2" />
      <circle cx="16" cy="24.5" r="2.1" fill="#5A6B4F" />
    </svg>
  );
}

export default LogoMark;
