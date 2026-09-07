import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { PageHeading, Section } from "@/components/ui/section";

type PlaceholderPageProps = {
  title: string;
  eyebrow: string;
  description: string;
  notes?: string[];
};

export function PlaceholderPage({ title, eyebrow, description, notes = [] }: PlaceholderPageProps) {
  return (
    <Section>
      <PageHeading eyebrow={eyebrow} title={title} description={description} />
      <Card className="mt-8">
        <Badge tone="accent">Prototype placeholder</Badge>
        <CardTitle className="mt-4">Layout reserved — content comes next</CardTitle>
        <CardDescription>
          This route is wired and uses the shared SAIT design system. Section designs are not built
          in this step.
        </CardDescription>
        {notes.length > 0 ? (
          <ul className="mt-4 space-y-2 text-support">
            {notes.map((note) => (
              <li key={note}>• {note}</li>
            ))}
          </ul>
        ) : null}
      </Card>
    </Section>
  );
}
