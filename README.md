# Osterfeldschule Unna – Website

Neue Website der Osterfeldschule Unna, gebaut mit Next.js (App Router) und
reinem CSS (Design-Tokens in `src/app/globals.css`). Das Design wurde aus der
Struktur von neuropelvicsurgery.com abgeleitet und für die Schule neu
eingefärbt (warmer Sonnengelb/Orange-Verlauf + Tannengrün) – abgenommen als
Design-Canvas vor dem Bau dieser Seiten.

## Lokal starten

```bash
npm install
npm run dev
```

Seite läuft dann unter http://localhost:3000. `npm run build` erstellt den
Produktions-Build, `npm run lint` prüft den Code.

## Projektstruktur

- `src/app/` – eine Route pro Unterordner (App Router). `layout.tsx` bindet
  Header, Footer, Schriftart und globale Styles ein.
- `src/components/` – wiederverwendbare Bausteine (Button, Card/Tile, FAQ-
  Akkordeon, Header, Footer, Icons). Hier steckt das Design-System.
- `src/content/` – **alle Texte der Seite**, getrennt nach Unterseite
  (`home.ts`, `wir.ts`, `betreuung.ts`, `klassen.ts`, `elternAZ.ts`,
  `aktuelles.ts`) plus `schoolInfo.ts` für Adresse/Kontakt (einmal pflegen,
  wird überall verwendet).
- `src/app/globals.css` – Design-Tokens (Farben, Radien, Typografie) und alle
  wiederkehrenden Klassen (`.btn`, `.card`, `.tile`, `.faq-*`, …).

## Texte / Inhalte ändern

Die Inhalte liegen bewusst als einfache, lesbare Textdateien in
`src/content/` und **nicht** in den Komponenten versteckt. Um z. B. einen
Leitsatz zu ändern oder eine neue Klasse einzutragen, reicht es, die
passende Datei in `src/content/` zu bearbeiten – die Seiten-Struktur bleibt
unangetastet. Das kann künftig auch einfach in Textform an Claude
weitergegeben werden ("ändere in home.ts den Hero-Text auf …").

## Bilder

Es sind aktuell überall beschriftete Platzhalter (`PlaceholderImage`)
eingesetzt, keine echten Fotos. Die Originalbilder der alten Seite liegen nur
als 200px-Thumbnails vor. Sobald hochauflösende Fotos vorliegen: Datei in
`public/images/` ablegen und den jeweiligen `PlaceholderImage`-Aufruf durch
`next/image` ersetzen.

## Offene Punkte (siehe Projekt-Briefing)

1. **Anmeldung & Kosten** – auf der alten Seite nur ein Platzhalter, echte
   Inhalte fehlen noch (Seite `/betreuung`, Abschnitt "Anmeldung & Kosten").
2. **Kindernamen/-fotos in „Aktuelles"** – bewusst anonymisiert übernommen
   (keine echten Namen, keine Kinderfotos), bis geklärt ist, wie damit
   umgegangen werden soll.
3. **Zitat von Astrid Lindgren** – auf der Startseite als Platzhalter markiert
   (`[Zitat von Astrid Lindgren hier einfügen]` in `src/content/home.ts`).
4. **Bildauflösung** – bessere Originalfotos von der Schule anfragen statt
   der alten Thumbnails.
5. **Impressum & Datenschutz** – rechtlich unvollständig, siehe
   `/impressum` und `/datenschutz`: Angaben müssen vom Schulträger (Stadt
   Unna) bzw. dem Datenschutzbeauftragten geprüft/ergänzt werden, **bevor**
   die Seite live geht.
6. **Kontaktformular** – noch nicht gebaut, da kein E-Mail-Versand
   eingerichtet ist. Aktuell verweist `/kontakt` auf Telefon/E-Mail.
7. **GitHub-Push-Methode** für künftige Änderungen sowie das
   **Vercel-Deployment** sind laut Briefing die nächsten Schritte nach dieser
   Seiten-Fertigstellung.

## Deployment

Noch nicht eingerichtet. Vorgesehen: Vercel, verbunden mit diesem
GitHub-Repository.
