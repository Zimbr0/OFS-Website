import Link from "next/link";
import { PlaceholderImage } from "./PlaceholderImage";
import { Reveal } from "./Reveal";
import type { AktuellesEintrag } from "@/content/aktuelles";

type NewsTileProps = {
  eintrag: AktuellesEintrag;
  index: number;
};

// Kachel-Design für "Aktuelles", nachgebaut nach dem "Latest News"-Bereich
// von okre.org: (fast) quadratisches Bild, darunter Kategorie, Titel und
// Datum. Alle Kacheln verlinken auf die vollständige Aktuelles-Übersicht,
// da es (noch) keine einzelnen Beitragsseiten gibt.
export function NewsTile({ eintrag, index }: NewsTileProps) {
  return (
    <Reveal delay={(index % 4) * 0.06}>
      <Link href="/aktuelles" className="news-tile">
        <PlaceholderImage decorate={false} height={260} />
        <div className="news-tile-body">
          <span className="news-tile-category">{eintrag.kategorie}</span>
          <h3 className="news-tile-title">{eintrag.titel}</h3>
          <span className="news-tile-meta">{eintrag.datum}</span>
        </div>
      </Link>
    </Reveal>
  );
}
