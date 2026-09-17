// Inhalte für die Seite "Wir" (Leitsätze, Kollegium, pädagogische
// Schwerpunkte ausführlich). Jede Kachel hat zusätzlich ein "detail" für den
// aufklappbaren Zusatztext.

import type { IconKey } from "@/components/icons";

export const leitsaetzeFull: { icon: IconKey; title: string; text: string; detail: string }[] = [
  {
    icon: "star",
    title: "Fördern & fordern",
    text: "Wir sehen verschiedene Begabungen und begleiten sie mit Augenmaß und Fingerspitzengefühl.",
    detail:
      "Team-Teaching, Kleingruppen und zusätzliche Förderstunden in Randstunden sorgen dafür, dass sowohl Kinder mit Förderbedarf als auch besonders leistungsstarke Kinder passend begleitet werden – etwa über ein Drehtürmodell in einzelnen Fächern.",
  },
  {
    icon: "flask",
    title: "MINT-Schwerpunkt",
    text: "Naturwissenschaftliches Lernen ist fester Bestandteil unseres Schulalltags.",
    detail:
      "Lego-Education-Kisten, Ozobots und regelmäßige Forschertage machen naturwissenschaftliches und technisches Lernen für die Kinder greifbar – finanziert unter anderem über den Förderverein und die Karl-Kolle-Stiftung.",
  },
  {
    icon: "accessible",
    title: "Barrierefrei für alle",
    text: "Als einzige komplett ebenerdige Grundschule Unnas sind wir für Rollstuhlfahrer:innen ausgestattet.",
    detail:
      "Das gesamte Schulgebäude ist ohne Stufen erreichbar. So können Kinder mit körperlich-motorischem Förderbedarf ganz selbstverständlich am Schulalltag teilnehmen – unterstützt von Inklusionsfachkräften des SPI Unna.",
  },
  {
    icon: "heart",
    title: "Toleranz & Gemeinschaft",
    text: "Jedes Kind ist ein wertvoller Teil unserer Gemeinschaft – unabhängig von Herkunft oder Förderbedarf.",
    detail:
      "Wir nehmen bewusst auch Inklusionskinder und Kinder aus Zuwandererfamilien auf und gestalten ein Schulleben, in dem Unterschiede als Bereicherung erlebt werden.",
  },
  {
    icon: "chat",
    title: "Transparenz & Kommunikation",
    text: "Wir pflegen eine offene Kommunikation mit den Eltern, unter anderem über den Schulmessenger SchoolFox.",
    detail:
      "Elternbriefe, aktuelle Termine und wichtige Rückfragen laufen über SchoolFox – ergänzt durch persönliche Gespräche und feste Sprechzeiten mit dem Kollegium.",
  },
  {
    icon: "flag",
    title: "Aktives Schulleben",
    text: "Von Vorlesewettbewerben über Sportfeste bis zu Projektwochen – wir gestalten Schule gemeinsam.",
    detail:
      "Ob Zirkusprojektwoche, St.-Martins-Fest oder Sommerfest: Feste und Projekte prägen unseren Schulalltag genauso wie der reguläre Unterricht – meist mit tatkräftiger Unterstützung engagierter Eltern.",
  },
  {
    icon: "users",
    title: "Betreuungsmodelle",
    text: "Frühbetreuung, Kurzbetreuung und OGS bieten für jede Familie das passende Modell.",
    detail:
      "Von 7 bis 16 Uhr ist für jede Familie etwas dabei – mit einem festen Team, warmem Mittagessen in der OGS und einem vielfältigen AG-Angebot.",
  },
  {
    icon: "bulb",
    title: "Offen für neue Impulse",
    text: "Wir entwickeln uns stetig weiter und freuen uns über neue Ideen aus Kollegium, Eltern und Kindern.",
    detail:
      "Ob im Klassenrat, Schülerrat oder direkt bei der Schulleitung: Vorschläge werden ernst genommen und fließen – wo möglich – direkt in den Schulalltag ein.",
  },
];

