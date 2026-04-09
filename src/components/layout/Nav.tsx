"use client";

import { useEffect, useRef } from "react";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      navRef.current?.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={navRef}>
      <div className="n-logo">
        <svg width="148" height="44" viewBox="0 0 148 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <g>
            <path d="M20 38 Q8 38 8 38 L20 12 Q22 8 24 8 Q26 8 28 12 L40 38 Q40 38 28 38"
              fill="none" stroke="rgba(224,208,188,0.9)" strokeWidth="4.2" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M16.5 38 L16.5 31 Q16.5 25.5 20 25.5 L20 25.5 Q23.5 25.5 24 28"
              fill="none" stroke="rgba(224,208,188,0.9)" strokeWidth="4.2" strokeLinecap="round" />
            <path d="M24 28 Q24.5 25.5 28 25.5 Q31.5 25.5 31.5 31 L31.5 38"
              fill="none" stroke="rgba(224,208,188,0.9)" strokeWidth="4.2" strokeLinecap="round" />
          </g>
          <text x="50" y="29" fontFamily="'Pretendard', 'DM Sans', sans-serif" fontWeight="500" fontSize="15"
            fill="rgba(242,237,227,0.9)" letterSpacing="0.5">acespace</text>
        </svg>
      </div>
      <div className="n-menu">
        <a href="#story" className="n-link">브랜드</a>
        <a href="#material" className="n-link">소재</a>
        <a href="#products" className="n-link">제품</a>
        <a href="#why" className="n-link">차별화</a>
        <a href="#notify" className="n-cta">런칭 알림</a>
      </div>
    </nav>
  );
}
