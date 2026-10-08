/* eslint-disable react/no-unescaped-entities */
// ============================================================
// Gurugram — Vehicles For Every Group Size
// Fully defensive against missing / partially-populated CMS data.
// ============================================================
"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  FaSnowflake,
  FaMapMarkerAlt,
  FaSuitcase,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";
import { MdSettings, MdLuggage } from "react-icons/md";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import type {
  VehicleGroupSizeContent,
  VehicleForEveryGroupSizeProps,
  VehicleGroupSizeItem,
} from "@/app/components/VehicleForEveryGroupSizeSelector";

const GREEN = "#03C35E";
const ORANGE = "#F7941E";

// ============================================================
// FALLBACK DATA
// ============================================================
const FALLBACK_VEHICLES: VehicleGroupSizeItem[] = [
  {
    type: "Sedan",
    name: "Maruti Suzuki Dzire",
    tagline: "Perfect Sedan for City & Outstation",
    price: "1999",
    description:
      "Experience comfortable and reliable travel with Urban Cruise's Maruti Suzuki Dzire. Perfect for city travel, airport transfers, family trips, corporate travel, and outstation journeys with excellent comfort and luggage space.",
    mainImage: "/images/vehicleforeverygroupsize/7.jpeg",
    gallery: [
      "/images/vehicleforeverygroupsize/8.jpeg",
      "/images/vehicleforeverygroupsize/9.jpeg",
      "/images/vehicleforeverygroupsize/10.jpeg",
      "/images/vehicleforeverygroupsize/8.jpeg",
      "/images/vehicleforeverygroupsize/9.jpeg",
    ],
    features: [
      { label: "4 Seats", color: ORANGE },
      { label: "AC", color: "#2F80ED" },
      { label: "GPS", color: "#F26B5B" },
      { label: "Manual", color: GREEN },
      { label: "Luggage", color: "#1E293B" },
    ],
  },
  {
    type: "SUV",
    name: "Toyota Innova Crysta",
    tagline: "Premium SUV for Family & Outstation",
    price: "2999",
    description:
      "Travel in comfort and style with the Toyota Innova Crysta. Perfect for family holidays, corporate travel, airport transfers, weddings, and long-distance journeys with spacious interiors and premium comfort.",
    mainImage: "/images/vehicleforeverygroupsize/7.jpeg",
    gallery: [
      "/images/vehicleforeverygroupsize/8.jpeg",
      "/images/vehicleforeverygroupsize/9.jpeg",
      "/images/vehicleforeverygroupsize/10.jpeg",
      "/images/vehicleforeverygroupsize/8.jpeg",
      "/images/vehicleforeverygroupsize/9.jpeg",
    ],
    features: [
      { label: "7 Seats", color: ORANGE },
      { label: "AC", color: "#2F80ED" },
      { label: "GPS", color: "#F26B5B" },
      { label: "Automatic", color: GREEN },
      { label: "Luggage", color: "#1E293B" },
    ],
  },
  {
    type: "Tempo Traveller",
    name: "12 Seater Tempo Traveller",
    tagline: "Spacious Group Travel with Premium Comfort",
    price: "4999",
    description:
      "Experience premium group travel with Urban Cruise's 12 Seater Tempo Traveller. Ideal for families, friends, corporate teams, pilgrimage tours, weddings, and outstation trips with spacious seating and ample luggage capacity.",
    mainImage: "/images/vehicleforeverygroupsize/7.jpeg",
    gallery: [
      "/images/vehicleforeverygroupsize/8.jpeg",
      "/images/vehicleforeverygroupsize/9.jpeg",
      "/images/vehicleforeverygroupsize/10.jpeg",
      "/images/vehicleforeverygroupsize/8.jpeg",
      "/images/vehicleforeverygroupsize/9.jpeg",
    ],
    features: [
      { label: "12 Seats", color: ORANGE },
      { label: "AC", color: "#2F80ED" },
      { label: "GPS", color: "#F26B5B" },
      { label: "Manual", color: GREEN },
      { label: "Luggage", color: "#1E293B" },
    ],
  },
  {
    type: "Luxury",
    name: "Luxury Urbania",
    tagline: "Luxury Group Travel with VIP Comfort",
    price: "6999",
    description:
      "Travel in luxury with Urban Cruise's premium Urbania. Designed for VIP guests, corporate teams, family tours, weddings, and long-distance journeys with luxurious interiors, comfortable seats, AC, luggage space, and premium amenities.",
    mainImage: "/images/vehicleforeverygroupsize/7.jpeg",
    gallery: [
      "/images/vehicleforeverygroupsize/8.jpeg",
      "/images/vehicleforeverygroupsize/9.jpeg",
      "/images/vehicleforeverygroupsize/10.jpeg",
      "/images/vehicleforeverygroupsize/8.jpeg",
      "/images/vehicleforeverygroupsize/9.jpeg",
    ],
    features: [
      { label: "16 Seats", color: ORANGE },
      { label: "AC", color: "#2F80ED" },
      { label: "GPS", color: "#F26B5B" },
      { label: "Automatic", color: GREEN },
      { label: "Luggage", color: "#1E293B" },
    ],
  },
];

