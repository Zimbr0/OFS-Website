// Endloses Laufband, z. B. für Partner/Unterstützer. Die Liste wird einmal
// verdoppelt, damit der Loop nahtlos wirkt (die Animation verschiebt genau
// um die halbe Breite, siehe .marquee-track in globals.css).
export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((item, index) => (
          <span className="marquee-item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
