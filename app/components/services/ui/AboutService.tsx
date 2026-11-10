"use client";

import Image from "next/image";
import AboutParagraphs from "../../home/about/AboutParagraphs";

const DEFAULT_PARAGRAPHS = [
  "Urban Cruise is India's trusted car & bus rental company, offering affordable and reliable travel solutions for every journey.",
  "From outstation trips, tempo travellers, mini buses, luxury cars to wedding, corporate events, family vacations and pilgrimage tours — we make every ride safe, comfortable and memorable.",
  "With 15+ offices across India including Delhi, Gurugram, Faridabad, Noida, Ghaziabad, Mumbai, Pune and more — we are always near you to serve better.",
  "Our mission is simple: to deliver the best travel experience at the best price with 24x7 customer support and professional drivers.",
];

// Default image: file ko public/images/about-us.jpg me rakhein
const FALLBACK_IMAGE = "/images/about-us.jpg";

interface AboutServiceContent {
  eyebrow?: string;
  title?: string;
  tagline?: string;
  image?: string;
  imageUrl?: string;
  paragraphs?: string[];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readText(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

export default function AboutService({ content }: { content?: unknown }) {
  const section: AboutServiceContent = isRecord(content)
    ? {
        eyebrow: readText(content.eyebrow, "About Us"),
        title: readText(content.title, "URBAN CRUISE"),
        tagline: readText(content.tagline, "Your Journey, Our Passion"),
        imageUrl: readText(content.imageUrl, readText(content.image, "")),
        paragraphs: Array.isArray(content.paragraphs)
          ? content.paragraphs.filter(
              (paragraph): paragraph is string =>
                typeof paragraph === "string",
            )
          : undefined,
      }
    : {};

  const eyebrow = section.eyebrow ?? "About Us";
  const title = section.title ?? "URBAN CRUISE";
  const tagline = section.tagline ?? "Your Journey, Our Passion";
  const imageUrl = section.imageUrl?.trim() || FALLBACK_IMAGE;

  const paragraphs = section.paragraphs?.length
    ? section.paragraphs
    : DEFAULT_PARAGRAPHS;

  return (
    <section className="relative w-full overflow-hidden bg-white py-1 xs:py-1 sm:py-3 md:py-7 lg:py-11 xl:py-15">
      <div className="relative mx-auto w-full max-w-[1440px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 md:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 xl:gap-16">
        {/* LEFT IMAGE AREA */}
          <div className="relative z-10 w-full pt-2 sm:pt-3 lg:pt-0">
            <div className="relative z-0 ml-auto aspect-[1.65/1] w-full overflow-hidden rounded-[20px] shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:rounded-[24px] md:rounded-[26px] lg:w-[96%] xl:w-full">
              <Image
                src={imageUrl}
                alt="Urban Cruise - Bus Rental Services"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>
          </div>
          {/* RIGHT CONTENT */}
          <div className="relative z-10 mx-auto w-full max-w-[650px] lg:mx-0">
            <div className="mb-2 flex w-full items-center justify-center gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 lg:justify-start">
              <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
              <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.15em] text-[#03C35E] xs:text-[10px] sm:text-[10px] sm:tracking-[0.2em] md:text-[11px] lg:text-[12px] lg:tracking-[0.25em] xl:text-[13px]">
                {eyebrow}
              </span>
              <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
            </div>

            <h2 className="text-[21px] xs:text-[23px] sm:text-[27px] md:text-[29px] font-extrabold leading-[1] tracking-[-0.04em] text-[#142236]">
              {title}
            </h2>

            <p className="mt-2 font-serif text-[21px] italic leading-tight text-[#03C35E] xs:text-[23px] sm:text-[27px] md:text-[29px]">
              {tagline}
            </p>

            <div className="mt-5 max-w-[590px] space-y-3 xs:space-y-4 leading-[1.75] text-[#303944] text-[10px] xs:text-[11px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
              <AboutParagraphs paragraphs={paragraphs} wordLimit={116} />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}