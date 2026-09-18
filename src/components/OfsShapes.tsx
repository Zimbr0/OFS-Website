// Blockige "OFS"-Monogramm-Formen (O, F, S) als einzelne, eigenständige
// SVG-Objekte. Jede Form ist pixelgenau aus der Vorlage nachgebaut und lässt
// sich unabhängig einsetzen (z. B. als Wortmarke, Muster oder Akzent-Form).
// Farbe folgt standardmäßig currentColor, ist per Prop aber frei wählbar.

type ShapeProps = {
  size?: number;
  className?: string;
  color?: string;
};

export function OfsShapeO({ size = 64, className, color = "currentColor" }: ShapeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 397 397" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M0 0H397V397H0V0Z" fill={color} />
    </svg>
  );
}

export function OfsShapeF({ size = 64, className, color = "currentColor" }: ShapeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 397 397" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M0 0H397V125H202V195H317V320H202V397H0V0Z" fill={color} />
    </svg>
  );
}

export function OfsShapeS({ size = 64, className, color = "currentColor" }: ShapeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 397 397" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M0 0H397V86H163V156H397V397H0V0Z" fill={color} />
    </svg>
  );
}

// Bequemer Zugriff über Name, z. B. für dynamische Zuordnung.
export const ofsShapeMap = {
  o: OfsShapeO,
  f: OfsShapeF,
  s: OfsShapeS,
} as const;

export type OfsShapeKey = keyof typeof ofsShapeMap;
