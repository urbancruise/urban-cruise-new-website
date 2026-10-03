// // components/vehicles/cars-suvs/delhi/ui/CompressionWithVehicle.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, PanInfo } from "framer-motion";

import {
  FaStar,
  FaChair,
  FaCarSide,
  FaPlug,
  FaSnowflake,
  FaCalendarCheck,
  FaMusic,
  FaIndianRupeeSign,
  FaShieldHalved,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

import type { IconType } from "react-icons";

// ============================================================
// TYPES
// ============================================================
type ComparisonRow = {
  label: string;
  icon: IconType;
  left: string;
  right: string;
};

type VehicleSide = {
  title: string;
  price: string;
  badge: string;
  image: string;
  background: string;
  footerText: React.ReactNode;
};

type VehiclePair = {
  left: VehicleSide;
  right: VehicleSide;
  rows: ComparisonRow[];
};

type ComparisonCardProps = {
  side: "left" | "right";
  vehicle: VehicleSide;
  rows: ComparisonRow[];
};

export interface CompressionWithVehicleProps {
  content?: any;
}

// ============================================================
// ICON MAP — CMS sends a string key, we map to a react-icon
// ============================================================
const ICON_MAP: Record<string, IconType> = {
  chair: FaChair,
  car: FaCarSide,
  plug: FaPlug,
  ac: FaSnowflake,
  calendar: FaCalendarCheck,
  music: FaMusic,
  rupee: FaIndianRupeeSign,
  shield: FaShieldHalved,
  star: FaStar,
};

function resolveIcon(name?: string): IconType {
  if (!name) return FaChair;
  return ICON_MAP[name.toLowerCase()] || FaChair;
}

// ============================================================
// FALLBACK DATA — used when CMS sends nothing
// ============================================================
const FALLBACK_PAIRS: VehiclePair[] = [
  {
    left: {
      title: "Ertiga Car",
      price: "16",
      badge: "BEST FOR FAMILY TRIPS",
      image: "/images/downloadapp/luxuarybus.png",
      background: "/images/compressionwithvehicle/bg.png",
      footerText: (
        <>
          Perfect for long rides, families
          <br />
          &amp; group travel
        </>
      ),
    },
    right: {
      title: "Sedan cars",
      price: "12",
      badge: "BEST FOR CITY TRAVEL",
      image: "/images/downloadapp/luxuarybus.png",
      background: "/images/compressionwithvehicle/bg.png",
      footerText: (
        <>
          Perfect for city rides,
          <br />
          daily travel &amp; budget trips
        </>
      ),
    },
    rows: [
      {
        label: "Seating Type",
        icon: FaChair,
        left: "6 - 7 seater Captain seats",
        right: "4 Seater Captain seats",
      },
      {
        label: "Interior Design",
        icon: FaCarSide,
        left: "Standard Modified",
        right: "Standard Modified Normal Modified",
      },
      {
        label: "Charging Point",
        icon: FaPlug,
        left: "Charging point",
        right: "Charging point",
      },
      {
        label: "AC",
        icon: FaSnowflake,
        left: "Standard AC",
        right: "Basic AC",
      },
      {
        label: "Booking Preference",
        icon: FaCalendarCheck,
        left: "Regular Travel, Long distance",
        right: "Regular Travel, short distance",
      },
      {
        label: "Music System",
        icon: FaMusic,
        left: "Standard Music system",
        right: "Basic Music System",
      },
    ],
  },
  {
    left: {
      title: "Innova Crysta",
      price: "22",
      badge: "BEST FOR LONG ROUTES",
      image: "/images/downloadapp/luxuarybus.png",
      background: "/images/compressionwithvehicle/bg.png",
      footerText: (
        <>
          Perfect for outstation trips,
          <br />
          comfort &amp; luggage space
        </>
      ),
    },
    right: {
      title: "Hatchback",
      price: "10",
      badge: "BEST FOR SHORT TRIPS",
      image: "/images/downloadapp/luxuarybus.png",
      background: "/images/compressionwithvehicle/bg.png",
      footerText: (
        <>
          Perfect for quick errands,
          <br />
          solo &amp; couple travel
        </>
      ),
    },
    rows: [
      {
        label: "Seating Type",
        icon: FaChair,
        left: "7 Seater Push Back",
        right: "4 Seater Standard",
      },
      {
        label: "Interior Design",
        icon: FaCarSide,
        left: "Premium Modified",
        right: "Basic Standard",
      },
      {
        label: "Charging Point",
        icon: FaPlug,
        left: "Multiple Charging points",
        right: "Single Charging point",
      },
      {
        label: "AC",
        icon: FaSnowflake,
        left: "Dual Zone AC",
        right: "Basic AC",
      },
      {
        label: "Booking Preference",
        icon: FaCalendarCheck,
        left: "Outstation, Group travel",
        right: "City rides, Quick trips",
      },
      {
        label: "Music System",
        icon: FaMusic,
        left: "Premium Music system",
        right: "Basic Music System",
      },
    ],
  },
  {
    left: {
      title: "Tempo Traveller",
      price: "28",
      badge: "BEST FOR GROUP TOURS",
      image: "/images/downloadapp/luxuarybus.png",
      background: "/images/compressionwithvehicle/bg.png",
      footerText: (
        <>
          Perfect for large groups,
          <br />
          events &amp; tours
        </>
      ),
    },
    right: {
      title: "SUV",
      price: "18",
      badge: "BEST FOR ADVENTURE",
      image: "/images/downloadapp/luxuarybus.png",
      background: "/images/compressionwithvehicle/bg.png",
      footerText: (
        <>
          Perfect for hill trips,
          <br />
          rough roads &amp; family travel
        </>
      ),
    },
    rows: [
      {
        label: "Seating Type",
        icon: FaChair,
        left: "12 - 17 seater",
        right: "6 - 7 seater Captain seats",
      },
      {
        label: "Interior Design",
        icon: FaCarSide,
        left: "Luxury Modified",
        right: "Standard Modified",
      },
      {
        label: "Charging Point",
        icon: FaPlug,
        left: "Multiple Charging points",
        right: "Charging point",
      },
      {
        label: "AC",
        icon: FaSnowflake,
        left: "Roof Mount AC",
        right: "Standard AC",
      },
      {
        label: "Booking Preference",
        icon: FaCalendarCheck,
        left: "Group Tours, Events",
        right: "Hill Stations, Long distance",
      },
      {
        label: "Music System",
        icon: FaMusic,
        left: "Premium Music system",
        right: "Standard Music system",
      },
    ],
  },
];

// ============================================================
// NORMALIZE CMS → VehiclePair[]
// ============================================================
function normalizePairs(cmsPairs: any[] | undefined): VehiclePair[] {
  if (!Array.isArray(cmsPairs) || cmsPairs.length === 0) {
    return FALLBACK_PAIRS;
  }

  return cmsPairs.map((pair: any, idx: number) => {
    const fallback = FALLBACK_PAIRS[idx % FALLBACK_PAIRS.length];

    const buildSide = (side: any, fb: VehicleSide): VehicleSide => {
      if (!side) return fb;
      return {
        title: side.name || fb.title,
        price: String(side.price ?? fb.price),
        badge: side.badge || fb.badge,
        image: side.image || fb.image,
        background: side.background || fb.background,
        footerText: side.footerText || fb.footerText,
      };
    };

    const rows =
      Array.isArray(pair?.cardA?.features) && pair.cardA.features.length > 0
        ? pair.cardA.features.map((feat: any, i: number) => ({
            label: feat.label || fallback.rows[i]?.label || "",
            icon: resolveIcon(feat.icon),
            left: feat.value || "",
            right:
              pair?.cardB?.features?.[i]?.value ||
              fallback.rows[i]?.right ||
              "",
          }))
        : fallback.rows;

    return {
      left: buildSide(pair.cardA, fallback.left),
      right: buildSide(pair.cardB, fallback.right),
      rows,
    };
  });
}

// ============================================================
// SLIDER CONTROLS
// ============================================================
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
    <div className="mt-8 flex w-full items-center justify-between sm:mt-10 lg:mt-10">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous comparison"
        className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#188A31] bg-white text-[#188A31] shadow-[0_5px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:bg-[#188A31] hover:text-white sm:h-11 sm:w-11 md:h-12 md:w-12"
      >
        <FaChevronLeft className="text-[12px] transition-transform duration-300 group-hover:-translate-x-0.5 sm:text-[13px]" />
      </button>

      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Go to comparison ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-7 bg-[#188A31]"
                : "w-2 bg-gray-300 hover:bg-[#188A31]/50"
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        aria-label="Next comparison"
        className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#F7941E] bg-white text-[#F7941E] shadow-[0_5px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:bg-[#F7941E] hover:text-white sm:h-11 sm:w-11 md:h-12 md:w-12"
      >
        <FaChevronRight className="text-[12px] transition-transform duration-300 group-hover:translate-x-0.5 sm:text-[13px]" />
      </button>
    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function CompressionWithVehicle({
  content,
}: CompressionWithVehicleProps) {
  const vehiclePairs = React.useMemo(
    () => normalizePairs(content?.comparisons),
    [content?.comparisons]
  );

  const eyebrow = content?.eyebrow || "Compare & Choose";
  const title = content?.title || "WHICH VEHICLE";
  const titleHighlight = content?.titleHighlight || "SUITS YOU BEST?";
  const subtitle =
    content?.subtitle || "Compare & Pick the Right One";
  const description =
    content?.description ||
    "Not sure which vehicle to book? Compare features, prices & comfort levels.";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = vehiclePairs.length;

  // Keep index in range if the list shrinks
  useEffect(() => {
    if (currentIndex >= total && total > 0) {
      setCurrentIndex(0);
    }
  }, [total, currentIndex]);

  const pair = vehiclePairs[currentIndex];

  const nextSlide = () => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const selectSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-slide
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) nextSlide();
    if (info.offset.x > swipeThreshold) prevSlide();
  };

  if (!pair) return null;

  return (
    <section
      className="relative w-full overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-9 grid w-full items-center gap-7 min-[375px]:mb-10 min-[375px]:gap-8 min-[430px]:mb-10 min-[430px]:gap-8 sm:mb-12 sm:gap-9 md:mb-14 md:gap-10 lg:mb-16 lg:grid-cols-[1fr_1fr] lg:gap-6 xl:mb-[72px] xl:gap-8 2xl:mb-20 2xl:gap-10"
        >
          <div className="w-full max-w-[720px] text-left">
            <div className="mb-3 flex w-full items-center justify-start gap-2 min-[430px]:mb-3.5 min-[430px]:gap-2.5 sm:mb-4 md:gap-3 lg:gap-3.5 xl:gap-4">
              <span className="block h-px w-5 shrink-0 bg-gray-400/60 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14" />
              <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.14em] text-[#03C35E] min-[375px]:text-[8.5px] min-[430px]:text-[9px] min-[430px]:tracking-[0.16em] sm:text-[9.5px] sm:tracking-[0.18em] md:text-[10px] md:tracking-[0.2em] lg:text-[11px] xl:text-xs">
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

        {/* SLIDER */}
        <motion.div
          key={currentIndex}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="cursor-grab active:cursor-grabbing"
        >
          {/* DESKTOP */}
          <div className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_280px_minmax(0,1fr)]">
            <ComparisonCard side="left" vehicle={pair.left} rows={pair.rows} />
            <ComparisonCenter rows={pair.rows} />
            <ComparisonCard side="right" vehicle={pair.right} rows={pair.rows} />
          </div>

          {/* MOBILE / TABLET */}
          <div className="block lg:hidden">
            <ComparisonCard side="left" vehicle={pair.left} rows={pair.rows} />

            <div className="my-7 flex justify-center">
              <div className="relative flex h-[82px] w-[82px] items-center justify-center rounded-full border border-dashed border-[#80AF68] bg-white">
                <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#188A31] text-xl font-extrabold text-white shadow-lg">
                  VS
                </div>
                <span className="absolute -left-1 top-[30px] h-2 w-2 rounded-full bg-[#F7941E]" />
                <span className="absolute -left-1 top-[44px] h-2 w-2 rounded-full bg-[#F7941E]" />
                <span className="absolute -right-1 top-[27px] h-2 w-2 rounded-full bg-[#188A31]" />
                <span className="absolute -right-1 top-[41px] h-2 w-2 rounded-full bg-[#188A31]" />
              </div>
            </div>

            <ComparisonCard side="right" vehicle={pair.right} rows={pair.rows} />
          </div>
        </motion.div>

        {total > 1 && (
          <SliderControls
            currentIndex={currentIndex}
            total={total}
            onPrev={prevSlide}
            onNext={nextSlide}
            onSelect={selectSlide}
          />
        )}
      </div>
    </section>
  );
}

