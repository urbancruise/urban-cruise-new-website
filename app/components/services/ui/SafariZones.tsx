import Image from "next/image";
import Link from "next/link";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const zones: SafariZoneContent[] = [
  {
    name: "Dhikala Zone",
    image: "/images/zones/dhikala.png",
    distance: "30–40 km",
    duration: "4–5 hrs",
    best: "Tigers & Elephants",
    description:
      "The crown jewel of Jim Corbett National Park, known for the highest tiger sightings and stunning views of the Ramganga reservoir. Spot tigers, elephants, leopards, and exotic birds, with the option of an overnight stay inside the forest rest house.",
    href: "/safari/dhikala",
  },
  {
    name: "Bijrani Zone",
    image: "/images/zones/bijrani.png",
    distance: "20–30 km",
    duration: "3–4 hrs",
    best: "Deer & Elephants",
    description:
      "One of the most welcoming safari zones, perfect for first-time visitors. A blend of dense forest and open grassland creates ideal conditions for frequent sightings of deer, elephants, and sometimes tigers.",
    href: "/safari/bijrani",
  },
];

interface SafariZoneContent {
  name: string;
  image: string;
  imageAlt?: string;
  distance: string;
  duration: string;
  best: string;
  description: string;
  href: string;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readText(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

export default function SafariZones({ content }: { content?: unknown }) {
  const section = isRecord(content) ? content : {};
  const sectionZones: SafariZoneContent[] = Array.isArray(section.zones)
    ? section.zones.flatMap((item, index) => {
        if (!isRecord(item) || typeof item.name !== "string") return [];
        const fallback = zones[index % zones.length];
        return [{
          name: item.name,
          image: readText(item.image, fallback.image),
          imageAlt: readText(item.imageAlt, `${item.name} map`),
          distance: readText(item.distance, fallback.distance),
          duration: readText(item.duration, fallback.duration),
          best: readText(item.best, fallback.best),
          description: readText(item.description, fallback.description),
          href: readText(item.href, fallback.href),
        }];
      })
    : [];
  const displayZones = sectionZones.length ? sectionZones : zones;

  return (
    <section className="w-full bg-white px-4 py-14">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div>
          <div className="mb-2 flex w-full items-center justify-start gap-1.5">
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
            <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.15em] text-[#03C35E] xs:text-[10px] sm:text-[10px] sm:tracking-[0.2em] md:text-[11px] lg:text-[12px] lg:tracking-[0.25em] xl:text-[13px]">
              {readText(section.eyebrow, "EXPLORE JUNGLE SAFARI ZONES")}
            </span>
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
          </div>

          <h2 className="text-[21px] xs:text-[23px] sm:text-[27px] md:text-[29px] font-extrabold leading-[1] tracking-[-0.04em] text-[#142236]">
            {readText(section.title, "Jim Corbett National Park, Uttarakhand")}
          </h2>

          <p className="mt-2 font-serif text-[21px] italic leading-tight text-[#03C35E] xs:text-[23px] sm:text-[27px] md:text-[29px]">
            {readText(section.subtitle, "Discover the Best Safari Zones in Jim Corbett")}
          </p>

          <p
            className={`${robotoCondensed.className} mt-5 max-w-[900px] text-[10px] leading-[1.75] text-[#303944] xs:text-[11px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base`}
          >
            {readText(
              section.description,
              "Discover Corbett’s popular safari zones, offering thrilling wildlife sightings, diverse landscapes, and unforgettable jungle experiences for nature lovers and adventure seekers",
            )}
          </p>
        </div>

        {/* Cards */}
        <div
          className={`${robotoCondensed.className} mt-16 flex flex-col gap-14 md:gap-12`}
        >
          {displayZones.map((zone, i) => {
            const reverse = i % 2 !== 0;
            return (
              <article
                key={zone.name}
                className="group relative overflow-visible"
              >
                {/* Safari zone card */}
                <div
                  className={`relative flex min-h-[300px] items-center overflow-hidden rounded-[2rem] border border-[#E8E8E8] bg-white p-8 text-[#142236] shadow-[0_8px_35px_rgba(0,0,0,0.08)] transition-shadow duration-300 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] md:p-10 ${
                    reverse
                      ? "md:justify-start md:pl-10 md:pr-[360px]"
                      : "md:justify-end md:pl-[360px] md:pr-10"
                  }`}
                >
                  {/* Big faded number */}
                  <span
                    className={`pointer-events-none absolute -bottom-10 select-none text-[220px] font-bold leading-none text-[#03C35E]/[0.06] ${
                      reverse ? "right-6" : "left-6"
                    } hidden md:block`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Glow */}
                  <div className="absolute -top-20 right-1/3 h-60 w-60 rounded-full bg-[#03C35E]/[0.06] blur-3xl" />

                  {/* Text */}
                  <div className="relative z-10 mt-[270px] md:mt-0">
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#078B5A]">
                      Safari Zone {String(i + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-2 text-4xl font-bold">{zone.name}</h3>
                    <span className="mt-2 block h-[3px] w-20 rounded bg-[#F7941E] transition-all duration-300 group-hover:w-36" />

                    <p className="mt-5 text-[16px] leading-7 text-[#4B5563]">
                      {zone.description}
                    </p>

                    {/* Info pills */}
                    <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#142236]">
                      <span className="rounded-full border border-[#03C35E]/20 bg-[#EAF8EF] px-4 py-1.5">
                        🛣️ {zone.distance}
                      </span>
                      <span className="rounded-full border border-[#03C35E]/20 bg-[#EAF8EF] px-4 py-1.5">
                        ⏱️ {zone.duration}
                      </span>
                      <span className="rounded-full border border-[#03C35E]/20 bg-[#EAF8EF] px-4 py-1.5">
                        🐯 {zone.best}
                      </span>
                    </div>

                    <Link
                      href={zone.href}
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F7941E] px-7 py-3 font-bold text-white transition hover:bg-[#E8840A]"
                    >
                      Book Safari
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Floating image panel */}
                <div
                  className={`absolute -top-8 left-1/2 h-[270px] w-[88%] -translate-x-1/2 rotate-0 rounded-3xl border border-[#E8E8E8] bg-white p-3 shadow-[0_8px_35px_rgba(0,0,0,0.08)] transition duration-500 group-hover:-translate-y-2 md:top-1/2 md:h-[340px] md:w-[320px] md:-translate-y-1/2 md:group-hover:-translate-y-[calc(50%+8px)] ${
                    reverse
                      ? "md:left-auto md:right-8 md:translate-x-0 md:-rotate-2"
                      : "md:left-8 md:translate-x-0 md:rotate-2"
                  }`}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={zone.image}
                      alt={zone.imageAlt || `${zone.name} map`}
                      fill
                      sizes="(max-width: 768px) 90vw, 320px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}