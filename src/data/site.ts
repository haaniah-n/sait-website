import type { NavItem } from "@/types";
import { siteRoutes } from "@/lib/routes";

export const site = {
  shortName: "SAIT",
  name: "Students Association of Information Technology",
  division: "Division of Information Technology",
  school: "School of Engineering, CUSAT",
  university: "Cochin University of Science and Technology",
  tagline: "Build, learn, and ship with CUSAT’s IT community.",
  description:
    "SAIT is the student community of the Division of Information Technology at the School of Engineering, CUSAT — workshops, projects, careers, and alumni in one place.",
  email: "sait@cusat.ac.in",
  location: "SOE, CUSAT, Kochi",
  locationUrl:
  "https://www.google.com/maps/search/?api=1&query=School+of+Engineering+CUSAT+Kochi",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
} as const;

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Community",
    items: [
      { label: "About", href: siteRoutes.about },
      { label: "People", href: siteRoutes.people },
      { label: "Alumni", href: siteRoutes.alumni },
      { label: "Contact", href: siteRoutes.contact },
    ],
  },
  {
    heading: "Happenings",
    items: [
      { label: "Events", href: siteRoutes.events },
      { label: "Activity", href: siteRoutes.activity },
      { label: "Achievements", href: siteRoutes.achievements },
      { label: "Notifications", href: siteRoutes.notifications },
    ],
  },
  {
    heading: "Opportunities",
    items: [
      { label: "Projects", href: siteRoutes.projects },
      { label: "Careers", href: siteRoutes.careers },
      { label: "Explore", href: siteRoutes.explore },
    ],
  },
];
