"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { MouseEvent } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useLocation } from "@/app/context/LocationContext";
import { getLocationConfig } from "@/app/lib/locationConfig";
import {
  isRecord,
  readRecords,
  readStringArray,
  readText,
} from "./cms-content";

export interface CardContent {
  id: number | string;
  name: string;
  place: string;
  description: { title?: string; detail: string }[];
  images: string[];
}

export const doDhamYatraPackages: CardContent[] = [
  {
    id: 1,
    name: "Kedarnath Badrinath Tour Package",
    place: "Kedarnath-Badrinath",
    description: [
      {
        title: "Complete 7-8 Day Journey from Haridwar",
        detail:
          "Comprehensive pilgrimage covering the popular Do Dham Yatra: Kedarnath & Badrinath via Haridwar, Rishikesh, and Guptkashi, with comfortable travel through scenic Himalayan routes.",
      },
      {
        title: "Perfect for Busy Schedules",
        detail:
          "A shorter alternative to the full Char Dham, our 8-day Kedarnath-Badrinath tour itinerary fits limited time or less physical ability while delivering complete spiritual fulfilment.",
      },
      {
        title: "VIP Darshan",
        detail:
          "No more waiting in endless queues! We arrange priority entry at Kedarnath and Badrinath temples for peaceful, hassle-free darshan.",
      },
      {
        title: "Pony / Palki / Porter Service",
        detail:
          "Difficult to walk to Kedarnath? We arrange horses, palanquins (dolis), and porters. Extra charges may apply.",
      },
      {
        title: "Sightseeing Included",
        detail:
          "Experience the best Do Dham Yatra sightseeing. Visit sacred places like Bhairav Nath Temple, Vasuki Tal Lake, Gauri Kund, Tapt Kund, Brahma Kapal, and Narad Kund.",
      },
      {
        title: "24/7 Assistance",
        detail:
          "Our support team is always available to handle emergencies like bad weather and road closures.",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    name: "GANGOTRI–YAMUNOTRI TOUR PACKAGE",
    place: "Gangotri-Yamunotri",
    description: [
      {
        title: "Complete 7-8 Day Journey from Haridwar",
        detail:
          "Comprehensive pilgrimage covering the popular Do Dham Yatra: Gangotri & Yamunotri via Haridwar and Rishikesh, with comfortable travel through scenic Himalayan routes.",
      },
      {
        title: "Perfect for Busy Schedules",
        detail:
          "A shorter alternative to the full Char Dham, our 8-day Gangotri-Yamunotri tour itinerary fits limited time or less physical ability while delivering complete spiritual fulfilment.",
      },
      {
        title: "VIP Darshan",
        detail:
          "Difficult to walk to Gangotri & Yamunotri? We arrange horses, palanquins (dolis), and porters. Extra charges may apply.",
      },
      {
        title: "Pony / Palki / Porter Service",
        detail:
          "Difficult to walk to Gangotri & Yamunotri? We arrange horses, palanquins (dolis), and porters. Extra charges may apply.",
      },
      {
        title: "Sightseeing Included",
        detail:
          "Visit the best Do Dham Yatra sightseeing experiences, exploring sacred places like Gaumukh Glacier, Surya Kund, Gauri Kund, Bhairon Ghati, and Janki Chatti.",
      },
      {
        title: "24/7 Assistance",
        detail:
          "Our support team is always available to handle emergencies like bad weather and road closures.",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    ],
  },
];

export const charDhamYatraPackages: CardContent[] = [
  {
    id: 1,
    name: "Complete Char Dham Yatra Package",
    place: "10-12 Days",
    description: [
      {
        title: "Complete Four-Dham Journey",
        detail:
          "Visit Yamunotri, Gangotri, Kedarnath, and Badrinath with a planned itinerary and comfortable vehicle travel through the Himalayas.",
      },
      {
        title: "Comfortable Pilgrimage",
        detail:
          "Choose a suitable vehicle for your family or group, with an experienced driver familiar with mountain routes.",
      },
      {
        title: "Trip Support",
        detail:
          "Get assistance with journey planning, route information, and stops throughout your Char Dham Yatra.",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    name: "Char Dham Yatra from Haridwar",
    place: "10-12 Days",
    description: [
      {
        title: "Start from Haridwar",
        detail:
          "Begin your pilgrimage from Haridwar and travel to Yamunotri, Gangotri, Kedarnath, and Badrinath.",
      },
      {
        title: "Flexible Vehicle Options",
        detail:
          "Arrange a comfortable vehicle for your travel group and planned yatra schedule.",
      },
      {
        title: "Mountain Route Experience",
        detail:
          "Travel with a professional driver experienced with the roads and conditions of the Himalayan region.",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    ],
  },
];

export const pilgrimagePackages: CardContent[] = [
  {
    id: 1,
    name: "Pilgrimage Tour Package",
    place: "3 Days",
    description: [
      {
        title: "Sacred Destination Visits",
        detail:
          "Plan a comfortable trip to important temples and pilgrimage destinations with a professional driver.",
      },
      {
        title: "Comfortable Vehicle Travel",
        detail:
          "Choose a suitable car, tempo traveller, or bus for your family or group.",
      },
      {
        title: "Journey Support",
        detail:
          "Get help with route planning, travel stops, and the details of your pilgrimage journey.",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    name: "Premium Pilgrimage Package",
    place: "5 Days",
    description: [
      {
        title: "A Longer Spiritual Journey",
        detail:
          "Explore multiple sacred destinations with time for temple visits and rest along the way.",
      },
      {
        title: "Flexible Vehicle Options",
        detail:
          "Arrange a comfortable vehicle to suit your travel group and itinerary.",
      },
      {
        title: "Personalized Travel",
        detail:
          "Plan pickup, stops, and destination visits around your group's requirements.",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    name: "Group Pilgrimage Package",
    place: "4 Days",
    description: [
      {
        title: "Travel Together",
        detail:
          "Keep your group together with vehicle options for different group sizes.",
      },
      {
        title: "Planned Temple Visits",
        detail:
          "Coordinate temple visits and travel stops with a flexible itinerary.",
      },
      {
        title: "Experienced Drivers",
        detail:
          "Travel with a professional driver familiar with long-distance journeys.",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 4,
    name: "Custom Pilgrimage Package",
    place: "Flexible",
    description: [
      {
        title: "Choose Your Destinations",
        detail:
          "Create a pilgrimage itinerary around the sacred destinations you want to visit.",
      },
      {
        title: "Flexible Schedule",
        detail:
          "Set your travel dates, pickup point, and journey duration to suit your plans.",
      },
      {
        title: "Personalized Experience",
        detail:
          "Get a travel plan tailored to your group and vehicle requirements.",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop",
    ],
  },
];

export const majorStartingPointOfTheDoDhamYatra: CardContent[] = [
  {
    id: 1,
    name: "Do Dham Yatra from Delhi",
    place: "Delhi",
    description: [
      {
        detail:
          "Do Dham Yatra by Road covering Kedarnath & Badrinath or Gangotri & Yamunotri can be comfortably completed in 6–7 days starting from Delhi. Drive from Delhi to Haridwar first, then begin the yatra with Yamunotri and Gangotri in the first half, followed by Kedarnath and Badrinath. Return to Delhi via Haridwar or Rishikesh. Best time to plan the journey is between May–June or September–October, as all shrines remain closed during the winter months due to heavy snowfall in the Himalayas.",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    name: "Do Dham Yatra from Haridwar",
    place: "Haridwar",
    description: [
      {
        detail:
          "Do Dham Yatra covering Kedarnath & Badrinath and Gangotri & Yamunotri can be comfortably completed in 6–7 days from Haridwar. On Day 1, drive to Yamunotri of Goddess Yamuna. On Day 2, proceed to Gangotri. On Day 3, drive towards Guptkashi via Rudraprayag. On Day 4, visit Kedarnath. On Day 5, descend and drive towards Badrinath. On Day 6, seek blessings at Badrinath Temple. By Day 7, return to Haridwar and conclude with a peaceful Ganga Aarti at Har Ki Pauri.",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    name: "Do Dham Yatra from Rishikesh",
    place: "Rishikesh",
    description: [
      {
        detail:
          "Do Dham Yatra by road covering Kedarnath & Badrinath and Gangotri & Yamunotri can be comfortably completed in 6-7 days from Rishikesh. On Day 1, drive to Yamunotri for darshan of Goddess Yamuna. On Day 2, proceed to Gangotri for blessings of Goddess Ganga. On Day 3, drive to Guptkashi. On Day 4, visit Kedarnath for darshan of Lord Shiva. On Day 5, drive towards Badrinath. On Day 6, seek blessings at Badrinath Temple and return to Rishikesh by Day 7.",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    ],
  },
];

export const otherTourPackages: CardContent[] = [
  {
    id: 1,
    name: "Do Dham Yatra from Delhi",
    place: "Delhi",
    description: [
      {
        detail:
          "Do Dham Yatra by Road covering Kedarnath & Badrinath or Gangotri & Yamunotri can be comfortably completed in 6–7 days starting from Delhi. Drive from Delhi to Haridwar first, then begin the yatra with Yamunotri and Gangotri in the first half, followed by Kedarnath and Badrinath. Return to Delhi via Haridwar or Rishikesh. Best time to plan the journey is between May–June or September–October, as all shrines remain closed during the winter months due to heavy snowfall in the Himalayas.",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    name: "Do Dham Yatra from Haridwar",
    place: "Haridwar",
    description: [
      {
        detail:
          "Do Dham Yatra covering Kedarnath & Badrinath and Gangotri & Yamunotri can be comfortably completed in 6–7 days from Haridwar. On Day 1, drive to Yamunotri of Goddess Yamuna. On Day 2, proceed to Gangotri. On Day 3, drive towards Guptkashi via Rudraprayag. On Day 4, visit Kedarnath. On Day 5, descend and drive towards Badrinath. On Day 6, seek blessings at Badrinath Temple. By Day 7, return to Haridwar and conclude with a peaceful Ganga Aarti at Har Ki Pauri.",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    name: "Do Dham Yatra from Rishikesh",
    place: "Rishikesh",
    description: [
      {
        detail:
          "Do Dham Yatra by road covering Kedarnath & Badrinath and Gangotri & Yamunotri can be comfortably completed in 6-7 days from Rishikesh. On Day 1, drive to Yamunotri for darshan of Goddess Yamuna. On Day 2, proceed to Gangotri for blessings of Goddess Ganga. On Day 3, drive to Guptkashi. On Day 4, visit Kedarnath for darshan of Lord Shiva. On Day 5, drive towards Badrinath. On Day 6, seek blessings at Badrinath Temple and return to Rishikesh by Day 7.",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    ],
  },
];

const cardSectionDefaults = {
  dodhampackages: {
    eyebrow: "Recommended Stay",
    title: "Do Dham Yatra Packages",
    subtitle: "Choose The Right Do Dham Yatra Package For You",
    description:
      "We offer two types of Do Dham Yatra packages: the Badrinath-Kedarnath tour package and the Gangotri-Yamunotri tour package.",
    cards: doDhamYatraPackages,
    columns: "grid-cols-1 md:grid-cols-2",
    showCallButton: false,
  },
  chardhampackages: {
    eyebrow: "Char Dham Packages",
    title: "Char Dham Yatra Packages",
    subtitle: "Choose the Right Char Dham Yatra Package for You",
    description:
      "Explore vehicle options and journey plans for visiting Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    cards: charDhamYatraPackages,
    columns: "grid-cols-1 md:grid-cols-2",
    showCallButton: false,
  },
  pilgrimagepackages: {
    eyebrow: "Pilgrimage Packages",
    title: "Pilgrimage Tour Packages",
    subtitle: "Choose the Right Pilgrimage Package for You",
    description:
      "Explore vehicle options and journey plans for visiting sacred destinations across India.",
    cards: pilgrimagePackages,
    columns: "grid-cols-1 md:grid-cols-2",
    showCallButton: false,
  },
  majorstartingpoints: {
    eyebrow: "Starting Points",
    title: "Major Starting Point of the Do Dham Yatra",
    subtitle: "Start Your Sacred Journey from Delhi, Haridwar & Major Cities",
    description:
      "Choose a convenient starting point for your Do Dham pilgrimage, with journeys available from Delhi, Haridwar, and major cities.",
    cards: majorStartingPointOfTheDoDhamYatra,
    columns: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    showCallButton: false,
  },
  othertourpackages: {
    eyebrow: "Other Tour Packages",
    title: "Other Tour Packages",
    subtitle: "Explore Our Additional Sacred Journeys",
    description:
      "Choose a convenient starting point for your Do Dham pilgrimage, with journeys available from Delhi, Haridwar, and major cities.",
    cards: otherTourPackages,
    columns: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    showCallButton: true,
  },
} as const;

type CardSectionKey = keyof typeof cardSectionDefaults;

function normalizeCardList(value: unknown, fallback: CardContent[]) {
  const cards = readRecords(value).flatMap((card, index): CardContent[] => {
    if (typeof card.name !== "string" || !card.name.trim()) return [];

    const description = readRecords(card.description).flatMap((item) =>
      typeof item.detail === "string"
        ? [
            {
              title: readText(item.title) || undefined,
              detail: item.detail,
            },
          ]
        : [],
    );
    const id =
      typeof card.id === "number" || typeof card.id === "string"
        ? card.id
        : index;

    return [
      {
        id,
        name: card.name,
        place: readText(card.place),
        description,
        images: readStringArray(card.images),
      },
    ];
  });

  return cards.length ? cards : fallback;
}

export function TourPackageCardSection({
  sectionKey,
  content,
}: {
  sectionKey: CardSectionKey;
  content?: unknown;
}) {
  const defaults = cardSectionDefaults[sectionKey];
  const section = isRecord(content) ? content : {};
  const cards = normalizeCardList(section.cards, [...defaults.cards]);

  return (
    <section className="bg-white py-12">
      <div className="mx-auto w-full max-w-[1400px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="mb-10">
          <div className="mb-2 flex items-center justify-start gap-1.5">
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
            <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.15em] text-[#03C35E] xs:text-[10px] sm:tracking-[0.2em] md:text-[11px] lg:text-[12px] lg:tracking-[0.25em]">
              {readText(section.eyebrow, defaults.eyebrow)}
            </span>
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
          </div>
          <h2 className="text-[21px] font-extrabold leading-tight tracking-[-0.04em] text-[#142236] xs:text-[23px] sm:text-[27px] md:text-[29px]">
            {readText(section.title, defaults.title)}
          </h2>
          <p className="mt-2 font-serif text-[21px] italic leading-tight text-[#03C35E] xs:text-[23px] sm:text-[27px] md:text-[29px]">
            {readText(section.subtitle, defaults.subtitle)}
          </p>
          <p className="mt-5 max-w-[900px] text-[10px] leading-[1.75] text-[#303944] xs:text-[11px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
            {readText(section.description, defaults.description)}
          </p>
        </div>
        <div className={`grid w-full gap-6 ${defaults.columns}`}>
          {cards.map((card) => (
            <Card
              key={card.id}
              resort={card}
              showCallButton={defaults.showCallButton}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const DoDhamCardSection = TourPackageCardSection;

export default function Card({
  resort,
  showTitle = true,
  showCallButton = false,
}: {
  resort: CardContent;
  showTitle?: boolean;
  showCallButton?: boolean;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const { getLocationUrl, location } = useLocation();
  const phone = getLocationConfig(location).phone.replace(/\s/g, "");

  const showPreviousImage = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setActiveImage((index) =>
      index === 0 ? resort.images.length - 1 : index - 1,
    );
  };

  const showNextImage = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setActiveImage((index) =>
      index === resort.images.length - 1 ? 0 : index + 1,
    );
  };

  return (
    <article
      id={`package-${resort.id}`}
      className="group flex w-full flex-col rounded-[18px] border border-[#E8E8E8] bg-white p-3 shadow-[0_8px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
    >
      <div className="relative mb-4 h-52 overflow-hidden rounded-2xl sm:h-60 lg:h-64">
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeImage * 100}%)` }}
        >
          {resort.images.map((image, index) => (
            <Image
              key={`${resort.id}-${index}`}
              src={image}
              alt={`${resort.name} - image ${index + 1}`}
              width={800}
              height={600}
              unoptimized
              className="h-full w-full shrink-0 object-cover"
            />
          ))}
        </div>

        <span className="absolute right-4 top-4 z-10 rounded-xl bg-[#F7941E] px-3 py-1.5 font-bold text-white shadow-[0_6px_18px_rgba(247,148,30,0.22)]">
          {resort.place}
        </span>

        {resort.images.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 opacity-0 shadow-md backdrop-blur-md transition-opacity duration-300 hover:bg-white group-hover:opacity-100"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={showNextImage}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 opacity-0 shadow-md backdrop-blur-md transition-opacity duration-300 hover:bg-white group-hover:opacity-100"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
              {resort.images.map((_, index) => (
                <button
                  type="button"
                  key={`${resort.id}-dot-${index}`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-current={activeImage === index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeImage === index
                      ? "w-4 bg-white"
                      : "w-1.5 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-grow flex-col px-3 pb-2">
        {showTitle && (
          <h2 className="mb-1 text-xl font-extrabold leading-tight text-[#142236]">
            {resort.name}
          </h2>
        )}
        <ul className="space-y-2 text-[13px] leading-relaxed text-[#6B7280]">
          {resort.description.map((item) => (
            <li key={item.title ?? item.detail}>
              {item.title && (
                <>
                  <strong className="font-semibold text-[#142236]">
                    {item.title} –
                  </strong>{" "}
                </>
              )}
              {item.detail}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex w-full items-center justify-between pt-3">
          <Link
            href={getLocationUrl("/book")}
            className="w-full max-w-[150px] rounded-full bg-[#F7941E] px-3 py-2 text-center text-sm font-semibold text-white shadow-[0_6px_18px_rgba(247,148,30,0.22)] transition-colors duration-300 hover:bg-[#03C35E]"
          >
            Book Now
          </Link>
          {showCallButton ? (
            <a
              href={`tel:${phone}`}
              className="flex w-full max-w-[150px] items-center justify-center gap-2 rounded-full border border-[#F7941E] bg-white px-3 py-2 text-center text-sm font-semibold text-[#D97706] transition-colors duration-300 hover:bg-[#F7941E] hover:text-white"
            >
              <FaPhoneAlt aria-hidden="true" />
              Call Now
            </a>
          ) : (
            <Link
              href={`/do-dham-yatra-package#package-${resort.id}`}
              className="w-full max-w-[150px] rounded-full border border-[#F7941E] bg-white px-3 py-2 text-center text-sm font-semibold text-[#D97706] transition-colors duration-300 hover:bg-[#F7941E] hover:text-white"
            >
              Read More
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
