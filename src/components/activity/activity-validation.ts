import { activity, activityRoles, activityTypes, type ActivityRecord, type ActivityRole, type ActivityType } from "@/data/activity";

export type ActivityDraft = {
  title: string;
  date: string;
  type: string;
  role: string;
  description: string;
  proofUrl: string;
  file?: { name: string; size: number; type: string };
};
export type ActivityErrors = Partial<Record<keyof ActivityDraft, string>>;
export const maxProofBytes = 5 * 1024 * 1024;

export function localToday() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

export function validateActivity(draft: ActivityDraft, today: string): ActivityErrors {
  const errors: ActivityErrors = {};
  if (draft.title.trim().length < 3 || draft.title.trim().length > 100) errors.title = "Enter an activity name between 3 and 100 characters.";
  const parsed = new Date(`${draft.date}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(draft.date) || !Number.isFinite(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== draft.date) {
    errors.date = "Choose a valid activity date.";
  } else if (draft.date > today) errors.date = "Choose today or an earlier date; log an activity after participating.";
  if (!activityTypes.some((type) => type === draft.type)) errors.type = "Choose an activity type.";
  if (!activityRoles.some((role) => role === draft.role)) errors.role = "Choose your role.";
  if (draft.description.trim().length < 20 || draft.description.trim().length > 600) errors.description = "Describe your contribution in 20–600 characters.";
  if (draft.proofUrl.trim()) {
    try {
      const url = new URL(draft.proofUrl.trim());
      if (!["https:", "http:"].includes(url.protocol) || url.username || url.password || draft.proofUrl.length > 2048) throw new Error("Invalid proof URL");
    } catch {
      errors.proofUrl = "Enter a complete http:// or https:// link without embedded login details.";
    }
  }
  if (draft.file) {
    const extension = draft.file.name.split(".").pop()?.toLowerCase();
    const allowed = ["application/pdf", "image/png", "image/jpeg", "image/webp"];
    if (!extension || !["pdf", "png", "jpg", "jpeg", "webp"].includes(extension) || (draft.file.type && !allowed.includes(draft.file.type))) {
      errors.file = "Choose a PDF, PNG, JPG, or WebP file.";
    } else if (draft.file.size <= 0 || draft.file.size > maxProofBytes) errors.file = "Choose a non-empty file up to 5 MB.";
  }
  if (!draft.proofUrl.trim() && !draft.file) errors.proofUrl = "Provide a proof link or choose a proof file. Nothing will be uploaded.";
  return errors;
}

// Call only after validation. User input cannot set verification or points.
export function createPendingActivity(draft: ActivityDraft, id: string): ActivityRecord {
  return {
    id, title: draft.title.trim(), date: draft.date,
    type: draft.type as ActivityType, role: draft.role as ActivityRole,
    description: draft.description.trim(), status: "Pending", demo: false,
    proofUrl: draft.proofUrl.trim() ? new URL(draft.proofUrl.trim()).href : undefined,
    proofFile: draft.file ? { name: draft.file.name, size: draft.file.size } : undefined,
  };
}

// Storage is untrusted. Rebuild only valid local entries from permitted fields;
// never restore seed records, verification, points, or file contents.
export function restoreActivitySubmissions(value: unknown, today: string): ActivityRecord[] {
  if (!Array.isArray(value)) return [];
  const ids = new Set(activity.map((record) => record.id));
  const restored: ActivityRecord[] = [];
  for (const candidate of value) {
    if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) continue;
    const item = candidate as Record<string, unknown>;
    if (item.demo !== false || typeof item.id !== "string" || !/^[a-zA-Z0-9-]{1,128}$/.test(item.id) || ids.has(item.id)) continue;
    if (typeof item.title !== "string" || typeof item.date !== "string" || typeof item.type !== "string" || typeof item.role !== "string" || typeof item.description !== "string") continue;
    if (item.proofUrl !== undefined && typeof item.proofUrl !== "string") continue;
    let file: ActivityDraft["file"];
    if (item.proofFile !== undefined) {
      if (!item.proofFile || typeof item.proofFile !== "object" || Array.isArray(item.proofFile)) continue;
      const metadata = item.proofFile as Record<string, unknown>;
      if (typeof metadata.name !== "string" || metadata.name.length > 255 || /[\\/\u0000-\u001f]/.test(metadata.name) || typeof metadata.size !== "number" || !Number.isSafeInteger(metadata.size)) continue;
      file = { name: metadata.name, size: metadata.size, type: "" };
    }
    const draft: ActivityDraft = {
      title: item.title, date: item.date, type: item.type, role: item.role,
      description: item.description, proofUrl: (item.proofUrl as string | undefined) ?? "", file,
    };
    if (Object.keys(validateActivity(draft, today)).length) continue;
    restored.push(createPendingActivity(draft, item.id));
    ids.add(item.id);
  }
  return restored;
}
