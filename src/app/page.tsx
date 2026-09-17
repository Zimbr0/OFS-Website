import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { AccessibleIcon } from "@/components/icons";
import { aktuellesHighlights, factSections, hero, leitspruch, partners } from "@/content/home";
import { termine } from "@/content/termine";

export default function HomePage() {
  const naechsteTermine = termine.slice(0, 2);

  return (
    <>
      {/* HERO */}
      <section className="wrap split section" style={{ paddingTop: 56 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="h1">
            ICH entwickeln,
            <br />
            WIR stärken,
            <br />
            <span style={{ color: "var(--c-primary)" }}>MORGEN mitgestalten.</span>
          </h1>
          <p className="body-l" style={{ maxWidth: 520 }}>
            {hero.intro}
          </p>
          <div className="hero-actions" style={{ marginTop: 4 }}>
            <Button href="/wir" variant="primary">
              Lerne uns kennen
            </Button>
            <Button href="/kontakt">Kontakt</Button>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div className="card" style={{ boxShadow: "0 30px 70px -30px rgba(16,36,26,0.25)" }}>
            <div className="card-body" style={{ gap: 18 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="h3" style={{ fontSize: 17 }}>
                  Nächste Termine
                </span>
                <Badge>Termine</Badge>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {naechsteTermine.map((termin) => (
                  <div className="check-item" key={termin.titel}>
                    <span className="check-icon">
                      <CalendarDotIcon />
                    </span>
                    <span className="body-m">
                      <strong style={{ color: "var(--c-ink)" }}>{termin.titel}</strong>
                      <br />
                      {termin.datum}
                    </span>
                  </div>
                ))}
              </div>
              <Button href="/termine" size="sm">
                Alle Termine ansehen
              </Button>
            </div>
          </div>

          <div
            className="floaty"
            style={{
              position: "absolute",
              left: -28,
              bottom: -30,
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "#fff",
              border: "1.5px solid var(--c-line)",
              borderRadius: 16,
              padding: "14px 18px",
              boxShadow: "0 20px 40px -20px rgba(16,36,26,0.3)",
            }}
          >
            <span
              style={{
                width: 38,
                height: 38,
                borderRadius: 11,
                background: "var(--c-secondary-soft)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--c-secondary)",
                flexShrink: 0,
              }}
            >
              <AccessibleIcon size={18} />
            </span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontWeight: 800, fontSize: 14 }}>Barrierefrei</span>
              <span className="body-m" style={{ fontSize: 12 }}>
                Einzige ebenerdige Schule Unnas
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* ZITAT */}
      <section className="wrap" style={{ paddingBottom: 56 }}>
        <div className="quote-panel">
          <p className="quote-panel-text">&bdquo;{leitspruch.quote}&ldquo;</p>
          <p className="body-m" style={{ marginTop: 18 }}>
            {leitspruch.autor}
          </p>
        </div>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      {/* FACT SECTIONS */}
      {factSections.map((section, index) => (
        <AltSection key={section.title} index={index} {...section} />
      ))}

      <div className="wrap">
        <hr className="divider" />
      </div>

      {/* AKTUELLES */}
      <section className="wrap section" style={{ paddingBottom: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        <SectionIntro eyebrow="Aus dem Schulleben" title="Aktuelles" />
      </section>
      {aktuellesHighlights.map((item, index) => (
        <AltSection key={item.title} index={index} meta={item.datum} {...item} />
      ))}

      {/* MARQUEE / SPONSOREN */}
      <section className="marquee-band">
        <div className="wrap" style={{ textAlign: "center", marginBottom: 22 }}>
          <span className="eyebrow">Starke Partner aus Unna</span>
        </div>
        <Marquee items={partners} />
      </section>
    </>
  );
}

function AltSection({
  index,
  title,
  text,
  ctaLabel,
  ctaHref,
  imageLabel,
  meta,
}: {
  index: number;
  title: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
  imageLabel: string;
  meta?: string;
}) {
  const reverse = index % 2 === 1;

  const textBlock = (
    <Reveal>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {meta ? <Badge>{meta}</Badge> : null}
        <h2 className="h2">{title}</h2>
        <p className="body-l" style={{ maxWidth: 560 }}>
          {text}
        </p>
        <Button href={ctaHref}>{ctaLabel}</Button>
      </div>
    </Reveal>
  );

  const imageBlock = <PlaceholderImage label={imageLabel} height={420} />;

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

function CalendarDotIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}
