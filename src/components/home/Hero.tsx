import { ArrowRight, Sparkles } from "lucide-react";
import { MotionReveal } from "@/components/effects/motion-reveal";
import { ButtonLink } from "@/components/ui/button";
import { ITEcosystem } from "./ITEcosystem";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-background">
      {/* Subtle ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-accent/6 blur-3xl"
      />

      {/* Fine grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:px-10 lg:py-20">
        {/* Copy */}
        <div className="max-w-2xl">
          <MotionReveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 shadow-[var(--shadow-sm)]">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span className="text-label">Students Association of IT</span>
            </div>
          </MotionReveal>

          <MotionReveal
            style={{ animationDelay: "80ms" }}
            className="motion-rise"
          >
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">
              SAIT / CUSAT
            </p>
          </MotionReveal>

          <MotionReveal
            style={{ animationDelay: "140ms" }}
            className="motion-rise"
          >
            <h1 className="text-display max-w-[11ch] text-foreground">
              BUILD.
              <br />
              LEARN.
              <br />
              <span className="text-accent">LEAD.</span>
            </h1>
          </MotionReveal>

          <MotionReveal
            style={{ animationDelay: "220ms" }}
            className="motion-rise"
          >
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              A community of IT students building projects, creating
              experiences, and shaping what&apos;s next.
            </p>
          </MotionReveal>

          <MotionReveal
            style={{ animationDelay: "300ms" }}
            className="motion-rise"
          >
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/explore" variant="accent" size="lg">
                Explore SAIT
                <ArrowRight size={17} aria-hidden="true" />
              </ButtonLink>

              <ButtonLink href="/events" variant="secondary" size="lg">
                See what&apos;s happening
              </ButtonLink>
            </div>
          </MotionReveal>

          <MotionReveal
            style={{ animationDelay: "380ms" }}
            className="motion-rise"
          >
            <div className="mt-10 flex items-center gap-3 text-sm text-muted">
              <Sparkles
                size={15}
                className="text-accent"
                aria-hidden="true"
              />
              <span>
                People. Projects. Events. Achievements. Careers. Alumni.
              </span>
            </div>
          </MotionReveal>
        </div>

        {/* Ecosystem */}
        <MotionReveal
          rise={false}
          style={{ animationDelay: "180ms" }}
          className="motion-fade"
        >
          <ITEcosystem />
        </MotionReveal>
      </div>
    </section>
  );
}