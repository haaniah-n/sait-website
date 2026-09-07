import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = { title: "People" };

export default function PeoplePage() {
  return (
    <PlaceholderPage
      eyebrow="People"
      title="Faculty, core, and members"
      description="Directory of faculty advisors, core team, leads, and volunteers."
      notes={["Filterable roster using src/data/people.ts."]}
    />
  );
}
