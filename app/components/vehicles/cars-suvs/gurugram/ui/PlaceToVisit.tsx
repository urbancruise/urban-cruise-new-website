"use client";

import Image from "next/image";
import { motion, PanInfo } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaLandmark,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const GREEN = "#03C35E";
const ORANGE = "#F7941E";

const FALLBACK_DESTINATIONS = [
  {
    place: "darjeeling",
    heading: "Beautiful Darjeeling",
    subHeading: "Where mountains meet timeless charm",
    paragraph:
      "Discover the breathtaking beauty of Darjeeling, surrounded by majestic Himalayan peaks, lush tea gardens and charming colonial streets.",
    duration: "5-7 Days",
    bestTime: "March to May",
    bestFor: "Mountains, Nature, Photography",
    tourHighlights: [
      "Tiger Hill",
      "Batasia Loop",
      "Darjeeling Himalayan Railway",
      "Peace Pagoda",
      "Tea Gardens",
      "Himalayan Mountaineering Institute",
    ],
    images: [
      "/images/vehiclerentalserviceinindia/IndiaGate.webp",
      "/images/vehiclerentalserviceinindia/Gurugram.webp",
      "/images/vehiclerentalserviceinindia/Pune.webp",
    ],
    alt: "Darjeeling Destination",
  },
  {
    place: "rajasthan",
    heading: "Royal Rajasthan",
    subHeading: "Where history meets timeless beauty",
    paragraph:
      "Discover the royal charm of Rajasthan through magnificent forts, grand palaces, vibrant markets and unforgettable landscapes.",
    duration: "8-12 Days",
    bestTime: "October to March",
    bestFor: "Heritage, Culture, Photography",
    tourHighlights: [
      "Amer Fort",
      "City Palace Jaipur",
      "Hawa Mahal",
      "Mehrangarh Fort",
      "Lake Pichola",
      "Sonar Quila",
    ],
    images: [
      "/images/vehiclerentalserviceinindia/Gurugram.webp",
      "/images/vehiclerentalserviceinindia/Pune.webp",
      "/images/vehiclerentalserviceinindia/IndiaGate.webp",
    ],
    alt: "Rajasthan Destination",
  },
  {
    place: "jaipur",
    heading: "Royal Jaipur",
    subHeading: "Experience the royal heritage",
    paragraph:
      "Explore the magnificent forts, palaces and colourful streets of Jaipur.",
    duration: "5-7 Days",
    bestTime: "October to March",
    bestFor: "Heritage, Food, Photography",
    tourHighlights: [
      "Amer Fort",
      "City Palace",
      "Hawa Mahal",
      "Jantar Mantar",
      "Nahargarh Fort",
      "Jal Mahal",
    ],
    images: [
      "/images/vehiclerentalserviceinindia/Pune.webp",
      "/images/vehiclerentalserviceinindia/IndiaGate.webp",
      "/images/vehiclerentalserviceinindia/Gurugram.webp",
    ],
    alt: "Jaipur Destination",
  },
];

const FALLBACK_FILTERS = [
  { value: "all", label: "All Places" },
  { value: "darjeeling", label: "Darjeeling" },
  { value: "rajasthan", label: "Rajasthan" },
  { value: "jaipur", label: "Jaipur" },
];

