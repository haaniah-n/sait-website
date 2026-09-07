import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = { title: "Notifications" };

export default function NotificationsPage() {
  return (
    <PlaceholderPage
      eyebrow="Notifications"
      title="Updates for members"
      description="Prototype inbox. Read state can persist in localStorage later."
      notes={[
        "Items from src/data/notifications.ts.",
        "storageKeys.readNotifications is reserved in src/lib/storage.ts.",
      ]}
    />
  );
}
