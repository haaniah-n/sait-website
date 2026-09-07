import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = { title: "Activity" };

export default function ActivityPage() {
  return (
    <PlaceholderPage
      eyebrow="Activity"
      title="What’s been happening"
      description="Recaps, announcements, and a public trail of chapter work."
      notes={["Feed from src/data/activity.ts."]}
    />
  );
}
