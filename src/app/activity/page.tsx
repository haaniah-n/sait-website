import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { ActivityDashboard } from "@/components/activity/activity-dashboard";
import { MotionReveal } from "@/components/effects/motion-reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Student Activity Logger",
  description: "A local SAIT activity logging prototype: record participation, track pending submissions, and explore fictional verified community activities.",
};

export default function ActivityPage() {
  return (
    <>
      <section aria-labelledby="activity-heading" className="border-b border-line bg-background">
        <Container className="max-w-7xl py-12 sm:px-8 sm:py-14 lg:px-10">
          <MotionReveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">Activity</p>
            <h1 id="activity-heading" className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-foreground sm:text-5xl">Take part.<br /><span className="text-accent">Keep track of your progress.</span></h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">Record what you learn, build, and contribute. Follow your submissions and explore the different ways students participate in the community.</p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">Frontend prototype: names, seed activities, verification, and points are fictional. Submitted entries, proof links, and file metadata are saved in this browser across refreshes and visits when local storage is available. Clearing browser data removes saved entries. Nothing is uploaded, submitted to SAIT, or actually verified.</p>
            <nav aria-label="Activity dashboard sections" className="mt-5 flex flex-wrap gap-x-6 gap-y-1">{[{ href: "#log-activity", title: "Log an activity" }, { href: "#history", title: "My activity history" }, { href: "#community-activity", title: "Community activity" }].map((item) => <a key={item.href} href={item.href} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent-hover hover:text-foreground">{item.title}<ArrowUpRight size={15} aria-hidden="true" /></a>)}</nav>
          </MotionReveal>
        </Container>
      </section>
      <ActivityDashboard />
      <section aria-labelledby="next-heading" className="bg-surface">
        <Container className="max-w-7xl py-10 sm:px-8 sm:py-12 lg:px-10">
          <h2 id="next-heading" className="text-section text-foreground">Find your next reason to take part.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">Join an event, explore a project, or meet the teams behind SAIT. There are many ways to contribute.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><ButtonLink href={siteRoutes.events} variant="accent">Explore events</ButtonLink><ButtonLink href={siteRoutes.projects} variant="secondary">Find a project</ButtonLink><ButtonLink href={siteRoutes.people} variant="ghost">Meet the community</ButtonLink></div>
        </Container>
      </section>
    </>
  );
}
