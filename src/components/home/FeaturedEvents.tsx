import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { MotionReveal } from "@/components/effects/motion-reveal";
import { nextEvent, upcomingEvents as scheduledEvents, eventCategoryLabels, formatEventDate, formatEventTime } from "@/data/events";
import { siteRoutes } from "@/lib/routes";

const featuredEvent = {
  category: `Next up · ${eventCategoryLabels[nextEvent.kind]}`,
  title: nextEvent.title,
  description: nextEvent.summary,
  date: formatEventDate(nextEvent.date),
  time: `${formatEventTime(nextEvent.startTime)} IST`,
  venue: nextEvent.location,
};

const upcomingEvents = scheduledEvents.slice(1, 4).map((event) => ({
  id: event.id,
  title: event.title,
  category: eventCategoryLabels[event.kind],
  date: formatEventDate(event.date),
  venue: event.location,
}));

export function FeaturedEvents() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <MotionReveal>
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Events / What&apos;s happening
              </p>

              <div className="mt-5 h-px w-16 bg-accent" />
            </div>
          </MotionReveal>

          <MotionReveal style={{ animationDelay: "100ms" }}>
            <div>
              <h2 className="text-section max-w-3xl text-foreground">
                Ideas become{" "}
                <span className="text-accent">experiences.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                Discover workshops, competitions, meetups, and experiences
                happening across the SAIT community.
              </p>
              <p className="mt-3 text-xs leading-5 text-muted">Fictional demo schedule · September 2026.</p>
            </div>
          </MotionReveal>
        </div>

        {/* Featured event */}
        <MotionReveal style={{ animationDelay: "180ms" }}>
          <Link
            href={`${siteRoutes.events}#next-up`}
            className="group mt-14 grid overflow-hidden rounded-[var(--radius-xl)] border border-line bg-surface-ink text-nav-fg shadow-[var(--shadow-md)] transition-[transform,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] lg:grid-cols-[1.25fr_0.75fr]"
          >
            <div className="relative overflow-hidden p-7 sm:p-10 lg:p-12">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl transition-transform duration-700 group-hover:scale-125"
              />

              <div className="relative">
                <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-nav-muted">
                  {featuredEvent.category}
                </span>

                <h3 className="mt-8 max-w-xl font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  {featuredEvent.title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-nav-muted sm:text-base">
                  {featuredEvent.description}
                </p>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-nav-fg">
                  View event
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-[var(--duration-base)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </div>

            <div className="border-t border-white/10 bg-white/4 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="grid gap-7">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-nav-muted">
                    Date
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {featuredEvent.date}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-nav-muted">
                    Time
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {featuredEvent.time}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-nav-muted">
                    Venue
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-lg font-semibold">
                    <MapPin size={17} className="text-accent" aria-hidden="true" />
                    {featuredEvent.venue}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </MotionReveal>

        {/* Upcoming events */}
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {upcomingEvents.map((event, index) => (
            <MotionReveal
              key={event.title}
              style={{ animationDelay: `${280 + index * 80}ms` }}
            >
              <Link
                href={`${siteRoutes.events}#event-${event.id}`}
                className="group block rounded-[var(--radius-lg)] border border-line bg-background p-5 transition-[transform,border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-1 hover:border-accent/30 hover:shadow-[var(--shadow-sm)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                    {event.category}
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-muted transition-[transform,color] duration-[var(--duration-base)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-8 text-base font-semibold text-foreground">
                  {event.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={13} aria-hidden="true" />
                    {event.date}
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} aria-hidden="true" />
                    {event.venue}
                  </span>
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>

        {/* All events */}
        <MotionReveal style={{ animationDelay: "540ms" }}>
          <div className="mt-10 flex justify-end">
            <Link
              href={siteRoutes.events}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              View all events
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
