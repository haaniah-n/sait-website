import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = { title: "Achievements" };

export default function AchievementsPage() {
  return (
    <PlaceholderPage
      eyebrow="Achievements"
      title="Wins, papers, and placements"
      description="A living record of competitions, research, and community impact."
      notes={["Timeline from src/data/achievements.ts."]}
    />
  );
}
