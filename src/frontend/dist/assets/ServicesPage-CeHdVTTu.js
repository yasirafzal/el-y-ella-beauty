import { r as reactExports, b as services, j as jsxRuntimeExports, L as Link, B as Button, C as Clock } from "./index-pqJfj0nS.js";
import { S as Sparkles, B as Badge, A as ArrowRight } from "./badge-Ckkyr3c4.js";
import { m as motion } from "./proxy-CnWLzlnk.js";
import { C as Check } from "./check-spWedXUQ.js";
const categories = [
  { label: "All", value: "all" },
  { label: "Hair", value: "hair" },
  { label: "Color", value: "color" },
  { label: "Nails", value: "nails" },
  { label: "Facial", value: "facial" },
  { label: "Grooming", value: "grooming" },
  { label: "Treatment", value: "treatment" }
];
const categoryColors = {
  hair: "bg-primary/10 text-primary border-primary/20",
  color: "bg-accent/20 text-accent-foreground border-accent/20",
  nails: "bg-pink-100/80 text-primary border-primary/15",
  facial: "bg-secondary text-secondary-foreground border-secondary",
  grooming: "bg-muted text-muted-foreground border-border",
  treatment: "bg-primary/5 text-primary border-primary/15"
};
const serviceHighlights = {
  "hair-styling": [
    "Custom cut consultation",
    "Blowout & finish",
    "Style recommendations"
  ],
  "hair-coloring": [
    "Ammonia-free formulas",
    "Complimentary toner",
    "Aftercare kit included"
  ],
  "facial-treatment": [
    "Skin analysis included",
    "Premium botanical products",
    "LED light therapy add-on"
  ],
  "manicure-pedicure": [
    "Gel or classic options",
    "Cuticle care & massage",
    "Top coat & art designs"
  ],
  barbering: [
    "Hot towel shave option",
    "Beard sculpting & oil",
    "Precision fade or taper"
  ],
  "hair-treatment": [
    "Olaplex bond repair",
    "Keratin smoothing",
    "Scalp health assessment"
  ]
};
function ServiceDetailCard({ service, index }) {
  const highlights = serviceHighlights[service.id] ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lift hover:-translate-y-1 transition-smooth flex flex-col",
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.45, delay: index * 0.07 },
      "data-ocid": `services.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full gradient-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col gap-4 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl shadow-elegant shrink-0", children: service.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: `text-xs border font-body font-semibold capitalize rounded-full px-2.5 ${categoryColors[service.category]}`,
                children: service.category
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl italic text-foreground mb-2 leading-tight", children: service.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: service.description })
          ] }),
          highlights.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-center gap-2 text-xs text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h })
              ]
            },
            h
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end justify-between pt-3 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl italic text-primary", children: service.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground mt-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: service.duration })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/booking",
              search: { service: service.id },
              "data-ocid": `services.book_service_button.${index + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-body font-semibold uppercase tracking-wider text-xs shadow-elegant transition-smooth flex items-center justify-center gap-2 group-hover:shadow-lift",
                  children: [
                    "Book This Service ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                  ]
                }
              )
            }
          )
        ] })
      ]
    }
  );
}
function ServicesPage() {
  const [activeCategory, setActiveCategory] = reactExports.useState("all");
  const filtered = activeCategory === "all" ? services : services.filter((s) => s.category === activeCategory);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "services.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border py-12 sm:py-16",
        "data-ocid": "services.header_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-body font-bold uppercase tracking-widest text-primary mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
                " What We Offer"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl italic text-foreground mb-4", children: "Our Services" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-lg mx-auto leading-relaxed", children: "Every service is thoughtfully curated to give you the ultimate beauty experience — from first touch to final reveal." })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "sticky top-16 sm:top-20 z-30 bg-background/95 backdrop-blur-sm border-b border-border py-3",
        "data-ocid": "services.filter_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveCategory(cat.value),
            className: `shrink-0 text-xs font-body font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-smooth ${activeCategory === cat.value ? "bg-primary text-primary-foreground shadow-elegant" : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"}`,
            "data-ocid": `services.filter.${cat.value}_tab`,
            children: cat.label
          },
          cat.value
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-12 sm:py-16 bg-background",
        "data-ocid": "services.grid_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((service, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceDetailCard, { service, index: i }, service.id)) }),
          filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center py-16 text-muted-foreground",
              "data-ocid": "services.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl italic mb-2", children: "No services found" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Try selecting a different category" })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-10 bg-muted/30 border-y border-border",
        "data-ocid": "services.info_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6 text-center", children: [
          {
            icon: "💎",
            title: "Premium Products",
            desc: "We use only top-tier, professionally curated beauty products."
          },
          {
            icon: "🌸",
            title: "Women-Led Studio",
            desc: "Owned and operated by passionate women who put clients first."
          },
          {
            icon: "⏱️",
            title: "Punctual & Personal",
            desc: "Your time is precious — we honour every appointment with care."
          }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col items-center gap-3 px-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: item.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg italic text-foreground", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc })
            ]
          },
          item.title
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-12 sm:py-16 bg-background",
        "data-ocid": "services.cta_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground mb-3", children: "Not Sure Which Service?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 text-sm max-w-sm mx-auto", children: "Book a complimentary consultation and let our experts guide you to the perfect treatment." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/booking", "data-ocid": "services.book_now_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 font-body font-semibold uppercase tracking-wider text-xs shadow-elegant transition-smooth", children: "Book a Consultation" }) })
        ] })
      }
    )
  ] });
}
export {
  ServicesPage as default
};
