"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/input";

const reasons = ["Join SAIT", "Propose an event", "Collaborate", "Alumni connection", "Project / technical query", "General enquiry"] as const;
type ContactFields = { name: string; email: string; reason: string; message: string };
type ContactErrors = Partial<Record<keyof ContactFields, string>>;

export function validateContact(fields: ContactFields): ContactErrors {
  const errors: ContactErrors = {};
  if (!fields.name.trim() || fields.name.trim().length > 100) errors.name = "Enter your name, up to 100 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()) || fields.email.trim().length > 254) errors.email = "Enter a valid email address, such as name@example.com.";
  if (!reasons.some((reason) => reason === fields.reason)) errors.reason = "Choose a reason for getting in touch.";
  if (fields.message.trim().length < 10 || fields.message.trim().length > 2000) errors.message = "Enter a message between 10 and 2,000 characters.";
  return errors;
}

export function ContactForm() {
  const [ready, setReady] = useState(false);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const errorSummary = useRef<HTMLDivElement>(null);
  const confirmation = useRef<HTMLDivElement>(null);
  useEffect(() => { setReady(true); }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "");
    const issues = validateContact({ name: field("name"), email: field("email"), reason: field("reason"), message: field("message") });
    setErrors(issues);
    setSubmitted(false);
    if (Object.keys(issues).length) {
      requestAnimationFrame(() => errorSummary.current?.focus());
      return;
    }
    setSubmitted(true);
    requestAnimationFrame(() => confirmation.current?.focus());
  }

  const attributes = (field: keyof ContactFields) => ({
    id: `contact-${field}`, name: field, required: true,
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": [field === "message" ? "message-hint" : "", errors[field] ? `contact-error-${field}` : ""].filter(Boolean).join(" ") || undefined,
  });
  const error = (field: keyof ContactFields) => errors[field] ? <p id={`contact-error-${field}`} className="mt-2 text-sm text-danger">{errors[field]}</p> : null;

  return (
    <form onSubmit={submit} onChange={() => setSubmitted(false)} noValidate className="min-w-0 rounded-[var(--radius-xl)] border border-line bg-surface p-5 sm:p-7">
      <h3 className="text-lg font-semibold text-foreground">Start a conversation</h3>
      <p className="mt-3 text-sm leading-7 text-muted">Demo form only. This checks your entries but does not send or store a message. To reach SAIT, use the email address shown on this page.</p>
      <p className="mt-3 text-sm text-muted">All fields are required.</p>
      <noscript><p className="mt-4 text-sm text-muted">Enable JavaScript to try the demo form, or use the email link to open your mail app.</p></noscript>
      {Object.keys(errors).length > 0 && <div ref={errorSummary} role="alert" tabIndex={-1} className="mt-5 rounded-[var(--radius-md)] border border-danger/30 bg-danger-soft p-4 text-sm text-foreground"><p className="font-semibold">Please check your details:</p><ul className="mt-2 list-disc space-y-2 pl-5">{Object.entries(errors).map(([field, message]) => <li key={field}><a href={`#contact-${field}`} className="underline">{message}</a></li>)}</ul></div>}
      <fieldset disabled={!ready} className="mt-6 min-w-0">
        <legend className="sr-only">Your contact details and message</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div><Label htmlFor="contact-name">Name</Label><Input {...attributes("name")} autoComplete="name" maxLength={100} placeholder="Your name" />{error("name")}</div>
          <div className="min-w-0"><Label htmlFor="contact-email">Email</Label><Input {...attributes("email")} type="email" inputMode="email" autoComplete="email" autoCapitalize="none" autoCorrect="off" spellCheck={false} maxLength={254} placeholder="you@example.com" />{error("email")}</div>
          <div className="sm:col-span-2"><Label htmlFor="contact-reason">Reason for contact</Label><Select {...attributes("reason")} defaultValue=""><option value="" disabled>Choose a reason</option>{reasons.map((reason) => <option key={reason}>{reason}</option>)}</Select>{error("reason")}</div>
          <div className="sm:col-span-2"><Label htmlFor="contact-message">Message</Label><Textarea {...attributes("message")} minLength={10} maxLength={2000} placeholder="Tell us what you have in mind." /><p id="message-hint" className="mt-2 text-sm text-muted">10–2,000 characters. A little context helps.</p>{error("message")}</div>
        </div>
        <Button type="submit" variant="accent" className="mt-6 h-auto min-h-11 w-full py-3 sm:w-auto">Try demo submission</Button>
      </fieldset>
      <div ref={confirmation} role="status" tabIndex={-1} className={submitted ? "mt-5 rounded-[var(--radius-md)] border border-success/30 bg-success-soft p-4 text-sm leading-7 text-foreground" : ""}>
        {submitted && <><p className="font-semibold">Demo complete — your form passed validation.</p><p>No message was sent or stored, and no reply will be generated. Your text remains here so you can copy it into your email app.</p></>}
      </div>
    </form>
  );
}
