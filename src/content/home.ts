// Inhalte der Startseite. Änderungen an Texten können direkt hier vorgenommen
// werden, ohne die Seiten-Struktur (src/app/page.tsx) anzufassen.

export const hero = {
  eyebrow: "Grundschule Unna · Zum Osterfeld 9",
  title: "Das ICH entwickeln, das WIR stärken, das MORGEN mitgestalten.",
  intro:
    "Die Osterfeldschule ist die einzige komplett ebenerdige, barrierefreie Grundschule Unnas – mit MINT-Schwerpunkt, rund 146 Kindern in sieben jahrgangsbezogenen Klassen und einem Kollegium, das jedes Kind als wertvollen Teil der Gemeinschaft sieht.",
  stats: ["146 Schüler:innen", "7 Klassen", "MINT-Schwerpunkt", "barrierefrei"],
};

export const factSections = [
  {
    number: "01",
    title: "Unsere Schule",
    text: "Im Doppeldorf gelegen, nahe eines Landschaftsschutzgebiets, mit eigener Bushaltestelle, Turnhalle und Sportplatz (SSV Mühlhausen) direkt nebenan. Wir unterrichten jahrgangsbezogen in sieben Klassen und nehmen auch Inklusionskinder und Kinder aus Zuwandererfamilien auf.",
    ctaLabel: "Mehr über die Schule",
    ctaHref: "/wir",
    imageLabel: "Foto: Schulgebäude / Schulhof einfügen",
  },
  {
    number: "02",
    title: "Unser Kollegium",
    text: "Unser Kollegium besteht aus einem breit aufgestellten Team herzlicher Menschen mit verschiedenen Kompetenzen und Steckenpferden. Gelegentlich verstärken uns Studierende im Praxissemester und Lehramtsanwärter:innen. Inklusionsfachkräfte des SPI Unna unterstützen Kinder mit Förderbedarf im Alltag.",
    ctaLabel: "Team kennenlernen",
    ctaHref: "/wir#kollegium",
    imageLabel: "Foto: Kollegium Schuljahr 2025/26",
  },
  {
    number: "03",
    title: "Unsere Betreuung",
    text: "Von der Frühbetreuung ab 7 Uhr über die Kurzbetreuung bis zur OGS „Schülerbande“ mit Mittagessen, Hausaufgabenzeit und AGs bis 16 Uhr – für jede Familie das passende Modell, getragen von einem festen, engagierten Team.",
    ctaLabel: "Betreuung entdecken",
    ctaHref: "/betreuung",
    imageLabel: "Foto: OGS „Schülerbande“",
  },
];

// Partner & Unterstützer fürs Laufband (Marquee), direkt über dem Footer.
export const partners = [
  "Förderverein Osterfeldschule",
  "Stadt Unna",
  "SPI Unna",
  "Sparkasse Unna",
  "Karl-Kolle-Stiftung",
  "Stadtwerke Unna",
  "Bäckerei Höltermann",
];

// Zitat im Dawn-Abschnitt, anstelle der früheren Statistik.
export const leitspruch = {
  eyebrow: "Unsere Haltung",
  quote:
    "Wie die Welt von morgen aussehen wird, hängt im großen Maße von der Einbildungskraft derer ab, die gerade lesen lernen.",
  autor: "Astrid Lindgren",
};

// Echte Erfolge aus dem Schulleben statt erfundener Testimonials.
export const erfolge = {
  featured: {
    badge: "Stadtmeisterschaften",
    quote: "Stadtmeister im Handball – und in einer weiteren Saison Vizestadtmeister.",
    text: "Dazu starke Platzierungen bei den Stadtmeisterschaften Schwimmen und Leichtathletik.",
  },
  card: {
    badge: "Leseförderung",
    title: "Vorlesewettbewerb",
    text: "Jedes Jahr messen sich die besten Vorleser:innen jeder Klasse – in Kooperation mit der Buchhandlung Hornung.",
  },
};
