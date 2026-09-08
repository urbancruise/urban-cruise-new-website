export interface NavLink {
  href: string;
  label: string;
}

export interface ServiceLink extends NavLink {
  type: "page" | "service";
}

export interface VehicleCategory {
  category: string;
  items: NavLink[];
}

export const aboutLinks: NavLink[] = [
  { href: "/about-urban-cruise", label: "About Us" },
  { href: "/careers-at-urban-cruise", label: "Careers" },
  { href: "/testimonials", label: "Happy Customers" },
  { href: "/partner-program", label: "Partner Program" },
  { href: "/contact-urban-cruise", label: "Contact Us" },
];

export const serviceLinks: ServiceLink[] = [
  { href: "/services", label: "All Services", type: "page" },
  { href: "/delhi-to-jim-corbett-vehicle-rental", label: "Jim Corbett", type: "service" },
  { href: "/do-dham-yatra-package", label: "Do Dham Yatra", type: "service" },
  { href: "/char-dham-yatra-package", label: "Char Dham Yatra", type: "service" },
  { href: "/pilgrimage-vehicle-rental", label: "Pilgrimage Travel", type: "service" },
  { href: "/wedding-cars-and-bus-rental-delhi", label: "Wedding Travel", type: "service" },
  { href: "/corporate-travel-rental-service", label: "Corporate Travel", type: "service" },
  { href: "/vacation-bus-and-car-rentals-in-delhi", label: "Vacations", type: "service" },
  { href: "/bus-and-car-rental-for-local-travel", label: "Local Travel", type: "service" },
];

export const infoLinks: NavLink[] = [
  { href: "/faqs", label: "FAQ's" },
  { href: "/news-media", label: "News & Media" },
  { href: "/blog", label: "Blog" },
  { href: "/our-vehicles", label: "Our Vehicles" },
];

export const vehicleLinks: VehicleCategory[] = [
  {
    category: "Car & SUVs",
    items: [
      { href: "/car-suvs", label: "Car & SUVs" },
      { href: "/ertiga", label: "Ertiga" },
      { href: "/innova-crysta", label: "Innova Crysta" },
      { href: "/hycross", label: "Hycross" },
    ],
  },
  {
    category: "Luxury Cars, SUVs, Vans",
    items: [
      { href: "/luxury-cars-suvs", label: "Luxury Cars & SUVs" },
      { href: "/mercedes-sprinter", label: "Mercedes Sprinter" },
      { href: "/luxury-vans", label: "Luxury Vans" },
    ],
  },
  {
    category: "Tempo Traveller",
    items: [
      { href: "/tempo-traveller", label: "Tempo Traveller" },
      { href: "/maharaja-tempo-traveller", label: "Maharaja Tempo Traveller" },
    ],
  },
  { category: "Urbania", items: [{ href: "/urbania", label: "Urbania" }] },
  { category: "Mini Bus", items: [{ href: "/mini-bus", label: "Mini Bus" }] },
  {
    category: "Luxury Buses",
    items: [
      { href: "/luxury-bus", label: "Luxury Bus" },
      { href: "/volvo-bus", label: "Volvo Bus" },
      { href: "/bharat-benz-bus", label: "Bharat Benz Bus" },
      { href: "/bus-with-washroom", label: "Bus With Washroom" },
      { href: "/sleeper-bus", label: "Sleeper | Semi Sleeper Bus" },
    ],
  },
];

export const dropdownClassName =
  "absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white/90 backdrop-blur-2xl backdrop-saturate-150 border border-white/80 rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.14)] overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200";

export const linkClassName =
  "block px-4 py-2.5 text-xs sm:text-sm text-[#3A3D33] hover:bg-[#F3EFE4] hover:text-[#03C35E] transition-all duration-200";
