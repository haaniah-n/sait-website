"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
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
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-white/10 bg-nav text-nav-fg">
      <Container className="flex h-16 items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href={siteRoutes.home}
          className="flex min-w-0 items-center gap-3 rounded-[var(--radius-sm)]"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[var(--radius-md)] border border-white/15 bg-white/5 font-display text-sm font-bold tracking-tight">
            SA
          </span>

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
                  "rounded-[var(--radius-md)] px-3 py-2 text-sm transition-colors duration-[var(--duration-fast)]",
                  active
                    ? "bg-accent-soft text-accent-fg ring-1 ring-inset ring-accent/30"
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
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </Container>

      {/* Mobile navigation */}
      {open ? (
        <div
          id={menuId}
          className="border-t border-white/10 bg-surface-ink xl:hidden"
        >
          <Container className="max-h-[calc(100dvh-4rem)] overflow-y-auto py-3">
            <nav aria-label="Mobile" className="grid gap-1">
              {mobileNav.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-11 items-center rounded-[var(--radius-md)] px-3 py-2.5 text-sm",
                      active
                        ? "bg-accent-soft text-accent-fg ring-1 ring-inset ring-accent/30"
                        : "text-nav-muted hover:bg-surface-2 hover:text-accent-fg",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="my-2 border-t border-white/10" />

              <Link
                href={siteRoutes.contact}
                className="flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-accent px-4 py-2.5 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover"
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