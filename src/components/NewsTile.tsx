import Link from "next/link";
import { PlaceholderImage } from "./PlaceholderImage";
import { slugify, type AktuellesEintrag } from "@/content/aktuelles";

type NewsTileProps = {
  eintrag: AktuellesEintrag;
};

// Kachel-Design 1:1 nach dem "Latest News"-Bereich von okre.org übernommen
// (Bild-Seitenverhältnis 5:4, eckige Ecken, dezente Typografie, Schatten
// statt Anheben im Hover) – nur Farben, Schrift und Überschrift sind unsere
// eigenen. Jede Kachel verlinkt direkt auf ihren Abschnitt in der
// Aktuelles-Übersicht (siehe id/slugify in AltSection bzw. der Aktuelles-Seite).
export function NewsTile({ eintrag }: NewsTileProps) {
  return (
    <Link href={`/aktuelles#${slugify(eintrag.titel)}`} className="news-tile">
      <PlaceholderImage decorate={false} style={{ height: "auto", aspectRatio: "5 / 4" }} />
      <div className="news-tile-body">
        <span className="news-tile-category">{eintrag.kategorie}</span>
        <h3 className="news-tile-title">{eintrag.titel}</h3>
        <span className="news-tile-meta">{eintrag.datum}</span>
      </div>
    </Link>
  );
}
