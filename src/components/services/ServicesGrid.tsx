import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {services.map((service, i) => (
        <Reveal key={service.id} delay={(i % 2) * 0.1}>
          <ServiceCard service={service} />
        </Reveal>
      ))}
    </div>
  );
}
