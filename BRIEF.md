# ACESPACE — Project Brief

## 프로젝트 개요

```
브랜드명: ACESPACE
도메인:   acespace.co.kr
런칭:     2026년 9월
배포:     AWS EC2 + Nginx + Next.js
```

---

## 작업 목표

현재 `acespace-homepage.html` (단일 HTML 파일) 을 **Next.js 프로젝트**로 변환하고 AWS EC2에 배포한다.

- HTML → Next.js 컴포넌트 분리
- 이메일 수집 백엔드 연결
- EC2 배포 + Nginx + SSL
- acespace.co.kr 도메인 연결

---

## 브랜드 정의

```
ACESPACE는 공간감과 내부 분위기를 중심으로 설계된
에어 아웃도어 기어 브랜드입니다.

단순한 장비를 넘어, '머무는 공간'을 설계합니다.
```

### 타겟

```
Primary:   패밀리 (40대, 경험 있는 가족 캠퍼)
Secondary: 커플, 애견동반 가족
```

### 포지셔닝

```
Natural Luxury — 자연 속 합리적 프리미엄
기술보다 경험, 스펙보다 기억
```

---

## 슬로건 & 카피 시스템

### 메인 슬로건

```
가족의 행복을 담는, 단 하나의 공간. ACESPACE
"The one space that holds your family's happiness."
```

### 카피 2트랙 원칙

```
감성 트랙 — 주어: ACESPACE / 공간
           숫자·스펙 없음. 느낌으로 전달.
           사용처: Hero, About, SNS, CTA

실용 트랙 — 주어: 제품 / 소재 / 숫자
           형용사 최소화. 사실만.
           사용처: 제품 상세, 소재 섹션, 기능 설명
```

### 확정 카피 라인

```yaml
감성:
  sub_slogan:    "가족의 모든 순간을 위한 공간, ACESPACE"
  brand_story:   "설치하느라 지쳐 아이와 눈을 못 맞추는 순간이 있었습니다. 그 순간을 없애고 싶었습니다."
  atmosphere:    "공간이 시작되면, 추억이 따라옵니다."
  closing:       "가족이 머문 공간은 추억이 됩니다. ACESPACE"
  cta_heading:   "가장 먼저, ACESPACE."

실용:
  material_main: "PVC 쓰지 않습니다. 아이가 숨 쉬는 공간이니까요."
  material_3:    "PVC-Free. FR-Free. PFAS-Free."
  function_pump: "5분이면 됩니다. 나머지 시간은 가족 것입니다."
  function_sys:  "ONE, TOGETHER, WHOLE. ACESPACE가 설계한 공간의 방식."
```

---

## 컬러 팔레트

```css
:root {
  --forest:   #1C1814;   /* 다크 배경 (Hero, Material, CTA) */
  --forest2:  #100E0B;   /* Footer 배경 */
  --brown:    #4A3728;   /* 5분 섹션 배경 */
  --sage:     #8B7355;   /* 웜 브라운 액센트 */
  --sand:     #C8B898;   /* 라이트 포인트, 강조 텍스트 */
  --terra:    #C4582A;   /* Ticker, CTA 버튼 액센트, 태그 */
  --amber:    #D4943A;   /* 보조 액센트 */
  --cream:    #F2EDE3;   /* 밝은 섹션 배경 */
  --ivory:    #FAF7F2;   /* 기본 배경, 카드 */
  --fog:      #8C8480;   /* 보조 텍스트 */
  --ink:      #0D0E0C;   /* 기본 텍스트 */
}
```

---

## 타이포그래피

```css
/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@...');
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css');
/* + Noto Serif KR, DM Sans */

/* 역할 분담 */
Fraunces       → 영문 디스플레이 헤드라인 (Hero 영문, 영문 섹션)
Pretendard 900 → 한글 헤드라인 정체 (모든 섹션 한글 타이틀)
Noto Serif KR  → 한글 이탤릭 강조 (헤드라인 내 감성 강조)
DM Sans        → 영문 UI 레이블, 태그, 배지
Pretendard 400 → 한글 본문 전체

/* 사이즈 위계 */
T1 임팩트:  clamp(48px, 8vw, 100px)  → 5분, Material
T2 섹션헤드: clamp(36px, 5vw, 64px)  → Brand Story, Products
T3 보조헤드: clamp(28px, 4vw, 48px)  → Why ACESPACE
```

