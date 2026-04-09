import { PRODUCTS } from "@/constants/copy";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProductLineProps {
  data: typeof PRODUCTS.architecture | typeof PRODUCTS.living;
  variant?: string;
}

function ProductLine({ data, variant = "" }: ProductLineProps) {
  return (
    <div className={`pl-cat ${variant}`}>
      <div className="pl-cat-head">
        <div className="pl-cat-label">{data.label}</div>
        <div className="pl-cat-title">{data.title}</div>
        <div className="pl-cat-desc">{data.desc}</div>
        <div className="pl-launch">9월 출시</div>
      </div>
      <div className="pl-items">
        {data.items.map((item, i) => (
          <div key={i} className="pl-item">
            <div className="pl-item-top">
              <span className="pl-name pl-tbd">COMING SOON</span>
              <span className="pl-type">{item.type}</span>
            </div>
            <div className="pl-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section className="s-prod" id="products">
      <ScrollReveal className="prod-top">
        <div>
          <div className="prod-ey">Product Lines · 2026년 9월 출시</div>
          <h2 className="prod-h">두 개의 축으로<br /><em>공간을 완성합니다.</em></h2>
        </div>
        <div className="prod-note">Architecture — 에어텐트 3종<br />Living — 에어소파 · 에어베드 · 이불베개</div>
      </ScrollReveal>

      <ScrollReveal className="d1">
        <div className="prod-lines">
          <ProductLine data={PRODUCTS.architecture} />
          <ProductLine data={PRODUCTS.living} variant="pl-cat-living" />
        </div>
      </ScrollReveal>
    </section>
  );
}
