import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { tools } from "@/data/tools";

export function Tools() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Toolkit" title="Software I Use" align="center" />
        <Reveal
          delay={0.1}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {tools.map((tool) => (
            <span
              key={tool.name}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-fg-secondary transition-colors duration-300 hover:border-accent/50 hover:text-fg"
            >
              {tool.name}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
