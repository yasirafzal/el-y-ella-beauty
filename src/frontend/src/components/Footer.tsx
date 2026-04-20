import { salonInfo } from "@/data/content";
import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const utmHostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "elyella.salon",
  );

  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-display text-3xl italic text-primary mb-3 block">
              El y Ella
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Luxury beauty and grooming for everyone — because you deserve to
              look and feel extraordinary.
            </p>
            <div className="flex gap-3">
              <a
                href={salonInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                data-ocid="footer.instagram_link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={salonInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                data-ocid="footer.facebook_link"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-bold uppercase tracking-widest text-xs text-muted-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Services", to: "/services" },
                { label: "Gallery", to: "/gallery" },
                { label: "Book Appointment", to: "/booking" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
                    data-ocid={`footer.${item.label.toLowerCase().replace(" ", "_")}_link`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-body font-bold uppercase tracking-widest text-xs text-muted-foreground mb-4 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" /> Hours
            </h4>
            <ul className="space-y-2">
              {salonInfo.hours.map((h) => (
                <li key={h.days} className="text-sm">
                  <span className="text-foreground/50 block text-xs">
                    {h.days}
                  </span>
                  <span className="text-foreground/80 font-medium">
                    {h.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-bold uppercase tracking-widest text-xs text-muted-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-foreground/70">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{salonInfo.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/70">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`tel:${salonInfo.phone}`}
                  className="hover:text-primary transition-colors"
                  data-ocid="footer.phone_link"
                >
                  {salonInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/70">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${salonInfo.email}`}
                  className="hover:text-primary transition-colors"
                  data-ocid="footer.email_link"
                >
                  {salonInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {year} El y Ella Beauty Salon. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utmHostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
