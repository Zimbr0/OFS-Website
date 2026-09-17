"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

// Blendet seinen Inhalt ein (Fade + leichter Versatz nach oben), sobald er
// beim Scrollen in den sichtbaren Bereich kommt. `delay` staffelt mehrere
// Reveal-Elemente in einem Grid (in Sekunden, z. B. 0.1, 0.2, ...).
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
