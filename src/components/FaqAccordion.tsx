"use client";

import { useState } from "react";
import { PlusIcon } from "./icons";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items, openFirst = false }: { items: FaqItem[]; openFirst?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(openFirst ? 0 : null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className="faq-item" key={item.question}>
            <button
              className="faq-q"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="h3" style={{ fontSize: 18 }}>
                {item.question}
              </span>
              <span className={`faq-toggle${isOpen ? " open" : ""}`}>
                <PlusIcon />
              </span>
            </button>
            {isOpen ? <p className="body-m faq-a">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
