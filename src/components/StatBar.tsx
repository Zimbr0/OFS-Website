// Ein Balken, der beim Einblenden von 0 auf seinen Wert wächst
// (siehe .stat-bar-fill / @keyframes os-bar-grow-x in globals.css).
export function StatBar({
  label,
  value,
  percent,
  delay = 0,
  dark = false,
  fillColor,
}: {
  label: string;
  value: string;
  percent: number;
  delay?: number;
  dark?: boolean;
  fillColor?: string;
}) {
  return (
    <div className="stat-bar-row">
      <span
        className="stat-bar-label"
        style={{ color: dark ? "#fff" : "var(--c-ink)" }}
      >
        <span>{label}</span>
        <span>{value}</span>
      </span>
      <div
        className="stat-bar-track"
        style={dark ? { background: "rgba(255,255,255,0.18)" } : undefined}
      >
        <div
          className="stat-bar-fill"
          style={{
            width: `${percent}%`,
            animationDelay: `${delay}s`,
            ...(fillColor ? { background: fillColor } : {}),
          }}
        />
      </div>
    </div>
  );
}
