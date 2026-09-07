import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { footerNav, site } from "@/data/site";
import { siteRoutes } from "@/lib/routes";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-surface-ink text-nav-fg">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href={siteRoutes.home} className="inline-flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-[var(--radius-md)] border border-white/15 bg-white/5 font-display text-sm font-bold">
              SA
            </span>
            <span className="text-lg font-semibold">{site.shortName}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-nav-muted">{site.name}</p>
          <p className="mt-1 text-sm text-white/50">
            {site.division}
            <br />
            {site.school}
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-nav-muted">
            <MapPin className="h-4 w-4" aria-hidden />
            {site.location}
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-nav-muted">
            <Mail className="h-4 w-4" aria-hidden />
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </p>
        </div>

        {footerNav.map((group) => (
          <div key={group.heading}>
            <p className="text-label text-accent">{group.heading}</p>
            <ul className="mt-4 space-y-1">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center text-sm text-nav-muted hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-4 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.shortName} · {site.university}
          </p>
          <p>Frontend prototype · mock data only</p>
        </Container>
      </div>
    </footer>
  );
}
