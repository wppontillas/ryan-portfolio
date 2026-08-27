import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Tools } from "@/components/sections/Tools";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Video editor specializing in speedramp, motion graphics, cinematic edits, and reels.",
};

const highlights = [
  {
    number: "01",
    title: "Speedramp Editing",
    description:
      "Beat-synced speed ramps and transitions that grab attention and hold it.",
  },
  {
    number: "02",
    title: "Motion Graphics",
    description:
      "Custom titles, lower thirds, and kinetic typography that add polish and brand identity.",
  },
  {
    number: "03",
    title: "Cinematic Storytelling",
    description:
      "Pacing, color grading, and sound design tuned to the platform the content is going on.",
  },
  {
    number: "04",
    title: "Reliability",
    description:
      "Clear timelines and consistent delivery, so your content calendar never depends on a guess.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pb-16 pt-20 sm:pt-28">
        <Container>
          <Reveal className="flex flex-col gap-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              About
            </span>
            <h1 className="max-w-3xl font-display text-4xl font-medium leading-tight text-fg sm:text-6xl md:text-7xl">
              More Than Just an Editor
            </h1>
            <p className="max-w-2xl text-base text-fg-secondary sm:text-lg">
              I&apos;m Ryan, a video editor specializing in speedramp edits,
              motion graphics, and cinematic storytelling — turning raw
              footage into content built to hold attention.
            </p>
            <div className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-fg-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {siteConfig.name} &middot; {siteConfig.location}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-accent/50"
              >
                <span className="font-display text-sm font-medium text-accent">
                  {item.number}
                </span>
                <h2 className="font-display text-xl font-medium text-fg">
                  {item.title}
                </h2>
                <p className="text-sm text-fg-secondary">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Tools />
      <CTASection />
    </>
  );
}
