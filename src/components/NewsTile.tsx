import Link from "next/link";
import { PlaceholderImage } from "./PlaceholderImage";
import type { AktuellesEintrag } from "@/content/aktuelles";

type NewsTileProps = {
  eintrag: AktuellesEintrag;
};

// Kachel-Design 1:1 nach dem "Latest News"-Bereich von okre.org übernommen
// (Bild-Seitenverhältnis 5:4, eckige Ecken, dezente Typografie, Schatten
// statt Anheben im Hover) – nur Farben, Schrift und Überschrift sind unsere
// eigenen. Alle Kacheln verlinken auf die vollständige Aktuelles-Übersicht,
// da es (noch) keine einzelnen Beitragsseiten gibt.
export function NewsTile({ eintrag }: NewsTileProps) {
  return (
    <Link href="/aktuelles" className="news-tile">
      <PlaceholderImage decorate={false} style={{ height: "auto", aspectRatio: "5 / 4" }} />
      <div className="news-tile-body">
        <span className="news-tile-category">{eintrag.kategorie}</span>
        <h3 className="news-tile-title">{eintrag.titel}</h3>
        <span className="news-tile-meta">{eintrag.datum}</span>
      </div>
    </Link>
  );
}
