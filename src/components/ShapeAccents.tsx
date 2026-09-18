"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type ShapeColor = "green" | "gray";
type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

// Exakte Formen von okre.org (wp-content/themes/okre/img/shapes/*.svg),
// nachgebaut mit den Originalkoordinaten – nur die Füllfarbe wird durch
// unser Grün/Grau ersetzt (per currentColor).
type ShapeDef = {
  viewBox: string;
  node: ReactNode;
};

const SHAPE_BACK_PINK_SQUARE: ShapeDef = {
  viewBox: "0 0 736 736",
  node: <rect x="156.254" width="600" height="600" transform="rotate(15.0952 156.254 0)" fill="currentColor" />,
};

const SHAPE_BACK_NAVY_CIRCLE: ShapeDef = {
  viewBox: "0 0 768 737",
  node: <circle cx="300.039" cy="312.747" r="299.5" fill="currentColor" />,
};

const SHAPE_BACK_BLUE_STAR: ShapeDef = {
  viewBox: "0 0 760 737",
  node: (
    <path
      d="M589.41 32.137L704.521 620.991L116.171 736.004L263.608 382.727L0.555355 147.248L589.41 32.137Z"
      fill="currentColor"
    />
  ),
};

const SHAPE_BACK_TURQUOISE_HOOK: ShapeDef = {
  viewBox: "0 0 759 789",
  node: (
    <path
      d="M641.667 533.135L758.135 98.4686L579.421 50.5821C442.962 14.0183 349.449 56.0781 323.03 154.675C309.241 206.138 320.09 256.236 355.212 296.212L207 416.667L641.667 533.135Z"
      fill="currentColor"
    />
  ),
};

// Original-Canvas der drei "front"-Formen ist mit viel Leerraum exportiert
// (734x727) – hier auf die tatsächliche Silhouette zugeschnitten (bounding
// box der Originalkoordinaten + Verschiebung), damit sie im dominanten
// Format erscheint statt winzig in der Ecke des Original-Canvas.
const SHAPE_FRONT_BLUE_ARROW: ShapeDef = {
  viewBox: "0 0 183.712 183.679",
  node: (
    <path
      d="M197.823 726.712L159 581.823L303.765 543.033L273.06 633.676L342.712 687.889L197.823 726.712Z"
      fill="currentColor"
      transform="translate(-159 -543.033)"
    />
  ),
};

const SHAPE_FRONT_TURQUOISE_FLAG: ShapeDef = {
  viewBox: "0 0 146.97 138.431",
  node: (
    <path
      d="M104.927 718.969L73.8692 603.058L121.526 590.289C157.915 580.538 182.852 591.754 189.897 618.047C193.574 631.77 190.681 645.13 181.315 655.79L220.839 687.911L104.927 718.969Z"
      fill="currentColor"
      transform="translate(-73.8692 -580.538)"
    />
  ),
};

const SHAPE_FRONT_PINK_SQUARE: ShapeDef = {
  viewBox: "0 0 169.371 169.371",
  node: (
    <rect
      x="494.792"
      y="550"
      width="138.291"
      height="138.291"
      transform="translate(-458.9997 -550) rotate(15 494.792 550)"
      fill="currentColor"
    />
  ),
};

type Layer = "back" | "front";

type ShapeSpec = {
  layer: Layer;
  shape: ShapeDef;
  color: ShapeColor;
  corner: Corner;
  /** Größe in % der Bildbreite/-höhe. */
  size: number;
  /** Versatz in % über die Bildkante hinaus (negativ = schaut hervor/liegt über dem Foto). */
  offset: number;
  delay?: number;
};

