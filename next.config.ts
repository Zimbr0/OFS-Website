import type { NextConfig } from "next";

// Für GitHub Pages wird die Seite als reine HTML/CSS/JS-Dateien exportiert
// (kein Server nötig) und liegt dort unter /OFS-Website/ statt an der
// Domain-Wurzel. Lokal (npm run dev) bleibt alles wie gewohnt unter /.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "OFS-Website";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  images: { unoptimized: true },
};

export default nextConfig;
