import type { ReactNode } from "react";

type TileProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

export function Tile({ icon, title, children }: TileProps) {
  return (
    <div className="tile">
      <div className="tile-icon">{icon}</div>
      <div className="h3" style={{ fontSize: 18 }}>
        {title}
      </div>
      <p className="body-m">{children}</p>
    </div>
  );
}
