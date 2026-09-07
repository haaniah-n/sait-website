import type { NavItem } from "@/types";

export const siteRoutes = {
  home: "/",
  about: "/about",
  people: "/people",
  events: "/events",
  careers: "/careers",
  alumni: "/alumni",
  achievements: "/achievements",
  activity: "/activity",
  notifications: "/notifications",
  contact: "/contact",
  projects: "/projects",
  explore: "/explore",
} as const;

export const desktopNav: NavItem[] = [
  { label: "Home", href: siteRoutes.home },
  { label: "About", href: siteRoutes.about },
  { label: "People", href: siteRoutes.people },
  { label: "Events", href: siteRoutes.events },
  { label: "Careers", href: siteRoutes.careers },
  { label: "Alumni", href: siteRoutes.alumni },
];

export const moreNav: NavItem[] = [
  { label: "Achievements", href: siteRoutes.achievements },
  { label: "Activity", href: siteRoutes.activity },
  { label: "Projects", href: siteRoutes.projects },
  { label: "Explore", href: siteRoutes.explore },
];

export const mobileNav: NavItem[] = [
  ...desktopNav,
  ...moreNav,
  { label: "Notifications", href: siteRoutes.notifications },
  { label: "Contact", href: siteRoutes.contact },
];
