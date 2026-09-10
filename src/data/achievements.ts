import type { Achievement } from "@/types";

type HallOfFameAchievement = Achievement & {
  categoryLabel: string;
  date: string;
  result: string;
  contributor: string;
  spotlight: boolean;
};

// Entirely fictional showcase records, including events, teams, dates, and results.
// Replace with verified records before presenting these as actual SAIT achievements.
export const achievements: HallOfFameAchievement[] = [
  {
    id: "innovation-challenge",
    title: "National Innovation Challenge",
    year: "2026",
    category: "competition",
    categoryLabel: "Hackathon",
    date: "2026-08-22",
    result: "1st Place",
    contributor: "Team Paperplane",
    description: "A student team turned a technology concept into a working prototype during a rapid-build challenge.",
    spotlight: true,
  },
  {
    id: "code-arena",
    title: "Inter-College Code Arena",
    year: "2026",
    category: "competition",
    categoryLabel: "Technical Competition",
    date: "2026-07-18",
    result: "Finalist",
    contributor: "Team Loopcraft",
    description: "Students competed against teams from across the region through problem-solving and programming challenges.",
    spotlight: true,
  },
  {
    id: "research-showcase",
    title: "Student Research Showcase",
    year: "2025",
    category: "research",
    categoryLabel: "Academic Excellence",
    date: "2025-11-14",
    result: "Best Project",
    contributor: "Team Small Signals",
    description: "A student-led technical project was recognised for its approach, implementation, and practical potential.",
    spotlight: true,
  },
  {
    id: "student-systems-review",
    title: "Small models, thoughtful experiments",
    year: "2026",
    category: "research",
    categoryLabel: "Research / Publications",
    date: "2026-06-12",
    result: "Paper accepted",
    contributor: "Student Systems Circle",
    description: "A study of lightweight text models was accepted into the fictional Student Systems Review, with experiments documented for others to reproduce.",
    spotlight: false,
  },
  {
    id: "open-tools-week",
    title: "A first contribution, made together",
    year: "2026",
    category: "community",
    categoryLabel: "Open-source Contribution",
    date: "2026-03-07",
    result: "Community release",
    contributor: "Open Tools Collective",
    description: "A peer-led build week brought code, documentation, and accessibility improvements into a shared campus resource toolkit.",
    spotlight: false,
  },
  {
    id: "peer-learning-series",
    title: "From learning a concept to teaching it",
    year: "2025",
    category: "community",
    categoryLabel: "Peer Learning",
    date: "2025-09-20",
    result: "Learning series completed",
    contributor: "Study Together Crew",
    description: "Students created a beginner-friendly series on programming fundamentals and published their practice notes for the next batch.",
    spotlight: false,
  },
  {
    id: "prototype-forum",
    title: "An experiment ready for its first audience",
    year: "2025",
    category: "competition",
    categoryLabel: "Technical Competition",
    date: "2025-02-15",
    result: "Jury mention",
    contributor: "Team Patchwork",
    description: "A student-built interface for navigating shared study resources earned a jury mention at the fictional Campus Prototype Forum.",
    spotlight: false,
  },
];

export const spotlightAchievements = achievements.filter((achievement) => achievement.spotlight);
