import type { Project } from "@/types";

type ShowcaseProject = Project & {
  problem: string;
  category: string;
  technologies: string[];
  featured: boolean;
  highlights: string[];
};

// Fictional showcase content. Statuses describe mock projects, not live products.
export const projects: ShowcaseProject[] = [
  {
    id: "nexa",
    title: "Nexa",
    problem: "Less time finding your notes. More time making sense of them.",
    summary: "An AI study companion that brings learning resources, revision plans, and everyday student workflows into one place.",
    category: "AI · Education",
    status: "active",
    tags: ["AI", "Campus Tools"],
    technologies: ["Next.js", "Python", "FastAPI"],
    leads: [],
    featured: true,
    highlights: ["Organise course resources", "Ask questions with source references", "Plan a focused revision session"],
  },
  {
    id: "campusflow",
    title: "CampusFlow",
    problem: "Campus has a lot going on. Finding it should be easy.",
    summary: "A student-focused platform for discovering campus spaces, services, activities, and opportunities in one place.",
    category: "Web · Smart Campus",
    status: "active",
    tags: ["Web", "Campus Tools"],
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    leads: [],
    featured: true,
    highlights: ["Discover campus spaces", "Browse activities and opportunities", "Save useful services"],
  },
  {
    id: "codevault",
    title: "CodeVault",
    problem: "Good solutions deserve a life beyond the group chat.",
    summary: "A collaborative space for students to share code, useful resources, and learning experiments.",
    category: "Developer Tools · Collaboration",
    status: "shipped",
    tags: ["Web"],
    technologies: ["React", "Node.js", "SQLite"],
    leads: [],
    featured: true,
    highlights: ["Collect reusable snippets", "Share learning notes", "Find resources by topic"],
  },
  {
    id: "proj-01",
    title: "Campus Lost & Found",
    summary: "A lightweight web app for SOE lost-and-found listings, with moderation by SAIT volunteers.",
    problem: "Help misplaced things find their way back.",
    category: "Campus Tools",
    status: "active",
    tags: ["Web", "Campus Tools"],
    technologies: ["Next.js", "SQLite"],
    leads: [],
    featured: false,
    highlights: [],
  },
  {
    id: "proj-02",
    title: "Placement Prep Tracker",
    summary: "Shared problem sets, mock interview slots, and alumni Q&A for final-year IT students.",
    problem: "Make placement preparation a shared habit.",
    category: "Web · Careers",
    status: "idea",
    tags: ["Web", "Campus Tools"],
    technologies: ["React", "TypeScript"],
    leads: [],
    featured: false,
    highlights: [],
  },
  {
    id: "queuekit",
    title: "QueueKit",
    problem: "Spend the break with friends, not in a queue.",
    summary: "A mobile experiment for joining a campus service queue and checking your turn without waiting at the counter.",
    category: "Mobile · Campus Tools",
    status: "idea",
    tags: ["Mobile", "Campus Tools"],
    technologies: ["Flutter", "Firebase"],
    leads: [],
    featured: false,
    highlights: [],
  },
  {
    id: "labpulse",
    title: "LabPulse",
    problem: "Spot a lab issue before it interrupts a session.",
    summary: "A systems prototype that gathers workstation health signals into a simple dashboard for a teaching lab.",
    category: "Systems",
    status: "active",
    tags: ["Systems", "Web"],
    technologies: ["Python", "Linux", "MQTT"],
    leads: [],
    featured: false,
    highlights: [],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
