import type { ReactNode } from "react";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export function SectionIntro({ eyebrow, title, children }: SectionIntroProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 640 }}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h2">{title}</h2>
      {children ? <p className="body-l">{children}</p> : null}
    </div>
  );
}
