import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Pin } from "lucide-react";
import { MotionReveal } from "@/components/effects/motion-reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { notifications, noticeSnapshotDate } from "@/data/notifications";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Notifications & Announcements",
  description:
    "A fictional SAIT announcement feed with important notices, event updates, and deadline reminders for the September 2026 demo schedule.",
};

const layout = "max-w-7xl sm:px-8 lg:px-10";
const label =
  "font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent";
const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});
const formatDate = (date: string) =>
  dateFormat.format(new Date(`${date}T00:00:00Z`));
const sortedNotices = [...notifications].sort((a, b) =>
  b.date.localeCompare(a.date),
);
const pinned = sortedNotices.filter((notice) => notice.pinned);
const latest = sortedNotices.filter((notice) => !notice.pinned);
const reminders = notifications
  .filter((notice) => notice.deadline && notice.deadline >= noticeSnapshotDate)
  .sort((a, b) => a.deadline!.localeCompare(b.deadline!));

export default function NotificationsPage() {
  return (
    <>
      <section
        aria-labelledby="notices-heading"
        className="border-b border-line bg-background"
      >
        <Container className={`${layout} py-12 sm:py-16`}>
          <MotionReveal>
            <p className={label}>Notifications / Announcements</p>
            <h1
              id="notices-heading"
              className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-foreground sm:text-5xl"
            >
              Stay in the loop.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              Important notices, upcoming deadlines, and the details that help
              you plan your next step in the SAIT community.
            </p>
            <p className="mt-5 max-w-3xl text-xs leading-6 text-muted">
              Demo announcement feed · September 2026. Notices and deadlines are
              illustrative and not official SAIT updates.
            </p>
          </MotionReveal>
        </Container>
      </section>

      <section
        aria-labelledby="pinned-heading"
        className="border-b border-line bg-surface"
      >
        <Container className={`${layout} py-10 sm:py-12`}>
          <MotionReveal>
            <h2
              id="pinned-heading"
              className="text-section flex items-center gap-3 text-foreground"
            >
              <Pin size={19} aria-hidden="true" className="text-accent" />
              Important notices
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {pinned.map((notice) => (
                <article
                  key={notice.id}
                  className="flex h-full flex-col rounded-[var(--radius-lg)] border border-line border-t-2 border-t-accent bg-background p-5 sm:p-6"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge tone="accent">{notice.category}</Badge>
                    <time
                      dateTime={notice.date}
                      className="font-mono text-xs text-muted"
                    >
                      {formatDate(notice.date)}
                    </time>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {notice.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {notice.body}
                  </p>
                  {notice.deadline && (
                    <p className="mt-4 text-sm font-medium text-foreground">
                      Demo deadline:{" "}
                      <time dateTime={notice.deadline}>
                        {formatDate(notice.deadline)}
                      </time>
                    </p>
                  )}
                  {notice.href && (
                    <div className="mt-auto pt-3">
                      <Link
                        href={notice.href}
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent-hover hover:text-foreground"
                      >
                        {notice.action}
                        <ArrowUpRight
                          size={16}
                          aria-hidden="true"
                          className="shrink-0"
                        />
                      </Link>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </MotionReveal>
        </Container>
      </section>

      <Container
        className={`${layout} grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_300px] lg:gap-12`}
      >
        <section aria-labelledby="latest-heading" className="min-w-0">
          <h2 id="latest-heading" className="text-section text-foreground">
            Latest updates
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            More announcements, newest first. Pinned notices appear above.
          </p>
          <ol className="mt-6 divide-y divide-line border-y border-line">
            {latest.map((notice) => (
              <li key={notice.id} className="py-6">
                <article className="grid gap-3 sm:grid-cols-[120px_1fr] sm:gap-6">
                  <time
                    dateTime={notice.date}
                    className="font-mono text-xs leading-6 text-muted"
                  >
                    {formatDate(notice.date)}
                  </time>
                  <div className="min-w-0">
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent-hover">
                      {notice.category}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-foreground">
                      {notice.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {notice.body}
                    </p>
                    {notice.href && (
                      <Link
                        href={notice.href}
                        className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground hover:text-accent-hover"
                      >
                        {notice.action}
                        <ArrowUpRight
                          size={15}
                          aria-hidden="true"
                          className="shrink-0"
                        />
                      </Link>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>
        <aside
          aria-labelledby="deadlines-heading"
          className="min-w-0 self-start rounded-[var(--radius-lg)] border border-line bg-surface p-5 sm:p-6"
        >
          <h2
            id="deadlines-heading"
            className="font-display text-xl font-semibold tracking-[-0.03em] text-foreground"
          >
            Dates to keep in mind
          </h2>
          <p className="mt-3 text-xs leading-6 text-muted">
            Upcoming dates from this demo schedule.
          </p>
          <ol className="mt-5 divide-y divide-line border-t border-line">
            {reminders.map((notice) => (
              <li key={notice.id} className="py-4 last:pb-0">
                <time
                  dateTime={notice.deadline}
                  className="font-mono text-sm font-semibold text-accent-hover"
                >
                  {formatDate(notice.deadline!)}
                </time>
                <h3 className="mt-2 text-sm font-medium leading-6 text-foreground">
                  {notice.title}
                </h3>
                {notice.href && (
                  <Link
                    href={notice.href}
                    className="mt-1 inline-flex min-h-11 items-center gap-2 text-xs font-medium text-muted hover:text-accent-hover"
                  >
                    {notice.action}
                    <ArrowUpRight
                      size={14}
                      aria-hidden="true"
                      className="shrink-0"
                    />
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </aside>
      </Container>

      <section
        aria-labelledby="next-heading"
        className="border-t border-line bg-surface"
      >
        <Container
          className={`${layout} flex flex-col gap-6 py-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between`}
        >
          <div>
            <h2 id="next-heading" className="text-section text-foreground">
              Find your next step.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
              Explore the event schedule, or reach out to SAIT with a question
              or an idea for the community.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={siteRoutes.events}
              variant="accent"
              className="h-auto min-h-11 py-3"
            >
              Explore events
              <ArrowUpRight size={16} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href={siteRoutes.contact}
              variant="secondary"
              className="h-auto min-h-11 py-3"
            >
              Contact SAIT
              <ArrowUpRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
