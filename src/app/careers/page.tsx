import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MotionReveal } from "@/components/effects/motion-reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { careers, careerSnapshotDate } from "@/data/careers";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Opportunities & Careers",
  description: "Explore fictional student opportunities, practical career preparation checklists, and a placement information preview for the SAIT community.",
};

const layout = "max-w-7xl sm:px-8 lg:px-10";
const sectionSpace = "py-16 sm:py-20 lg:py-24";
const label = "font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent";
const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
const formatDate = (value: string) => dateFormat.format(new Date(`${value}T00:00:00Z`));
const opportunities = [...careers].sort((a, b) => (a.deadline ?? "9999").localeCompare(b.deadline ?? "9999"));
const preparation = [
  { title: "Learn foundations", text: "Choose a language. Practise functions, data structures, databases, and basic networking with small examples." },
  { title: "Build something useful", text: "Solve one clear problem. Keep notes on your decisions, tests, and what you would improve." },
  { title: "Practise problem solving", text: "Work through a few problems regularly. Explain your approach and review mistakes before moving on." },
  { title: "Show your work", text: "Prepare a readable README, a short demo, and a portfolio entry that makes your contribution clear." },
  { title: "Rehearse interviews", text: "Explain a project aloud, practise a technical question with a peer, and prepare examples of teamwork." },
  { title: "Connect and reflect", text: "Ask peers and alumni for feedback. Use what you learn to choose your next practice session or project." },
];
const resources = [
  { title: "Resume preparation", hint: "Make your contribution easy to understand.", tips: ["Lead with relevant projects, skills, and experience; keep descriptions specific.", "For each project, explain the problem, your work, and an outcome you can support.", "Check contact details, dates, spelling, and links before sharing."] },
  { title: "Interview preparation", hint: "Practise explaining, not just answering.", tips: ["Prepare a two-minute explanation of a project and one difficult decision.", "Clarify a coding problem, discuss an approach, then test edge cases aloud.", "Prepare questions about the role, learning support, and day-to-day work."] },
  { title: "DSA / coding practice", hint: "Build a repeatable practice habit.", tips: ["Start with arrays, strings, maps, and basic searching and sorting.", "State time and space complexity and check your reasoning with small examples.", "Keep a mistake log and revisit problems you could not explain clearly."] },
  { title: "Portfolio / GitHub", hint: "Help someone understand the work quickly.", tips: ["Pin a few relevant projects with clear setup instructions and screenshots.", "Explain what you built yourself and credit collaborators or borrowed resources.", "Remove credentials and personal data; check that public demos and links work."] },
  { title: "Communication", hint: "Turn technical detail into a clear story.", tips: ["Explain a problem to a peer before describing your implementation.", "Write short progress updates: what changed, what is blocked, and what comes next.", "Practise giving specific feedback and asking questions when expectations are unclear."] },
  { title: "Internship preparation", hint: "Understand the opportunity before committing.", tips: ["Read the responsibilities, eligibility, dates, work location, and expected availability.", "Prepare a relevant work sample and a concise introduction.", "Clarify supervision, working hours, compensation, and the learning goals with the organisation."] },
];
const placementInfo = [
  { title: "Placement highlights", text: "Reserved for approved, year-specific outcomes with a source and reporting period. No results or salary figures are available here.", status: "Verified results pending" },
  { title: "Placement process", text: "Reserved for official eligibility, registration steps, required documents, schedules, and placement-office instructions. This page does not establish CUSAT policy.", status: "Official process pending" },
  { title: "Recruiter / company information", text: "Reserved for confirmed recruiting organisations, roles, eligibility, and official notices. No recruiting relationship is implied by the mock board above.", status: "Verified recruiter information pending" },
];
const campusLinks = [
  { title: "Projects", href: siteRoutes.projects, text: "Build evidence of your skills through a problem you can explain and a contribution you can show." },
  { title: "Events", href: siteRoutes.events, text: "Practise a skill, try a challenge, or learn to collaborate under a shared deadline." },
  { title: "Community", href: siteRoutes.people, text: "Find peers with different strengths and practise working as part of a team." },
  { title: "Alumni", href: siteRoutes.alumni, text: "Explore different career and study paths, and the experiences that can shape them." },
  { title: "Achievements", href: siteRoutes.achievements, text: "See how building, research, learning, and contribution can become milestones worth sharing." },
];

