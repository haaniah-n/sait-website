import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-01",
    title: "Campus Lost & Found",
    summary: "A lightweight web app for SOE lost-and-found listings, with moderation by SAIT volunteers.",
    status: "active",
    tags: ["next.js", "community"],
    leads: ["Fahad Ali"],
  },
  {
    id: "proj-02",
    title: "Placement Prep Tracker",
    summary: "Shared problem sets, mock interview slots, and alumni Q&A for final-year IT students.",
    status: "idea",
    tags: ["careers", "product"],
    leads: ["Arjun Menon"],
  },
];
