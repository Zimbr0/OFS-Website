// Kleiner, an das Logo angelehnter Sprössling, der per CSS aus einem Punkt
// wächst (Stängel per stroke-dasharray gezeichnet, Blatt entrollt sich danach).
// Rein dekorativ – daher aria-hidden.

export function SproutGrowth({ className }: { className?: string }) {
  return (
    <span className={`sprout-grow${className ? ` ${className}` : ""}`} aria-hidden="true">
      <svg viewBox="0 0 32 44" fill="none">
        <path className="sprout-stem" d="M16 44 C16 32 11 27 14 16 C16 9 19 7 17 2" pathLength={100} />
        <path className="sprout-leaf" d="M14.5 21 C6 19 2.5 11 7.5 4 C13 7 16 14 14.5 21 Z" />
      </svg>
    </span>
  );
}
