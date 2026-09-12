import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { FeaturedEvents } from "@/components/home/FeaturedEvents";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { FinalCTA } from "@/components/home/FinalCTA";

import { HomeExperience } from "@/components/home/HomeExperience";
import "@/components/home/home.css";
import "@/components/home/home-interactions.css";

export default function HomePage() {
  return (
    <HomeExperience>
      <Hero />
      <IntroSection />
      <EcosystemSection />
      <FeaturedEvents />
      <ProjectsSection />
      <AchievementsSection />
      <FinalCTA />
    </HomeExperience>
  );
}