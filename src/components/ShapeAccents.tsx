"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type ShapeColor = "green" | "gray";
type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";
type Layer = "back";

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

const SHAPE_BACK_BLUE_STAR: ShapeDef = {
  viewBox: "0 0 760 737",
  markup: `<path d="M589.41 32.137L704.521 620.991L116.171 736.004L263.608 382.727L0.555355 147.248L589.41 32.137Z" fill="COLOR"/>`,
};

const SHAPE_BACK_TURQUOISE_HOOK: ShapeDef = {
  viewBox: "0 0 759 789",
  markup: `<path d="M641.667 533.135L758.135 98.4686L579.421 50.5821C442.962 14.0183 349.449 56.0781 323.03 154.675C309.241 206.138 320.09 256.236 355.212 296.212L207 416.667L641.667 533.135Z" fill="COLOR"/>`,
};

type ShapeSpec = {
  layer: Layer;
  shape: ShapeDef;
  color: ShapeColor;
  corner: Corner;
  delay?: number;
};

// Von den fünf Formkombinationen von okre.org übernehmen wir nur die
// hintere Form je Kombination (schaut nur an der Kante hervor) – die vordere,
// über dem Foto liegende Form wurde bewusst entfernt. Größe/Position sind
// bei allen identisch (siehe CSS: width/height 100%, Versatz -10%), exakt
// wie im Original-CSS (.mediaimg__img--shapes::before).
const VARIANTS: ShapeSpec[][] = [
  [{ layer: "back", shape: SHAPE_BACK_PINK_SQUARE, color: "gray", corner: "top-right", delay: 0 }],
  [{ layer: "back", shape: SHAPE_BACK_NAVY_CIRCLE, color: "green", corner: "top-left", delay: 0 }],
  [{ layer: "back", shape: SHAPE_BACK_TURQUOISE_HOOK, color: "gray", corner: "top-right", delay: 0 }],
  [{ layer: "back", shape: SHAPE_BACK_BLUE_STAR, color: "green", corner: "top-right", delay: 0 }],
  [{ layer: "back", shape: SHAPE_BACK_NAVY_CIRCLE, color: "gray", corner: "top-left", delay: 0 }],
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

// Eine Form pro Bild, liegt hinter dem Foto und schaut nur an einer Ecke
// hervor. Die Box ist exakt so groß wie das Foto selbst (100%/100%) und um
// 10% über die jeweilige Kante hinaus versetzt; die Form füllt die Box nur
// zu einem Teil (kommt aus ihrem eigenen, größeren Original-Canvas), wodurch
// der bekannte "Ecken-Peek"-Effekt entsteht. Sie schiebt sich von unten
// kommend ein, sobald das Bild beim Scrollen sichtbar wird. `index` sorgt
// dafür, dass aufeinanderfolgende Bilder nie dieselbe Form bekommen.
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
