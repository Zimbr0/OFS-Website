// Einfache, konsistente Strich-Icons (keine externe Icon-Bibliothek nötig).
// Jedes Icon ist 24x24, Strichstärke 1.7, abgerundete Enden.

type IconProps = { size?: number };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowRightIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 20, className }: IconProps & { className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function ChevronLeftIcon({ size = 16, className }: IconProps & { className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}

export function ChevronRightIcon({ size = 16, className }: IconProps & { className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function PlusIcon({ size = 14, className }: IconProps & { className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function StarIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L12 16.9 6.4 20l1.4-6.2-4.8-4.3 6.4-.6z" />
    </svg>
  );
}

export function FlaskIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M9 3v3M9 3a4 4 0 000 8M9 11l-3.5 8h7L9 11z" />
    </svg>
  );
}

export function AccessibleIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20c0-3.6 3.1-6.4 7-6.4s7 2.8 7 6.4" />
    </svg>
  );
}

export function ChatIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M4 10.5c0-3.6 3.6-6.5 8-6.5s8 2.9 8 6.5c0 3.6-3.6 6.5-8 6.5-1 0-2-.15-2.9-.42L5 19l1.3-3.6C4.8 14 4 12.3 4 10.5z" />
    </svg>
  );
}

export function HeartIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M12 20s-7-4.35-7-9.5C5 7.5 7.2 5.5 9.7 5.5c1 0 2 .4 2.3 1.2.3-.8 1.3-1.2 2.3-1.2 2.5 0 4.7 2 4.7 5 0 5.15-7 9.5-7 9.5z" />
    </svg>
  );
}

export function FlagIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M5 20V10l7-5 7 5v10M9 20v-6h6v6" />
    </svg>
  );
}

export function UsersIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M2.5 20c.5-3.3 2.9-5.5 5.5-5.5s5 2.2 5.5 5.5M11 20c.5-3.3 2.9-5.5 5.5-5.5s5 2.2 5.5 5.5" />
    </svg>
  );
}

export function BulbIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.5.4.8.9.8 1.5v.1h5.4v-.1c0-.6.3-1.1.8-1.5A6 6 0 0012 3z" />
    </svg>
  );
}

export function BallotIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function ShieldIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
    </svg>
  );
}

export function LayersIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M4 18h16M4 13h16M4 8h10" />
    </svg>
  );
}

export function PawIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <ellipse cx="12" cy="12" rx="9" ry="4" />
    </svg>
  );
}

export function MonitorIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

export function AtomIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <circle cx="12" cy="12" r="1.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function BookIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M4 5.5c3-1.4 6-1.4 8 0v13c-2-1.4-5-1.4-8 0zM20 5.5c-3-1.4-6-1.4-8 0v13c2-1.4 5-1.4 8 0z" />
    </svg>
  );
}

export function ClockIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  );
}

export function PhoneIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M6 3h3l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5v3a2 2 0 01-2.2 2A17 17 0 014 5.2 2 2 0 016 3z" />
    </svg>
  );
}

export function MailIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function CalendarIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M3.5 10h17" />
    </svg>
  );
}

export function MenuIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function PinIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M12 21s-6.5-5.8-6.5-11A6.5 6.5 0 0112 3a6.5 6.5 0 016.5 7c0 5.2-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

// Erlaubt es, Inhalts-Dateien (content/*.ts) Icons per Name zuzuordnen,
// ohne dass dort React-Komponenten importiert werden müssen.
export const iconMap = {
  star: StarIcon,
  flask: FlaskIcon,
  accessible: AccessibleIcon,
  chat: ChatIcon,
  heart: HeartIcon,
  flag: FlagIcon,
  users: UsersIcon,
  bulb: BulbIcon,
  ballot: BallotIcon,
  shield: ShieldIcon,
  layers: LayersIcon,
  paw: PawIcon,
  monitor: MonitorIcon,
  atom: AtomIcon,
  book: BookIcon,
} as const;

export type IconKey = keyof typeof iconMap;
