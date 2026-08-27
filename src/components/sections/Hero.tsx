import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const specialties = [
  { number: "01", label: "Speedramp" },
  { number: "02", label: "Motion Graphics" },
  { number: "03", label: "Cinematic" },
  { number: "04", label: "Reels" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-10%] h-130 w-205 -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-30deg, var(--color-accent) 0, var(--color-accent) 1px, transparent 1px, transparent 220px)",
            opacity: 0.12,
            maskImage:
              "radial-gradient(ellipse 70% 60% at 65% 35%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 65% 35%, black, transparent)",
          }}
        />
      </div>

      <Container className="grid min-h-[86vh] grid-cols-1 items-center gap-16 py-28 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              {siteConfig.role}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="max-w-4xl font-display text-[13vw] font-medium uppercase leading-[0.95] tracking-tight text-fg sm:text-6xl md:text-7xl lg:text-8xl">
              Speedramp
              <br />
              &amp; Cinematic Edits
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="max-w-xl font-display text-xl text-fg sm:text-2xl">
              {siteConfig.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="max-w-lg text-base text-fg-secondary sm:text-lg">
              I help creators and brands turn raw footage into speedramps,
              motion graphics, cinematic edits, and scroll-stopping reels.
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
          className="mx-auto grid w-full max-w-md grid-cols-2 gap-4"
        >
          {specialties.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col justify-between gap-8 rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/50 ${
                i % 2 === 1 ? "sm:translate-y-6" : ""
              }`}
            >
              <span className="font-display text-sm font-medium text-accent">
                {item.number}
              </span>
              <span className="font-display text-lg font-medium leading-tight text-fg">
                {item.label}
              </span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
