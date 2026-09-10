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

/**
 * Primary navigation
 *
 * Keep this intentionally small.
 * Individual section pages will handle deeper navigation.
 */
export const desktopNav: NavItem[] = [
  { label: "Explore", href: siteRoutes.explore },
  { label: "Community", href: siteRoutes.people },
  { label: "Events", href: siteRoutes.events },
  { label: "Opportunities", href: siteRoutes.careers },
  { label: "Activity", href: siteRoutes.activity },
  { label: "About", href: siteRoutes.about },
];

/**
 * Mobile navigation
 *
 * Mobile gets the same primary structure, with utility links below.
 */
export const mobileNav: NavItem[] = [
  ...desktopNav,
  { label: "Notifications", href: siteRoutes.notifications },
  { label: "Contact", href: siteRoutes.contact },
];