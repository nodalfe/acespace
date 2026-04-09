import Image from "next/image";

export default function Hero() {
  return (
    <section className="s-hero">
      {/* 배경 사진 */}
      <Image
        src="/images/hero-bg.jpg"
        alt="ACESPACE 캠핑 연출"
        fill
        priority
        className="hero-bg-img"
      />
      {/* 다크 오버레이 */}
      <div className="hero-overlay"></div>

      <div className="hero-vline hero-vline1"></div>
      <div className="hero-vline hero-vline2"></div>

      <div className="hero-corner">
        <div className="hc-tag">Korea 2026</div>
        <div className="hc-badge"><div className="hc-dot"></div>Air Outdoor Gear</div>
      </div>

      <div className="hero-body">
        <div className="hero-tag">패밀리 · 커플 · 애견동반 — 모든 가족을 위한 단 하나의 공간</div>
        <h1 className="hero-h1">
          가족의<br />행복을 담는,<br />
          <span className="it">단 하나의</span>
          <span className="b3">공간. <span className="hl">ACESPACE</span></span>
        </h1>
      </div>

      <div className="hero-foot">
        <div className="hero-en">
          &ldquo;The one space that holds<br />your family&apos;s happiness.&rdquo;
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-txt">Scroll</div>
          <div className="hero-scroll-line"></div>
        </div>
      </div>
    </section>
  );
}
