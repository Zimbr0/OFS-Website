import { schoolInfo } from "./schoolInfo";

export const faqItems = [
  {
    question: "Wie melde ich mein Kind an und was kostet die Betreuung?",
    answer:
      "Wird noch ergänzt – die Elternbeiträge staffelt die Stadt Unna in der Regel nach Einkommen. Aktuelle Beträge und das Anmeldeformular folgen, sobald sie von der Schule vorliegen.",
  },
  {
    question: "Wie erreiche ich das Sekretariat?",
    answer: `Telefonisch unter ${schoolInfo.sekretariat.telefon} oder per E-Mail an ${schoolInfo.sekretariat.email}.`,
  },
  {
    question: "Wie erreiche ich das OGS-Team?",
    answer: `Telefonisch unter ${schoolInfo.ogs.telefon} (Mobil: ${schoolInfo.ogs.mobil}) oder per E-Mail an ${schoolInfo.ogs.email}.`,
  },
  {
    question: "Wo finde ich den Terminkalender?",
    answer:
      "Der Terminkalender für das erste Halbjahr wird hier als Download bereitgestellt, sobald er von der Schule vorliegt.",
  },
  {
    question: "Über welchen Kanal kommunziert die Schule mit uns Eltern?",
    answer:
      "Wir nutzen den Schulmessenger SchoolFox für aktuelle Informationen, ergänzt durch Elternabende und Elternbriefe.",
  },
  {
    question: "Wie kann ich mich als Elternteil engagieren?",
    answer: `Über den Förderverein „${schoolInfo.foerderverein.name}“ – mehr dazu auf der Förderverein-Seite – oder direkt im Gespräch mit dem Kollegium.`,
  },
];
