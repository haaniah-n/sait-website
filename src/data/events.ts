import type { ClubEvent } from "@/types";

export type DemoEvent = ClubEvent & {
  startTime: string;
  endTime: string;
  registration: "open" | "soon" | "closed";
  registrationNote: string;
  recap?: string;
};

// Fixed fictional schedule: dates/statuses are relative to this demo snapshot.
export const eventSnapshotDate = "2026-09-10";
export const eventCategoryLabels: Record<ClubEvent["kind"], string> = {
  workshop: "Workshop", hackathon: "Hackathon", talk: "Talk",
  social: "Community", competition: "Competition",
};

export function formatEventDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric", month: "short", year: "numeric", timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function formatEventTime(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return `${hours % 12 || 12}:${String(minutes).padStart(2, "0")} ${hours < 12 ? "AM" : "PM"}`;
}

// All events, venues, registration states, and recaps are mock content.
export const events: DemoEvent[] = [
  {
    id: "techsprint",
    title: "SAIT TechSprint",
    kind: "hackathon",
    status: "upcoming",
    date: "2026-09-12",
    startTime: "09:00", endTime: "17:00",
    location: "SOE, CUSAT",
    summary: "Turn a campus problem into a working prototype through a day of collaborative building, feedback, and short team demos.",
    tags: ["prototyping", "teamwork"],
    registration: "open",
    registrationNote: "The demo registration window closes on 10 September. Students would register as a team or express interest in finding one.",
  },
  {
    id: "git-workshop",
    title: "Intro to Git & Open Source",
    kind: "workshop",
    status: "upcoming",
    date: "2026-09-15",
    startTime: "14:00", endTime: "16:00",
    location: "IT Lab 2",
    summary: "Practise Git basics, review a pull request, and make a first contribution in a guided beginner session. Bring a laptop if available.",
    tags: ["git", "open-source"],
    registration: "open",
    registrationNote: "Individual sign-up would be available for this beginner workshop. No prior open-source experience is expected.",
  },
  {
    id: "web-workshop",
    title: "Web Development Workshop",
    kind: "workshop",
    status: "upcoming",
    date: "2026-09-18",
    startTime: "14:00", endTime: "17:00",
    location: "IT Lab",
    summary: "Build a small responsive page and explore the HTML, CSS, and JavaScript behind it. Learn by trying, with time for questions.",
    tags: ["web", "beginner"],
    registration: "open",
    registrationNote: "Individual sign-up would be available. This demo session is designed for students beginning web development.",
  },
  {
    id: "e-01",
    title: "SAIT HackNight: Campus Tools",
    kind: "hackathon",
    status: "upcoming",
    date: "2026-09-20",
    endDate: "2026-09-21",
    startTime: "09:00", endTime: "09:00",
    location: "SOE Seminar Hall",
    summary: "A 24-hour build sprint for student-facing campus utilities, with mentors from alumni and faculty.",
    tags: ["hackathon", "web", "open-source"],
    capacity: 80,
    registration: "open",
    registrationNote: "Team registration would close on 18 September in this demo schedule. The sprint runs overnight, ending at 9:00 AM on 21 September.",
  },
  {
    id: "meet-connect",
    title: "SAIT Meet & Connect",
    kind: "social",
    status: "upcoming",
    date: "2026-09-22",
    startTime: "16:00", endTime: "17:30",
    location: "SOE Seminar Hall",
    summary: "Meet the student teams, swap ideas, and find people who share your interests. A relaxed starting point for getting involved.",
    tags: ["community", "onboarding"],
    registration: "open",
    registrationNote: "An interest registration would help organisers plan the meetup. All years and experience levels are welcome in this demo format.",
  },
  {
    id: "code-challenge",
    title: "Code Challenge",
    kind: "competition",
    status: "upcoming",
    date: "2026-09-28",
    startTime: "10:00", endTime: "13:00",
    location: "IT Lab",
    summary: "Work through a timed set of programming problems, then compare approaches in a friendly solution walkthrough.",
    tags: ["programming", "problem-solving"],
    registration: "soon",
    registrationNote: "Registration would open on 14 September in this demo schedule. This is an individual programming challenge.",
  },
  {
    id: "web-foundations",
    title: "Web Development Workshop: Foundations",
    kind: "workshop", status: "past", date: "2026-09-06",
    startTime: "14:00", endTime: "16:00", location: "IT Lab",
    summary: "An introductory session on building a first web page.",
    tags: ["web", "beginner"], registration: "closed", registrationNote: "Past demo event; registration is closed.",
    recap: "Sample recap: participants built a simple page and exchanged feedback on its structure and readability.",
  },
  {
    id: "community-meetup",
    title: "Tech Community Meetup",
    kind: "social", status: "past", date: "2026-08-21",
    startTime: "16:00", endTime: "17:30", location: "SOE Seminar Hall",
    summary: "An informal exchange of student ideas and learning interests.",
    tags: ["community"], registration: "closed", registrationNote: "Past demo event; registration is closed.",
    recap: "Sample recap: students shared early project ideas and discussed what they wanted to learn together next.",
  },
  {
    id: "e-03",
    title: "Alumni Talk: Product Engineering at Scale",
    kind: "talk",
    status: "past",
    date: "2026-08-18",
    startTime: "17:00", endTime: "18:00",
    location: "Online + SOE",
    summary: "Placement-season conversation on internships, system design, and shipping in large teams.",
    tags: ["alumni", "careers"],
    registration: "closed",
    registrationNote: "Past demo event; registration is closed.",
    recap: "Sample recap: a fictional alumni conversation explored internships, engineering trade-offs, and learning within a product team.",
  },
];

export const upcomingEvents = events
  .filter((event) => event.status === "upcoming" && event.date >= eventSnapshotDate)
  .sort((a, b) => `${a.date}T${a.startTime}`.localeCompare(`${b.date}T${b.startTime}`));
export const nextEvent = upcomingEvents[0];
export const pastEvents = events.filter((event) => event.status === "past")
  .sort((a, b) => b.date.localeCompare(a.date));
