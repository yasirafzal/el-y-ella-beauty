import { c as createLucideIcon, j as jsxRuntimeExports, C as Clock, L as Link, r as reactExports, B as Button, t as teamMembers, a as testimonials, s as salonInfo, b as services } from "./index-pqJfj0nS.js";
import { B as Badge, A as ArrowRight, S as Sparkles } from "./badge-Ckkyr3c4.js";
import { A as AnimatePresence, C as ChevronLeft, a as ChevronRight } from "./index-DmQfLRN9.js";
import { m as motion } from "./proxy-CnWLzlnk.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const categoryColors = {
  hair: "bg-primary/10 text-primary",
  color: "bg-accent/20 text-accent-foreground",
  nails: "bg-secondary/20 text-primary",
  facial: "bg-secondary text-secondary-foreground",
  grooming: "bg-muted text-muted-foreground",
  treatment: "bg-primary/5 text-primary"
};
function ServiceCard({ service, index = 0 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "group bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:shadow-lift hover:-translate-y-1 transition-smooth cursor-default",
      "data-ocid": `services.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl shrink-0", children: service.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg italic text-foreground leading-tight", children: service.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: `text-xs shrink-0 border-0 font-body font-semibold ${categoryColors[service.category]}`,
                children: service.category
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: service.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl italic text-primary", children: service.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground mt-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: service.duration })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/booking",
              className: "flex items-center gap-1 text-xs font-body font-semibold uppercase tracking-wider text-primary hover:gap-2 transition-all duration-200 group-hover:text-primary/80",
              "data-ocid": `services.book_button.${index + 1}`,
              children: [
                "Book ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function TeamCard({ member, index = 0 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lift transition-smooth",
      "data-ocid": `team.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden aspect-[4/3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: member.image,
              alt: member.name,
              className: "w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-wrap gap-1", children: member.specialties.map((specialty) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-[10px] bg-primary-foreground/90 text-primary font-body font-bold uppercase tracking-wide px-2 py-0.5 rounded-full",
              children: specialty
            },
            specialty
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl italic text-foreground mb-0.5", children: member.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body font-bold uppercase tracking-widest text-primary mb-3", children: member.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-3", children: member.bio })
        ] })
      ]
    }
  );
}
const heroSlides = [
  {
    id: 1,
    image: "/assets/generated/hero-salon.dim_1400x700.jpg",
    headline: "Luxury Care\nfor Everyone",
    sub: "Experience premium beauty and grooming, tailored for her and for him.",
    cta: "Book Appointment"
  },
  {
    id: 2,
    image: "/assets/generated/team-carmen.dim_400x400.jpg",
    headline: "Where Beauty\nMeets Artistry",
    sub: "Our expert stylists bring your vision to life with skill, passion, and care.",
    cta: "Meet the Team"
  },
  {
    id: 3,
    image: "/assets/generated/team-sofia.dim_400x400.jpg",
    headline: "Color That\nTells Your Story",
    sub: "From vibrant balayage to subtle highlights — your perfect color awaits.",
    cta: "Book Now"
  }
];
function HeroCarousel() {
  const [current, setCurrent] = reactExports.useState(0);
  const [locked, setLocked] = reactExports.useState(false);
  const navigate = reactExports.useCallback(
    (idx) => {
      if (locked) return;
      setLocked(true);
      setCurrent(idx);
      setTimeout(() => setLocked(false), 750);
    },
    [locked]
  );
  const prev = () => navigate((current - 1 + heroSlides.length) % heroSlides.length);
  const next = reactExports.useCallback(
    () => navigate((current + 1) % heroSlides.length),
    [current, navigate]
  );
  reactExports.useEffect(() => {
    const t = setInterval(next, 5800);
    return () => clearInterval(t);
  }, [next]);
  const slide = heroSlides[current];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative w-full h-[92vh] min-h-[560px] overflow-hidden bg-foreground",
      "data-ocid": "hero.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "sync", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "absolute inset-0",
            initial: { opacity: 0, scale: 1.06 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.85, ease: "easeInOut" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: slide.image,
                  alt: "El y Ella salon",
                  className: "w-full h-full object-cover object-center"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-foreground/78 via-foreground/40 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" })
            ]
          },
          slide.id
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 h-full flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "max-w-xl",
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -18 },
            transition: { duration: 0.6, ease: "easeOut" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-body font-bold uppercase tracking-[0.22em] text-primary-foreground/70 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-accent" }),
                "El y Ella Beauty Salon"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl italic text-primary-foreground leading-[1.08] mb-6 whitespace-pre-line", children: slide.headline }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-md", children: slide.sub }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/booking", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "lg",
                    className: "bg-primary hover:bg-primary/90 text-primary-foreground font-body font-bold uppercase tracking-wider px-8 rounded-full shadow-lift hover:shadow-elegant transition-smooth",
                    "data-ocid": "hero.book_button",
                    children: slide.cta
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/12 font-body font-semibold uppercase tracking-wider px-8 rounded-full transition-smooth",
                    "data-ocid": "hero.services_button",
                    children: "Our Services"
                  }
                ) })
              ] })
            ]
          },
          `text-${slide.id}`
        ) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: prev,
            "aria-label": "Previous slide",
            className: "absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/35 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground transition-smooth",
            "data-ocid": "hero.carousel_prev",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: next,
            "aria-label": "Next slide",
            className: "absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/35 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground transition-smooth",
            "data-ocid": "hero.carousel_next",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 items-center", children: heroSlides.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => navigate(idx),
            "aria-label": `Slide ${idx + 1}`,
            className: `rounded-full transition-all duration-350 ${idx === current ? "w-7 h-2 bg-primary" : "w-2 h-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"}`,
            "data-ocid": `hero.dot.${idx + 1}`
          },
          `dot-slide-${s.id}`
        )) })
      ]
    }
  );
}
function StatsBar() {
  const stats = [
    { value: "15+", label: "Years of Excellence" },
    { value: "3,200+", label: "Happy Clients" },
    { value: "3", label: "Expert Artists" },
    { value: "98%", label: "5-Star Reviews" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 text-center", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl italic mb-0.5", children: s.value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-body uppercase tracking-widest opacity-70", children: s.label })
  ] }, s.label)) }) }) });
}
function ServicesSection() {
  const featured = services.slice(0, 6);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "services",
      className: "py-20 bg-background",
      "data-ocid": "services.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 lg:px-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "text-center mb-14",
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-bold uppercase tracking-[0.22em] text-primary text-xs mb-3", children: "What We Offer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl italic text-foreground mb-4", children: "Our Signature Services" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md mx-auto leading-relaxed", children: "From precision cuts to radiant color, indulgent facials to perfect nails — crafted for everyone." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: featured.map((service, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 32 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: idx * 0.08 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { service, index: idx })
          },
          service.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "text-center mt-12",
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: 0.3 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/services",
                className: "inline-flex items-center gap-2 font-body font-bold uppercase tracking-wider text-sm text-primary hover:gap-3 transition-all duration-200",
                "data-ocid": "services.view_all_link",
                children: [
                  "View All Services ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            )
          }
        )
      ] })
    }
  );
}
const values = [
  {
    Icon: Sparkles,
    label: "Artistry",
    desc: "Every service is a craft — delivered with skill, precision, and passion for beauty."
  },
  {
    Icon: Heart,
    label: "Warmth",
    desc: "A welcoming, nurturing space where every client feels treasured and at ease."
  },
  {
    Icon: Users,
    label: "Inclusivity",
    desc: "El y Ella is for everyone — all genders, hair types, and beauty journeys welcome."
  }
];
function AboutSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-secondary/40", "data-ocid": "about.section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-14 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "relative",
        initial: { opacity: 0, x: -36 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden shadow-lift aspect-[4/3]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/hero-salon.dim_1400x700.jpg",
                alt: "El y Ella salon interior",
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-5 -right-5 bg-card border border-border rounded-2xl px-6 py-4 shadow-elegant", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl italic text-primary", children: "15+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs font-bold uppercase tracking-widest text-muted-foreground", children: "Years of Artistry" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 36 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, delay: 0.15 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-bold uppercase tracking-[0.22em] text-primary text-xs mb-3", children: "Our Story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl italic text-foreground mb-5 leading-tight", children: "About El y Ella" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-5", children: "Born from a dream of creating a space where beauty has no limits, El y Ella was founded by women who believe that feeling beautiful is a right — not a luxury. Our studio on Rosewood Avenue is a sanctuary of style, wellness, and self-expression." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-8", children: "Our team of artists brings together expertise from Paris, Milan, and New York City to offer services that are as transformative as they are personal. Every visit is an experience to savour." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: values.map(({ Icon, label, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "flex flex-col gap-2",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: 0.3 + i * 0.1 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-bold text-sm text-foreground", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: desc })
              ]
            },
            label
          )) })
        ]
      }
    )
  ] }) }) });
}
function TeamSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "team", className: "py-20 bg-background", "data-ocid": "team.section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "text-center mb-14",
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-bold uppercase tracking-[0.22em] text-primary text-xs mb-3", children: "The Artists" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl italic text-foreground mb-4", children: "Meet Our Team" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md mx-auto leading-relaxed", children: "Talented, passionate, and dedicated — every one of our stylists brings something uniquely special to El y Ella." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: teamMembers.map((member, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 36 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.55, delay: idx * 0.12 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(TeamCard, { member, index: idx })
      },
      member.id
    )) })
  ] }) });
}
function TestimonialsSection() {
  const [active, setActive] = reactExports.useState(0);
  const [auto, setAuto] = reactExports.useState(true);
  const goTo = (idx) => {
    setActive(idx);
    setAuto(false);
    setTimeout(() => setAuto(true), 8e3);
  };
  const advance = reactExports.useCallback(
    () => setActive((a) => (a + 1) % testimonials.length),
    []
  );
  reactExports.useEffect(() => {
    if (!auto) return;
    const t = setInterval(advance, 5200);
    return () => clearInterval(t);
  }, [auto, advance]);
  const visible = [-1, 0, 1].map(
    (o) => testimonials[(active + o + testimonials.length) % testimonials.length]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/40", "data-ocid": "testimonials.section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "text-center mb-14",
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-0.5 mb-3", children: ["s1", "s2", "s3", "s4", "s5"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 fill-accent text-accent" }, k)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-bold uppercase tracking-[0.22em] text-primary text-xs mb-3", children: "Client Love" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl italic text-foreground", children: "What They're Saying" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block md:hidden mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 28 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -28 },
        transition: { duration: 0.4 },
        className: "bg-card border border-border rounded-xl p-6 flex flex-col gap-4",
        "data-ocid": `testimonials.item.${active + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-7 h-7 text-primary/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: ["r1", "r2", "r3", "r4", "r5"].slice(0, testimonials[active].rating).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-accent text-accent" }, k)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground/80 leading-relaxed italic flex-1", children: [
            '"',
            testimonials[active].review,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-bold text-sm text-foreground", children: testimonials[active].name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: testimonials[active].service })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground/60", children: testimonials[active].date })
          ] })
        ]
      },
      testimonials[active].id
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:grid grid-cols-3 gap-6 mb-10", children: visible.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: `transition-all duration-400 ${i === 1 ? "scale-100" : "scale-95 opacity-65"}`,
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.08 },
        "data-ocid": `testimonials.item.${i + 1}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `relative ${i === 1 ? "ring-1 ring-primary/20 rounded-xl" : ""}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:shadow-elegant transition-smooth", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-7 h-7 text-primary/30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: ["r1", "r2", "r3", "r4", "r5"].slice(0, t.rating).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Star,
                {
                  className: "w-4 h-4 fill-accent text-accent"
                },
                k
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground/80 leading-relaxed italic flex-1", children: [
                '"',
                t.review,
                '"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-bold text-sm text-foreground", children: t.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.service })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground/60", children: t.date })
              ] })
            ] })
          }
        )
      },
      t.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => goTo((active - 1 + testimonials.length) % testimonials.length),
          "aria-label": "Previous testimonial",
          className: "w-9 h-9 rounded-full border border-border bg-card hover:bg-primary hover:border-primary hover:text-primary-foreground flex items-center justify-center transition-smooth",
          "data-ocid": "testimonials.prev_button",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 items-center", children: testimonials.map((t, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => goTo(idx),
          "aria-label": `Testimonial ${idx + 1}`,
          className: `rounded-full transition-all duration-300 ${idx === active ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-border hover:bg-primary/40"}`,
          "data-ocid": `testimonials.dot.${idx + 1}`
        },
        t.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => goTo((active + 1) % testimonials.length),
          "aria-label": "Next testimonial",
          className: "w-9 h-9 rounded-full border border-border bg-card hover:bg-primary hover:border-primary hover:text-primary-foreground flex items-center justify-center transition-smooth",
          "data-ocid": "testimonials.next_button",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
        }
      )
    ] })
  ] }) });
}
function CtaSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "py-24 relative overflow-hidden gradient-primary",
      "data-ocid": "cta.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-10 pointer-events-none",
            style: {
              backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 78% 22%, white 1px, transparent 1px)",
              backgroundSize: "56px 56px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 container mx-auto px-6 lg:px-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.7 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-bold uppercase tracking-[0.22em] text-primary-foreground/65 text-xs mb-4", children: "Your Transformation Awaits" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl italic text-primary-foreground mb-5 leading-tight", children: [
                "Ready to Transform",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Your Look?"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg max-w-md mx-auto leading-relaxed mb-10", children: "Join the El y Ella family. Book your appointment today and let our artists create something beautiful — just for you." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/booking", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "lg",
                    className: "bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-body font-bold uppercase tracking-wider px-10 rounded-full shadow-elegant hover:shadow-lift transition-smooth",
                    "data-ocid": "cta.book_button",
                    children: "Book Now"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "border-primary-foreground/45 text-primary-foreground bg-transparent hover:bg-primary-foreground/12 font-body font-semibold uppercase tracking-wider px-10 rounded-full transition-smooth",
                    "data-ocid": "cta.services_button",
                    children: "View Services"
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-6 mt-12 text-primary-foreground/65 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary-foreground/50" }),
                  salonInfo.address
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary-foreground/50" }),
                  salonInfo.phone
                ] })
              ] })
            ]
          }
        ) })
      ]
    }
  );
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroCarousel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatsBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AboutSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TeamSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaSection, {})
  ] });
}
export {
  HomePage as default
};