export default function CareersPage() {
  return (
    <>
      <section aria-labelledby="careers-heading" className="border-b border-line bg-background">
        <Container className={`${layout} pb-8 pt-14 sm:pt-16 lg:pt-20`}>
          <MotionReveal>
            <p className={label}>Opportunities / Careers</p>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <h1 id="careers-heading" className="font-display text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">Your next step.<br /><span className="text-accent">Built from here.</span></h1>
              <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">Explore ways to learn through experience, prepare for internships and placements, and connect your campus work to what comes next.</p>
            </div>
          </MotionReveal>
          <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-x-6 gap-y-1 border-t border-line pt-4">
            {[
              { href: "#opportunities", text: "Opportunity board" }, { href: "#preparation", text: "Get prepared" },
              { href: "#resources", text: "Career resources" }, { href: "#placements", text: "Placement information" },
            ].map((item) => <a key={item.href} href={item.href} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent">{item.text}<ArrowDown size={14} aria-hidden="true" /></a>)}
          </nav>
          <p className="mt-3 text-xs leading-6 text-muted">Demo snapshot: {formatDate(careerSnapshotDate)}. All opportunities, organisations, deadlines, and availability are fictional. No real applications or recruiting partnerships are offered here.</p>
        </Container>
      </section>

      <section id="opportunities" aria-labelledby="board-heading" className="scroll-mt-20 border-b border-line bg-surface">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <p className={label}>01 / Opportunity board</p>
            <h2 id="board-heading" className="text-section mt-5 text-foreground">A few ways to take the next step.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">Sample listings, ordered by demo deadline. Open a brief to understand the audience and format; these are examples, not live vacancies.</p>
          </MotionReveal>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {opportunities.map((opportunity) => (
              <li key={opportunity.id} className="py-6 sm:py-7">
                <article aria-labelledby={`opportunity-${opportunity.id}`} className="grid gap-5 lg:grid-cols-[1fr_270px] lg:gap-12">
                  <div className="min-w-0">
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent-hover">{opportunity.type}</p>
                    <h3 id={`opportunity-${opportunity.id}`} className="mt-3 text-xl font-semibold tracking-[-0.025em] text-foreground">{opportunity.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-muted">{opportunity.organization} · {opportunity.location}</p>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{opportunity.summary}</p>
                    <p className="mt-3 text-sm leading-6 text-foreground"><span className="font-medium">For: </span>{opportunity.audience}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Demo deadline</p>
                    <p className="mt-1 text-lg font-semibold text-foreground">{opportunity.deadline ? <time dateTime={opportunity.deadline}>{formatDate(opportunity.deadline)}</time> : "To be announced"}</p>
                    <div className="mt-3"><Badge tone={opportunity.status === "open" ? "success" : "neutral"}>{opportunity.status === "open" ? "Open · demo only" : "Opening soon · demo"}</Badge></div>
                    <details className="mt-4 rounded-[var(--radius-md)] border border-line bg-background">
                      <summary className="min-h-11 cursor-pointer rounded-[var(--radius-md)] px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2">Read the demo brief<span className="sr-only"> for {opportunity.title}</span></summary>
                      <div className="space-y-3 border-t border-line p-4 text-sm leading-6 text-muted"><p>{opportunity.timeframe}</p><p>Areas to explore: {opportunity.tags.join(", ")}.</p><p className="font-medium text-foreground">Illustrative only. Applications are unavailable; no information is collected or sent.</p></div>
                    </details>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="preparation" aria-labelledby="preparation-heading" className="scroll-mt-20 border-b border-white/10 bg-surface-ink text-nav-fg">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <p className={label}>02 / Career preparation</p>
            <h2 id="preparation-heading" className="text-section mt-5">Prepare a little. Put it into practice.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-nav-muted">Use this as a repeatable pathway. Pick the step that fits where you are, then return to it as your experience grows.</p>
            <ol className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {preparation.map((step, index) => <li key={step.title} className="border-t border-white/15 pt-5"><span className="font-mono text-xs text-accent">0{index + 1}</span><h3 className="mt-3 text-lg font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-7 text-nav-muted">{step.text}</p></li>)}
            </ol>
          </MotionReveal>
        </Container>
      </section>

      <section id="resources" aria-labelledby="resources-heading" className="scroll-mt-20 border-b border-line bg-background">
        <Container className={`${layout} ${sectionSpace}`}>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <MotionReveal><p className={label}>03 / Career resources</p><h2 id="resources-heading" className="text-section mt-5 text-foreground">Start with one useful checklist.</h2><p className="mt-4 max-w-md text-sm leading-7 text-muted">Short, practical prompts you can use now. Expand a topic and choose one action for your next preparation session.</p></MotionReveal>
            <div className="divide-y divide-line border-y border-line">
              {resources.map((resource) => (
                <details key={resource.title} className="group">
                  <summary className="min-h-11 cursor-pointer py-5 pr-3 text-foreground transition-colors hover:text-accent-hover"><span className="ml-2 font-semibold">{resource.title}</span><span className="mt-2 block pl-6 text-sm leading-6 text-muted">{resource.hint}</span></summary>
                  <ul className="list-disc space-y-3 pb-6 pl-6 pr-3 text-sm leading-7 text-muted">{resource.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="placements" aria-labelledby="placements-heading" className="scroll-mt-20 border-b border-line bg-surface">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <p className={label}>04 / Placements</p>
            <h2 id="placements-heading" className="text-section mt-5 text-foreground">Placement information, with a clear source.</h2>
            <div className="mt-5 rounded-[var(--radius-md)] border border-line bg-background p-5"><p className="text-sm font-semibold text-foreground">Prototype information area · verified institutional data pending</p><p className="mt-2 max-w-3xl text-sm leading-7 text-muted">Current CUSAT placement results, recruiter details, and official procedures have not been provided. The areas below show where approved information would appear, without inventing figures or outcomes.</p></div>
          </MotionReveal>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {placementInfo.map((item) => <article key={item.title} className="grid gap-3 py-6 md:grid-cols-[0.6fr_1.4fr] md:gap-10"><h3 className="text-base font-semibold text-foreground">{item.title}</h3><div><p className="text-sm leading-7 text-muted">{item.text}</p><p className="mt-3 font-mono text-xs text-accent-hover">{item.status}</p></div></article>)}
            <article className="grid gap-3 py-6 md:grid-cols-[0.6fr_1.4fr] md:gap-10"><h3 className="text-base font-semibold text-foreground">Preparation resources</h3><div><p className="text-sm leading-7 text-muted">The general checklists on this page are available now. Official placement-specific documents can be added once approved.</p><a href="#resources" className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent-hover hover:text-foreground">Browse preparation checklists<ArrowUpRight size={16} aria-hidden="true" /></a></div></article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="campus-heading" className="border-b border-line bg-background">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal><p className={label}>05 / From campus to career</p><h2 id="campus-heading" className="text-section mt-5 text-foreground">Experience grows through the community.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-muted">Your next learning opportunity might start with a project, a conversation, or a chance to help. Explore the different ways to put preparation into practice.</p></MotionReveal>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {campusLinks.map((item) => <li key={item.title}><Link href={item.href} className="group grid min-h-11 grid-cols-[1fr_auto] items-center gap-3 py-5 transition-colors hover:text-accent-hover sm:grid-cols-[150px_1fr_auto] sm:gap-8"><h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent-hover">{item.title}</h3><p className="col-start-1 row-start-2 text-sm leading-7 text-muted sm:col-start-auto sm:row-start-auto">{item.text}</p><ArrowUpRight size={18} aria-hidden="true" className="col-start-2 row-start-1 text-accent sm:col-start-auto sm:row-start-auto" /></Link></li>)}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="next-heading" className="border-b border-line bg-surface">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <div className="grid gap-8 rounded-[var(--radius-xl)] border border-line bg-background p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:p-12">
              <div><p className={label}>Choose your next step</p><h2 id="next-heading" className="mt-5 font-display text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">Build experience.<br /><span className="text-accent">Find perspective.</span></h2><p className="mt-5 max-w-xl text-base leading-7 text-muted">Explore a project you could learn from, meet alumni with different paths, or reach out to SAIT with an idea for a career session.</p></div>
              <div className="flex flex-col items-stretch gap-3 sm:items-start lg:items-stretch"><ButtonLink href={siteRoutes.projects} variant="accent" size="lg" className="h-auto min-h-12 py-3 text-center">Explore student projects<ArrowUpRight size={17} aria-hidden="true" className="shrink-0" /></ButtonLink><ButtonLink href={siteRoutes.alumni} variant="secondary" size="lg" className="h-auto min-h-12 py-3 text-center">Explore alumni journeys<ArrowUpRight size={17} aria-hidden="true" className="shrink-0" /></ButtonLink><ButtonLink href={siteRoutes.contact} variant="ghost" className="h-auto min-h-11 py-3 text-center">Talk to SAIT<ArrowUpRight size={16} aria-hidden="true" className="shrink-0" /></ButtonLink></div>
            </div>
          </MotionReveal>
        </Container>
      </section>
    </>
  );
}
