import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight, Code2, FlaskConical, Flag, BookOpen, HeartHandshake } from "lucide-react";
import { MotionReveal } from "@/components/effects/motion-reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { achievements, spotlightAchievements } from "@/data/achievements";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Hall of Fame",
  description: "Explore a fictional showcase of SAIT student milestones in building, research, competitions, peer learning, and community contribution.",
};

const layout = "max-w-7xl sm:px-8 lg:px-10";
const sectionSpace = "py-16 sm:py-20 lg:py-24";
const label = "font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent";
const archive = achievements
  .filter((achievement) => !achievement.spotlight)
  .sort((a, b) => b.date.localeCompare(a.date));
const archiveYears = Array.from(new Set(archive.map((achievement) => achievement.year)));
const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});
const culture = [
  { title: "Build", icon: Code2, description: "Make an idea useful. Share the experiment and what it taught you." },
  { title: "Research", icon: FlaskConical, description: "Ask a better question. Test it carefully and make your findings useful to others." },
  { title: "Compete", icon: Flag, description: "Take on a challenge. Grow through practice, pressure, and teamwork." },
  { title: "Learn", icon: BookOpen, description: "Go beyond what you know. Help someone else take their next step." },
  { title: "Contribute", icon: HeartHandshake, description: "Leave something better. Good documentation and a helping hand count too." },
];

