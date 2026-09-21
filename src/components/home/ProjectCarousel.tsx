"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { featuredProjects } from "@/data/projects";

function ProjectSymbol({ id }: { id: string }) {
  if (id === "nexa") return <svg viewBox="0 0 280 220" aria-hidden="true" className="showcase-symbol symbol-nexa">
    <path className="symbol-faint" d="M140 6 244 110 140 214 36 110Z" />
    <path className="symbol-line" d="M140 30 220 110 140 190 60 110Z" />
    <text x="140" y="140" textAnchor="middle">N</text>
  </svg>;
  if (id === "campusflow") return <svg viewBox="0 0 280 220" aria-hidden="true" className="showcase-symbol symbol-campus">
    <path className="symbol-faint" d="M22 54H100V172H258M52 22V194M216 22V194" />
    <path className="symbol-line" d="M48 162H106C144 162 130 64 176 64H232" />
    <circle className="symbol-surface" cx="48" cy="162" r="9" />
    <circle className="symbol-dot" cx="232" cy="64" r="9" />
    <circle className="symbol-dot" cx="142" cy="108" r="4" />
  </svg>;
  return <svg viewBox="0 0 280 220" aria-hidden="true" className="showcase-symbol symbol-code">
    <path className="symbol-faint" d="M40 30H240V190H40ZM40 70H240M40 150H240M80 30V190M200 30V190" />
    <path className="symbol-code-brackets" d="m106 80-28 30 28 30m68-60 28 30-28 30m-23-78-24 96" />
  </svg>;
}

export function ProjectCarousel() {
  const root = useRef<HTMLDivElement>(null);
  const gesture = useRef<{ x: number; y: number } | null>(null);
  const suppressClick = useRef(false);
  const [active, setActive] = useState(0);
  const [timerVersion, setTimerVersion] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [announcement, setAnnouncement] = useState("");
  const count = featuredProjects.length;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReducedMotion(media.matches);
    const syncVisibility = () => setPageVisible(!document.hidden);
    syncMotion(); syncVisibility();
    media.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", syncVisibility);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: .25 });
    if (root.current) observer.observe(root.current);
    return () => { media.removeEventListener("change", syncMotion); document.removeEventListener("visibilitychange", syncVisibility); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (paused || hovered || focused || dragging || !inView || !pageVisible || reducedMotion) return;
    const timer = window.setTimeout(() => setActive(current => (current + 1) % count), 3000);
    return () => window.clearTimeout(timer);
  }, [active, timerVersion, paused, hovered, focused, dragging, inView, pageVisible, reducedMotion, count]);

  function select(index: number) {
    const next = (index + count) % count;
    setActive(next);
    setTimerVersion(version => version + 1);
    setAnnouncement(`${featuredProjects[next].title}, project ${next + 1} of ${count}`);
  }
  function finishSwipe(event: PointerEvent<HTMLDivElement>) {
    if (gesture.current) {
      const dx = event.clientX - gesture.current.x;
      const dy = event.clientY - gesture.current.y;
      if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy)) {
        suppressClick.current = true;
        select(active + (dx < 0 ? 1 : -1));
      }
    }
    gesture.current = null;
    setDragging(false);
  }

  return <div ref={root} className="showcase-carousel" role="region" aria-roledescription="carousel" aria-label="Student projects" data-active-project={featuredProjects[active].id}
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    onKeyDown={event => { if(event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); select(active + (event.key === "ArrowRight" ? 1 : -1)); } }}>
    <div className="showcase-viewport">
      <div className="showcase-stage"
        onPointerDown={event => { if(!event.isPrimary || event.button !== 0) return; suppressClick.current=false; gesture.current={x:event.clientX,y:event.clientY}; setDragging(true); }}
        onPointerMove={event => { if(gesture.current && Math.abs(event.clientX-gesture.current.x)>20 && Math.abs(event.clientX-gesture.current.x)>Math.abs(event.clientY-gesture.current.y)) event.currentTarget.setPointerCapture(event.pointerId); }}
        onPointerUp={finishSwipe}
        onPointerCancel={() => { gesture.current=null; setDragging(false); }}
        onPointerLeave={event => { if(!event.currentTarget.hasPointerCapture(event.pointerId)) {gesture.current=null;setDragging(false);} }}
        onClickCapture={event => { if(suppressClick.current) {event.preventDefault();event.stopPropagation();suppressClick.current=false;} }}>
        {featuredProjects.map((project,index) => {
          const selected = index === active;
          const position = selected ? "active" : index === (active + 1) % count ? "next" : "previous";
          return <article key={project.id} className="showcase-slide" data-position={position} role="group" aria-roledescription="slide" aria-label={`${index+1} of ${count}: ${project.title}`} aria-hidden={!selected} inert={!selected}>
            <div className="showcase-slide-top"><span>{String(index+1).padStart(2,"0")}</span><span>Featured project</span></div>
            <div className="showcase-slide-content">
              <div className="showcase-project-copy">
                <h3>{project.title}</h3>
                <p className="showcase-category">{project.category.replace(" · ", " / ")}</p>
                <p className="showcase-description">{project.summary}</p>
                <Link href={`/projects#project-${project.id}`} tabIndex={selected ? 0 : -1}>Explore project <ArrowUpRight size={16} aria-hidden="true" /></Link>
              </div>
              <ProjectSymbol id={project.id} />
            </div>
          </article>;
        })}
      </div>
    </div>
    <div className="showcase-controls">
      <button type="button" className="showcase-arrow" aria-label="Previous project" onClick={() => select(active-1)}><ArrowLeft size={20} aria-hidden="true" /></button>
      <div className="showcase-pagination" role="group" aria-label="Choose a project">
        {featuredProjects.map((project,index) => <button type="button" key={project.id} aria-label={`Show ${project.title}`} aria-current={index===active ? "true" : undefined} onClick={() => select(index)}><span /></button>)}
      </div>
      <button type="button" className="showcase-arrow" aria-label="Next project" onClick={() => select(active+1)}><ArrowRight size={20} aria-hidden="true" /></button>
      <button type="button" className="showcase-autoplay" aria-label={paused ? "Start project autoplay" : "Pause project autoplay"} aria-pressed={paused} onClick={() => {setPaused(!paused);setTimerVersion(version=>version+1);}}>{paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}</button>
    </div>
    <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{announcement}</p>
  </div>;
}
