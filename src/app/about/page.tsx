import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PlaceholderPage
      eyebrow="About"
      title="Who we are"
      description="SAIT’s story, mission, and how the association sits inside the Division of Information Technology at SOE, CUSAT."
      notes={["Mission, history, structure, and campus context."]}
    />
  );
}
