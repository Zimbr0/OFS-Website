import type { Metadata } from "next";
import { AltSection } from "@/components/AltSection";
import { aktuellesEintraege } from "@/content/aktuelles";

export const metadata: Metadata = { title: "Aktuelles" };

export default function AktuellesPage() {
  return (
    <>
      <div className="wrap page-intro">
        <h1 className="h1" style={{ fontSize: "clamp(30px, 4vw, 46px)" }}>
          Aus dem Schulleben
        </h1>
        <p className="body-l">
          Eine Auswahl an Beiträgen, Projekten und Erfolgen der letzten Zeit.
        </p>
      </div>

      {aktuellesEintraege.map((eintrag, index) => (
        <AltSection
          key={eintrag.titel}
          index={index}
          title={eintrag.titel}
          text={eintrag.text}
          kategorie={eintrag.kategorie}
          datum={eintrag.datum}
        />
      ))}

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
