import type { Metadata } from "next";
import { Badge } from "@/components/Badge";
import { heuteAnDerSchule, termine, termineHinweis } from "@/content/termine";

export const metadata: Metadata = { title: "Termine" };

export default function TerminePage() {
  return (
    <>
      <div className="wrap page-intro">
        <span className="eyebrow">Termine</span>
        <h1 className="h1" style={{ fontSize: "clamp(30px, 4vw, 46px)" }}>
          Alle Termine im Blick
        </h1>
        <p className="body-l">
          Von der heutigen Schulwoche bis zu den nächsten Festen im Jahr – hier finden Eltern alle
          anstehenden Termine der Osterfeldschule.
        </p>
      </div>

      {/* HEUTE AN DER SCHULE */}
      <section className="wrap" style={{ paddingBottom: 48 }}>
        <div className="card" style={{ maxWidth: 640 }}>
          <div className="card-body" style={{ gap: 18 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="h3" style={{ fontSize: 17 }}>
                Heute an der Schule
              </span>
              <Badge live>LIVE</Badge>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {heuteAnDerSchule.map((eintrag) => (
                <div className="check-item" key={eintrag.titel}>
                  <span className="check-icon">
                    {eintrag.live ? <DotIcon /> : <CheckIcon />}
                  </span>
                  <span className="body-m">
                    <strong style={{ color: "var(--c-ink)" }}>{eintrag.titel}</strong>
                    <br />
                    {eintrag.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      {/* TERMINE LISTE */}
      <section className="wrap section" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {termine.map((termin) => (
          <div
            className="tile"
            key={termin.titel}
            style={{ flexDirection: "row", alignItems: "flex-start", gap: 22, flexWrap: "wrap" }}
          >
            <Badge style={{ flexShrink: 0, marginTop: 2 }}>{termin.datum}</Badge>
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

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function DotIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}
