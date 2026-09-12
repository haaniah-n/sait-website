"use client";

import { useEffect, type RefObject } from "react";
import "./nav-indicator.css";

export function useNavIndicator(ref: RefObject<HTMLElement | null>, pathname: string) {
  useEffect(() => {
    const nav = ref.current;
    if (!nav) return;
    const hover = matchMedia("(hover: hover) and (pointer: fine)");
    let hovered: HTMLAnchorElement | null = null;
    const update = () => {
      const focused = nav.querySelector<HTMLAnchorElement>("a:focus-visible");
      const target = focused ?? hovered ?? nav.querySelector<HTMLAnchorElement>('a[aria-current="page"]');
      if (!target) { delete nav.dataset.indicatorVisible; return; }
      nav.style.setProperty("--indicator-x", `${target.offsetLeft + 12}px`);
      nav.style.setProperty("--indicator-scale", String(Math.max(0, target.offsetWidth - 24)));
      nav.dataset.indicatorVisible = "true";
    };
    const over = (event: PointerEvent) => {
      if (!hover.matches || event.pointerType === "touch") return;
      hovered = (event.target as HTMLElement).closest("a");
      update();
    };
    const leave = () => { hovered = null; update(); };
    const focusOut = () => { queueMicrotask(update); };
    const resize = new ResizeObserver(update);
    resize.observe(nav);
    nav.querySelectorAll("a").forEach(link => resize.observe(link));
    nav.addEventListener("pointerover", over);
    nav.addEventListener("pointerleave", leave);
    nav.addEventListener("focusin", update);
    nav.addEventListener("focusout", focusOut);
    hover.addEventListener("change", leave);
    update();
    return () => {
      resize.disconnect();
      nav.removeEventListener("pointerover", over);
      nav.removeEventListener("pointerleave", leave);
      nav.removeEventListener("focusin", update);
      nav.removeEventListener("focusout", focusOut);
      hover.removeEventListener("change", leave);
    };
  }, [ref, pathname]);
}
