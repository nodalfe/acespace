import { FOOTER_LINKS } from "@/constants/copy";

export default function Footer() {
  return (
    <footer>
      <div className="f-logo">
        <svg width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <g>
            <path d="M16 31 Q6 31 6 31 L16 9 Q18 6 20 6 Q22 6 24 9 L34 31 Q34 31 24 31"
              fill="none" stroke="rgba(242,237,227,0.18)" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M13.5 31 L13.5 25 Q13.5 20.5 16.5 20.5 Q20 20.5 20 23"
              fill="none" stroke="rgba(242,237,227,0.18)" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M20 23 Q20.5 20.5 23.5 20.5 Q26.5 20.5 26.5 25 L26.5 31"
              fill="none" stroke="rgba(242,237,227,0.18)" strokeWidth="3.5" strokeLinecap="round" />
          </g>
          <text x="40" y="23" fontFamily="'Pretendard', sans-serif" fontWeight="500" fontSize="12"
            fill="rgba(242,237,227,0.18)" letterSpacing="0.3">acespace</text>
        </svg>
      </div>
      <div className="f-links">
        {FOOTER_LINKS.map((link) => (
          <a key={link.label} href={link.href}>{link.label}</a>
        ))}
      </div>
      <div className="f-copy">&copy; 2026 ACESPACE. Air Outdoor Gear.</div>
    </footer>
  );
}
