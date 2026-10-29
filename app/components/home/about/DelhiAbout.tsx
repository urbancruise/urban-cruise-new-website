"use client";

import { BsFillBusFrontFill } from "react-icons/bs";
import { FaCar, FaBus, FaBusAlt } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import type { AboutContent } from "../../AboutSelector";
import { toYouTubeEmbedUrl } from "@/app/lib/youtube";
import AboutParagraphs from "./AboutParagraphs";

const fleet = [
  { icon: IoCarSport, label: "Cars" },
  { icon: FaCar, label: "Sedans" },
  { icon: FaBus, label: "SUVs" },
  { icon: BsFillBusFrontFill, label: "Tempo Traveller" },
  { icon: FaBusAlt, label: "Luxury Bus" },
];

const DEFAULT_PARAGRAPHS = [
  "Urban Cruise is India's trusted car & bus rental company, offering affordable and reliable travel solutions for every journey.",
  "From outstation trips, tempo travellers, mini buses, luxury cars to wedding, corporate events, family vacations and pilgrimage tours — we make every ride safe, comfortable and memorable.",
  "With 15+ offices across India including Delhi, Gurugram, Faridabad, Noida, Ghaziabad, Mumbai, Pune and more — we are always near you to serve better.",
  "Our mission is simple: to deliver the best travel experience at the best price with 24x7 customer support and professional drivers.",
];

const FALLBACK_VIDEO = "https://www.youtube.com/embed/yrUUVpiBL_Y";

interface AboutProps {
  content?: AboutContent | null;
}

export default function DelhiAbout({ content }: AboutProps) {
  const eyebrow = content?.eyebrow ?? "About Us";
  const title = content?.title ?? "URBAN CRUISE";
  const tagline = content?.tagline ?? "Your Journey, Our Passion";

  // Normalize CMS URL into a valid embed URL
  const rawVideoUrl = content?.videoUrl?.trim();
  const normalizedFromCms = rawVideoUrl ? toYouTubeEmbedUrl(rawVideoUrl) : null;
  const videoUrl = normalizedFromCms ?? FALLBACK_VIDEO;

  const paragraphs = content?.paragraphs?.length
    ? content.paragraphs
    : DEFAULT_PARAGRAPHS;

  return (
    <section className="relative w-full overflow-hidden bg-white py-1 xs:py-1 sm:py-3 md:py-7 lg:py-11 xl:py-15">
      <div className="relative mx-auto w-full max-w-[1440px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 md:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 xl:gap-16">
          {/* LEFT CONTENT */}
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

          {/* RIGHT VIDEO AREA */}
          <div className="relative z-10 w-full pt-2 sm:pt-3 lg:pt-0">
            <div className="relative z-0 ml-auto aspect-[1.65/1] w-full overflow-hidden rounded-[20px] shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:rounded-[24px] md:rounded-[26px] lg:w-[96%] xl:w-full">
              {videoUrl ? (
                <iframe
                  src={videoUrl}
                  title="Urban Cruise - Bus Rental Services"
                  className="absolute inset-0 h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="lazy"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400 text-sm">
                  Video unavailable
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>

            <div className="relative z-30 mt-4 ml-auto flex w-full items-center gap-3 rounded-[18px] border border-gray-100 bg-white px-3 py-3.5 shadow-[0_12px_35px_rgba(0,0,0,0.10)] xs:gap-4 xs:px-4 xs:py-4 sm:absolute sm:bottom-[-48px] sm:right-0 sm:mt-0 sm:w-full sm:max-w-none sm:px-5 sm:py-5 lg:w-[96%] xl:w-full">
              <div className="flex shrink-0 items-center -space-x-2 xs:-space-x-2.5 sm:-space-x-2.5">
                {fleet.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-[2px] border-white bg-[#F5F6F7] shadow-sm xs:h-10 xs:w-10 sm:h-12 sm:w-12 sm:border-[3px] md:h-14 md:w-14"
                    title={label}
                  >
                    <Icon className="text-[14px] text-[#263238] xs:text-[16px] sm:text-xl md:text-[22px]" />
                  </div>
                ))}
              </div>
              <div className="min-w-0">
                <h3 className="text-[11px] font-extrabold leading-tight text-[#142238] xs:text-[12px] sm:text-sm md:text-base">
                  Wide Range of Vehicles
                </h3>
                <p className="mt-0.5 text-[8px] leading-4 text-[#4B5563] xs:text-[9px] sm:mt-1 sm:text-xs md:text-[13px]">
                  Cars, Tempo Travellers,
                  Mini Buses &amp; Luxury Buses
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-2 sm:h-10 lg:h-16 xl:h-20" />
      </div>
    </section>
  );
}