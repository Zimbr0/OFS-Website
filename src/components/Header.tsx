"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mainNav } from "@/content/nav";
import { Button } from "./Button";
import { CloseIcon, MenuIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap site-header-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Logo der Osterfeldschule Unna"
            width={80}
            height={42}
            className="logo-mark"
            priority
          />
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

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="header-cta">
            <Button href="/kontakt" variant="primary" size="sm">
              Kontakt aufnehmen
            </Button>
          </span>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="mobile-nav" aria-label="Mobile Navigation">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="mobile-nav-link"
            style={{ color: "var(--c-secondary)" }}
            onClick={() => setOpen(false)}
          >
            Kontakt aufnehmen
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
