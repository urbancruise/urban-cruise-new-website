// components/vehicles/cars-suvs/pune/ui/VehicleRentalServiceInIndia.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import IndiaMap from "./Map";
import ServiceCard from "./ServiceCard";

export default function VehicleRentalServiceInIndia() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16 xl:py-[70px]">
        {/* =====================================================
            FADE FROM BOTTOM (same as DelhiHero & DelhiAbout)
        ====================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-[1]
            h-[15%]
            bg-gradient-to-b
            from-transparent
            via-white/70
            to-white
            sm:h-[12%]
            md:h-[10%]
            lg:h-[8%]
          "
        />

        {/* HEADER - contained within max-width */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-3 min-[375px]:px-4 min-[430px]:px-5 sm:px-6 md:px-8 lg:px-9 xl:px-10 2xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-9 grid w-full items-center gap-7 min-[375px]:mb-10 min-[375px]:gap-8 min-[430px]:mb-10 min-[430px]:gap-8 sm:mb-12 sm:gap-9 md:mb-14 md:gap-10 lg:mb-16 lg:grid-cols-[1fr_1fr] lg:gap-6 xl:mb-[72px] xl:gap-8 2xl:mb-20 2xl:gap-10"
          >
            {/* LEFT CONTENT */}
            <div className="w-full max-w-[720px] text-left">
              {/* EYEBROW */}
              <div className="mb-3 flex w-full items-center justify-start gap-2 min-[430px]:mb-3.5 min-[430px]:gap-2.5 sm:mb-4 md:gap-3 lg:gap-3.5 xl:gap-4">
                <span className="block h-px w-5 shrink-0 bg-gray-400/60 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14" />
                <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.14em] text-[#03C35E] min-[375px]:text-[8.5px] min-[430px]:text-[9px] min-[430px]:tracking-[0.16em] sm:text-[9.5px] sm:tracking-[0.18em] md:text-[10px] lg:text-[11px] xl:text-xs">
                  Our Network
                </span>
                <span className="block h-px w-5 shrink-0 bg-gray-400/60 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14" />
              </div>

              {/* MAIN HEADING */}
              <h2 className="text-[24px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#142236] min-[375px]:text-[25px] min-[430px]:text-[27px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px]">
                INDIA{" "}
                <span className="text-[#188A31]">
                  <br /> COVERAGE MAP.
                </span>
              </h2>

              {/* SUB HEADING */}
              <p className="mt-3 font-serif text-[19px] italic leading-tight text-[#03C35E] min-[375px]:text-[20px] min-[430px]:text-[21px] sm:text-[22px] md:text-[25px] lg:text-[27px] xl:text-[30px] 2xl:text-[32px]">
                Explore our presence across India
              </p>

              {/* DESCRIPTION */}
              <div className="mt-4 max-w-[620px] space-y-3 text-[10px] leading-[1.7] text-[#303944] min-[375px]:text-[10.5px] min-[430px]:text-[11px] sm:mt-5 sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
                <p>
                  We take pride in delivering comfortable rides, on-time
                  service and memorable journeys for every customer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MAP SECTION - FULL WIDTH */}
        <div className="relative z-10 w-full">
          <div className="w-full">
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65 }}
                viewport={{ once: true }}
                className="w-full"
              >
                {/* MAP CONTAINER - FULL WIDTH WITH NO MAX-WIDTH */}
                <div className="w-full">
                  <div className="h-[300px] w-full sm:h-[340px] md:h-[380px] lg:h-[420px] xl:h-[450px] 2xl:h-[800px]">
                    <IndiaMap />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <ServiceCard />
    </>
  );
}
