import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTA() {
  return (
    <section className="s-cta" id="notify">
      <div className="cta-bg-t">ACESPACE</div>
      <ScrollReveal className="cta-in">
        <div className="cta-ey">Coming Soon · 2026년 9월 런칭 예정</div>
        <h2 className="cta-h">가장 먼저,<br /><span className="hl">ACESPACE.</span></h2>
        <div className="cta-sub">2026년 9월, 가장 먼저 만나보세요.</div>

        {/* 카카오톡 채널 추가 버튼 */}
        <a
          href="https://pf.kakao.com/_BJudX/friend"
          target="_blank"
          rel="noopener"
          className="cta-kakao"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 0.6C4.029 0.6 0 3.726 0 7.554C0 9.918 1.558 12.002 3.932 13.206L2.933 16.802C2.845 17.116 3.213 17.366 3.486 17.182L7.874 14.268C8.243 14.318 8.618 14.346 9 14.346C13.971 14.346 18 11.22 18 7.392C18 3.726 13.971 0.6 9 0.6Z"
              fill="#1A1210"
            />
          </svg>
          런칭 알림받기
        </a>

        <div className="cta-close">
          <div className="cta-close-copy">가족의 행복을 담는, 단 하나의 공간.</div>
          <div className="cta-close-br">ACESPACE</div>
        </div>
      </ScrollReveal>
    </section>
  );
}
