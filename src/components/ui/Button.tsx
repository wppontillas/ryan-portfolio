import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-fg hover:bg-accent/90",
  secondary:
    "border border-border text-fg hover:border-accent/60 hover:text-accent",
  ghost: "text-fg-secondary hover:text-fg",
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

interface LinkButtonProps extends CommonProps {
  href: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: LinkButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

interface ButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> {}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
