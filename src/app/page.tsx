import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Showreel } from "@/components/sections/Showreel";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Workflow } from "@/components/sections/Workflow";
import { Tools } from "@/components/sections/Tools";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ServicesGrid } from "@/components/services/ServicesGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Showreel />
      <SelectedWork />

      <section className="py-24 sm:py-32">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Services"
            title="What I Can Help With"
            description="Speedramps, motion graphics, cinematic edits, and reels — built to fit the platform they're going on."
          />
          <ServicesGrid />
          <ButtonLink href="/services" variant="secondary" className="self-start">
            View All Services
          </ButtonLink>
        </Container>
      </section>

      <Workflow />
      <Tools />
      <Testimonials />
      <CTASection />
    </>
  );
}
