import type { Metadata } from "next";
import { termine, termineHinweis } from "@/content/termine";

export const metadata: Metadata = { title: "Termine" };

export default function TerminePage() {
  return (
    <>
      <div className="wrap page-intro">
        <h1 className="h1" style={{ fontSize: "clamp(30px, 4vw, 46px)" }}>
          Alle Termine im Blick
        </h1>
        <p className="body-l">
          Von der heutigen Schulwoche bis zu den nächsten Festen im Jahr – hier finden Eltern alle
          anstehenden Termine der Osterfeldschule.
        </p>
      </div>

      {/* TERMINE LISTE */}
      <section className="wrap section" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {termine.map((termin) => (
          <div
            className="tile"
            key={termin.titel}
            style={{ flexDirection: "row", alignItems: "flex-start", gap: 22, flexWrap: "wrap" }}
          >
            <span
              style={{ flexShrink: 0, marginTop: 2, color: "var(--c-primary)", fontWeight: 700, fontSize: 14, minWidth: 130 }}
            >
              {termin.datum}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span className="footer-col-title" style={{ margin: 0 }}>
                {termin.kategorie}
              </span>
              <div className="h3" style={{ fontSize: 18 }}>
                {termin.titel}
              </div>
              <p className="body-m" style={{ margin: 0 }}>
                {termin.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      <div className="wrap" style={{ paddingBottom: 72 }}>
        <p className="body-m" style={{ maxWidth: 680 }}>{termineHinweis}</p>
      </div>
    </>
  );
}
