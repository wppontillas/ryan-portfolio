import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { Workflow } from "@/components/sections/Workflow";
import { Tools } from "@/components/sections/Tools";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Short-form, YouTube, and podcast video editing, plus Creative VA support for your entire content workflow.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pb-16 pt-20 sm:pt-28">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="How I Can Help"
            description="Editing built for the platform it's going on, plus operational support so your content workflow never stalls."
          />
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <ServicesGrid />
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal className="flex flex-col items-center gap-3 rounded-3xl border border-border bg-card px-8 py-14 text-center">
            <h2 className="font-display text-2xl font-medium text-fg sm:text-3xl">
              Pricing
            </h2>
            <p className="max-w-xl text-base text-fg-secondary">
              Pricing depends on project scope, video length, editing
              complexity, and ongoing requirements. Request a quote and
              I&apos;ll get back to you with a plan suited to your content.
            </p>
          </Reveal>
        </Container>
      </section>

      <Workflow />
      <Tools />
      <CTASection />
    </>
  );
}
