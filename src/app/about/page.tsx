import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Tools } from "@/components/sections/Tools";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Video editor and Creative VA combining editing skill with technical and operational support.",
};

const highlights = [
  {
    title: "Video Editing",
    description:
      "Pacing, color, and sound design tuned to the platform the content is going on.",
  },
  {
    title: "Reliability",
    description:
      "Clear timelines and consistent delivery, so your content calendar never depends on a guess.",
  },
  {
    title: "Remote Collaboration",
    description:
      "Comfortable working async across time zones with clear, frequent communication.",
  },
  {
    title: "Organization",
    description:
      "Structured file systems and project tracking that keep raw footage and deliverables easy to find.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pb-16 pt-20 sm:pt-28">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              About
            </span>
            <h1 className="font-display text-4xl font-medium leading-tight text-fg sm:text-5xl">
              More Than Just an Editor
            </h1>
            <p className="text-base text-fg-secondary sm:text-lg">
              I combine video editing skills with technical knowledge and
              Virtual Assistant capabilities, allowing me to support both the
              creative and operational side of a client&apos;s content
              workflow.!
            </p>
            <p className="text-base text-fg-secondary">
              {siteConfig.name} &middot; {siteConfig.location}
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border"
          >
            <Image
              src="/placeholders/portrait.svg"
              alt="Portrait placeholder"
              fill
              sizes="(min-width: 1024px) 30vw, 80vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className="flex flex-col gap-3 border-t border-border pt-6"
              >
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
