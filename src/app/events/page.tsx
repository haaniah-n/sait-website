import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { eventCategoryLabels, eventSnapshotDate, formatEventDate, formatEventTime, nextEvent, pastEvents, upcomingEvents, type DemoEvent } from "@/data/events";
import { ArchiveGallery, EventDetails, EventPulse } from "@/components/events/event-interactions";
import "./events.css";

export const metadata: Metadata = {
  title: "Events & Activities",
  description: "Discover SAIT workshops, competitions, meetups, and community experiences. Explore the illustrative September 2026 event schedule.",
};
const layout = "max-w-7xl sm:px-8 lg:px-10";
// Page-specific concept schedule from the approved reference; shared site data stays unchanged.
const referenceDetails: Record<string, Partial<DemoEvent>> = {
  "git-workshop": { startTime: "10:00", endTime: "12:00", summary: "Learn the basics, contribute, and be part of open source." },
  "web-workshop": { summary: "Build, learn, and create real projects with modern tools." },
  "e-01": { startTime: "18:00", endTime: "23:00", endDate: undefined, summary: "A night of innovation to build tools for a better campus.", registrationNote: "Team registration would close on 18 September in this demo schedule." },
};
const schedule = upcomingEvents.slice(1, 4).map(event => ({ ...event, ...referenceDetails[event.id] }));
const month = new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${eventSnapshotDate}T00:00:00Z`)).replace("Sept", "Sep").replace(" ", " / ");
const nextDate = new Date(`${nextEvent.date}T00:00:00Z`);
const longDate = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(nextDate);

export default function EventsPage() {
  return <div className="events-page" id="events-top">
    <Container className={layout}>
      <section className="events-hero" aria-labelledby="events-heading">
        <div className="events-outline" aria-hidden="true">EVENTS</div>
        <div className="events-hero-copy">
          <p className="events-eyebrow">03 / Events / What&apos;s happening</p>
          <span className="events-short-rule" aria-hidden="true" />
          <h1 id="events-heading">Ideas become<br /><span>experiences.</span></h1>
          <p className="events-intro">Discover workshops, competitions, meetups, and experiences happening across the SAIT community.</p>
        </div>
        <a href="#next-up" className="events-context"><strong>{month}</strong><span>What&apos;s next? <ArrowDown size={15} aria-hidden="true" /></span></a>
      </section>
      <EventPulse />

      <section id="next-up" className="events-next" aria-labelledby="next-heading">
        <article className="event-poster">
          <div className="event-poster-photo" aria-hidden="true">
            <Image src="/images/sait-hero-campus-dark.png" alt="" fill sizes="(max-width: 767px) 100vw, 65vw" className="poster-photo-dark" />
            <Image src="/images/sait-hero-campus-light.png" alt="" fill sizes="(max-width: 767px) 100vw, 65vw" className="poster-photo-light" />
          </div>
          <div className="poster-heading">
            <p className="poster-tag">Next up · {eventCategoryLabels[nextEvent.kind]}</p>
            <h2 id="next-heading">{nextEvent.title}</h2>
          </div>
          <time dateTime={nextEvent.date} className="poster-date" aria-label={longDate}>
            <span className="poster-day" aria-hidden="true">{nextDate.getUTCDate()}</span>
            <span className="poster-month" aria-hidden="true">{new Intl.DateTimeFormat("en-GB", {month:"short",timeZone:"UTC"}).format(nextDate)}</span>
            <span className="poster-year" aria-hidden="true">{nextDate.getUTCFullYear()}</span>
          </time>
          <div className="poster-body">
            <p>{nextEvent.summary}</p>
            <div className="poster-metadata">
              <span className="poster-full-date"><CalendarDays size={17} aria-hidden="true" />{longDate}</span>
              <span><Clock3 size={17} aria-hidden="true" />{formatEventTime(nextEvent.startTime)} IST</span>
              <span><MapPin size={17} aria-hidden="true" />{nextEvent.location}</span>
            </div>
            <EventDetails event={nextEvent} className="poster-cta">View event <ArrowUpRight size={17} aria-hidden="true" /></EventDetails>
          </div>
          <div className="poster-aside" aria-hidden="true"><p>Ideas<br />People<br />Technology<br />Impact</p><span /><small>/ Together<br />for a brighter<br />campus</small></div>
        </article>
      </section>

      <section id="upcoming" className="events-upcoming" aria-labelledby="upcoming-heading">
        <div className="events-section-heading"><h2 id="upcoming-heading">Upcoming Events</h2><span className="upcoming-count">{String(schedule.length).padStart(2, "0")} upcoming <ArrowRight size={20} aria-hidden="true" /></span></div>
        <ol className="events-timeline">
          {schedule.map(event => <li id={`event-${event.id}`} key={event.id}>
            <EventDetails event={event} className="timeline-entry">
              <time dateTime={event.date} className="timeline-date"><strong>{event.date.slice(-2)}</strong><span>Sep</span></time>
              <span className="timeline-marker" aria-hidden="true"><i /></span>
              <span className="timeline-info"><span className="timeline-category">{eventCategoryLabels[event.kind]}</span><span className="timeline-title">{event.title}</span><span className="timeline-summary">{event.summary}</span></span>
              <span className="timeline-meta"><span><MapPin size={15} aria-hidden="true" />{event.location}</span><span><Clock3 size={15} aria-hidden="true" />{formatEventTime(event.startTime)} – {formatEventTime(event.endTime)}</span></span>
              <ArrowUpRight className="timeline-arrow" size={20} aria-hidden="true" />
            </EventDetails>
          </li>)}
        </ol>
      </section>

      <section id="archive" className="events-archive" aria-labelledby="archive-heading">
        <ArchiveGallery>
          <div className="event-gallery-track">
            {[0, 1].map(copy => <div className="event-gallery-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {pastEvents.map((event,index) => <article key={event.id} className="event-gallery-card">
                <div className="event-gallery-visual">
                  <div className="event-gallery-number" aria-hidden="true">{String(index+1).padStart(2,"0")}</div>
                  <p className="archive-category">{eventCategoryLabels[event.kind]}</p>
                  <h3>{event.title}</h3>
                  <time dateTime={event.date}>{formatEventDate(event.date)}</time>
                  <p className="archive-recap">{event.recap}</p>
                </div>
              </article>)}
            </div>)}
          </div>
        </ArchiveGallery>
      </section>
      <div className="events-end"><p><span aria-hidden="true" />Same people. More possibilities.</p><a href="#events-top">Back to top <ArrowUp size={14} aria-hidden="true" /></a></div>
      <p className="events-demo-note">Illustrative September 2026 schedule · prototype event archive</p>
    </Container>
  </div>;
}
