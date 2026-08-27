import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { BeforeAfter } from "@/components/portfolio/BeforeAfter";
import { CTASection } from "@/components/sections/CTASection";
import { projects, getProjectsWithBeforeAfter } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Short-form, YouTube, podcast, commercial, and social media video editing work.",
};

export default function PortfolioPage() {
  const beforeAfterProjects = getProjectsWithBeforeAfter();

  return (
    <>
      <section className="pb-16 pt-20 sm:pt-28">
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected Work"
            description="Browse by category to see how each project was approached."
          />
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <PortfolioGrid projects={projects} />
        </Container>
      </section>

      {beforeAfterProjects.length > 0 && (
        <section className="pb-24 sm:pb-32">
          <Container className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Before &amp; After"
              title="Raw Footage → Final Edit"
              description="A direct look at the transformation editing brings to raw footage."
            />
            <div className="flex flex-col gap-16">
              {beforeAfterProjects.map((project) => (
                <Reveal key={project.id} className="flex flex-col gap-4">
                  <h3 className="font-display text-xl font-medium text-fg">
                    {project.title}
                  </h3>
                  <BeforeAfter data={project.beforeAfter!} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
