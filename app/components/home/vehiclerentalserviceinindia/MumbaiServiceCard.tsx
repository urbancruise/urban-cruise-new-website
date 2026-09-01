"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const serviceCities = [
  {
    name: "Delhi",
    state: "Delhi NCR",
    image: "/images/vehiclerentalserviceinindia/IndiaGate.webp",
  },
  {
    name: "Gurugram",
    state: "Haryana",
    image: "/images/vehiclerentalserviceinindia/Gurugram.webp",
  },
  {
    name: "Mumbai",
    state: "Maharashtra",
    image: "/images/vehiclerentalserviceinindia/GatewayOfIndia.webp",
  },
  {
    name: "Pune",
    state: "Maharashtra",
    image: "/images/vehiclerentalserviceinindia/Pune.webp",
  },
];

export default function MumbaiServiceCard() {
  return (
    <section
      className=" relative w-full overflow-hidden bg-white py-10 min-[375px]:py-11 min-[425px]:py-12 sm:py-14 md:py-16 lg:py-[70px] xl:py-[80px] 2xl:py-[90px] "
    >
      <div
        className=" relative z-10 mx-auto w-full max-w-[1440px] px-3 min-[375px]:px-4 min-[425px]:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 "
      >
        {/* =========================================================
            MAIN CONTENT
            MOBILE/TABLET = STACKED
            DESKTOP = TWO COLUMNS
        ========================================================== */}
        <div
          className=" grid w-full items-start gap-9 min-[375px]:gap-10 min-[425px]:gap-11 sm:gap-12 md:gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:gap-12 2xl:gap-16 "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=" w-full max-w-[720px] text-left lg:sticky lg:top-24 "
          >
            {/* EYEBROW */}
            <div
              className=" mb-3 flex w-full items-center justify-start gap-2 min-[375px]:mb-3.5 min-[375px]:gap-2.5 min-[425px]:mb-4 min-[425px]:gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-4 "
            >
              <span
                className=" block h-px w-5 shrink-0 bg-gray-400/60 min-[375px]:w-6 min-[425px]:w-7 sm:w-8 md:w-10 lg:w-9 xl:w-12 2xl:w-14 "
              />

              <span
                className=" whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.14em] text-[#03C35E] min-[375px]:text-[8.5px] min-[425px]:text-[9px] min-[425px]:tracking-[0.16em] sm:text-[9.5px] sm:tracking-[0.18em] md:text-[10px] lg:text-[10px] xl:text-xs "
              >
                Service Area
              </span>

              <span
                className=" block h-px w-5 shrink-0 bg-gray-400/60 min-[375px]:w-6 min-[425px]:w-7 sm:w-8 md:w-10 lg:w-9 xl:w-12 2xl:w-14 "
              />
            </div>

            {/* MAIN HEADING */}
            <h2
              className=" text-[24px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#142236] min-[375px]:text-[25px] min-[425px]:text-[27px] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[46px] 2xl:text-[54px] "
            >
              TOP PLACES{" "}
              <span className="text-[#188A31]">
                <br />
                WE SERVE.
              </span>
            </h2>

            {/* SUB HEADING */}
            <p
              className=" mt-3 max-w-[600px] font-serif text-[18px] italic leading-tight text-[#03C35E] min-[375px]:text-[19px] min-[425px]:text-[20px] sm:mt-4 sm:text-[22px] md:text-[24px] lg:mt-4 lg:text-[26px] xl:text-[30px] 2xl:text-[32px] "
            >
              Explore our top service locations
            </p>

            {/* DESCRIPTION */}
            <div
              className=" mt-4 max-w-[620px] space-y-3 text-[10px] leading-[1.7] text-[#303944] min-[375px]:text-[10.5px] min-[425px]:text-[11px] sm:mt-5 sm:text-[11.5px] md:text-xs lg:text-sm xl:text-base "
            >
              <p>
                We take pride in delivering comfortable rides, on-time
                service and memorable journeys for every customer.
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT CONTENT — CITY GRID
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className=" grid w-full grid-cols-1 gap-x-5 gap-y-9 min-[375px]:gap-x-6 min-[375px]:gap-y-10 min-[425px]:gap-x-7 min-[425px]:gap-y-11 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 md:gap-x-8 md:gap-y-12 lg:gap-x-7 lg:gap-y-10 xl:gap-x-9 xl:gap-y-12 2xl:gap-x-10 2xl:gap-y-14 "
          >
            {serviceCities.map((city, index) => (
              <motion.div
                key={city.name}
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
                className=" group relative mx-auto aspect-[4/3] w-full max-w-[330px] min-[375px]:max-w-[345px] min-[425px]:max-w-[360px] sm:max-w-[340px] md:max-w-[370px] lg:max-w-[390px] xl:max-w-[420px] 2xl:max-w-[440px] "
              >
                {/* =================================================
                    BACK CARD
                ================================================== */}
                <div
                  className=" absolute left-0 top-0 right-4 bottom-4 flex items-start rounded-2xl bg-white px-3 py-3 shadow-sm min-[375px]:right-5 min-[375px]:bottom-5 min-[375px]:px-4 min-[375px]:py-3.5 min-[425px]:right-5 min-[425px]:bottom-5 min-[425px]:px-4 sm:right-5 sm:bottom-5 sm:px-4 sm:py-3 md:right-6 md:bottom-6 md:px-4 lg:right-6 lg:bottom-6 xl:right-7 xl:bottom-7 xl:px-5 xl:py-4 "
                >
                  <p
                    className=" min-w-0 truncate text-left text-[9px] font-bold text-[#142236] min-[375px]:text-[9.5px] min-[425px]:text-[10px] sm:text-[10.5px] md:text-[11px] lg:text-[11px] xl:text-xs 2xl:text-sm "
                  >
                    {city.name}, {city.state}
                  </p>
                </div>

                {/* =================================================
                    FRONT IMAGE CARD
                ================================================== */}
                <div
                  className=" absolute left-6 top-7 right-0 bottom-0 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 group-hover:shadow-xl min-[375px]:left-7 min-[375px]:top-8 min-[425px]:left-8 min-[425px]:top-9 sm:left-6 sm:top-7 md:left-7 md:top-8 lg:left-7 lg:top-8 xl:left-8 xl:top-9 "
                >
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image
                      src={city.image}
                      alt={`${city.name}, ${city.state}`}
                      fill
                      sizes="
                        (max-width: 374px) 88vw,
                        (max-width: 424px) 86vw,
                        (max-width: 767px) 42vw,
                        (max-width: 1023px) 42vw,
                        (max-width: 1279px) 38vw,
                        (max-width: 1535px) 35vw,
                        30vw
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
        </div>

        {/* =========================================================
            BOTTOM CTA
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
          className=" mt-10 flex justify-center min-[375px]:mt-11 min-[425px]:mt-12 sm:mt-13 md:mt-14 lg:mt-16 xl:mt-18 2xl:mt-20 "
        >
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className=" flex items-center justify-center gap-1.5 rounded-full border border-[#03C35E]/20 bg-white px-4 py-2 text-[10px] font-semibold text-[#142236] transition-all duration-300 hover:border-[#03C35E] hover:bg-[#03C35E]/5 hover:shadow-lg min-[375px]:gap-2 min-[375px]:px-5 min-[375px]:py-2 min-[425px]:px-6 min-[425px]:py-2.5 min-[425px]:text-xs sm:px-6 sm:py-2.5 sm:text-sm md:px-8 md:py-3 "
          >
            <span>View All Locations</span>

            <svg
              className=" h-3 w-3 shrink-0 text-[#03C35E] min-[375px]:h-3.5 min-[375px]:w-3.5 sm:h-4 sm:w-4 "
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
        </motion.div>
      </div>
    </section>
  );
}

