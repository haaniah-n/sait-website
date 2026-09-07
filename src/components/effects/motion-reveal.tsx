import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

/** CSS-only reveal. Use Motion later only where a sequence is needed. */
export function MotionReveal({
  className,
  children,
  rise = true,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode; rise?: boolean }) {
  return (
    <div className={cn(rise ? "motion-rise" : "motion-fade", className)} {...props}>
      {children}
    </div>
  );
}
