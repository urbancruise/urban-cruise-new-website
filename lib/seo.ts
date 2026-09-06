import type { Metadata } from "next";
import { formatLocationName } from "@/app/lib/location";
import { getServiceSeoContent } from "@/lib/service-seo";
import { getVehicleSeoContent } from "@/lib/vehicle-seo";

export const SITE_URL = "https://urbancruise.in";

export const SITE_NAME = "Urban Cruise";
export const SOCIAL_IMAGE = absoluteUrl("/images/hero/vehicleImage.webp");
export const DEFAULT_DESCRIPTION =
  "Book premium cars, buses, tempo travellers and luxury vehicles for city travel, airport transfers, tours and events across India with Urban Cruise.";
export const DEFAULT_KEYWORDS = [
  "urban cruise",
  "vehicle rental",
  "car rental",
  "bus rental",
  "tempo traveller rental",
];

const CITY_HOME_SEO: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  delhi: {
    title: "Car & Bus Rental in Delhi NCR | Urban Cruise",
    description:
      "Book chauffeur-driven cars, tempo travellers and buses in Delhi NCR for airport trips, sightseeing, business travel and outstation journeys.",
    keywords: ["car rental in Delhi", "airport transfer Delhi", "bus rental Delhi"],
  },
  gurugram: {
    title: "Corporate & Airport Car Rental in Gurugram | Urban Cruise",
    description:
      "Arrange reliable car, van and bus rentals in Gurugram for Cyber City meetings, airport transfers, hotel pickups and group travel across NCR.",
    keywords: ["car rental in Gurugram", "airport transfer Gurugram", "corporate transport Gurugram"],
  },
  mumbai: {
    title: "Car, Van & Bus Rental in Mumbai | Urban Cruise",
    description:
      "Plan Mumbai airport transfers, corporate travel, sightseeing and wedding transport with comfortable cars, luxury vans and buses with drivers.",
    keywords: ["car rental in Mumbai", "airport transfer Mumbai", "bus rental Mumbai"],
  },
  pune: {
    title: "Car & Tempo Traveller Rental in Pune | Urban Cruise",
    description:
      "Hire cars, tempo travellers and buses in Pune for airport pickups, IT corridors, family trips, student travel and Maharashtra outstation routes.",
    keywords: ["car rental in Pune", "tempo traveller Pune", "outstation car rental Pune"],
  },
};

export type SeoPageType =
  | "home"
  | "about"
  | "blog"
  | "booking"
  | "careers"
  | "contact"
  | "faqs"
  | "news"
  | "partner"
  | "testimonials"
  | "vehicle"
  | "service";

export function absoluteUrl(path: string): string {
  const url = new URL(path || "/", SITE_URL);
  const pathname = normalizeCanonicalPath(url.pathname);

  return `${SITE_URL}${pathname}`;
}

export function canonicalUrl(path: string): string {
  return absoluteUrl(path);
}

