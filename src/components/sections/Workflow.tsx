import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { workflowSteps } from "@/data/services";

export function Workflow() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Process"
          title="How I Work"
          description="A simple, transparent process from raw footage to final delivery."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((item, i) => (
            <Reveal
              key={item.step}
              delay={i * 0.1}
              className="relative flex flex-col gap-4 border-t border-border pt-6"
            >
              <span className="font-display text-4xl font-medium text-accent">
                {item.step}
              </span>
              <h3 className="font-display text-xl font-medium text-fg">
                {item.title}
              </h3>
              <p className="text-sm text-fg-secondary">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
