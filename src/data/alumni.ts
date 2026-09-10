import type { Alumni } from "@/types";

type AlumniStory = Alumni & {
  initials: string;
  area: string;
  headline: string;
  origin: string;
  connection: string;
  preview: string;
  spotlight: boolean;
};

// All profiles, batches, roles, and stories are fictional prototype content.
// The company field describes a generic work/study setting, not an employer.
export const alumni: AlumniStory[] = [
  {
    id: "a-01",
    name: "Anaya Rao",
    initials: "AR",
    batch: "2021",
    currentRole: "Software Engineer",
    company: "Software industry",
    area: "Software & Engineering",
    headline: "A small campus build opened a bigger world.",
    origin: "Learning to build with a student team",
    story: "A shared campus project gave Anaya a first taste of building for someone else. Code reviews and a few broken releases taught her to ask better questions. Today, she brings that same curiosity to software engineering, where understanding people matters as much as understanding code.",
    connection: "Returns to offer project feedback and help students navigate their first code review.",
    preview: "From student builds to software engineering, with a connection back to campus.",
    spotlight: true,
  },
  {
    id: "a-02",
    name: "Nila Sen",
    initials: "NS",
    batch: "2022",
    currentRole: "Product Designer",
    company: "Digital product studio",
    area: "Product & Design",
    headline: "The most useful skill was learning to listen.",
    origin: "Designing experiences for student events",
    story: "Working on event sign-ups made Nila curious about why people get stuck. She began sketching simpler flows and testing them with classmates. That habit grew into a path in product design, shaped by observation, conversation, and iteration.",
    connection: "Shares design critiques and runs informal workshops on turning feedback into a better experience.",
    preview: "Turning curiosity about people into thoughtful digital products and experiences.",
    spotlight: true,
  },
  {
    id: "a-03",
    name: "Vihaan Kale",
    initials: "VK",
    batch: "2020",
    currentRole: "Technology Consultant",
    company: "Technology advisory",
    area: "Consulting / Industry",
    headline: "Connecting the technical details to the bigger picture.",
    origin: "Coordinating a student workshop team",
    story: "Helping organise workshops taught Vihaan to translate between different perspectives. A path into technology consulting followed, combining technical thinking with the ability to explain a trade-off clearly. He still sees good teamwork as a skill worth practising.",
    connection: "Joins career conversations to help students explore roles beyond a single job title.",
    preview: "Working across technology, strategy, and the people who bring change to life.",
    spotlight: true,
  },
  {
    id: "a-04",
    name: "Mira Talwar",
    initials: "MT",
    batch: "2023",
    currentRole: "Postgraduate Researcher",
    company: "University research setting",
    area: "Research / Higher Studies",
    headline: "Following a question beyond the classroom.",
    origin: "Exploring a final-year research question",
    story: "A final-year experiment sparked an interest in accessible computing. Mira is continuing that question through postgraduate study and learning how to design reproducible experiments.",
    connection: "Shares perspectives on research applications and reading a first academic paper.",
    preview: "Exploring accessible computing through postgraduate study.",
    spotlight: false,
  },
  {
    id: "a-05",
    name: "Dev Malik",
    initials: "DM",
    batch: "2023",
    currentRole: "Early-stage Founder",
    company: "Independent venture",
    area: "Entrepreneurship",
    headline: "Testing an idea outside the campus bubble.",
    origin: "Prototyping with classmates",
    story: "Dev is exploring a small venture around everyday workflow tools, learning to test assumptions with real conversations before building another feature.",
    connection: "Brings lessons from early customer interviews to student project discussions.",
    preview: "Learning to turn a useful experiment into a sustainable venture.",
    spotlight: false,
  },
  {
    id: "a-06",
    name: "Rhea Vora",
    initials: "RV",
    batch: "2022",
    currentRole: "Systems Engineer",
    company: "Infrastructure engineering",
    area: "Software & Engineering",
    headline: "Curiosity about what happens underneath.",
    origin: "Experimenting with lab systems",
    story: "An interest in Linux and networks led Rhea toward infrastructure engineering. She enjoys making complex systems easier to understand and more reliable to use.",
    connection: "Helps students practise debugging and explain the decisions behind their builds.",
    preview: "Building reliable systems and sharing the reasoning behind them.",
    spotlight: false,
  },
  {
    id: "a-07",
    name: "Kabir Suri",
    initials: "KS",
    batch: "2022",
    currentRole: "UX Researcher",
    company: "Product research setting",
    area: "Product & Design",
    headline: "Making room for the user in every decision.",
    origin: "Gathering feedback for a campus tool",
    story: "Student interviews introduced Kabir to the gap between what a team assumes and what people need. His work now centres on research that helps product teams make informed decisions.",
    connection: "Offers feedback on student interview plans and project presentations.",
    preview: "Helping product teams learn from the people they design for.",
    spotlight: false,
  },
];

export const spotlightAlumni = alumni.filter((person) => person.spotlight);
