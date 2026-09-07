import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = { title: "Explore" };

export default function ExplorePage() {
  return (
    <PlaceholderPage
      eyebrow="Explore"
      title="Find your next step"
      description="Guided entry points into guilds, projects, and opportunities."
      notes={["Discovery tiles from src/data/explore.ts."]}
    />
  );
}
