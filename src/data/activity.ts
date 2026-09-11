export const activityTypes = ["Hackathon", "Workshop", "Competition", "Project", "Volunteering", "Club / SAIT contribution", "Other"] as const;
export const activityRoles = ["Participant", "Organizer", "Volunteer", "Winner", "Speaker", "Team Member", "Lead"] as const;
export type ActivityType = (typeof activityTypes)[number];
export type ActivityRole = (typeof activityRoles)[number];
export type ActivityStatus = "Verified" | "Pending" | "Needs Review";

export type ActivityRecord = {
  id: string;
  title: string;
  date: string;
  type: ActivityType;
  role: ActivityRole;
  description: string;
  status: ActivityStatus;
  proofUrl?: string;
  proofFile?: { name: string; size: number };
  reviewNote?: string;
  demo: boolean;
};

// Fictional personal history. Verification and points are illustrative, not official.
export const activity: ActivityRecord[] = [
  { id: "personal-01", title: "Web Development Workshop: Foundations", date: "2026-09-06", type: "Workshop", role: "Participant", description: "Built a small responsive page and discussed accessibility with peers.", status: "Verified", demo: true },
  { id: "personal-02", title: "Campus Resource Prototype", date: "2026-09-04", type: "Project", role: "Team Member", description: "Helped organise resource categories and tested the prototype navigation.", status: "Pending", demo: true },
  { id: "personal-03", title: "Campus Hack Challenge", date: "2026-08-28", type: "Competition", role: "Participant", description: "Worked with a team to prototype a student-facing tool and present the approach.", status: "Verified", demo: true },
  { id: "personal-04", title: "Community Welcome Session", date: "2026-08-21", type: "Volunteering", role: "Volunteer", description: "Helped coordinate introductions and collect student interests.", status: "Needs Review", reviewNote: "Sample review note: provide evidence that identifies the activity and your role. No actual review takes place in this prototype.", demo: true },
];

export type CommunityActivity = {
  id: string;
  name: string;
  initials: string;
  title: string;
  date: string;
  type: ActivityType;
  role: ActivityRole;
  outcome: string;
};

// Separate fictional community records; personal submissions never enter this feed.
export const communityActivities: CommunityActivity[] = [
  { id: "community-01", name: "Tara Nandan", initials: "TN", title: "Web Development Workshop: Foundations", date: "2026-09-06", type: "Workshop", role: "Participant", outcome: "Built and explained a responsive page." },
  { id: "community-02", name: "Ishan Ravi", initials: "IR", title: "Web Development Workshop: Foundations", date: "2026-09-06", type: "Workshop", role: "Organizer", outcome: "Prepared exercises and helped run the session." },
  { id: "community-03", name: "Neha Kiran", initials: "NK", title: "Shared Campus Toolkit", date: "2026-09-05", type: "Project", role: "Team Member", outcome: "Contributed setup documentation and test notes." },
  { id: "community-04", name: "Rishi Dev", initials: "RD", title: "Peer Learning Hour", date: "2026-09-02", type: "Workshop", role: "Speaker", outcome: "Walked peers through a debugging exercise." },
  { id: "community-05", name: "Mira Talwar", initials: "MT", title: "Campus Hack Challenge", date: "2026-08-28", type: "Competition", role: "Participant", outcome: "Presented a working team prototype." },
];

export const communitySnapshotMonth = "2026-09";
export const demoPointsPerVerifiedActivity = 20;
