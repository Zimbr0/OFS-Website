import type { Metadata } from "next";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { schoolInfo } from "@/content/schoolInfo";

export const metadata: Metadata = { title: "Förderverein" };

export default function FoerdervereinPage() {
  return (
    <section className="wrap split section" style={{ paddingTop: 64 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <h1 className="h1" style={{ fontSize: "clamp(30px, 4vw, 46px)" }}>
          {schoolInfo.foerderverein.name}
        </h1>
        <p className="body-l" style={{ maxWidth: 560 }}>
          {schoolInfo.foerderverein.beschreibung}
        </p>
        <p className="body-m" style={{ maxWidth: 560 }}>
          Ob Lego-Education-Kisten, die Wasserschlacht beim Sommerfest oder besondere
          Projektwochen – vieles im Schulleben der Osterfeldschule ist nur durch die
          Unterstützung des Fördervereins möglich. Informationen zu Mitgliedschaft und Spenden
          folgen in Kürze.
        </p>
      </div>
      <PlaceholderImage label="Foto: Förderverein-Aktion" height={360} />
    </section>
  );
}
