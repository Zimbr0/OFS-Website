import { Button } from "@/components/Button";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Marquee } from "@/components/Marquee";
import { SectionIntro } from "@/components/SectionIntro";
import { AltSection } from "@/components/AltSection";
import { NewsCarousel } from "@/components/NewsCarousel";
import { TypedHeroHeading } from "@/components/TypedHeroHeading";
import { factSections, hero, leitspruch, partners } from "@/content/home";
import { aktuellesEintraege } from "@/content/aktuelles";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="wrap split section" style={{ paddingTop: 64 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <TypedHeroHeading />
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

        <PlaceholderImage height={460} src="hero-schulhof.jpg" />
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      {/* ZITAT */}
      <section className="quote-field">
        <div className="wrap" style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <span className="quote-mark" aria-hidden="true">
            &rdquo;
          </span>
          <p className="quote-text">{leitspruch.quote}</p>
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
      <section className="wrap section" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
          <SectionIntro title="Aktuelles" />
          <Button href="/aktuelles">Alle Beiträge ansehen</Button>
        </div>
        <NewsCarousel eintraege={aktuellesEintraege.slice(0, 8)} />
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