// Die fünf Formkombinationen von okre.org 1:1 übernommen (welche Form liegt
// hinten/vorne, welche Ecke), nur mit unseren Farben statt ihrer Markenfarben.
// Reihenfolge wird über den Bild-Index alterniert, damit nie zwei gleiche
// Kombinationen aufeinanderfolgen.
const VARIANTS: ShapeSpec[][] = [
  [
    { layer: "back", shape: SHAPE_BACK_PINK_SQUARE, color: "gray", corner: "top-right", size: 58, offset: -20, delay: 0 },
    { layer: "front", shape: SHAPE_FRONT_BLUE_ARROW, color: "green", corner: "bottom-left", size: 34, offset: -8, delay: 0.25 },
  ],
  [
    { layer: "back", shape: SHAPE_BACK_NAVY_CIRCLE, color: "green", corner: "top-left", size: 50, offset: -18, delay: 0 },
    { layer: "front", shape: SHAPE_FRONT_TURQUOISE_FLAG, color: "gray", corner: "bottom-left", size: 30, offset: -6, delay: 0.25 },
  ],
  [
    { layer: "back", shape: SHAPE_BACK_TURQUOISE_HOOK, color: "gray", corner: "top-right", size: 52, offset: -18, delay: 0 },
    { layer: "front", shape: SHAPE_FRONT_PINK_SQUARE, color: "green", corner: "bottom-right", size: 26, offset: -6, delay: 0.25 },
  ],
  [
    { layer: "back", shape: SHAPE_BACK_BLUE_STAR, color: "green", corner: "top-right", size: 56, offset: -20, delay: 0 },
    { layer: "front", shape: SHAPE_FRONT_TURQUOISE_FLAG, color: "gray", corner: "bottom-left", size: 30, offset: -6, delay: 0.25 },
  ],
  [
    { layer: "back", shape: SHAPE_BACK_NAVY_CIRCLE, color: "gray", corner: "top-left", size: 50, offset: -18, delay: 0 },
    { layer: "front", shape: SHAPE_FRONT_PINK_SQUARE, color: "green", corner: "bottom-right", size: 26, offset: -6, delay: 0.25 },
  ],
];

function variantIndexFor(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % VARIANTS.length;
}

// Zwei Formen pro Bild – analog zu okre.org: eine liegt hinter dem Foto und
// schaut nur an der Kante hervor, die andere liegt sichtbar über dem Foto.
// Beide schieben sich von unten kommend ein (Translate + Fade), sobald das
// Bild beim Scrollen in den sichtbaren Bereich kommt. `index` sorgt dafür,
// dass aufeinanderfolgende Bilder nie dieselbe Kombination bekommen.
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
        // `offset` beschreibt, wie weit die Form über die Bildkante hinaus-
        // schaut, in % ihrer EIGENEN Größe. top/right/bottom/left würden
        // Prozentwerte dagegen relativ zum (viel größeren) Elternelement
        // auflösen und die Form je nach Bildbreite völlig unterschiedlich
        // weit hinausschieben – deshalb wird die Form exakt an der Ecke
        // (0/0) verankert und der Versatz per translate() nachgezogen, das
        // sich auf die eigene Boxgröße bezieht.
        const isTop = spec.corner.startsWith("top");
        const isLeft = spec.corner.endsWith("left");
        const ox = isLeft ? spec.offset : -spec.offset;
        const oy = isTop ? spec.offset : -spec.offset;

        const style: CSSProperties = {
          width: `${spec.size}%`,
          height: `${spec.size}%`,
          color: `var(--c-shape-${spec.color})`,
          "--shape-delay": `${spec.delay ?? 0}s`,
          "--shape-ox": `${ox}%`,
          "--shape-oy": `${oy}%`,
        } as CSSProperties;

        if (isTop) style.top = 0;
        else style.bottom = 0;
        if (isLeft) style.left = 0;
        else style.right = 0;

        return (
          <span
            key={i}
            className={`shape-decor shape-layer-${spec.layer}${visible ? " is-visible" : ""}`}
            style={style}
          >
            <svg viewBox={spec.shape.viewBox} preserveAspectRatio="xMidYMid meet">
              {spec.shape.node}
            </svg>
          </span>
        );
      })}
    </div>
  );
}
