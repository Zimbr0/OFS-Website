import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutz" };

export default function DatenschutzPage() {
  return (
    <div className="wrap section" style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 20 }}>
      <h1 className="h1" style={{ fontSize: "clamp(30px, 4vw, 40px)" }}>
        Datenschutz
      </h1>

      <div className="tile" style={{ background: "var(--c-primary-soft)" }}>
        <p className="body-m" style={{ margin: 0 }}>
          Diese Datenschutzerklärung ist noch nicht vollständig. Sie muss vor der
          Veröffentlichung der Seite mit dem Schulträger bzw. dem behördlichen
          Datenschutzbeauftragten abgestimmt werden – insbesondere zu Cookies/Analyse-Tools (aktuell
          werden keine eingesetzt), Kontaktformularen und eventuell eingebundenen externen
          Diensten (z. B. Kartendienste, Videos).
        </p>
      </div>

      <p className="body-m">
        Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der DSGVO ist die
        Osterfeldschule Unna (Kontaktdaten siehe Impressum). Sobald personenbezogene Daten über
        diese Website verarbeitet werden (z. B. über ein Kontaktformular), werden Zweck,
        Rechtsgrundlage und Speicherdauer an dieser Stelle ausführlich beschrieben.
      </p>
    </div>
  );
}
