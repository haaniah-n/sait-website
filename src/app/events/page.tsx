import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <PlaceholderPage
      eyebrow="Events"
      title="Workshops, talks, and hackathons"
      description="Upcoming and past SAIT events with filters by kind and status."
      notes={["Calendar and event cards from src/data/events.ts."]}
    />
  );
}
