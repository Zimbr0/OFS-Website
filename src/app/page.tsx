import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { Tile } from "@/components/Tile";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { StatBar } from "@/components/StatBar";
import { SectionIntro } from "@/components/SectionIntro";
import { FaqAccordion } from "@/components/FaqAccordion";
import { iconMap, AccessibleIcon } from "@/components/icons";
import {
  betreuungCards,
  betreuungStunden,
  erfolge,
  faqPreview,
  hero,
  partners,
  schoolInfoStats,
  schwerpunkte,
} from "@/content/home";

export default function HomePage() {
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
                  Heute an der Schule
                </span>
                <Badge live>LIVE</Badge>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div className="check-item">
                  <span className="check-icon">
                    <CheckIcon />
                  </span>
                  <span className="body-m">
                    <strong style={{ color: "var(--c-ink)" }}>Klassenrat 3b</strong>
                    <br />
                    Thema: Frühlingsfensterbilder für den Flur
                  </span>
                </div>
                <div className="check-item">
                  <span className="check-icon">
                    <CheckIcon />
                  </span>
                  <span className="body-m">
                    <strong style={{ color: "var(--c-ink)" }}>Forschertag Klasse 2</strong>
                    <br />
                    Experimente zu den vier Elementen
                  </span>
                </div>
                <div className="check-item">
                  <span className="check-icon">
                    <DotIcon />
                  </span>
                  <span className="body-m">
                    <strong style={{ color: "var(--c-ink)" }}>OGS „Schülerbande“</strong>
                    <br />
                    Rhythmen &amp; Töne · 14:00–16:00
                  </span>
                </div>
              </div>
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
                background: "var(--c-mint)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--c-primary-deep)",
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

      {/* STAT BAND */}
      <section style={{ background: "var(--c-mint)", padding: "44px 0" }}>
        <div className="wrap grid grid-4" style={{ textAlign: "center" }}>
          {schoolInfoStats.map((stat) => (
            <div key={stat.label}>
              <div className="h2" style={{ fontSize: 34, color: stat.accent ? "var(--c-primary-deep)" : undefined }}>
                {stat.value}
              </div>
              <p className="body-m">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <section style={{ padding: "36px 0", borderBottom: "1px solid var(--c-line)" }}>
        <p className="body-m" style={{ textAlign: "center", marginBottom: 18 }}>
          Getragen von starken Partnern aus Unna
        </p>
        <Marquee items={partners} />
      </section>

      {/* DAWN / MOTTO SECTION */}
      <section className="section-dawn" style={{ padding: "96px 0" }}>
        <div className="wrap split">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <span className="eyebrow" style={{ color: "var(--c-mint-light)" }}>
              Unser Motto
            </span>
            <h2 className="h2" style={{ color: "#fff" }}>
              Das ICH entwickeln,
              <br />
              das WIR stärken,
              <br />
              das MORGEN mitgestalten.
            </h2>
            <p className="body-l" style={{ maxWidth: 480 }}>
              Von der Frühbetreuung um 7 Uhr bis zur OGS „Schülerbande“ um 16 Uhr – für jede Familie das
              passende Modell.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: "var(--radius-l)",
              padding: 34,
            }}
          >
            {betreuungStunden.map((row, index) => (
              <StatBar
                key={row.label}
                label={row.label}
                value={row.value}
                percent={row.percent}
                delay={index * 0.12}
                dark
                fillColor={index === 2 ? "var(--c-mint-light)" : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SCHWERPUNKTE */}
      <section className="wrap section" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <SectionIntro eyebrow="Wir stellen unsere Arbeit vor" title="Pädagogische Schwerpunkte" />
        <div className="grid grid-4">
          {schwerpunkte.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <Tile icon={<Icon size={22} />} title={item.title}>
                  {item.text}
                </Tile>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* BETREUUNG */}
      <section className="wrap section" style={{ paddingTop: 0, display: "flex", flexDirection: "column", gap: 40 }}>
        <SectionIntro eyebrow="Betreuung" title="Für jede Familie das passende Modell" />
        <div className="grid grid-3">
          {betreuungCards.map((card) => (
            <div
              className="card"
              key={card.title}
              style={
                card.highlight
                  ? { borderColor: "var(--c-primary)", boxShadow: "0 20px 45px -25px rgba(22,179,100,0.4)" }
                  : undefined
              }
            >
              <div className="card-body">
                <Badge live={card.highlight} style={card.highlight ? { background: "var(--c-primary)", color: "#fff" } : undefined}>
                  {card.badge}
                </Badge>
                <div className="h3">{card.title}</div>
                <p className="body-m">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ERFOLGE */}
      <section className="wrap section" style={{ paddingTop: 0, display: "flex", flexDirection: "column", gap: 36 }}>
        <SectionIntro eyebrow="Aus dem Schulleben" title="Erfolge & Highlights" />
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
            <Badge style={{ background: "rgba(255,255,255,0.12)", color: "var(--c-mint-light)" }}>
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
      </section>

      {/* FAQ */}
      <section className="wrap section" style={{ paddingTop: 0, display: "flex", flexDirection: "column", gap: 32 }}>
        <SectionIntro eyebrow="FAQ" title="Eltern A–Z" />
        <FaqAccordion items={faqPreview} openFirst />
        <Button href="/eltern-a-z">Alle Fragen ansehen</Button>
      </section>

      {/* FINAL CTA */}
      <section className="wrap" style={{ paddingBottom: 96 }}>
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
            <p className="body-l" style={{ maxWidth: 480 }}>
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
    </>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function DotIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}
