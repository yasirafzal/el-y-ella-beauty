import { Button } from "@/components/ui/button";
import { galleryImages } from "@/data/content";
import type { GalleryImage } from "@/types";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

const categories = [
  "all",
  "salon",
  "hair",
  "color",
  "nails",
  "facial",
  "grooming",
  "treatment",
];

const categoryLabels: Record<string, string> = {
  all: "All Work",
  salon: "Salon",
  hair: "Hair",
  color: "Color",
  nails: "Nails",
  facial: "Facials",
  grooming: "Grooming",
  treatment: "Treatments",
};

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const image = images[index];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
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

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        data-ocid="gallery.lightbox_modal"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-foreground/85 backdrop-blur-sm" />

        {/* Close */}
        <button
          type="button"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-card/20 hover:bg-card/40 text-primary-foreground flex items-center justify-center transition-smooth"
          onClick={onClose}
          aria-label="Close lightbox"
          data-ocid="gallery.lightbox_close_button"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Counter */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-primary-foreground/70 font-body text-sm">
          {index + 1} / {images.length}
        </div>

        {/* Prev */}
        <button
          type="button"
          className="absolute left-3 sm:left-6 z-10 w-11 h-11 rounded-full bg-card/20 hover:bg-card/40 text-primary-foreground flex items-center justify-center transition-smooth disabled:opacity-30"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          disabled={index === 0}
          aria-label="Previous image"
          data-ocid="gallery.lightbox_prev_button"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next */}
        <button
          type="button"
          className="absolute right-3 sm:right-6 z-10 w-11 h-11 rounded-full bg-card/20 hover:bg-card/40 text-primary-foreground flex items-center justify-center transition-smooth disabled:opacity-30"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          disabled={index === images.length - 1}
          aria-label="Next image"
          data-ocid="gallery.lightbox_next_button"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image */}
        <motion.div
          className="relative z-10 max-w-4xl w-full mx-8 sm:mx-20"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          onClick={(e) => e.stopPropagation()}
          key={index}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full max-h-[75vh] object-contain rounded-xl shadow-lift"
          />
          <div className="mt-3 text-center">
            <p className="text-primary-foreground/90 font-body text-sm font-medium">
              {image.alt}
            </p>
            <span className="inline-block mt-1 text-xs font-body font-bold uppercase tracking-widest text-accent/80 bg-accent/10 rounded-full px-3 py-0.5 capitalize">
              {image.category}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback(
    (index: number) => setLightboxIndex(index),
    [],
  );
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i)),
    [],
  );
  const nextImage = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null && i < filtered.length - 1 ? i + 1 : i,
      ),
    [filtered.length],
  );

  return (
    <div data-ocid="gallery.page">
      {/* Header */}
      <section
        className="bg-card border-b border-border py-12 sm:py-16 text-center"
        data-ocid="gallery.header_section"
      >
        <motion.div
          className="container mx-auto px-4 sm:px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-body font-bold uppercase tracking-widest text-primary mb-3 block">
            Portfolio
          </span>
          <h1 className="font-display text-4xl sm:text-5xl italic text-foreground mb-4">
            Our Work
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            A curated collection of transformations, styles, and artistry from
            the El y Ella studio. Every look tells a story.
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section
        className="sticky top-16 sm:top-20 z-30 bg-background/95 backdrop-blur-sm border-b border-border py-3"
        data-ocid="gallery.filter_section"
      >
        <div className="container mx-auto px-4 sm:px-6 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 text-xs font-body font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-smooth capitalize ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-elegant"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
              data-ocid={`gallery.filter.${cat}_tab`}
            >
              {categoryLabels[cat] ?? cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section
        className="py-12 sm:py-16 bg-background"
        data-ocid="gallery.grid_section"
      >
        <div className="container mx-auto px-4 sm:px-6">
          {filtered.length === 0 ? (
            <div
              className="text-center py-16 text-muted-foreground"
              data-ocid="gallery.empty_state"
            >
              <p className="font-display text-2xl italic mb-2">
                No images in this category
              </p>
              <p className="text-sm">More content coming soon</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {filtered.map((img, i) => (
                <motion.div
                  key={`${activeCategory}-${img.id}`}
                  className="group relative rounded-xl overflow-hidden bg-muted shadow-elegant cursor-pointer break-inside-avoid"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(i * 0.06, 0.4),
                  }}
                  onClick={() => openLightbox(i)}
                  data-ocid={`gallery.item.${i + 1}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-primary-foreground font-body font-semibold text-xs uppercase tracking-widest">
                      View
                    </span>
                  </div>
                  {/* Category badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-primary-foreground font-body font-bold text-xs uppercase tracking-widest bg-foreground/50 backdrop-blur-sm px-2.5 py-1 rounded-full capitalize">
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-muted/30 border-t border-border py-12 sm:py-16 text-center"
        data-ocid="gallery.cta_section"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl italic text-foreground mb-3">
            Love What You See?
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Book an appointment and let us create your perfect look.
          </p>
          <Link to="/booking" data-ocid="gallery.book_now_button">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 font-body font-semibold uppercase tracking-wider text-xs shadow-elegant transition-smooth">
              Book Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}
