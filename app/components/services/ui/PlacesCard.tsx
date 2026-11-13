"use client";

import Image from "next/image";
import AboutParagraphs from "../../home/about/AboutParagraphs";
import { isRecord, readRecords, readText } from "./cms-content";

interface PilgrimagePlace {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

const defaultPlaces: PilgrimagePlace[] = [
  {
    name: "Varanasi",
    description: "Varanasi is the spiritual capital of India with the sacred Ganga Aarti and the ancient Kashi Vishwanath Temple. Hire comfortable tempo travellers on rent or luxury buses on rent from Delhi to Varanasi for a peaceful journey.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Himalayan mountain scenery for a Varanasi pilgrimage",
  },
  {
    name: "Badrinath",
    description: "Explore the sacred temple dedicated to Lord Vishnu.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mountain scenery for a Badrinath pilgrimage",
  },
  {
    name: "Yamunotri",
    description: "Journey to the source of the Yamuna River.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mountain landscape for a Yamunotri pilgrimage",
  },
  {
    name: "Gangotri",
    description: "Visit the sacred origin of the Ganga River.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mountain route scenery for a Gangotri pilgrimage",
  },
  {
    name: "Haridwar",
    description: "Experience riverside ghats and aarti by the Ganga.",
    image:
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Scenic image for a pilgrimage journey to Haridwar",
  },
  {
    name: "Rishikesh",
    description: "Discover riverside temples and spiritual retreats.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Scenic image for a pilgrimage journey to Rishikesh",
  },
];

function normalizePlaces(value: unknown): PilgrimagePlace[] {
  return readRecords(value).flatMap((place, index) => {
    const name = readText(place.name).trim();
    if (!name) return [];

    const fallback = defaultPlaces[index % defaultPlaces.length];
    return [
      {
        name,
        description: readText(place.description, fallback.description),
        image: readText(place.image, fallback.image),
        imageAlt: readText(place.imageAlt, `Scenic image for ${name}`),
      },
    ];
  });
}

export default function PlacesCard({
  content,
}: {
  content?: unknown;
}) {
  const section = isRecord(content) ? content : {};
  const cmsPlaces = normalizePlaces(section.items);
  const places = cmsPlaces.length > 0 ? cmsPlaces : defaultPlaces;

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
        <div className="mb-8 w-full max-w-[650px] text-left sm:mb-10">
          <div className="mb-2 flex w-full items-center justify-start gap-1.5">
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
            <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.15em] text-[#03C35E] xs:text-[10px] sm:tracking-[0.2em] md:text-[11px] lg:text-[12px] lg:tracking-[0.25em]">
              {readText(section.eyebrow, "Sacred Places")}
            </span>
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
          </div>
          <h2 className="text-[21px] font-extrabold leading-tight tracking-[-0.04em] text-[#142236] xs:text-[23px] sm:text-[27px] md:text-[29px]">
            {readText(section.title, "Popular Pilgrimage Places")}
          </h2>
          <p className="mt-2 font-serif text-[21px] italic leading-tight text-[#03C35E] xs:text-[23px] sm:text-[27px] md:text-[29px]">
            {readText(
              section.subtitle,
              "Explore Sacred Destinations Across India",
            )}
          </p>
          <p className="mt-5 max-w-[590px] text-[10px] leading-[1.75] text-[#303944] xs:text-[11px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
            {readText(
              section.description,
              "Discover sacred temples and spiritual destinations across India.",
            )}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {places.map((place) => (
            <article
              key={place.name}
              className="group relative isolate flex min-h-[200px] overflow-hidden rounded-[24px] border border-white/80 bg-slate-900 shadow-[0_14px_40px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.28)]"
            >
              <Image
                src={place.image}
                alt={place.imageAlt}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1535px) 33vw, 25vw"
                className="absolute inset-0 -z-20 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/95 via-slate-900/25 to-slate-900/5" />

              <div className="flex w-full flex-col justify-end p-5 text-white sm:p-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-xl font-bold sm:text-2xl">
                        {place.name}
                      </h3>
                      <div className="mt-0.5 text-sm text-white/85">
                        <AboutParagraphs
                          paragraphs={[place.description]}
                          wordLimit={11}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
