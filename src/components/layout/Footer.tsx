import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const socials = siteConfig.socials.filter((s) => s.href);
  const year = 2026;

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <Container className="flex flex-col gap-10 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <p className="font-display text-lg font-semibold text-fg">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-fg-secondary">{siteConfig.role}</p>
            <p className="mt-4 text-sm text-fg-secondary">
              {siteConfig.location}
            </p>
          </div>

          <div className="flex flex-wrap gap-10 sm:gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-fg-secondary">
                Sitemap
              </span>
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-fg-secondary transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-fg-secondary">
                Contact
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-fg-secondary transition-colors hover:text-fg"
              >
                {siteConfig.email}
              </a>
              {socials.length > 0 && (
                <div className="flex flex-col gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-fg-secondary transition-colors hover:text-fg"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-fg-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.role}</p>
        </div>
      </Container>
    </footer>
  );
}
