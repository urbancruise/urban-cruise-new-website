// components/vehicles/cars-suvs/delhi/ui/CompressionWithVehicle.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
  FaUsers,
  FaHeadset,
} from "react-icons/fa6";

import type { IconType } from "react-icons";

/* =========================================================
   TYPES
========================================================= */

type ComparisonRow = {
  label: string;
  icon: IconType;
  left: string;
  right: string;
};

type ComparisonCardProps = {
  side: "left" | "right";
  title: string;
  price: string;
  badge: string;
  image: string;
  background: string;
  footerText: React.ReactNode;
};

/* =========================================================
   COMPARISON DATA
========================================================= */

const comparisonRows: ComparisonRow[] = [
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
];

/* =========================================================
   TRUST DATA
========================================================= */

const trustItems = [
  {
    icon: FaUsers,
    title: "Spacious &",
    subtitle: "Comfortable",
  },
  {
    icon: FaShieldHalved,
    title: "Verified &",
    subtitle: "Safe Vehicles",
  },
  {
    icon: FaIndianRupeeSign,
    title: "Transparent",
    subtitle: "Pricing",
  },
  {
    icon: FaHeadset,
    title: "24/7 Customer",
    subtitle: "Support",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ErtigaVsSedan() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-14 lg:py-16 xl:py-20">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-28 -top-28 h-[330px] w-[330px] rounded-full bg-[#3B941D]/5" />

      <div className="pointer-events-none absolute -right-24 -top-10 h-[300px] w-[300px] rounded-full bg-[#3B941D]/5" />

      {/* TOP LEFT DOTS */}
      <DotPattern
        className="left-8 top-8"
        dotColor="#3B941D"
      />

      {/* TOP RIGHT DOTS */}
      <DotPattern
        className="right-8 top-8"
        dotColor="#52725C"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-8 text-center sm:mb-10 lg:mb-11"
        >

          {/* EYEBROW */}

          <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4 sm:gap-4">

            <span className="h-px w-7 bg-orange-400 sm:w-10 lg:w-12" />

            <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#378C1B] sm:text-xs lg:text-sm">
              Compare &amp; Choose
            </span>

            <span className="h-px w-7 bg-orange-400 sm:w-10 lg:w-12" />

          </div>


          {/* HEADING */}

          <h1 className="text-[32px] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#102235] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[56px]">

            Ertiga Car

            <span className="mx-2 inline-flex h-9 w-9 translate-y-[-2px] items-center justify-center rounded-full bg-[#3B941D] text-[12px] font-extrabold text-white sm:mx-3 sm:h-11 sm:w-11 sm:text-sm lg:h-12 lg:w-12">
              VS
            </span>

            Sedan cars

          </h1>


          {/* SUBTITLE */}

          <p className="mt-4 text-sm leading-relaxed text-[#5C6570] sm:text-base lg:text-lg">
            Choose the perfect car for your journey based on comfort,
            features and budget.
          </p>

        </motion.div>


        {/* =====================================================
            DESKTOP
        ====================================================== */}

        <div className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_280px_minmax(0,1fr)]">

          {/* LEFT */}

          <ComparisonCard
            side="left"
            title="Ertiga Car"
            price="16"
            badge="BEST FOR FAMILY TRIPS"
            image="/images/cars/ertiga.webp"
            background="/images/cars/ertiga-bg.webp"
            footerText={
              <>
                Perfect for long rides, families
                <br />
                &amp; group travel
              </>
            }
          />


          {/* CENTER */}

          <ComparisonCenter />


          {/* RIGHT */}

          <ComparisonCard
            side="right"
            title="Sedan cars"
            price="12"
            badge="BEST FOR CITY TRAVEL"
            image="/images/cars/dzire.webp"
            background="/images/cars/dzire-bg.webp"
            footerText={
              <>
                Perfect for city rides,
                <br />
                daily travel &amp; budget trips
              </>
            }
          />

        </div>


        {/* =====================================================
            MOBILE / TABLET
        ====================================================== */}

        <div className="block lg:hidden">

          <ComparisonCard
            side="left"
            title="Ertiga Car"
            price="16"
            badge="BEST FOR FAMILY TRIPS"
            image="/images/cars/ertiga.webp"
            background="/images/cars/ertiga-bg.webp"
            footerText={
              <>
                Perfect for long rides, families
                <br />
                &amp; group travel
              </>
            }
          />


          {/* MOBILE VS */}

          <div className="my-7 flex justify-center">

            <div className="relative flex h-[82px] w-[82px] items-center justify-center rounded-full border border-dashed border-[#80AF68] bg-white">

              <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#3B941D] text-xl font-extrabold text-white shadow-lg">
                VS
              </div>

              <span className="absolute -left-1 top-[30px] h-2 w-2 rounded-full bg-orange-500" />

              <span className="absolute -left-1 top-[44px] h-2 w-2 rounded-full bg-orange-500" />

              <span className="absolute -right-1 top-[27px] h-2 w-2 rounded-full bg-[#3B941D]" />

              <span className="absolute -right-1 top-[41px] h-2 w-2 rounded-full bg-[#3B941D]" />

            </div>

          </div>


          <ComparisonCard
            side="right"
            title="Sedan cars"
            price="12"
            badge="BEST FOR CITY TRAVEL"
            image="/images/cars/dzire.webp"
            background="/images/cars/dzire-bg.webp"
            footerText={
              <>
                Perfect for city rides,
                <br />
                daily travel &amp; budget trips
              </>
            }
          />

        </div>


        {/* =====================================================
            TRUST STRIP
        ====================================================== */}

        <TrustStrip />

      </div>
    </section>
  );
}

