"use client";

import { useEffect, type RefObject } from "react";
import "./pointer-effects.css";

/** Opt-in pointer effects. No React state updates or permanent animation loop. */
export function usePointerEffects(root: RefObject<HTMLElement | null>, enabled = true) {
  useEffect(() => {
    const scope = root.current;
    if (!scope || !enabled) return;
    const preference = matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let dispose = () => {};

    const configure = () => {
      dispose();
      if (!preference.matches) return;
      const cleanups = [...scope.querySelectorAll<HTMLElement>("[data-pointer]")].map(element => {
        const mode = element.dataset.pointer;
        const focusBoundary = element.closest<HTMLElement>("a, button") ?? element;
        const surfaces = mode === "bento"
          ? [element, ...element.querySelectorAll<HTMLElement>(".destination-node")]
          : [element];
        let bounds: DOMRect[] = [];
        let frame = 0;
        let dirty = true;
        let point: { x: number; y: number } | null = null;
        const invalidate = () => { dirty = true; };
        const reset = () => {
          cancelAnimationFrame(frame);
          frame = 0;
          point = null;
          delete element.dataset.pointerActive;
          surfaces.forEach(surface => {
            ["--pointer-x", "--pointer-y", "--magnet-x", "--magnet-y"].forEach(key => surface.style.removeProperty(key));
          });
        };
        const paint = () => {
          frame = 0;
          if (!point) return;
          // Read all geometry first, and only after entry, resize or scrolling.
          if (dirty) { bounds = surfaces.map(surface => surface.getBoundingClientRect()); dirty = false; }
          if (mode === "magnetic") {
            const rect = bounds[0];
            const x = Math.max(-1, Math.min(1, (point.x - rect.left - rect.width / 2) / (rect.width / 2 || 1)));
            const y = Math.max(-1, Math.min(1, (point.y - rect.top - rect.height / 2) / (rect.height / 2 || 1)));
            element.style.setProperty("--magnet-x", `${x * 5}px`);
            element.style.setProperty("--magnet-y", `${y * 4}px`);
          } else {
            surfaces.forEach((surface, index) => {
              surface.style.setProperty("--pointer-x", `${point!.x - bounds[index].left}px`);
              surface.style.setProperty("--pointer-y", `${point!.y - bounds[index].top}px`);
            });
          }
          element.dataset.pointerActive = "true";
        };
        const move = (event: PointerEvent) => {
          if (event.pointerType === "touch" || focusBoundary.matches(":focus-visible") || element.querySelector(":focus-visible")) return;
          point = { x: event.clientX, y: event.clientY };
          if (!frame) frame = requestAnimationFrame(paint);
        };
        const enter = (event: PointerEvent) => { dirty = true; move(event); };
        const observer = new ResizeObserver(invalidate);
        surfaces.forEach(surface => observer.observe(surface));
        element.addEventListener("pointerenter", enter);
        element.addEventListener("pointermove", move);
        element.addEventListener("pointerleave", reset);
        element.addEventListener("pointercancel", reset);
        focusBoundary.addEventListener("focusin", reset);
        element.addEventListener("transitionend", invalidate);
        window.addEventListener("scroll", invalidate, { passive: true, capture: true });
        window.addEventListener("blur", reset);
        return () => {
          reset();
          observer.disconnect();
          element.removeEventListener("pointerenter", enter);
          element.removeEventListener("pointermove", move);
          element.removeEventListener("pointerleave", reset);
          element.removeEventListener("pointercancel", reset);
          focusBoundary.removeEventListener("focusin", reset);
          element.removeEventListener("transitionend", invalidate);
          window.removeEventListener("scroll", invalidate, true);
          window.removeEventListener("blur", reset);
        };
      });
      dispose = () => cleanups.forEach(cleanup => cleanup());
    };
    configure();
    preference.addEventListener("change", configure);
    return () => { dispose(); preference.removeEventListener("change", configure); };
  }, [root, enabled]);
}
