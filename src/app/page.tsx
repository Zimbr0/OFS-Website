import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { AccessibleIcon } from "@/components/icons";
import { erfolge, factSections, hero, leitspruch, partners } from "@/content/home";
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
            Das ICH entwickeln, das WIR stärken,{" "}
            <span style={{ color: "var(--c-primary)" }}>das MORGEN mitgestalten.</span>
          </h1>
          <p className="body-l" style={{ maxWidth: 520 }}>
            {hero.intro}
          </p>
          <div className="hero-actions" style={{ marginTop: 4 }}>
            <Button href="/wir" variant="primary">
              Wir kennenlernen
            </Button>
            <Button href="/kontakt">Anmeldung & Kontakt</Button>
          </div>
          <Badge live style={{ marginTop: 8 }}>
            146 Schüler:innen · 7 Klassen · MINT-Schwerpunkt
          </Badge>
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

      <div className="wrap">
        <hr className="divider" />
      </div>

      {/* FACT SECTIONS */}
      {factSections.map((section, index) => (
        <section
          key={section.number}
          className={`wrap split section${index % 2 === 1 ? " split-reverse" : ""}`}
        >
          {index % 2 === 0 ? (
            <>
              <PlaceholderImage label={section.imageLabel} height={420} />
              <FactSectionText section={section} />
            </>
          ) : (
            <>
              <FactSectionText section={section} />
              <PlaceholderImage label={section.imageLabel} height={420} />
            </>
          )}
        </section>
      ))}

      {/* DAWN / ZITAT */}
      <section className="section-dawn" style={{ padding: "96px 0" }}>
        <div className="wrap" style={{ maxWidth: 760, textAlign: "center", margin: "0 auto" }}>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.85)", justifyContent: "center" }}>
            {leitspruch.eyebrow}
          </span>
          <blockquote
            className="quote-serif"
            style={{ fontSize: "clamp(24px, 3.4vw, 34px)", color: "#fff", margin: "20px 0" }}
          >
            &bdquo;{leitspruch.quote}&ldquo;
          </blockquote>
          <p className="body-m" style={{ color: "rgba(255,255,255,0.78)" }}>
            {leitspruch.autor}
          </p>
        </div>
      </section>

      {/* AKTUELLES */}
      <section className="wrap section" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <SectionIntro eyebrow="Aus dem Schulleben" title="Aktuelles" />
        <div className="split" style={{ gap: 20 }}>
          <div
            style={{
              background: "var(--c-ink)",
              borderRadius: "var(--radius-l)",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              gap: 18,
              color: "#fff",
            }}
          >
            <Badge style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}>
              {erfolge.featured.badge}
            </Badge>
            <div className="quote-serif" style={{ fontSize: 24, color: "#fff" }}>
              {erfolge.featured.quote}
            </div>
            <p className="body-m" style={{ color: "rgba(255,255,255,0.7)" }}>
              {erfolge.featured.text}
            </p>
          </div>
          <div className="card">
            <div className="card-body">
              <Badge>{erfolge.card.badge}</Badge>
              <div className="h3">{erfolge.card.title}</div>
              <p className="body-m">{erfolge.card.text}</p>
            </div>
          </div>
        </div>
        <Button href="/aktuelles">Alle Beiträge ansehen</Button>
      </section>

      {/* FINAL CTA */}
      <section className="wrap" style={{ paddingBottom: 72 }}>
        <div
          className="split"
          style={{
            borderRadius: "var(--radius-l)",
            background: "var(--gradient-morgen)",
            padding: 56,
            gap: 40,
            color: "#fff",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <h2 className="h2" style={{ color: "#fff", fontSize: 36 }}>
              Lernt uns persönlich kennen.
            </h2>
            <p className="body-l" style={{ maxWidth: 480, color: "rgba(255,255,255,0.85)" }}>
              Beim nächsten Tag der offenen Tür oder jederzeit nach Absprache – wir freuen uns auf euch.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Button href="/kontakt" variant="primary">
                Termin vereinbaren
              </Button>
            </div>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            <div>
              <div className="h2" style={{ color: "#fff", fontSize: 32 }}>
                146
              </div>
              <p className="body-m" style={{ color: "rgba(255,255,255,0.75)" }}>
                Schüler:innen
              </p>
            </div>
            <div>
              <div className="h2" style={{ color: "#fff", fontSize: 32 }}>
                7
              </div>
              <p className="body-m" style={{ color: "rgba(255,255,255,0.75)" }}>
                Klassen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / SPONSOREN */}
      <section style={{ padding: "36px 0 0" }}>
        <p className="body-m" style={{ textAlign: "center", marginBottom: 18 }}>
          Getragen von starken Partnern aus Unna
        </p>
        <Marquee items={partners} />
      </section>
    </>
  );
}

function FactSectionText({
  section,
}: {
  section: { number: string; title: string; text: string; ctaLabel: string; ctaHref: string };
}) {
  return (
    <Reveal>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <span className="section-num">{section.number}</span>
        <h2 className="h2">{section.title}</h2>
        <p className="body-l" style={{ maxWidth: 560 }}>
          {section.text}
        </p>
        <Button href={section.ctaHref}>{section.ctaLabel}</Button>
      </div>
    </Reveal>
  );
}

function CalendarDotIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}
