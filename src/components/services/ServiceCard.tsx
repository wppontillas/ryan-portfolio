import type { Service } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-accent/50">
      <div className="flex flex-col gap-3">
        <h3 className="font-display text-2xl font-medium text-fg">
          {service.title}
        </h3>
        <p className="text-sm text-fg-secondary">{service.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {service.forWho.map((f) => (
          <Badge key={f}>{f}</Badge>
        ))}
      </div>

      <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
        {service.includes.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-fg-secondary"
          >
            <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
