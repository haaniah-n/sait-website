import Link from "next/link";
import { ArrowUpRight, Code2, Cpu, Globe2 } from "lucide-react";
import { MotionReveal } from "@/components/effects/motion-reveal";
import { featuredProjects } from "@/data/projects";

const featuredProject = {
  ...featuredProjects[0],
  description: featuredProjects[0].summary,
  icon: Cpu,
};

const projects = featuredProjects.slice(1).map((project) => ({
  ...project,
  description: project.summary,
  icon: project.id === "campusflow" ? Globe2 : Code2,
}));

export function ProjectsSection() {
  return (
    <section className="border-b border-line bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <MotionReveal>
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Projects / Ideas in action
              </p>

              <div className="mt-5 h-px w-16 bg-accent" />
            </div>
          </MotionReveal>

          <MotionReveal style={{ animationDelay: "100ms" }}>
            <div>
              <h2 className="text-section max-w-3xl text-foreground">
                From ideas to{" "}
                <span className="text-accent">things that work.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                Explore a glimpse of the ideas, experiments, and digital
                experiences students can bring to life.
              </p>
            </div>
          </MotionReveal>
        </div>

        {/* Featured project */}
        <MotionReveal style={{ animationDelay: "180ms" }}>
          <Link
            href="/projects"
            className="group relative mt-14 block overflow-hidden rounded-[var(--radius-xl)] border border-line bg-surface-ink text-nav-fg shadow-[var(--shadow-md)] transition-[transform,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl transition-transform duration-700 group-hover:scale-125"
            />

            <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-accent-soft text-accent">
                    <featuredProject.icon
                      size={19}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-nav-muted">
                    Featured project
                  </span>
                </div>

                <h3 className="mt-8 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-accent">
                  {featuredProject.category}
                </p>

                <p className="mt-5 max-w-xl text-sm leading-7 text-nav-muted sm:text-base">
                  {featuredProject.description}
                </p>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-nav-fg">
                  Explore project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-[var(--duration-base)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>

              {/* Visual placeholder */}
              <div className="flex min-h-52 items-center justify-center rounded-[var(--radius-lg)] border border-white/10 bg-white/4 p-8 lg:min-h-64 lg:w-72">
                <div className="text-center">
                  <p className="font-display text-6xl font-bold tracking-[-0.06em] text-nav-fg">
                    N
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-nav-muted">
                    AI / Learning
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </MotionReveal>

        {/* Smaller projects */}
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <MotionReveal
                key={project.title}
                style={{ animationDelay: `${280 + index * 80}ms` }}
              >
                <Link
                  href="/projects"
                  className="group block rounded-[var(--radius-lg)] border border-line bg-surface p-6 transition-[transform,border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-1 hover:border-accent/30 hover:shadow-[var(--shadow-sm)] sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-accent-soft text-accent">
                      <Icon size={18} aria-hidden="true" />
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-muted transition-[transform,color] duration-[var(--duration-base)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-10 text-card font-semibold text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                    {project.category}
                  </p>

                  <p className="mt-4 max-w-md text-sm leading-6 text-muted">
                    {project.description}
                  </p>
                </Link>
              </MotionReveal>
            );
          })}
        </div>

        {/* View all */}
        <MotionReveal style={{ animationDelay: "460ms" }}>
          <div className="mt-10 flex justify-end">
            <Link
              href="/projects"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Explore all projects
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
