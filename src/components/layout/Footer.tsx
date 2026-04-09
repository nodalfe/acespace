import { FOOTER_LINKS } from "@/constants/copy";

export default function Footer() {
  return (
    <footer>
      <div className="f-links">
        {FOOTER_LINKS.map((link) => (
          <a key={link.label} href={link.href}>{link.label}</a>
        ))}
      </div>
      <div className="f-copy">&copy; 2026 ACESPACE. Air Outdoor Gear.</div>
    </footer>
  );
}
