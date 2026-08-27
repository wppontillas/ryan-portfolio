import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/portfolio/VideoPlayer";

export function Showreel() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Showreel"
          title="Creative Editing"
          description="A showcase of my editing style, featuring dynamic cuts, smooth transitions, color grading, motion, and sound design."
        />
        <Reveal delay={0.1}>
          <VideoPlayer
            videoUrl="/videos/showreel.mp4"
            thumbnail="/placeholders/showreel.svg"
            title="Showreel"
            aspect="aspect-video"
            eager
          />
        </Reveal>
      </Container>
    </section>
  );
}
