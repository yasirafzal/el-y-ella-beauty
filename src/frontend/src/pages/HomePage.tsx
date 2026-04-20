import { ServiceCard } from "@/components/ServiceCard";
import { TeamCard } from "@/components/TeamCard";
import { Button } from "@/components/ui/button";
import { salonInfo, services, teamMembers, testimonials } from "@/data/content";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Quote,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

// ─── Hero Carousel ─────────────────────────────────────────────────────────

const heroSlides = [
  {
    id: 1,
    image: "/assets/generated/hero-salon.dim_1400x700.jpg",
    headline: "Luxury Care\nfor Everyone",
    sub: "Experience premium beauty and grooming, tailored for her and for him.",
    cta: "Book Appointment",
  },
  {
    id: 2,
    image: "/assets/generated/team-carmen.dim_400x400.jpg",
    headline: "Where Beauty\nMeets Artistry",
    sub: "Our expert stylists bring your vision to life with skill, passion, and care.",
    cta: "Meet the Team",
  },
  {
    id: 3,
    image: "/assets/generated/team-sofia.dim_400x400.jpg",
    headline: "Color That\nTells Your Story",
    sub: "From vibrant balayage to subtle highlights — your perfect color awaits.",
    cta: "Book Now",
  },
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [locked, setLocked] = useState(false);

  const navigate = useCallback(
    (idx: number) => {
      if (locked) return;
      setLocked(true);
      setCurrent(idx);
      setTimeout(() => setLocked(false), 750);
    },
    [locked],
  );

  const prev = () =>
    navigate((current - 1 + heroSlides.length) % heroSlides.length);
  const next = useCallback(
    () => navigate((current + 1) % heroSlides.length),
    [current, navigate],
  );

  useEffect(() => {
    const t = setInterval(next, 5800);
    return () => clearInterval(t);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section
      className="relative w-full h-[92vh] min-h-[560px] overflow-hidden bg-foreground"
      data-ocid="hero.section"
    >
      {/* Background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
        >
          <img
            src={slide.image}
            alt="El y Ella salon"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/78 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Text */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${slide.id}`}
              className="max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-body font-bold uppercase tracking-[0.22em] text-primary-foreground/70 mb-5">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                El y Ella Beauty Salon
              </span>
              <h1 className="font-display text-5xl md:text-7xl italic text-primary-foreground leading-[1.08] mb-6 whitespace-pre-line">
                {slide.headline}
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-md">
                {slide.sub}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/booking">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-bold uppercase tracking-wider px-8 rounded-full shadow-lift hover:shadow-elegant transition-smooth"
                    data-ocid="hero.book_button"
                  >
                    {slide.cta}
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/12 font-body font-semibold uppercase tracking-wider px-8 rounded-full transition-smooth"
                    data-ocid="hero.services_button"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Arrow controls */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/35 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground transition-smooth"
        data-ocid="hero.carousel_prev"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/35 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground transition-smooth"
        data-ocid="hero.carousel_next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 items-center">
        {heroSlides.map((s, idx) => (
          <button
            type="button"
            key={`dot-slide-${s.id}`}
            onClick={() => navigate(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`rounded-full transition-all duration-350 ${
              idx === current
                ? "w-7 h-2 bg-primary"
                : "w-2 h-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            data-ocid={`hero.dot.${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

// ─── Stats Bar ─────────────────────────────────────────────────────────────

function StatsBar() {
  const stats = [
    { value: "15+", label: "Years of Excellence" },
    { value: "3,200+", label: "Happy Clients" },
    { value: "3", label: "Expert Artists" },
    { value: "98%", label: "5-Star Reviews" },
  ];
  return (
    <section className="bg-primary text-primary-foreground py-5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl italic mb-0.5">{s.value}</p>
              <p className="text-[11px] font-body uppercase tracking-widest opacity-70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ──────────────────────────────────────────────────────────────

function ServicesSection() {
  const featured = services.slice(0, 6);
  return (
    <section
      id="services"
      className="py-20 bg-background"
      data-ocid="services.section"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body font-bold uppercase tracking-[0.22em] text-primary text-xs mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl italic text-foreground mb-4">
            Our Signature Services
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            From precision cuts to radiant color, indulgent facials to perfect
            nails — crafted for everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <ServiceCard service={service} index={idx} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-body font-bold uppercase tracking-wider text-sm text-primary hover:gap-3 transition-all duration-200"
            data-ocid="services.view_all_link"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── About ─────────────────────────────────────────────────────────────────

const values = [
  {
    Icon: Sparkles,
    label: "Artistry",
    desc: "Every service is a craft — delivered with skill, precision, and passion for beauty.",
  },
  {
    Icon: Heart,
    label: "Warmth",
    desc: "A welcoming, nurturing space where every client feels treasured and at ease.",
  },
  {
    Icon: Users,
    label: "Inclusivity",
    desc: "El y Ella is for everyone — all genders, hair types, and beauty journeys welcome.",
  },
];

function AboutSection() {
  return (
    <section className="py-20 bg-secondary/40" data-ocid="about.section">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lift aspect-[4/3]">
              <img
                src="/assets/generated/hero-salon.dim_1400x700.jpg"
                alt="El y Ella salon interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-card border border-border rounded-2xl px-6 py-4 shadow-elegant">
              <p className="font-display text-3xl italic text-primary">15+</p>
              <p className="font-body text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Years of Artistry
              </p>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="font-body font-bold uppercase tracking-[0.22em] text-primary text-xs mb-3">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic text-foreground mb-5 leading-tight">
              About El y Ella
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Born from a dream of creating a space where beauty has no limits,
              El y Ella was founded by women who believe that feeling beautiful
              is a right — not a luxury. Our studio on Rosewood Avenue is a
              sanctuary of style, wellness, and self-expression.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of artists brings together expertise from Paris, Milan,
              and New York City to offer services that are as transformative as
              they are personal. Every visit is an experience to savour.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {values.map(({ Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="font-body font-bold text-sm text-foreground">
                    {label}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Team ───────────────────────────────────────────────────────────────────

function TeamSection() {
  return (
    <section id="team" className="py-20 bg-background" data-ocid="team.section">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body font-bold uppercase tracking-[0.22em] text-primary text-xs mb-3">
            The Artists
          </p>
          <h2 className="font-display text-4xl md:text-5xl italic text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            Talented, passionate, and dedicated — every one of our stylists
            brings something uniquely special to El y Ella.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
            >
              <TeamCard member={member} index={idx} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ───────────────────────────────────────────────────────────

function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  const goTo = (idx: number) => {
    setActive(idx);
    setAuto(false);
    setTimeout(() => setAuto(true), 8000);
  };

  const advance = useCallback(
    () => setActive((a) => (a + 1) % testimonials.length),
    [],
  );

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(advance, 5200);
    return () => clearInterval(t);
  }, [auto, advance]);

  const visible = [-1, 0, 1].map(
    (o) =>
      testimonials[(active + o + testimonials.length) % testimonials.length],
  );

  return (
    <section className="py-20 bg-muted/40" data-ocid="testimonials.section">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center gap-0.5 mb-3">
            {["s1", "s2", "s3", "s4", "s5"].map((k) => (
              <Star key={k} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          <p className="font-body font-bold uppercase tracking-[0.22em] text-primary text-xs mb-3">
            Client Love
          </p>
          <h2 className="font-display text-4xl md:text-5xl italic text-foreground">
            What They're Saying
          </h2>
        </motion.div>

        {/* Mobile — single card */}
        <div className="block md:hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[active].id}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4"
              data-ocid={`testimonials.item.${active + 1}`}
            >
              <Quote className="w-7 h-7 text-primary/30" />
              <div className="flex gap-0.5">
                {["r1", "r2", "r3", "r4", "r5"]
                  .slice(0, testimonials[active].rating)
                  .map((k) => (
                    <Star key={k} className="w-4 h-4 fill-accent text-accent" />
                  ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed italic flex-1">
                "{testimonials[active].review}"
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div>
                  <p className="font-body font-bold text-sm text-foreground">
                    {testimonials[active].name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonials[active].service}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground/60">
                  {testimonials[active].date}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop — 3-card slider */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <motion.div
              key={t.id}
              className={`transition-all duration-400 ${
                i === 1 ? "scale-100" : "scale-95 opacity-65"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <div
                className={`relative ${i === 1 ? "ring-1 ring-primary/20 rounded-xl" : ""}`}
              >
                <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:shadow-elegant transition-smooth">
                  <Quote className="w-7 h-7 text-primary/30" />
                  <div className="flex gap-0.5">
                    {["r1", "r2", "r3", "r4", "r5"]
                      .slice(0, t.rating)
                      .map((k) => (
                        <Star
                          key={k}
                          className="w-4 h-4 fill-accent text-accent"
                        />
                      ))}
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed italic flex-1">
                    "{t.review}"
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div>
                      <p className="font-body font-bold text-sm text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t.service}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground/60">
                      {t.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() =>
              goTo((active - 1 + testimonials.length) % testimonials.length)
            }
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-full border border-border bg-card hover:bg-primary hover:border-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
            data-ocid="testimonials.prev_button"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2 items-center">
            {testimonials.map((t, idx) => (
              <button
                type="button"
                key={t.id}
                onClick={() => goTo(idx)}
                aria-label={`Testimonial ${idx + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  idx === active
                    ? "w-6 h-2 bg-primary"
                    : "w-2 h-2 bg-border hover:bg-primary/40"
                }`}
                data-ocid={`testimonials.dot.${idx + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo((active + 1) % testimonials.length)}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-full border border-border bg-card hover:bg-primary hover:border-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
            data-ocid="testimonials.next_button"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ─────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section
      className="py-24 relative overflow-hidden gradient-primary"
      data-ocid="cta.section"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 78% 22%, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body font-bold uppercase tracking-[0.22em] text-primary-foreground/65 text-xs mb-4">
            Your Transformation Awaits
          </p>
          <h2 className="font-display text-5xl md:text-6xl italic text-primary-foreground mb-5 leading-tight">
            Ready to Transform
            <br />
            Your Look?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-md mx-auto leading-relaxed mb-10">
            Join the El y Ella family. Book your appointment today and let our
            artists create something beautiful — just for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/booking">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-body font-bold uppercase tracking-wider px-10 rounded-full shadow-elegant hover:shadow-lift transition-smooth"
                data-ocid="cta.book_button"
              >
                Book Now
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/45 text-primary-foreground bg-transparent hover:bg-primary-foreground/12 font-body font-semibold uppercase tracking-wider px-10 rounded-full transition-smooth"
                data-ocid="cta.services_button"
              >
                View Services
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12 text-primary-foreground/65 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50" />
              {salonInfo.address}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50" />
              {salonInfo.phone}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div data-ocid="home.page">
      <HeroCarousel />
      <StatsBar />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
