import type { Testimonial } from "@/types";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export function TestimonialCard({
  testimonial,
  index = 0,
}: TestimonialCardProps) {
  return (
    <div
      className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:shadow-elegant transition-smooth"
      data-ocid={`testimonials.item.${index + 1}`}
    >
      {/* Quote icon */}
      <Quote className="w-7 h-7 text-primary/30" />

      {/* Rating */}
      <div className="flex gap-0.5">
        {Array.from({ length: testimonial.rating }, (_, i) => i).map((i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>

      {/* Review */}
      <p className="text-sm text-foreground/80 leading-relaxed italic flex-1">
        "{testimonial.review}"
      </p>

      {/* Author */}
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div>
          <p className="font-body font-bold text-sm text-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">{testimonial.service}</p>
        </div>
        <span className="text-xs text-muted-foreground/60">
          {testimonial.date}
        </span>
      </div>
    </div>
  );
}
