"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const sync = () => setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
    sync();
    const onStorage = (event: StorageEvent) => {
      if (event.key !== "sait.theme" && event.key !== null) return;
      document.documentElement.dataset.theme = event.newValue === "light" ? "light" : "dark";
      sync();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  function toggle() {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try { localStorage.setItem("sait.theme", next); } catch { /* The current session still works without storage. */ }
  }

  return (
    <button type="button" onClick={toggle} className="theme-toggle grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-md)] border border-line hover:border-accent" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
      <Sun size={18} className="theme-sun" aria-hidden="true" />
      <Moon size={18} className="theme-moon" aria-hidden="true" />
    </button>
  );
}
