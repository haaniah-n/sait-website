import { ArrowUpRight, BookOpen, Hammer, Users } from "lucide-react";
import { MotionReveal } from "./HomeReveal";
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
    <section id="community" className="home-community scroll-mt-20 border-b border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="community-layout">
          <div className="community-intro">
            <MotionReveal>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                01 / SAIT / The community
              </p>
              <div className="mt-5 h-px w-16 bg-accent" />
              <h2 className="text-section mt-12 max-w-3xl text-foreground">
                Built by students. <span className="text-accent">Shaped by community.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                A space to exchange ideas, develop skills, create meaningful work,
                and connect with the wider IT community.
              </p>
              <div className="mt-8">
                <ButtonLink href="/explore" variant="secondary">
                  Explore the community
                  <ArrowUpRight size={16} aria-hidden="true" />
                </ButtonLink>
              </div>
            </MotionReveal>
          </div>

          {/* Learn / Build / Connect */}
          <div data-choreography="community" className="community-sequence mt-20 grid">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.number} className="community-sequence-item h-full">
                  <article className="community-step group h-full">
                    <div className="community-step-meta flex items-start justify-between">
                      <span className="font-mono text-xs text-muted">{item.number}</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] bg-accent-soft text-accent transition-transform duration-[var(--duration-base)] group-hover:scale-105">
                        <Icon size={17} aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-12 text-card font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <MotionReveal style={{ animationDelay: "500ms" }}>
          <div className="mt-16 grid grid-cols-2 divide-x divide-y divide-line border-y border-line sm:grid-cols-4 sm:divide-y-0 md:mt-6">
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