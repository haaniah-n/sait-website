import { Badge } from "@/components/ui/badge";

type Status =
  | "upcoming"
  | "ongoing"
  | "past"
  | "active"
  | "shipped"
  | "idea"
  | "success"
  | "warning"
  | "error";

const map: Record<Status, { tone: "accent" | "success" | "warning" | "danger" | "neutral" | "ink"; label: string }> =
  {
    upcoming: { tone: "accent", label: "Upcoming" },
    ongoing: { tone: "success", label: "Ongoing" },
    past: { tone: "neutral", label: "Past" },
    active: { tone: "success", label: "Active" },
    shipped: { tone: "ink", label: "Shipped" },
    idea: { tone: "warning", label: "Idea" },
    success: { tone: "success", label: "Success" },
    warning: { tone: "warning", label: "Warning" },
    error: { tone: "danger", label: "Error" },
  };

export function StatusBadge({ status }: { status: Status }) {
  const item = map[status];
  return <Badge tone={item.tone}>{item.label}</Badge>;
}
