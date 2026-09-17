"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { PlusIcon } from "./icons";

type ExpandableTileProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  detail: ReactNode;
};

// Kachel wie <Tile>, aber mit Dropdown-Button für zusätzlichen Text.
export function ExpandableTile({ icon, title, children, detail }: ExpandableTileProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="tile">
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div className="tile-icon">{icon}</div>
        <button
          type="button"
          className={`faq-toggle${open ? " open" : ""}`}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Weniger anzeigen" : "Mehr anzeigen"}
        >
          <PlusIcon />
        </button>
      </div>
      <div className="h3" style={{ fontSize: 18 }}>
        {title}
      </div>
      <p className="body-m">{children}</p>
      {open ? (
        <p className="body-m faq-a" style={{ margin: 0 }}>
          {detail}
        </p>
      ) : null}
    </div>
  );
}
