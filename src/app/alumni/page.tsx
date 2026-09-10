import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight, Code2, PenTool, FlaskConical, Lightbulb, Compass } from "lucide-react";
import { MotionReveal } from "@/components/effects/motion-reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { alumni, spotlightAlumni } from "@/data/alumni";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Alumni",
  description: "Explore fictional alumni journeys beyond SAIT — from engineering and design to research and entrepreneurship, with a connection back to the community.",
};

const layout = "max-w-7xl sm:px-8 lg:px-10";
const sectionSpace = "py-16 sm:py-20 lg:py-24";
const label = "font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent";
const directory = alumni.filter((person) => !person.spotlight);
const batches = Array.from(new Set(directory.map((person) => person.batch))).sort((a, b) => b.localeCompare(a));
const paths = [
  { name: "Software & Engineering", icon: Code2, description: "Building useful products and the systems behind them." },
  { name: "Product & Design", icon: PenTool, description: "Understanding people and shaping better experiences." },
  { name: "Research / Higher Studies", icon: FlaskConical, description: "Following questions into deeper study and discovery." },
  { name: "Entrepreneurship", icon: Lightbulb, description: "Testing an idea and learning how to make it last." },
  { name: "Consulting / Industry", icon: Compass, description: "Connecting technical thinking with wider challenges." },
];
const connections = [
  { title: "A conversation can open a door.", text: "Mentoring and career guidance give students room to ask the questions they might not ask in a lecture hall. Share the choices, uncertainties, and lessons behind your own path.", detail: "Mentoring · Career guidance" },
  { title: "An experience can become someone else’s lesson.", text: "Bring a story to a talk, work through a problem in a workshop, or offer a fresh perspective on a student project. The unfinished attempts are often as useful as the successes.", detail: "Talks & workshops · Project feedback" },
  { title: "A familiar community can keep growing.", text: "Come back for a community event, meet a new batch, and hear what they are building. Staying connected is a chance to learn from each other, in both directions.", detail: "Community events · Shared learning" },
];

