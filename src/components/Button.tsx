import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "sm";
  external?: boolean;
  style?: CSSProperties;
};

export function Button({
  href,
  children,
  variant = "secondary",
  size = "default",
  external = false,
  style,
}: ButtonProps) {
  const className = [
    "btn",
    variant === "primary" ? "btn-primary" : "",
    size === "sm" ? "btn-sm" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      <span className="btn-icon">
        <ArrowRightIcon size={size === "sm" ? 14 : 16} />
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} className={className} style={style} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className} style={style}>
      {content}
    </Link>
  );
}
