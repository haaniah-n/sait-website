import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

type Width = "narrow" | "default" | "wide";

const widths: Record<Width, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-[88rem]",
};

export function Container({
  className,
  width = "default",
  ...props
}: HTMLAttributes<HTMLDivElement> & { width?: Width }) {
  return (
    <div
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", widths[width], className)}
      {...props}
    />
  );
}
