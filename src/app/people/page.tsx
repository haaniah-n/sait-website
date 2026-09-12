import { faculty, committee } from "@/data/people";
import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Camera,
  CalendarDays,
  Megaphone,
  PenLine,
  Users,
} from "lucide-react";
import { MotionReveal } from "@/components/effects/motion-reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Meet the faculty, student leaders, and teams behind SAIT, the Information Technology community at SOE, CUSAT.",
};

const teams = [
  {
    name: "Tech",
    icon: Code2,
    line: "Make ideas work.",
    description:
      "Build community tools, explore new technologies, and help each other ship student projects.",
    contribution: "Code · Experiment · Collaborate",
  },
  {
    name: "Media",
    icon: Camera,
    line: "Capture the energy.",
    description:
      "Document the moments that matter through photography, video, and visual design.",
    contribution: "Shoot · Design · Edit",
  },
  {
    name: "Events",
    icon: CalendarDays,
    line: "Bring people together.",
    description:
      "Shape workshops, meetups, and competitions from the first idea to the final wrap-up.",
    contribution: "Plan · Coordinate · Host",
  },
  {
    name: "PR",
    icon: Megaphone,
    line: "Start the conversation.",
    description:
      "Connect with students, collaborators, and the wider campus to help SAIT reach more people.",
    contribution: "Connect · Share · Reach out",
  },
  {
    name: "Content",
    icon: PenLine,
    line: "Give the community a voice.",
    description:
      "Turn ideas and experiences into stories, event copy, and resources worth sharing.",
    contribution: "Write · Research · Tell stories",
  },
];

const layout = "max-w-7xl sm:px-8 lg:px-10";
const sectionSpace = "py-16 sm:py-20 lg:py-24";
const label =
  "font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent";

