import Link from "next/link";
import { navItems } from "../data";

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Elio home">
        <span className="brand-mark">E</span>
        <span>Elio Fattal</span>
      </Link>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
