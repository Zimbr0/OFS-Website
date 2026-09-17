import type { Metadata } from "next";
import { ExpandableTile } from "@/components/ExpandableTile";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionIntro } from "@/components/SectionIntro";
import { iconMap } from "@/components/icons";
import { kollegium, leitsaetzeFull, schwerpunkteFull } from "@/content/wir";

export const metadata: Metadata = { title: "Wir" };

export default function WirPage() {
  return (
    <>
      <div className="wrap page-intro">
        <span className="eyebrow">Wir</span>
        <h1 className="h1" style={{ fontSize: "clamp(30px, 4vw, 46px)" }}>
          Das WIR, das uns trägt
        </h1>
        <p className="body-l">
          Acht Leitsätze, ein Kollegium und sieben pädagogische Schwerpunkte – das ist die
          Osterfeldschule im Alltag.
        </p>
      </div>

      <section className="wrap section" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <div className="grid grid-4">
          {leitsaetzeFull.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <ExpandableTile key={item.title} icon={<Icon />} title={item.title} detail={item.detail}>
                {item.text}
              </ExpandableTile>
            );
          })}
        </div>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      <section id="kollegium" className="wrap split section">
        <PlaceholderImage label={`Foto: Kollegium Schuljahr ${kollegium.schuljahr}`} height={420} />
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span className="eyebrow">Unser Kollegium</span>
          <h2 className="h2">Ein Team mit vielen Talenten</h2>
          <p className="body-l" style={{ maxWidth: 560 }}>
            {kollegium.text}
          </p>
          <p className="body-m" style={{ maxWidth: 560 }}>
            {kollegium.inklusion}
          </p>
        </div>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      <section className="wrap section" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <SectionIntro eyebrow="Wir stellen unsere Arbeit vor" title="Pädagogische Schwerpunkte" />
        <div className="grid grid-3">
          {schwerpunkteFull.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <ExpandableTile key={item.title} icon={<Icon />} title={item.title} detail={item.detail}>
                {item.text}
              </ExpandableTile>
            );
          })}
        </div>
      </section>
    </>
  );
}
