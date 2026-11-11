"use client";

import Image from "next/image";
import { useState } from "react";
import { FaHotel, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { getLocationConfig } from "@/app/lib/locationConfig";
import type { ServiceLocation } from "./types";
import { isRecord, readRecords, readText } from "./cms-content";

interface HotelContent {
  id: number | string;
  name: string;
  location: string;
  hotelCount: string;
  image: string;
  imageAlt: string;
  description: string;
}

const defaultHotels: HotelContent[] = [
  {
    id: 1,
    name: "Hotels in Badrinath",
    location: "Badrinath",
    hotelCount: "18+ Hotels",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Himalayan mountain scenery near Badrinath",
    description: "Budget to luxury stays · Hot Water · Meals · Parking",
  },
  {
    id: 2,
    name: "Hotels in Yamunotri",
    location: "Yamunotri",
    hotelCount: "18+ Hotels",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Beautiful mountain accommodation near Yamunotri",
    description: "Budget to luxury stays · Hot Water · Meals · Parking",
  },
  {
    id: 3,
    name: "Hotels in Gangotri",
    location: "Gangotri",
    hotelCount: "18+ Hotels",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Scenic mountain resort near Guptkashi",
    description: "Budget to luxury stays · Hot Water · Meals · Parking",
  },
];

function ReadMoreText({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 100;

  if (text.length <= limit) {
    return <p className="text-sm leading-relaxed text-gray-200">{text}</p>;
  }

  return (
    <p className="text-sm leading-relaxed text-gray-200">
      {isExpanded ? text : `${text.substring(0, limit).trim()}...`}
      <button
        type="button"
        onClick={() => setIsExpanded((expanded) => !expanded)}
        className="ml-1 font-semibold text-white transition-colors hover:text-[#F7941E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-expanded={isExpanded}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </p>
  );
}

function normalizeHotels(value: unknown): HotelContent[] {
  return readRecords(value).flatMap((hotel, index) => {
    if (typeof hotel.name !== "string" || !hotel.name.trim()) return [];

    return [
      {
        id:
          typeof hotel.id === "number" || typeof hotel.id === "string"
            ? hotel.id
            : index,
        name: hotel.name.trim(),
        location: readText(hotel.location, "Badrinath"),
        hotelCount: readText(hotel.hotelCount, "Hotels"),
        image: readText(hotel.image),
        imageAlt: readText(hotel.imageAlt, hotel.name),
        description: readText(hotel.description),
      },
    ];
  });
}

export default function Hotels({
  content,
  location,
}: {
  content?: unknown;
  location: ServiceLocation;
}) {
  const section = isRecord(content) ? content : {};
  const configuredHotels = normalizeHotels(section.hotels);
  const displayHotels = configuredHotels.length ? configuredHotels : defaultHotels;
  const phone = getLocationConfig(location).phone.replace(/\s/g, "");

  return (
    <section className="w-full bg-white py-12 font-sans">
      <div className="mx-auto w-full max-w-[1400px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="mb-14 w-full max-w-[650px] text-left sm:mb-16 md:mb-20">
          <div className="mb-2 flex w-full items-center justify-start gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3">
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
            <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.15em] text-[#03C35E] xs:text-[10px] sm:text-[10px] sm:tracking-[0.2em] md:text-[11px] lg:text-[12px] lg:tracking-[0.25em] xl:text-[13px]">
              {readText(section.eyebrow, "RECOMMENDED STAYS")}
            </span>
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
          </div>
          <h2 className="text-[21px] font-extrabold leading-[1] tracking-[-0.04em] text-[#142236] xs:text-[23px] sm:text-[27px] md:text-[29px]">
            {readText(section.title, "Hotels for Your Do Dham Yatra")}
          </h2>
          <p className="mt-2 font-serif text-[21px] italic leading-tight text-[#03C35E] xs:text-[23px] sm:text-[27px] md:text-[29px]">
            {readText(section.subtitle, "Comfortable Stays Along Your Journey")}
          </p>
          <p className="mt-5 max-w-[900px] text-[10px] leading-[1.75] text-[#303944] xs:text-[11px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
            {readText(
              section.description,
              "Find a comfortable stay near the sacred temples, with options to suit your journey and budget.",
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayHotels.map((hotel) => (
            <article
              key={hotel.id}
              className="group relative mx-auto h-[460px] w-full max-w-[380px] overflow-hidden rounded-[1.4rem] border border-[#E8E8E8] bg-[#142236] shadow-[0_8px_35px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            >
              {hotel.image ? (
                <Image
                  src={hotel.image}
                  alt={hotel.imageAlt || hotel.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />

              <div className="absolute left-3 right-3 top-3 z-10 flex items-center justify-between gap-2">
                <span className="inline-flex max-w-[58%] items-center gap-1.5 truncate rounded-full bg-[#F7941E] px-3 py-2 text-xs font-bold text-white shadow-[0_6px_18px_rgba(247,148,30,0.22)] sm:text-sm">
                  <FaMapMarkerAlt aria-hidden="true" className="shrink-0" />
                  <span className="truncate">{hotel.location}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#F7941E] px-3 py-2 text-xs font-bold text-white shadow-[0_6px_18px_rgba(247,148,30,0.22)] sm:text-sm">
                  <FaHotel aria-hidden="true" />
                  {hotel.hotelCount}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 z-10 w-full p-4 sm:p-5">
                <h3 className="mb-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {hotel.name}
                </h3>
                <ReadMoreText text={hotel.description} />

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={`https://wa.me/${phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp about ${hotel.name}`}
                    className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-[#F7941E] px-3 text-xs font-semibold text-[#D97706] transition-colors hover:bg-[#F7941E] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7941E] sm:text-sm"
                  >
                    <FaWhatsapp aria-hidden="true" />
                    WHATSAPP
                  </a>
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#F7941E] px-3 text-xs font-bold text-white shadow-[0_6px_18px_rgba(247,148,30,0.22)] transition-colors hover:bg-[#03C35E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7941E] sm:text-sm"
                  >
                    <FaPhoneAlt aria-hidden="true" />
                    CALL NOW
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