// ============================================================
// NORMALIZE CMS VEHICLE
// Defensive against missing / partial fields.
// ============================================================
function normalizeVehicle(raw: any, index: number): VehicleGroupSizeItem {
  const fallback = FALLBACK_VEHICLES[index % FALLBACK_VEHICLES.length];

  // ✅ Accept `gallery` OR legacy `images` field
  const gallery = Array.isArray(raw?.gallery) && raw.gallery.length > 0
    ? raw.gallery
    : Array.isArray(raw?.images) && raw.images.length > 0
      ? raw.images
      : fallback.gallery;

  // ✅ Build features: prefer CMS features, else derive from `seats` field
  let features: Array<{ label: string; color?: string }> = [];
  if (Array.isArray(raw?.features) && raw.features.length > 0) {
    features = raw.features
      .filter((f: any) => f && (f.label || f.name))
      .map((f: any) => ({
        label: String(f.label || f.name || "").trim(),
        color: f.color || "#03C35E",
      }))
      .filter((f: any) => f.label.length > 0);
  }

  // If CMS gave us a `seats` chip but no features, synthesize the
  // standard 5-chip set from static defaults and inject the seats label
  if (features.length === 0) {
    features = fallback.features.map((f) => ({ ...f }));
    if (raw?.seats && raw.seats.trim()) {
      features[0] = { ...features[0], label: raw.seats.trim() };
    }
  }

  // Resolve main image — accept `mainImage` OR first gallery image
  const mainImage =
    raw?.mainImage ||
    (Array.isArray(gallery) && gallery[0]?.url) ||
    (typeof gallery?.[0] === "string" ? gallery[0] : null) ||
    fallback.mainImage;

  // Normalize gallery entries into `{ url, publicId }` shape if they're objects
  const normalizedGallery = Array.isArray(gallery)
    ? gallery
        .map((g: any) =>
          typeof g === "string"
            ? { url: g, publicId: "" }
            : { url: g?.url || "", publicId: g?.publicId || "" }
        )
        .filter((g: any) => g.url)
    : [];

  return {
    type: raw?.type ?? fallback.type,
    name: raw?.name?.trim() || fallback.name,
    tagline: raw?.tagline?.trim() || fallback.tagline,
    price: raw?.price != null ? String(raw.price) : fallback.price,
    description: raw?.description?.trim() || fallback.description,
    mainImage,
    gallery: normalizedGallery.length > 0 ? normalizedGallery.map((g: any) => g.url) : fallback.gallery,
    features,
  };
}

// ============================================================
// CURVED LOGO SHAPE
// ============================================================
type CurvedShapeLogoProps = {
  width?: number;
  height?: number;
  color?: string;
  logoSrc?: string;
  logoWidth?: number;
  logoHeight?: number;
  className?: string;
};

