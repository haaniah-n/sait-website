import type { ClubEvent } from "@/types";

export const events: ClubEvent[] = [
  {
    id: "e-01",
    title: "SAIT HackNight: Campus Tools",
    kind: "hackathon",
    status: "upcoming",
    date: "2026-09-20",
    endDate: "2026-09-21",
    location: "SOE Seminar Hall",
    summary: "A 24-hour build sprint for student-facing campus utilities, with mentors from alumni and faculty.",
    tags: ["hackathon", "web", "open-source"],
    capacity: 80,
  },
  {
    id: "e-02",
    title: "Intro to Git & Open Source",
    kind: "workshop",
    status: "upcoming",
    date: "2026-09-12",
    location: "IT Lab 2",
    summary: "Hands-on Git, GitHub flow, and a first good-first-issue session with the projects guild.",
    tags: ["workshop", "git"],
    capacity: 40,
  },
  {
    id: "e-03",
    title: "Alumni Talk: Product Engineering at Scale",
    kind: "talk",
    status: "past",
    date: "2026-08-18",
    location: "Online + SOE",
    summary: "Placement-season conversation on internships, system design, and shipping in large teams.",
    tags: ["alumni", "careers"],
  },
];
