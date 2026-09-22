"use client";
import { useState } from "react";
import { ArrowUpRight, Search, MapPin, BriefcaseBusiness, Timer, Activity } from "lucide-react";
import { projects } from "@/data/projects";
import { StatusBadge } from "@/components/ui/status-badge";

const directory=projects.filter(project=>!project.featured);
const categories=["All",...new Set(projects.flatMap(project=>project.tags))];
const icons=[MapPin,BriefcaseBusiness,Timer,Activity];
export function ProjectDirectory(){
  const [query,setQuery]=useState("");
  const [category,setCategory]=useState("All");


  const matches=directory.filter(project=>(category==="All"||project.tags.includes(category))&&`${project.title} ${project.problem} ${project.summary} ${project.technologies.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <div>
    <div className="lab-directory-heading" data-lab-reveal><div><p className="lab-label">02 / PROJECT DIRECTORY</p><h2 id="directory-heading">More problems<br />worth solving.</h2></div><p>A place for the smaller experiments, early questions, and useful campus tools. Every project starts somewhere.</p><label className="lab-search"><Search size={16} aria-hidden="true" /><span className="sr-only">Search projects</span><input type="search" placeholder="Search projects…" value={query} onChange={event=>setQuery(event.target.value)} /></label></div>
    <div className="lab-filters" role="group" aria-label="Filter projects by category">{categories.map(item=><button type="button" key={item} aria-pressed={category===item} onClick={()=>setCategory(item)}>{item}</button>)}</div>
    <p className="sr-only" role="status">{matches.length} projects found</p>
    <div className="lab-directory-rows">{directory.map((project,index)=>{const Icon=icons[index];return <details key={project.id} className="lab-row" data-pointer="lab" hidden={!matches.includes(project)}>
      <summary aria-labelledby={`project-${project.id}`}><span className="lab-row-icon" aria-hidden="true"><Icon size={19} /></span><h3 id={`project-${project.id}`}>{project.title}</h3><p>{project.problem}</p><StatusBadge status={project.status} /><ul aria-label={`${project.title} technologies`}>{project.technologies.map(technology=><li key={technology}>{technology}</li>)}</ul><ArrowUpRight className="lab-row-arrow" size={18} aria-hidden="true" /></summary>
      <div className="lab-row-detail"><p className="lab-category">{project.category} / {project.status==="idea"?"Proposed stack":"Project stack"}</p><p>{project.summary}</p></div>
    </details>;})}</div>
    {matches.length===0&&<p className="lab-empty">No projects match your search. Try another term or category.</p>}
  </div>;
}
