/* ═══════════════════════════════════════
   ACESPACE — 모든 카피 텍스트 상수
   ═══════════════════════════════════════ */

export const TICKER_ITEMS = [
  "TPU Air Beam",
  "PVC-Free",
  "FR-Free · PFAS-Free",
  "OEKO-TEX Certified",
  "5분 설치",
  "커넥터블 3동",
  "Natural Luxury",
  "가족의 모든 순간",
] as const;

export const FIVE_FEATURES = [
  { num: "기능 01", title: "내장형 양방향 펌프", body: "별도 펌프 없이 5분 안에 설치 완료. 준비에 쓰는 시간을 최소화합니다." },
  { num: "기능 02", title: "커넥터블 3동 시스템", body: "ONE, TOGETHER, WHOLE. ACESPACE가 설계한 공간의 방식." },
  { num: "기능 03", title: "분리형 세탁 커버", body: "커버를 분리해 세탁할 수 있습니다. 다음 추억을 위해." },
] as const;

export const MATERIAL_BADGES = ["PVC-Free", "FR-Free", "PFAS-Free", "OEKO-TEX"] as const;

export const MATERIAL_ITEMS = [
  { idx: "01", name: "TPU Air Beam", desc: "열가소성 폴리우레탄 — PVC 없이 더 가볍고 안전하게", tag: "PVC-Free" },
  { idx: "02", name: "OEKO-TEX® 면원단", desc: "유해물질 국제 안전기준 인증 — 아이 피부에 닿는 소재", tag: "Certified" },
  { idx: "03", name: "FR-Free", desc: "브롬계·염소계 난연제 없음 — 접촉하는 모든 소재에서", tag: "FR-Free" },
  { idx: "04", name: "PFAS-Free", desc: "영구 잔류 화학물질 없음 — 아이가 살아갈 환경까지", tag: "PFAS-Free" },
  { idx: "05", name: "분리형 세탁 커버", desc: "캠핑 후 완전히 씻어낼 수 있는 구조. 위생과 지속가능성.", tag: "Washable" },
] as const;

export const PRODUCTS = {
  architecture: {
    label: "Architecture",
    title: "에어텐트",
    desc: "공간을 만드는 구조. TPU 에어빔, 내장형 펌프, 커넥터블 시스템.",
    items: [
      { name: "도킹배드룸", type: "베딩룸 텐트 · 1~2인", desc: "아이와 함께하는 수면 공간. TPU 투명 창문으로 하늘을 봅니다." },
      { name: "베라돔 2.7", type: "패밀리 텐트 · 3~4인", desc: "가족이 함께 모이는 넓은 거실형 메인 공간." },
      { name: "베라돔 5.7", type: "리빙쉘 · 6~8인", desc: "가장 넓은 오픈형 공간. 야외 거실을 완성합니다." },
    ],
  },
  living: {
    label: "Living",
    title: "에어 가구",
    desc: "공간을 완성하는 경험. 분리형 세탁 커버, OEKO-TEX 인증 소재.",
    items: [
      { name: "몰리소파", type: "에어 소파", desc: "공간에 자리를 잡습니다. 분리형 세탁 커버 적용." },
      { name: "몰리베드", type: "에어 베드", desc: "자연 속에서 흘러가듯 잠듭니다. 분리형 세탁 커버 적용." },
      { name: null, type: "이불 · 베개 세트", desc: "공간에 온기를 더합니다. OEKO-TEX 인증 소재." },
    ],
  },
} as const;

export const WHY_CARDS = [
  { num: "01", title: "PVC 대신 TPU", copy: "PVC는 더 저렴하고 쉬운 선택이었습니다. ACESPACE는 TPU를 선택했습니다. 아이가 숨 쉬는 공간이니까요.", tag: "PVC-Free", delay: "d1" },
  { num: "02", title: "5분 설치", copy: "내장형 양방향 펌프. 별도 장비 없이 5분이면 됩니다. 나머지 시간은 가족 것입니다.", tag: "Built-in Pump", delay: "d2" },
  { num: "03", title: "커넥터블 3동", copy: "ONE, TOGETHER, WHOLE. ACESPACE가 설계한 공간의 방식.", tag: "ONE·TOGETHER·WHOLE", delay: "d3" },
  { num: "04", title: "OEKO-TEX 인증", copy: "면원단에 OEKO-TEX 국제 안전기준 인증. 아이 피부에 닿는 소재, 숫자로 증명합니다.", tag: "Certified", delay: "d1" },
  { num: "05", title: "분리 세탁 커버", copy: "커버를 분리해 세탁할 수 있습니다. 캠핑 후 완전히 씻어내고 다음 추억을 준비하세요.", tag: "Washable", delay: "d2" },
  { num: "06", title: "Natural Luxury", copy: "자연 속 합리적 프리미엄. 과시가 아닌 경험 중심. 머무는 공간의 분위기까지 설계합니다.", tag: "Atmosphere", delay: "d3" },
] as const;

export const FOOTER_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Naver Blog", href: "#" },
  { label: "acespace.co.kr", href: "#" },
] as const;