// ============================================================
// COMPARISON CARD
// ============================================================
function ComparisonCard({ side, vehicle, rows }: ComparisonCardProps) {
  const isLeft = side === "left";
  const primary = isLeft ? "#188A31" : "#F7941E";
  const light = isLeft ? "#E6F9ED" : "#FEF3E4";
  const footer = isLeft ? "#188A31" : "#F7941E";
  const { title, price, badge, image, background, footerText } = vehicle;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -35 : 35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      whileHover={{ y: -3 }}
      className="relative overflow-hidden rounded-[18px] border border-white bg-white shadow-[0_5px_22px_rgba(0,0,0,0.12)]"
    >
      {/* IMAGE */}
      <div className="relative h-[325px] overflow-hidden">
        <Image
          src={background}
          alt=""
          fill
          sizes="(max-width:1024px) 100vw, 42vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: isLeft
              ? "linear-gradient(180deg, rgba(24, 138, 49, 0.65) 0%, rgba(24, 138, 49, 0.30) 50%, rgba(24, 138, 49, 0.05) 100%)"
              : "linear-gradient(180deg, rgba(247, 148, 30, 0.65) 0%, rgba(247, 148, 30, 0.30) 50%, rgba(247, 148, 30, 0.05) 100%)",
          }}
        />

        {badge && (
          <div
            className="absolute left-5 top-5 z-30 flex min-h-[62px] items-center gap-2 rounded-[13px] px-4 py-3 shadow-md"
            style={{ backgroundColor: primary }}
          >
            <FaStar size={24} color="white" />
            <span className="max-w-[125px] text-[11px] font-extrabold uppercase leading-[1.15] text-white">
              {badge}
            </span>
          </div>
        )}

        <div className="absolute right-[18%] top-[17%] z-10 opacity-30">
          <Bird />
        </div>
        <div className="absolute right-[10%] top-[23%] z-10 scale-75 opacity-20">
          <Bird />
        </div>

        <motion.div
          whileHover={{ scale: 1.025 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-[-8px] left-1/2 z-20 h-[245px] w-[94%] -translate-x-1/2"
        >
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width:1024px) 90vw, 45vw"
            className="object-contain object-bottom drop-shadow-[0_15px_10px_rgba(0,0,0,0.25)]"
          />
        </motion.div>
      </div>

      {/* TITLE + PRICE */}
      <div className="relative z-30 bg-white px-5 pb-4 pt-0 text-center">
        <div
          className="mx-auto -mt-1 flex min-h-[41px] max-w-[260px] items-center justify-center rounded-[15px] px-3"
          style={{ backgroundColor: light }}
        >
          <h2 className="text-[22px] font-extrabold tracking-[-0.03em] text-black">
            {title}
          </h2>
        </div>

        <div
          className="mx-auto mt-2 flex h-[41px] w-fit min-w-[190px] items-center justify-center gap-1 rounded-full px-6"
          style={{ backgroundColor: light }}
        >
          <FaIndianRupeeSign size={20} style={{ color: primary }} />
          <span className="text-[20px] font-extrabold" style={{ color: primary }}>
            {price}
          </span>
          <span className="text-[14px] font-semibold" style={{ color: primary }}>
            per km
          </span>
        </div>
      </div>

      {/* FEATURES */}
      <div className="relative z-30 bg-white">
        {rows.map((row, index) => {
          const Icon = row.icon;
          const value = isLeft ? row.left : row.right;
          return (
            <div
              key={row.label}
              className={`grid min-h-[59px] grid-cols-[38px_1fr] items-center gap-2 px-5 ${
                index % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
              }`}
            >
              <div className="flex items-center justify-center">
                <Icon size={21} style={{ color: primary }} />
              </div>
              <div className="grid grid-cols-[40%_60%] items-center gap-2">
                <span className="text-[12px] font-semibold leading-tight text-[#142236]">
                  {row.label}
                </span>
                <span
                  className="text-right text-[12px] font-semibold leading-tight"
                  style={{ color: primary }}
                >
                  {value}
                </span>
              </div>
            </div>
          );
        })}

        <div className="grid min-h-[59px] grid-cols-[38px_1fr] items-center gap-2 bg-[#FAFAFA] px-5">
          <div className="flex justify-center">
            <FaIndianRupeeSign size={20} style={{ color: primary }} />
          </div>
          <div className="grid grid-cols-[40%_60%] items-center gap-2">
            <span className="text-[12px] font-semibold text-[#142236]">
              Price Range
            </span>
            <span
              className="text-right text-[12px] font-semibold"
              style={{ color: primary }}
            >
              ₹ {price} per km
            </span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="relative z-30 flex min-h-[72px] items-center justify-between gap-3 px-5 py-3"
        style={{ backgroundColor: footer }}
      >
        <div className="flex min-w-0 items-center gap-3">
          <FaShieldHalved size={36} color="white" />
          <p className="text-[13px] font-medium leading-[1.25] text-white">
            {footerText}
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="shrink-0 rounded-full border-2 border-white bg-transparent px-6 py-2 text-[15px] font-extrabold text-white transition-all duration-300 hover:bg-white"
          style={{ color: "white" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.color = primary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "white";
          }}
        >
          BOOK NOW
        </motion.button>
      </div>
    </motion.div>
  );
}

