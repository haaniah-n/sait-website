"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePointerEffects } from "@/components/effects/use-pointer-effects";

export function ProjectLab({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  usePointerEffects(root);
  useEffect(() => {
    const scope = root.current;
    if (!scope || !("IntersectionObserver" in window)) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const links = [...scope.querySelectorAll<HTMLAnchorElement>("[data-lab-nav]")];
    const markSection = (id: string) => links.forEach(link => {
      if (link.dataset.labNav === id) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    markSection("featured");
    const navigation = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) markSection(entry.target.id); });
    }, { rootMargin: "-15% 0px -60% 0px" });
    scope.querySelectorAll("section[id]").forEach(section => navigation.observe(section));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.labEntered = "true";
        observer.unobserve(entry.target);
      });
    }, { threshold: .15 });
    const elements = scope.querySelectorAll<HTMLElement>(".lab-process, [data-lab-reveal]");
    const finish = () => {
      if (!preference.matches) return;
      elements.forEach(element => { element.dataset.labEntered = "true"; });
      observer.disconnect();
    };
    elements.forEach(element => observer.observe(element));
    finish();
    preference.addEventListener("change", finish);
    return () => { observer.disconnect(); navigation.disconnect(); preference.removeEventListener("change", finish); };
  }, []);
  return <div ref={root} className="project-lab">{children}</div>;
}
