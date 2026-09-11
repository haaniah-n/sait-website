import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "nav" | "accent";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-surface-2 text-foreground border border-line-strong hover:border-accent/50 hover:bg-surface shadow-[var(--shadow-md)]",
  accent: "bg-accent text-on-accent hover:bg-accent-hover shadow-[var(--shadow-sm)]",
  secondary: "bg-surface text-foreground border border-line hover:border-line-strong hover:bg-surface-2",
  ghost: "bg-transparent text-foreground hover:bg-surface-2",
  nav: "bg-white/8 text-nav-fg hover:bg-white/14",
};

const sizes: Record<Size, string> = {
  sm: "h-10 min-h-10 px-3.5 text-sm",
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
    "hover-scale disabled:pointer-events-none disabled:opacity-50",
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
