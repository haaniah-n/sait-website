import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PlaceholderPage
      eyebrow="Contact"
      title="Reach SAIT"
      description="Local-only contact form prototype plus location and social links."
      notes={["Form primitives (Input, Textarea, Button) are ready to compose."]}
    />
  );
}