---

## 제품 라인

### ARCHITECTURE — 에어텐트 3종 (2026년 9월 출시)

```
도킹배드룸  · 베딩룸 텐트 · 1~2인  · 아이와 함께하는 수면 공간. TPU 투명 창문.
베라돔 4.0  · 패밀리 텐트 · 3~4인  · 가족이 함께 모이는 넓은 거실형 메인 공간.
베라돔 6.0  · 리빙쉘     · 6~8인  · 가장 넓은 오픈형 공간. 야외 거실.
```

### LIVING — 에어 가구 3종 (2026년 9월 출시)

```
몰리소파    · 에어 소파      · 분리형 세탁 커버 적용
몰리베드    · 에어 베드      · 분리형 세탁 커버 적용
미확정      · 이불·베개 세트 · OEKO-TEX 인증 소재
```

---

## 핵심 차별화

```
TPU 에어빔     → PVC-Free / FR-Free / PFAS-Free
OEKO-TEX 인증  → 면원단 국제 안전기준
내장형 양방향 펌프 → 5분 설치
커넥터블 3동 시스템 → ONE · TOGETHER · WHOLE (업계 최초)
분리형 세탁 커버   → 캠핑 후 완전 세탁 가능
```

---

## 홈페이지 섹션 구조

```
1. Nav          고정 상단 (로고 + 메뉴 + CTA 버튼)
2. Hero         메인 슬로건 풀스크린 (다크 배경)
3. Ticker       키워드 자동 스크롤 (terra 배경)
4. Brand Story  창업 스토리 (감성 트랙)
5. 5분          내장 펌프 기능 (실용 트랙, 다크 브라운 배경)
6. Material     PVC-Free 소재 철학 (실용 트랙, 다크 배경)
7. Products     제품 라인 (Architecture + Living)
8. Space Begins 감성 전환 섹션 (다크 배경)
9. Why          6가지 차별화 (실용 트랙)
10. CTA         이메일 수집 (다크 배경)
11. Footer
```

---

## 배포 환경

```
Server:  AWS EC2 (t3.small 이상 권장)
OS:      Ubuntu 22.04 LTS
Runtime: Node.js 18+
Server:  Nginx (reverse proxy)
Process: PM2
SSL:     Let's Encrypt (Certbot)
Domain:  acespace.co.kr
```

### Nginx 기본 설정 방향

```nginx
server {
    listen 80;
    server_name acespace.co.kr www.acespace.co.kr;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name acespace.co.kr www.acespace.co.kr;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 런칭 알림 수집

```
방식:        카카오톡 채널 추가
버튼 텍스트: "런칭 알림받기"
버튼 스타일: ACESPACE 브랜드 컬러 (ivory/sand)
채널 ID:     _ZeUTxl
기능:        Kakao.Channel.addChannel({ channelPublicId: '_ZeUTxl' })
```

---

## 로고

```
심볼: 텐트+A자 삼각형 아치 마크
      하단 중앙 아치형 입구 컷아웃, 두꺼운 획, 둥근 모서리
워드마크: 소문자 "acespace", 둥근 산세리프

파일:
  블랙배경 + 골드 로고: KakaoTalk_20260331_172935105_01.png
  올리브배경 + 화이트 로고: KakaoTalk_20260331_172935105.png
```

---

## Next.js 컴포넌트 분리 가이드

```
components/
├── layout/
│   ├── Nav.tsx
│   └── Footer.tsx
├── sections/
│   ├── Hero.tsx
│   ├── Ticker.tsx
│   ├── BrandStory.tsx
│   ├── FiveMinutes.tsx
│   ├── Material.tsx
│   ├── Products.tsx
│   ├── SpaceBegins.tsx
│   ├── Why.tsx
│   └── CTA.tsx
├── ui/
│   ├── ScrollReveal.tsx
│   └── Cursor.tsx
└── constants/
    └── copy.ts       ← 모든 카피 텍스트 상수화
```

---

*참고 파일: `acespace-homepage.html` (디자인 레퍼런스)*
*작성일: 2026.04*