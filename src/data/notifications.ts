import type { NotificationItem } from "@/types";

export const notifications: NotificationItem[] = [
  {
    id: "n-01",
    title: "HackNight registrations open",
    body: "Campus Tools hackathon registrations are live until 18 September.",
    date: "2026-09-06",
    category: "event",
    href: "/events",
  },
  {
    id: "n-02",
    title: "New internship posted",
    body: "Nexora Labs is hiring software engineering interns. Deadline 25 September.",
    date: "2026-09-05",
    category: "career",
    href: "/careers",
  },
  {
    id: "n-03",
    title: "General body meeting",
    body: "Semester kickoff GBM in IT seminar hall, Thursday 4:30 PM.",
    date: "2026-09-03",
    category: "general",
  },
];
