import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <PlaceholderPage
      eyebrow="Careers"
      title="Internships and referrals"
      description="Student-facing opportunity board shared by alumni, faculty, and partners."
      notes={["Job cards and filters from src/data/careers.ts."]}
    />
  );
}
