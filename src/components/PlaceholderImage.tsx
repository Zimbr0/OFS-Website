import type { CSSProperties } from "react";
import { basePath } from "@/lib/basePath";
import { ShapeAccents } from "@/components/ShapeAccents";

type PlaceholderImageProps = {
  label: string;
  height?: number;
  style?: CSSProperties;
  /** Dateiname unter public/images/, z. B. "hero-schulhof.jpg". */
  src?: string;
  /** Geometrische Formen, die an den Ecken hervorschauen (Standard: an). Bei
   * kleinen Foto-Kacheln (z. B. Klassenfotos im Grid) auf false setzen. */
  decorate?: boolean;
};

// Steht für ein echtes Foto, solange keins vorliegt. Ist ein Platzhalterfoto
// (src) hinterlegt, wird es als Hintergrund gezeigt und das "Foto: ..."-Label
// dient als Bildunterschrift/Quellenangabe statt als reiner Platzhaltertext.
// Sobald die Schule eigene Fotos liefert, einfach die Datei in public/images/
// austauschen und src entsprechend anpassen.
export function PlaceholderImage({
  label,
  height = 320,
  style,
  src,
  decorate = true,
}: PlaceholderImageProps) {
  const image = (
    <div
      className={`placeholder-img${src ? " has-photo" : ""}`}
      style={{
        height,
        ...(src ? { backgroundImage: `url(${basePath}/images/${src})` } : undefined),
        ...style,
      }}
    >
      <span className="placeholder-tag">{label}</span>
    </div>
  );

  if (!decorate) return image;

  return (
    <div className="img-frame">
      {/* src/label unterscheidet sich pro Bild, das generische Label ("Platz-
          halterfoto – echtes Foto folgt") dagegen nicht – als Seed daher
          bevorzugt src verwenden, damit benachbarte Bilder unterschiedliche
          Formen bekommen. */}
      <ShapeAccents seed={src ?? label} />
      {image}
    </div>
  );
}
