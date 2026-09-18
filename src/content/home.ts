// Inhalte der Startseite. Änderungen an Texten können direkt hier vorgenommen
// werden, ohne die Seiten-Struktur (src/app/page.tsx) anzufassen.

export const hero = {
  eyebrow: "Grundschule Unna · Zum Osterfeld 9",
  title: "ICH entwickeln, WIR stärken, MORGEN mitgestalten.",
  intro:
    "Die Osterfeldschule ist die einzige komplett ebenerdige, barrierefreie Grundschule Unnas – mit MINT-Schwerpunkt, rund 146 Kindern in sieben jahrgangsbezogenen Klassen und einem Kollegium, das jedes Kind als wertvollen Teil der Gemeinschaft sieht.",
};

export const factSections = [
  {
    title: "Unsere Schule",
    text: "Im Doppeldorf gelegen, nahe eines Landschaftsschutzgebiets, mit eigener Bushaltestelle, Turnhalle und Sportplatz (SSV Mühlhausen) direkt nebenan. Wir unterrichten jahrgangsbezogen in sieben Klassen und nehmen auch Inklusionskinder und Kinder aus Zuwandererfamilien auf.",
    ctaLabel: "Mehr über die Schule",
    ctaHref: "/wir",
    imageLabel: "Platzhalterfoto – echtes Foto folgt",
    imageSrc: "unsere-schule.jpg",
  },
  {
    title: "Unser Kollegium",
    text: "Unser Kollegium besteht aus einem breit aufgestellten Team herzlicher Menschen mit verschiedenen Kompetenzen und Steckenpferden. Gelegentlich verstärken uns Studierende im Praxissemester und Lehramtsanwärter:innen. Inklusionsfachkräfte des SPI Unna unterstützen Kinder mit Förderbedarf im Alltag.",
    ctaLabel: "Team kennenlernen",
    ctaHref: "/wir#kollegium",
    imageLabel: "Platzhalterfoto – echtes Foto folgt",
    imageSrc: "unser-kollegium.jpg",
  },
  {
    title: "Unsere Betreuung",
    text: "Von der Frühbetreuung ab 7 Uhr über die Kurzbetreuung bis zur OGS „Schülerbande“ mit Mittagessen, Hausaufgabenzeit und AGs bis 16 Uhr – für jede Familie das passende Modell, getragen von einem festen, engagierten Team.",
    ctaLabel: "Betreuung entdecken",
    ctaHref: "/betreuung",
    imageLabel: "Platzhalterfoto – echtes Foto folgt",
    imageSrc: "unsere-betreuung.jpg",
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

// Zitat direkt unter dem Hero.
export const leitspruch = {
  quote:
    "Wie die Welt von morgen aussehen wird, hängt im großen Maße von der Einbildungskraft derer ab, die gerade lesen lernen.",
  autor: "Astrid Lindgren",
};
