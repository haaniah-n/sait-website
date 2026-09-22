"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePointerEffects } from "@/components/effects/use-pointer-effects";

export function HallOfFame({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  usePointerEffects(root);

  useEffect(() => {
    const scope = root.current;
    if (!scope || !("IntersectionObserver" in window)) return;

    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const reveals = scope.querySelectorAll<HTMLElement>("[data-fame-reveal], .fame-timeline");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.fameEntered = "true";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    const finish = () => {
      if (!preference.matches) return;
      reveals.forEach((element) => {
        element.dataset.fameEntered = "true";
      });
      observer.disconnect();
    };

    reveals.forEach((element) => observer.observe(element));
    finish();
    preference.addEventListener("change", finish);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", finish);
    };
  }, []);

  return <div ref={root} className="fame-hall">{children}</div>;
}
