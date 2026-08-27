"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { certificates } from "@/data/certificates";
import type { Certificate } from "@/lib/types";

export function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Certifications"
          title="Training & Certificates"
          description="Formal training completed to back up hands-on editing experience."
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {certificates.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.08}>
              <button
                type="button"
                onClick={() => setActive(cert)}
                aria-label={`View certificate: ${cert.title}`}
                className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-colors duration-300 hover:border-accent/50"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-secondary">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1 p-5">
                  <h3 className="font-display text-lg font-medium text-fg">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-fg-secondary">
                    {cert.issuer} &middot; {cert.date}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg/80 text-fg"
          >
            &times;
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-2xl bg-bg-secondary"
          >
            <Image
              src={active.image}
              alt={active.title}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
