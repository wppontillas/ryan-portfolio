import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const specialties = [
  { number: "01", label: "Speedramp", icon: "speedramp" },
  { number: "02", label: "Motion Graphics", icon: "motion-graphics" },
  { number: "03", label: "Cinematic", icon: "cinematic" },
  { number: "04", label: "Reels", icon: "reels" },
] as const;

function SpecialtyIcon({ icon }: { icon: (typeof specialties)[number]["icon"] }) {
  switch (icon) {
    case "speedramp":
      return (
        <>
          <path d="M12 62A38 38 0 0 1 88 62" />
          <path d="M12 62h8M88 62h-8M50 22v8" />
          <circle cx="50" cy="62" r="4" fill="currentColor" stroke="none" />
          <g className="icon-gauge-needle">
            <path d="M50 62 74 34" />
          </g>
        </>
      );
    case "motion-graphics":
      return (
        <>
          <path className="icon-motion-path" d="M15 75C35 75 35 25 50 25S65 75 85 75" />
          <rect
            className="icon-motion-node"
            style={{ animationDelay: "0s" }}
            x="11"
            y="71"
            width="8"
            height="8"
          />
          <rect
            className="icon-motion-node"
            style={{ animationDelay: "0.3s" }}
            x="46"
            y="21"
            width="8"
            height="8"
          />
          <rect
            className="icon-motion-node"
            style={{ animationDelay: "0.6s" }}
            x="81"
            y="71"
            width="8"
            height="8"
          />
        </>
      );
    case "cinematic":
      return (
        <>
          <rect x="15" y="42" width="70" height="42" rx="6" />
          <path d="M15 58h70" />
          <g className="icon-clapper-top">
            <path
              d="M17 42 13 24h14l4 18M41 42l-4-18h14l4 18M65 42l-4-18h14l4 18"
              transform="translate(0 -3) skewX(-18)"
            />
            <rect x="12" y="18" width="76" height="15" rx="4" />
          </g>
        </>
      );
    case "reels":
      return (
        <>
          <rect x="27" y="12" width="46" height="76" rx="12" />
          <path d="M27 30h46M27 70h46" />
          <path className="icon-reel-play" d="M43 40 62 50 43 60Z" />
        </>
      );
    default:
      return null;
  }
}

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
              className={`relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/50 ${
                i % 2 === 1 ? "sm:translate-y-6" : ""
              }`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 text-accent opacity-[0.18]"
              >
                <SpecialtyIcon icon={item.icon} />
              </svg>
              <span className="relative font-display text-sm font-medium text-accent">
                {item.number}
              </span>
              <span className="relative font-display text-lg font-medium leading-tight text-fg">
                {item.label}
              </span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
