import { MATERIAL_BADGES, MATERIAL_ITEMS } from "@/constants/copy";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Material() {
  return (
    <section className="s-mat" id="material">
      <div className="mat-bg-w">PVC-Free</div>
      <div className="mat-in">
        <ScrollReveal className="mat-l">
          <div className="mat-ey">Material Philosophy · 실용</div>
          <h2 className="mat-h">PVC<br />쓰지<br /><em>않습니다.</em></h2>
          <div className="mat-decl">
            아이가 숨 쉬는<br />공간이니까요.<br /><br />
            <strong>아이를 위한 선택이기<br />때문입니다.</strong>
          </div>
          <div className="mat-badges">
            {MATERIAL_BADGES.map((badge) => (
              <div key={badge} className="mat-badge">{badge}</div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal className="mat-r d2">
          <div className="mat-list">
            {MATERIAL_ITEMS.map((item) => (
              <div key={item.idx} className="mat-row">
                <div className="mat-idx">{item.idx}</div>
                <div>
                  <div className="mat-name">{item.name}</div>
                  <div className="mat-desc">{item.desc}</div>
                </div>
                <div className="mat-tag">{item.tag}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
