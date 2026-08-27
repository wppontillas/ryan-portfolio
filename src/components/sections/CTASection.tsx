import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function CTASection({
  title = "Have footage that needs editing?",
  description = "Let's turn it into something worth watching.",
  buttonLabel = "Start a Project",
  buttonHref = "/contact",
}: {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-card px-8 py-20 text-center">
          <h2 className="font-display text-3xl font-medium text-fg sm:text-5xl">
            {title}
          </h2>
          <p className="max-w-xl text-base text-fg-secondary sm:text-lg">
            {description}
          </p>
          <ButtonLink href={buttonHref} variant="primary" className="mt-2">
            {buttonLabel}
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
