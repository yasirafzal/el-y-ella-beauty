import { Badge } from "@/components/ui/badge";
import type { Service } from "@/types";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

const categoryColors: Record<Service["category"], string> = {
  hair: "bg-primary/10 text-primary",
  color: "bg-accent/20 text-accent-foreground",
  nails: "bg-secondary/20 text-primary",
  facial: "bg-secondary text-secondary-foreground",
  grooming: "bg-muted text-muted-foreground",
  treatment: "bg-primary/5 text-primary",
};

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <div
      className="group bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:shadow-lift hover:-translate-y-1 transition-smooth cursor-default"
      data-ocid={`services.item.${index + 1}`}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl shrink-0">
        {service.icon}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-lg italic text-foreground leading-tight">
            {service.name}
          </h3>
          <Badge
            className={`text-xs shrink-0 border-0 font-body font-semibold ${categoryColors[service.category]}`}
          >
            {service.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div>
          <span className="font-display text-xl italic text-primary">
            {service.price}
          </span>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
            <Clock className="w-3 h-3" />
            <span>{service.duration}</span>
          </div>
        </div>
        <Link
          to="/booking"
          className="flex items-center gap-1 text-xs font-body font-semibold uppercase tracking-wider text-primary hover:gap-2 transition-all duration-200 group-hover:text-primary/80"
          data-ocid={`services.book_button.${index + 1}`}
        >
          Book <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
