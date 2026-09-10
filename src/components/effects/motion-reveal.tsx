import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

type MotionRevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  rise?: boolean;
  delay?: number;
};

export function MotionReveal({
  className,
  children,
  rise = true,
  delay = 0,
  style,
  ...props
}: MotionRevealProps) {
  return (
    <div
      {...props}
      className={cn(rise ? "motion-rise" : "motion-fade", className)}
      style={{
        ...style,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}