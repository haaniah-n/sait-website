import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { MotionReveal } from "@/components/effects/motion-reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { eventCategoryLabels, eventSnapshotDate, formatEventDate, formatEventTime, nextEvent, pastEvents, upcomingEvents, type DemoEvent } from "@/data/events";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Events & Activities",
  description: "Explore SAIT’s fictional September 2026 event schedule: workshops, hackathons, talks, and community meetups, with dates, venues, and demo registration details.",
};

const layout = "max-w-7xl sm:px-8 lg:px-10";
const sectionSpace = "py-16 sm:py-20 lg:py-24";
const label = "font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent";
const formats = [
  { title: "SAIT TechSprint", category: "Build in a day", text: "A focused prototype sprint: begin with a problem, build a small solution, and end with a demo. Designed to make trying an idea feel achievable." },
  { title: "SAIT HackNight", category: "Go deeper, together", text: "An overnight team format for campus tools, with room for iteration, peer feedback, and learning from another team’s approach." },
  { title: "SAIT Meet & Connect", category: "Find your people", text: "An informal community format that introduces teams and gives students a place to share interests before choosing what to get involved in." },
];

function eventDates(event: DemoEvent) {
  return `${formatEventDate(event.date)}${event.endDate ? ` – ${formatEventDate(event.endDate)}` : ""}`;
}

function RegistrationInfo({ event }: { event: DemoEvent }) {
  return (
    <div>
      <Badge tone={event.registration === "open" ? "success" : "neutral"}>
        {event.registration === "open" ? "Registration open · demo" : event.registration === "soon" ? "Opens soon · demo" : "Registration closed"}
      </Badge>
      <details className="mt-3 rounded-[var(--radius-md)] border border-line bg-surface text-foreground">
        <summary className="min-h-11 cursor-pointer rounded-[var(--radius-md)] px-4 py-3 text-sm font-medium transition-colors hover:bg-surface-2">
          Registration details (demo)
        </summary>
        <div className="space-y-3 border-t border-line px-4 py-4 text-sm leading-6 text-muted">
          <p>{event.registrationNote}</p>
          <p className="font-medium text-foreground">Prototype only: registration is not available. Opening this panel does not book a place or submit any information.</p>
        </div>
      </details>
    </div>
  );
}