export default function AchievementsPage() {
  return (
    <>
      <section aria-labelledby="achievements-heading" className="border-b border-line bg-background">
        <Container className={`${layout} pb-8 pt-14 sm:pt-16 lg:pt-20`}>
          <MotionReveal>
            <p className={label}>Hall of Fame / Achievements</p>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <h1 id="achievements-heading" className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">The effort behind<br /><span className="text-accent">every milestone.</span></h1>
              <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">Some moments end on a stage. Others start with a question, a first build, or a helping hand. Here&apos;s to the effort that moves our community forward.</p>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-x-6 gap-y-1 border-t border-line pt-4">
              <a href="#spotlight" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent">In the spotlight<ArrowDown size={14} aria-hidden="true" /></a>
              <a href="#archive" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent">Explore the archive<ArrowDown size={14} aria-hidden="true" /></a>
              <a href="#culture" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent">More ways to make a mark<ArrowDown size={14} aria-hidden="true" /></a>
            </nav>
            <p className="mt-3 max-w-3xl text-xs leading-5 text-muted">Illustrative Hall of Fame: all achievements, teams, events, publications, results, and dates on this page are fictional mock content.</p>
          </MotionReveal>
        </Container>
      </section>

      <section id="spotlight" aria-labelledby="spotlight-heading" className="scroll-mt-20 border-b border-line bg-surface">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div><p className={label}>01 / Achievement spotlight</p><h2 id="spotlight-heading" className="text-section mt-5 text-foreground">Work worth celebrating.</h2></div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Selected mock milestones</p>
            </div>
          </MotionReveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            {spotlightAchievements.map((achievement, index) => {
              const primary = index === 0;
              return (
                <MotionReveal key={achievement.id} delay={index * 0.05} className={primary ? "h-full lg:row-span-2" : "h-full"}>
                  <article aria-labelledby={`spotlight-${achievement.id}`} className={`flex h-full flex-col rounded-[var(--radius-xl)] border p-6 sm:p-8 ${primary ? "border-white/10 bg-surface-ink text-nav-fg shadow-[var(--shadow-md)] lg:p-10" : "border-line bg-background text-foreground"}`}>
                    <div className={`flex flex-wrap items-center justify-between gap-3 font-mono text-xs ${primary ? "text-nav-muted" : "text-muted"}`}>
                      <span className="uppercase tracking-[0.12em]">{achievement.categoryLabel}</span>
                      <time dateTime={achievement.date}>{dateFormat.format(new Date(achievement.date))}</time>
                    </div>
                    <h3 id={`spotlight-${achievement.id}`} className={`mt-7 font-display font-bold leading-tight tracking-[-0.035em] ${primary ? "max-w-md text-3xl sm:text-4xl lg:mt-12 lg:text-5xl" : "text-2xl sm:text-3xl"}`}>{achievement.title}</h3>
                    <p className={`mt-4 max-w-xl text-sm leading-7 ${primary ? "text-nav-muted" : "text-muted"}`}>{achievement.description}</p>
                    <dl className={`mt-auto grid gap-5 pt-7 ${primary ? "sm:pt-12" : "sm:grid-cols-2"}`}>
                      <div className={`border-t pt-5 ${primary ? "border-white/10" : "border-line"}`}>
                        <dt className={`font-mono text-[10px] uppercase tracking-[0.14em] ${primary ? "text-nav-muted" : "text-muted"}`}>The outcome</dt>
                        <dd className={`mt-2 font-display font-bold tracking-[-0.04em] ${primary ? "text-4xl text-nav-fg sm:text-5xl" : "text-2xl text-accent-hover"}`}>{achievement.result}</dd>
                      </div>
                      <div className={`border-t pt-5 ${primary ? "border-white/10" : "border-line"}`}>
                        <dt className={`font-mono text-[10px] uppercase tracking-[0.14em] ${primary ? "text-nav-muted" : "text-muted"}`}>The people behind it</dt>
                        <dd className="mt-2 text-sm font-medium leading-6">{achievement.contributor}</dd>
                      </div>
                    </dl>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="archive" aria-labelledby="archive-heading" className="scroll-mt-20 border-b border-line bg-background">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <div className="grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16">
              <div><p className={label}>02 / Achievement archive</p><h2 id="archive-heading" className="text-section mt-5 text-foreground">Every step adds to the story.</h2></div>
              <p className="max-w-xl text-sm leading-7 text-muted">Beyond the spotlight: research shared, skills passed on, and contributions that make things better for the next person.</p>
            </div>
          </MotionReveal>
          <div className="mt-10 space-y-10">
            {archiveYears.map((year) => (
              <section key={year} aria-labelledby={`archive-${year}`} className="grid gap-5 border-t border-line pt-6 md:grid-cols-[0.3fr_1fr] md:gap-10">
                <MotionReveal>
                  <h3 id={`archive-${year}`} className="font-display text-4xl font-bold tracking-[-0.04em] text-foreground">{year}</h3>
                  <p className="mt-2 font-mono text-xs text-muted">Archive / mock records</p>
                </MotionReveal>
                <ul className="divide-y divide-line">
                  {archive.filter((achievement) => achievement.year === year).map((achievement, index) => (
                    <li key={achievement.id} className="py-6 first:pt-0 last:pb-0">
                      <MotionReveal delay={index * 0.03}>
                        <article>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs">
                            <p className="uppercase tracking-[0.1em] text-accent-hover">{achievement.categoryLabel}</p>
                            <time dateTime={achievement.date} className="text-muted">{dateFormat.format(new Date(achievement.date))}</time>
                          </div>
                          <h4 className="mt-3 text-lg font-semibold tracking-[-0.025em] text-foreground sm:text-xl">{achievement.title}</h4>
                          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{achievement.description}</p>
                          <dl className="mt-5 flex flex-col gap-x-8 gap-y-3 sm:flex-row sm:flex-wrap">
                            <div><dt className="sr-only">Outcome</dt><dd className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-medium leading-5 text-accent-fg">{achievement.result}</dd></div>
                            <div className="flex flex-wrap items-center gap-2 text-xs leading-7"><dt className="text-muted">By</dt><dd className="font-medium text-foreground">{achievement.contributor}</dd></div>
                          </dl>
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

      <section id="culture" aria-labelledby="culture-heading" className="scroll-mt-20 border-b border-white/10 bg-surface-ink text-nav-fg">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <p className={label}>03 / What we celebrate</p>
            <div className="mt-5 grid gap-5 lg:grid-cols-2 lg:gap-16">
              <h2 id="culture-heading" className="text-section">Progress has more than one shape.</h2>
              <p className="max-w-xl text-sm leading-7 text-nav-muted">A podium is one kind of milestone. Sharing a discovery, teaching a friend, or making a tool more accessible deserves a place in the story too.</p>
            </div>
            <ul className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
              {culture.map((area) => {
                const Icon = area.icon;
                return (
                  <li key={area.title} className="border-t border-white/15 pt-5">
                    <h3 className="flex items-center gap-3 font-display text-lg font-semibold"><Icon size={18} aria-hidden="true" className="shrink-0 text-accent" />{area.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-nav-muted">{area.description}</p>
                  </li>
                );
              })}
            </ul>
          </MotionReveal>
        </Container>
      </section>

      <section aria-labelledby="next-heading" className="border-b border-line bg-surface">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <div className="grid gap-8 rounded-[var(--radius-xl)] border border-line bg-background p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:p-12">
              <div>
                <p className={label}>Your next chapter</p>
                <h2 id="next-heading" className="mt-5 max-w-xl font-display text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">Make something<br /><span className="text-accent">worth sharing.</span></h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-muted">Take on a challenge, explore a research question, or help a team move forward. Your next step doesn&apos;t have to be big to matter.</p>
              </div>
              <div className="border-t border-line pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-base font-semibold text-foreground">Find a place to begin.</p>
                <p className="mt-3 text-sm leading-7 text-muted">Discover what students are building, or find an event where you can learn, collaborate, and put your skills to the test.</p>
                <div className="mt-6 flex flex-col items-stretch gap-3 sm:items-start">
                  <ButtonLink href={siteRoutes.projects} variant="accent" size="lg" className="h-auto min-h-12 py-3 text-center">Explore student projects<ArrowUpRight size={17} aria-hidden="true" className="shrink-0" /></ButtonLink>
                  <ButtonLink href={siteRoutes.events} variant="ghost" className="h-auto min-h-11 py-3 text-center">Find your next event<ArrowUpRight size={16} aria-hidden="true" className="shrink-0" /></ButtonLink>
                </div>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </section>
    </>
  );
}
