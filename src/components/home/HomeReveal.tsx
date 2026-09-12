"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

// Content is visible without JavaScript; only offscreen content is prepared for reveal.
export function MotionReveal({ children, className, rise = true, delay, style, ...props }:
  HTMLAttributes<HTMLDivElement> & { rise?: boolean; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const authoredDelay = typeof style?.animationDelay === "string" ? parseFloat(style.animationDelay) / (style.animationDelay.endsWith("ms") ? 1000 : 1) : 0;
  const revealDelay = Math.max(0, Math.min(delay ?? authoredDelay, 0.24));
  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || preference.matches || !("IntersectionObserver" in window)) return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    element.dataset.pending = "true";
    const show = () => { delete element.dataset.pending; observer.disconnect(); };
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) show();
    }, { threshold: 0.08 });
    observer.observe(element);
    element.addEventListener("focusin", show);
    preference.addEventListener("change", show);
    return () => {
      observer.disconnect();
      element.removeEventListener("focusin", show);
      preference.removeEventListener("change", show);
    };
  }, []);
  return <div {...props} ref={ref} className={cn("home-reveal", className?.replace(/motion-(rise|fade)/g, ""))}
    data-rise={rise} style={{ ...style, transitionDelay: `${revealDelay}s` }}>{children}</div>;
}
