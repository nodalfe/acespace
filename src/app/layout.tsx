import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, DM_Sans, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces-ref",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-ref",
  display: "swap",
});

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto-ref",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ACESPACE — 공간을 열면, 추억이 시작됩니다",
  description:
    "가족의 행복을 담는, 단 하나의 공간. ACESPACE — 에어 아웃도어 기어 브랜드. 2026년 9월 런칭.",
  keywords: [
    "ACESPACE",
    "에어텐트",
    "캠핑",
    "가족캠핑",
    "PVC-Free",
    "에어 아웃도어",
  ],
  openGraph: {
    title: "ACESPACE — 공간을 열면, 추억이 시작됩니다",
    description: "가족의 행복을 담는, 단 하나의 공간. ACESPACE",
    url: "https://acespace.co.kr",
    siteName: "ACESPACE",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${fraunces.variable} ${dmSans.variable} ${notoSerifKR.variable}`}
    >
      <body>
        {children}
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
