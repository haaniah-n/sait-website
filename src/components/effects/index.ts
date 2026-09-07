import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Reserved slots for later Aceternity / React Bits layers.
 * Keep effects here so pages stay layout-only.
 */
export function EffectSlot({
  name,
  className,
  children,
}: {
  name: "spotlight" | "grid" | "text" | "counter";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div data-effect-slot={name} className={cn("relative", className)}>
      {children}
    </div>
  );
}

export { MotionReveal } from "@/components/effects/motion-reveal";
