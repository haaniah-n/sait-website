import Link from "next/link";
import { ArrowUpRight, Bell, CalendarClock } from "lucide-react";
import { MotionReveal } from "@/components/effects/motion-reveal";

const announcements = [
  {
    type: "Deadline",
    date: "Sep 10",
    title: "Registration closes for SAIT TechSprint",
    description:
      "Submit your team details before registration closes.",
  },
  {
    type: "Event",
    date: "Sep 12",
    title: "SAIT TechSprint is happening this week",
    description:
      "Check the event page for schedule, venue, and participation details.",
  },
  {
    type: "Notice",
    date: "Sep 15",
    title: "Student activity submissions are open",
    description:
      "Students can now log workshops, competitions, projects, and other activities.",
  },
];

export function NotificationsPreview() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <MotionReveal>
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Updates / Announcements
              </p>

              <div className="mt-5 h-px w-16 bg-accent" />
            </div>
          </MotionReveal>

          <MotionReveal style={{ animationDelay: "100ms" }}>
            <div>
              <h2 className="text-section max-w-3xl text-foreground">
                Stay in the{" "}
                <span className="text-accent">loop.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                Important updates, deadlines, event reminders, and notices from
                the SAIT community.
              </p>
            </div>
          </MotionReveal>
        </div>

        <div className="mt-14">
          {announcements.map((announcement, index) => (
            <MotionReveal
              key={announcement.title}
              style={{ animationDelay: `${180 + index * 90}ms` }}
            >
              <article className="group grid gap-5 border-t border-line py-7 sm:grid-cols-[100px_1fr_auto] sm:items-center sm:gap-8">
                <div className="flex items-center gap-2 font-mono text-xs text-muted">
                  <CalendarClock size={14} aria-hidden="true" />
                  {announcement.date}
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-accent">
                      {announcement.type}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-foreground sm:text-lg">
                    {announcement.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                    {announcement.description}
                  </p>
                </div>

                <Link
                  href="/notifications"
                  aria-label={`Read ${announcement.title}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-[transform,border-color,color] duration-[var(--duration-base)] group-hover:-translate-y-1 group-hover:border-accent/40 group-hover:text-accent"
                >
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </article>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal style={{ animationDelay: "500ms" }}>
          <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
            <div className="flex items-center gap-2 text-sm text-muted">
              <Bell size={16} className="text-accent" aria-hidden="true" />
              <span>Never miss an important update.</span>
            </div>

            <Link
              href="/notifications"
              className="hidden items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent sm:inline-flex"
            >
              View all updates
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}