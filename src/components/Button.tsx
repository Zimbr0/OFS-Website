import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "sm";
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "secondary",
  size = "default",
  external = false,
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
      <ArrowRightIcon size={size === "sm" ? 15 : 17} />
    </>
  );

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
