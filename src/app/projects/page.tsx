import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <PlaceholderPage
      eyebrow="Projects"
      title="Student builds"
      description="Active, shipped, and idea-stage projects looking for collaborators."
      notes={["Project cards from src/data/projects.ts."]}
    />
  );
}
