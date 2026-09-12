"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePointerEffects } from "@/components/effects/use-pointer-effects";

export function HomeExperience({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  usePointerEffects(ref);

  useEffect(() => {
    const root = ref.current;
    if (!root || !("IntersectionObserver" in window)) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let dispose = () => {};
    const configure = () => {
      dispose();
      if (preference.matches) return;
      const sequences = [...root.querySelectorAll<HTMLElement>("[data-choreography]")];
      const ambient = [...root.querySelectorAll<HTMLElement>("[data-ambient]")];
      const rows = [...root.querySelectorAll<HTMLElement>(".achievement-row")];
      const once = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.entered = "true";
          once.unobserve(entry.target);
        });
      }, { threshold: 0.12 });
      sequences.forEach(element => { element.dataset.choreographyReady = "true"; once.observe(element); });
      const visible = new IntersectionObserver(entries => {
        entries.forEach(entry => { (entry.target as HTMLElement).dataset.inView = String(entry.isIntersecting); });
      });
      ambient.forEach(element => visible.observe(element));
      const active = new IntersectionObserver(entries => {
        entries.forEach(entry => { (entry.target as HTMLElement).dataset.active = String(entry.isIntersecting); });
      }, { rootMargin: "-28% 0px -38% 0px", threshold: 0 });
      rows.forEach(row => { row.dataset.scrollRow = "true"; active.observe(row); });
      // Keyboard navigation always reveals the relevant sequence immediately.
      const focus = (event: FocusEvent) => {
        const sequence = (event.target as HTMLElement).closest<HTMLElement>("[data-choreography]");
        if (sequence) { sequence.dataset.entered = "true"; once.unobserve(sequence); }
      };
      const visibility = () => { root.dataset.pageHidden = String(document.hidden); };
      root.addEventListener("focusin", focus);
      document.addEventListener("visibilitychange", visibility);
      visibility();
      dispose = () => {
        once.disconnect(); visible.disconnect(); active.disconnect();
        root.removeEventListener("focusin", focus);
        document.removeEventListener("visibilitychange", visibility);
        delete root.dataset.pageHidden;
        [...sequences, ...ambient, ...rows].forEach(element => {
          ["choreographyReady", "entered", "inView", "active", "scrollRow"].forEach(key => delete element.dataset[key]);
        });
      };
    };
    configure();
    preference.addEventListener("change", configure);
    return () => { dispose(); preference.removeEventListener("change", configure); };
  }, []);

  return <div ref={ref} className="sait-home">{children}</div>;
}
