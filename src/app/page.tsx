import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Marquee } from "@/components/Marquee";
import { SectionIntro } from "@/components/SectionIntro";
import { AltSection } from "@/components/AltSection";
import { AccessibleIcon } from "@/components/icons";
import { erfolge, factSections, hero, leitspruch, partners } from "@/content/home";

export default function HomePage() {
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
          <PlaceholderImage label="Foto: Schulgebäude / Schulhof einfügen" height={460} />

          <div
            className="floaty"
            style={{
              position: "absolute",
              right: -28,
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
                background: "var(--c-primary-soft)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--c-primary)",
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
      <section className="quote-field">
        <div className="wrap" style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <p className="quote-text">&bdquo;{leitspruch.quote}&ldquo;</p>
          <p className="body-m" style={{ marginTop: 18 }}>
            {leitspruch.autor}
          </p>
        </div>
      </section>

      {/* FACT SECTIONS */}
      {factSections.map((section, index) => (
        <AltSection key={section.title} index={index} {...section} />
      ))}

      <div className="wrap">
        <hr className="divider" />
      </div>

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
            <div className="h3" style={{ fontSize: 24, color: "#fff" }}>
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

      {/* MARQUEE / SPONSOREN */}
      <section className="wrap" style={{ padding: "56px 0", textAlign: "center" }}>
        <p className="body-m" style={{ marginBottom: 24 }}>
          Getragen von starken Partnern aus Unna
        </p>
        <Marquee items={partners} />
      </section>
    </>
  );
}
