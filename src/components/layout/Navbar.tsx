"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
          scrolled
            ? "border-b border-border bg-bg/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <Container className="flex h-18 items-center justify-between py-4">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-fg"
          >
            {siteConfig.name}
          </Link>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary"
          >
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors ${
                    active ? "text-fg" : "text-fg-secondary hover:text-fg"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <ButtonLink href={siteConfig.ctaSecondary.href} variant="primary">
              {siteConfig.ctaSecondary.label}
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
              <path d="M0 1h18M0 11h18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </Container>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
