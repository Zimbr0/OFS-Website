import type { CSSProperties } from "react";

type PlaceholderImageProps = {
  label: string;
  height?: number;
  style?: CSSProperties;
};

// Steht für ein echtes Foto, solange keins vorliegt. Sobald die Schule
// hochauflösende Bilder liefert, wird dieser Platzhalter durch <Image>
// aus next/image ersetzt (Datei in public/images/ ablegen und hier
// austauschen).
export function PlaceholderImage({ label, height = 320, style }: PlaceholderImageProps) {
  return (
    <div className="placeholder-img" style={{ height, ...style }}>
      <span className="placeholder-tag">{label}</span>
    </div>
  );
}