function CurvedShapeLogo({
  width = 140,
  height = 60,
  color = "#ffffff",
  logoSrc = "/images/logo.webp",
  logoWidth = 80,
  logoHeight = 42,
  className = "",
}: CurvedShapeLogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        style={{ filter: "drop-shadow(-2px 4px 12px rgba(0,0,0,0.15))" }}
      >
        <path
          d={`
            M ${width} 0
            L ${width} ${height}
            L ${width * 0.22} ${height}
            C ${width * 0.05} ${height * 0.75}, 
              ${width * 0.18} ${height * 0.35}, 
              0 0
            Z
          `}
          fill={color}
        />
      </svg>
      {logoSrc && (
        <div className="absolute inset-0 z-10 flex items-center justify-end pr-3 sm:pr-2.5">
          <Image
            src={logoSrc}
            alt="Urban Cruise"
            width={logoWidth}
            height={logoHeight}
            className="h-auto w-[65px] object-contain sm:w-[75px]"
            priority
          />
        </div>
      )}
    </div>
  );
}

// ============================================================
// GALLERY (defensive against empty arrays)
// ============================================================
function CurvedGallery({ images }: { images: string[] }) {
  const safeImages =
    Array.isArray(images) && images.length > 0
      ? images
      : ["/images/vehicleforeverygroupsize/7.jpeg"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (safeImages.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % safeImages.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [safeImages.length]);

  const getDisplayImages = () => {
    const total = safeImages.length;
    return [
      safeImages[(currentIndex - 1 + total) % total],
      safeImages[currentIndex],
      safeImages[(currentIndex + 1) % total],
    ];
  };

  const displayImages = getDisplayImages();

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % safeImages.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
  };

  return (
    <div
      className="relative w-full px-3 pt-5 pb-0 sm:px-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex h-[65px] w-full items-end justify-center sm:h-[85px] md:h-[105px]">
        <div
          className="absolute left-[1%] top-[-8%] z-10 h-[95px] w-[125px] overflow-hidden border-[4px] border-white rounded-2xl sm:h-[95px] sm:w-[125px] md:h-[95px] md:w-[125px]"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)" }}
        >
          <Image
            src={displayImages[0]}
            alt="Previous vehicle gallery image in Gurugram"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div
          className="absolute left-1/2 top-[-8%] z-20 h-[95px] w-[126px] -translate-x-1/2 overflow-hidden border-[4px] rounded-2xl border-white sm:h-[95px] sm:w-[150px] md:h-[95px] md:w-[126px]"
          onClick={nextSlide}
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 90%)" }}
        >
          <Image
            src={displayImages[1]}
            alt="Current vehicle gallery image in Gurugram"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div
          className="absolute right-[1%] top-[-8%] z-10 h-[95px] w-[125px] overflow-hidden border-[4px] rounded-2xl border-white sm:h-[95px] sm:w-[125px] md:h-[95px] md:w-[125px]"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 90%)" }}
        >
          <Image
            src={displayImages[2]}
            alt="Next vehicle gallery image in Gurugram"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {safeImages.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className={`absolute left-[-8px] top-10 z-30 -translate-y-1/2 rounded-full bg-[#F7941E] p-1 text-white transition-all duration-300 hover:bg-[#E8840A] hover:scale-110 hover:shadow-lg sm:left-[-4px] sm:p-1.5 md:left-0 md:p-1 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              aria-label="Previous image"
            >
              <IoIosArrowBack className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>

            <button
              onClick={nextSlide}
              className={`absolute right-[-8px] top-10 z-30 -translate-y-1/2 rounded-full bg-[#F7941E] p-1 text-white transition-all duration-300 hover:bg-[#E8840A] hover:scale-110 hover:shadow-lg sm:right-[-4px] sm:p-1.5 md:right-0 md:p-1 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              aria-label="Next image"
            >
              <IoIosArrowForward className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ============================================================
// FEATURE ICON MAPPER
// ============================================================
function getFeatureIcon(label: string) {
  const l = (label || "").toLowerCase();
  if (l.includes("seat") || l.includes("passenger")) return <FaUser />;
  if (l.includes("ac") || l.includes("air") || l.includes("cool"))
    return <FaSnowflake />;
  if (l.includes("gps") || l.includes("location") || l.includes("map"))
    return <FaMapMarkerAlt />;
  if (l.includes("luggage") || l.includes("bag")) return <MdLuggage />;
  if (l.includes("manual") || l.includes("auto")) return <MdSettings />;
  return <FaSuitcase />;
}

// ============================================================
// VEHICLE CARD
// ============================================================
function VehicleCard({
  vehicle,
  index,
}: {
  vehicle: VehicleGroupSizeItem;
  index: number;
}) {
  // Defensive: guarantee arrays exist
  const features = Array.isArray(vehicle.features) ? vehicle.features : [];
  const gallery = Array.isArray(vehicle.gallery) ? vehicle.gallery : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        y: -12,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative w-full overflow-hidden rounded-[22px] p-1.5 border border-[#E8E8E8] bg-white shadow-[0_8px_35px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-3xl bg-gray-100">
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={vehicle.mainImage || "/images/vehicleforeverygroupsize/7.jpeg"}
            alt={vehicle.name}
            fill
            className="object-cover"
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1535px) 50vw, 33vw"
            priority={index < 2}
          />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 z-20 h-[12%] bg-gradient-to-t from-white via-white/70 to-transparent" />

        <motion.div
          className="absolute right-0 top-0 z-30 h-[45px] sm:h-[50px] w-[120px]"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <CurvedShapeLogo
            width={120}
            height={50}
            color="#ffffff"
            logoSrc="/images/logo.webp"
            logoWidth={80}
            logoHeight={42}
            className="h-full w-full"
          />
        </motion.div>
      </div>

      {gallery.length > 0 && (
        <div className="absolute top-[165px] sm:top-[165px] md:top-[182px] xl:top-[210px] 2xl:top-[220px] left-0 right-0 z-20">
          <CurvedGallery images={gallery} />
        </div>
      )}

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto] sm:items-center px-2.5 pt-[75px] sm:px-2.5 sm:pt-[75px] md:px-2.5 md:pt-[90px] xl:px-2.5 xl:pt-[95px] 2xl:px-2.5 2xl:pt-[80px]">
        <div className="min-w-0">
          <h3 className="truncate text-[20px] font-extrabold leading-tight tracking-[-0.04em] text-[#142236] min-[375px]:text-[21px] sm:text-[22px] md:text-[24px]">
            {vehicle.name}
          </h3>
          <div className="mt-2.5 flex items-center gap-2">
            <span className="h-px w-4 shrink-0 bg-gray-400" />
            <p className="truncate text-[10px] font-medium text-[#263449] sm:text-[11px] md:text-xs">
              {vehicle.tagline}
            </p>
            <span className="h-px w-4 shrink-0 bg-gray-400" />
          </div>
        </div>

        <div className="text-left sm:text-right">
          <div className="text-[10px] font-medium text-[#1D2939] sm:text-[11px] md:text-xs">
            Starting from
          </div>
          <div className="mt-2.5 flex items-baseline gap-1 sm:justify-end">
            <span className="text-[24px] font-black leading-none text-[#078B5A] sm:text-[28px] md:text-[32px]">
              ₹{vehicle.price}
            </span>
            <span className="text-[10px] font-bold text-[#1D2939] sm:text-xs">
              /day
            </span>
          </div>
        </div>
      </div>

      {features.length > 0 && (
        <div className="mx-4 mt-3 grid grid-cols-5 overflow-hidden rounded-[17px] border border-[#E8E8E8] bg-white shadow-[0_5px_20px_rgba(0,0,0,0.06)] sm:mx-5 sm:mt-4">
          {features.map((feature, featureIndex) => {
            const color = feature.color || GREEN;
            return (
              <motion.div
                key={`${feature.label}-${featureIndex}`}
                whileHover={{
                  y: -4,
                  backgroundColor: `${color}15`,
                  transition: { duration: 0.2 },
                }}
                className={`flex min-w-0 flex-col items-center justify-center gap-1 px-1 py-2.5 sm:gap-0.5 sm:py-1.5 ${
                  featureIndex !== features.length - 1
                    ? "border-r border-[#E5E5E5]"
                    : ""
                }`}
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5"
                  style={{ backgroundColor: `${color}18`, color }}
                >
                  <span className="text-[14px] sm:text-[12px]">
                    {getFeatureIcon(feature.label)}
                  </span>
                </div>
                <span className="min-w-0 max-w-full truncate whitespace-nowrap text-center text-[7px] font-semibold text-[#111827] min-[375px]:text-[8px] sm:text-[9px] md:text-[9px]">
                  {feature.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      )}

      {vehicle.description && (
        <div className="px-4 pt-3 sm:px-5 sm:pt-4">
          <p
            className="text-justify text-[10px] font-medium leading-[1.6] text-[#344054] min-[375px]:text-[10.5px] sm:text-[11px] md:text-xs lg:text-[13px] overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
            }}
          >
            {vehicle.description}
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 px-4 pb-4 pt-4 sm:gap-4 sm:px-5 sm:pb-5 sm:pt-5">
        <motion.button
          whileHover={{
            scale: 1.03,
            backgroundColor: "#F3F4F6",
            borderColor: "#9CA3AF",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          }}
          whileTap={{ scale: 0.97 }}
          type="button"
          className="flex min-h-[36px] items-center justify-center gap-2 rounded-[13px] border border-[#078B5A] bg-white px-3 text-[11px] font-bold text-[#078B5A] shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition-all duration-200 sm:min-h-[40px] sm:text-xs"
        >
          <span>View Details</span>
          <span className="text-[16px] leading-none transition-transform duration-300 group-hover:translate-x-1 sm:text-[18px]">
            <IoIosArrowForward />
          </span>
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.03,
            backgroundColor: "#E8840A",
            boxShadow: "0 10px 30px rgba(247,148,30,0.4)",
          }}
          whileTap={{ scale: 0.97 }}
          type="button"
          className="flex min-h-[36px] items-center justify-center gap-2 rounded-[13px] bg-[#F7941E] px-3 text-[11px] font-bold text-white shadow-[0_7px_20px_rgba(247,148,30,0.28)] transition-all duration-200 sm:min-h-[40px] sm:text-xs"
        >
          <FaCalendarAlt className="text-[13px] transition-transform duration-300 group-hover:rotate-12 sm:text-[15px]" />
          <span>Book Now</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

// ============================================================
// MAIN
// ============================================================
export default function GurugramVehicleForEveryGroupSize({
  content,
}: VehicleForEveryGroupSizeProps) {
  const cms: VehicleGroupSizeContent = content || {};

  const eyebrow = cms.eyebrow?.trim() || "Perfect For Every Group";
  const title = cms.title?.trim() || "VEHICLES FOR";
  const titleHighlight = cms.titleHighlight?.trim() || " EVERY GROUP SIZE ";
  const subtitle = cms.subtitle?.trim() || "The Right Vehicle For Every Group Size";
  const description =
    cms.description?.trim() ||
    "Whether you're traveling solo, with family, or in a large group, Urban Cruise has the perfect vehicle to accommodate your party size with comfort and style.";

  // Defensive: normalize each vehicle entry; fall back to static defaults
  const vehicles: VehicleGroupSizeItem[] =
    Array.isArray(cms.vehicles) && cms.vehicles.length > 0
      ? cms.vehicles.map((v, i) => normalizeVehicle(v, i))
      : FALLBACK_VEHICLES;

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 min-[430px]:py-11 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
      <div className="pointer-events-none absolute left-[8%] top-[20%] h-[300px] w-[300px] rounded-full bg-[#03C35E]/5 blur-3xl sm:h-[400px] sm:w-[400px] lg:h-[550px] lg:w-[550px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[5%] h-[250px] w-[250px] rounded-full bg-[#03C35E]/5 blur-3xl sm:h-[350px] sm:w-[350px] lg:h-[500px] lg:w-[500px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 min-[430px]:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
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

        <div className="grid w-full grid-cols-1 gap-6 min-[430px]:gap-7 sm:grid-cols-2 sm:gap-6 md:gap-7 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-9 2xl:grid-cols-3 2xl:gap-10">
          {vehicles.map((vehicle, index) => (
            <VehicleCard
              key={`${vehicle.name}-${index}`}
              vehicle={vehicle}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}