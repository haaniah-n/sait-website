import Link from "next/link";
import { ArrowUpRight, Award, CircleDot } from "lucide-react";
import { MotionReveal } from "./HomeReveal";
import { spotlightAchievements } from "@/data/achievements";

const achievements = spotlightAchievements.map((achievement, index) => ({
  ...achievement,
  number: String(index + 1).padStart(2, "0"),
  category: achievement.categoryLabel,
}));

export function AchievementsSection() {
  return (
    <section className="home-achievements border-b border-line bg-surface-ink text-nav-fg">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <MotionReveal>
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                05 / Achievements / Hall of Fame
              </p>

              <div className="mt-5 h-px w-16 bg-accent" />
            </div>
          </MotionReveal>

          <MotionReveal style={{ animationDelay: "100ms" }}>
            <div>
              <h2 className="text-section max-w-3xl">
                Built. Competed. <span className="text-accent">Achieved.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-nav-muted">
                Celebrating the moments when curiosity, technical skills, and
                persistence turn into something worth remembering.
              </p>
            </div>
          </MotionReveal>
        </div>

        {/* Achievement list */}
        <div className="mt-14 border-t border-line">
          {achievements.map((achievement, index) => (
            <MotionReveal
              key={achievement.number}
              style={{ animationDelay: `${180 + index * 100}ms` }}
            >
              <Link
                href="/achievements"
                className="achievement-row group grid gap-6 border-b border-line py-8 transition-colors duration-[var(--duration-base)] hover:bg-surface-2 sm:grid-cols-[72px_110px_1fr_auto] sm:items-center sm:gap-8 sm:py-9"
              >
                {/* Number */}
                <span className="font-mono text-xs text-nav-muted">
                  {achievement.number}
                </span>

                {/* Year */}
                <span className="font-display text-2xl font-bold tracking-[-0.04em] text-nav-fg">
                  {achievement.year}
                </span>

                {/* Main content */}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.12em] text-nav-muted">
                      <Award size={12} aria-hidden="true" />
                      {achievement.category}
                    </span>

                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
                      {achievement.result}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-nav-fg sm:text-lg">
                    {achievement.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-nav-muted">
                    {achievement.description}
                  </p>
                </div>

                {/* Arrow */}
                <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-line text-nav-muted transition-[transform,border-color,color] duration-[var(--duration-base)] group-hover:-translate-y-1 group-hover:border-accent/40 group-hover:text-accent sm:flex">
                  <ArrowUpRight size={17} aria-hidden="true" />
                </span>
              </Link>
            </MotionReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <MotionReveal style={{ animationDelay: "520ms" }}>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/achievements"
              data-pointer="magnetic"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-nav-fg transition-colors hover:text-accent"
            >
              View Hall of Fame
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
