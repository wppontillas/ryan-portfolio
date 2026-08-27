import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Testimonials" title="What Clients Say" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <p className="text-base text-fg">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="text-sm font-medium text-fg">{t.name}</p>
                <p className="text-sm text-fg-secondary">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