interface Props {
  content?: any;
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function DestinationImage({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ scale: 1.025, transition: { duration: 0.3 } }}
      className={`absolute overflow-hidden rounded-[42px] border-[3px] border-white bg-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.10)] ${
        className ?? ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 639px) 90vw, (max-width: 1023px) 60vw, 40vw"
      />
      <div className="absolute inset-0 bg-black/20" />
    </motion.div>
  );
}

function DestinationCollage({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [img0 = "/images/vehiclerentalserviceinindia/IndiaGate.webp", img1 = img0, img2 = img0] = images;
  return (
    <div className="relative mx-auto h-[350px] w-full max-w-[560px] min-[375px]:h-[370px] min-[375px]:max-w-[580px] min-[430px]:h-[390px] min-[430px]:max-w-[600px] sm:h-[430px] sm:max-w-[620px] md:h-[470px] md:max-w-[650px] lg:h-[500px] lg:max-w-[620px] xl:h-[540px] xl:max-w-[650px] 2xl:h-[580px] 2xl:max-w-[700px]">
      <DestinationImage
        src={img0}
        alt={`${alt} - Main`}
        priority
        className="left-0 top-0 z-10 h-[280px] w-[64%] rounded-[30px] min-[375px]:h-[300px] min-[375px]:rounded-[32px] min-[430px]:h-[315px] min-[430px]:w-[63%] sm:h-[350px] sm:w-[64%] sm:rounded-[38px] md:h-[390px] md:w-[63%] lg:h-[420px] lg:w-[63%] lg:rounded-[42px] xl:h-[455px] 2xl:h-[490px]"
      />
      <DestinationImage
        src={img2}
        alt={`${alt} - Third`}
        className="bottom-0 left-[34%] z-20 h-[170px] w-[53%] rounded-[28px] min-[375px]:h-[185px] min-[375px]:left-[35%] min-[430px]:h-[195px] min-[430px]:w-[52%] sm:h-[220px] sm:w-[52%] sm:rounded-[34px] md:h-[245px] md:w-[51%] lg:h-[270px] lg:w-[50%] lg:rounded-[40px] xl:h-[290px] 2xl:h-[315px]"
      />
      <DestinationImage
        src={img1}
        alt={`${alt} - Second`}
        className="right-0 top-[45px] z-30 h-[170px] w-[40%] rounded-[28px] min-[375px]:top-[50px] min-[375px]:h-[180px] min-[430px]:top-[55px] min-[430px]:h-[190px] min-[430px]:w-[41%] sm:top-[60px] sm:h-[215px] sm:w-[41%] sm:rounded-[34px] md:top-[65px] md:h-[235px] lg:top-[70px] lg:h-[255px] lg:w-[40%] lg:rounded-[40px] xl:top-[75px] xl:h-[275px] 2xl:top-[80px] 2xl:h-[300px]"
      />
    </div>
  );
}

function DestinationInfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="flex min-h-[60px] w-full items-center gap-3 rounded-[10px] bg-[#F7F8F9] px-3 py-3 sm:min-h-[64px] sm:px-3.5 md:px-4"
    >
      <div className="flex shrink-0 items-center justify-center text-[#03C35E] text-[17px] sm:text-[18px] md:text-[19px]">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="mb-0.5 text-[8px] font-medium uppercase leading-none tracking-[0.04em] text-[#667085] min-[375px]:text-[8.5px] min-[430px]:text-[9px] sm:text-[9px] md:text-[9.5px]">
          {label}
        </p>
        <p className="text-[10px] font-semibold leading-[1.25] text-[#142236] min-[375px]:text-[10.5px] min-[430px]:text-[11px] sm:text-[11px] md:text-[11.5px] lg:text-[12px]">
          {value}
        </p>
      </div>
    </motion.div>
  );
}

function DestinationInfo({
  duration,
  bestTime,
  bestFor,
}: {
  duration: string;
  bestTime: string;
  bestFor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="mt-7 grid w-full grid-cols-1 gap-3 min-[430px]:gap-3.5 sm:grid-cols-3 sm:gap-3 md:gap-4"
    >
      <DestinationInfoCard icon={<FaClock />} label="Duration" value={duration} />
      <DestinationInfoCard icon={<FaMapMarkerAlt />} label="Best Time" value={bestTime} />
      <DestinationInfoCard icon={<FaUsers />} label="Best For" value={bestFor} />
    </motion.div>
  );
}

function TourHighlights({ highlights }: { highlights: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="mt-7 w-full sm:mt-8 md:mt-9"
    >
      <div className="mb-4 flex items-center gap-2 sm:mb-5 sm:gap-2.5">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#03C35E]/10 text-[#03C35E] sm:h-8 sm:w-8">
          <FaLandmark className="text-[12px] sm:text-[13px]" />
        </div>
        <h3 className="text-[13px] font-extrabold tracking-[-0.02em] text-[#142236] min-[375px]:text-[14px] min-[430px]:text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
          Tour Highlights
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-2.5 min-[430px]:grid-cols-2 min-[430px]:gap-y-3 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-3 md:gap-x-10">
        {highlights.map((highlight, index) => (
          <motion.div
            key={`${highlight}-${index}`}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 rounded-lg py-1 sm:gap-3"
          >
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#03C35E]/10 text-[#03C35E] sm:h-6 sm:w-6">
              <FaStar className="text-[8px] sm:text-[9px]" />
            </div>
            <span className="text-[10px] font-semibold leading-tight text-[#303944] min-[375px]:text-[10.5px] min-[430px]:text-[11px] sm:text-[11.5px] md:text-[12px] lg:text-[13px]">
              {highlight}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function CardContent({ destination }: { destination: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex h-full w-full max-w-[650px] flex-col"
    >
      <div className="mb-4 flex items-center gap-2 sm:mb-5 sm:gap-3">
        <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.14em] text-[#F7941E] min-[375px]:text-[8.5px] min-[430px]:text-[9px] min-[430px]:tracking-[0.16em] sm:text-[9.5px] sm:tracking-[0.18em] md:text-[10px] lg:text-[11px] xl:text-xs">
          We Recommend
        </span>
      </div>

      <h2 className="text-[14px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#142236] min-[375px]:text-[15px] min-[430px]:text-[16px] sm:text-[17px] md:text-[19px] lg:text-[22px] xl:text-[25px] 2xl:text-[28px]">
        {String(destination.heading || "")
          .split(" ")
          .map((word: string, index: number, arr: string[]) => (
            <span
              key={`${word}-${index}`}
              className={index === arr.length - 1 ? "text-[#188A31]" : ""}
            >
              {word}{" "}
            </span>
          ))}
      </h2>

      <p className="mt-3 font-serif text-[12px] italic leading-tight text-[#03C35E] min-[375px]:text-[13px] min-[430px]:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
        {destination.subHeading}
      </p>

      <div className="mt-4 max-w-[620px] space-y-3 text-[10px] leading-[1.7] text-[#303944] min-[375px]:text-[10.5px] min-[430px]:text-[11px] sm:mt-5 sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
        <p>{destination.paragraph}</p>
      </div>

      <DestinationInfo
        duration={destination.duration}
        bestTime={destination.bestTime}
        bestFor={destination.bestFor}
      />

      <TourHighlights highlights={destination.tourHighlights} />
    </motion.div>
  );
}

function TopHeader({ content }: { content?: any }) {
  const eyebrow = content?.eyebrow || "Discover Your Next Adventure";
  const title = content?.title || "EXPLORE.";
  const titleHighlight = content?.titleHighlight || "DREAM. DISCOVER.";
  const subtitle = content?.subtitle || "Unforgettable journeys await you";
  const description =
    content?.description ||
    "We take pride in delivering comfortable rides, on-time service and memorable journeys for every customer.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-9 grid w-full items-center gap-7 min-[375px]:mb-10 min-[375px]:gap-8 min-[430px]:mb-10 min-[430px]:gap-8 sm:mb-12 sm:gap-9 md:mb-14 md:gap-10 lg:mb-16 lg:grid-cols-[1fr_1fr] lg:gap-6 xl:mb-[72px] xl:gap-8 2xl:mb-20 2xl:gap-10"
    >
      <div className="w-full max-w-[720px] text-left">
        <div className="mb-3 flex w-full items-center justify-start gap-2 min-[430px]:mb-3.5 min-[430px]:gap-2.5 sm:mb-4 md:gap-3 lg:gap-3.5 xl:gap-4">
          <span className="block h-px w-5 shrink-0 bg-gray-400/60 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14" />
          <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.14em] text-[#03C35E] min-[375px]:text-[8.5px] min-[430px]:text-[9px] min-[430px]:tracking-[0.16em] sm:text-[9.5px] sm:tracking-[0.18em] md:text-[10px] lg:text-[11px] xl:text-xs">
            {eyebrow}
          </span>
          <span className="block h-px w-5 shrink-0 bg-gray-400/60 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14" />
        </div>

        <h2 className="text-[24px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#142236] min-[375px]:text-[25px] min-[430px]:text-[27px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px]">
          {title} <span className="text-[#188A31]">{titleHighlight}</span>
        </h2>

        <p className="mt-3 font-serif text-[19px] italic leading-tight text-[#03C35E] min-[375px]:text-[20px] min-[430px]:text-[21px] sm:text-[22px] md:text-[25px] lg:text-[27px] xl:text-[30px] 2xl:text-[32px]">
          {subtitle}
        </p>

        <div className="mt-4 max-w-[620px] space-y-3 text-[10px] leading-[1.7] text-[#303944] min-[375px]:text-[10.5px] min-[430px]:text-[11px] sm:mt-5 sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
          <p>{description}</p>
        </div>
      </div>
      <div className="relative hidden w-full items-center justify-center lg:flex lg:justify-end" />
    </motion.div>
  );
}

function PlaceFilter({
  filters,
  selectedPlace,
  onSelect,
  label,
}: {
  filters: { value: string; label: string }[];
  selectedPlace: string;
  onSelect: (place: string) => void;
  label?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-8 w-full sm:mb-10"
    >
      <div className="mb-4 flex items-center justify-center gap-2">
        <span className="h-px w-6 bg-gray-300 sm:w-10" />
        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#667085] sm:text-[10px] sm:tracking-[0.22em]">
          {label || "Explore Places"}
        </span>
        <span className="h-px w-6 bg-gray-300 sm:w-10" />
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-2 min-[375px]:gap-2.5 sm:gap-3">
        {filters.map((filter) => {
          const isActive = selectedPlace === filter.value;
          return (
            <motion.button
              key={filter.value}
              type="button"
              onClick={() => onSelect(filter.value)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className={`relative overflow-hidden rounded-full border px-4 py-2 text-[9px] font-bold transition-all duration-300 min-[375px]:px-4.5 min-[375px]:py-2.5 min-[375px]:text-[9.5px] min-[430px]:px-5 min-[430px]:text-[10px] sm:px-6 sm:py-2.5 sm:text-[11px] md:px-7 ${
                isActive
                  ? "border-[#03C35E] bg-[#03C35E] text-white shadow-[0_7px_22px_rgba(3,195,94,0.20)]"
                  : "border-gray-200 bg-white text-[#303944] shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover:border-[#03C35E] hover:text-[#03C35E]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activePlaceDot"
                  className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-white align-middle"
                />
              )}
              {filter.label}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

function SliderControls({
  currentIndex,
  total,
  onPrev,
  onNext,
  onSelect,
}: {
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="mt-8 flex w-full items-center justify-between sm:mt-10 lg:mt-8">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous destination"
        className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#03C35E] bg-white text-[#03C35E] shadow-[0_5px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:bg-[#03C35E] hover:text-white sm:h-11 sm:w-11 md:h-12 md:w-12"
      >
        <FaChevronLeft className="text-[12px] transition-transform duration-300 group-hover:-translate-x-0.5 sm:text-[13px]" />
      </button>

      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Go to destination ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-7 bg-[#03C35E]"
                : "w-2 bg-gray-300 hover:bg-[#03C35E]/50"
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        aria-label="Next destination"
        className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#F7941E] bg-white text-[#F7941E] shadow-[0_5px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:bg-[#F7941E] hover:text-white sm:h-11 sm:w-11 md:h-12 md:w-12"
      >
        <FaChevronRight className="text-[12px] transition-transform duration-300 group-hover:translate-x-0.5 sm:text-[13px]" />
      </button>
    </div>
  );
}

export default function PlaceToVisit({ content }: Props) {
  const destinations =
    Array.isArray(content?.places) && content.places.length > 0
      ? content.places.map((p: any) => ({
          place: p.tabSlug || slugify(p.tabLabel || ""),
          heading: p.placeName || "",
          subHeading: p.tagline || "",
          paragraph: p.description || "",
          duration: p.duration || "",
          bestTime: p.bestTime || "",
          bestFor: p.bestFor || "",
          tourHighlights: p.highlights || [],
          images: (p.images || [])
            .map((img: any) => (typeof img === "string" ? img : img.url))
            .filter(Boolean),
          alt: p.placeName || "Destination",
        }))
      : FALLBACK_DESTINATIONS;

  const placeFilters =
    Array.isArray(content?.places) && content.places.length > 0
      ? [
          { value: "all", label: content?.tabsLabel || "All Places" },
          ...Array.from(
            new Map(
              content.places
                .filter((p: any) => p.tabSlug && p.tabLabel)
                .map((p: any) => [
                  p.tabSlug,
                  { value: p.tabSlug, label: p.tabLabel },
                ])
            ).values()
          ),
        ]
      : FALLBACK_FILTERS;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState("all");
  const [isPaused, setIsPaused] = useState(false);

  const filteredDestinations =
    selectedPlace === "all"
      ? destinations
      : destinations.filter((d: any) => d.place === selectedPlace);

  const safeIndex =
    filteredDestinations.length === 0
      ? 0
      : currentIndex >= filteredDestinations.length
        ? 0
        : currentIndex;

  const destination = filteredDestinations[safeIndex];

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedPlace]);