export const kollegium = {
  text: "Unser Kollegium besteht aus einem breit aufgestellten Team von herzlichen Menschen mit verschiedenen Kompetenzen und Steckenpferden. Gelegentlich verstärken uns auch Studierende im Praxissemester und Lehramtsanwärter:innen.",
  schuljahr: "2025/26",
  inklusion:
    "Unsere Inklusionsfachkräfte werden über den SPI Unna eingestellt und unterstützen Kinder mit Förderbedarf in der geistigen, emotional-sozialen sowie körperlich-motorischen Entwicklung.",
};

export const schwerpunkteFull: { icon: IconKey; title: string; text: string; detail: string }[] = [
  {
    icon: "ballot",
    title: "Demokratiebildung",
    text: "Ein wöchentlicher Klassenrat, ein Schülerrat mit der Schulleitung und die Teilnahme am Kinderrat der Stadt Unna (inklusive Bürgermeister-Besuch) geben Kindern eine echte Stimme.",
    detail:
      "Beispielprojekte: die Wahl des Themas für den Kunstwettbewerb, eine Werbekampagne für die Toilettensanierung und das „Grüne Klassenzimmer to Go“ – alles Ideen, die von den Kindern selbst mitentwickelt wurden.",
  },
  {
    icon: "shield",
    title: "Streitschlichtung",
    text: "Nach dem Bensberger Streitschlichtermodell durchläuft jede dritte Klasse eine Ausbildung zu Streitschlichter:innen.",
    detail:
      "Eine feste Streitschlichterecke sowie das Präventionsprojekt „Stark auch ohne Muckis“ (Löwenkinder) stärken den respektvollen Umgang miteinander im gesamten Schulalltag.",
  },
  {
    icon: "layers",
    title: "Fördern & Fordern",
    text: "Komplett barrierefrei gebaut, mit Team-Teaching und Förderbändern je nach Personalausstattung.",
    detail:
      "Kleingruppen, zusätzliche Förderstunden in Randstunden, ein Drehtürmodell für leistungsstarke Kinder (Teilnahme am Unterricht höherer Klassen in einzelnen Fächern) sowie ein AG-Angebot für interessengeleitetes Lernen ergänzen den Regelunterricht.",
  },
  {
    icon: "paw",
    title: "Schulhunde",
    text: "Frau Beubler besucht mit ihren Hündinnen Mia und Molly regelmäßig die Klassen.",
    detail: "Beide Hunde sind zertifiziert als Schulhunde ausgebildet und bringen Ruhe sowie Freude in den Unterrichtsalltag.",
  },
  {
    icon: "monitor",
    title: "Digitalisierung",
    text: "Digitale Tafeln (finanziert über den Digitalpakt) stehen in jedem Klassenraum, dazu ein iPad-Klassensatz.",
    detail: "Organisiert wird der Schulalltag über den Schulmessenger SchoolFox, über den auch Elternbriefe und Termine laufen.",
  },
  {
    icon: "atom",
    title: "Naturwissenschaftliches Lernen",
    text: "Lego-Education-Kisten und Ozobots machen Forschen im Unterricht greifbar.",
    detail:
      "Finanziert über den Förderverein, das Bürgerbudget der Stadt Unna und eine Stiftung der Karl-Kolle-Stiftung – ergänzt durch regelmäßige Forschertage mit externen Partnern.",
  },
  {
    icon: "book",
    title: "Leseförderung",
    text: "„Ein Buch ist wie ein Garten, den man in der Tasche trägt“ (arabische Weisheit) – Leseförderung hat bei uns einen festen Platz.",
    detail:
      "Lesespaziergänge, Lesetandems und feste Büchereistunden gehören zu unserem verbindlichen Lesekonzept nach dem NRW-Lehrplan. Unterstützt werden wir dabei von Lesepat:innen und Büchereieltern sowie dem jährlichen Vorlesewettbewerb in Kooperation mit der Buchhandlung Hornung.",
  },
];