/* =========================================================
   COMPARISON CARD
========================================================= */

function ComparisonCard({
  side,
  title,
  price,
  badge,
  image,
  background,
  footerText,
}: ComparisonCardProps) {

  const isLeft = side === "left";

  const primary = isLeft
    ? "#3B941D"
    : "#FF7100";

  const light = isLeft
    ? "#EEF8E7"
    : "#FFF1E4";

  const footer = isLeft
    ? "#3BA800"
    : "#FF7100";


  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -35 : 35,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.65,
      }}
      whileHover={{
        y: -3,
      }}
      className="relative overflow-hidden rounded-[18px] border border-white bg-white shadow-[0_5px_22px_rgba(0,0,0,0.12)]"
    >

      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="relative h-[325px] overflow-hidden">

        {/* BACKGROUND IMAGE */}

        <Image
          src={background}
          alt=""
          fill
          sizes="(max-width:1024px) 100vw, 42vw"
          className="object-cover"
        />


        {/* BACKGROUND OVERLAY */}

        <div
          className="absolute inset-0"
          style={{
            background: isLeft
              ? "linear-gradient(180deg,rgba(235,248,222,.1),rgba(255,255,255,.1))"
              : "linear-gradient(180deg,rgba(255,238,215,.1),rgba(255,255,255,.1))",
          }}
        />


        {/* =================================================
            BADGE
        ================================================== */}

        <div
          className="absolute left-5 top-5 z-30 flex min-h-[62px] items-center gap-2 rounded-[13px] px-4 py-3 shadow-md"
          style={{
            backgroundColor: primary,
          }}
        >

          <FaStar
            size={24}
            color="white"
          />

          <span className="max-w-[125px] text-[11px] font-extrabold uppercase leading-[1.15] text-white">
            {badge}
          </span>

        </div>


        {/* =================================================
            BIRDS
        ================================================== */}

        <div className="absolute right-[18%] top-[17%] z-10 opacity-30">
          <Bird />
        </div>

        <div className="absolute right-[10%] top-[23%] z-10 scale-75 opacity-20">
          <Bird />
        </div>


        {/* =================================================
            CAR
        ================================================== */}

        <motion.div
          whileHover={{
            scale: 1.025,
          }}
          transition={{
            duration: 0.4,
          }}
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


      {/* =====================================================
          TITLE + PRICE
      ====================================================== */}

      <div className="relative z-30 bg-white px-5 pb-4 pt-0 text-center">

        {/* TITLE */}

        <div
          className="mx-auto -mt-1 flex min-h-[41px] max-w-[260px] items-center justify-center rounded-[15px] px-3"
          style={{
            backgroundColor: light,
          }}
        >

          <h2 className="text-[22px] font-extrabold tracking-[-0.03em] text-black">
            {title}
          </h2>

        </div>


        {/* PRICE */}

        <div
          className="mx-auto mt-2 flex h-[41px] w-fit min-w-[190px] items-center justify-center gap-1 rounded-full px-6"
          style={{
            backgroundColor: light,
          }}
        >

          <FaIndianRupeeSign
            size={20}
            style={{
              color: primary,
            }}
          />

          <span
            className="text-[20px] font-extrabold"
            style={{
              color: primary,
            }}
          >
            {price}
          </span>

          <span
            className="text-[14px] font-semibold"
            style={{
              color: primary,
            }}
          >
            per km
          </span>

        </div>

      </div>


      {/* =====================================================
          FEATURES
      ====================================================== */}

      <div className="relative z-30 bg-white">

        {comparisonRows.map((row, index) => {

          const Icon = row.icon;

          const value = isLeft
            ? row.left
            : row.right;

          return (
            <div
              key={row.label}
              className={`grid min-h-[59px] grid-cols-[38px_1fr] items-center gap-2 px-5 ${
                index % 2 === 0
                  ? "bg-white"
                  : "bg-[#FAFAFA]"
              }`}
            >

              {/* ICON */}

              <div className="flex items-center justify-center">

                <Icon
                  size={21}
                  style={{
                    color: primary,
                  }}
                />

              </div>


              {/* TEXT */}

              <div className="grid grid-cols-[40%_60%] items-center gap-2">

                <span className="text-[12px] font-semibold leading-tight text-[#142236]">
                  {row.label}
                </span>

                <span
                  className="text-right text-[12px] font-semibold leading-tight"
                  style={{
                    color: primary,
                  }}
                >
                  {value}
                </span>

              </div>

            </div>
          );
        })}


        {/* PRICE RANGE */}

        <div className="grid min-h-[59px] grid-cols-[38px_1fr] items-center gap-2 bg-[#FAFAFA] px-5">

          <div className="flex justify-center">

            <FaIndianRupeeSign
              size={20}
              style={{
                color: primary,
              }}
            />

          </div>

          <div className="grid grid-cols-[40%_60%] items-center gap-2">

            <span className="text-[12px] font-semibold text-[#142236]">
              Price Range
            </span>

            <span
              className="text-right text-[12px] font-semibold"
              style={{
                color: primary,
              }}
            >
              ₹ {price} per km
            </span>

          </div>

        </div>

      </div>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <div
        className="relative z-30 flex min-h-[72px] items-center justify-between gap-3 px-5 py-3"
        style={{
          backgroundColor: footer,
        }}
      >

        {/* FOOTER LEFT */}

        <div className="flex min-w-0 items-center gap-3">

          <FaShieldHalved
            size={36}
            color="white"
          />

          <p className="text-[13px] font-medium leading-[1.25] text-white">
            {footerText}
          </p>

        </div>


        {/* BOOK NOW */}

        <motion.button
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="shrink-0 rounded-full border-2 border-white bg-transparent px-6 py-2 text-[15px] font-extrabold text-white transition-all duration-300 hover:bg-white"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = primary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "white";
          }}
        >
          BOOK NOW
        </motion.button>

      </div>

    </motion.div>
  );
}

