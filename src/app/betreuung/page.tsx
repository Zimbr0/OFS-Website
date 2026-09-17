import type { Metadata } from "next";
import { Badge } from "@/components/Badge";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionIntro } from "@/components/SectionIntro";
import { schoolInfo } from "@/content/schoolInfo";
import { anmeldungHinweis, betreuungsmodelle, ogs } from "@/content/betreuung";

export const metadata: Metadata = { title: "Betreuung" };

export default function BetreuungPage() {
  return (
    <>
      <div className="wrap page-intro">
        <span className="eyebrow">Betreuung</span>
        <h1 className="h1" style={{ fontSize: "clamp(30px, 4vw, 46px)" }}>
          Betreuungsangebote für jede Familie
        </h1>
        <p className="body-l">
          Von der Frühbetreuung bis zur Ganztagsbetreuung „Schülerbande“ – wir finden das passende
          Modell für eure Familie.
        </p>
      </div>

      <section className="wrap section grid grid-3">
        {betreuungsmodelle.map((modell) => (
          <div className="card" key={modell.title}>
            <div className="card-body">
              <Badge>{modell.badge}</Badge>
              <div className="h3">{modell.title}</div>
              <p className="body-m">{modell.text}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      <section className="wrap split section">
        <PlaceholderImage label={`Foto: OGS „${ogs.name}“`} height={380} />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span className="eyebrow">Unsere OGS</span>
          <h2 className="h2">„{ogs.name}“</h2>
          <p className="body-l" style={{ maxWidth: 520 }}>
            {ogs.herkunft} Getragen wird unsere OGS von vier Werten:
          </p>
          <div className="stat-row">
            {ogs.werte.map((wert) => (
              <Badge key={wert}>{wert}</Badge>
            ))}
          </div>
          <p className="body-m" style={{ maxWidth: 520 }}>
            Unser eigener OGS-Song „{ogs.song.titel}“ (von {ogs.song.kuenstler}) begleitet uns durch
            den Alltag – inklusive eigenem Musikvideo.
          </p>
        </div>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      <section className="wrap section" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <SectionIntro eyebrow="Tagesablauf" title="OGS-Alltag (Mo–Fr)" />
        <table className="simple-table">
          <thead>
            <tr>
              <th>Zeit</th>
              <th>Programm</th>
            </tr>
          </thead>
          <tbody>
            {ogs.alltag.map((zeile) => (
              <tr key={zeile.zeit}>
                <td>{zeile.zeit}</td>
                <td>{zeile.programm}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="body-m">
          Feste Abholzeiten: {ogs.abholzeiten.join(" und ")}.
        </p>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      <section className="wrap section" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <SectionIntro eyebrow="Angebote" title="AGs in der OGS" />
        <div className="stat-row">
          {ogs.ags.map((ag) => (
            <Badge key={ag}>{ag}</Badge>
          ))}
        </div>
        <p className="body-m">{ogs.highlight}</p>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      <section className="wrap section" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <SectionIntro eyebrow="Team" title="Team & Kontakt OGS" />
        <div className="grid grid-3">
          {ogs.team.map((person) => (
            <div className="tile" key={person.rolle}>
              <div className="footer-col-title" style={{ margin: 0 }}>
                {person.rolle}
              </div>
              <p className="body-m" style={{ margin: 0 }}>{person.namen}</p>
            </div>
          ))}
        </div>
        <p className="body-m">
          Telefon {schoolInfo.ogs.telefon} · Mobil {schoolInfo.ogs.mobil} ·{" "}
          {schoolInfo.ogs.email}
          <br />
          Kooperationspartner: {ogs.kooperationspartner.join(", ")}.
        </p>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      <section className="wrap section" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <SectionIntro eyebrow="Wichtig" title="Anmeldung & Kosten" />
        <div className="tile" style={{ maxWidth: 720 }}>
          <p className="body-m" style={{ margin: 0 }}>{anmeldungHinweis}</p>
        </div>
      </section>
    </>
  );
}
