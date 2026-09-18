"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type ShapeKind = "circle" | "square" | "rectangle" | "triangle";
type ShapeColor = "green" | "gray";
type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

type ShapeSpec = {
  kind: ShapeKind;
  color: ShapeColor;
  corner: Corner;
  size: number;
  offset: number;
  rotate?: number;
  delay?: number;
};

// Vier feste Kombinationen aus je zwei Formen (eine grün, eine grau), die an
// gegenüberliegenden Ecken des Bildes hervorschauen. Die Variante wird aus
// dem Bild-Label abgeleitet, damit dieselbe Stelle bei jedem Seitenaufruf
// dieselbe Kombination zeigt (kein Layout-Flackern durch Zufall).
const VARIANTS: ShapeSpec[][] = [
  [
    { kind: "circle", color: "green", corner: "top-right", size: 96, offset: 22, delay: 0 },
    { kind: "square", color: "gray", corner: "bottom-left", size: 60, offset: 18, rotate: 14, delay: 0.15 },
  ],
  [
    { kind: "rectangle", color: "gray", corner: "top-left", size: 84, offset: 20, rotate: -8, delay: 0 },
    { kind: "triangle", color: "green", corner: "bottom-right", size: 66, offset: 18, rotate: 6, delay: 0.15 },
  ],
  [
    { kind: "triangle", color: "gray", corner: "top-right", size: 70, offset: 16, rotate: -10, delay: 0 },
    { kind: "circle", color: "green", corner: "bottom-left", size: 88, offset: 22, delay: 0.15 },
  ],
  [
    { kind: "square", color: "green", corner: "top-left", size: 56, offset: 18, rotate: 10, delay: 0 },
    { kind: "rectangle", color: "gray", corner: "bottom-right", size: 92, offset: 20, rotate: -6, delay: 0.15 },
  ],
];

function variantIndexFor(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % VARIANTS.length;
}

// Zwei einfache geometrische Formen, die scheinbar hinter dem Bild liegen und
// an dessen Ecken hervorschauen. Sie fliegen erst ein, wenn das Bild beim
// Scrollen in den sichtbaren Bereich kommt (wie die Reveal-Animation).
export function ShapeAccents({ seed }: { seed: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const variant = VARIANTS[variantIndexFor(seed)];

  return (
    <div ref={ref} className="shape-accents" aria-hidden="true">
      {variant.map((shape, i) => {
        const style: CSSProperties = {
          width: shape.size,
          height: shape.kind === "rectangle" ? Math.round(shape.size * 0.62) : shape.size,
          "--shape-rot": `${shape.rotate ?? 0}deg`,
          "--shape-delay": `${shape.delay ?? 0}s`,
        } as CSSProperties;

        if (shape.corner.startsWith("top")) style.top = -shape.offset;
        else style.bottom = -shape.offset;
        if (shape.corner.endsWith("left")) style.left = -shape.offset;
        else style.right = -shape.offset;

        return (
          <span
            key={i}
            className={`shape-decor shape-${shape.kind} shape-fill-${shape.color}${
              visible ? " is-visible" : ""
            }`}
            style={style}
          />
        );
      })}
    </div>
  );
}
