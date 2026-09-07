export type NavItem = {
  label: string;
  href: string;
};

export type PersonRole =
  | "faculty"
  | "core"
  | "lead"
  | "member"
  | "alumni";

export type Person = {
  id: string;
  name: string;
  role: PersonRole;
  title: string;
  year?: string;
  department: string;
  bio: string;
  skills: string[];
  email?: string;
  linkedin?: string;
  github?: string;
};

export type EventKind = "workshop" | "hackathon" | "talk" | "social" | "competition";

export type EventStatus = "upcoming" | "ongoing" | "past";

export type ClubEvent = {
  id: string;
  title: string;
  kind: EventKind;
  status: EventStatus;
  date: string;
  endDate?: string;
  location: string;
  summary: string;
  tags: string[];
  capacity?: number;
};

export type CareerOpportunity = {
  id: string;
  title: string;
  organization: string;
  type: "internship" | "full-time" | "referral" | "fellowship";
  location: string;
  postedAt: string;
  deadline?: string;
  summary: string;
  tags: string[];
};

export type Alumni = {
  id: string;
  name: string;
  batch: string;
  currentRole: string;
  company: string;
  story: string;
};

export type Achievement = {
  id: string;
  title: string;
  year: string;
  category: "competition" | "research" | "community" | "placement";
  description: string;
};

export type ActivityPost = {
  id: string;
  title: string;
  date: string;
  kind: "update" | "recap" | "announcement";
  excerpt: string;
};

export type NotificationItem = {
  id: string;
  title: string;
  body: string;
  date: string;
  category: "event" | "career" | "general";
  href?: string;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  status: "active" | "shipped" | "idea";
  tags: string[];
  leads: string[];
};

export type ExploreItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  category: "community" | "learning" | "opportunity";
};
