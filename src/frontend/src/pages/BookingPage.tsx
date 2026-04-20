import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { salonInfo } from "@/data/content";
import type { BookingFormData, BookingService } from "@/types";
import { useNavigate, useSearch } from "@tanstack/react-router";
import {
  CalendarHeart,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const serviceOptions: { value: BookingService; label: string }[] = [
  { value: "haircut", label: "Hair Styling & Haircut" },
  { value: "coloring", label: "Full Color" },
  { value: "highlights", label: "Highlights & Balayage" },
  { value: "blowout", label: "Blowout & Styling" },
  { value: "treatment", label: "Hair Treatment" },
  { value: "styling", label: "Special Occasion Styling" },
  { value: "manicure", label: "Manicure" },
  { value: "pedicure", label: "Pedicure" },
  { value: "facial", label: "Signature Facial" },
  { value: "other", label: "Other / Consultation" },
];

const serviceIdToBooking: Record<string, BookingService> = {
  "hair-styling": "haircut",
  "hair-coloring": "coloring",
  "facial-treatment": "facial",
  "manicure-pedicure": "manicure",
  barbering: "other",
  "hair-treatment": "treatment",
};

const emptyForm: BookingFormData = {
  name: "",
  phone: "",
  email: "",
  service: "haircut",
  preferredDateTime: "",
  notes: "",
};

type FormErrors = Partial<Record<keyof BookingFormData, string>>;

export default function BookingPage() {
  const navigate = useNavigate();
  // Safely read optional `service` query param
  const search = useSearch({ strict: false }) as { service?: string };
  const preselectedService = search?.service
    ? (serviceIdToBooking[search.service] ?? "haircut")
    : "haircut";

  const [form, setForm] = useState<BookingFormData>({
    ...emptyForm,
    service: preselectedService,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.preferredDateTime)
      next.preferredDateTime = "Please choose your preferred date & time.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // Simulate async submission (backend method call would go here)
    await new Promise((r) => setTimeout(r, 900));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        data-ocid="booking.success_state"
        className="min-h-[70vh] flex items-center justify-center py-16 px-4"
      >
        <motion.div
          className="text-center max-w-sm mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 250,
            damping: 25,
          }}
        >
          {/* Decorative ring */}
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-30" />
            <div className="relative w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
          </div>

          <h2 className="font-display text-4xl italic text-foreground mb-3">
            You're All Set!
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-1">
            Thank you, <strong className="text-foreground">{form.name}</strong>!
            Your appointment request has been received.
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            We'll confirm your booking at{" "}
            <span className="text-primary font-medium">{form.email}</span>{" "}
            within 24 hours.
          </p>

          {/* Summary card */}
          <div className="bg-card border border-border rounded-2xl p-5 mb-6 text-left space-y-2 shadow-elegant">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Service</span>
              <span className="text-foreground font-medium capitalize">
                {serviceOptions.find((s) => s.value === form.service)?.label ??
                  form.service}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Preferred Date</span>
              <span className="text-foreground font-medium">
                {form.preferredDateTime
                  ? new Date(form.preferredDateTime).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })
                  : "—"}
              </span>
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Button
              onClick={() => {
                setSubmitted(false);
                setForm({ ...emptyForm, service: preselectedService });
              }}
              variant="outline"
              className="rounded-full font-body font-semibold uppercase tracking-wider text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              data-ocid="booking.book_another_button"
            >
              Book Another
            </Button>
            <Button
              onClick={() => navigate({ to: "/" })}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-body font-semibold uppercase tracking-wider text-xs shadow-elegant transition-smooth"
              data-ocid="booking.go_home_button"
            >
              Go Home
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div data-ocid="booking.page">
      {/* Header */}
      <section
        className="bg-card border-b border-border py-12 sm:py-16 text-center"
        data-ocid="booking.header_section"
      >
        <motion.div
          className="container mx-auto px-4 sm:px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-body font-bold uppercase tracking-widest text-primary mb-3 block">
            Reserve Your Spot
          </span>
          <h1 className="font-display text-4xl sm:text-5xl italic text-foreground mb-4">
            Book an Appointment
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            Fill in the form below and our team will personally confirm your
            booking within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* Booking Form + Info */}
      <section
        className="py-12 sm:py-16 bg-background"
        data-ocid="booking.form_section"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
            {/* Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card border border-border rounded-2xl shadow-elegant overflow-hidden">
                <div className="h-1 w-full gradient-primary" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <CalendarHeart className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl italic text-foreground">
                      Your Details
                    </h2>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                    data-ocid="booking.form"
                  >
                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="name"
                          className="font-body text-xs font-bold uppercase tracking-wider text-muted-foreground"
                        >
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          onBlur={() => {
                            if (!form.name.trim())
                              setErrors((p) => ({
                                ...p,
                                name: "Please enter your name.",
                              }));
                            else setErrors((p) => ({ ...p, name: undefined }));
                          }}
                          placeholder="e.g. Isabella Fontaine"
                          className="rounded-lg border-input"
                          data-ocid="booking.name_input"
                        />
                        {errors.name && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="booking.name_field_error"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="phone"
                          className="font-body text-xs font-bold uppercase tracking-wider text-muted-foreground"
                        >
                          Phone <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          onBlur={() => {
                            if (!form.phone.trim())
                              setErrors((p) => ({
                                ...p,
                                phone: "Please enter your phone.",
                              }));
                            else setErrors((p) => ({ ...p, phone: undefined }));
                          }}
                          placeholder="+1 (555) 000-0000"
                          className="rounded-lg border-input"
                          data-ocid="booking.phone_input"
                        />
                        {errors.phone && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="booking.phone_field_error"
                          >
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="font-body text-xs font-bold uppercase tracking-wider text-muted-foreground"
                      >
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        onBlur={() => {
                          if (
                            !form.email.trim() ||
                            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
                          ) {
                            setErrors((p) => ({
                              ...p,
                              email: "Please enter a valid email.",
                            }));
                          } else {
                            setErrors((p) => ({ ...p, email: undefined }));
                          }
                        }}
                        placeholder="you@example.com"
                        className="rounded-lg border-input"
                        data-ocid="booking.email_input"
                      />
                      {errors.email && (
                        <p
                          className="text-xs text-destructive"
                          data-ocid="booking.email_field_error"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Service + DateTime */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="service"
                          className="font-body text-xs font-bold uppercase tracking-wider text-muted-foreground"
                        >
                          Preferred Service{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={form.service}
                          onValueChange={(v) =>
                            setForm({ ...form, service: v as BookingService })
                          }
                        >
                          <SelectTrigger
                            id="service"
                            className="rounded-lg"
                            data-ocid="booking.service_select"
                          >
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value}>
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="datetime"
                          className="font-body text-xs font-bold uppercase tracking-wider text-muted-foreground"
                        >
                          Date & Time{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="datetime"
                          type="datetime-local"
                          value={form.preferredDateTime}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              preferredDateTime: e.target.value,
                            })
                          }
                          onBlur={() => {
                            if (!form.preferredDateTime)
                              setErrors((p) => ({
                                ...p,
                                preferredDateTime: "Please choose date & time.",
                              }));
                            else
                              setErrors((p) => ({
                                ...p,
                                preferredDateTime: undefined,
                              }));
                          }}
                          className="rounded-lg border-input"
                          data-ocid="booking.datetime_input"
                        />
                        {errors.preferredDateTime && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="booking.datetime_field_error"
                          >
                            {errors.preferredDateTime}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="notes"
                        className="font-body text-xs font-bold uppercase tracking-wider text-muted-foreground"
                      >
                        Additional Notes{" "}
                        <span className="text-muted-foreground font-normal normal-case tracking-normal">
                          (optional)
                        </span>
                      </Label>
                      <Textarea
                        id="notes"
                        value={form.notes}
                        onChange={(e) =>
                          setForm({ ...form, notes: e.target.value })
                        }
                        placeholder="Any special requests, allergies, or preferences we should know about..."
                        rows={3}
                        className="rounded-lg border-input resize-none"
                        data-ocid="booking.notes_textarea"
                      />
                    </div>

                    <p className="text-xs text-muted-foreground">
                      Fields marked with{" "}
                      <span className="text-destructive">*</span> are required.
                    </p>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-body font-bold uppercase tracking-wider text-sm shadow-lift hover:shadow-elegant transition-smooth mt-1 disabled:opacity-60"
                      data-ocid="booking.submit_button"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Submitting…
                        </span>
                      ) : (
                        "Request Appointment"
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Salon Info Sidebar */}
            <motion.aside
              className="space-y-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="bg-card border border-border rounded-2xl p-6 shadow-elegant">
                <h3 className="font-display text-xl italic text-foreground mb-4">
                  Visit Us
                </h3>
                <address className="not-italic space-y-3">
                  <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{salonInfo.address}</span>
                  </div>
                  <a
                    href={`tel:${salonInfo.phone}`}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-ocid="booking.phone_link"
                  >
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    {salonInfo.phone}
                  </a>
                  <a
                    href={`mailto:${salonInfo.email}`}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-ocid="booking.email_link"
                  >
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    {salonInfo.email}
                  </a>
                </address>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 shadow-elegant">
                <h3 className="font-display text-xl italic text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" /> Hours
                </h3>
                <ul className="space-y-2.5">
                  {salonInfo.hours.map((h) => (
                    <li
                      key={h.days}
                      className="flex items-start justify-between gap-2 text-sm"
                    >
                      <span className="text-muted-foreground">{h.days}</span>
                      <span className="text-foreground font-semibold shrink-0">
                        {h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="gradient-subtle rounded-2xl p-6 border border-border">
                <p className="font-display text-lg italic text-foreground mb-2">
                  Walk-ins Welcome
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Can't book online? Simply walk in during business hours and
                  we'll accommodate you with warmth.
                </p>
              </div>

              {/* Trust badges */}
              <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5 text-center space-y-2">
                <p className="text-xs font-body font-bold uppercase tracking-widest text-primary">
                  Why Choose Us
                </p>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  {[
                    "Women-Led",
                    "15+ Years",
                    "Premium Brands",
                    "No Hidden Fees",
                  ].map((badge) => (
                    <div
                      key={badge}
                      className="bg-card rounded-lg py-2 px-3 text-xs font-body font-semibold text-foreground border border-border text-center"
                    >
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
}
