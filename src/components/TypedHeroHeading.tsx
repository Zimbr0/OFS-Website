"use client";

import { useEffect, useRef, useState } from "react";

type Line = { keyword: string; rest: string; accent?: boolean };

const lines: Line[] = [
  { keyword: "ICH", rest: " entwickeln," },
  { keyword: "WIR", rest: " stärken," },
  { keyword: "MORGEN", rest: " mitgestalten.", accent: true },
];

// [Zeile, Zeichen] – lines.length als Zeile bedeutet "fertig getippt".
type Pos = [number, number];
const DONE: Pos = [lines.length, 0];

function fullLineText(line: Line) {
  return `${line.keyword}${line.rest}`;
}

// "ICH", "WIR" und "MORGEN" stehen sofort da; der Rest jeder Zeile wird wie
// mit einer Schreibmaschine samt blinkendem "_"-Cursor dahinter getippt. Ist
// die Animation fertig, verschwindet der Cursor und aus dem Punkt am Ende
// wächst ein kleiner Sprössling (angelehnt an die Pflanze im Logo). Start-
// Zustand ist bewusst "fertig" (voller Text), damit ohne JavaScript (SSR,
// Suchmaschinen) sofort der komplette Satz lesbar ist – erst nach dem Mount
// wird auf Anfang zurückgesetzt und die Animation gestartet.
export function TypedHeroHeading() {
  const [pos, setPos] = useState<Pos>(DONE);
  const [grown, setGrown] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [fittedSize, setFittedSize] = useState<number | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (lineIndex >= lines.length) {
        setPos(DONE);
        setGrown(true);
        return;
      }
      setPos([lineIndex, charIndex]);

      if (charIndex >= lines[lineIndex].rest.length) {
        lineIndex += 1;
        charIndex = 0;
        timeoutId = setTimeout(tick, 260);
        return;
      }
      charIndex += 1;
      timeoutId = setTimeout(tick, 34);
    };

    timeoutId = setTimeout(tick, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  // Schriftgröße so anpassen, dass keine der drei Zeilen umbricht – bei
  // jeder Fensterbreite. Ein reines CSS clamp() reicht nicht: der Hero ist
  // zweispaltig, die tatsächlich verfügbare Breite hängt also vom
  // Spaltenlayout ab, nicht nur von der Viewport-Breite. Gemessen wird immer
  // der volle Zeilentext (Schlüsselwort + Rest), unabhängig vom
  // Tipp-Fortschritt, damit die Größe während der Animation stabil bleibt.
  useEffect(() => {
    const heading = headingRef.current;
    const container = heading?.parentElement;
    if (!heading || !container) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const measure = () => {
      const containerWidth = container.clientWidth;
      if (containerWidth <= 0) return;

      heading.style.fontSize = "";
      const cs = getComputedStyle(heading);
      const baseSize = parseFloat(cs.fontSize);
      ctx.font = `${cs.fontWeight} ${baseSize}px ${cs.fontFamily}`;

      // Für die letzte Zeile Platz für den Sprössling reservieren, der dort
      // nach dem Tippen erscheint, damit er nie zum Umbruch führt.
      const lastLineWidth = ctx.measureText(fullLineText(lines[lines.length - 1])).width + 26;
      const widest = Math.max(
        lastLineWidth,
        ...lines.slice(0, -1).map((line) => ctx.measureText(fullLineText(line)).width)
      );

      if (widest > containerWidth) {
        const scale = (containerWidth / widest) * 0.96;
        setFittedSize(Math.max(18, baseSize * scale));
      } else {
        setFittedSize(null);
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const isDone = pos[0] >= lines.length;

  return (
    <h1 ref={headingRef} className="h1" style={fittedSize ? { fontSize: fittedSize } : undefined}>
      {lines.map((line, index) => {
        const shown = isDone || index < pos[0] ? line.rest : index === pos[0] ? line.rest.slice(0, pos[1]) : "";
        const isLastLine = index === lines.length - 1;
        const showCursor = !isDone && index === pos[0];
        const showPlant = isDone && isLastLine && grown;
        return (
          <span
            key={line.keyword}
            className="hero-line"
            style={{ display: "block", ...(line.accent ? { color: "var(--c-primary)" } : undefined) }}
          >
            {line.keyword}
            {shown}
            {showCursor ? (
              <span className="typing-cursor" aria-hidden="true">
                _
              </span>
            ) : null}
            {showPlant ? <Sprout /> : null}
          </span>
        );
      })}
    </h1>
  );
}

// Kleiner Sprössling, angelehnt an die Pflanze im Osterfeldschule-Logo:
// Stiel + zwei Blätter, die nacheinander "wachsen".
function Sprout() {
  return (
    <svg className="hero-plant" viewBox="0 0 32 40" fill="none" aria-hidden="true">
      <path className="plant-ground" d="M9 38 H23" stroke="var(--c-logo-green)" strokeWidth={2.2} strokeLinecap="round" />
      <path className="plant-stem" d="M16 38 C16 30 15 22 16 12" stroke="var(--c-logo-green)" strokeWidth={2.4} strokeLinecap="round" fill="none" />
      <path
        className="plant-leaf plant-leaf-small"
        d="M15 27 C8 26 4 22 3 16 C10 17 15 20 16 27 Z"
        fill="var(--c-logo-green)"
      />
      <path
        className="plant-leaf plant-leaf-big"
        d="M16 20 C17 12 22 6 29 3 C28 12 23 18 16 20 Z"
        fill="var(--c-logo-green)"
      />
    </svg>
  );
}
