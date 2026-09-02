// components/vehicles/cars-suvs/delhi/ui/LookingForOtherVehicle.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const vehicle = [
  {
    name: "Tempo Traveller",
    size: "9 to 26 Seater",
    image: "/images/vehiclerentalserviceinindia/IndiaGate.webp",
  },
  {
    name: "Maharaja Tempo Traveller",
    size: "9 to 20 Seater",
    image: "/images/vehiclerentalserviceinindia/Gurugram.webp",
  },
  {
    name: "Urbania",
    size: "9 to 17 Seater",
    image: "/images/vehiclerentalserviceinindia/GatewayOfIndia.webp",
  },
  {
    name: "Mini Bus",
    size: "19 to 35 Seater",
    image: "/images/vehiclerentalserviceinindia/Pune.webp",
  },
  {
    name: "Luxury Bus",
    size: "36 to 55 Seater",
    image: "/images/vehiclerentalserviceinindia/Pune.webp",
  },
  {
    name: "Semi / Sleeper Bus",
    size: "32 to 42 Seater",
    image: "/images/vehiclerentalserviceinindia/Pune.webp",
  },
  {
    name: "Volvo Bus",
    size: "41 to 55 Seater",
    image: "/images/vehiclerentalserviceinindia/Pune.webp",
  },
  {
    name: "Bus With Washroom",
    size: "23 to 47 Seater",
    image: "/images/vehiclerentalserviceinindia/Pune.webp",
  },
  {
    name: "Luxury Van",
    size: "07 to 10 Seater",
    image: "/images/vehiclerentalserviceinindia/Pune.webp",
  },
  {
    name: "Luxury Car/Suv",
    size: "07 Seater",
    image: "/images/vehiclerentalserviceinindia/Pune.webp",
  },
];

const VEHICLES_PER_PAGE = 8;

