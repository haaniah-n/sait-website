import type { ExploreItem } from "@/types";
import { siteRoutes } from "@/lib/routes";

export const exploreItems: ExploreItem[] = [
  {
    id: "x-01",
    title: "Join a guild",
    description: "Web, ML, design, and competitive programming circles with weekly build hours.",
    href: siteRoutes.people,
    category: "community",
  },
  {
    id: "x-02",
    title: "Pick up a project",
    description: "Browse active student builds looking for contributors this semester.",
    href: siteRoutes.projects,
    category: "learning",
  },
  {
    id: "x-03",
    title: "Find internships",
    description: "Referrals, campus drives, and alumni-shared roles in one board.",
    href: siteRoutes.careers,
    category: "opportunity",
  },
];
