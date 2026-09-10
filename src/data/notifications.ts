import type { NotificationItem } from "@/types";
import { siteRoutes } from "@/lib/routes";

type Announcement = Omit<NotificationItem, "category"> & {
  category: "Event" | "Registration" | "Deadline" | "Academic" | "Community" | "General";
  pinned?: boolean;
  deadline?: string;
  action?: string;
};

export const noticeSnapshotDate = "2026-09-10";

// Fictional notices and deadlines, aligned with the September 2026 demo schedule.
export const notifications: Announcement[] = [
  {
    id: "techsprint-reminder", title: "TechSprint registration reminder",
    body: "The demo registration window closes on 10 September for the 12 September build sprint. Review the event format, time, and venue; registration is a preview only.",
    date: "2026-09-10", category: "Deadline", pinned: true, deadline: "2026-09-10",
    href: `${siteRoutes.events}#next-up`, action: "Review TechSprint details",
  },
  {
    id: "n-01",
    title: "HackNight registrations open",
    body: "The mock Campus Tools hackathon has a team registration deadline of 18 September. The overnight sprint is scheduled for 20–21 September in the demo calendar.",
    date: "2026-09-06",
    category: "Registration", pinned: true, deadline: "2026-09-18",
    href: `${siteRoutes.events}#event-e-01`, action: "Review HackNight details",
  },
  {
    id: "n-02",
    title: "New internship posted",
    body: "A fictional software engineering internship from Nexora Labs is listed on the demo opportunity board, with a 25 September deadline. No real vacancy or application is offered.",
    date: "2026-09-05",
    category: "Deadline", deadline: "2026-09-25",
    href: siteRoutes.careers, action: "Explore demo opportunities",
  },
  {
    id: "n-03",
    title: "Bring an idea for the community",
    body: "This sample announcement invites students to suggest a workshop or community activity. Explore the teams to see where your interests might fit.",
    date: "2026-09-03",
    category: "General", href: siteRoutes.people, action: "Meet the SAIT teams",
  },
  {
    id: "git-session", title: "A first step into Git and open source",
    body: "The demo Git workshop is scheduled for 15 September, 2:00–4:00 PM IST, in IT Lab 2. The beginner session introduces branches, pull requests, and a guided contribution.",
    date: "2026-09-09", category: "Event",
    href: `${siteRoutes.events}#event-git-workshop`, action: "See workshop details",
  },
  {
    id: "research-preparation", title: "Start with a research question",
    body: "A sample academic notice points students toward the research opportunity and preparation resources in the careers hub. All opportunity details are illustrative, not institutional instructions.",
    date: "2026-09-08", category: "Academic",
    href: siteRoutes.careers, action: "Explore research and preparation",
  },
  {
    id: "meet-connect", title: "Find your people at Meet & Connect",
    body: "The fictional community meetup is scheduled for 22 September, 4:00–5:30 PM IST, in SOE Seminar Hall. Get to know the teams and the interests students bring to SAIT.",
    date: "2026-09-07", category: "Community",
    href: `${siteRoutes.events}#event-meet-connect`, action: "Explore the meetup",
  },
];
