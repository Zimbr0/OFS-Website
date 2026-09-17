import type { CSSProperties, ReactNode } from "react";

export function Badge({
  children,
  live = false,
  style,
}: {
  children: ReactNode;
  live?: boolean;
  style?: CSSProperties;
}) {
  return (
    <span className="badge" style={style}>
      {live ? <span className="badge-dot" /> : null}
      {children}
    </span>
  );
}
