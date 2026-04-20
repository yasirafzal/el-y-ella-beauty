import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Scissors, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Team", href: "/#team" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const hash = routerState.location.hash;
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to hash section after navigating to home from another page
  useEffect(() => {
    if (isHome && hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Defer until after layout/paint
        const raf = requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth" });
        });
        return () => cancelAnimationFrame(raf);
      }
    }
  }, [isHome, hash]);

  const handleHashLink = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      if (isHome) {
        const id = href.replace("/#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-sm shadow-elegant border-b border-border"
          : "bg-card border-b border-border"
      }`}
      data-ocid="navbar"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group transition-smooth"
            data-ocid="navbar.logo_link"
          >
            <Scissors className="w-5 h-5 text-primary rotate-[135deg] group-hover:rotate-[45deg] transition-transform duration-500" />
            <span className="font-display text-2xl sm:text-3xl text-primary leading-none italic tracking-tight">
              El y Ella
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href.startsWith("/#") ? "/" : link.href}
                onClick={() => handleHashLink(link.href)}
                className="text-sm font-body font-semibold uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors duration-200 relative group"
                data-ocid={`navbar.${link.label.toLowerCase().replace(" ", "_")}_link`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Book Now CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/booking" data-ocid="navbar.book_now_button">
              <Button
                variant="default"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 font-body font-semibold uppercase tracking-wider text-xs shadow-elegant hover:shadow-lift transition-smooth"
              >
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            data-ocid="navbar.mobile_menu_toggle"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-card border-t border-border shadow-elegant"
          data-ocid="navbar.mobile_menu"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href.startsWith("/#") ? "/" : link.href}
                onClick={() => handleHashLink(link.href)}
                className="text-sm font-body font-semibold uppercase tracking-widest text-foreground/70 hover:text-primary py-2 border-b border-border/50 transition-colors"
                data-ocid={`navbar.mobile.${link.label.toLowerCase().replace(" ", "_")}_link`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              data-ocid="navbar.mobile.book_now_button"
            >
              <Button
                variant="default"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-body font-semibold uppercase tracking-wider text-xs"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
