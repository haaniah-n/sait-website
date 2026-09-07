"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/data/site";
import { desktopNav, moreNav, mobileNav, siteRoutes } from "@/lib/routes";
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
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const moreId = useId();

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
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
        setMoreOpen(false);
      }
    }
    function onClick(event: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, []);

  const moreActive = moreNav.some((item) => isActive(pathname, item.href));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-nav text-nav-fg">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link
          href={siteRoutes.home}
          className="flex min-w-0 items-center gap-3 rounded-[var(--radius-sm)]"
        >
          <span className="grid h-9 w-9 place-items-center rounded-[var(--radius-md)] border border-white/15 bg-white/5 font-display text-sm font-bold tracking-tight">
            SA
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold tracking-wide">{site.shortName}</span>
            <span className="hidden truncate text-[11px] text-nav-muted sm:block">
              Division of IT · SOE, CUSAT
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {desktopNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-[var(--radius-md)] px-3 py-2 text-sm transition-colors duration-[var(--duration-fast)]",
                  active ? "bg-white/10 text-white" : "text-nav-muted hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="relative" ref={moreRef}>
            <button
              type="button"
              className={cn(
                "inline-flex h-10 items-center gap-1 rounded-[var(--radius-md)] px-3 text-sm",
                moreOpen || moreActive
                  ? "bg-white/10 text-white"
                  : "text-nav-muted hover:bg-white/5 hover:text-white",
              )}
              aria-expanded={moreOpen}
              aria-controls={moreId}
              onClick={() => setMoreOpen((value) => !value)}
            >
              More
              <ChevronDown className={cn("h-4 w-4 transition-transform", moreOpen && "rotate-180")} />
            </button>
            {moreOpen ? (
              <div
                id={moreId}
                role="menu"
                className="absolute right-0 mt-2 min-w-48 rounded-[var(--radius-lg)] border border-white/10 bg-surface-ink p-1 shadow-[var(--shadow-lift)]"
              >
                {moreNav.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block rounded-[var(--radius-md)] px-3 py-2.5 text-sm",
                        active ? "bg-white/10 text-white" : "text-nav-muted hover:bg-white/10 hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            href={siteRoutes.notifications}
            aria-label="Notifications"
            aria-current={isActive(pathname, siteRoutes.notifications) ? "page" : undefined}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-[var(--radius-md)] text-nav-muted hover:bg-white/10 hover:text-white",
              isActive(pathname, siteRoutes.notifications) && "bg-white/10 text-white",
            )}
          >
            <Bell className="h-4 w-4" />
          </Link>
          <ButtonLink href={siteRoutes.contact} variant="accent" size="sm" className="hidden sm:inline-flex">
            Contact
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

      {open ? (
        <div id={menuId} className="border-t border-white/10 bg-surface-ink xl:hidden">
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
                      active ? "bg-white/10 text-white" : "text-nav-muted",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
