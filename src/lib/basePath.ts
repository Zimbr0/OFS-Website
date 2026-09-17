// Auf GitHub Pages liegt die Seite unter /OFS-Website/ statt an der
// Domain-Wurzel. next/link und normale <script>/<link>-Tags bekommen das
// automatisch vorangestellt, next/image bei Bildern aus public/ in diesem
// Setup nicht – darum hier manuell.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
