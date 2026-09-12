import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "nav" | "accent";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-signal text-on-accent hover:bg-signal-hover",
  accent: "bg-signal text-on-accent hover:bg-signal-hover",
  secondary: "bg-transparent text-foreground border border-[var(--control-line)] hover:border-[var(--control-line)] hover:bg-surface-2",
  ghost: "bg-transparent text-foreground hover:bg-surface-2",
  nav: "bg-transparent text-nav-fg hover:bg-surface-2",
};

const sizes: Record<Size, string> = {
  sm: "h-11 min-h-11 px-3.5 text-sm",
  md: "h-11 min-h-11 px-4 text-sm",
  lg: "h-12 min-h-12 px-5 text-base",
};

export const buttonClassName = (
  variant: Variant = "primary",
  size: Size = "md",
  className?: string,
) =>
  cn(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-medium",
    "transition-[transform,background-color,border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-out)]",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function Button({ className, variant = "primary", size = "md", children, ...props }: ButtonProps) {
  return (
    <button className={buttonClassName(variant, size, className)} {...props}>
      {children}
    </button>
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
};

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={buttonClassName(variant, size, className)} {...props}>
      {children}
    </Link>
  );
}
