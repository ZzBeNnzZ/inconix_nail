export type ServiceCategory = "Manicures" | "Pedicures" | "Nail Art" | "Add-Ons";

export interface Service {
  name: string;
  description: string;
  price: string;
  duration: string;
  category: ServiceCategory;
}

export const services: Service[] = [
  {
    name: "Classic Manicure",
    description: "Shape, buff, cuticle care, and your choice of regular polish. A timeless staple.",
    price: "$35",
    duration: "30 min",
    category: "Manicures",
  },
  {
    name: "Gel Manicure",
    description: "Long-lasting gel polish with a mirror-shine finish. Chip-free for up to 3 weeks.",
    price: "$50",
    duration: "45 min",
    category: "Manicures",
  },
  {
    name: "Luxury Spa Manicure",
    description: "Full treatment: soak, exfoliation, sugar scrub, mask, extended massage, and polish.",
    price: "$65",
    duration: "60 min",
    category: "Manicures",
  },
  {
    name: "Dip Powder Manicure",
    description: "Durable dip powder for a natural look and lightweight feel. Lasts 3–4 weeks.",
    price: "$55",
    duration: "50 min",
    category: "Manicures",
  },
  {
    name: "Classic Pedicure",
    description: "Soak, shape, cuticle care, callus removal, and polish. A refreshing foundation.",
    price: "$45",
    duration: "40 min",
    category: "Pedicures",
  },
  {
    name: "Gel Pedicure",
    description: "Everything in the classic pedicure, finished with long-lasting gel polish.",
    price: "$60",
    duration: "50 min",
    category: "Pedicures",
  },
  {
    name: "Luxury Spa Pedicure",
    description: "Hot stone massage, exfoliation, hydrating mask, extended soak, and polish of your choice.",
    price: "$75",
    duration: "60 min",
    category: "Pedicures",
  },
  {
    name: "Nail Art (per nail)",
    description: "Custom designs, hand-painted details, foils, gems, or stamping. Fully bespoke.",
    price: "$5+",
    duration: "Varies",
    category: "Nail Art",
  },
  {
    name: "Full Set Acrylic",
    description: "Classic acrylic extensions for dramatic length and strength. Filed to your preferred shape.",
    price: "$70",
    duration: "75 min",
    category: "Nail Art",
  },
  {
    name: "Gel-X Extensions",
    description: "Soft gel extensions for natural-looking length. Lightweight, flexible, and gentle on natural nails.",
    price: "$80",
    duration: "60 min",
    category: "Nail Art",
  },
  {
    name: "Paraffin Wax Treatment",
    description: "Deeply moisturizing wax treatment for hands or feet. Softens and nourishes dry skin.",
    price: "$15",
    duration: "15 min",
    category: "Add-Ons",
  },
  {
    name: "Extended Massage",
    description: "An additional 15-minute massage upgrade for hands, arms, feet, or calves.",
    price: "$12",
    duration: "15 min",
    category: "Add-Ons",
  },
  {
    name: "Nail Repair",
    description: "Fix a broken or lifted nail. Includes reshaping and polish touch-up.",
    price: "$8",
    duration: "10 min",
    category: "Add-Ons",
  },
  {
    name: "Gel Removal",
    description: "Safe, gentle removal of gel, dip, or acrylic with minimal damage to natural nails.",
    price: "$15",
    duration: "20 min",
    category: "Add-Ons",
  },
];

export const categories: ServiceCategory[] = ["Manicures", "Pedicures", "Nail Art", "Add-Ons"];
