"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

declare global {
  interface Window {
    Kakao: {
      init: (appKey: string) => void;
      isInitialized: () => boolean;
      Channel: {
        addChannel: (params: { channelPublicId: string }) => void;
      };
    };
  }
}

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [kakaoReady, setKakaoReady] = useState(false);

  useEffect(() => {
    const checkKakao = () => {
      if (window.Kakao) {
        if (!window.Kakao.isInitialized()) {
          const appKey = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;
          if (appKey) {
            window.Kakao.init(appKey);
          }
        }
        setKakaoReady(true);
      }
    };

    // SDK가 이미 로드된 경우
    if (window.Kakao) {
      checkKakao();
      return;
    }

    // SDK 로드 대기
    const interval = setInterval(() => {
      if (window.Kakao) {
        checkKakao();
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email") as string;
    if (email) {
      // TODO: 실제 이메일 수집 API 연동 (Mailchimp / Stibee / Google Sheets)
      setSubmitted(true);
    }
  };

  const handleKakaoChannel = () => {
    if (kakaoReady && window.Kakao) {
      window.Kakao.Channel.addChannel({ channelPublicId: "_ZeUTxl" });
    }
  };

  return (
    <section className="s-cta" id="notify">
      <div className="cta-bg-t">ACESPACE</div>
      <ScrollReveal className="cta-in">
        <div className="cta-ey">Coming Soon · 2026년 9월 런칭 예정</div>
        <h2 className="cta-h">그 날,<br /><span className="hl">함께하세요.</span></h2>
        <div className="cta-sub">2026년 9월, 가장 먼저 만나보세요.</div>

        {!submitted ? (
          <>
            <form className="cta-form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                className="cta-inp"
                placeholder="이메일을 입력해주세요"
                required
                autoComplete="email"
              />
              <button type="submit" className="cta-btn">알림 받기</button>
            </form>
            <div className="cta-note">얼리버드 10% 할인 · 신제품 선공개 · 2026년 9월 런칭</div>
          </>
        ) : (
          <div className="cta-ok" style={{ display: "block" }}>
            ✦ &nbsp; 감사합니다. 런칭 소식을 가장 먼저 전해드리겠습니다.
          </div>
        )}

        {/* 카카오톡 채널 추가 버튼 */}
        <button
          type="button"
          className="cta-kakao"
          onClick={handleKakaoChannel}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 0.6C4.029 0.6 0 3.726 0 7.554C0 9.918 1.558 12.002 3.932 13.206L2.933 16.802C2.845 17.116 3.213 17.366 3.486 17.182L7.874 14.268C8.243 14.318 8.618 14.346 9 14.346C13.971 14.346 18 11.22 18 7.392C18 3.726 13.971 0.6 9 0.6Z"
              fill="#1A1210"
            />
          </svg>
          카카오톡 채널 추가
        </button>

        <div className="cta-close">
          <div className="cta-close-copy">가족의 행복을 담는, 단 하나의 공간.</div>
          <div className="cta-close-br">ACESPACE</div>
        </div>
      </ScrollReveal>
    </section>
  );
}
