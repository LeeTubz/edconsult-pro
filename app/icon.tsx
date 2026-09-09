import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#8FAE7A,#5A6B4F)",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
          <path d="M16 27V13" stroke="#F5F4F0" strokeWidth="1.6" strokeLinecap="round" />
          <ellipse cx="16" cy="9.5" rx="3.6" ry="6.2" transform="rotate(-18 16 9.5)" fill="#A8C4A2" />
          <ellipse cx="10.2" cy="13.5" rx="3.1" ry="5.4" transform="rotate(-52 10.2 13.5)" fill="#8FAE7A" />
          <ellipse cx="21.8" cy="13.5" rx="3.1" ry="5.4" transform="rotate(52 21.8 13.5)" fill="#8FAE7A" />
          <ellipse cx="8" cy="20" rx="2.6" ry="4.6" transform="rotate(-72 8 20)" fill="#A8C4A2" />
          <ellipse cx="24" cy="20" rx="2.6" ry="4.6" transform="rotate(72 24 20)" fill="#A8C4A2" />
          <circle cx="16" cy="24.5" r="2.1" fill="#5A6B4F" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
