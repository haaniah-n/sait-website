"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input, Label, Select, Textarea } from "@/components/ui/input";
import {
  activity,
  activityRoles,
  activityTypes,
  communityActivities,
  communitySnapshotMonth,
  demoPointsPerVerifiedActivity,
  type ActivityRecord,
  type ActivityStatus,
} from "@/data/activity";
import { readStorage, storageKeys, writeStorage } from "@/lib/storage";
import {
  createPendingActivity,
  localToday,
  restoreActivitySubmissions,
  validateActivity,
  type ActivityDraft,
  type ActivityErrors,
} from "./activity-validation";

const layout = "max-w-7xl sm:px-8 lg:px-10";
const label =
  "font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent-hover";
const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});
const formatDate = (date: string) =>
  dateFormat.format(new Date(`${date}T00:00:00Z`));
const fieldNames: Record<keyof ActivityDraft, string> = {
  title: "Activity name",
  date: "Activity date",
  type: "Activity type",
  role: "Role",
  description: "Description",
  proofUrl: "Proof link",
  file: "Proof file",
};

function ActivityBadge({ status }: { status: ActivityStatus }) {
  return (
    <Badge
      tone={
        status === "Verified"
          ? "success"
          : status === "Needs Review"
            ? "warning"
            : "neutral"
      }
    >
      {status}
    </Badge>
  );
}

