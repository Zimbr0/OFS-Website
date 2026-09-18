"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type ShapeKind = "circle" | "square" | "rectangle" | "triangle";
type ShapeColor = "green" | "gray";
type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

type Layer = "back" | "front";

type ShapeSpec = {
  layer: Layer;
  kind: ShapeKind;
  color: ShapeColor;
  corner: Corner;
  /** Größe in % der Bildbreite/-höhe – bewusst groß, wie bei der Vorlage. */
  size: number;
  /** Versatz in % über die Bildkante hinaus (negativ = schaut hervor). */
  offset: number;
  rotate?: number;
  delay?: number;
};

// Rechteckiger Umriss mit abgerundeten Ecken für das Dreieck (in einem
// 0..100-Viewbox berechnet: jede Kante wird vor der Spitze verkürzt und die
// Ecke per Quadratic-Bezier mit dem ursprünglichen Eckpunkt als Kontrollpunkt
// verrundet), damit es zum restlichen, weichen Design passt.
const ROUNDED_TRIANGLE_PATH =
  "M 57.155 20.311 L 84.845 75.689 Q 92 90 76 90 L 24 90 Q 8 90 15.155 75.689 L 42.845 20.311 Q 50 6 57.155 20.311 Z";

// Vier feste Kombinationen aus je einer Form "hinter" (liegt unter dem Foto,
// schaut nur an der Kante hervor) und einer Form "vorne" (liegt über dem
// Foto). Variante wird aus dem Bild-Seed abgeleitet, damit dieselbe Stelle
// bei jedem Aufruf dieselbe Kombination zeigt.
const VARIANTS: ShapeSpec[][] = [
  // Hinweis: Die "front"-Form (liegt über dem Foto) steht nie unten links,
  // weil dort die Bildunterschrift (placeholder-tag) sitzt und sonst
  // verdeckt würde.
  [
    { layer: "back", kind: "circle", color: "gray", corner: "bottom-left", size: 52, offset: -14, delay: 0 },
    { layer: "front", kind: "square", color: "green", corner: "top-right", size: 38, offset: -6, rotate: 12, delay: 0.22 },
  ],
  [
    { layer: "back", kind: "rectangle", color: "green", corner: "top-left", size: 46, offset: -12, rotate: -6, delay: 0 },
    { layer: "front", kind: "triangle", color: "gray", corner: "bottom-right", size: 40, offset: -6, rotate: 8, delay: 0.22 },
  ],
  [
    { layer: "back", kind: "triangle", color: "gray", corner: "bottom-left", size: 44, offset: -12, rotate: -10, delay: 0 },
    { layer: "front", kind: "circle", color: "green", corner: "top-right", size: 42, offset: -6, delay: 0.22 },
  ],
  [
    { layer: "back", kind: "square", color: "green", corner: "bottom-right", size: 40, offset: -12, rotate: 10, delay: 0 },
    { layer: "front", kind: "rectangle", color: "gray", corner: "top-left", size: 48, offset: -6, rotate: -8, delay: 0.22 },
  ],
];

function variantIndexFor(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % VARIANTS.length;
}

function ShapeSvg({ kind }: { kind: ShapeKind }) {
  switch (kind) {
    case "circle":
      return (
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="46" />
        </svg>
      );
    case "square":
      return (
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect x="6" y="6" width="88" height="88" rx="22" />
        </svg>
      );
    case "rectangle":
      return (
        <svg viewBox="0 0 100 64" preserveAspectRatio="none">
          <rect x="4" y="4" width="92" height="56" rx="18" />
        </svg>
      );
    case "triangle":
      return (
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d={ROUNDED_TRIANGLE_PATH} />
        </svg>
      );
  }
}

// Zwei große geometrische Formen pro Bild: eine liegt hinter dem Foto und
// schaut nur an der Kante hervor, die andere liegt sichtbar über dem Foto.
// Beide schieben sich von unten kommend ein (Translate + Fade), sobald das
// Bild beim Scrollen in den sichtbaren Bereich kommt.
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
          width: `${shape.size}%`,
          height: shape.kind === "rectangle" ? `${shape.size * 0.64}%` : `${shape.size}%`,
          "--shape-rot": `${shape.rotate ?? 0}deg`,
          "--shape-delay": `${shape.delay ?? 0}s`,
        } as CSSProperties;

        if (shape.corner.startsWith("top")) style.top = `${shape.offset}%`;
        else style.bottom = `${shape.offset}%`;
        if (shape.corner.endsWith("left")) style.left = `${shape.offset}%`;
        else style.right = `${shape.offset}%`;

        return (
          <span
            key={i}
            className={`shape-decor shape-layer-${shape.layer} shape-fill-${shape.color}${
              visible ? " is-visible" : ""
            }`}
            style={style}
          >
            <ShapeSvg kind={shape.kind} />
          </span>
        );
      })}
    </div>
  );
}
