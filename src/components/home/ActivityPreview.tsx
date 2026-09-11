import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Plus,
  Trophy,
} from "lucide-react";
import { MotionReveal } from "@/components/effects/motion-reveal";

const activities = [
  {
    title: "Web Development Workshop",
    type: "Workshop",
    date: "Sep 06, 2026",
    status: "Verified",
  },
  {
    title: "Campus Hack Challenge",
    type: "Competition",
    date: "Aug 28, 2026",
    status: "Verified",
  },
  {
    title: "Tech Community Meetup",
    type: "Community",
    date: "Aug 21, 2026",
    status: "Pending",
  },
];

const stats = [
  { value: "12", label: "Activities logged" },
  { value: "08", label: "Verified" },
  { value: "420", label: "Points earned" },
];

export function ActivityPreview() {
  return (
    <section className="border-b border-line bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <MotionReveal>
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Student Hub / Activity Logger
              </p>

              <div className="mt-5 h-px w-16 bg-accent" />
            </div>
          </MotionReveal>

          <MotionReveal style={{ animationDelay: "100ms" }}>
            <div>
              <h2 className="text-section max-w-3xl text-foreground">
                Your activities.{" "}
                <span className="text-accent">Your progress.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                Keep track of workshops, competitions, projects, and other
                activities that contribute to your student journey.
              </p>
            </div>
          </MotionReveal>
        </div>

        {/* Dashboard preview */}
        <MotionReveal style={{ animationDelay: "180ms" }}>
          <div className="mt-14 overflow-hidden rounded-[var(--radius-xl)] border border-line bg-surface shadow-[var(--shadow-md)]">
            {/* Dashboard header */}
            <div className="flex flex-col gap-4 border-b border-line p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Activity dashboard
                </p>

                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  Student Activity
                </h3>
              </div>

              <Link
                href="/activity"
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-accent px-4 text-sm font-medium text-on-accent transition-[transform,background-color] duration-[var(--duration-fast)] hover:-translate-y-0.5 hover:bg-accent-hover"
              >
                <Plus size={16} aria-hidden="true" />
                Log activity
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
              {stats.map((stat) => (
                <div key={stat.label} className="p-5 sm:p-7">
                  <p className="font-display text-2xl font-bold tracking-[-0.04em] text-foreground sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.1em] text-muted sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Activity list */}
            <div>
              {activities.map((activity, index) => (
                <div
                  key={activity.title}
                  className={`grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6 ${
                    index !== activities.length - 1
                      ? "border-b border-line"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-accent-soft text-accent">
                      {activity.status === "Verified" ? (
                        <CheckCircle2 size={17} aria-hidden="true" />
                      ) : (
                        <Clock3 size={17} aria-hidden="true" />
                      )}
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        {activity.title}
                      </h4>

                      <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-muted">
                        <span>{activity.type}</span>
                        <span aria-hidden="true">·</span>
                        <span>{activity.date}</span>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`w-fit rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] ${
                      activity.status === "Verified"
                        ? "bg-accent-soft text-accent"
                        : "bg-surface-2 text-muted"
                    }`}
                  >
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Dashboard footer */}
            <div className="flex flex-col gap-4 border-t border-line bg-background p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-center gap-2 text-xs text-muted">
                <Trophy size={15} className="text-accent" aria-hidden="true" />
                <span>Keep building your activity record.</span>
              </div>

              <Link
                href="/activity"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Open activity dashboard
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}