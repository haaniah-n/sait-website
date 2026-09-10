import type { Metadata } from "next";
import { ArrowDown, ArrowRight, ArrowUpRight, Lightbulb, Hammer, Users, Rocket } from "lucide-react";
import { MotionReveal } from "@/components/effects/motion-reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { StatusBadge } from "@/components/ui/status-badge";
import { featuredProjects, projects } from "@/data/projects";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore SAIT student project concepts, from AI study tools to campus experiments. Find an idea, build together, and share what you learn.",
};

const directory = projects.filter((project) => !project.featured);
const categories = Array.from(new Set(projects.flatMap((project) => project.tags)));
const layout = "max-w-7xl sm:px-8 lg:px-10";
const sectionSpace = "py-16 sm:py-20 lg:py-24";
const label = "font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent";
const journey = [
  { title: "Idea", icon: Lightbulb, description: "Notice a problem. Ask who it affects and what could be simpler." },
  { title: "Build", icon: Hammer, description: "Start small. Make one useful thing work before adding the next." },
  { title: "Collaborate", icon: Users, description: "Invite another perspective. Test, review, and learn together." },
  { title: "Demo / Ship", icon: Rocket, description: "Show what works. Share the lessons and let feedback shape the next version." },
];

export default function ProjectsPage() {
  return (
    <>
      <section aria-labelledby="projects-heading" className="relative overflow-hidden border-b border-line bg-background">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <Container className={`${layout} relative pb-8 pt-14 sm:pt-16 lg:pt-20`}>
          <MotionReveal>
            <p className={label}>Projects</p>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <h1 id="projects-heading" className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">Try an idea.<br /><span className="text-accent">Build what&apos;s next.</span></h1>
              <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">Small experiments. Shared ambition. Explore the tools and ideas students can build together — from a first prototype to something ready to ship.</p>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <nav aria-label="On this page" className="mt-10 flex flex-wrap gap-x-6 gap-y-1 border-t border-line pt-4">
              <a href="#featured" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent">Featured projects<ArrowDown size={14} aria-hidden="true" /></a>
              <a href="#directory" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent">Browse the directory<ArrowDown size={14} aria-hidden="true" /></a>
              <a href="#journey" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent">How projects grow<ArrowDown size={14} aria-hidden="true" /></a>
            </nav>
            <p className="mt-3 text-xs leading-5 text-muted">A mock showcase of what&apos;s possible. All projects, technologies, and statuses shown here are fictional.</p>
          </MotionReveal>
        </Container>
      </section>

      <section id="featured" aria-labelledby="featured-heading" className="scroll-mt-20 border-b border-line bg-surface">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <p className={label}>01 / In the spotlight</p>
            <h2 id="featured-heading" className="text-section mt-5 text-foreground">Three ideas. Plenty of possibility.</h2>
          </MotionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project, index) => {
              const primary = index === 0;
              return (
                <MotionReveal key={project.id} delay={index * 0.05} className={primary ? "md:col-span-2" : "h-full"}>
                  <article aria-labelledby={`project-${project.id}`} className={`relative flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border p-6 sm:p-8 ${primary ? "border-white/10 bg-surface-ink text-nav-fg shadow-[var(--shadow-md)] lg:p-12" : "border-line bg-background text-foreground"}`}>
                    {primary && <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />}
                    <div className="relative flex flex-wrap items-center justify-between gap-3">
                      <p className={`font-mono text-xs uppercase tracking-[0.12em] ${primary ? "text-nav-muted" : "text-muted"}`}>0{index + 1} / {project.category}</p>
                      <span className={primary ? "inline-flex rounded-full bg-surface" : "inline-flex"}><StatusBadge status={project.status} /></span>
                    </div>
                    <div className={`relative mt-8 flex-1 ${primary ? "grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16" : ""}`}>
                      <div>
                        <h3 id={`project-${project.id}`} className={`font-display font-bold tracking-[-0.04em] ${primary ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl"}`}>{project.title}</h3>
                        <p className={`mt-4 max-w-xl font-medium leading-7 ${primary ? "text-lg text-nav-fg sm:text-xl" : "text-base text-foreground"}`}>{project.problem}</p>
                        <p className={`mt-4 max-w-xl text-sm leading-7 ${primary ? "text-nav-muted" : "text-muted"}`}>{project.summary}</p>
                      </div>
                      {primary && (
                        <div className="rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-6 sm:p-7">
                          <p className="font-mono text-xs uppercase tracking-[0.14em] text-nav-muted">Inside the concept</p>
                          <ol className="mt-5 divide-y divide-white/10">
                            {project.highlights.map((highlight, step) => (
                              <li key={highlight} className="flex items-start gap-4 py-4">
                                <span className="pt-0.5 font-mono text-xs text-accent">0{step + 1}</span>
                                <span className="text-sm leading-6 text-nav-fg">{highlight}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                    <div className={`relative mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 border-t pt-5 ${primary ? "border-white/10" : "border-line"}`}>
                      <p className={`font-mono text-[10px] uppercase tracking-[0.14em] ${primary ? "text-nav-muted" : "text-muted"}`}>{project.status === "idea" ? "Proposed stack" : "Project stack"}</p>
                      <ul aria-label={`${project.title} technologies`} className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => <li key={technology}><span className={`inline-flex rounded-full border px-3 py-1 font-mono text-xs ${primary ? "border-white/15 bg-white/5 text-nav-fg" : "border-line bg-surface text-muted"}`}>{technology}</span></li>)}
                      </ul>
                    </div>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="directory" aria-labelledby="directory-heading" className="scroll-mt-20 border-b border-line bg-background">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <div className="grid gap-5 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
              <div><p className={label}>02 / The project directory</p><h2 id="directory-heading" className="text-section mt-5 text-foreground">More problems worth solving.</h2></div>
              <p className="max-w-xl text-sm leading-7 text-muted">A place for the smaller experiments, early questions, and useful campus tools. Every project starts somewhere.</p>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-2">
              <span className="mr-2 font-mono text-xs text-muted">Across the showcase</span>
              {categories.map((category) => <Badge key={category}>{category}</Badge>)}
            </div>
          </MotionReveal>
          <div className="mt-8 border-t border-line">
            {directory.map((project, index) => (
              <MotionReveal key={project.id} delay={index * 0.03}>
                <article aria-labelledby={`project-${project.id}`} className="grid gap-5 border-b border-line py-7 sm:py-8 md:grid-cols-[1fr_1.2fr] md:gap-10 lg:grid-cols-[0.9fr_1.2fr_0.7fr]">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent-hover">{project.category}</p>
                    <h3 id={`project-${project.id}`} className="mt-3 text-xl font-semibold tracking-[-0.03em] text-foreground">{project.title}</h3>
                    <div className="mt-3"><StatusBadge status={project.status} /></div>
                  </div>
                  <div><p className="text-sm font-medium leading-6 text-foreground">{project.problem}</p><p className="mt-2 text-sm leading-7 text-muted">{project.summary}</p></div>
                  <div className="md:col-start-2 lg:col-start-auto">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{project.status === "idea" ? "Proposed stack" : "Project stack"}</p>
                    <ul aria-label={`${project.title} technologies`} className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => <li key={technology} className="rounded-[var(--radius-sm)] border border-line bg-surface px-2.5 py-1 font-mono text-xs text-muted">{technology}</li>)}
                    </ul>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="journey" aria-labelledby="journey-heading" className="scroll-mt-20 border-b border-line bg-surface">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <p className={label}>03 / How projects grow</p>
            <h2 id="journey-heading" className="text-section mt-5 text-foreground">Start small. Keep moving.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">You don&apos;t need a finished plan to begin. Take the next useful step, then build on what you learn.</p>
            <ol className="mt-10 grid gap-8 border-l border-line pl-6 md:grid-cols-4 md:gap-6 md:border-l-0 md:border-t md:pl-0 md:pt-7">
              {journey.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li key={step.title} className="relative">
                    <span aria-hidden="true" className="absolute -left-[29px] top-1 h-2 w-2 rounded-full bg-accent md:-top-8 md:left-0" />
                    <div className="flex items-center justify-between gap-4"><span className="font-mono text-xs text-muted">0{index + 1}</span>{index < journey.length - 1 && <ArrowRight size={16} aria-hidden="true" className="hidden text-accent md:block" />}</div>
                    <h3 className="mt-4 flex items-center gap-2 font-display text-xl font-semibold tracking-[-0.03em] text-foreground"><Icon size={18} aria-hidden="true" className="shrink-0 text-accent" />{step.title}</h3>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-muted">{step.description}</p>
                  </li>
                );
              })}
            </ol>
          </MotionReveal>
        </Container>
      </section>

      <section aria-labelledby="contribute-heading" className="border-b border-line bg-background">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <div className="rounded-[var(--radius-xl)] border border-line bg-surface-ink px-6 py-12 text-center text-nav-fg shadow-[var(--shadow-md)] sm:px-10 sm:py-16">
              <p className={label}>Your next contribution</p>
              <h2 id="contribute-heading" className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">Bring an idea.<br />Find your people. Build together.</h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-nav-muted sm:text-base">Start something new, join a team, or contribute a skill. Code, design, testing, and a fresh perspective all move a project forward.</p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={siteRoutes.contact} variant="accent" size="lg" className="h-auto min-h-12 py-3">Talk to SAIT about a project<ArrowUpRight size={17} aria-hidden="true" className="shrink-0" /></ButtonLink>
                <ButtonLink href={siteRoutes.people} variant="nav" size="lg" className="h-auto min-h-12 py-3">Meet the community<ArrowUpRight size={17} aria-hidden="true" className="shrink-0" /></ButtonLink>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </section>
    </>
  );
}
