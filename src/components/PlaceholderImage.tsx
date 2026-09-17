import type { CSSProperties } from "react";
import { basePath } from "@/lib/basePath";

type PlaceholderImageProps = {
  label: string;
  height?: number;
  style?: CSSProperties;
  /** Dateiname unter public/images/, z. B. "hero-schulhof.jpg". */
  src?: string;
};

// Steht für ein echtes Foto, solange keins vorliegt. Ist ein Platzhalterfoto
// (src) hinterlegt, wird es als Hintergrund gezeigt und das "Foto: ..."-Label
// dient als Bildunterschrift/Quellenangabe statt als reiner Platzhaltertext.
// Sobald die Schule eigene Fotos liefert, einfach die Datei in public/images/
// austauschen und src entsprechend anpassen.
export function PlaceholderImage({ label, height = 320, style, src }: PlaceholderImageProps) {
  return (
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
}
