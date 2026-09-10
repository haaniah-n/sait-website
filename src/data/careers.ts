import type { CareerOpportunity } from "@/types";

type DemoOpportunity = Omit<CareerOpportunity, "type"> & {
  type: "Internship" | "Student developer" | "Campus project" | "Competition" | "Research" | "Mentorship";
  audience: string;
  timeframe: string;
  status: "open" | "soon";
};

export const careerSnapshotDate = "2026-09-10";

// Fictional demo listings only: no real vacancies, partnerships, or applications.
export const careers: DemoOpportunity[] = [
  {
    id: "c-01",
    title: "Software Engineering Intern",
    organization: "Nexora Labs",
    type: "Internship",
    location: "Bengaluru / Hybrid",
    postedAt: "2026-09-01",
    deadline: "2026-09-25",
    summary: "Explore a fictional product engineering internship focused on small TypeScript features, code reviews, and documenting what you learn.",
    tags: ["TypeScript", "Web"],
    audience: "IT students with a small web project to discuss",
    timeframe: "Eight-week internship concept",
    status: "open",
  },
  {
    id: "c-02",
    title: "Research Intern — NLP",
    organization: "Student Language Research Collective",
    type: "Research",
    location: "Remote / flexible",
    postedAt: "2026-08-28",
    deadline: "2026-10-02",
    summary: "A fictional research opportunity to compare small language models, document experiments, and learn how to evaluate results carefully.",
    tags: ["research", "nlp"],
    audience: "Students comfortable with Python and interested in research",
    timeframe: "Semester-long study concept",
    status: "open",
  },
  {
    id: "c-03", title: "Student Developer: Shared Tools", organization: "Student Tools Collective",
    type: "Student developer", location: "Remote collaboration",
    postedAt: "2026-09-03", deadline: "2026-09-20",
    summary: "Practise contributing to a shared codebase through small interface improvements, documentation, and peer review in a fictional student team.",
    tags: ["Git", "Frontend"], audience: "Students with basic HTML, CSS, and Git familiarity",
    timeframe: "Six-week collaboration concept", status: "open",
  },
  {
    id: "c-04", title: "Campus Resource Map", organization: "Campus Build Circle",
    type: "Campus project", location: "Campus / flexible",
    postedAt: "2026-09-05", deadline: "2026-09-22",
    summary: "Help shape a mock directory of useful student resources. Explore research, design, coding, or testing as part of a small project team.",
    tags: ["Design", "Teamwork"], audience: "All years; beginners can contribute research and testing",
    timeframe: "Four-week project concept", status: "open",
  },
  {
    id: "c-05", title: "Student Systems Challenge", organization: "Prototype Challenge Circle",
    type: "Competition", location: "Online",
    postedAt: "2026-09-07", deadline: "2026-10-05",
    summary: "A fictional team challenge to propose, build, and explain a small tool that makes an everyday workflow easier.",
    tags: ["Problem solving", "Presentation"], audience: "Student teams across experience levels",
    timeframe: "Demo registration opens 18 September", status: "soon",
  },
  {
    id: "c-06", title: "First Internship: A Career Conversation", organization: "Peer & Alumni Learning Circle",
    type: "Mentorship", location: "Online conversation",
    postedAt: "2026-09-08", deadline: "2026-09-28",
    summary: "A mock small-group session on choosing a first internship, explaining a project, and asking useful questions about a role.",
    tags: ["Career guidance", "Communication"], audience: "Students exploring their first internship",
    timeframe: "Demo session on 30 September; interest opens 15 September", status: "soon",
  },
];
