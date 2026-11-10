'use client';

import React, { useState } from 'react';

const attractions: AttractionContent[] = [
  {
    id: 1,
    name: 'Nainital',
    image: 'https://images.unsplash.com/photo-1588663486368-d372e0795021?q=80&w=800&auto=format&fit=crop',
    imageAlt: "Nainital lake and hills",
    description: 'Nainital is Uttarakhand’s most beloved hill station, famous for its sparkling Naini Lake, bustling Mall Road, and boating experience. A perfect 1-day getaway from Jim Corbett that every traveller must experience at least once.',
  },
  {
    id: 2,
    name: 'Bhimtal',
    image: 'https://images.unsplash.com/photo-1598365612174-9e1a3db6dc8b?q=80&w=800&auto=format&fit=crop',
    imageAlt: "Bhimtal lake",
    description: 'Escape the Nainital crowds at Bhimtal — a serene lake town with a stunning aquarium at its centre. Peaceful, less touristy, and surrounded by lush green hills that make it perfect for a quiet day trip.',
  },
  {
    id: 3,
    name: 'Sattal',
    image: 'https://images.unsplash.com/photo-1620766182966-9a3f5899b31d?q=80&w=800&auto=format&fit=crop',
    imageAlt: "Sattal lakes and forest",
    description: 'Sattal is a hidden paradise of seven interconnected lakes tucked inside dense oak forests. A dream destination for bird watchers and kayaking lovers, it is widely regarded as one of Uttarakhand’s most beautiful and untouched natural spots.',
  },
];

interface AttractionContent {
  id: number | string;
  name: string;
  image: string;
  imageAlt: string;
  description: string;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readText(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

// --- Custom Component for Read More functionality ---
function ReadMoreText({ text, limit = 116 }: { text: string; limit?: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // If text is shorter than limit, just show it
  if (text.length <= limit) {
    return <p className="text-gray-300 text-sm leading-relaxed">{text}</p>;
  }

  // Truncate text logic
  const displayText = isExpanded ? text : `${text.substring(0, limit).trim()}...`;

  return (
    <p className="text-gray-300 text-sm leading-relaxed">
      {displayText}
      <button
        onClick={(e) => {
          e.preventDefault(); // Prevents card click if the whole card is clickable
          setIsExpanded(!isExpanded);
        }}
        className="ml-1 font-semibold text-white transition-colors hover:text-[#F7941E] focus:outline-none"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </p>
  );
}

export default function TouristAttractions({
  content,
}: {
  content?: unknown;
}) {
  const section = isRecord(content) ? content : {};
  const sectionAttractions: AttractionContent[] = Array.isArray(
    section.attractions,
  )
    ? section.attractions.flatMap((item, index) => {
        if (!isRecord(item) || typeof item.name !== "string") return [];
        const fallback = attractions[index % attractions.length];
        return [{
          id:
            typeof item.id === "number" || typeof item.id === "string"
              ? item.id
              : index,
          name: item.name,
          image: readText(item.image, fallback.image),
          imageAlt: readText(item.imageAlt, item.name),
          description: readText(item.description, fallback.description),
        }];
      })
    : [];
  const displayAttractions = sectionAttractions.length
    ? sectionAttractions
    : attractions;

  return (
    <section className="w-full bg-white px-4 py-12 font-sans">
      <div className="mx-auto w-full max-w-6xl">

        {/* --- Section Header --- */}
        <div className="mb-10">
          <div className="mb-2 flex w-full items-center justify-start gap-1.5">
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
            <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.15em] text-[#03C35E] xs:text-[10px] sm:text-[10px] sm:tracking-[0.2em] md:text-[11px] lg:text-[12px] lg:tracking-[0.25em] xl:text-[13px]">
              {readText(section.eyebrow, "TOURIST ATTRACTIONS")}
            </span>
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
          </div>

          <h2 className="text-[21px] font-extrabold leading-[1] tracking-[-0.04em] text-[#142236] xs:text-[23px] sm:text-[27px] md:text-[29px]">
            {readText(section.title, "Explore Near Jim Corbett")}
          </h2>

          <p className="mt-2 font-serif text-[21px] italic leading-tight text-[#03C35E] xs:text-[23px] sm:text-[27px] md:text-[29px]">
            {readText(section.subtitle, "Make More of Your Corbett Getaway")}
          </p>

          <p className="mt-5 max-w-[900px] text-[10px] leading-[1.75] text-[#303944] xs:text-[11px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
            {readText(
              section.description,
              "Discover beautiful hill stations, peaceful lakes, and scenic getaways around Jim Corbett National Park. Add a memorable day trip to your wildlife adventure and explore more of Uttarakhand.",
            )}
          </p>
        </div>

        {/* --- Card Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {displayAttractions.map((item, index) => (
            <div
              key={item.id}
              className={`group relative h-[420px] cursor-pointer overflow-hidden rounded-[2rem] border border-[#dce4dc] bg-white shadow-[0_5px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 ${
                index % 2 === 0
                  ? "hover:shadow-[0_12px_35px_rgba(3,195,94,0.28)]"
                  : "hover:shadow-[0_12px_35px_rgba(247,148,30,0.28)]"
              }`}
            >

              {/* Background Image */}
              <img
                src={item.image}
                alt={item.imageAlt || item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#142236]/95 via-[#142236]/60 to-transparent"></div>

              {/* Content Container */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col">

                {/* Title */}
                <h3 className="text-3xl font-bold text-white tracking-wide mb-3">
                  {item.name}
                </h3>

                {/* Description with Read More */}
                <ReadMoreText text={item.description} limit={116} />

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}