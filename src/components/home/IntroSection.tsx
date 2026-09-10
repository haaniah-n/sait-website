import { ArrowUpRight, BookOpen, Hammer, Users } from "lucide-react";
import { MotionReveal } from "@/components/effects/motion-reveal";
import { ButtonLink } from "@/components/ui/button";

const highlights = [
  {
    number: "01",
    icon: BookOpen,
    title: "Learn",
    description:
      "Workshops, technical sessions, and opportunities to grow beyond the classroom.",
  },
  {
    number: "02",
    icon: Hammer,
    title: "Build",
    description:
      "Projects, competitions, and ideas turned into real experiences.",
  },
  {
    number: "03",
    icon: Users,
    title: "Connect",
    description:
      "Meet students, teams, alumni, and people who share your interests.",
  },
];

const stats = [
  { value: "10+", label: "Years of community" },
  { value: "20+", label: "Events & activities" },
  { value: "100+", label: "Students involved" },
  { value: "∞", label: "Ideas to explore" },
];

export function IntroSection() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <MotionReveal>
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                SAIT / The community
              </p>

              <div className="mt-5 h-px w-16 bg-accent" />
            </div>
          </MotionReveal>

          <div>
            <MotionReveal style={{ animationDelay: "80ms" }}>
              <h2 className="text-section max-w-3xl text-foreground">
                A place to{" "}
                <span className="text-accent">
                  learn, build, and get involved.
                </span>
              </h2>
            </MotionReveal>

            <MotionReveal style={{ animationDelay: "160ms" }}>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                Find opportunities to learn new skills, work on ideas, take
                part in experiences, and connect with the wider IT community.
              </p>
            </MotionReveal>

            <MotionReveal style={{ animationDelay: "240ms" }}>
              <div className="mt-8">
                <ButtonLink href="/explore" variant="secondary">
                  Explore the community
                  <ArrowUpRight size={16} aria-hidden="true" />
                </ButtonLink>
              </div>
            </MotionReveal>
          </div>
        </div>

        {/* Learn / Build / Connect */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-line bg-line md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <MotionReveal
                key={item.number}
                style={{ animationDelay: `${300 + index * 80}ms` }}
                className="h-full"
              >
                <article className="group h-full bg-surface p-7 transition-colors duration-[var(--duration-base)] hover:bg-background sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-muted">
                      {item.number}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] bg-accent-soft text-accent transition-transform duration-[var(--duration-base)] group-hover:scale-105">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                  </div>

                  <h3 className="mt-12 text-card font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </article>
              </MotionReveal>
            );
          })}
        </div>

        {/* Stats */}
        <MotionReveal style={{ animationDelay: "500ms" }}>
          <div className="mt-16 grid grid-cols-2 divide-x divide-y divide-line border-y border-line sm:grid-cols-4 sm:divide-y-0">
            {stats.map((stat) => (
              <div key={stat.label} className="px-5 py-7 first:pl-0 sm:px-7">
                <p className="font-display text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}