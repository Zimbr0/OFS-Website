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
  green: "#a1c67d",
  gray: "#d0c89e",
};

type ShapeDef = {
  /** Viewbox der Original-Datei von okre.org (wp-content/themes/okre/img/shapes/*.svg) – unverändert, damit die Position der Form relativ zur Box exakt stimmt. */
  viewBox: string;
  /** Original-Pfad/-Rect-Markup, "COLOR" wird durch den Hex-Wert ersetzt. */
  markup: string;
};

const SHAPE_BACK_PINK_SQUARE: ShapeDef = {
  viewBox: "0 0 736 736",
  markup: `<rect x="156.254" width="600" height="600" transform="rotate(15.0952 156.254 0)" fill="COLOR"/>`,
};

const SHAPE_BACK_NAVY_CIRCLE: ShapeDef = {
  viewBox: "0 0 768 737",
  markup: `<circle cx="300.039" cy="312.747" r="299.5" fill="COLOR"/>`,
};

// Ersetzt die beiden abstrakten okre-Formen (blue-star/turquoise-hook) durch
// unsere eigenen Initialen F und S (public/shapes/ofs-f.svg, ofs-s.svg).
// Deren Canvas (397x397) ist bereits randlos/vollflächig gefüllt – genau wie
// bei den ersetzten Formen (blue-star/turquoise-hook füllten ~93-99% ihrer
// Viewbox) – daher hier 1:1 übernommen, keine zusätzliche Rotation
// hinzugefügt (die ersetzten Formen hatten ebenfalls keine).
const SHAPE_BACK_F: ShapeDef = {
  viewBox: "0 0 397 397",
  markup: `<path d="M0 0H397V125H202V195H317V320H202V397H0V0Z" fill="COLOR"/>`,
};

const SHAPE_BACK_S: ShapeDef = {
  viewBox: "0 0 397 397",
  markup: `<path d="M0 0H397V86H163V156H397V397H0V0Z" fill="COLOR"/>`,
};

// Original-Canvas (734x727) bewusst NICHT zugeschnitten: die exakte
// Position der Form kommt gerade daher, dass sie innerhalb dieses vollen
// Canvas an genau dieser Stelle sitzt und die Box (s.u.) sie entsprechend
// ausschnitthaft zeigt. F/S sind hier so skaliert und platziert, dass sie
// exakt die Bounding Box füllen, die zuvor blue-arrow bzw. turquoise-flag
// dort einnahm (gleiche Größe/Position wie vorher, keine zusätzliche
// Rotation).
const SHAPE_FRONT_F: ShapeDef = {
  viewBox: "0 0 734 727",
  markup: `<polygon points="159,543.033 342.712,543.033 342.712,600.866 252.476,600.866 252.476,633.253 305.692,633.253 305.692,691.087 252.476,691.087 252.476,726.712 159,726.712" fill="COLOR"/>`,
};

const SHAPE_FRONT_S: ShapeDef = {
  viewBox: "0 0 734 727",
  markup: `<polygon points="73.869,580.538 220.839,580.538 220.839,610.526 134.212,610.526 134.212,634.934 220.839,634.934 220.839,718.969 73.869,718.969" fill="COLOR"/>`,
};

const SHAPE_FRONT_PINK_SQUARE: ShapeDef = {
  viewBox: "0 0 734 727",
  markup: `<rect x="494.792" y="550" width="138.291" height="138.291" transform="rotate(15 494.792 550)" fill="COLOR"/>`,
};

type ShapeSpec = {
  layer: Layer;
  shape: ShapeDef;
  color: ShapeColor;
  corner: Corner;
  delay?: number;
};

// Die fünf Formkombinationen von okre.org 1:1 übernommen (welche Form liegt
// hinten/vorne, welche Ecke) – Quadrat und Kreis unverändert, die beiden
// abstrakten "K/R-artigen" Formen (blue-star/turquoise-hook,
// blue-arrow/turquoise-flag) sind durch unsere F- und S-Initiale ersetzt.
// Größe/Position sind bei allen identisch (siehe CSS: width/height 100%,
// Versatz -10%), exakt wie im Original-CSS
// (.mediaimg__img--shapes::before/::after).
const VARIANTS: ShapeSpec[][] = [
  [
    { layer: "back", shape: SHAPE_BACK_PINK_SQUARE, color: "gray", corner: "top-right", delay: 0 },
    { layer: "front", shape: SHAPE_FRONT_F, color: "green", corner: "bottom-left", delay: 0.5 },
  ],
  [
    { layer: "back", shape: SHAPE_BACK_NAVY_CIRCLE, color: "green", corner: "top-left", delay: 0 },
    { layer: "front", shape: SHAPE_FRONT_S, color: "gray", corner: "bottom-left", delay: 0.5 },
  ],
  [
    { layer: "back", shape: SHAPE_BACK_S, color: "gray", corner: "top-right", delay: 0 },
    { layer: "front", shape: SHAPE_FRONT_PINK_SQUARE, color: "green", corner: "bottom-right", delay: 0.5 },
  ],
  [
    { layer: "back", shape: SHAPE_BACK_F, color: "green", corner: "top-right", delay: 0 },
    { layer: "front", shape: SHAPE_FRONT_S, color: "gray", corner: "bottom-left", delay: 0.5 },
  ],
  [
    { layer: "back", shape: SHAPE_BACK_NAVY_CIRCLE, color: "gray", corner: "top-left", delay: 0 },
    { layer: "front", shape: SHAPE_FRONT_PINK_SQUARE, color: "green", corner: "bottom-right", delay: 0.5 },
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

// Zwei Formen pro Bild – exakt wie bei okre.org: eine liegt hinter dem Foto
// und schaut nur an der Kante hervor, die andere liegt sichtbar über dem
// Foto. Beide Boxen sind exakt so groß wie das Foto selbst (100%/100%) und
// um 10% über die jeweilige Kante hinaus versetzt; die Form füllt die Box
// nur zu einem Teil (kommt aus ihrem eigenen, größeren Original-Canvas),
// wodurch der bekannte "Ecken-Peek"-Effekt entsteht. Beide schieben sich
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
