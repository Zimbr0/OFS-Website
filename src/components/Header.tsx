"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { mainNav } from "@/content/nav";
import { basePath } from "@/lib/basePath";
import { withAssetVersion } from "@/lib/assets";
import { Button } from "./Button";
import { CloseIcon, MenuIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);

  // Escape schließt die Schublade, und solange sie offen ist, blockieren wir
  // das Scrollen der Seite dahinter (wie bei üblichen Slide-in-Menüs).
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
    <header className="site-header">
      <div className="wrap site-header-inner">
        <Link href="/" className="logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withAssetVersion(`${basePath}/logo.png`)}
            alt="Logo der Osterfeldschule Unna"
            width={116}
            height={120}
            className="logo-mark"
          />
          <span className="logo-text">
            <strong>Osterfeldschule</strong>
            <span>Unna</span>
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="header-cta">
            <Button href="/kontakt" variant="primary" size="sm">
              Kontakt
            </Button>
          </span>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Menü öffnen"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>

    {open ? (
      <>
        <button
          type="button"
          className="nav-drawer-backdrop"
          aria-label="Menü schließen"
          onClick={() => setOpen(false)}
        />
        <div className="nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <div className="nav-drawer-header">
            <Link href="/" className="logo" onClick={() => setOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withAssetVersion(`${basePath}/logo.png`)}
                alt="Logo der Osterfeldschule Unna"
                width={116}
                height={120}
                className="logo-mark"
                style={{ height: 34 }}
              />
              <span className="logo-text">
                <strong>Osterfeldschule</strong>
              </span>
            </Link>
            <button
              type="button"
              className="nav-drawer-close"
              aria-label="Menü schließen"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="nav-drawer-links" aria-label="Hauptnavigation (mobil)">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-drawer-footer">
            <Button
              href="/kontakt"
              variant="primary"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => setOpen(false)}
            >
              Kontakt
            </Button>
          </div>
        </div>
      </>
    ) : null}
    </>
  );
}
