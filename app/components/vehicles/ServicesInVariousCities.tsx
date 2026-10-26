"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { createContext, useContext } from "react";

import { getCmsImageAlt } from "@/app/lib/cms-image-alt";
import { getVehicleUrl } from "@/app/lib/vehicleUrlMappings";

interface City {
  name: string;
  slug?: string;
  state?: string;
  image?: string;
  imageAlt?: string;
}

interface SectionContent {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  cities?: City[];
}

interface Props {
  content?: unknown;
  vehicleType: string;
}

export const ServicesInCitiesContext = createContext<{
  content: unknown;
  vehicleType: string;
} | null>(null);

const FALLBACK_CITIES: City[] = [
  {
    name: "Delhi",
    slug: "delhi",
    state: "Delhi NCR",
    image: "/images/vehiclerentalserviceinindia/IndiaGate.webp",
  },
  {
    name: "Gurugram",
    slug: "gurugram",
    state: "Haryana",
    image: "/images/vehiclerentalserviceinindia/Gurugram.webp",
  },
  {
    name: "Mumbai",
    slug: "mumbai",
    state: "Maharashtra",
    image: "/images/vehiclerentalserviceinindia/GatewayOfIndia.webp",
  },
  {
    name: "Pune",
    slug: "pune",
    state: "Maharashtra",
    image: "/images/vehiclerentalserviceinindia/Pune.webp",
  },
];

const VEHICLE_NAMES: Record<string, string> = {
  "car-suvs": "Car & SUVs",
  ertiga: "Ertiga",
  "innova-crysta": "Innova Crysta",
  hycross: "Hycross",
  "luxury-cars-suvs": "Luxury Cars & SUVs",
  "mercedes-sprinter": "Mercedes Sprinter",
  "luxury-vans": "Luxury Vans",
  "tempo-traveller": "Tempo Traveller",
  "maharaja-tempo-traveller": "Maharaja Tempo Traveller",
  urbania: "Urbania",
  "mini-bus": "Mini Bus",
  "luxury-bus": "Luxury Bus",
  "volvo-bus": "Volvo Bus",
  "bharat-benz-bus": "Bharat Benz Bus",
  "bus-with-washroom": "Bus With Washroom",
  "sleeper-bus": "Sleeper | Semi Sleeper Bus",
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readText(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function normalizeContent(content: unknown): SectionContent {
  const values = isRecord(content) ? content : undefined;
  const cities = Array.isArray(values?.cities)
    ? values.cities.flatMap((value): City[] => {
        if (!isRecord(value)) return [];
        const name = readText(value.name);
        if (!name) return [];
        return [
          {
            name,
            slug: readText(value.slug),
            state: readText(value.state),
            image: readText(value.image),
            imageAlt: readText(value.imageAlt),
          },
        ];
      })
    : [];

  return {
    eyebrow: readText(values?.eyebrow),
    title: readText(values?.title),
    titleHighlight: readText(values?.titleHighlight),
    subtitle: readText(values?.subtitle),
    description: readText(values?.description),
    cities: cities.length > 0 ? cities : undefined,
  };
}

export default function ServicesInVariousCities({
  content,
  vehicleType,
}: Props) {
  const section = normalizeContent(content);
  const cities = section.cities ?? FALLBACK_CITIES;
  const vehicleName = VEHICLE_NAMES[vehicleType] ?? vehicleType;

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-9 max-w-[720px] sm:mb-12 md:mb-14 lg:mb-16"
        >
          <div className="mb-3 flex items-center gap-3 sm:mb-4">
            <span className="block h-px w-8 bg-gray-400/60 sm:w-12" />
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#03C35E] sm:text-xs">
              {section.eyebrow ?? "Our Locations"}
            </span>
            <span className="block h-px w-8 bg-gray-400/60 sm:w-12" />
          </div>

          <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.04em] text-[#142236] sm:text-3xl md:text-4xl lg:text-5xl">
            {section.title ?? "OUR SERVICES IN"}{" "}
            <span className="text-[#188A31]">
              {section.titleHighlight ?? "VARIOUS CITIES"}
            </span>
          </h2>
          <p className="mt-3 font-serif text-lg italic leading-tight text-[#03C35E] sm:text-2xl">
            {section.subtitle ?? `Book ${vehicleName} in your preferred city`}
          </p>
          <p className="mt-4 max-w-[620px] text-xs leading-[1.7] text-[#303944] sm:text-sm lg:text-base">
            {section.description ??
              `Explore our ${vehicleName} rental services across major cities in India.`}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-7 xl:gap-x-9">
          {cities.map((city, index) => {
            const fallbackCity = FALLBACK_CITIES.find(
              (fallback) =>
                fallback.slug === city.slug ||
                fallback.name.toLowerCase() === city.name.toLowerCase(),
            );
            const citySlug =
              city.slug ??
              fallbackCity?.slug ??
              city.name.toLowerCase().replace(/\s+/g, "-");
            const image =
              city.image ??
              fallbackCity?.image ??
              "/images/vehiclerentalserviceinindia/IndiaGate.webp";
            const cityLabel = `${vehicleName} in ${city.name}`;

            return (
              <motion.div
                key={`${citySlug}-${city.name}`}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative mx-auto aspect-[4/3] w-full max-w-[360px] md:max-w-full"
              >
                <Link
                  href={getVehicleUrl(citySlug, vehicleType)}
                  aria-label={`${cityLabel}${city.state ? `, ${city.state}` : ""}`}
                  className="absolute inset-0"
                >
                  <div className="absolute left-0 top-0 right-5 bottom-5 flex items-start rounded-2xl bg-white px-4 py-3 shadow-sm">
                    <p className="min-w-0 truncate text-left text-[10px] font-bold text-[#142236] sm:text-xs">
                      {cityLabel}
                      {city.state ? `, ${city.state}` : ""}
                    </p>
                  </div>
                  <div className="absolute left-7 top-8 right-0 bottom-0 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl">
                      <Image
                        src={image}
                        alt={
                          city.imageAlt ??
                          getCmsImageAlt(city, `${city.name}, ${city.state ?? ""}`)
                        }
                        fill
                        sizes="(max-width: 639px) 85vw, (max-width: 1023px) 42vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-black/15 transition-all duration-300 group-hover:bg-black/20" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServicesInVariousCitiesPlacement() {
  const servicesInCities = useContext(ServicesInCitiesContext);
  if (!servicesInCities) return null;

  return (
    <ServicesInVariousCities
      content={servicesInCities.content}
      vehicleType={servicesInCities.vehicleType}
    />
  );
}
