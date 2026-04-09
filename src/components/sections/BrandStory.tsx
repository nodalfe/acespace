import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BrandStory() {
  return (
    <section className="s-story" id="story">
      <ScrollReveal className="st-left">
        <div className="st-num">01</div>
        <div className="st-eyebrow">Brand Story · 감성</div>
        <h2 className="st-h2">
          가족의<br />행복을 담는<br /><em>단 하나의</em><br />공간.
        </h2>
      </ScrollReveal>
      <ScrollReveal className="st-right d2">
        <div className="st-quote">
          설치하느라 지쳐<br />아이와 눈을 못 맞추는<br />순간이 있었습니다.<br /><br />
          <strong>그 순간을 없애고 싶었습니다.</strong>
        </div>
        <div className="st-hr"></div>
        <div className="st-body">
          ACESPACE는 그래서 만들어졌습니다.<br />
          단순한 장비를 넘어, 머무는 공간을 설계합니다.<br />
          넓고 안정적인 구조 위에 그 안의 분위기와 경험까지.
        </div>
        <div className="st-sub">가족의 행복을 담는, 단 하나의 공간. ACESPACE</div>
      </ScrollReveal>
    </section>
  );
}
