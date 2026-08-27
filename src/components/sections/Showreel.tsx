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
          title="60 Seconds of My Work"
          description="A quick look at pacing, color, and sound design across recent projects."
        />
        <Reveal delay={0.1}>
          <VideoPlayer
            videoUrl=""
            thumbnail="/placeholders/showreel.svg"
            title="Showreel"
            aspect="aspect-video"
          />
        </Reveal>
      </Container>
    </section>
  );
}
