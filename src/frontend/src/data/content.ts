import type { GalleryImage, Service, TeamMember, Testimonial } from "@/types";

export const services: Service[] = [
  {
    id: "hair-styling",
    name: "Hair Styling",
    description:
      "From everyday blowouts to red-carpet-ready waves. Our stylists craft the perfect look for your hair type and lifestyle.",
    price: "From $70",
    duration: "60–90 min",
    category: "hair",
    icon: "✂️",
  },
  {
    id: "hair-coloring",
    name: "Color & Highlights",
    description:
      "Balayage, ombré, full color, and precision highlights using premium ammonia-free formulas that protect and illuminate.",
    price: "From $120",
    duration: "90–180 min",
    category: "color",
    icon: "🎨",
  },
  {
    id: "facial-treatment",
    name: "Signature Facial",
    description:
      "Customized deep-cleansing and rejuvenating facials tailored to your skin concerns — hydrating, brightening, or anti-aging.",
    price: "From $90",
    duration: "60 min",
    category: "facial",
    icon: "✨",
  },
  {
    id: "manicure-pedicure",
    name: "Manicure & Pedicure",
    description:
      "Gel, classic, or luxury nail treatments with a curated selection of premium polishes and nail art designs.",
    price: "From $55",
    duration: "45–75 min",
    category: "nails",
    icon: "💅",
  },
  {
    id: "barbering",
    name: "Barbering & Grooming",
    description:
      "Precision cuts, hot towel shaves, and beard sculpting for the modern gentleman — delivered with finesse.",
    price: "From $45",
    duration: "45–60 min",
    category: "grooming",
    icon: "🪒",
  },
  {
    id: "hair-treatment",
    name: "Hair Treatments",
    description:
      "Keratin smoothing, deep conditioning, scalp treatments, and Olaplex bond repair to restore your hair's vitality.",
    price: "From $85",
    duration: "60–90 min",
    category: "treatment",
    icon: "💆",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "carmen",
    name: "Carmen Reyes",
    role: "Creative Director & Senior Stylist",
    bio: "With 15+ years of experience, Carmen's artistry and passion for beautiful hair has made her the heart of El y Ella. She specializes in editorial styles and complex color techniques.",
    image: "/assets/generated/team-carmen.dim_400x400.jpg",
    specialties: ["Balayage", "Bridal Styling", "Keratin"],
  },
  {
    id: "sofia",
    name: "Sofía Morales",
    role: "Master Color Specialist",
    bio: "Sofía is a certified colorist trained in Paris with an eye for dimension and tone. She transforms every client's color story into a vibrant, personalized masterpiece.",
    image: "/assets/generated/team-sofia.dim_400x400.jpg",
    specialties: ["Highlights", "Color Correction", "Olaplex"],
  },
  {
    id: "lunia",
    name: "Lunia Vega",
    role: "Nail & Skin Care Artist",
    bio: "Lunia brings her meticulous artistry to nail art and skin wellness. Her custom designs and soothing facial treatments keep clients coming back week after week.",
    image: "/assets/generated/team-lunia.dim_400x400.jpg",
    specialties: ["Nail Art", "Gel Manicures", "Facials"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Isabella Fontaine",
    review:
      "Carmen gave me the most beautiful balayage I've ever had. The salon is stunning — warm, welcoming, and utterly luxurious. I won't go anywhere else.",
    rating: 5,
    service: "Balayage",
    date: "March 2026",
  },
  {
    id: "t2",
    name: "Valeria Cruz",
    review:
      "Sofía completely transformed my color from a brassy mess to the most gorgeous warm brunette. She listened to every concern and exceeded all my expectations.",
    rating: 5,
    service: "Color Correction",
    date: "February 2026",
  },
  {
    id: "t3",
    name: "Natalia Romero",
    review:
      "Lunia's nail art is unmatched. My gel manicure lasted nearly four weeks and everyone asks where I had it done. The environment is so relaxing too!",
    rating: 5,
    service: "Gel Manicure",
    date: "March 2026",
  },
  {
    id: "t4",
    name: "Dani Herrera",
    review:
      "The hot towel shave and beard sculpt were impeccable — precise, relaxing, and left me looking incredibly polished. El y Ella caters to everyone perfectly.",
    rating: 5,
    service: "Barbering",
    date: "January 2026",
  },
  {
    id: "t5",
    name: "Mariana Silva",
    review:
      "I had the signature facial before my wedding and my skin was absolutely glowing. The team made me feel so special — truly above and beyond service.",
    rating: 5,
    service: "Signature Facial",
    date: "April 2026",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/assets/generated/gallery-salon-interior.dim_800x600.jpg",
    alt: "El y Ella luxury salon interior",
    category: "salon",
  },
  {
    id: "g2",
    src: "/assets/generated/gallery-balayage.dim_800x600.jpg",
    alt: "Gorgeous balayage transformation",
    category: "hair",
  },
  {
    id: "g3",
    src: "/assets/generated/gallery-color-ombre.dim_800x600.jpg",
    alt: "Rose mauve to gold ombré color",
    category: "color",
  },
  {
    id: "g4",
    src: "/assets/generated/gallery-nails-art.dim_800x600.jpg",
    alt: "Delicate rose nail art manicure",
    category: "nails",
  },
  {
    id: "g5",
    src: "/assets/generated/gallery-facial.dim_800x600.jpg",
    alt: "Luxurious signature facial treatment",
    category: "facial",
  },
  {
    id: "g6",
    src: "/assets/generated/gallery-barbering.dim_800x600.jpg",
    alt: "Precision beard sculpting",
    category: "grooming",
  },
  {
    id: "g7",
    src: "/assets/generated/gallery-bridal.dim_800x600.jpg",
    alt: "Elegant bridal updo styling",
    category: "hair",
  },
  {
    id: "g8",
    src: "/assets/generated/gallery-treatment.dim_800x600.jpg",
    alt: "Deep keratin hair treatment",
    category: "treatment",
  },
  {
    id: "g9",
    src: "/assets/generated/hero-salon.dim_1400x700.jpg",
    alt: "Salon ambiance",
    category: "salon",
  },
  {
    id: "g10",
    src: "/assets/generated/team-carmen.dim_400x400.jpg",
    alt: "Carmen – Senior Stylist",
    category: "hair",
  },
  {
    id: "g11",
    src: "/assets/generated/team-sofia.dim_400x400.jpg",
    alt: "Sofía – Color Specialist",
    category: "color",
  },
  {
    id: "g12",
    src: "/assets/generated/team-lunia.dim_400x400.jpg",
    alt: "Lunia – Nail & Skin Artist",
    category: "nails",
  },
];

export const salonInfo = {
  name: "El y Ella",
  tagline: "Luxury Care for Everyone",
  address: "133 Rosewood Avenue, Suite 2B, New York, NY 10025",
  phone: "+1 (212) 555-0183",
  email: "hello@elyella.salon",
  hours: [
    { days: "Monday – Friday", hours: "9:00 AM – 8:00 PM" },
    { days: "Saturday", hours: "9:00 AM – 7:00 PM" },
    { days: "Sunday", hours: "10:00 AM – 5:00 PM" },
  ],
  social: {
    instagram: "https://instagram.com/elyellasalon",
    facebook: "https://facebook.com/elyellasalon",
  },
};
