// Zentrale Fakten über die Schule. Diese Datei ist die Quelle für Adresse,
// Kontaktdaten und Ansprechpartner:innen, die an mehreren Stellen der Seite
// auftauchen (Footer, Kontaktseite, Betreuungsseite). Wenn sich Kontaktdaten
// ändern, reicht es, sie hier einmal anzupassen.

export const schoolInfo = {
  name: "Osterfeldschule Unna",
  motto: "Das ICH entwickeln, das WIR stärken, das MORGEN mitgestalten.",
  address: {
    street: "Zum Osterfeld 9",
    zipCity: "59425 Unna",
  },
  schulleitung: "Stefanie Hassel",
  sekretariat: {
    telefon: "02303 943296",
    email: "osterfeldschule@t-online.de",
  },
  ogs: {
    name: "Schülerbande",
    leitung: "Claudia Muermann & Jacqueline Beubler",
    telefon: "02303 943298",
    mobil: "0176 55912867",
    email: "ogs-osterfeldschule@spi-unna.de",
  },
  foerderverein: {
    name: "Freunde der Osterfeldschule e. V.",
    beschreibung:
      "Unterstützt Projekte, die der Schulträger nicht finanzieren kann – finanziert unter anderem durch Elternengagement und Spenden.",
  },
  schuljahr: "2025/26",
  anzahlSchueler: 146,
  anzahlKlassen: 7,
} as const;
