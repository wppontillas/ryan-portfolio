import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-10%] h-130 w-205 -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-fg) 1px, transparent 1px), linear-gradient(to bottom, var(--color-fg) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <Container className="grid min-h-[86vh] grid-cols-1 items-center gap-12 py-28 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              {siteConfig.role}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="max-w-4xl font-display text-[13vw] font-medium uppercase leading-[0.95] tracking-tight text-fg sm:text-6xl md:text-7xl lg:text-8xl">
              Video Editor
              <br />
              &amp; Creative VA
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="max-w-xl font-display text-xl text-fg sm:text-2xl">
              {siteConfig.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="max-w-lg text-base text-fg-secondary sm:text-lg">
              I help creators turn raw footage into engaging short-form
              content quickly, using Premiere Pro and AI-assisted workflows.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href={siteConfig.ctaPrimary.href} variant="primary">
                {siteConfig.ctaPrimary.label}
              </ButtonLink>
              <ButtonLink
                href={siteConfig.ctaSecondary.href}
                variant="secondary"
              >
                {siteConfig.ctaSecondary.label}
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="relative mx-auto aspect-square w-full max-w-lg"
        >
          <Image
            src="/hero-creative-va-animated.svg"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 80vw"
            className="object-contain"
          />
        </Reveal>
      </Container>
    </section>
  );
}
