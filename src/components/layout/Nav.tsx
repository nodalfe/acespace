"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "#story", label: "브랜드" },
  { href: "#material", label: "소재" },
  { href: "#products", label: "제품" },
  { href: "#why", label: "차별화" },
] as const;

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      navRef.current?.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 메뉴 열렸을 때 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
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

        {/* 데스크톱 메뉴 */}
        <div className="n-menu">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="n-link">{link.label}</a>
          ))}
          <a href="#notify" className="n-cta">런칭 알림</a>
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="n-hamburger"
          onClick={() => setOpen(true)}
          aria-label="메뉴 열기"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* 모바일 풀스크린 메뉴 */}
      <div className={`n-mobile${open ? " n-mobile--open" : ""}`}>
        <button
          className="n-mobile-close"
          onClick={() => setOpen(false)}
          aria-label="메뉴 닫기"
        >
          ✕
        </button>
        <div className="n-mobile-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="n-mobile-link" onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
          <a href="#notify" className="n-mobile-cta" onClick={handleLinkClick}>
            런칭 알림
          </a>
        </div>
      </div>
    </>
  );
}
