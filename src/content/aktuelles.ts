// Beiträge aus dem Schulleben. Übernommen aus der alten Website, aber ohne
// Kindernamen und ohne Fotos einzelner Kinder — bis geklärt ist, wie damit
// umgegangen werden soll (siehe README, Offene Punkte). Neue Beiträge können
// hier einfach ergänzt werden: { titel, kategorie, text }.

export type AktuellesEintrag = {
  titel: string;
  kategorie: string;
  text: string;
};

export const aktuellesEintraege: AktuellesEintrag[] = [
  {
    titel: "Lego-Education-Kisten für den MINT-Unterricht",
    kategorie: "MINT",
    text: "Finanziert durch den Förderverein und das Bürgerbudget der Stadt Unna ergänzen neue Lego-Education-Kisten unseren naturwissenschaftlichen Unterricht.",
  },
  {
    titel: "Vorlesewettbewerb",
    kategorie: "Leseförderung",
    text: "Jedes Jahr messen sich die besten Vorleser:innen jeder Klasse – in Kooperation mit der Buchhandlung Hornung.",
  },
  {
    titel: "Stadtmeisterschaften Schwimmen & Handball",
    kategorie: "Sport",
    text: "Im Bergenkampbad und in der Halle traten unsere Klassen bei den Stadtmeisterschaften an und wurden Stadtmeister im Handball.",
  },
  {
    titel: "Zoobesuch der ersten Klassen",
    kategorie: "Ausflug",
    text: "Die ersten Klassen erkundeten gemeinsam den Dortmunder Zoo.",
  },
  {
    titel: "Forschertag mit Wissensshow",
    kategorie: "MINT",
    text: "Dr. Sascha Ott brachte den Kindern mit spannenden Experimenten die vier Elemente näher.",
  },
  {
    titel: "Stadtmeisterschaften Leichtathletik",
    kategorie: "Sport",
    text: "Unsere Schüler:innen traten bei den städtischen Leichtathletik-Wettkämpfen an.",
  },
  {
    titel: "Wasserschlacht zum Sommerfest",
    kategorie: "Schulleben",
    text: "Gesponsert vom Förderverein sorgte die Wasserschlacht beim Sommerfest für eine willkommene Abkühlung.",
  },
  {
    titel: "Tag der offenen Tür",
    kategorie: "Schulleben",
    text: "Neue Familien lernten die Osterfeldschule bei einem Tag der offenen Tür kennen.",
  },
  {
    titel: "Auftritt beim Stadtfest",
    kategorie: "Schulleben",
    text: "Gemeinsam mit den „Herti Rockers“ präsentierten die Kinder unseren Schulsong beim Stadtfest.",
  },
  {
    titel: "Fortbildungstag Digitalisierung & Ozobots",
    kategorie: "Digitalisierung",
    text: "Das Kollegium bildete sich zum Einsatz digitaler Tafeln und der Ozobots im Unterricht fort.",
  },
  {
    titel: "Kunstwettbewerb „Flurkunst nach Camille Saint-Saëns“",
    kategorie: "Kunst",
    text: "Ein schulweiter Kunstwettbewerb verwandelte unsere Flure in eine Ausstellung.",
  },
  {
    titel: "Renovierung von Toiletten und Lesedschungel",
    kategorie: "Elternengagement",
    text: "Engagierte Eltern renovierten in Eigeninitiative die Toiletten und unseren Lesedschungel.",
  },
  {
    titel: "St.-Martins-Fest",
    kategorie: "Schulleben",
    text: "Mit Posaunenchor, Laternenumzug und Begleitung der Feuerwehr feierten wir gemeinsam St. Martin.",
  },
  {
    titel: "Advent: Basteln, Singen und Musical",
    kategorie: "Schulleben",
    text: 'Adventsbasteln, Adventssingen, ein Weihnachtskonvoi des Round Table und Adventsfenster mit dem Musical „Folge dem Stern“ stimmten uns auf Weihnachten ein.',
  },
  {
    titel: "Karneval an der Osterfeldschule",
    kategorie: "Schulleben",
    text: "Kostümiert und ausgelassen feierten alle Klassen gemeinsam Karneval.",
  },
  {
    titel: "Zirkusprojektwoche",
    kategorie: "Projektwoche",
    text: "Mit der Familie Bichlmaier („Manegentraum“) verwandelte sich der Schulhof eine Woche lang in eine Zirkusmanege – ermöglicht durch zahlreiche lokale Sponsoren.",
  },
  {
    titel: "Erntedank-Gottesdienst",
    kategorie: "Schulleben",
    text: "Gemeinsam feierten wir einen Erntedank-Gottesdienst.",
  },
  {
    titel: "Kinderrat der Stadt Unna",
    kategorie: "Demokratiebildung",
    text: "Vertreter:innen unserer Schule nahmen am Kinderrat der Stadt Unna teil, inklusive Besuch des Bürgermeisters.",
  },
  {
    titel: "Projekttag Trommelzauber",
    kategorie: "Musik",
    text: "Ein rhythmischer Projekttag brachte alle Klassen gemeinsam zum Trommeln.",
  },
];
