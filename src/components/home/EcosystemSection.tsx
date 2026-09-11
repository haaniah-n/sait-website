import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CalendarDays,
  FolderKanban,
  GraduationCap,
  Users,
} from "lucide-react";
import { MotionReveal } from "./HomeReveal";

const areas = [
  {
    number: "01",
    title: "People",
    description: "Meet the students and teams behind SAIT.",
    href: "/people",
    icon: Users,
  },
  {
    number: "02",
    title: "Events",
    description: "Discover what's happening across the community.",
    href: "/events",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Projects",
    description: "See ideas turned into working experiences.",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    number: "04",
    title: "Achievements",
    description: "Explore wins, milestones, and student impact.",
    href: "/achievements",
    icon: Award,
  },
  {
    number: "05",
    title: "Careers",
    description: "Find opportunities and prepare for what's next.",
    href: "/careers",
    icon: BriefcaseBusiness,
  },
  {
    number: "06",
    title: "Alumni",
    description: "Follow the journeys of the community beyond CUSAT.",
    href: "/alumni",
    icon: GraduationCap,
  },
];

export function EcosystemSection() {
  return (
    <section className="home-ecosystem border-b border-line bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <MotionReveal>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Explore / SAIT ecosystem
              </p>

              <div className="mt-5 h-px w-16 bg-accent" />

              <h2 className="text-section mt-8 max-w-md text-foreground">
                Everything happening around the{" "}
                <span className="text-accent">community.</span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-muted">
                Explore the people, events, projects, achievements, and
                opportunities that make up the SAIT experience.
              </p>
            </div>
          </MotionReveal>

          <div className="destination-network grid gap-3 sm:grid-cols-2">
            {areas.map((area, index) => {
              const Icon = area.icon;

              return (
                <MotionReveal
                  key={area.number}
                  style={{ animationDelay: `${100 + index * 70}ms` }}
                >
                  <Link
                    href={area.href}
                    className="destination-node group block h-full rounded-[var(--radius-xl)] border border-line bg-surface p-6 transition-[transform,border-color,box-shadow,background-color] duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-1 hover:border-accent/30 hover:bg-surface-2 hover:shadow-[var(--shadow-lift)] sm:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs text-muted">
                        {area.number}
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-accent-soft text-accent transition-transform duration-[var(--duration-base)] group-hover:scale-105">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                    </div>

                    <div className="mt-12 flex items-end justify-between gap-4">
                      <div>
                        <h3 className="text-card font-semibold text-foreground">
                          {area.title}
                        </h3>

                        <p className="mt-2 max-w-xs text-sm leading-6 text-muted">
                          {area.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="mb-1 shrink-0 text-muted transition-[transform,color] duration-[var(--duration-base)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}