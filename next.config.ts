import type { NextConfig } from "next";

// Für GitHub Pages wird die Seite als reine HTML/CSS/JS-Dateien exportiert
// (kein Server nötig) und liegt dort unter /OFS-Website/ statt an der
// Domain-Wurzel. Lokal (npm run dev) bleibt alles wie gewohnt unter /.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "OFS-Website";

const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  images: { unoptimized: true },
  // next/image lässt bei diesem Setup basePath vor Bildern aus public/ weg
  // (anders als bei Links/Skripten) – wird darum manuell durchgereicht,
  // siehe src/lib/basePath.ts.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
