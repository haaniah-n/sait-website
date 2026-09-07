import type { CareerOpportunity } from "@/types";

export const careers: CareerOpportunity[] = [
  {
    id: "c-01",
    title: "Software Engineering Intern",
    organization: "Nexora Labs",
    type: "internship",
    location: "Bengaluru / Hybrid",
    postedAt: "2026-09-01",
    deadline: "2026-09-25",
    summary: "Work on a TypeScript product surface with a small platform team. Referral available via SAIT alumni.",
    tags: ["internship", "typescript", "referral"],
  },
  {
    id: "c-02",
    title: "Research Intern — NLP",
    organization: "CUSAT Language Lab",
    type: "fellowship",
    location: "Kochi",
    postedAt: "2026-08-28",
    summary: "Semester-long research assistant role supporting Malayalam language models and eval datasets.",
    tags: ["research", "nlp"],
  },
];
