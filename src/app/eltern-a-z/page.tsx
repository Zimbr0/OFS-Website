import type { Metadata } from "next";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqItems } from "@/content/elternAZ";

export const metadata: Metadata = { title: "Eltern A–Z" };

export default function ElternAZPage() {
  return (
    <>
      <div className="wrap page-intro">
        <h1 className="h1" style={{ fontSize: "clamp(30px, 4vw, 46px)" }}>
          Eltern A–Z
        </h1>
        <p className="body-l">Die wichtigsten Fragen rund um Anmeldung, Betreuung und Kontakt.</p>
      </div>

      <section className="wrap section" style={{ paddingTop: 24 }}>
        <FaqAccordion items={faqItems} />
      </section>
    </>
  );
}
