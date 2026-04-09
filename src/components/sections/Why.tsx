import { WHY_CARDS } from "@/constants/copy";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Why() {
  return (
    <section className="s-why" id="why">
      <ScrollReveal className="why-top">
        <div className="why-ey">Why ACESPACE · 실용</div>
        <h2 className="why-h">ACESPACE가<br /><em>다른 이유.</em></h2>
      </ScrollReveal>
      <div className="why-grid">
        {WHY_CARDS.map((card) => (
          <ScrollReveal key={card.num} className={`why-card ${card.delay}`}>
            <div className="wc-num">{card.num}</div>
            <div className="wc-title">{card.title}</div>
            <div className="wc-copy">{card.copy}</div>
            <span className="wc-tag">{card.tag}</span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