// ============================================================
// CENTER VS + FEATURES
// ============================================================
function ComparisonCenter({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="relative z-30">
      <div className="absolute left-1/2 top-[23px] z-30 flex h-[112px] w-[112px] -translate-x-1/2 items-center justify-center rounded-full border border-dashed border-[#9FC18C] bg-white">
        <div className="absolute inset-[13px] rounded-full border border-[#E1EBDD]" />
        <div className="relative z-10 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#188A31] text-[32px] font-extrabold text-white shadow-lg">
          VS
        </div>
        <span className="absolute -left-[4px] top-[48px] h-2 w-2 rounded-full bg-[#F7941E]" />
        <span className="absolute -left-[4px] top-[61px] h-2 w-2 rounded-full bg-[#F7941E]" />
        <span className="absolute -right-[4px] top-[38px] h-2 w-2 rounded-full bg-[#188A31]" />
        <span className="absolute -right-[4px] top-[54px] h-2 w-2 rounded-full bg-[#188A31]" />
      </div>

      <div className="mt-[144px] bg-white">
        {rows.map((row) => {
          const Icon = row.icon;
          return (
            <div
              key={row.label}
              className="flex h-[67px] items-center border-b border-[#EEEEEE] px-6"
            >
              <Icon size={22} className="mr-5 shrink-0 text-[#188A31]" />
              <span className="text-[14px] font-semibold text-[#142236]">
                {row.label}
              </span>
            </div>
          );
        })}

        <div className="flex h-[67px] items-center px-6">
          <FaIndianRupeeSign size={22} className="mr-5 shrink-0 text-[#188A31]" />
          <span className="text-[14px] font-semibold text-[#142236]">
            Price Range
          </span>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// BIRD
// ============================================================
function Bird() {
  return (
    <svg
      width="27"
      height="14"
      viewBox="0 0 27 14"
      fill="none"
      className="text-[#6D9962]"
    >
      <path
        d="M1 9C4.2 8.8 5.6 5.2 8.5 5.2C11.2 5.2 12.4 8.3 13.5 9.3C14.7 8.3 16 5.2 18.7 5.2C21.5 5.2 23 8.8 26 9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
