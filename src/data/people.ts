import type { Person } from "@/types";

export const people: Person[] = [
  {
    id: "p-faculty-01",
    name: "Dr. Anitha Krishnan",
    role: "faculty",
    title: "Faculty Advisor",
    department: "Division of Information Technology",
    bio: "Guides SAIT’s academic partnerships, mentorship circles, and student research showcases.",
    skills: ["Mentorship", "Systems", "Research"],
    email: "anitha.krishnan@cusat.ac.in",
  },
  {
    id: "p-core-01",
    name: "Arjun Menon",
    role: "core",
    title: "Chairperson",
    year: "2026",
    department: "B.Tech IT",
    bio: "Coordinates chapter operations, sponsor relations, and the yearly tech fest calendar.",
    skills: ["Leadership", "Product", "Public speaking"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    id: "p-core-02",
    name: "Niveditha R.",
    role: "core",
    title: "Vice Chairperson",
    year: "2026",
    department: "B.Tech IT",
    bio: "Owns community onboarding, volunteer ops, and cross-club collaborations on campus.",
    skills: ["Community", "Ops", "Design"],
  },
  {
    id: "p-lead-01",
    name: "Fahad Ali",
    role: "lead",
    title: "Technical Lead",
    year: "2027",
    department: "B.Tech IT",
    bio: "Runs the project guild and weekend build sessions for web, ML, and systems tracks.",
    skills: ["Next.js", "Python", "DevRel"],
    github: "https://github.com",
  },
  {
    id: "p-member-01",
    name: "Meera Joseph",
    role: "member",
    title: "Events Volunteer",
    year: "2028",
    department: "B.Tech IT",
    bio: "Helps run workshops and campus outreach for first-year students.",
    skills: ["Events", "Content"],
  },
];

// Fictional prototype profiles, pending an approved community roster.
export const faculty = [
  {
    name: "Dr. Mira Dev",
    initials: "MD",
    role: "Head of Division",
    focus:
      "Supporting the direction of IT education and the community around it.",
  },
  {
    name: "Dr. Kiran Venu",
    initials: "KV",
    role: "Faculty Advisor · SAIT",
    focus: "Helping student ideas find guidance, resources, and room to grow.",
  },
  {
    name: "Dr. Leena Roy",
    initials: "LR",
    role: "Faculty Coordinator",
    focus:
      "Connecting classroom learning with workshops and student initiatives.",
  },
  {
    name: "Nikhil Das",
    initials: "ND",
    role: "Technical & Lab Support",
    focus:
      "Supporting the spaces and tools students use to experiment and build.",
  },
];

export const committee = [
  {
    name: "Tara Nandan",
    initials: "TN",
    role: "Chairperson",
    focus: "Bringing people and ideas together.",
  },
  {
    name: "Ishan Ravi",
    initials: "IR",
    role: "Secretary",
    focus: "Turning plans into shared progress.",
  },
  {
    name: "Neha Kiran",
    initials: "NK",
    role: "Treasurer",
    focus: "Making every community resource count.",
  },
  {
    name: "Rishi Dev",
    initials: "RD",
    role: "Joint Secretary",
    focus: "Keeping teams connected and moving.",
  },
];