export default function LookingForOtherVehicle() {
  const [visibleCount, setVisibleCount] = useState(VEHICLES_PER_PAGE);
  const hasMore = visibleCount < vehicle.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + VEHICLES_PER_PAGE, vehicle.length));
  };

  const visibleVehicles = vehicle.slice(0, visibleCount);

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* =========================================================
            HEADER — Same style as VehicleForEveryOccasion
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-9 grid w-full items-center gap-7 min-[375px]:mb-10 min-[375px]:gap-8 min-[430px]:mb-10 min-[430px]:gap-8 sm:mb-12 sm:gap-9 md:mb-14 md:gap-10 lg:mb-16 lg:grid-cols-[1fr_1fr] lg:gap-6 xl:mb-[72px] xl:gap-8 2xl:mb-20 2xl:gap-10"
        >
          <div className="w-full max-w-[720px] text-left">
            {/* EYEBROW */}
            <div className="mb-3 flex w-full items-center justify-start gap-2 min-[430px]:mb-3.5 min-[430px]:gap-2.5 sm:mb-4 md:gap-3 lg:gap-3.5 xl:gap-4">
              <span className="block h-px w-5 shrink-0 bg-gray-400/60 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14" />
              <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.14em] text-[#03C35E] min-[375px]:text-[8.5px] min-[430px]:text-[9px] min-[430px]:tracking-[0.16em] sm:text-[9.5px] sm:tracking-[0.18em] md:text-[10px] md:tracking-[0.2em] lg:text-[11px] xl:text-xs">
                Looking for other Vehicle?
              </span>
              <span className="block h-px w-5 shrink-0 bg-gray-400/60 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14" />
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-[24px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#142236] min-[375px]:text-[25px] min-[430px]:text-[27px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px]">
              MEET OUR <span className="text-[#188A31]">AWESOME FLEET</span>
            </h2>

            {/* SUB HEADING */}
            <p className="mt-3 font-serif text-[19px] italic leading-tight text-[#03C35E] min-[375px]:text-[20px] min-[430px]:text-[21px] sm:text-[22px] md:text-[25px] lg:text-[27px] xl:text-[30px] 2xl:text-[32px]">
              Widest &amp; Finest Range of Vehicles
            </p>

            {/* DESCRIPTION */}
            <div className="mt-4 max-w-[620px] space-y-3 text-[10px] leading-[1.7] text-[#303944] min-[375px]:text-[10.5px] min-[430px]:text-[11px] sm:mt-5 sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
              <p>
                in Delhi, Noida, Gurugram &amp; Ghaziabad!
              </p>
            </div>
          </div>

          {/* Empty right column for grid alignment (like VehicleForEveryOccasion) */}
          <div className="relative hidden w-full items-center justify-center lg:flex lg:justify-end" />
        </motion.div>

        {/* =========================================================
            VEHICLE CARDS — 1 on mobile, 3 on tablet, 4 on desktop
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid w-full grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 md:grid-cols-3 md:gap-x-6 md:gap-y-10 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-10 xl:gap-x-9 xl:gap-y-12 2xl:gap-x-10 2xl:gap-y-14"
        >
          {visibleVehicles.map((vehicleItem, index) => (
            <motion.div
              key={vehicleItem.name}
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
                transition: {
                  duration: 0.2,
                },
              }}
              className="group relative mx-auto aspect-[4/3] w-full max-w-[330px] min-[375px]:max-w-[345px] min-[425px]:max-w-[360px] sm:max-w-[340px] md:max-w-full lg:max-w-[390px] xl:max-w-[420px] 2xl:max-w-[440px]"
            >
              {/* =================================================
                  BACK CARD
              ================================================== */}
              <div className="absolute left-0 top-0 right-4 bottom-4 flex items-start rounded-2xl bg-white px-3 py-3 shadow-sm min-[375px]:right-5 min-[375px]:bottom-5 min-[375px]:px-4 min-[375px]:py-3.5 min-[425px]:right-5 min-[425px]:bottom-5 min-[425px]:px-4 sm:right-5 sm:bottom-5 sm:px-4 sm:py-3 md:right-4 md:bottom-4 md:px-3 md:py-2.5 lg:right-6 lg:bottom-6 xl:right-7 xl:bottom-7 xl:px-5 xl:py-4">
                <p className="min-w-0 truncate text-left text-[9px] font-bold text-[#142236] min-[375px]:text-[9.5px] min-[425px]:text-[10px] sm:text-[10.5px] md:text-[9px] lg:text-[11px] xl:text-xs 2xl:text-sm">
                  {vehicleItem.name}, <br /> {vehicleItem.size}
                </p>
              </div>

              {/* =================================================
                  FRONT IMAGE CARD
              ================================================== */}
              <div className="absolute left-6 top-12 right-0 bottom-0 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 group-hover:shadow-xl min-[375px]:left-7 min-[375px]:top-13 min-[425px]:left-8 min-[425px]:top-14 sm:left-6 sm:top-12 md:left-5 md:top-11 lg:left-7 lg:top-13 xl:left-13 xl:top-14">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src={vehicleItem.image}
                    alt={`${vehicleItem.name}, ${vehicleItem.size}`}
                    fill
                    sizes="
                      (max-width: 639px) 85vw,
                      (max-width: 767px) 42vw,
                      (max-width: 1023px) 28vw,
                      (max-width: 1279px) 20vw,
                      (max-width: 1535px) 18vw,
                      16vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                    priority={index < 2}
                  />
                  {/* Light Black Overlay */}
                  <div className="absolute inset-0 bg-black/15 transition-all duration-300 group-hover:bg-black/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* =========================================================
            BOTTOM CTA — Load More / View All
        ========================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
          className="mt-10 flex justify-center min-[375px]:mt-11 min-[425px]:mt-12 sm:mt-13 md:mt-14 lg:mt-16 xl:mt-18 2xl:mt-20"
        >
          {hasMore ? (
            <motion.button
              onClick={loadMore}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex items-center justify-center gap-1.5 rounded-full border border-[#03C35E]/20 bg-white px-4 py-2 text-[10px] font-semibold text-[#142236] transition-all duration-300 hover:border-[#03C35E] hover:bg-[#03C35E]/5 hover:shadow-lg min-[375px]:gap-2 min-[375px]:px-5 min-[375px]:py-2 min-[425px]:px-6 min-[425px]:py-2.5 min-[425px]:text-xs sm:px-6 sm:py-2.5 sm:text-sm md:px-8 md:py-3"
            >
              <span>Load More Vehicles</span>

              <svg
                className="h-3 w-3 shrink-0 text-[#03C35E] min-[375px]:h-3.5 min-[375px]:w-3.5 sm:h-4 sm:w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 13l-7 7-7-7m14-4l-7 7-7-7"
                />
              </svg>
            </motion.button>
          ) : (
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex items-center justify-center gap-1.5 rounded-full border border-[#03C35E]/20 bg-white px-4 py-2 text-[10px] font-semibold text-[#142236] transition-all duration-300 hover:border-[#03C35E] hover:bg-[#03C35E]/5 hover:shadow-lg min-[375px]:gap-2 min-[375px]:px-5 min-[375px]:py-2 min-[425px]:px-6 min-[425px]:py-2.5 min-[425px]:text-xs sm:px-6 sm:py-2.5 sm:text-sm md:px-8 md:py-3"
            >
              <span>View All Locations</span>

              <svg
                className="h-3 w-3 shrink-0 text-[#03C35E] min-[375px]:h-3.5 min-[375px]:w-3.5 sm:h-4 sm:w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          )}
        </motion.div>

        {/* =========================================================
            COUNTER — Show how many are visible
        ========================================================== */}
        {vehicle.length > VEHICLES_PER_PAGE && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-center text-xs text-gray-400"
          >
            Showing {Math.min(visibleCount, vehicle.length)} of {vehicle.length} vehicles
          </motion.div>
        )}
      </div>
    </section>
  );
}
