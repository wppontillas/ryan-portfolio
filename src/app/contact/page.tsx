import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a video editing project — tell me about your content and goals.",
};

export default function ContactPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Contact"
            title="Start a Project"
            description="Tell me about your footage and goals — I'll follow up with next steps."
          />
          <div className="flex flex-col gap-1 text-sm text-fg-secondary">
            <p>{siteConfig.email}</p>
            <p>{siteConfig.location}</p>
          </div>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
