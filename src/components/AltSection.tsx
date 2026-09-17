import { Button } from "./Button";
import { PlaceholderImage } from "./PlaceholderImage";
import { Reveal } from "./Reveal";

type AltSectionProps = {
  index: number;
  title: string;
  text: string;
  imageLabel: string;
  imageSrc?: string;
  kategorie?: string;
  datum?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

// Abwechselnd angeordneter Bild+Text-Abschnitt, u. a. für "Unsere Schule /
// Unser Kollegium / Unsere Betreuung" auf der Startseite und die
// Aktuelles-Übersicht. Datum/Kategorie werden bewusst als normaler Text statt
// als runde Badges dargestellt.
export function AltSection({ index, title, text, imageLabel, imageSrc, kategorie, datum, ctaLabel, ctaHref }: AltSectionProps) {
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

  const imageBlock = <PlaceholderImage label={imageLabel} height={420} src={imageSrc} />;

  return (
    <section className={`wrap split section${reverse ? " split-reverse" : ""}`}>
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