  const nextSlide = () => {
    if (filteredDestinations.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % filteredDestinations.length);
  };
  const prevSlide = () => {
    if (filteredDestinations.length <= 1) return;
    setCurrentIndex(
      (prev) => (prev - 1 + filteredDestinations.length) % filteredDestinations.length
    );
  };
  const selectSlide = (index: number) => setCurrentIndex(index);
  const selectPlace = (place: string) => {
    setSelectedPlace(place);
    setCurrentIndex(0);
  };

  useEffect(() => {
    if (isPaused || filteredDestinations.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredDestinations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, filteredDestinations.length]);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) nextSlide();
    if (info.offset.x > swipeThreshold) prevSlide();
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-white py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="pointer-events-none absolute -left-[180px] top-[15%] h-[400px] w-[400px] rounded-full bg-[#03C35E]/[0.035] blur-3xl sm:h-[500px] sm:w-[500px]" />
      <div className="pointer-events-none absolute -right-[180px] bottom-[5%] h-[400px] w-[400px] rounded-full bg-[#03C35E]/[0.035] blur-3xl sm:h-[500px] sm:w-[500px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col px-5 min-[400px]:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <TopHeader content={content} />

        <div className="relative w-full">
          <PlaceFilter
            filters={placeFilters}
            selectedPlace={selectedPlace}
            onSelect={selectPlace}
            label={content?.tabsLabel}
          />

          {destination && (
            <motion.div
              key={`${destination.place}-${safeIndex}-${selectedPlace}`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex w-full cursor-grab flex-col items-center active:cursor-grabbing lg:flex-row lg:items-stretch"
            >
              <div className="flex w-full items-center justify-center lg:w-1/2 lg:items-stretch lg:justify-start">
                <DestinationCollage
                  images={destination.images}
                  alt={destination.alt}
                />
              </div>

              <div className="mt-8 flex w-full items-center lg:mt-0 lg:w-1/2 lg:items-stretch lg:justify-end lg:pl-8 xl:pl-12">
                <CardContent destination={destination} />
              </div>
            </motion.div>
          )}

          {filteredDestinations.length > 1 && (
            <SliderControls
              currentIndex={safeIndex}
              total={filteredDestinations.length}
              onPrev={prevSlide}
              onNext={nextSlide}
              onSelect={selectSlide}
            />
          )}
        </div>
      </div>
    </section>
  );
}