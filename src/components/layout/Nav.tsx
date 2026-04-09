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
          <img src="/images/ci.png" alt="ACESPACE" className="n-logo-img" />
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
