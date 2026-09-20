import Link from "next/link";
import { SaitLogo } from "@/components/ui/sait-logo";
import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  FolderKanban,
  GraduationCap,
  Users,
} from "lucide-react";

const nodes = [
  {
    id: "people",
    label: "People",
    icon: Users,
    x: 150,
    y: 108,
  },
  {
    id: "events",
    label: "Events",
    icon: CalendarDays,
    x: 450,
    y: 108,
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderKanban,
    x: 72,
    y: 300,
  },
  {
    id: "careers",
    label: "Careers",
    icon: BriefcaseBusiness,
    x: 528,
    y: 300,
  },
  {
    id: "achievements",
    label: "Achievements",
    icon: Award,
    x: 150,
    y: 492,
  },
  {
    id: "alumni",
    label: "Alumni",
    icon: GraduationCap,
    x: 450,
    y: 492,
  },
];

export function ITEcosystem() {
  return (
    <nav
      className="hero-network"
      aria-label="SAIT ecosystem"
      data-ambient="hero"
    >
      <div className="orbital-ring orbital-ring-outer" aria-hidden="true" />

      <div className="orbital-ring orbital-ring-inner" aria-hidden="true" />

      {[false, true].map((mobile) => (
        <svg
          key={String(mobile)}
          className={
            mobile
              ? "orbit-lines orbit-lines-mobile"
              : "orbit-lines orbit-lines-desktop"
          }
          viewBox="0 0 600 600"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          {nodes.map((node) => {
            const x =
              mobile && node.id === "projects"
                ? 108
                : mobile && node.id === "careers"
                  ? 492
                  : node.x;

            return (
              <g key={node.id} data-connection={node.id}>
                <path
                  d={`M300 300 L${x} ${node.y}`}
                  vectorEffect="non-scaling-stroke"
                />

                <circle cx={(300 + x) / 2} cy={(300 + node.y) / 2} r="2.5" />
              </g>
            );
          })}
        </svg>
      ))}

      <div className="network-core">
        <SaitLogo className="network-logo" alt="SAIT — CUSAT / IT" />
      </div>

      {nodes.map(({ id, label, icon: Icon }) => (
        <Link
          key={id}
          href={`/${id}`}
          className={`network-node network-node-${id}`}
        >
          <span className="node-icon">
            <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
          </span>

          <span className="node-copy">
            <span className="node-label">{label}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
}
