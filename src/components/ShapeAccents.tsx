"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type ShapeColor = "green" | "gray";
type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";
type Layer = "back" | "front";

// Müssen mit --c-primary / --c-shape-gray in globals.css übereinstimmen.
// Als Hex nötig, weil die Farbe in eine SVG-Data-URI eingebacken wird
// (background-image kann keine CSS-Variablen/currentColor auflösen).
const COLOR_HEX: Record<ShapeColor, string> = {
  green: "#5d7315",
  gray: "#e3e6dd",
};

type ShapeDef = {
  viewBox: string;
  /** Original-Rect/-Polygon-Markup, "COLOR" wird durch den Hex-Wert ersetzt. */
  markup: string;
};

// Eigene, von "OFS" abgeleitete Formfamilie (ersetzt die zuvor von okre.org
// übernommenen Formen): dieselbe Reduktion, die okre.org bei O-K-R-E nutzt –
// ein Quadrat, dem 0 oder 1 rechteckige Ecke fehlt. O bleibt das volle
// Quadrat (wie okre.org es bei E macht), F fehlt die Ecke unten rechts, S
// ist die horizontal gespiegelte Version davon (Ecke unten links). Alle drei
// auf demselben quadratischen 150x150-Raster, damit nichts verzerrt wird.
const SHAPE_O: ShapeDef = {
  viewBox: "0 0 150 150",
  markup: `<rect x="0" y="0" width="150" height="150" fill="COLOR"/>`,
};

const SHAPE_F: ShapeDef = {
  viewBox: "0 0 150 150",
  markup: `<polygon points="0,0 150,0 150,45 60,45 60,150 0,150" fill="COLOR"/>`,
};

const SHAPE_S: ShapeDef = {
  viewBox: "0 0 150 150",
  markup: `<polygon points="0,0 150,0 150,150 90,150 90,45 0,45" fill="COLOR"/>`,
};

type ShapeSpec = {
  layer: Layer;
  shape: ShapeDef;
  color: ShapeColor;
  corner: Corner;
  /** Größe in % der Fotobreite/-höhe. */
  size: number;
  delay?: number;
};

// Sechs Kombinationen aus je zwei der drei OFS-Formen (nie zweimal dieselbe
// im selben Bild), Ecken und Farben abwechselnd. Position/Versatz folgen
// weiter dem okre.org-Mechanismus (Box in Fotogröße, 10% über die Kante
// hinaus versetzt) – die Formen selbst sind jetzt aber randlos auf ihrem
// eigenen Quadrat, darum deutlich kleiner skaliert (sonst würde eine Form
// fast das ganze Foto bedecken).
const VARIANTS: ShapeSpec[][] = [
  [
    { layer: "back", shape: SHAPE_O, color: "gray", corner: "top-right", size: 48, delay: 0 },
    { layer: "front", shape: SHAPE_F, color: "green", corner: "bottom-left", size: 42, delay: 0.5 },
  ],
  [
    { layer: "back", shape: SHAPE_F, color: "green", corner: "top-left", size: 46, delay: 0 },
    { layer: "front", shape: SHAPE_S, color: "gray", corner: "bottom-left", size: 40, delay: 0.5 },
  ],
  [
    { layer: "back", shape: SHAPE_S, color: "gray", corner: "top-right", size: 50, delay: 0 },
    { layer: "front", shape: SHAPE_O, color: "green", corner: "bottom-right", size: 38, delay: 0.5 },
  ],
  [
    { layer: "back", shape: SHAPE_O, color: "green", corner: "top-left", size: 44, delay: 0 },
    { layer: "front", shape: SHAPE_S, color: "gray", corner: "bottom-right", size: 42, delay: 0.5 },
  ],
  [
    { layer: "back", shape: SHAPE_F, color: "gray", corner: "top-right", size: 48, delay: 0 },
    { layer: "front", shape: SHAPE_O, color: "green", corner: "bottom-left", size: 40, delay: 0.5 },
  ],
  [
    { layer: "back", shape: SHAPE_S, color: "green", corner: "top-left", size: 46, delay: 0 },
    { layer: "front", shape: SHAPE_F, color: "gray", corner: "bottom-right", size: 40, delay: 0.5 },
  ],
];

function variantIndexFor(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % VARIANTS.length;
}

function shapeBackgroundUrl(shape: ShapeDef, color: ShapeColor) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${shape.viewBox}">${shape.markup.replace(
    "COLOR",
    COLOR_HEX[color]
  )}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

// Zwei OFS-Formen pro Bild: eine liegt hinter dem Foto und schaut nur an der
// Kante hervor, die andere liegt sichtbar über dem Foto. Beide schieben sich
// von unten kommend ein, sobald das Bild beim Scrollen sichtbar wird.
// `index` sorgt dafür, dass aufeinanderfolgende Bilder nie dieselbe
// Kombination bekommen.
export function ShapeAccents({ seed, index }: { seed: string; index?: number }) {
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

  const variantIndex = index !== undefined ? index % VARIANTS.length : variantIndexFor(seed);
  const variant = VARIANTS[variantIndex];

  return (
    <div ref={ref} className="shape-accents" aria-hidden="true">
      {variant.map((spec, i) => {
        const style: CSSProperties = {
          width: `${spec.size}%`,
          height: `${spec.size}%`,
          backgroundImage: shapeBackgroundUrl(spec.shape, spec.color),
          "--shape-delay": `${spec.delay ?? 0}s`,
        } as CSSProperties;

        if (spec.corner.startsWith("top")) style.top = "-10%";
        else style.bottom = "-10%";
        if (spec.corner.endsWith("left")) style.left = "-10%";
        else style.right = "-10%";

        return (
          <span
            key={i}
            className={`shape-decor shape-layer-${spec.layer}${visible ? " is-visible" : ""}`}
            style={style}
          />
        );
      })}
    </div>
  );
}
