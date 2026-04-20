import { c as createLucideIcon, r as reactExports, g as galleryImages, j as jsxRuntimeExports, L as Link, B as Button, X } from "./index-pqJfj0nS.js";
import { m as motion } from "./proxy-CnWLzlnk.js";
import { A as AnimatePresence, C as ChevronLeft, a as ChevronRight } from "./index-DmQfLRN9.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
];
const ZoomIn = createLucideIcon("zoom-in", __iconNode);
const categories = [
  "all",
  "salon",
  "hair",
  "color",
  "nails",
  "facial",
  "grooming",
  "treatment"
];
const categoryLabels = {
  all: "All Work",
  salon: "Salon",
  hair: "Hair",
  color: "Color",
  nails: "Nails",
  facial: "Facials",
  grooming: "Grooming",
  treatment: "Treatments"
};
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const image = images[index];
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-50 flex items-center justify-center",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.25 },
      "data-ocid": "gallery.lightbox_modal",
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-foreground/85 backdrop-blur-sm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-card/20 hover:bg-card/40 text-primary-foreground flex items-center justify-center transition-smooth",
            onClick: onClose,
            "aria-label": "Close lightbox",
            "data-ocid": "gallery.lightbox_close_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-1/2 -translate-x-1/2 z-10 text-primary-foreground/70 font-body text-sm", children: [
          index + 1,
          " / ",
          images.length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute left-3 sm:left-6 z-10 w-11 h-11 rounded-full bg-card/20 hover:bg-card/40 text-primary-foreground flex items-center justify-center transition-smooth disabled:opacity-30",
            onClick: (e) => {
              e.stopPropagation();
              onPrev();
            },
            disabled: index === 0,
            "aria-label": "Previous image",
            "data-ocid": "gallery.lightbox_prev_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute right-3 sm:right-6 z-10 w-11 h-11 rounded-full bg-card/20 hover:bg-card/40 text-primary-foreground flex items-center justify-center transition-smooth disabled:opacity-30",
            onClick: (e) => {
              e.stopPropagation();
              onNext();
            },
            disabled: index === images.length - 1,
            "aria-label": "Next image",
            "data-ocid": "gallery.lightbox_next_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "relative z-10 max-w-4xl w-full mx-8 sm:mx-20",
            initial: { scale: 0.92, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: {
              duration: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 30
            },
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: image.src,
                  alt: image.alt,
                  className: "w-full max-h-[75vh] object-contain rounded-xl shadow-lift"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/90 font-body text-sm font-medium", children: image.alt }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mt-1 text-xs font-body font-bold uppercase tracking-widest text-accent/80 bg-accent/10 rounded-full px-3 py-0.5 capitalize", children: image.category })
              ] })
            ]
          },
          index
        )
      ]
    }
  ) });
}
function GalleryPage() {
  const [activeCategory, setActiveCategory] = reactExports.useState("all");
  const [lightboxIndex, setLightboxIndex] = reactExports.useState(null);
  const filtered = activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory);
  const openLightbox = reactExports.useCallback(
    (index) => setLightboxIndex(index),
    []
  );
  const closeLightbox = reactExports.useCallback(() => setLightboxIndex(null), []);
  const prevImage = reactExports.useCallback(
    () => setLightboxIndex((i) => i !== null && i > 0 ? i - 1 : i),
    []
  );
  const nextImage = reactExports.useCallback(
    () => setLightboxIndex(
      (i) => i !== null && i < filtered.length - 1 ? i + 1 : i
    ),
    [filtered.length]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "gallery.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border py-12 sm:py-16 text-center",
        "data-ocid": "gallery.header_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "container mx-auto px-4 sm:px-6",
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-body font-bold uppercase tracking-widest text-primary mb-3 block", children: "Portfolio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl italic text-foreground mb-4", children: "Our Work" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md mx-auto leading-relaxed", children: "A curated collection of transformations, styles, and artistry from the El y Ella studio. Every look tells a story." })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "sticky top-16 sm:top-20 z-30 bg-background/95 backdrop-blur-sm border-b border-border py-3",
        "data-ocid": "gallery.filter_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 flex gap-2 overflow-x-auto pb-1 scrollbar-none", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveCategory(cat),
            className: `shrink-0 text-xs font-body font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-smooth capitalize ${activeCategory === cat ? "bg-primary text-primary-foreground shadow-elegant" : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"}`,
            "data-ocid": `gallery.filter.${cat}_tab`,
            children: categoryLabels[cat] ?? cat
          },
          cat
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-12 sm:py-16 bg-background",
        "data-ocid": "gallery.grid_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-16 text-muted-foreground",
            "data-ocid": "gallery.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl italic mb-2", children: "No images in this category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "More content coming soon" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4", children: filtered.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "group relative rounded-xl overflow-hidden bg-muted shadow-elegant cursor-pointer break-inside-avoid",
            initial: { opacity: 0, scale: 0.96 },
            animate: { opacity: 1, scale: 1 },
            transition: {
              duration: 0.35,
              delay: Math.min(i * 0.06, 0.4)
            },
            onClick: () => openLightbox(i),
            "data-ocid": `gallery.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: img.src,
                  alt: img.alt,
                  className: "w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "w-5 h-5 text-primary-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground font-body font-semibold text-xs uppercase tracking-widest", children: "View" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground font-body font-bold text-xs uppercase tracking-widest bg-foreground/50 backdrop-blur-sm px-2.5 py-1 rounded-full capitalize", children: img.category }) })
            ]
          },
          `${activeCategory}-${img.id}`
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 border-t border-border py-12 sm:py-16 text-center",
        "data-ocid": "gallery.cta_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl italic text-foreground mb-3", children: "Love What You See?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 text-sm", children: "Book an appointment and let us create your perfect look." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/booking", "data-ocid": "gallery.book_now_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 font-body font-semibold uppercase tracking-wider text-xs shadow-elegant transition-smooth", children: "Book Now" }) })
        ] })
      }
    ),
    lightboxIndex !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Lightbox,
      {
        images: filtered,
        index: lightboxIndex,
        onClose: closeLightbox,
        onPrev: prevImage,
        onNext: nextImage
      }
    )
  ] });
}
export {
  GalleryPage as default
};
