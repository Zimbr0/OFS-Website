// Inhalte der Startseite. Änderungen an Texten können direkt hier vorgenommen
// werden, ohne die Seiten-Struktur (src/app/page.tsx) anzufassen.

import type { IconKey } from "@/components/icons";

export const hero = {
  eyebrow: "Grundschule Unna · Zum Osterfeld 9",
  title: "Das ICH entwickeln, das WIR stärken, das MORGEN mitgestalten.",
  intro:
    "Die Osterfeldschule ist die einzige komplett ebenerdige, barrierefreie Grundschule Unnas – mit MINT-Schwerpunkt, rund 146 Kindern in sieben jahrgangsbezogenen Klassen und einem Kollegium, das jedes Kind als wertvollen Teil der Gemeinschaft sieht.",
  stats: ["146 Schüler:innen", "7 Klassen", "MINT-Schwerpunkt", "barrierefrei"],
};

export const leitsaetze: { icon: IconKey; title: string; text: string }[] = [
  {
    icon: "star",
    title: "Fördern & fordern",
    text: "Verschiedene Begabungen sehen und mit Augenmaß begleiten.",
  },
  {
    icon: "flask",
    title: "MINT-Schwerpunkt",
    text: "Forschen, Tüfteln und Entdecken mit Ozobots & Co.",
  },
  {
    icon: "accessible",
    title: "Barrierefrei für alle",
    text: "Ebenerdig gebaut – ganz gleich, welche Voraussetzungen ein Kind mitbringt.",
  },
  {
    icon: "heart",
    title: "Toleranz & Gemeinschaft",
    text: "Jedes Kind ist ein wertvoller Teil unserer Schulgemeinschaft.",
  },
  {
    icon: "chat",
    title: "Transparenz",
    text: "Offene Kommunikation mit Eltern – über SchoolFox und im Gespräch.",
  },
  {
    icon: "flag",
    title: "Aktives Schulleben",
    text: "Vom Tag der offenen Tür bis zum Zirkusprojekt – gemeinsam erleben.",
  },
  {
    icon: "users",
    title: "Betreuungsmodelle",
    text: "Von der Frühbetreuung bis zur OGS „Schülerbande“.",
  },
  {
    icon: "bulb",
    title: "Offen für Neues",
    text: "Neue Impulse aus Kollegium, Eltern und Kindern willkommen heißen.",
  },
];

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
];

export const betreuungCards = [
  {
    badge: "07:00 – 07:45 Uhr",
    title: "Frühbetreuung",
    text: "Ein ruhiger Start in den Schultag für früh startende Familien.",
    imageLabel: "Foto: Frühbetreuung",
  },
  {
    badge: "08:00 – 13:15 Uhr",
    title: "Kurzbetreuung",
    text: "An Unterrichtstagen, ohne Mittagessen und Hausaufgabenbetreuung, kein Angebot in den Ferien.",
    imageLabel: "Foto: Kurzbetreuung",
  },
  {
    badge: "08:00 – 16:00 Uhr",
    title: "OGS „Schülerbande“",
    text: "Alle Unterrichtstage und Ferien, mit Mittagessen, Hausaufgabenzeit und AGs. Abholzeiten: 15:00 & 16:00 Uhr.",
    imageLabel: "Foto: OGS „Schülerbande“",
    highlight: true,
  },
];

export const schwerpunkte: { icon: IconKey; title: string; text: string }[] = [
  {
    icon: "ballot",
    title: "Demokratiebildung",
    text: "Klassenrat, Schülerrat und der Kinderrat der Stadt Unna.",
  },
  {
    icon: "shield",
    title: "Streitschlichtung",
    text: "Bensberger Modell – ausgebildete Streitschlichter:innen aus jeder dritten Klasse.",
  },
  {
    icon: "layers",
    title: "Fördern & Fordern",
    text: "Team-Teaching, Kleingruppen und ein Drehtürmodell für starke Kinder.",
  },
  {
    icon: "paw",
    title: "Schulhunde",
    text: "Mia & Molly besuchen regelmäßig die Klassen – zertifiziert ausgebildet.",
  },
  {
    icon: "monitor",
    title: "Digitalisierung",
    text: "Digitale Tafeln in jedem Klassenraum und ein iPad-Klassensatz.",
  },
  {
    icon: "atom",
    title: "Naturwiss. Lernen",
    text: "Lego Education, Ozobots und Forschertage im MINT-Schwerpunkt.",
  },
  {
    icon: "book",
    title: "Leseförderung",
    text: "Lesetandems, Lesespaziergänge und feste Büchereistunden.",
  },
];

export const missionQuote = {
  eyebrow: "Unsere Haltung",
  quote: "[Zitat von Astrid Lindgren hier einfügen]",
  text: "Getragen wird unsere Arbeit vom „Freunde der Osterfeldschule e. V.“ – dem Förderverein, der Projekte ermöglicht, die der Schulträger nicht finanzieren kann.",
  ctaLabel: "Förderverein unterstützen",
  ctaHref: "/foerderverein",
  imageLabel: "Foto: Schulleben / Sommerfest",
};

export const faqPreview = [
  {
    question: "Wie melde ich mein Kind an und was kostet die Betreuung?",
    answer:
      "Wird noch ergänzt – die Elternbeiträge staffelt die Stadt Unna nach Einkommen. Aktuelle Beträge und das Anmeldeformular folgen in Kürze.",
  },
  {
    question: "Wie erreiche ich das Sekretariat?",
    answer: "Telefonisch unter 02303 943296 oder per E-Mail an osterfeldschule@t-online.de.",
  },
];
