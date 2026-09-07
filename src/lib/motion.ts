export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export const motionTiming = {
  fast: 140,
  base: 200,
  slow: 360,
  ease: [0.22, 1, 0.36, 1] as const,
};
