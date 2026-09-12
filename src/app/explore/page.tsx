import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Medal,
  Sparkles,
  Users,
} from "lucide-react";

import { MotionReveal } from "@/components/effects/motion-reveal";
import { Container } from "@/components/ui/container";
import { siteRoutes } from "@/lib/routes";
import { featuredProjects as projectPreviews } from "@/data/projects";
import { spotlightAlumni } from "@/data/alumni";

export const metadata: Metadata = {
  title: "Explore",
  description:
    "Explore projects, achievements, alumni, and opportunities across the SAIT community.",
};

const paths = [
  {
    number: "01",
    icon: Code2,
    eyebrow: "BUILD",
    title: "Projects",
    description:
      "See what students are creating — from experiments and prototypes to ambitious technical projects.",
    href: siteRoutes.projects,
    action: "Explore projects",
  },
  {
    number: "02",
    icon: Medal,
    eyebrow: "CELEBRATE",
    title: "Achievements",
    description:
      "Discover the wins, competitions, hackathons, publications, and milestones that shape SAIT.",
    href: siteRoutes.achievements,
    action: "View achievements",
  },
  {
    number: "03",
    icon: GraduationCap,
    eyebrow: "CONNECT",
    title: "Alumni",
    description:
      "Meet people who started here, see where they went, and discover the paths beyond CUSAT.",
    href: siteRoutes.alumni,
    action: "Meet alumni",
  },
];

const featuredProjects = projectPreviews.map((project) => ({
  type: project.category,
  title: project.title,
  description: project.summary,
  href: siteRoutes.projects,
}));

const achievements = [
  {
    value: "01",
    title: "Technical competitions",
    description:
      "Students competing, building, and shipping under pressure.",
  },
  {
    value: "02",
    title: "Hackathons",
    description:
      "Ideas turning into working prototypes in hours, not months.",
  },
  {
    value: "03",
    title: "Academic excellence",
    description:
      "Projects, publications, and accomplishments beyond the classroom.",
  },
];

const alumniStories = spotlightAlumni.map((person) => ({
  initials: person.initials,
  name: person.name,
  role: person.currentRole,
  detail: person.preview,
}));

