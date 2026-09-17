"use client";

import { useEffect, useState } from "react";

type Line = { keyword: string; rest: string; accent?: boolean };

const lines: Line[] = [
  { keyword: "ICH", rest: " entwickeln," },
  { keyword: "WIR", rest: " stärken," },
  { keyword: "MORGEN", rest: " mitgestalten.", accent: true },
];

// [Zeile, Zeichen] – lines.length als Zeile bedeutet "fertig getippt".
type Pos = [number, number];
const DONE: Pos = [lines.length, 0];

// "ICH", "WIR" und "MORGEN" stehen sofort da; der Rest jeder Zeile wird wie
// mit einer Schreibmaschine samt blinkendem "_"-Cursor dahinter getippt. Ist
// die Animation fertig, verschwindet der Cursor und ein kleiner grüner Haken
// blinkt kurz auf ("erledigt") und blendet wieder aus. Start-Zustand ist
// bewusst "fertig" (voller Text, kein Haken), damit ohne JavaScript (SSR,
// Suchmaschinen) sofort der komplette Satz lesbar ist – erst nach dem Mount
// wird auf Anfang zurückgesetzt und die Animation gestartet.
export function TypedHeroHeading() {
  const [pos, setPos] = useState<Pos>(DONE);
  const [justFinished, setJustFinished] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (lineIndex >= lines.length) {
        setPos(DONE);
        setJustFinished(true);
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

  const isDone = pos[0] >= lines.length;

  return (
    <h1 className="h1">
      {lines.map((line, index) => {
        const shown = isDone || index < pos[0] ? line.rest : index === pos[0] ? line.rest.slice(0, pos[1]) : "";
        const isLastLine = index === lines.length - 1;
        const showCursor = !isDone && index === pos[0];
        const showCheck = isDone && isLastLine && justFinished;
        return (
          <span
            key={line.keyword}
            style={{ display: "block", ...(line.accent ? { color: "var(--c-primary)" } : undefined) }}
          >
            {line.keyword}
            {shown}
            {showCursor ? (
              <span className="typing-cursor" aria-hidden="true">
                _
              </span>
            ) : null}
            {showCheck ? (
              <span className="typing-check" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
            ) : null}
          </span>
        );
      })}
    </h1>
  );
}
