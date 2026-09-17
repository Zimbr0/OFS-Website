// Beiträge aus dem Schulleben. Übernommen aus der alten Website, aber ohne
// Kindernamen und ohne Fotos einzelner Kinder — bis geklärt ist, wie damit
// umgegangen werden soll (siehe README, Offene Punkte). Neue Beiträge können
// hier einfach ergänzt werden: { titel, kategorie, datum, text, imageLabel }.
// "datum" ist bewusst als Platzhalter markiert, solange die echten Daten
// nicht vorliegen.

export type AktuellesEintrag = {
  titel: string;
  kategorie: string;
  datum: string;
  text: string;
  imageLabel: string;
};

export const aktuellesEintraege: AktuellesEintrag[] = [
  {
    titel: "Lego-Education-Kisten für den MINT-Unterricht",
    kategorie: "MINT",
    datum: "[Datum ergänzen]",
    text: "Finanziert durch den Förderverein und das Bürgerbudget der Stadt Unna ergänzen neue Lego-Education-Kisten unseren naturwissenschaftlichen Unterricht.",
    imageLabel: "Foto: Lego-Education-Kisten",
  },
  {
    titel: "Vorlesewettbewerb",
    kategorie: "Leseförderung",
    datum: "[Datum ergänzen]",
    text: "Jedes Jahr messen sich die besten Vorleser:innen jeder Klasse – in Kooperation mit der Buchhandlung Hornung.",
    imageLabel: "Foto: Vorlesewettbewerb",
  },
  {
    titel: "Stadtmeisterschaften Schwimmen & Handball",
    kategorie: "Sport",
    datum: "[Datum ergänzen]",
    text: "Im Bergenkampbad und in der Halle traten unsere Klassen bei den Stadtmeisterschaften an und wurden Stadtmeister im Handball.",
    imageLabel: "Foto: Stadtmeisterschaften Schwimmen & Handball",
  },
  {
    titel: "Zoobesuch der ersten Klassen",
    kategorie: "Ausflug",
    datum: "[Datum ergänzen]",
    text: "Die ersten Klassen erkundeten gemeinsam den Dortmunder Zoo.",
    imageLabel: "Foto: Zoobesuch",
  },
  {
    titel: "Forschertag mit Wissensshow",
    kategorie: "MINT",
    datum: "[Datum ergänzen]",
    text: "Dr. Sascha Ott brachte den Kindern mit spannenden Experimenten die vier Elemente näher.",
    imageLabel: "Foto: Forschertag",
  },
  {
    titel: "Stadtmeisterschaften Leichtathletik",
    kategorie: "Sport",
    datum: "[Datum ergänzen]",
    text: "Unsere Schüler:innen traten bei den städtischen Leichtathletik-Wettkämpfen an.",
    imageLabel: "Foto: Stadtmeisterschaften Leichtathletik",
  },
  {
    titel: "Wasserschlacht zum Sommerfest",
    kategorie: "Schulleben",
    datum: "[Datum ergänzen]",
    text: "Gesponsert vom Förderverein sorgte die Wasserschlacht beim Sommerfest für eine willkommene Abkühlung.",
    imageLabel: "Foto: Wasserschlacht Sommerfest",
  },
  {
    titel: "Tag der offenen Tür",
    kategorie: "Schulleben",
    datum: "[Datum ergänzen]",
    text: "Neue Familien lernten die Osterfeldschule bei einem Tag der offenen Tür kennen.",
    imageLabel: "Foto: Tag der offenen Tür",
  },
  {
    titel: "Auftritt beim Stadtfest",
    kategorie: "Schulleben",
    datum: "[Datum ergänzen]",
    text: "Gemeinsam mit den „Herti Rockers“ präsentierten die Kinder unseren Schulsong beim Stadtfest.",
    imageLabel: "Foto: Auftritt Stadtfest",
  },
  {
    titel: "Fortbildungstag Digitalisierung & Ozobots",
    kategorie: "Digitalisierung",
    datum: "[Datum ergänzen]",
    text: "Das Kollegium bildete sich zum Einsatz digitaler Tafeln und der Ozobots im Unterricht fort.",
    imageLabel: "Foto: Fortbildungstag Digitalisierung",
  },
  {
    titel: "Kunstwettbewerb „Flurkunst nach Camille Saint-Saëns“",
    kategorie: "Kunst",
    datum: "[Datum ergänzen]",
    text: "Ein schulweiter Kunstwettbewerb verwandelte unsere Flure in eine Ausstellung.",
    imageLabel: "Foto: Kunstwettbewerb Flurkunst",
  },
  {
    titel: "Renovierung von Toiletten und Lesedschungel",
    kategorie: "Elternengagement",
    datum: "[Datum ergänzen]",
    text: "Engagierte Eltern renovierten in Eigeninitiative die Toiletten und unseren Lesedschungel.",
    imageLabel: "Foto: Renovierung Lesedschungel",
  },
  {
    titel: "St.-Martins-Fest",
    kategorie: "Schulleben",
    datum: "[Datum ergänzen]",
    text: "Mit Posaunenchor, Laternenumzug und Begleitung der Feuerwehr feierten wir gemeinsam St. Martin.",
    imageLabel: "Foto: St.-Martins-Fest",
  },
  {
    titel: "Advent: Basteln, Singen und Musical",
    kategorie: "Schulleben",
    datum: "[Datum ergänzen]",
    text: 'Adventsbasteln, Adventssingen, ein Weihnachtskonvoi des Round Table und Adventsfenster mit dem Musical „Folge dem Stern“ stimmten uns auf Weihnachten ein.',
    imageLabel: "Foto: Adventszeit",
  },
  {
    titel: "Karneval an der Osterfeldschule",
    kategorie: "Schulleben",
    datum: "[Datum ergänzen]",
    text: "Kostümiert und ausgelassen feierten alle Klassen gemeinsam Karneval.",
    imageLabel: "Foto: Karneval",
  },
  {
    titel: "Zirkusprojektwoche",
    kategorie: "Projektwoche",
    datum: "[Datum ergänzen]",
    text: "Mit der Familie Bichlmaier („Manegentraum“) verwandelte sich der Schulhof eine Woche lang in eine Zirkusmanege – ermöglicht durch zahlreiche lokale Sponsoren.",
    imageLabel: "Foto: Zirkusprojektwoche",
  },
  {
    titel: "Erntedank-Gottesdienst",
    kategorie: "Schulleben",
    datum: "[Datum ergänzen]",
    text: "Gemeinsam feierten wir einen Erntedank-Gottesdienst.",
    imageLabel: "Foto: Erntedank-Gottesdienst",
  },
  {
    titel: "Kinderrat der Stadt Unna",
    kategorie: "Demokratiebildung",
    datum: "[Datum ergänzen]",
    text: "Vertreter:innen unserer Schule nahmen am Kinderrat der Stadt Unna teil, inklusive Besuch des Bürgermeisters.",
    imageLabel: "Foto: Kinderrat der Stadt Unna",
  },
  {
    titel: "Projekttag Trommelzauber",
    kategorie: "Musik",
    datum: "[Datum ergänzen]",
    text: "Ein rhythmischer Projekttag brachte alle Klassen gemeinsam zum Trommeln.",
    imageLabel: "Foto: Projekttag Trommelzauber",
  },
];
