import Link from "next/link";
import type { ElementType } from "react";
import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  FolderKanban,
  GraduationCap,
  Users,
} from "lucide-react";

type EcosystemNode = {
  label: string;
  href: string;
  icon: ElementType;
  position: string;
};

const nodes: EcosystemNode[] = [
  {
    label: "People",
    href: "/people",
    icon: Users,
    position: "left-[2%] top-[10%] sm:left-[5%]",
  },
  {
    label: "Events",
    href: "/events",
    icon: CalendarDays,
    position: "right-[2%] top-[10%] sm:right-[5%]",
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
    position: "left-[-1%] top-[52%] sm:left-[2%]",
  },
  {
    label: "Careers",
    href: "/careers",
    icon: BriefcaseBusiness,
    position: "right-[-1%] top-[52%] sm:right-[2%]",
  },
  {
    label: "Achievements",
    href: "/achievements",
    icon: Award,
    position: "left-[15%] bottom-[1%]",
  },
  {
    label: "Alumni",
    href: "/alumni",
    icon: GraduationCap,
    position: "right-[15%] bottom-[1%]",
  },
];

export function ITEcosystem() {
  return (
    <div
      aria-label="SAIT ecosystem navigation"
      data-ambient="hero"
      className="hero-network relative mx-auto aspect-square w-full max-w-[620px]"
    >
      {/* Outer atmosphere */}
      <div
        aria-hidden="true"
        className="absolute inset-[8%] rounded-full border border-accent/15"
      />

      <div
        aria-hidden="true"
        className="absolute inset-[18%] rounded-full border border-line"
      />

      {/* Connection lines */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="network-lines"
        >
          <path data-connection="people" d="M300 300 L110 130" />
          <path data-connection="events" d="M300 300 L490 130" />
          <path data-connection="projects" d="M300 300 L70 320" />
          <path data-connection="careers" d="M300 300 L530 320" />
          <path data-connection="achievements" d="M300 300 L170 500" />
          <path data-connection="alumni" d="M300 300 L430 500" />
        </g>

        <g fill="currentColor" className="text-accent/50">
          <circle cx="110" cy="130" r="3" />
          <circle cx="490" cy="130" r="3" />
          <circle cx="70" cy="320" r="3" />
          <circle cx="530" cy="320" r="3" />
          <circle cx="170" cy="500" r="3" />
          <circle cx="430" cy="500" r="3" />
        </g>
      </svg>

      {/* Center */}
      <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div
          aria-hidden="true"
          className="absolute h-44 w-44 rounded-full bg-accent/10 blur-2xl sm:h-52 sm:w-52"
        />

        <div className="network-core relative flex h-36 w-36 flex-col items-center justify-center rounded-full border border-accent/30 bg-surface-ink text-center shadow-[var(--shadow-lift)] sm:h-44 sm:w-44">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-nav-muted">
            The ecosystem
          </span>

          <span className="mt-2 font-display text-4xl font-bold tracking-[-0.05em] text-nav-fg sm:text-5xl">
            SAIT
          </span>

          <span className="mt-1 text-xs text-nav-muted">CUSAT · IT</span>
        </div>
      </div>

      {/* Navigation nodes */}
      {nodes.map((node) => {
        const Icon = node.icon;

        return (
          <Link
            key={node.label}
            href={node.href}
            className={`network-node group absolute z-20 ${node.position}`}
          >
            <span className="flex min-w-[112px] items-center gap-2.5 rounded-[var(--radius-lg)] border border-line bg-surface px-3 py-2.5 shadow-[var(--shadow-sm)] transition-[transform,border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover:-translate-y-1 group-hover:border-accent/40 group-hover:shadow-[var(--shadow-lift)] sm:min-w-[132px] sm:px-4 sm:py-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-accent-soft text-accent transition-transform duration-[var(--duration-base)] group-hover:scale-105">
                <Icon size={16} aria-hidden="true" />
              </span>

              <span>
                <span className="block text-sm font-semibold text-foreground">
                  {node.label}
                </span>

                <span className="mt-0.5 block text-[10px] uppercase tracking-[0.12em] text-muted">
                  Explore
                </span>
              </span>
            </span>
          </Link>
        );
      })}

      {/* Decorative orbit points */}
      <span
        aria-hidden="true"
        className="absolute left-[13%] top-[35%] h-1.5 w-1.5 rounded-full bg-accent/50"
      />

      <span
        aria-hidden="true"
        className="absolute right-[13%] top-[35%] h-1.5 w-1.5 rounded-full bg-accent/50"
      />

      <span
        aria-hidden="true"
        className="absolute bottom-[28%] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent/60"
      />
    </div>
  );
}