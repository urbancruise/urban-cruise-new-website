import Image from "next/image";
import Link from "next/link";
import { getVehicleUrl } from "@/app/lib/vehicleUrlMappings";
import type { ServiceLocation } from "./types";

interface ServiceCard {
  title: string;
  vehicleSlug: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface OurServicesContent {
  eyebrow: string;
  title: string;
  description: string;
  cards: ServiceCard[];
}

const FALLBACK_CONTENT: OurServicesContent = {
  eyebrow: "Jim Corbett Vehicle Rental",
  title: "Our Services",
  description:
    "Choose the right vehicle for your Jim Corbett trip, from comfortable cars to spacious group travel.",
  cards: [
    {
      title: "Car & SUVs",
      vehicleSlug: "car-suvs",
      description: "Private cars and SUVs for comfortable journeys to Jim Corbett.",
      image: "/images/vehicleforeverygroupsize/7.jpeg",
      imageAlt: "Car and SUV rental for a Jim Corbett trip",
    },
    {
      title: "Tempo Traveller",
      vehicleSlug: "tempo-traveller",
      description: "Roomy, comfortable travel for families and small groups.",
      image: "/images/vehicleforeverygroupsize/8.jpeg",
      imageAlt: "Tempo Traveller for group travel to Jim Corbett",
    },
    {
      title: "Luxury Bus",
      vehicleSlug: "luxury-bus",
      description: "Spacious bus travel for larger groups visiting Jim Corbett.",
      image: "/images/vehicleforeverygroupsize/9.jpeg",
      imageAlt: "Luxury bus for group travel to Jim Corbett",
    },
  ],
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readText(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function normalizeContent(value: unknown): OurServicesContent {
  if (!isRecord(value)) return FALLBACK_CONTENT;

  const cards = Array.isArray(value.cards)
    ? value.cards.flatMap((card, index): ServiceCard[] => {
        if (!isRecord(card)) return [];
        const fallback = FALLBACK_CONTENT.cards[index] ?? FALLBACK_CONTENT.cards[0];
        return [
          {
            title: readText(card.title, fallback.title),
            vehicleSlug: readText(card.vehicleSlug, fallback.vehicleSlug),
            description: readText(card.description, fallback.description),
            image: readText(card.image, fallback.image),
            imageAlt: readText(card.imageAlt, fallback.imageAlt),
          },
        ];
      })
    : FALLBACK_CONTENT.cards;

  return {
    eyebrow: readText(value.eyebrow, FALLBACK_CONTENT.eyebrow),
    title: readText(value.title, FALLBACK_CONTENT.title),
    description: readText(value.description, FALLBACK_CONTENT.description),
    cards,
  };
}

export default function OurServices({
  content,
  location,
}: {
  content?: unknown;
  location: ServiceLocation;
}) {
  const section = normalizeContent(content);

  return (
    <section className="bg-[#f8faf8] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#188A31] sm:text-sm">
            {section.eyebrow}
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#142236] sm:text-4xl lg:text-5xl">
            {section.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {section.description}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {section.cards.map((card, index) => {
            const href = getVehicleUrl(
              location === "global" ? "delhi" : location,
              card.vehicleSlug,
            );

            return (
              <Link
                key={`${card.vehicleSlug}-${index}`}
                href={href}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#142236] transition-colors group-hover:text-[#188A31]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[#188A31]">
                    Explore vehicles
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