export function createSeoMetadata({
  title,
  description,
  path,
  keywords = [],
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noindex?: boolean;
}): Metadata {
  const canonical = canonicalUrl(path);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: SOCIAL_IMAGE,
          alt: `${title} | ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SOCIAL_IMAGE],
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

function normalizeCanonicalPath(pathname: string): string {
  const normalizedPath = pathname
    .replace(/\/{2,}/g, "/")
    .toLowerCase()
    .replace(/\/$/, "");

  return normalizedPath || "/";
}

export function createSiteMetadata(): Metadata {
  return createSeoMetadata({
    title: "Urban Cruise | Premium Vehicle Rental in India",
    description: DEFAULT_DESCRIPTION,
    path: "/",
  });
}

const PAGE_COPY: Record<
  Exclude<SeoPageType, "home" | "vehicle" | "service">,
  { title: string; description: string }
> = {
  about: {
    title: "About Urban Cruise",
    description:
      "Learn about Urban Cruise and our premium car, bus and chauffeur-driven vehicle rental services.",
  },
  blog: {
    title: "Urban Cruise Blog",
    description:
      "Travel advice, vehicle rental guides and destination ideas from Urban Cruise.",
  },
  booking: {
    title: "Book Vehicle Rental | Urban Cruise",
    description:
      "Request a quote and book a premium rental vehicle with Urban Cruise.",
  },
  careers: {
    title: "Careers at Urban Cruise",
    description:
      "Explore career opportunities and join the Urban Cruise vehicle rental team.",
  },
  contact: {
    title: "Contact Urban Cruise",
    description:
      "Contact Urban Cruise for vehicle rental bookings, quotes and travel support.",
  },
  faqs: {
    title: "Vehicle Rental FAQs | Urban Cruise",
    description:
      "Find answers about Urban Cruise vehicle rentals, bookings, drivers and travel services.",
  },
  news: {
    title: "Urban Cruise News & Media",
    description:
      "Read the latest news and media updates from Urban Cruise.",
  },
  partner: {
    title: "Partner with Urban Cruise",
    description:
      "Partner with Urban Cruise to grow your travel and vehicle rental business.",
  },
  testimonials: {
    title: "Urban Cruise Customer Reviews",
    description:
      "Read customer testimonials about Urban Cruise vehicle rental experiences.",
  },
};

export function createLocationMetadata(
  location: string,
  pageType: SeoPageType,
  path: string,
): Metadata {
  const city = formatLocationName(location);

  if (pageType === "home") {
    const citySeo = CITY_HOME_SEO[location];
    return createSeoMetadata({
      title: citySeo?.title || `Vehicle Rental in ${city} | Urban Cruise`,
      description:
        citySeo?.description ||
        `Book cars, buses, tempo travellers and luxury vehicles in ${city}. Get dependable drivers, clear pricing and comfortable travel with Urban Cruise.`,
      path,
      keywords: citySeo?.keywords || [`vehicle rental in ${city}`, `car rental in ${city}`],
    });
  }

  if (pageType === "vehicle") {
    const slug = getPathSlug(path);
    const vehicle = getVehicleSeoContent(getVehicleType(slug));
    return createSeoMetadata({
      title: `${vehicle.title} in ${city} | Urban Cruise`,
      description: `${vehicle.description} Available in ${city} with Urban Cruise.`,
      path,
      keywords: [`${vehicle.name.toLowerCase()} ${city}`, `${vehicle.title.toLowerCase()} with driver`],
    });
  }

  if (pageType === "service") {
    const slug = getPathSlug(path);
    const service = getServiceSeoContent(getServiceType(slug));
    return createSeoMetadata({
      title: `${service.title} in ${city} | Urban Cruise`,
      description: `${service.description} Urban Cruise serves ${city} with planned vehicle support.`,
      path,
      keywords: [`${service.name.toLowerCase()} ${city}`, `${service.name.toLowerCase()} with driver`],
    });
  }

  const copy = PAGE_COPY[pageType];
  const title = getLocationPageTitle(pageType, city, copy.title);
  return createSeoMetadata({
    title,
    description: getLocationPageDescription(pageType, city),
    path,
    keywords: [`${pageType} Urban Cruise ${city}`],
  });
}

export function getDynamicPageType(
  slug: string,
): Extract<SeoPageType, "vehicle" | "service"> {
  return isServiceSlug(slug) ? "service" : "vehicle";
}

function getLocationPageDescription(
  pageType: Exclude<SeoPageType, "home" | "vehicle" | "service">,
  city: string,
): string {
  switch (pageType) {
    case "about":
      return `Learn how Urban Cruise delivers trusted vehicle rental in ${city}, from comfortable cars and buses to professional chauffeur-led travel.`;
    case "blog":
      return `Explore vehicle rental tips, travel guides and destination ideas for ${city} on the Urban Cruise blog. Plan smarter, more comfortable journeys.`;
    case "booking":
      return `Book vehicle rental in ${city} with Urban Cruise. Request a quick quote for cars, buses and tempo travellers with dependable travel support.`;
    case "careers":
      return `Discover careers at Urban Cruise in ${city} and help us deliver reliable, comfortable vehicle rental experiences for every traveller.`;
    case "contact":
      return `Contact Urban Cruise for vehicle rental in ${city}. Get booking help, trip advice and a tailored quote from our travel support team.`;
    case "faqs":
      return `Find answers about vehicle rental in ${city}. Learn about bookings, vehicles, drivers, pricing and travel services from Urban Cruise.`;
    case "news":
      return `Read Urban Cruise news and media updates from ${city}, including company announcements, travel services and vehicle rental developments.`;
    case "partner":
      return `Partner with Urban Cruise in ${city} to expand vehicle rental opportunities and provide travellers with dependable transport solutions.`;
    case "testimonials":
      return `Read genuine vehicle rental reviews from Urban Cruise customers in ${city} and see why travellers choose us for comfortable journeys.`;
  }
}

function getLocationPageTitle(
  pageType: Exclude<SeoPageType, "home" | "vehicle" | "service">,
  city: string,
  fallback: string,
): string {
  switch (pageType) {
    case "about":
      return `About Urban Cruise in ${city}`;
    case "blog":
      return `Vehicle Rental Blog for ${city} | Urban Cruise`;
    case "booking":
      return `Book Vehicle Rental in ${city} | Urban Cruise`;
    case "careers":
      return `Urban Cruise Careers in ${city}`;
    case "contact":
      return `Contact Vehicle Rental in ${city} | Urban Cruise`;
    case "faqs":
      return `Vehicle Rental FAQs in ${city} | Urban Cruise`;
    case "news":
      return `Urban Cruise News & Media in ${city}`;
    case "partner":
      return `Vehicle Rental Partnership in ${city} | Urban Cruise`;
    case "testimonials":
      return `Vehicle Rental Reviews in ${city} | Urban Cruise`;
    default:
      return `${fallback} in ${city} | Urban Cruise`;
  }
}

function getVehicleType(slug: string): string {
  if (slug.startsWith("car-rental-")) return "car-suvs";
  if (slug.includes("ertiga")) return "ertiga";
  if (slug.includes("innova-hycross")) return "hycross";
  if (slug.includes("innova-crysta")) return "innova-crysta";
  if (slug.includes("luxury-car")) return "luxury-cars-suvs";
  if (slug.includes("mercedes-sprinter")) return "mercedes-sprinter";
  if (slug.includes("luxury-van")) return "luxury-vans";
  if (slug.includes("maharaja-tempo")) return "maharaja-tempo-traveller";
  if (slug.includes("tempo-traveller")) return "tempo-traveller";
  if (slug.includes("urbania")) return "urbania";
  if (slug.includes("mini-bus")) return "mini-bus";
  if (slug.includes("volvo-bus")) return "volvo-bus";
  if (slug.includes("bharat-benz")) return "bharat-benz-bus";
  if (slug.includes("bus-with-washroom")) return "bus-with-washroom";
  if (slug.includes("sleeper-bus")) return "sleeper-bus";
  if (slug.includes("bus-rental")) return "luxury-bus";
  return "car-suvs";
}

function getServiceType(slug: string): string {
  if (slug.includes("jim-corbett")) return "jim-corbett";
  if (slug.includes("do-dham")) return "do-dham";
  if (slug.includes("char-dham")) return "char-dham";
  if (slug.includes("pilgrimage")) return "pilgrimage";
  if (slug.includes("wedding")) return "wedding";
  if (slug.includes("corporate")) return "corporate";
  if (slug.includes("vacation")) return "vacations";
  return "local-travel";
}

function isServiceSlug(slug: string): boolean {
  return [
    "jim-corbett",
    "do-dham",
    "char-dham",
    "pilgrimage",
    "wedding",
    "corporate",
    "vacation",
    "local-travel",
  ].some((term) => slug.includes(term));
}

function getPathSlug(path: string): string {
  return path.split("/").filter(Boolean).pop() || "vehicle-rental";
}
