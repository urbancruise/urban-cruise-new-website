/* eslint-disable react/no-unescaped-entities */
// app/components/home/vehicleforeverygroupsize/DelhiVehicleForEveryGroupSize.tsx
"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  FaSnowflake,
  FaMapMarkerAlt,
  FaSuitcase,
  FaCalendarAlt,
  FaUser,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { MdSettings, MdLuggage } from "react-icons/md";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const GREEN = "#03C35E";
const ORANGE = "#F7941E";

const vehicles = [
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
      {
        label: "4 Seats",
        icon: <FaUser />,
        color: ORANGE,
      },
      {
        label: "AC",
        icon: <FaSnowflake />,
        color: "#2F80ED",
      },
      {
        label: "GPS",
        icon: <FaMapMarkerAlt />,
        color: "#F26B5B",
      },
      {
        label: "Manual",
        icon: <MdSettings />,
        color: GREEN,
      },
      {
        label: "Luggage",
        icon: <FaSuitcase />,
        color: "#1E293B",
      },
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
      {
        label: "7 Seats",
        icon: <FaUser />,
        color: ORANGE,
      },
      {
        label: "AC",
        icon: <FaSnowflake />,
        color: "#2F80ED",
      },
      {
        label: "GPS",
        icon: <FaMapMarkerAlt />,
        color: "#F26B5B",
      },
      {
        label: "Automatic",
        icon: <MdSettings />,
        color: GREEN,
      },
      {
        label: "Luggage",
        icon: <MdLuggage />,
        color: "#1E293B",
      },
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
      {
        label: "12 Seats",
        icon: <FaUser />,
        color: ORANGE,
      },
      {
        label: "AC",
        icon: <FaSnowflake />,
        color: "#2F80ED",
      },
      {
        label: "GPS",
        icon: <FaMapMarkerAlt />,
        color: "#F26B5B",
      },
      {
        label: "Manual",
        icon: <MdSettings />,
        color: GREEN,
      },
      {
        label: "Luggage",
        icon: <MdLuggage />,
        color: "#1E293B",
      },
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
      {
        label: "16 Seats",
        icon: <FaUser />,
        color: ORANGE,
      },
      {
        label: "AC",
        icon: <FaSnowflake />,
        color: "#2F80ED",
      },
      {
        label: "GPS",
        icon: <FaMapMarkerAlt />,
        color: "#F26B5B",
      },
      {
        label: "Automatic",
        icon: <MdSettings />,
        color: GREEN,
      },
      {
        label: "Luggage",
        icon: <MdLuggage />,
        color: "#1E293B",
      },
    ],
  },
];

// CURVED LOGO SHAPE
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
        style={{
          filter: "drop-shadow(-2px 4px 12px rgba(0,0,0,0.15))",
        }}
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

// GALLERY - AUTO-PLAY CAROUSEL WITH NAVIGATION
function CurvedGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length]);

  // Get 3 images for display (previous, current, next)
  const getDisplayImages = () => {
    const total = images.length;
    return [
      images[(currentIndex - 1 + total) % total], // previous
      images[currentIndex], // current
      images[(currentIndex + 1) % total], // next
    ];
  };

  const displayImages = getDisplayImages();

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    // Reset auto-play timer
    resetAutoPlay();
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    // Reset auto-play timer
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }
  };

  return (
    <div
      className="relative w-full px-3 pt-5 pb-0 sm:px-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex h-[65px] w-full items-end justify-center sm:h-[85px] md:h-[105px]">
        {/* Image 1 */}
        <div
          className="absolute left-[1%] top-[-8%] z-10 h-[95px] w-[125px] overflow-hidden border-[4px] border-white rounded-2xl sm:h-[95px] sm:w-[125px] md:h-[95px] md:w-[125px]"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)",
          }}
        >
          <Image
            src={displayImages[0]}
            alt="Gallery previous"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 2 */}
        <div
          className="absolute left-1/2 top-[-8%] z-20 h-[95px] w-[126px] -translate-x-1/2 overflow-hidden border-[4px] rounded-2xl border-white sm:h-[95px] sm:w-[150px] md:h-[95px] md:w-[126px]"
          onClick={nextSlide}
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 90%)",
          }}
        >
          <Image
            src={displayImages[1]}
            alt="Gallery current"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 3 */}
        <div
          className="absolute right-[1%] top-[-8%] z-10 h-[95px] w-[125px] overflow-hidden border-[4px] rounded-2xl border-white sm:h-[95px] sm:w-[125px] md:h-[95px] md:w-[125px]"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 90%)",
          }}
        >
          <Image
            src={displayImages[2]}
            alt="Gallery next"
            fill
            className="object-cover"
          />
        </div>

        {/* Navigation Arrows - Visible on hover with orange background */}
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
      </div>
    </div>
  );
}

