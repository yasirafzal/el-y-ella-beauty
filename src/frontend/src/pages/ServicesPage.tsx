import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/data/content";
import type { Service } from "@/types";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const categories: { label: string; value: Service["category"] | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Hair", value: "hair" },
  { label: "Color", value: "color" },
  { label: "Nails", value: "nails" },
  { label: "Facial", value: "facial" },
  { label: "Grooming", value: "grooming" },
  { label: "Treatment", value: "treatment" },
];

const categoryColors: Record<Service["category"], string> = {
  hair: "bg-primary/10 text-primary border-primary/20",
  color: "bg-accent/20 text-accent-foreground border-accent/20",
  nails: "bg-pink-100/80 text-primary border-primary/15",
  facial: "bg-secondary text-secondary-foreground border-secondary",
  grooming: "bg-muted text-muted-foreground border-border",
  treatment: "bg-primary/5 text-primary border-primary/15",
};

const serviceHighlights: Record<string, string[]> = {
  "hair-styling": [
    "Custom cut consultation",
    "Blowout & finish",
    "Style recommendations",
  ],
  "hair-coloring": [
    "Ammonia-free formulas",
    "Complimentary toner",
    "Aftercare kit included",
  ],
  "facial-treatment": [
    "Skin analysis included",
    "Premium botanical products",
    "LED light therapy add-on",
  ],
  "manicure-pedicure": [
    "Gel or classic options",
    "Cuticle care & massage",
    "Top coat & art designs",
  ],
  barbering: [
    "Hot towel shave option",
    "Beard sculpting & oil",
    "Precision fade or taper",
  ],
  "hair-treatment": [
    "Olaplex bond repair",
    "Keratin smoothing",
    "Scalp health assessment",
  ],
};

interface ServiceDetailCardProps {
  service: Service;
  index: number;
}

function ServiceDetailCard({ service, index }: ServiceDetailCardProps) {
  const highlights = serviceHighlights[service.id] ?? [];

  return (
    <motion.div
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lift hover:-translate-y-1 transition-smooth flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      data-ocid={`services.item.${index + 1}`}
    >
      {/* Card top accent stripe */}
      <div className="h-1.5 w-full gradient-primary" />

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Icon + Badge */}
        <div className="flex items-start justify-between gap-2">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl shadow-elegant shrink-0">
            {service.icon}
          </div>
          <Badge
            className={`text-xs border font-body font-semibold capitalize rounded-full px-2.5 ${categoryColors[service.category]}`}
          >
            {service.category}
          </Badge>
        </div>

        {/* Title & Description */}
        <div className="flex-1">
          <h3 className="font-display text-xl italic text-foreground mb-2 leading-tight">
            {service.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Highlights */}
        {highlights.length > 0 && (
          <ul className="space-y-1.5">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-2 text-xs text-muted-foreground"
              >
                <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Price + Duration */}
        <div className="flex items-end justify-between pt-3 border-t border-border">
          <div>
            <span className="font-display text-2xl italic text-primary">
              {service.price}
            </span>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
              <Clock className="w-3 h-3" />
              <span>{service.duration}</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/booking"
          search={{ service: service.id }}
          data-ocid={`services.book_service_button.${index + 1}`}
        >
          <Button
            size="sm"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-body font-semibold uppercase tracking-wider text-xs shadow-elegant transition-smooth flex items-center justify-center gap-2 group-hover:shadow-lift"
          >
            Book This Service <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<
    Service["category"] | "all"
  >("all");

  const filtered =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div data-ocid="services.page">
      {/* Header */}
      <section
        className="bg-card border-b border-border py-12 sm:py-16"
        data-ocid="services.header_section"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-body font-bold uppercase tracking-widest text-primary mb-4">
              <Sparkles className="w-3.5 h-3.5" /> What We Offer
            </span>
            <h1 className="font-display text-4xl sm:text-5xl italic text-foreground mb-4">
              Our Services
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Every service is thoughtfully curated to give you the ultimate
              beauty experience — from first touch to final reveal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section
        className="sticky top-16 sm:top-20 z-30 bg-background/95 backdrop-blur-sm border-b border-border py-3"
        data-ocid="services.filter_section"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={`shrink-0 text-xs font-body font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-smooth ${
                  activeCategory === cat.value
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
                data-ocid={`services.filter.${cat.value}_tab`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="py-12 sm:py-16 bg-background"
        data-ocid="services.grid_section"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((service, i) => (
              <ServiceDetailCard key={service.id} service={service} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              className="text-center py-16 text-muted-foreground"
              data-ocid="services.empty_state"
            >
              <p className="font-display text-2xl italic mb-2">
                No services found
              </p>
              <p className="text-sm">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Banner */}
      <section
        className="py-10 bg-muted/30 border-y border-border"
        data-ocid="services.info_section"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: "💎",
                title: "Premium Products",
                desc: "We use only top-tier, professionally curated beauty products.",
              },
              {
                icon: "🌸",
                title: "Women-Led Studio",
                desc: "Owned and operated by passionate women who put clients first.",
              },
              {
                icon: "⏱️",
                title: "Punctual & Personal",
                desc: "Your time is precious — we honour every appointment with care.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-3 px-4"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="font-display text-lg italic text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 sm:py-16 bg-background"
        data-ocid="services.cta_section"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl italic text-foreground mb-3">
            Not Sure Which Service?
          </h2>
          <p className="text-muted-foreground mb-6 text-sm max-w-sm mx-auto">
            Book a complimentary consultation and let our experts guide you to
            the perfect treatment.
          </p>
          <Link to="/booking" data-ocid="services.book_now_button">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 font-body font-semibold uppercase tracking-wider text-xs shadow-elegant transition-smooth">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
