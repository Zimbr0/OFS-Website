export const betreuungsmodelle = [
  {
    badge: "07:00 – 07:45 Uhr",
    title: "Frühbetreuung",
    text: "Ein ruhiger, verlässlicher Start in den Schultag für Familien, die früh aus dem Haus müssen.",
  },
  {
    badge: "08:00 – 13:15 Uhr",
    title: "Kurzbetreuung",
    text: "Nur an Unterrichtstagen, ohne Mittagessen und ohne Hausaufgabenbetreuung. Kein Angebot in den Ferien.",
  },
  {
    badge: "08:00 – 16:00 Uhr",
    title: "OGS „Schülerbande“",
    text: "An allen Unterrichtstagen und in den Ferien, mit Mittagessen, Teepause, Hausaufgabenzeit sowie AGs und Projekten.",
  },
];

export const ogs = {
  name: "Schülerbande",
  herkunft: "Der Name wurde von den Kindern selbst gewählt.",
  werte: [
    {
      icon: "users" as const,
      title: "Gemeinschaft",
      text: "Wir erleben den Alltag als „Schülerbande“ gemeinsam – jahrgangsübergreifend und mit festen Bezugspersonen.",
    },
    {
      icon: "heart" as const,
      title: "Vielfalt & Inklusion",
      text: "Jedes Kind bringt seine eigenen Stärken mit – wir gestalten die OGS so, dass alle mitmachen können.",
    },
    {
      icon: "shield" as const,
      title: "Vertrauen & Respekt",
      text: "Ein wertschätzender, verlässlicher Umgang miteinander ist die Grundlage für unser Zusammenleben.",
    },
    {
      icon: "chat" as const,
      title: "Kommunikation",
      text: "Wir sprechen offen miteinander – mit den Kindern genauso wie im Austausch mit den Eltern.",
    },
  ],
  song: {
    titel: "Playing in the Sunshine",
    kuenstler: 'Keith Powell / "Roughhouse" und Eliane Hobbing',
  },
  alltag: [
    { zeit: "11:45 – 12:30", programm: "Freispiel" },
    { zeit: "12:30 – 13:15", programm: "Mittagessen" },
    { zeit: "13:15 – 14:00", programm: "Flitzerpause & Hausaufgaben" },
    { zeit: "14:00 – 16:00", programm: "„Rhythmen und Töne“ oder Freispiel" },
  ],
  abholzeiten: ["15:00 Uhr", "16:00 Uhr"],
  ags: [
    "Rhythmus & Töne",
    "Yoga",
    "Natur entdecken",
    "Spiel & Spaß in der Turnhalle",
    "Hunde-AG",
    "Fußball",
    "Schach-AG",
    "Beauty-Angebote",
    "Kreativprojekte",
    "Entspannungs-AG",
  ],
  highlight: "Ein besonderes Highlight ist die jährliche Lesenacht.",
  team: [
    { rolle: "Leitung", namen: "Claudia Mürmann & Jacqueline Beubler" },
    { rolle: "Erzieherinnen", namen: "Susanne Trenkel, Kimberly Kirsch" },
    { rolle: "OGS-Fachkraft", namen: "Hassatou Baryy" },
    { rolle: "Auszubildender", namen: "Kai Sänger" },
    { rolle: "FSJler", namen: "Fynn Smolinski" },
    { rolle: "Küchenhauswirtschafterin", namen: "Karin Schwaneberg" },
  ],
  kooperationspartner: ["Kultur und Schule", "Schachverein", "engagierte Eltern"],
};

export const anmeldungHinweis =
  "Diese Seite wird noch erstellt – aktuelle Informationen zu Anmeldung und Kosten folgen, sobald sie von der Schule vorliegen. Die Stadt Unna staffelt die Elternbeiträge in der Regel nach Einkommen; verbindliche Beträge findest du im Serviceportal der Stadt Unna.";
