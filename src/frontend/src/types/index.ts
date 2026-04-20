export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: "hair" | "color" | "nails" | "facial" | "grooming" | "treatment";
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  review: string;
  rating: number;
  service: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export type BookingService =
  | "haircut"
  | "coloring"
  | "highlights"
  | "blowout"
  | "treatment"
  | "styling"
  | "manicure"
  | "pedicure"
  | "facial"
  | "other";

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  service: BookingService;
  preferredDateTime: string;
  notes: string;
}
