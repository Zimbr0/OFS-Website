"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import { NewsTile } from "./NewsTile";
import type { AktuellesEintrag } from "@/content/aktuelles";

// Karussell-Mechanik 1:1 nach dem "Latest News"-Bereich von okre.org: eckige
// Pfeil-Buttons übereinander oben rechts, kleine Punkt-Navigation, enge
// Abstände zwischen den Kacheln (0.7em), 2/3/4 sichtbare Kacheln je nach
// Breakpoint (50% / 33.3% / 25% – exakt die dortigen Grid-Anteile).
export function NewsCarousel({ eintraege }: { eintraege: AktuellesEintrag[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const children = Array.from(track.children) as HTMLElement[];
        let closest = 0;
        let closestDist = Infinity;
        children.forEach((child, i) => {
          const dist = Math.abs(child.offsetLeft - track.scrollLeft);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setActiveIndex(closest);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const scrollByTile = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const tile = track.children[0] as HTMLElement | undefined;
    const amount = tile ? tile.getBoundingClientRect().width + 12 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    const tile = track?.children[index] as HTMLElement | undefined;
    if (!track || !tile) return;
    track.scrollTo({ left: tile.offsetLeft, behavior: "smooth" });
  };

  return (
    <div className="news-carousel">
      <div className="news-carousel-controls">
        <div className="news-carousel-dots">
          {eintraege.map((eintrag, i) => (
            <button
              key={eintrag.titel}
              type="button"
              aria-label={`Zu Beitrag ${i + 1}`}
              className={`news-carousel-dot${i === activeIndex ? " is-active" : ""}`}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
        <div className="news-carousel-arrows">
          <button type="button" aria-label="Zurück" className="news-carousel-arrow" onClick={() => scrollByTile(-1)}>
            <ChevronLeftIcon size={16} />
          </button>
          <button type="button" aria-label="Weiter" className="news-carousel-arrow" onClick={() => scrollByTile(1)}>
            <ChevronRightIcon size={16} />
          </button>
        </div>
      </div>
      <div className="news-carousel-track" ref={trackRef}>
        {eintraege.map((eintrag) => (
          <div className="news-carousel-item" key={eintrag.titel}>
            <NewsTile eintrag={eintrag} />
          </div>
        ))}
      </div>
    </div>
  );
}
