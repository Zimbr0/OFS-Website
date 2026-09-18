import { Button } from "./Button";
import { PlaceholderImage } from "./PlaceholderImage";
import { Reveal } from "./Reveal";

type AltSectionProps = {
  index: number;
  title: string;
  text: string;
  imageSrc?: string;
  kategorie?: string;
  datum?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Anker-ID, z. B. damit von der Startseite direkt auf diesen Beitrag
   * verlinkt werden kann (siehe NewsTile + slugify). */
  id?: string;
};

// Abwechselnd angeordneter Bild+Text-Abschnitt, u. a. für "Unsere Schule /
// Unser Kollegium / Unsere Betreuung" auf der Startseite und die
// Aktuelles-Übersicht. Datum/Kategorie werden bewusst als normaler Text statt
// als runde Badges dargestellt.
export function AltSection({ index, title, text, imageSrc, kategorie, datum, ctaLabel, ctaHref, id }: AltSectionProps) {
  const reverse = index % 2 === 1;

  const textBlock = (
    <Reveal>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {kategorie || datum ? (
          <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            {kategorie ? (
              <span className="footer-col-title" style={{ margin: 0 }}>
                {kategorie}
              </span>
            ) : null}
            {datum ? (
              <span style={{ color: "var(--c-primary)", fontWeight: 700, fontSize: 14 }}>{datum}</span>
            ) : null}
          </div>
        ) : null}
        <h2 className="h2">{title}</h2>
        <p className="body-l" style={{ maxWidth: 560 }}>
          {text}
        </p>
        {ctaLabel && ctaHref ? <Button href={ctaHref}>{ctaLabel}</Button> : null}
      </div>
    </Reveal>
  );

  const imageBlock = <PlaceholderImage height={420} src={imageSrc} index={index} />;

  return (
    <section id={id} className={`wrap split section${reverse ? " split-reverse" : ""}`}>
      {reverse ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </section>
  );
}
