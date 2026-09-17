import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { Tile } from "@/components/Tile";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionIntro } from "@/components/SectionIntro";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SproutGrowth } from "@/components/SproutGrowth";
import { iconMap } from "@/components/icons";
import {
  betreuungCards,
  factSections,
  faqPreview,
  hero,
  leitsaetze,
  missionQuote,
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
            {hero.title}
            <SproutGrowth />
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
          <div className="stat-row" style={{ marginTop: 10 }}>
            {hero.stats.map((stat) => (
              <Badge key={stat}>{stat}</Badge>
            ))}
          </div>
        </div>
        <PlaceholderImage label="Foto: Schulgebäude / Schulhof einfügen" height={480} />
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      {/* LEITSÄTZE */}
      <section className="wrap section" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <SectionIntro eyebrow="Unsere Leitsätze" title="Das WIR, das uns trägt">
          Acht Grundsätze, nach denen wir jeden Tag Schule gestalten.
        </SectionIntro>
        <div className="grid grid-4">
          {leitsaetze.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Tile key={item.title} icon={<Icon />} title={item.title}>
                {item.text}
              </Tile>
            );
          })}
        </div>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      {/* FACT SECTIONS */}
      {factSections.map((section, index) => (
        <section
          key={section.number}
          className={`wrap split section${index === 1 ? " split-reverse" : ""}`}
        >
          {index === 0 ? (
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

      <div className="wrap">
        <hr className="divider" />
      </div>

      {/* BETREUUNG */}
      <section className="wrap section" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <SectionIntro eyebrow="Betreuung" title="Betreuungsangebote für jede Familie">
          Von der Frühbetreuung bis zur Ganztagsbetreuung „Schülerbande“.
        </SectionIntro>
        <div className="grid grid-3">
          {betreuungCards.map((card) => (
            <div
              className="card"
              key={card.title}
              style={
                card.highlight
                  ? { background: "linear-gradient(160deg, var(--c-secondary-soft), var(--c-card))" }
                  : undefined
              }
            >
              <PlaceholderImage
                label={card.imageLabel}
                height={170}
                style={
                  card.highlight
                    ? { background: "linear-gradient(135deg, var(--c-accent-a), var(--c-accent-b))" }
                    : undefined
                }
              />
              <div className="card-body">
                <Badge>{card.badge}</Badge>
                <div className="h3">{card.title}</div>
                <p className="body-m">{card.text}</p>
                <Button href="/betreuung" variant={card.highlight ? "primary" : "secondary"} size="sm">
                  Mehr erfahren
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      {/* PÄDAGOGISCHE SCHWERPUNKTE */}
      <section className="wrap section" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <SectionIntro eyebrow="Wir stellen unsere Arbeit vor" title="Pädagogische Schwerpunkte" />
        <div className="grid grid-4">
          {schwerpunkte.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Tile key={item.title} icon={<Icon />} title={item.title}>
                {item.text}
              </Tile>
            );
          })}
        </div>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      {/* MISSION / ZITAT */}
      <section className="wrap split section">
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span className="eyebrow">{missionQuote.eyebrow}</span>
          <blockquote className="h2" style={{ margin: 0, fontSize: 32, fontWeight: 700 }}>
            &bdquo;{missionQuote.quote}&ldquo;
          </blockquote>
          <p className="body-l" style={{ maxWidth: 560 }}>
            {missionQuote.text}
          </p>
          <Button href={missionQuote.ctaHref}>{missionQuote.ctaLabel}</Button>
        </div>
        <PlaceholderImage
          label={missionQuote.imageLabel}
          height={340}
          style={{ background: "linear-gradient(135deg, var(--c-accent-a), var(--c-accent-b))" }}
        />
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      {/* FAQ PREVIEW */}
      <section className="wrap section" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <SectionIntro eyebrow="FAQ" title="Eltern A–Z" />
        <FaqAccordion items={faqPreview} openFirst />
        <Button href="/eltern-a-z">Alle Fragen ansehen</Button>
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
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <span className="section-num">{section.number}</span>
      <h2 className="h2">{section.title}</h2>
      <p className="body-l" style={{ maxWidth: 560 }}>
        {section.text}
      </p>
      <Button href={section.ctaHref}>{section.ctaLabel}</Button>
    </div>
  );
}
