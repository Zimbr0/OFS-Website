"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items, openFirst = false }: { items: FaqItem[]; openFirst?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(openFirst ? 0 : null);

  return (
    <div>
      <hr className="divider" />
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className="faq-row" key={item.question}>
            <button
              className="faq-q"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="h3" style={{ fontSize: 19 }}>
                {item.question}
              </span>
              <ChevronDownIcon className={`faq-icon${isOpen ? " open" : ""}`} />
            </button>
            {isOpen ? <p className="body-m faq-a">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
