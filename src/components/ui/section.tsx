import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";
import { Container } from "@/components/ui/container";

export function Section({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement> & { children: ReactNode }) {
  return (
    <section className={cn("py-12 sm:py-16 lg:py-20", className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

export function PageHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <header className={cn("max-w-3xl", className)}>
      {eyebrow ? <p className="text-label mb-3">{eyebrow}</p> : null}
      <h1 className="text-page text-foreground">{title}</h1>
      {description ? <p className="text-support mt-4 max-w-2xl text-base sm:text-lg">{description}</p> : null}
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? <p className="text-label mb-2">{eyebrow}</p> : null}
      <h2 className="text-section text-foreground">{title}</h2>
      {description ? <p className="text-support mt-3">{description}</p> : null}
    </div>
  );
}
