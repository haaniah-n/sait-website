import { PlaceholderPage } from "@/components/ui/placeholder-page";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <PlaceholderPage
      eyebrow="Home"
      title={site.shortName}
      description={`${site.name}. ${site.tagline}`}
      notes={[
        "Hero, highlights, upcoming events, and a join CTA will live here.",
        "Global navbar and footer are already active on every route.",
      ]}
    />
  );
}