// VEHICLE CARD
function VehicleCard({
  vehicle,
  index,
}: {
  vehicle: (typeof vehicles)[number];
  index: number;
}) {
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
      {/* MAIN IMAGE - INCREASED HEIGHT FURTHER */}
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-3xl bg-gray-100">
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={vehicle.mainImage}
            alt={vehicle.name}
            fill
            className="object-cover"
            sizes="
              (max-width: 639px) 100vw,
              (max-width: 1023px) 50vw,
              (max-width: 1535px) 50vw,
              33vw
            "
            priority={index < 2}
          />
        </motion.div>

        {/* FADE GRADIENT OVERLAY - from transparent to white/background */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-[12%] bg-gradient-to-t from-white via-white/70 to-transparent" />

        {/* CURVED LOGO SHAPE - TOP RIGHT */}
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

      {/* GALLERY OVERLAY ON MAIN IMAGE */}
      <div className="absolute top-[165px] sm:top-[165px] md:top-[182px] xl:top-[210px] 2xl:top-[220px] left-0 right-0 z-20">
        {vehicle.gallery && vehicle.gallery.length > 0 && (
          <CurvedGallery images={vehicle.gallery} />
        )}
      </div>

      {/* TITLE + PRICE */}
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

      {/* FEATURES */}
      <div className="mx-4 mt-3 grid grid-cols-5 overflow-hidden rounded-[17px] border border-[#E8E8E8] bg-white shadow-[0_5px_20px_rgba(0,0,0,0.06)] sm:mx-5 sm:mt-4">
        {vehicle.features.map((feature, featureIndex) => (
          <motion.div
            key={feature.label}
            whileHover={{
              y: -4,
              backgroundColor: `${feature.color}15`,
              transition: { duration: 0.2 },
            }}
            className={`flex min-w-0 flex-col items-center justify-center gap-1 px-1 py-2.5 sm:gap-0.5 sm:py-1.5
              ${
                featureIndex !== vehicle.features.length - 1
                  ? "border-r border-[#E5E5E5]"
                  : ""
              }
            `}
          >
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5"
              style={{
                backgroundColor: `${feature.color}18`,
                color: feature.color,
              }}
            >
              <span className="text-[14px] sm:text-[12px]">{feature.icon}</span>
            </div>

            <span className="min-w-0 max-w-full truncate whitespace-nowrap text-center text-[7px] font-semibold text-[#111827] min-[375px]:text-[8px] sm:text-[9px] md:text-[9px]">
              {feature.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* DESCRIPTION */}
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

      {/* BUTTONS */}
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

// MAIN COMPONENT
export default function DelhiVehicleForEveryGroupSize() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-10 min-[430px]:py-11 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
      {/* GREEN BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-[8%] top-[20%] h-[300px] w-[300px] rounded-full bg-[#03C35E]/5 blur-3xl sm:h-[400px] sm:w-[400px] lg:h-[550px] lg:w-[550px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[5%] h-[250px] w-[250px] rounded-full bg-[#03C35E]/5 blur-3xl sm:h-[350px] sm:w-[350px] lg:h-[500px] lg:w-[500px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 min-[430px]:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-9 grid w-full items-center gap-7 min-[375px]:mb-10 min-[375px]:gap-8 min-[430px]:mb-10 min-[430px]:gap-8 sm:mb-12 sm:gap-9 md:mb-14 md:gap-10 lg:mb-16 lg:grid-cols-[1fr_1fr] lg:gap-6 xl:mb-[72px] xl:gap-8 2xl:mb-20 2xl:gap-10"
        >
          {/* LEFT CONTENT */}
          <div className="w-full max-w-[720px] text-left">
            <div className="mb-3 flex w-full items-center justify-start gap-2 min-[430px]:mb-3.5 min-[430px]:gap-2.5 sm:mb-4 md:gap-3 lg:gap-3.5 xl:gap-4">
              <span className="block h-px w-5 shrink-0 bg-gray-400/60 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14" />

              <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.14em] text-[#03C35E] min-[375px]:text-[8.5px] min-[430px]:text-[9px] min-[430px]:tracking-[0.16em] sm:text-[9.5px] sm:tracking-[0.18em] md:text-[10px] md:tracking-[0.2em] lg:text-[11px] xl:text-xs">
                Perfect For Every Group
              </span>

              <span className="block h-px w-5 shrink-0 bg-gray-400/60 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14" />
            </div>

            <h2 className="text-[24px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#142236] min-[375px]:text-[25px] min-[430px]:text-[27px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px]">
              VEHICLES FOR <span className="text-[#188A31]"> EVERY GROUP SIZE </span>
            </h2>

            <p className="mt-3 font-serif text-[19px] italic leading-tight text-[#03C35E] min-[375px]:text-[20px] min-[430px]:text-[21px] sm:text-[22px] md:text-[25px] lg:text-[27px] xl:text-[30px] 2xl:text-[32px]">
              The Right Vehicle For Every Group Size
            </p>

            <div className="mt-4 max-w-[620px] space-y-3 text-[10px] leading-[1.7] text-[#303944] min-[375px]:text-[10.5px] min-[430px]:text-[11px] sm:mt-5 sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
              <p>
                Whether you're traveling solo, with family, or in a large group,
                Urban Cruise has the perfect vehicle to accommodate your party
                size with comfort and style.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT - Empty */}
          <div className="relative hidden w-full items-center justify-center lg:flex lg:justify-end" />
        </motion.div>

        {/* VEHICLE CATEGORIES / CARDS */}
        <div className="grid w-full grid-cols-1 gap-6 min-[430px]:gap-7 sm:grid-cols-2 sm:gap-6 md:gap-7 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-9 2xl:grid-cols-3 2xl:gap-10">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.name} vehicle={vehicle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}


