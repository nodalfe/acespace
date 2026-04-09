import { TICKER_ITEMS } from "@/constants/copy";

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker">
      <div className="t-track">
        {items.map((text, i) => (
          <div key={i} className="t-item">
            <span className="t-w">{text}</span>
            <span className="t-s">&middot;</span>
          </div>
        ))}
      </div>
    </div>
  );
}
