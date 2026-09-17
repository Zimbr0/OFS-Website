// Inhalte für die Seite "Termine". "Heute an der Schule" zeigt den aktuellen
// Tag, darunter folgen die nächsten anstehenden Termine für Eltern. Echte
// Kalenderdaten liegen noch nicht vor – Daten sind bewusst als Platzhalter
// markiert und können ersetzt werden, sobald sie feststehen.

export const heuteAnDerSchule = [
  {
    titel: "Klassenrat 3b",
    text: "Thema: Frühlingsfensterbilder für den Flur",
    live: false,
  },
  {
    titel: "Forschertag Klasse 2",
    text: "Experimente zu den vier Elementen",
    live: false,
  },
  {
    titel: "OGS „Schülerbande“",
    text: "Rhythmen & Töne · 14:00–16:00",
    live: true,
  },
];

export type Termin = {
  datum: string;
  titel: string;
  kategorie: string;
  text: string;
};

export const termine: Termin[] = [
  {
    datum: "[Datum ergänzen]",
    titel: "Tag der offenen Tür",
    kategorie: "Schulleben",
    text: "Neue Familien lernen die Osterfeldschule kennen – mit Rundgang, Unterrichtseinblicken und Gesprächen mit dem Kollegium.",
  },
  {
    datum: "[Datum ergänzen]",
    titel: "Einschulung der neuen Erstklässler:innen",
    kategorie: "Schulleben",
    text: "Feierlicher Empfang der neuen Schulkinder in der Turnhalle, anschließend erste Unterrichtsstunde.",
  },
  {
    datum: "[Datum ergänzen]",
    titel: "St.-Martins-Fest",
    kategorie: "Schulleben",
    text: "Laternenumzug mit Posaunenchor und Begleitung der Feuerwehr.",
  },
  {
    datum: "[Datum ergänzen]",
    titel: "Adventssingen & Weihnachtsfeier",
    kategorie: "Schulleben",
    text: "Gemeinsames Singen im Advent, Adventsfenster und musikalischer Ausklang vor den Weihnachtsferien.",
  },
  {
    datum: "[Datum ergänzen]",
    titel: "Karneval an der Osterfeldschule",
    kategorie: "Schulleben",
    text: "Kostümiert und ausgelassen feiern alle Klassen gemeinsam Karneval.",
  },
  {
    datum: "[Datum ergänzen]",
    titel: "Zirkusprojektwoche",
    kategorie: "Projektwoche",
    text: "Der Schulhof verwandelt sich eine Woche lang in eine Zirkusmanege – mit Abschlussvorstellung für Familien.",
  },
  {
    datum: "[Datum ergänzen]",
    titel: "Sommerfest",
    kategorie: "Schulleben",
    text: "Gemeinsamer Ausklang des Schuljahres mit Spielen, Ständen und Wasserspaß auf dem Schulhof.",
  },
];

export const termineHinweis =
  "Diese Übersicht wird laufend ergänzt. Verbindliche Termine und genaue Uhrzeiten erhaltet ihr über SchoolFox und die Elternbriefe – bei Fragen meldet euch gerne im Sekretariat.";
