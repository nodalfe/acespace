import { FIVE_FEATURES } from "@/constants/copy";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FiveMinutes() {
  return (
    <section className="s-five">
      <div className="five-bg-n">5</div>
      <ScrollReveal className="five-l">
        <div className="five-eyebrow">Function · 실용</div>
        <div className="five-h">5분이면<br />됩니다.</div>
        <div className="five-sub">나머지 시간은<br />가족 것입니다.</div>
      </ScrollReveal>
      <ScrollReveal className="five-r d2">
        {FIVE_FEATURES.map((feat, i) => (
          <div key={i} className="five-feat">
            <div className="ff-num">{feat.num}</div>
            <div className="ff-title">{feat.title}</div>
            <div className="ff-body">{feat.body}</div>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}