export default function AlumniPage() {
  return (
    <>
      <section aria-labelledby="alumni-heading" className="border-b border-line bg-background">
        <Container className={`${layout} pb-8 pt-14 sm:pt-16 lg:pt-20`}>
          <MotionReveal>
            <p className={label}>Alumni</p>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <h1 id="alumni-heading" className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">New directions.<br /><span className="text-accent">A shared beginning.</span></h1>
              <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">The journey doesn&apos;t end at graduation. It carries into new teams, bigger questions, and unexpected opportunities — with a community to come back to.</p>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-x-6 gap-y-1 border-t border-line pt-4">
              <a href="#stories" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent">Alumni stories<ArrowDown size={14} aria-hidden="true" /></a>
              <a href="#directory" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent">Meet more alumni<ArrowDown size={14} aria-hidden="true" /></a>
              <a href="#connected" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent">Stay connected<ArrowDown size={14} aria-hidden="true" /></a>
            </nav>
            <p className="mt-3 max-w-3xl text-xs leading-5 text-muted">Illustrative alumni journeys: all names, batches, roles, work settings, and stories shown here are fictional mock content.</p>
          </MotionReveal>
        </Container>
      </section>

      <section id="stories" aria-labelledby="stories-heading" className="scroll-mt-20 border-b border-line bg-surface">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <p className={label}>01 / Alumni spotlight</p>
            <h2 id="stories-heading" className="text-section mt-5 text-foreground">Different paths. Familiar first steps.</h2>
          </MotionReveal>
          <div className="mt-10 space-y-8">
            {spotlightAlumni.map((person, index) => (
              <MotionReveal key={person.id} delay={index * 0.05}>
                {index === 0 ? (
                  <article aria-labelledby={`story-${person.id}`} className="grid overflow-hidden rounded-[var(--radius-xl)] border border-line bg-background shadow-[var(--shadow-sm)] lg:grid-cols-[0.75fr_1.25fr]">
                    <div className="flex flex-col bg-surface-ink p-6 text-nav-fg sm:p-9 lg:p-10">
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-mono text-xs uppercase tracking-[0.14em] text-nav-muted">Class of {person.batch}</p>
                        <span aria-hidden="true" className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 font-display text-xl font-semibold">{person.initials}</span>
                      </div>
                      <h3 id={`story-${person.id}`} className="mt-8 font-display text-3xl font-bold tracking-[-0.035em] sm:text-4xl">{person.name}</h3>
                      <p className="mt-3 text-base text-nav-fg">{person.currentRole}</p>
                      <p className="mt-2 text-sm text-nav-muted">{person.company}</p>
                      <div className="mt-auto pt-8">
                        <p className="border-t border-white/10 pt-5 font-mono text-xs uppercase tracking-[0.12em] text-accent">{person.area}</p>
                      </div>
                    </div>
                    <div className="p-6 sm:p-9 lg:p-10">
                      <h4 className="max-w-2xl font-display text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-3xl">{person.headline}</h4>
                      <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{person.story}</p>
                      <dl className="mt-7 grid gap-5 border-t border-line pt-5 sm:grid-cols-2">
                        <div><dt className="font-mono text-xs uppercase tracking-[0.12em] text-accent-hover">The beginning</dt><dd className="mt-3 text-sm leading-7 text-foreground">{person.origin}</dd></div>
                        <div><dt className="font-mono text-xs uppercase tracking-[0.12em] text-accent-hover">The connection</dt><dd className="mt-3 text-sm leading-7 text-foreground">{person.connection}</dd></div>
                      </dl>
                    </div>
                  </article>
                ) : (
                  <article aria-labelledby={`story-${person.id}`} className="grid gap-6 border-t border-line pt-8 md:grid-cols-[0.65fr_1.35fr] md:gap-10 lg:gap-16">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Class of {person.batch} / {person.area}</p>
                      <h3 id={`story-${person.id}`} className="mt-4 font-display text-2xl font-bold tracking-[-0.03em] text-foreground">{person.name}</h3>
                      <p className="mt-2 text-sm font-medium text-accent-hover">{person.currentRole}</p>
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-semibold tracking-[-0.025em] text-foreground sm:text-2xl">{person.headline}</h4>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{person.story}</p>
                      <p className="mt-5 max-w-2xl border-l-2 border-accent/40 pl-4 text-sm leading-7 text-foreground"><span className="font-medium">Still connected. </span>{person.connection}</p>
                    </div>
                  </article>
                )}
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="paths-heading" className="border-b border-line bg-background">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <div className="grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16">
              <div><p className={label}>02 / Alumni paths</p><h2 id="paths-heading" className="text-section mt-5 text-foreground">There&apos;s more than one way forward.</h2></div>
              <p className="max-w-xl text-sm leading-7 text-muted">A foundation in IT can lead in many directions. These paths overlap, change, and sometimes lead you somewhere you hadn&apos;t considered.</p>
            </div>
            <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
              {paths.map((path) => {
                const Icon = path.icon;
                return (
                  <li key={path.name} className="min-w-0 border-t border-line pt-5">
                    <Icon size={20} aria-hidden="true" className="text-accent" />
                    <h3 className="mt-4 text-base font-semibold leading-6 text-foreground">{path.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{path.description}</p>
                  </li>
                );
              })}
            </ul>
          </MotionReveal>
        </Container>
      </section>

      <section id="directory" aria-labelledby="directory-heading" className="scroll-mt-20 border-b border-line bg-surface">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <p className={label}>03 / More journeys</p>
            <h2 id="directory-heading" className="text-section mt-5 text-foreground">Meet a few more of the community.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">A small directory of fictional stories, grouped by graduating batch. Each one starts with curiosity and keeps moving.</p>
          </MotionReveal>
          <div className="mt-10 space-y-10">
            {batches.map((batch) => (
              <section key={batch} aria-labelledby={`batch-${batch}`} className="grid gap-6 border-t border-line pt-6 md:grid-cols-[0.3fr_1fr] md:gap-10">
                <MotionReveal>
                  <h3 id={`batch-${batch}`} className="font-display text-3xl font-bold tracking-[-0.04em] text-foreground">Class of {batch}</h3>
                </MotionReveal>
                <ul className="divide-y divide-line">
                  {directory.filter((person) => person.batch === batch).map((person, index) => (
                    <li key={person.id} className="py-6 first:pt-0 last:pb-0">
                      <MotionReveal delay={index * 0.03}>
                        <article className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
                          <div>
                            <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent-hover">{person.area}</p>
                            <h4 className="mt-3 text-lg font-semibold tracking-[-0.025em] text-foreground">{person.name}</h4>
                            <p className="mt-1 text-sm text-muted">{person.currentRole}</p>
                          </div>
                          <div><p className="text-sm leading-7 text-muted">{person.story}</p><p className="mt-3 text-sm leading-7 text-foreground"><span className="font-medium">Giving back: </span>{person.connection}</p></div>
                        </article>
                      </MotionReveal>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </section>

      <section id="connected" aria-labelledby="connected-heading" className="scroll-mt-20 border-b border-white/10 bg-surface-ink text-nav-fg">
        <Container className={`${layout} ${sectionSpace}`}>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <MotionReveal>
              <p className={label}>04 / Staying connected</p>
              <h2 id="connected-heading" className="text-section mt-5">You move forward.<br />The connection stays.</h2>
              <p className="mt-5 max-w-md text-base leading-7 text-nav-muted">You don&apos;t need a perfect career story to give something back. A little time, an honest perspective, or a useful question can make the next step easier for someone else.</p>
            </MotionReveal>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {connections.map((connection, index) => (
                <MotionReveal key={connection.title} delay={index * 0.04}>
                  <div className="py-6 sm:py-7">
                    <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent">{connection.detail}</p>
                    <h3 className="mt-3 text-lg font-semibold leading-7 text-nav-fg">{connection.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-nav-muted">{connection.text}</p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="reconnect-heading" className="border-b border-line bg-background">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <div className="grid gap-8 rounded-[var(--radius-xl)] border border-line bg-surface p-6 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:p-12">
              <div><p className={label}>The next conversation</p><h2 id="reconnect-heading" className="mt-5 font-display text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">Been a while?<br /><span className="text-accent">Start with hello.</span></h2><p className="mt-5 max-w-xl text-base leading-7 text-muted">Alumni, bring your perspective back to SAIT. Students, get to know the people and teams who make this community a place to grow.</p></div>
              <div className="flex flex-col items-stretch gap-3 sm:items-start lg:items-stretch">
                <ButtonLink href={siteRoutes.contact} variant="accent" size="lg" className="h-auto min-h-12 py-3 text-center">Reconnect with SAIT<ArrowUpRight size={17} aria-hidden="true" className="shrink-0" /></ButtonLink>
                <ButtonLink href={siteRoutes.people} variant="secondary" size="lg" className="h-auto min-h-12 py-3 text-center">Explore the community<ArrowUpRight size={17} aria-hidden="true" className="shrink-0" /></ButtonLink>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </section>
    </>
  );
}
