import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { footerNav, site } from "@/data/site";
import { siteRoutes } from "@/lib/routes";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-surface-ink text-nav-fg">
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-12">
          {/* SAIT identity */}
          <div>
            <Link
              href={siteRoutes.home}
              className="inline-flex items-center gap-3"
            >
              <span className="grid h-9 w-9 place-items-center rounded-[var(--radius-md)] border border-line-strong bg-surface-2 font-display text-sm font-bold">
                SA
              </span>

              <span className="text-lg font-semibold">{site.shortName}</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-nav-muted">
              {site.name}
            </p>

            <p className="mt-1 text-sm leading-6 text-nav-muted">
              {site.division}
              <br />
              {site.school}
            </p>

            <div className="mt-5 space-y-2">
              <a
                href={site.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-2 text-sm text-nav-muted transition-colors hover:text-accent-fg"
              >
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                {site.location}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex min-h-11 items-center gap-2 text-sm text-nav-muted transition-colors hover:text-accent-fg"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {site.email}
              </a>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-2">
              <span className="mr-2 text-[10px] uppercase tracking-[0.14em] text-nav-muted">
                Follow
              </span>

              <span
                aria-label="Instagram coming soon"
                className="grid h-9 w-9 cursor-default place-items-center rounded-full border border-line text-nav-muted"
              >
                <Instagram size={15} aria-hidden="true" />
              </span>

              <span
                aria-label="LinkedIn coming soon"
                className="grid h-9 w-9 cursor-default place-items-center rounded-full border border-line text-nav-muted"
              >
                <Linkedin size={15} aria-hidden="true" />
              </span>

              <span
                aria-label="GitHub coming soon"
                className="grid h-9 w-9 cursor-default place-items-center rounded-full border border-line text-nav-muted"
              >
                <Github size={15} aria-hidden="true" />
              </span>
            </div>
          </div>

          {/* Navigation */}
          {footerNav.map((group) => (
            <div key={group.heading}>
              <p className="text-label text-accent">{group.heading}</p>

              <ul className="mt-4 space-y-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-flex min-h-11 items-center gap-1 text-sm text-nav-muted transition-colors hover:text-accent-fg"
                    >
                      {item.label}

                      <ArrowUpRight
                        size={12}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-4 text-xs text-nav-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.shortName} · {site.university}
          </p>

          <p>Frontend prototype · mock data only</p>
        </Container>
      </div>
    </footer>
  );
}
