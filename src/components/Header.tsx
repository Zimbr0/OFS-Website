import Link from "next/link";
import { mainNav } from "@/content/nav";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap site-header-inner">
        <Link href="/" className="logo">
          <span className="logo-mark">OS</span>
          <span className="logo-text">
            <strong>Osterfeldschule</strong>
            <span>Unna</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Hauptnavigation">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <Button href="/kontakt" variant="primary" size="sm">
          Kontakt aufnehmen
        </Button>
      </div>
    </header>
  );
}
