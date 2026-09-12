import Link from "next/link";
import { ArrowRight, CircleDot } from "lucide-react";
import { MotionReveal } from "./HomeReveal";

export function FinalCTA() {
  return (
    <section className="home-final border-b border-line bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <MotionReveal>
          <div data-choreography="converge" className="final-panel relative overflow-hidden rounded-[var(--radius-xl)] border border-line bg-surface-ink px-6 py-14 text-center shadow-[var(--shadow-md)] sm:px-10 sm:py-20">
            <div className="final-connections" aria-hidden="true"><span /><span /><span /></div>
            <div className="relative">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                <CircleDot size={17} aria-hidden="true" />
              </div>

              <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Your next chapter
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold tracking-[-0.04em] text-nav-fg sm:text-4xl lg:text-5xl">
                There&apos;s more to explore.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-nav-muted sm:text-base">
                Discover the people, projects, events, and opportunities that
                make the SAIT community what it is.
              </p>

              <Link
                href="/explore"
                data-pointer="magnetic"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-[var(--radius-md)] bg-accent px-5 text-sm font-medium text-on-accent transition-[transform,background-color] duration-[var(--duration-fast)] hover:-translate-y-0.5 hover:bg-accent-hover"
              >
                Explore SAIT
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}