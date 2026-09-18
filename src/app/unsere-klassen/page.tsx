import type { Metadata } from "next";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { schoolInfo } from "@/content/schoolInfo";
import { klassen, klassenSchuljahr } from "@/content/klassen";

export const metadata: Metadata = { title: "Unsere Klassen" };

export default function KlassenPage() {
  return (
    <>
      <div className="wrap page-intro">
        <h1 className="h1" style={{ fontSize: "clamp(30px, 4vw, 46px)" }}>
          Unsere Klassen
        </h1>
        <p className="body-l">
          Im Schuljahr {klassenSchuljahr} lernen {schoolInfo.anzahlSchueler} Schüler:innen bei uns
          in {schoolInfo.anzahlKlassen} jahrgangsbezogenen Klassen.
        </p>
      </div>

      <section className="wrap section grid grid-4">
        {klassen.map((klasse) => (
          <div className="card" key={klasse.name}>
            <PlaceholderImage height={180} decorate={false} />
            <div className="card-body" style={{ padding: 20, gap: 6 }}>
              <div className="h3">Klasse {klasse.name}</div>
              <p className="body-m">{klasse.lehrkraft}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="wrap" style={{ paddingBottom: 72 }}>
        <p className="body-m" style={{ maxWidth: 640 }}>
          Hinweis: Die Original-Klassenfotos liegen bislang nur in niedriger Auflösung vor. Sobald
          neue oder höher aufgelöste Fotos von der Schule vorliegen, werden sie hier eingebunden.
        </p>
      </div>
    </>
  );
}
