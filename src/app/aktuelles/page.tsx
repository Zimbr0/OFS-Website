import type { Metadata } from "next";
import { Badge } from "@/components/Badge";
import { aktuellesEintraege } from "@/content/aktuelles";

export const metadata: Metadata = { title: "Aktuelles" };

export default function AktuellesPage() {
  return (
    <>
      <div className="wrap page-intro">
        <span className="eyebrow">Aktuelles</span>
        <h1 className="h1" style={{ fontSize: "clamp(30px, 4vw, 46px)" }}>
          Aus dem Schulleben
        </h1>
        <p className="body-l">
          Eine Auswahl an Beiträgen, Projekten und Erfolgen der letzten Zeit.
        </p>
      </div>

      <section className="wrap section grid grid-3">
        {aktuellesEintraege.map((eintrag) => (
          <div className="tile" key={eintrag.titel}>
            <Badge>{eintrag.kategorie}</Badge>
            <div className="h3" style={{ fontSize: 18 }}>
              {eintrag.titel}
            </div>
            <p className="body-m">{eintrag.text}</p>
          </div>
        ))}
      </section>

      <div className="wrap" style={{ paddingBottom: 72 }}>
        <p className="body-m" style={{ maxWidth: 680 }}>
          Hinweis: Diese Beiträge wurden bewusst ohne Namen oder Fotos einzelner Kinder
          übernommen, solange nicht geklärt ist, wie damit auf der neuen Seite umgegangen werden
          soll. Fotos vom Schulleben allgemein können ergänzt werden, sobald sie vorliegen.
        </p>
      </div>
    </>
  );
}
