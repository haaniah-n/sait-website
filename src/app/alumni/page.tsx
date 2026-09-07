import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = { title: "Alumni" };

export default function AlumniPage() {
  return (
    <PlaceholderPage
      eyebrow="Alumni"
      title="Where SAITians go next"
      description="Stories and directory of alumni still connected to the community."
      notes={["Profile grid from src/data/alumni.ts."]}
    />
  );
}
