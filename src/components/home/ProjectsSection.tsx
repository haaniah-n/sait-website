import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCarousel } from "./ProjectCarousel";
import "./home-projects.css";

export function ProjectsSection() {
  return <section className="home-projects project-showcase border-b border-line bg-background" aria-labelledby="home-projects-heading">
    <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8 sm:pt-20 sm:pb-12 lg:px-10 lg:pt-24 lg:pb-14">
      <header className="showcase-intro">
        <p className="showcase-eyebrow">04 / Projects / Ideas in action</p>
        <h2 id="home-projects-heading">From ideas to<br /><span>things that work.</span></h2>
        <p className="showcase-support">Explore a glimpse of the ideas, experiments, and digital experiences students can bring to life.</p>
      </header>
      <ProjectCarousel />
      <div className="showcase-ending">
        <p>More ideas are always in progress.</p>
        <Link href="/projects">Explore all projects <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
    </div>
  </section>;
}