export function ActivityDashboard() {
  const [localRecords, setLocalRecords] = useState<ActivityRecord[]>([]);
  const records = [...localRecords, ...activity];
  const [errors, setErrors] = useState<ActivityErrors>({});
  const [confirmation, setConfirmation] = useState("");
  const [filter, setFilter] = useState("All");
  const [today, setToday] = useState("");
  const errorSummary = useRef<HTMLDivElement>(null);
  const successMessage = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentDate = localToday();
    setLocalRecords(
      restoreActivitySubmissions(
        readStorage<unknown>(storageKeys.activitySubmissions, []),
        currentDate,
      ),
    );
    setToday(currentDate);
  }, []);

  const verified = records.filter(
    (record) => record.status === "Verified",
  ).length;
  const pending = records.filter(
    (record) => record.status === "Pending",
  ).length;
  const needsReview = records.filter(
    (record) => record.status === "Needs Review",
  ).length;
  const visibleCommunity = communityActivities.filter(
    (record) => filter === "All" || record.type === filter,
  );
  const categoryCounts = activityTypes.map((type) => ({
    type,
    count: communityActivities.filter((record) => record.type === type).length,
  }));
  const highestCount = Math.max(
    ...categoryCounts.map((category) => category.count),
  );
  const topCategory = categoryCounts
    .filter((category) => category.count === highestCount)
    .map((category) => category.type)
    .join(" / ");

  const inputAccessibility = (field: keyof ActivityDraft, hint?: string) => ({
    id: `activity-${field}`,
    name: field,
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby":
      [hint, errors[field] ? `error-${field}` : undefined]
        .filter(Boolean)
        .join(" ") || undefined,
  });
  const fieldError = (field: keyof ActivityDraft) =>
    errors[field] ? (
      <p id={`error-${field}`} className="mt-2 text-sm text-danger">
        {errors[field]}
      </p>
    ) : null;

  function submitActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const text = (key: string) => String(formData.get(key) ?? "");
    const file = formData.get("file");
    const draft: ActivityDraft = {
      title: text("title"),
      date: text("date"),
      type: text("type"),
      role: text("role"),
      description: text("description"),
      proofUrl: text("proofUrl"),
      file:
        file instanceof File && file.name
          ? { name: file.name, size: file.size, type: file.type }
          : undefined,
    };
    const validation = validateActivity(draft, localToday());
    setErrors(validation);
    setConfirmation("");
    if (Object.keys(validation).length) {
      requestAnimationFrame(() => errorSummary.current?.focus());
      return;
    }
    const record = createPendingActivity(draft, crypto.randomUUID());
    const updatedLocalRecords = [record, ...localRecords];
    // Save on submission, after hydration, so mounting cannot overwrite saved data.
    const persisted = writeStorage(
      storageKeys.activitySubmissions,
      updatedLocalRecords,
    );
    setLocalRecords(updatedLocalRecords);
    form.reset();
    setConfirmation(
      `“${record.title}” was added to your local history as Pending. ${persisted ? "Saved in this browser for your next visit." : "Browser storage is unavailable or full; your entries remain on this page only until a later submission saves successfully."} No information or files were sent. No points were awarded.`,
    );
    requestAnimationFrame(() => successMessage.current?.focus());
  }

  return (
    <>
      <section
        aria-labelledby="summary-heading"
        className="border-b border-line bg-surface"
      >
        <Container className={`${layout} py-8 sm:py-10`}>
          <h2
            id="summary-heading"
            className="text-lg font-semibold text-foreground"
          >
            Your participation
          </h2>
          <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line lg:grid-cols-4">
            {[
              { label: "Activities submitted", value: records.length },
              { label: "Verified", value: verified },
              { label: "Pending", value: pending },
              {
                label: "Points",
                value: verified * demoPointsPerVerifiedActivity,
              },
            ].map((stat) => (
              <div key={stat.label} className="bg-background p-5">
                <dt className="text-sm text-muted">{stat.label}</dt>
                <dd className="mt-2 font-display text-3xl font-bold tracking-[-0.04em] text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm leading-6 text-muted">
            Points are shown for verified demo records. New local submissions
            remain Pending in this prototype.
          </p>
        </Container>
      </section>

      <section
        id="log-activity"
        aria-labelledby="form-heading"
        className="scroll-mt-20 border-b border-line bg-background"
      >
        <Container
          className={`${layout} grid gap-8 py-12 sm:py-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-14`}
        >
          <div>
            <p className={label}>01 / Log an activity</p>
            <h2 id="form-heading" className="text-section mt-4 text-foreground">
              Record what you took part in.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              Log a workshop, a project contribution, a competition, or time
              spent helping the community. Describe your own role and include a
              proof link or file.
            </p>
            <div className="mt-6 rounded-[var(--radius-lg)] bg-surface-ink p-5 text-nav-fg">
              <h3 className="text-base font-semibold">What happens next?</h3>
              <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-6 text-nav-muted">
                <li>Your entry appears in your personal history as Pending.</li>
                <li>
                  It remains separate from the illustrative community activity
                  feed.
                </li>
                <li>Your activity history is saved locally in this browser.</li>
              </ol>
            </div>
          </div>
          <form
            noValidate
            onSubmit={submitActivity}
            className="min-w-0 rounded-[var(--radius-xl)] border border-line bg-surface p-5 sm:p-7"
          >
            <p className="mb-5 text-sm leading-6 text-muted">
              Fields marked * are required. Provide at least one proof link or
              file. Local prototype only.
            </p>
            <noscript>
              <p className="mb-4 text-sm text-danger">
                Enable JavaScript to use the local activity form. No submissions
                are sent to a server.
              </p>
            </noscript>
            {Object.keys(errors).length > 0 && (
              <div
                ref={errorSummary}
                tabIndex={-1}
                role="alert"
                className="mb-6 rounded-[var(--radius-md)] border border-danger/30 bg-danger-soft p-4 text-sm text-foreground"
              >
                <p className="font-semibold">
                  Please check the following fields:
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  {Object.entries(errors).map(([key, message]) => (
                    <li key={key}>
                      <a href={`#activity-${key}`} className="underline">
                        {fieldNames[key as keyof ActivityDraft]}: {message}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <fieldset disabled={!today} className="min-w-0">
              <legend className="sr-only">
                Activity details and supporting proof
              </legend>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label htmlFor="activity-title">
                    Activity / event name *
                  </Label>
                  <Input
                    {...inputAccessibility("title")}
                    required
                    minLength={3}
                    maxLength={100}
                    placeholder="e.g. Web Development Workshop"
                  />
                  {fieldError("title")}
                </div>
                <div className="min-w-0">
                  <Label htmlFor="activity-date">Activity date *</Label>
                  <Input
                    {...inputAccessibility("date")}
                    type="date"
                    required
                    max={today || undefined}
                    className="min-w-0"
                  />
                  {fieldError("date")}
                </div>
                <div>
                  <Label htmlFor="activity-type">Activity type *</Label>
                  <Select
                    {...inputAccessibility("type")}
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a type
                    </option>
                    {activityTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </Select>
                  {fieldError("type")}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="activity-role">Your role *</Label>
                  <Select
                    {...inputAccessibility("role")}
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your role
                    </option>
                    {activityRoles.map((role) => (
                      <option key={role}>{role}</option>
                    ))}
                  </Select>
                  {fieldError("role")}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="activity-description">
                    Short description *
                  </Label>
                  <Textarea
                    {...inputAccessibility("description", "description-hint")}
                    required
                    minLength={20}
                    maxLength={600}
                    placeholder="What did you do, contribute, or learn?"
                  />
                  <p id="description-hint" className="mt-2 text-sm text-muted">
                    20–600 characters. Focus on your contribution.
                  </p>
                  {fieldError("description")}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="activity-proofUrl">Proof link</Label>
                  <Input
                    {...inputAccessibility("proofUrl", "proof-hint")}
                    type="url"
                    inputMode="url"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="none"
                    spellCheck={false}
                    maxLength={2048}
                    placeholder="https://example.com/your-proof"
                  />
                  <p
                    id="proof-hint"
                    className="mt-2 text-sm leading-6 text-muted"
                  >
                    Provide a complete HTTP or HTTPS URL, or choose a file
                    below. Links are not fetched or checked by this prototype.
                  </p>
                  {fieldError("proofUrl")}
                </div>
                <div className="min-w-0 sm:col-span-2">
                  <Label htmlFor="activity-file">
                    Proof file (demo upload)
                  </Label>
                  <Input
                    {...inputAccessibility("file", "file-hint")}
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg,.webp"
                    className="min-w-0 max-w-full text-sm file:mr-3 file:rounded file:border-0 file:bg-surface-2 file:px-3 file:py-1 file:text-foreground"
                  />
                  <p
                    id="file-hint"
                    className="mt-2 text-sm leading-6 text-muted"
                  >
                    PDF, PNG, JPG, or WebP, up to 5 MB. Only the filename and
                    size are saved in this browser; the file contents are not
                    read, uploaded, or saved.
                  </p>
                  {fieldError("file")}
                </div>
              </div>
              <Button
                type="submit"
                variant="accent"
                className="mt-6 h-auto min-h-11 w-full py-3 sm:w-auto"
              >
                <Plus size={16} aria-hidden="true" />
                Submit activity locally
              </Button>
            </fieldset>
            <div
              ref={successMessage}
              tabIndex={-1}
              role="status"
              className={
                confirmation
                  ? "mt-5 rounded-[var(--radius-md)] border border-success/30 bg-success-soft p-4 text-sm leading-7 text-foreground"
                  : ""
              }
            >
              {confirmation && (
                <>
                  <p>{confirmation}</p>
                  <a
                    href="#history"
                    className="mt-2 inline-flex min-h-11 items-center gap-2 font-medium text-accent-hover underline"
                  >
                    View your activity history
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </>
              )}
            </div>
          </form>
        </Container>
      </section>

      <section
        id="history"
        aria-labelledby="history-heading"
        className="scroll-mt-20 border-b border-line bg-surface"
      >
        <Container className={`${layout} py-12 sm:py-16`}>
          <p className={label}>02 / Personal records</p>
          <h2
            id="history-heading"
            className="text-section mt-4 text-foreground"
          >
            My activity history
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            New submissions appear first. Demo records may show Pending,
            Verified, or Needs Review statuses.
          </p>
          <ol className="mt-7 divide-y divide-line border-y border-line">
            {records.map((record) => (
              <li key={record.id} className="py-6">
                <article className="grid gap-3 md:grid-cols-[140px_1fr_150px] md:gap-6">
                  <div>
                    <time
                      dateTime={record.date}
                      className="font-mono text-xs text-muted"
                    >
                      {formatDate(record.date)}
                    </time>
                    <p className="mt-2 text-xs text-muted">
                      {record.demo ? "Mock seed record" : "Local submission"}
                    </p>
                  </div>
                  <div className="min-w-0">
                    <h3 className="break-words text-base font-semibold text-foreground">
                      {record.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      {record.type} · {record.role}
                    </p>
                    <details className="mt-2">
                      <summary className="w-fit min-h-11 cursor-pointer py-3 text-sm font-medium text-accent-hover">
                        View record
                        <span className="sr-only"> for {record.title}</span>
                      </summary>
                      <div className="space-y-3 border-l-2 border-line pl-4 text-sm leading-7 text-muted">
                        <p className="whitespace-pre-wrap break-words">
                          {record.description}
                        </p>
                        {record.reviewNote && <p>{record.reviewNote}</p>}
                        {record.demo && (
                          <p>
                            Proof is illustrative for this seed record; no
                            evidence file is attached.
                          </p>
                        )}
                        {record.proofUrl && (
                          <a
                            href={record.proofUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center text-accent-hover underline"
                          >
                            Open proof link (new tab)
                          </a>
                        )}
                        {record.proofFile && (
                          <p className="break-all">
                            Selected file: {record.proofFile.name} (
                            {Math.ceil(record.proofFile.size / 1024)} KB).
                            Metadata only; no file stored.
                          </p>
                        )}
                      </div>
                    </details>
                  </div>
                  <div>
                    <ActivityBadge status={record.status} />
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        id="community-activity"
        aria-labelledby="community-heading"
        className="scroll-mt-20 border-b border-line bg-background"
      >
        <Container className={`${layout} py-12 sm:py-16`}>
          <div className="grid gap-6 lg:grid-cols-[1fr_280px] lg:items-end">
            <div>
              <p className={label}>03 / Community participation</p>
              <h2
                id="community-heading"
                className="text-section mt-4 text-foreground"
              >
                Verified community activity
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                Explore verified participation across the SAIT community. Your
                personal submissions remain separate from this feed.
              </p>
            </div>
            <div>
              <Label htmlFor="community-filter">Filter by activity type</Label>
              <Select
                id="community-filter"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
              >
                <option value="All">All activities</option>
                {activityTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </Select>
            </div>
          </div>
          <p role="status" className="mt-5 text-sm text-muted">
            Showing {visibleCommunity.length} of {communityActivities.length}{" "}
            records{filter !== "All" ? ` · ${filter}` : ""}.
          </p>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {visibleCommunity.map((record) => (
              <li key={record.id} className="py-5">
                <article className="flex items-start gap-4">
                  <div
                    aria-hidden="true"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-surface-2 font-display text-sm font-semibold text-foreground"
                  >
                    {record.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {record.title}
                      </h3>
                      <Badge tone="success">Verified</Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted">
                      {record.name} · {record.role}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {record.outcome}
                    </p>
                    <p className="mt-2 font-mono text-xs leading-6 text-muted">
                      {record.type} ·{" "}
                      <time dateTime={record.date}>
                        {formatDate(record.date)}
                      </time>
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          {visibleCommunity.length === 0 && (
            <div className="py-8">
              <p className="text-sm text-muted">
                No demo records for this category yet.
              </p>
              <Button
                type="button"
                variant="secondary"
                className="mt-4"
                onClick={() => setFilter("All")}
              >
                Show all activities
              </Button>
            </div>
          )}
          <aside
            aria-labelledby="insights-heading"
            className="mt-8 rounded-[var(--radius-lg)] border border-line bg-surface p-5 sm:p-6"
          >
            <h3
              id="insights-heading"
              className="text-lg font-semibold text-foreground"
            >
              Community snapshot · September 2026
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              Based on all community activity records, regardless of the
              selected filter.
            </p>
            <dl className="mt-5 grid gap-5 sm:grid-cols-3">
              {[
                {
                  label: "Records this month",
                  value: communityActivities.filter((record) =>
                    record.date.startsWith(communitySnapshotMonth),
                  ).length,
                },
                { label: "Most active category", value: topCategory },
                {
                  label: "Verified records",
                  value: communityActivities.length,
                },
              ].map((stat) => (
                <div key={stat.label} className="border-t border-line pt-4">
                  <dt className="text-sm text-muted">{stat.label}</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </Container>
      </section>
    </>
  );
}
