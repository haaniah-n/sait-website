const isBrowser = () => typeof window !== "undefined";

export function readStorage<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;

  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeStorage<T>(key: string, value: T) {
  if (!isBrowser()) return false;

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    // Callers can keep working in memory when storage is unavailable.
    return false;
  }
}

export const storageKeys = {
  readNotifications: "sait.readNotifications",
  activitySubmissions: "sait.activitySubmissions.v1",
} as const;
