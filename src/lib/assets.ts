// GitHub Pages behält Dateinamen unter public/ (logo.png, favicon.ico) bei
// jedem Deploy exakt bei – Next.js hängt dort keinen Inhalts-Hash an wie bei
// den _next/static-Dateien. Browser (und GitHub Pages' CDN) cachen solche
// Bilder darum aggressiv und zeigen nach einem Update oft weiter die alte
// Version, selbst nach einem normalen Reload. Diese Versionsnummer wird als
// ?v=-Parameter an den Bild-Pfad gehängt: Ändert sich die Nummer, ist es für
// den Browser eine "neue" URL und er lädt die Datei garantiert neu.
//
// Bei jedem Austausch von public/logo.png (oder favicon.ico) diese Zahl
// erhöhen.
export const ASSET_VERSION = 3;

export function withAssetVersion(path: string): string {
  return `${path}?v=${ASSET_VERSION}`;
}
