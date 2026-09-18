import type { Metadata } from "next";
import { Badge } from "@/components/Badge";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionIntro } from "@/components/SectionIntro";
import { Tile } from "@/components/Tile";
import { iconMap } from "@/components/icons";
import { schoolInfo } from "@/content/schoolInfo";
import { anmeldungHinweis, betreuungsmodelle, ogs } from "@/content/betreuung";

export const metadata: Metadata = { title: "Betreuung" };

export default function BetreuungPage() {
  return (
    <>
      <div className="wrap page-intro">
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
          <h2 className="h2">„{ogs.name}“</h2>
          <p className="body-l" style={{ maxWidth: 520 }}>
            {ogs.herkunft}
          </p>
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
        <SectionIntro title="Getragen von vier Werten" />
        <div className="grid grid-4">
          {ogs.werte.map((wert) => {
            const Icon = iconMap[wert.icon];
            return (
              <Tile key={wert.title} icon={<Icon />} title={wert.title}>
                {wert.text}
              </Tile>
            );
          })}
        </div>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      <section className="wrap section" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <SectionIntro title="OGS-Alltag (Mo–Fr)" />
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
        <SectionIntro title="AGs in der OGS" />
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
        <SectionIntro title="Team & Kontakt OGS" />
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
        <SectionIntro title="Anmeldung & Kosten" />
        <div className="tile" style={{ maxWidth: 720 }}>
          <p className="body-m" style={{ margin: 0 }}>{anmeldungHinweis}</p>
        </div>
      </section>
    </>
  );
}
