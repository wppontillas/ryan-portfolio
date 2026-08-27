import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { getFeaturedProjects } from "@/data/projects";

const spans = [
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
];

export function SelectedWork() {
  const projects = getFeaturedProjects();

  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected Work"
            description="A cross-section of recent speedramp, motion graphics, cinematic, and reels edits."
          />
          <div className="hidden sm:block">
            <ButtonLink href="/portfolio" variant="secondary">
              View My Work
            </ButtonLink>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              delay={(i % 3) * 0.08}
              className={spans[i % spans.length]}
            >
              <PortfolioCard project={project} priority={i === 0} className="h-full" />
            </Reveal>
          ))}
        </div>

        <div className="sm:hidden">
          <ButtonLink href="/portfolio" variant="secondary" className="w-full">
            View My Work
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
