import type { ReactNode } from "react";

type SectionIntroProps = {
  title: string;
  children?: ReactNode;
};

export function SectionIntro({ title, children }: SectionIntroProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 640 }}>
      <h2 className="h2">{title}</h2>
      {children ? <p className="body-l">{children}</p> : null}
    </div>
  );
}