/* =========================================================
   CENTER VS + FEATURES
========================================================= */

function ComparisonCenter() {
  return (
    <div className="relative z-30">

      {/* =====================================================
          VS CIRCLE
      ====================================================== */}

      <div className="absolute left-1/2 top-[23px] z-30 flex h-[112px] w-[112px] -translate-x-1/2 items-center justify-center rounded-full border border-dashed border-[#9FC18C] bg-white">

        {/* INNER BORDER */}

        <div className="absolute inset-[13px] rounded-full border border-[#E1EBDD]" />

        {/* VS */}

        <div className="relative z-10 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#3B941D] text-[32px] font-extrabold text-white shadow-lg">
          VS
        </div>


        {/* ORANGE DOTS */}

        <span className="absolute -left-[4px] top-[48px] h-2 w-2 rounded-full bg-[#FF7100]" />

        <span className="absolute -left-[4px] top-[61px] h-2 w-2 rounded-full bg-[#FF7100]" />


        {/* GREEN DOTS */}

        <span className="absolute -right-[4px] top-[38px] h-2 w-2 rounded-full bg-[#3B941D]" />

        <span className="absolute -right-[4px] top-[54px] h-2 w-2 rounded-full bg-[#3B941D]" />

      </div>


      {/* =====================================================
          FEATURE LIST
      ====================================================== */}

      <div className="mt-[144px] bg-white">

        {comparisonRows.map((row) => {

          const Icon = row.icon;

          return (
            <div
              key={row.label}
              className="flex h-[67px] items-center border-b border-[#EEEEEE] px-6"
            >

              <Icon
                size={22}
                className="mr-5 shrink-0 text-[#3B941D]"
              />

              <span className="text-[14px] font-semibold text-[#142236]">
                {row.label}
              </span>

            </div>
          );
        })}


        {/* PRICE RANGE */}

        <div className="flex h-[67px] items-center px-6">

          <FaIndianRupeeSign
            size={22}
            className="mr-5 shrink-0 text-[#3B941D]"
          />

          <span className="text-[14px] font-semibold text-[#142236]">
            Price Range
          </span>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   TRUST STRIP
========================================================= */
function TrustStrip() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="relative mt-7 overflow-hidden rounded-[17px] border border-[#F1F1F1] bg-white px-4 py-5 shadow-[0_7px_30px_rgba(0,0,0,0.055)] sm:px-7 sm:py-6 lg:px-10"
    >

      {/* DOTS */}

      <DotPattern
        className="left-8 top-1/2 -translate-y-1/2 opacity-30"
        dotColor="#777777"
      />

      <DotPattern
        className="right-8 top-1/2 -translate-y-1/2 opacity-30"
        dotColor="#777777"
      />


      {/* ITEMS */}

      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4">

        {trustItems.map((item, index) => {

          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`flex items-center justify-center gap-3 px-3 py-3 sm:px-5 lg:px-6 ${
                index !== trustItems.length - 1
                  ? "lg:border-r lg:border-[#E5E5E5]"
                  : ""
              }`}
            >

              <Icon
                size={38}
                className="shrink-0 text-[#3B941D]"
              />

              <div>

                <p className="text-[13px] font-bold leading-[1.15] text-[#142236] sm:text-sm">
                  {item.title}
                </p>

                <p className="text-[13px] font-bold leading-[1.15] text-[#142236] sm:text-sm">
                  {item.subtitle}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </motion.div>
  );
}

/* =========================================================
   DOT PATTERN
========================================================= */
function DotPattern({
  className = "",
  dotColor = "#3B941D",
}: {
  className?: string;
  dotColor?: string;
}) {

  return (
    <div
      className={`pointer-events-none absolute z-0 grid grid-cols-7 gap-[7px] ${className}`}
    >

      {Array.from({
        length: 35,
      }).map((_, index) => (

        <span
          key={index}
          className="h-[3px] w-[3px] rounded-full"
          style={{
            backgroundColor: dotColor,
            opacity: 0.55,
          }}
        />

      ))}

    </div>
  );
}

/* =========================================================
   BIRD
========================================================= */
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