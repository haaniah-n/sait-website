"use client";

import Link from "next/link";
import { SaitLogo } from "@/components/ui/sait-logo";
import { ThemeToggle } from "./theme-toggle";
import { Bell, Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useNavIndicator } from "@/components/effects/use-nav-indicator";
import { usePointerEffects } from "@/components/effects/use-pointer-effects";
import { usePathname } from "next/navigation";

import { site } from "@/data/site";
import { desktopNav, mobileNav, siteRoutes } from "@/lib/routes";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { Button, ButtonLink } from "@/components/ui/button";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  useNavIndicator(navRef, pathname);
  usePointerEffects(headerRef, pathname === "/");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const header = headerRef.current;
    const main = document.getElementById("main");
    const footer = document.querySelector("footer");
    if (main) main.inert = true;
    if (footer) footer.inert = true;
    function trap(event: KeyboardEvent) {
      if (event.key !== "Tab" || !header) return;
      const items = Array.from(
        header.querySelectorAll<HTMLElement>("a[href], button"),
      ).filter((item) => item.getClientRects().length);
      const first = items[0],
        last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
    const wide = matchMedia("(min-width: 1280px)");
    const closeOnWide = () => {
      if (wide.matches) setOpen(false);
    };
    wide.addEventListener("change", closeOnWide);
    window.addEventListener("keydown", trap);
    return () => {
      if (main) main.inert = false;
      if (footer) footer.inert = false;
      window.removeEventListener("keydown", trap);
      wide.removeEventListener("change", closeOnWide);
      if (previous?.isConnected) previous.focus();
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-line bg-nav text-nav-fg"
    >
      <Container className="flex h-16 items-center justify-between gap-2 sm:gap-4 max-w-7xl sm:px-8 lg:px-10">
        {/* Brand */}
        <Link
          href={siteRoutes.home}
          className="flex min-w-0 items-center gap-3 rounded-[var(--radius-sm)]"
        >
          <SaitLogo className="h-9 w-9 sm:h-10 sm:w-10" />

          <span className="min-w-0">
            <span className="block text-sm font-semibold tracking-wide">
              {site.shortName}
            </span>

            <span className="hidden truncate text-[11px] text-nav-muted sm:block">
              Division of IT · SOE, CUSAT
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          ref={navRef}
          className="sait-desktop-nav hidden items-center gap-0.5 xl:flex"
          aria-label="Primary"
        >
          <span className="sait-nav-indicator" aria-hidden="true" />
          {desktopNav.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-[var(--radius-md)] px-3 py-2 text-sm transition-colors duration-[var(--duration-fast)]",
                  active
                    ? "text-accent-fg"
                    : "text-nav-muted hover:bg-surface-2 hover:text-accent-fg",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            href={siteRoutes.notifications}
            aria-label="Notifications and announcements"
            title="Notifications"
            className="relative hidden h-10 w-10 place-items-center rounded-[var(--radius-md)] text-nav-muted transition-colors duration-[var(--duration-fast)] hover:bg-surface-2 hover:text-accent-fg xl:grid"
          >
            <Bell size={18} aria-hidden="true" />

            <span
              aria-hidden="true"
              className="absolute right-2 top-2 h-2 w-2 rounded-full bg-signal"
            />
          </Link>

          <ThemeToggle />
          <ButtonLink
            href={siteRoutes.contact}
            variant="accent"
            size="sm"
            className="hidden sm:inline-flex"
            data-pointer={pathname === "/" ? "magnetic" : undefined}
          >
            Get Involved
          </ButtonLink>

          <Button
            type="button"
            variant="nav"
            size="sm"
            className="h-11 w-11 px-0 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </Container>

      {/* Mobile navigation */}
      {open ? (
        <div
          id={menuId}
          className="fixed inset-x-0 bottom-0 top-16 border-t border-line bg-background xl:hidden"
        >
          <Container className="h-full overflow-y-auto py-6 sm:py-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
              SAIT / Explore the collective
            </p>
            <nav aria-label="Mobile" className="grid gap-1">
              {mobileNav.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center border-b border-line py-2 font-display text-2xl sm:text-3xl",
                      active
                        ? "bg-accent-soft text-accent-fg ring-1 ring-inset ring-accent/30"
                        : "text-nav-muted hover:bg-surface-2 hover:text-accent-fg",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="my-2 border-t border-line" />

              <Link
                href={siteRoutes.contact}
                className="flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-signal px-4 py-2.5 text-sm font-medium text-on-accent transition-colors hover:bg-signal-hover"
              >
                Get Involved
              </Link>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
