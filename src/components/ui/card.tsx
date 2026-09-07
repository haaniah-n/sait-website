import { cn } from "@/lib/cn";
import type { HTMLAttributes, ImgHTMLAttributes } from "react";

type CardVariant = "default" | "interactive" | "featured" | "stat" | "media";

const variants: Record<CardVariant, string> = {
  default: "p-5 shadow-[var(--shadow-sm)]",
  interactive:
    "p-5 shadow-[var(--shadow-sm)] hover-lift cursor-pointer",
  featured:
    "p-5 shadow-[var(--shadow-md)] [box-shadow:var(--shadow-md),var(--glow-accent)]",
  stat: "p-4 shadow-[var(--shadow-sm)]",
  media: "overflow-hidden p-0 shadow-[var(--shadow-sm)] hover-lift",
};

export function Card({
  className,
  variant = "default",
  ...props
}: HTMLAttributes<HTMLDivElement> & { variant?: CardVariant }) {
  return (
    <div
      className={cn(
        "group rounded-[var(--radius-lg)] border border-line bg-surface",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5", className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-card text-foreground", className)} {...props} />;
}

export function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("mt-2 text-support", className)} {...props} />;
}

export function CardMedia({ className, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <div className="overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={alt ?? ""}
        className={cn(
          "aspect-[16/10] w-full object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out)] group-hover:scale-[1.04] motion-reduce:transform-none",
          className,
        )}
        {...props}
      />
    </div>
  );
}
