import { Hero } from "@/components/sections/Hero";
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
      <Showreel />
      <SelectedWork />

      <section className="py-24 sm:py-32">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Services"
            title="What I Can Help With"
            description="From short-form edits to full Creative VA support — one person who can own your entire content workflow."
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
