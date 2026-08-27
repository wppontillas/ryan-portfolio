import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { VideoPlayer } from "@/components/portfolio/VideoPlayer";
import { projects, getProjectBySlug } from "@/data/projects";
import { CATEGORIES } from "@/lib/types";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/portfolio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/portfolio/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const categoryLabel =
    CATEGORIES.find((c) => c.value === project.category)?.label ??
    project.category;

  return (
    <>
      <section className="pt-20 sm:pt-28">
        <Container className="flex flex-col gap-8">
          <Link
            href="/portfolio"
            className="text-sm font-medium text-fg-secondary transition-colors hover:text-fg"
          >
            &larr; Back to Portfolio
          </Link>

          <div className="flex flex-col gap-4">
            <Badge>{categoryLabel}</Badge>
            <h1 className="font-display text-4xl font-medium text-fg sm:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-2xl text-base text-fg-secondary sm:text-lg">
              {project.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <VideoPlayer
            videoUrl={project.videoUrl}
            thumbnail={project.thumbnail}
            title={project.title}
          />
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-fg-secondary">
                Client Type
              </h2>
              <p className="mt-3 text-fg">{project.clientType}</p>
            </div>

            {project.goal && (
              <div>
                <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-fg-secondary">
                  Goal
                </h2>
                <p className="mt-3 text-fg">{project.goal}</p>
              </div>
            )}

            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-fg-secondary">
                Year
              </h2>
              <p className="mt-3 text-fg">{project.year}</p>
            </div>

            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-fg-secondary">
                My Work
              </h2>
              <ul className="mt-3 flex flex-col gap-2">
                {project.services.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-fg">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-fg-secondary">
                Tools
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
