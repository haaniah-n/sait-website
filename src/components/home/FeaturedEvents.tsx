import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { EventPulse } from "@/components/events/event-interactions";
import { nextEvent, upcomingEvents, pastEvents, eventCategoryLabels, formatEventDate, formatEventTime } from "@/data/events";
import "@/app/events/events.css";
import "./home-events.css";

const date = new Date(`${nextEvent.date}T00:00:00Z`);
const longDate = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(date);
const month = new Intl.DateTimeFormat("en-GB", { month: "short", timeZone: "UTC" }).format(date);

export function FeaturedEvents() {
  return <section className="home-events home-event-pulse border-b border-line bg-surface" aria-labelledby="home-events-heading">
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="home-events-intro">
        <span className="events-outline" aria-hidden="true">EVENTS</span>
        <div>
          <p className="events-eyebrow">03 / Events / What&apos;s happening</p>
          <span className="events-short-rule" aria-hidden="true" />
          <h2 id="home-events-heading">Ideas become<br /><span>experiences.</span></h2>
        </div>
        <p className="events-intro">Discover workshops, competitions, meetups, and experiences happening across the SAIT community.</p>
      </div>
      <EventPulse />
      <article className="event-poster home-event-poster" aria-labelledby="home-featured-event">
        <div className="event-poster-photo" aria-hidden="true">
          <Image src="/images/sait-hero-campus-dark.png" alt="" fill sizes="(max-width: 767px) 100vw, 65vw" className="poster-photo-dark" />
          <Image src="/images/sait-hero-campus-light.png" alt="" fill sizes="(max-width: 767px) 100vw, 65vw" className="poster-photo-light" />
        </div>
        <div className="poster-heading">
          <p className="poster-tag">Next up · {eventCategoryLabels[nextEvent.kind]}</p>
          <h3 id="home-featured-event">SAIT<br />{nextEvent.title.replace(/^SAIT\s+/, "")}</h3>
        </div>
        <time className="poster-date" dateTime={nextEvent.date} aria-label={longDate}>
          <span className="poster-day" aria-hidden="true">{date.getUTCDate()}</span>
          <span className="poster-month" aria-hidden="true">{month}</span>
          <span className="poster-year" aria-hidden="true">{date.getUTCFullYear()}</span>
        </time>
        <div className="poster-body">
          <p>{nextEvent.summary}</p>
          <div className="poster-metadata">
            <span className="poster-full-date"><CalendarDays size={16} aria-hidden="true" />{longDate}</span>
            <span><Clock3 size={16} aria-hidden="true" />{formatEventTime(nextEvent.startTime)} IST</span>
            <span><MapPin size={16} aria-hidden="true" />{nextEvent.location}</span>
          </div>
          <Link className="poster-cta" href="/events#next-up">View event <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="poster-aside" aria-hidden="true"><p>Ideas<br />People<br />Technology<br />Impact</p><span /></div>
      </article>
      <div className="home-events-upcoming">
        <div className="events-section-heading"><h3>Upcoming Events</h3><span className="upcoming-count">03 upcoming</span></div>
        <ol className="home-events-timeline">
          {upcomingEvents.slice(1, 4).map(event => <li key={event.id}>
            <Link href={`/events#event-${event.id}`} className="home-timeline-entry">
              <time dateTime={event.date}><strong>{event.date.slice(-2)}</strong><span>SEP</span></time>
              <span className="home-timeline-marker" aria-hidden="true"><i /></span>
              <h4>{event.title}</h4>
              <span className="timeline-category">{eventCategoryLabels[event.kind]}</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </li>)}
        </ol>
      </div>
      <div className="home-events-past">
        <div className="home-past-heading"><h3>Past / Recent moments</h3><Link href="/events#archive">Explore past events <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
        <div className="home-moments">
          {pastEvents.slice(0, 2).map((event,index) => <Link href="/events#archive" key={event.id} className="home-moment">
            <span className="home-moment-number" aria-hidden="true">{String(index+1).padStart(2,"0")}</span>
            <span className="timeline-category">{eventCategoryLabels[event.kind]}</span>
            <h4>{event.title}</h4>
            <time dateTime={event.date}>{formatEventDate(event.date)}</time>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>)}
        </div>
      </div>
      <div className="home-events-all"><Link href="/events">Explore all events <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
    </div>
  </section>;
}
