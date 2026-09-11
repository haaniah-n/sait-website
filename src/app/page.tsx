import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { FeaturedEvents } from "@/components/home/FeaturedEvents";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { FinalCTA } from "@/components/home/FinalCTA";

import "@/components/home/home.css";

export default function HomePage() {
  return (
    <main className="sait-home">
      <Hero />
      <IntroSection />
      <EcosystemSection />
      <FeaturedEvents />
      <ProjectsSection />
      <AchievementsSection />
      <FinalCTA />
    </main>
  );
}