export default function EventsPage() {
  return (
    <>
      <section aria-labelledby="events-heading" className="border-b border-line bg-background">
        <Container className={`${layout} pb-8 pt-14 sm:pt-16 lg:pt-20`}>
          <MotionReveal>
            <p className={label}>Events</p>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <h1 id="events-heading" className="font-display text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">Show up curious.<br /><span className="text-accent">Leave with more.</span></h1>
              <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">Find your next workshop, build sprint, or community meetup. Check the details, choose what interests you, and make room to try something new.</p>
            </div>
          </MotionReveal>
          <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-x-6 gap-y-1 border-t border-line pt-4">
            {[
              { href: "#next-up", text: "Next up" },
              { href: "#upcoming", text: "Upcoming events" },
              { href: "#archive", text: "Past events" },
            ].map((item) => <a key={item.href} href={item.href} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent">{item.text}<ArrowDown size={14} aria-hidden="true" /></a>)}
          </nav>
          <p className="mt-3 text-xs leading-6 text-muted">Demo snapshot: {formatEventDate(eventSnapshotDate)} · All times IST (UTC+05:30). Events, venues, registration states, and recaps are fictional. No real bookings are available.</p>
        </Container>
      </section>

      {nextEvent && (
        <section id="next-up" aria-labelledby="next-heading" className="scroll-mt-20 border-b border-line bg-surface">
          <Container className={`${layout} py-12 sm:py-16`}>
            <MotionReveal>
              <p className={label}>01 / Next up</p>
              <article className="mt-6 grid overflow-hidden rounded-[var(--radius-xl)] border border-line shadow-[var(--shadow-sm)] lg:grid-cols-[1.1fr_0.9fr]">
                <div className="bg-surface-ink p-6 text-nav-fg sm:p-9 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-nav-muted"><span>{eventCategoryLabels[nextEvent.kind]}</span><span aria-hidden="true">/</span><span>Nearest upcoming event</span></div>
                  <h2 id="next-heading" className="mt-7 font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">{nextEvent.title}</h2>
                  <p className="mt-5 max-w-xl text-base leading-8 text-nav-muted">{nextEvent.summary}</p>
                  <p className="mt-7 border-t border-line pt-5 font-mono text-sm leading-7 text-nav-fg">{eventDates(nextEvent)}</p>
                </div>
                <div className="bg-background p-6 sm:p-9 lg:p-10">
                  <dl className="space-y-5">
                    <div><dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">When</dt><dd className="mt-2 text-lg font-semibold text-foreground"><time dateTime={`${nextEvent.date}T${nextEvent.startTime}:00+05:30`}>{formatEventTime(nextEvent.startTime)}</time> – {formatEventTime(nextEvent.endTime)} IST</dd></div>
                    <div><dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Where</dt><dd className="mt-2 flex items-start gap-2 text-base font-medium text-foreground"><MapPin size={18} aria-hidden="true" className="mt-1 shrink-0 text-accent" />{nextEvent.location}</dd></div>
                  </dl>
                  <div className="mt-6 border-t border-line pt-5"><RegistrationInfo event={nextEvent} /></div>
                </div>
              </article>
            </MotionReveal>
          </Container>
        </section>
      )}

      <section id="upcoming" aria-labelledby="upcoming-heading" className="scroll-mt-20 border-b border-line bg-background">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div><p className={label}>02 / Coming up</p><h2 id="upcoming-heading" className="text-section mt-5 text-foreground">Make a little room in your week.</h2></div>
              <p className="font-mono text-xs text-muted">September 2026 · After next up</p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2" aria-label="Event types in the demo schedule">
              <span className="mr-2 text-xs text-muted">Event types</span>
              {Object.values(eventCategoryLabels).map((category) => <Badge key={category}>{category}</Badge>)}
            </div>
          </MotionReveal>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {upcomingEvents.slice(1).map((event) => (
              <li id={`event-${event.id}`} key={event.id} className="scroll-mt-24 py-7 sm:py-8">
                <article aria-labelledby={`title-${event.id}`} className="grid gap-5 sm:grid-cols-[80px_1fr] sm:gap-7 lg:grid-cols-[88px_1fr_270px] lg:gap-8">
                  <time dateTime={event.date} aria-label={formatEventDate(event.date)} className="flex w-fit items-baseline gap-2 font-mono text-muted sm:flex-col sm:items-start sm:gap-1">
                    <span className="font-display text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">{event.date.slice(8)}</span>
                    <span className="text-xs uppercase tracking-[0.12em]">{new Intl.DateTimeFormat("en-GB", { month: "short", timeZone: "UTC" }).format(new Date(`${event.date}T00:00:00Z`))} {event.date.slice(0, 4)}</span>
                  </time>
                  <div className="min-w-0">
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent-hover">{eventCategoryLabels[event.kind]}</p>
                    <h3 id={`title-${event.id}`} className="mt-2 text-xl font-semibold tracking-[-0.025em] text-foreground">{event.title}</h3>
                    <dl className="mt-3 space-y-2 text-sm text-foreground">
                      <div className="flex items-start gap-2"><dt><span className="sr-only">Time</span><Clock3 size={16} aria-hidden="true" className="mt-1 text-accent" /></dt><dd>{formatEventTime(event.startTime)} – {formatEventTime(event.endTime)} IST{event.endDate && <span className="block text-xs leading-6 text-muted">Overnight · ends {formatEventDate(event.endDate)}</span>}</dd></div>
                      <div className="flex items-start gap-2"><dt><span className="sr-only">Venue</span><MapPin size={16} aria-hidden="true" className="mt-1 text-accent" /></dt><dd>{event.location}</dd></div>
                    </dl>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{event.summary}</p>
                  </div>
                  <div className="min-w-0 sm:col-start-2 lg:col-start-auto"><RegistrationInfo event={event} /></div>
                </article>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="formats-heading" className="border-b border-line bg-surface">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <p className={label}>03 / Flagship formats</p>
            <h2 id="formats-heading" className="text-section mt-5 text-foreground">Different ways to come together.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">Recurring-format concepts for this prototype, not claims about SAIT&apos;s event history.</p>
            <div className="mt-8 grid gap-7 md:grid-cols-3">
              {formats.map((format) => (
                <article key={format.title} className="border-t border-line pt-5">
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent-hover">{format.category}</p>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.03em] text-foreground">{format.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{format.text}</p>
                </article>
              ))}
            </div>
          </MotionReveal>
        </Container>
      </section>

      <section id="archive" aria-labelledby="archive-heading" className="scroll-mt-20 border-b border-line bg-background">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <p className={label}>04 / Past events</p>
            <h2 id="archive-heading" className="text-section mt-5 text-foreground">A look back, a little inspiration.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">Fictional recaps, newest first. These illustrate the archive experience; they do not describe events that actually took place.</p>
          </MotionReveal>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {pastEvents.map((event) => (
              <li key={event.id} className="py-5 sm:py-6">
                <article className="grid gap-3 md:grid-cols-[150px_1fr] md:gap-8">
                  <time dateTime={event.date} className="font-mono text-xs leading-6 text-muted">{formatEventDate(event.date)}</time>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-hover">{eventCategoryLabels[event.kind]} · Past demo event</p>
                    <h3 className="mt-2 text-base font-semibold text-foreground">{event.title}</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">{event.recap}</p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="join-heading" className="border-b border-line bg-surface">
        <Container className={`${layout} ${sectionSpace}`}>
          <MotionReveal>
            <div className="grid gap-8 rounded-[var(--radius-xl)] border border-line bg-surface-ink p-6 text-nav-fg sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:p-12">
              <div><p className={label}>Be part of what&apos;s next</p><h2 id="join-heading" className="mt-5 font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Bring your curiosity.<br />Or bring an idea.</h2><p className="mt-5 max-w-xl text-base leading-7 text-nav-muted">Attend, help organise, or suggest a session you&apos;d love to see. A useful skill, a good question, or a willingness to help is a place to start.</p></div>
              <div className="flex flex-col items-stretch gap-3 sm:items-start lg:items-stretch">
                <ButtonLink href={siteRoutes.contact} variant="accent" size="lg" className="h-auto min-h-12 py-3 text-center">Propose an event to SAIT<ArrowUpRight size={17} aria-hidden="true" className="shrink-0" /></ButtonLink>
                <ButtonLink href={siteRoutes.people} variant="nav" size="lg" className="h-auto min-h-12 py-3 text-center">Meet the community<ArrowUpRight size={17} aria-hidden="true" className="shrink-0" /></ButtonLink>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </section>
    </>
  );
}