export default function PeoplePage() {
  return (
    <>
      <section
        aria-labelledby="community-heading"
        className="relative overflow-hidden border-b border-line bg-background"
      >
        <Container
          className={`${layout} relative pb-8 pt-14 sm:pt-16 lg:pt-20`}
        >
          <MotionReveal>
            <p className={label}>Community</p>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <h1
                id="community-heading"
                className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl"
              >
                The people behind
                <br />
                <span className="text-accent">what happens next.</span>
              </h1>
              <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Faculty who guide. Students who lead. Teams who make things
                happen. Meet the community shaping IT life at SOE, CUSAT.
              </p>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <nav
              aria-label="On this page"
              className="mt-10 flex flex-wrap gap-x-6 gap-y-1 border-t border-line pt-4"
            >
              {[
                { href: "#faculty", title: "Faculty & support" },
                { href: "#committee", title: "Student leadership" },
                { href: "#teams", title: "Find your team" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  {item.title}
                  <ArrowDown
                    size={14}
                    aria-hidden="true"
                    className="text-accent"
                  />
                </a>
              ))}
            </nav>
            <p className="mt-3 text-xs leading-5 text-muted">
              Meet the people and teams that bring the SAIT community together.
            </p>
          </MotionReveal>
        </Container>
      </section>

      <section
        id="faculty"
        aria-labelledby="faculty-heading"
        className="scroll-mt-20 border-b border-line bg-surface"
      >
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
              <p className={label}>01 / Guidance & support</p>
              <div>
                <h2
                  id="faculty-heading"
                  className="text-section text-foreground"
                >
                  Faculty & Administration
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                  The department leadership and support behind the student
                  community — offering perspective, encouragement, and space to
                  try something new.
                </p>
              </div>
            </div>
          </MotionReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((person, index) => (
              <MotionReveal
                key={person.name}
                delay={index * 0.04}
                className="h-full"
              >
                <article className="flex h-full flex-col rounded-[var(--radius-xl)] border border-line bg-background p-6 sm:p-7">
                  <div
                    aria-hidden="true"
                    className="grid h-14 w-14 place-items-center rounded-full border border-line bg-surface font-display text-lg font-semibold text-foreground"
                  >
                    {person.initials}
                  </div>
                  <h3 className="mt-7 text-card text-foreground">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-accent-hover">
                    {person.role}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {person.focus}
                  </p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="committee"
        aria-labelledby="committee-heading"
        className="scroll-mt-20 border-b border-line bg-surface-ink text-nav-fg"
      >
        <Container className={`${layout} ${sectionSpace}`}>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <MotionReveal>
              <p className={label}>02 / Student leadership</p>
              <h2 id="committee-heading" className="text-section mt-5">
                SAIT Executive Committee
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-nav-muted">
                Students taking the initiative, listening to the community, and
                helping good ideas become shared experiences.
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-line pt-5 text-sm text-nav-muted">
                <Users
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-accent"
                />
                <span>Led by students. Built together.</span>
              </div>
            </MotionReveal>
            <ol className="divide-y divide-line border-y border-line">
              {committee.map((person, index) => (
                <li key={person.name}>
                  <MotionReveal delay={index * 0.04}>
                    <article className="flex items-start gap-4 py-6 sm:gap-5 sm:py-7">
                      <span
                        aria-hidden="true"
                        className="grid h-12 w-12 shrink-0 place-items-center rounded-[var(--radius-md)] border border-line bg-surface-2 font-display text-sm font-semibold text-nav-fg"
                      >
                        {person.initials}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
                          {person.role}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-nav-fg sm:text-xl">
                          {person.name}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-nav-muted">
                          {person.focus}
                        </p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="hidden pt-1 font-mono text-xs text-nav-muted sm:block"
                      >
                        0{index + 1}
                      </span>
                    </article>
                  </MotionReveal>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section
        id="teams"
        aria-labelledby="teams-heading"
        className="scroll-mt-20 border-b border-line bg-background"
      >
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-12">
              <div>
                <p className={label}>03 / SAIT Teams</p>
                <h2
                  id="teams-heading"
                  className="text-section mt-5 text-foreground"
                >
                  Different skills. Shared momentum.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-muted">
                Find the kind of work you enjoy. Our teams bring different
                strengths to the same community, with plenty of room to learn
                along the way.
              </p>
            </div>
          </MotionReveal>
          <div className="mt-10 border-t border-line">
            {teams.map((team, index) => {
              const Icon = team.icon;
              return (
                <MotionReveal key={team.name} delay={index * 0.03}>
                  <article className="grid gap-5 border-b border-line py-7 sm:py-8 md:grid-cols-[0.65fr_1.35fr] md:gap-10 lg:grid-cols-[0.65fr_1fr_0.65fr] lg:items-start">
                    <div className="flex items-center gap-4">
                      <span
                        aria-hidden="true"
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-md)] bg-accent-soft text-accent"
                      >
                        <Icon size={19} />
                      </span>
                      <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-foreground">
                        {team.name}
                      </h3>
                    </div>
                    <div>
                      <p className="text-base font-semibold text-foreground">
                        {team.line}
                      </p>
                      <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
                        {team.description}
                      </p>
                    </div>
                    <p className="font-mono text-xs leading-6 text-accent-hover md:col-start-2 lg:col-start-auto lg:pt-1 lg:text-right">
                      {team.contribution}
                    </p>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="join-heading"
        className="border-b border-line bg-surface"
      >
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <div className="grid gap-10 rounded-[var(--radius-xl)] border border-line bg-background p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16 lg:p-12">
              <div>
                <p className={label}>04 / You belong here</p>
                <h2
                  id="join-heading"
                  className="mt-5 max-w-xl font-display text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl"
                >
                  You don&apos;t need a title
                  <br />
                  to <span className="text-accent">make a difference.</span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-muted">
                  Bring an idea, lend a hand, or try something for the first
                  time. SAIT grows through the students who show up, share what
                  they know, and learn together.
                </p>
              </div>
              <div className="border-t border-line pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="text-lg font-semibold text-foreground">
                  Start with your curiosity.
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Interested in a team? Reach out to SAIT with what you&apos;d
                  like to explore. Or meet the community at an upcoming event.
                </p>
                <div className="mt-6 flex flex-col items-stretch gap-3 sm:items-start">
                  <ButtonLink
                    href={siteRoutes.contact}
                    variant="accent"
                    size="lg"
                    className="h-auto min-h-12 py-3 text-center"
                  >
                    Get involved with SAIT
                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                      className="shrink-0"
                    />
                  </ButtonLink>
                  <ButtonLink
                    href={siteRoutes.events}
                    variant="ghost"
                    className="h-auto min-h-11 py-3 text-center"
                  >
                    Explore community events
                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="shrink-0"
                    />
                  </ButtonLink>
                </div>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </section>
    </>
  );
}
