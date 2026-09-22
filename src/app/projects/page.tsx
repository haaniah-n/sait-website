import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Lightbulb, Hammer, Users, Rocket } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { featuredProjects } from "@/data/projects";
import { siteRoutes } from "@/lib/routes";
import { ProjectLab } from "./project-lab";
import { ProjectDirectory } from "./project-directory";
import "./project-lab.css";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore SAIT student project concepts, from AI study tools to campus experiments. Find an idea, build together, and share what you learn.",
};
const layout = "max-w-7xl sm:px-8 lg:px-10";
const journey = [
  { title: "Idea", icon: Lightbulb, description: "Notice a problem. Ask who it affects and what could be simpler." },
  { title: "Build", icon: Hammer, description: "Start small. Make one useful thing work before adding the next." },
  { title: "Collaborate", icon: Users, description: "Invite another perspective. Test, review, and learn together." },
  { title: "Demo / Ship", icon: Rocket, description: "Show what works. Share the lessons and let feedback shape the next version." },
];

function ProjectGraphic({ id }: { id: string }) {
  return <div className={`lab-graphic lab-graphic-${id}`} aria-hidden="true">
    {id === "nexa" ? <><i /><i /><i /><span>LEARN<br />ORGANISE<br />REVISE<br />GROW</span><b /></> : id === "campusflow" ?
      <svg viewBox="0 0 260 160"><path className="lab-map" d="M20 30H240M20 80H240M20 130H240M60 10V150M130 10V150M200 10V150" /><path d="M30 130H90Q120 130 120 100V65Q120 35 150 35H230" /><circle cx="30" cy="130" r="5" /><circle cx="230" cy="35" r="5" /></svg> :
      <svg viewBox="0 0 260 160"><path d="m130 15 60 35v70l-60 35-60-35V50Zm-60 35 60 35 60-35m-60 35v70M100 33l60 35v69M160 33l-60 35v69M70 85l60 35 60-35" /><path className="lab-cube-fill" d="m100 103 30-18 30 18-30 17Z" /></svg>}
  </div>;
}

export default function ProjectsPage() {
  return <ProjectLab>
    <section className="lab-hero" aria-labelledby="projects-heading">
      <div className="lab-hero-visual" aria-hidden="true"><div className="lab-sphere" /><div className="lab-trajectory" /><div className="lab-trajectory lab-trajectory-second" /><i /><i /><span>IDEAS<br />PEOPLE<br />TOOLS<br />IMPACT</span></div>
      <Container className={layout}><div className="lab-hero-copy" data-lab-reveal>
        <p className="lab-label">PROJECTS</p>
        <h1 id="projects-heading">Try an idea.<br /><span>Build what&apos;s next.</span></h1>
        <p className="lab-hero-description">Small experiments. Shared ambition. Explore the tools and ideas students can build together — from a first prototype to something ready to ship.</p>
        <div className="lab-hero-actions"><a className="lab-primary-link" href="#featured">Explore projects <ArrowRight size={17} aria-hidden="true" /></a><a href="#journey">How projects grow <ArrowUpRight size={16} aria-hidden="true" /></a></div>
        <p className="lab-prototype">Illustrative student project concepts for this prototype.</p>
      </div></Container>
    </section>
    <div className="lab-section-strip"><Container className={`${layout} lab-strip-inner`}><nav aria-label="On this page"><a href="#featured" data-lab-nav="featured">Featured projects</a><a href="#directory" data-lab-nav="directory">Browse the directory</a><a href="#journey" data-lab-nav="journey">How projects grow</a></nav><span>IDEAS TODAY, A BRIGHTER TOMORROW.</span></Container></div>
    <section id="featured" className="lab-section" aria-labelledby="featured-heading"><Container className={layout}>
      <div className="lab-section-heading" data-lab-reveal><div><p className="lab-label">01 / IN THE SPOTLIGHT</p><h2 id="featured-heading">Three ideas.<br />Plenty of possibility.</h2></div></div>
      <div className="lab-feature-grid">{featuredProjects.map((project,index) => <article key={project.id} className={`lab-feature ${index === 0 ? "lab-feature-primary" : ""}`} data-pointer="lab" tabIndex={0} aria-labelledby={`project-${project.id}`}>
        <ProjectGraphic id={project.id} /><div className="lab-feature-status"><StatusBadge status={project.status} /></div>
        <div className="lab-feature-copy"><p className="lab-category">0{index+1} / {project.category}</p><h3 id={`project-${project.id}`}>{project.title}</h3><p className="lab-problem">{project.problem}</p><p className="lab-summary">{project.summary}</p></div>
        <div className="lab-stack"><span>Project stack</span><ul aria-label={`${project.title} technologies`}>{project.technologies.map(technology=><li key={technology}>{technology}</li>)}</ul></div>
        {index === 0 && <details className="lab-concept"><summary>Inside the concept <ArrowUpRight size={15} aria-hidden="true" /></summary><ol>{project.highlights.map(highlight=><li key={highlight}>{highlight}</li>)}</ol></details>}
      </article>)}</div>
    </Container></section>
    <section id="directory" className="lab-section" aria-labelledby="directory-heading"><Container className={layout}><ProjectDirectory /></Container></section>
    <section id="journey" className="lab-section lab-journey-section" aria-labelledby="journey-heading"><Container className={layout}>
      <div className="lab-section-heading" data-lab-reveal><div><p className="lab-label">03 / HOW PROJECTS GROW</p><h2 id="journey-heading">Start small.<br />Keep moving.</h2></div><p>You don&apos;t need a finished plan to begin. Take the next useful step, then build on what you learn.</p></div>
      <ol className="lab-process">{journey.map((step,index)=>{const Icon=step.icon;return <li key={step.title} style={{animationDelay:`${index*240+100}ms`}}><span className="lab-process-node" aria-hidden="true" /><p className="lab-stage-number">0{index+1}</p><h3><Icon size={20} aria-hidden="true" />{step.title}</h3><p>{step.description}</p></li>;})}</ol>
      <div className="lab-cta" data-lab-reveal><div><p className="lab-label">YOUR NEXT CONTRIBUTION</p><h2>Bring an idea.<br />Find your people. Build together.</h2></div><div><p>Start something new, join a team, or contribute a skill. Code, design, testing, and a fresh perspective all move a project forward.</p><div className="lab-cta-actions"><ButtonLink href={siteRoutes.contact} variant="accent">Talk to SAIT about a project <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink><ButtonLink href={siteRoutes.people} variant="nav">Meet the community <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink></div></div><span className="lab-cta-note" aria-hidden="true">SAME<br />CURIOSITY.<br />BIGGER<br />POSSIBILITIES.</span></div>
    </Container></section>
  </ProjectLab>;
}