export default function ExplorePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-background">

        <Container className="relative py-20 sm:py-24 lg:py-32">
          <MotionReveal>
            <div className="max-w-4xl">
              <p className="text-label text-accent">Explore SAIT</p>

              <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-8xl">
                See what
                <br />
                SAIT is building.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Projects, achievements, people, and opportunities — discover
                the different ways students learn, create, contribute, and
                grow together.
              </p>
            </div>
          </MotionReveal>
        </Container>
      </section>

      {/* Find your path */}
      <section className="border-b border-line bg-surface">
        <Container className="py-20 sm:py-24 lg:py-28">
          <MotionReveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-label text-accent">Find your path</p>

                <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">
                  Start with what interests you.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-muted">
                There&apos;s no single way to experience SAIT. Follow what
                you&apos;re curious about and go deeper from there.
              </p>
            </div>
          </MotionReveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {paths.map((path, index) => {
              const Icon = path.icon;

              return (
                <MotionReveal key={path.number} delay={index * 0.06}>
                  <Link
                    href={path.href}
                    className="group flex h-full flex-col rounded-[var(--radius-xl)] border border-line bg-background p-6 transition-[transform,border-color,box-shadow] duration-[var(--duration-fast)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow-md)] sm:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <div className="grid h-11 w-11 place-items-center rounded-[var(--radius-md)] bg-accent-soft text-accent">
                        <Icon size={19} aria-hidden="true" />
                      </div>

                      <span className="font-mono text-xs text-muted">
                        {path.number}
                      </span>
                    </div>

                    <p className="mt-10 text-label text-accent">
                      {path.eyebrow}
                    </p>

                    <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-foreground">
                      {path.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                      {path.description}
                    </p>

                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                      {path.action}
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section className="border-b border-line bg-background">
        <Container className="py-20 sm:py-24 lg:py-28">
          <MotionReveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-label text-accent">
                  What students are building
                </p>

                <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">
                  Ideas become projects.
                </h2>
              </div>

              <Link
                href={siteRoutes.projects}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
              >
                View all projects
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </MotionReveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <MotionReveal key={project.title} delay={index * 0.06}>
                <Link
                  href={project.href}
                  className="group block h-full rounded-[var(--radius-xl)] border border-line bg-surface p-6 transition-[transform,border-color] duration-[var(--duration-fast)] hover:-translate-y-1 hover:border-line-strong sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-label text-accent">
                      {project.type}
                    </span>

                    <ArrowRight
                      size={17}
                      aria-hidden="true"
                      className="text-muted transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1 group-hover:text-foreground"
                    />
                  </div>

                  <h3 className="mt-12 font-display text-2xl font-bold tracking-[-0.03em] text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {project.description}
                  </p>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Achievements */}
      <section className="border-b border-line bg-surface-ink text-nav-fg">
        <Container className="py-20 sm:py-24 lg:py-28">
          <MotionReveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-label text-accent">Hall of Fame</p>

                <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                  Celebrate what&apos;s been achieved.
                </h2>
              </div>

              <Link
                href={siteRoutes.achievements}
                className="inline-flex items-center gap-2 text-sm font-medium text-nav-fg hover:text-accent"
              >
                Explore achievements
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </MotionReveal>

          <div className="mt-12 grid gap-0 border-t border-line md:grid-cols-3 md:divide-x md:divide-line">
            {achievements.map((achievement, index) => (
              <MotionReveal key={achievement.value} delay={index * 0.06}>
                <div className="border-b border-line py-7 md:border-b-0 md:px-7 md:first:pl-0 md:last:pr-0">
                  <span className="font-mono text-xs text-accent">
                    {achievement.value}
                  </span>

                  <h3 className="mt-7 font-display text-xl font-semibold tracking-[-0.025em]">
                    {achievement.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-nav-muted">
                    {achievement.description}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Alumni */}
      <section className="border-b border-line bg-surface">
        <Container className="py-20 sm:py-24 lg:py-28">
          <MotionReveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-label text-accent">Beyond CUSAT</p>

                <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">
                  The community continues.
                </h2>
                <p className="mt-3 text-xs leading-5 text-muted">Illustrative stories · all alumni profiles are fictional.</p>
              </div>

              <Link
                href={siteRoutes.alumni}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
              >
                Meet the alumni
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </MotionReveal>

          {/* Grid stretches every card to the tallest card in the row */}
          <div className="mt-10 grid items-stretch gap-4 md:grid-cols-3">
            {alumniStories.map((alumni, index) => (
              <MotionReveal
                key={alumni.initials}
                delay={index * 0.06}
                className="h-full"
              >
                <Link
                  href={siteRoutes.alumni}
                  className="group flex h-full w-full items-center gap-4 rounded-[var(--radius-xl)] border border-line bg-background p-5 transition-[transform,border-color] duration-[var(--duration-fast)] hover:-translate-y-1 hover:border-line-strong"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-surface-2 font-mono text-xs font-semibold text-foreground">
                    {alumni.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-foreground">
                      {alumni.name}
                    </h3>

                    <p className="mt-0.5 text-sm text-accent">
                      {alumni.role}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-muted">
                      {alumni.detail}
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-muted transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1 group-hover:text-foreground"
                  />
                </Link>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-b border-line bg-background">
        <Container className="py-20 sm:py-24 lg:py-28">
          <MotionReveal>
            <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-line bg-surface-ink px-6 py-14 text-center shadow-[var(--shadow-md)] sm:px-10 sm:py-20">

              <div className="relative">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Sparkles size={17} aria-hidden="true" />
                </div>

                <p className="mt-6 text-label text-accent">
                  Your next step
                </p>

                <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold tracking-[-0.04em] text-nav-fg sm:text-4xl lg:text-5xl">
                  Find your place in SAIT.
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-nav-muted sm:text-base">
                  Build something. Join something. Meet people. Start
                  somewhere.
                </p>

                <Link
                  href={siteRoutes.contact}
                  className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-[var(--radius-md)] bg-signal px-5 text-sm font-medium text-on-accent transition-[transform,background-color] duration-[var(--duration-fast)] hover:-translate-y-0.5 hover:bg-signal-hover"
                >
                  Get involved
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </section>
    </main>
  );
}
