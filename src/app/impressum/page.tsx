import type { Metadata } from "next";
import { schoolInfo } from "@/content/schoolInfo";

export const metadata: Metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <div className="wrap section" style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 20 }}>
      <h1 className="h1" style={{ fontSize: "clamp(30px, 4vw, 40px)" }}>
        Impressum
      </h1>

      <div className="tile" style={{ background: "var(--c-secondary-soft)" }}>
        <p className="body-m" style={{ margin: 0 }}>
          Dieses Impressum ist noch unvollständig. Nach § 5 TMG sind unter anderem der
          verantwortliche Schulträger, eine vertretungsberechtigte Person sowie eine
          Aufsichtsbehörde anzugeben – diese Angaben müssen von der Schule bzw. der Stadt Unna als
          Schulträger bereitgestellt werden, bevor die Seite veröffentlicht wird.
        </p>
      </div>

      <div>
        <p className="body-m" style={{ fontWeight: 700, color: "var(--c-ink)", marginBottom: 4 }}>
          Angaben gemäß § 5 TMG
        </p>
        <p className="body-m">
          {schoolInfo.name}
          <br />
          {schoolInfo.address.street}
          <br />
          {schoolInfo.address.zipCity}
        </p>
      </div>

      <div>
        <p className="body-m" style={{ fontWeight: 700, color: "var(--c-ink)", marginBottom: 4 }}>
          Vertreten durch
        </p>
        <p className="body-m">Schulleitung: {schoolInfo.schulleitung} [Schulträger ergänzen]</p>
      </div>

      <div>
        <p className="body-m" style={{ fontWeight: 700, color: "var(--c-ink)", marginBottom: 4 }}>
          Kontakt
        </p>
        <p className="body-m">
          Telefon: {schoolInfo.sekretariat.telefon}
          <br />
          E-Mail: {schoolInfo.sekretariat.email}
        </p>
      </div>
    </div>
  );
}
