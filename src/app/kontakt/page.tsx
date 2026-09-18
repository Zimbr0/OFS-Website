import type { Metadata } from "next";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { CalendarIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { schoolInfo } from "@/content/schoolInfo";

export const metadata: Metadata = { title: "Kontakt" };

export default function KontaktPage() {
  return (
    <>
      <div className="wrap page-intro">
        <h1 className="h1" style={{ fontSize: "clamp(30px, 4vw, 46px)" }}>
          Wir sind für euch da
        </h1>
        <p className="body-l">
          Fragen zu Anmeldung, Betreuung oder Schulalltag? Meldet euch gerne bei uns.
        </p>
      </div>

      <section className="wrap split section">
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div className="tile">
            <div className="h3">Sekretariat</div>
            <p className="body-m" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <PhoneIcon /> {schoolInfo.sekretariat.telefon}
            </p>
            <p className="body-m" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <MailIcon />{" "}
              <a href={`mailto:${schoolInfo.sekretariat.email}`}>{schoolInfo.sekretariat.email}</a>
            </p>
          </div>

          <div className="tile">
            <div className="h3">OGS „{schoolInfo.ogs.name}“</div>
            <p className="body-m" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <PhoneIcon /> {schoolInfo.ogs.telefon} · Mobil {schoolInfo.ogs.mobil}
            </p>
            <p className="body-m" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <MailIcon /> <a href={`mailto:${schoolInfo.ogs.email}`}>{schoolInfo.ogs.email}</a>
            </p>
          </div>

          <div className="tile">
            <div className="h3">Adresse</div>
            <p className="body-m" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <PinIcon /> {schoolInfo.address.street}, {schoolInfo.address.zipCity}
            </p>
          </div>

          <div className="tile">
            <div className="h3">Terminkalender</div>
            <p className="body-m" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <CalendarIcon /> Folgt in Kürze als Download.
            </p>
          </div>
        </div>

        <PlaceholderImage label="Karte / Foto: Schuleingang" height={420} />
      </section>

      <div className="wrap" style={{ paddingBottom: 72 }}>
        <p className="body-m" style={{ maxWidth: 640 }}>
          Ein Kontaktformular folgt, sobald der E-Mail-Versand für die Seite eingerichtet ist. Bis
          dahin erreicht ihr uns am schnellsten direkt per Telefon oder E-Mail.
        </p>
      </div>
    </>
  );
}
