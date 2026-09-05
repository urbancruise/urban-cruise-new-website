// components/vehicles/luxury-cars-suvs-vans/delhi/ui/PricesCharges.tsx

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaBus,
  FaTag,
  FaUsers,
  FaCalendarAlt,
  FaCheckCircle,
  FaUserTie,
  FaStar,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

/* =========================================================
   COLORS
========================================================= */

const GREEN = "#188A31";
const LIGHT_GREEN = "#03C35E";
const ORANGE = "#F7941E";
const DARK = "#142236";

/* =========================================================
   VEHICLE DATA
========================================================= */

const vehicles = [
  {
    id: 1,
    seater: "9 Seater",
    model: "Maharaja Tempo Traveller",
    type: "Maharaja Tempo Traveller",
    price: "25",
    seating: "1 * 1",
    image:
      "/images/downloadapp/forceurbania.png",
  },
  {
    id: 2,
    seater: "12 Seater",
    model: "Maharaja Tempo Traveller",
    type: "Maharaja Tempo Traveller",
    price: "28",
    seating: "1 * 1",
    image:
      "/images/downloadapp/forceurbania.png",
  },
  {
    id: 3,
    seater: "14 Seater",
    model: "Maharaja Tempo Traveller",
    type: "Maharaja Tempo Traveller",
    price: "30",
    seating: "1 * 1",
    image:
      "/images/downloadapp/forceurbania.png",
  },
  {
    id: 4,
    seater: "20 Seater",
    model: "Maharaja Tempo Traveller",
    type: "Maharaja Tempo Traveller",
    price: "33",
    seating: "1 * 1",
    image:
      "/images/downloadapp/forceurbania.png",
  },
];

/* =========================================================
   BOOK NOW BUTTON
========================================================= */

function BookNowButton() {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="
        group
        inline-flex
        h-[40px]
        min-w-[126px]
        items-center
        justify-between
        gap-2
        rounded-full
        bg-[#188A31]
        pl-5
        pr-1.5
        text-sm
        font-bold
        text-white
        shadow-sm
        transition-all
        duration-300
        hover:bg-[#116d25]
        hover:shadow-md
        sm:h-[42px]
        sm:min-w-[132px]
        sm:text-[13px]
        md:h-[44px]
        md:min-w-[138px]
      "
    >
      <span>Book Now</span>

      <span
        className="
          flex
          h-[31px]
          w-[31px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-white
          text-[#188A31]
          transition-transform
          duration-300
          group-hover:translate-x-0.5
          sm:h-[33px]
          sm:w-[33px]
        "
      >
        <FaArrowRight className="text-sm" />
      </span>
    </motion.button>
  );
}

/* =========================================================
   DESKTOP / TABLET PRICING ROW
========================================================= */

function PricingRow({
  vehicle,
  index,
}: {
  vehicle: (typeof vehicles)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      viewport={{
        once: true,
      }}
      className="
        hidden
        min-h-[92px]
        grid-cols-[1.35fr_0.95fr_0.95fr_0.95fr]
        items-center
        border-b
        border-[#e5eadf]
        bg-white
        transition-colors
        duration-300
        last:border-b-0
        hover:bg-[#fbfdf8]
        sm:grid
      "
    >
      {/* =====================================================
          VEHICLE
      ====================================================== */}

      <div className="flex h-full items-center gap-4 border-r border-[#e5eadf] px-4 sm:px-5 md:px-6">
        <div
          className="
            relative
            flex
            h-[66px]
            w-[66px]
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border-2
            border-[#d8efb9]
            bg-[#f7fceb]
            sm:h-[70px]
            sm:w-[70px]
            md:h-[74px]
            md:w-[74px]
          "
        >
          <Image
            src={vehicle.image}
            alt={vehicle.seater}
            fill
            sizes="80px"
            className="object-contain p-1"
          />
        </div>

        <div className="min-w-0">
          <h3
            className="
              text-[15px]
              font-extrabold
              leading-tight
              text-[#171d25]
              sm:text-[16px]
              md:text-[17px]
            "
          >
            {vehicle.seater}
          </h3>

          {/* <p className="mt-1 text-[12px] font-medium leading-tight text-[#24282e] sm:text-[13px]">
            {vehicle.model}
          </p> */}

          <p className="mt-0.5 text-[11px] leading-tight text-[#24282e] sm:text-[12px]">
            {vehicle.type}
          </p>
        </div>
      </div>

      {/* =====================================================
          PRICE - Updated to use #188A31
      ====================================================== */}

      <div className="flex h-full items-center border-r border-[#e5eadf] px-4 sm:px-5 md:px-6">
        <div className="flex items-baseline">
          <span
            className="
              text-[28px]
              font-extrabold
              leading-none
              text-[#188A31]
              sm:text-[30px]
              md:text-[32px]
            "
          >
            ₹{vehicle.price}
          </span>

          <span
            className="
              ml-1
              text-[13px]
              font-semibold
              text-[#188A31]
              sm:text-sm
            "
          >
            /KM
          </span>
        </div>
      </div>

      {/* =====================================================
          SEATING
      ====================================================== */}

      <div className="flex h-full items-center border-r border-[#e5eadf] px-4 sm:px-5 md:px-6">
        <div className="flex items-center gap-3">
          <FaUsers
            className="
              text-[24px]
              text-[#188A31]
              sm:text-[27px]
              md:text-[29px]
            "
          />

          <div>
            <p
              className="
                text-[17px]
                font-extrabold
                leading-none
                text-[#24272b]
                sm:text-[18px]
              "
            >
              {vehicle.seating}
            </p>

            <p className="mt-1 text-[11px] text-[#24272b] sm:text-xs">
              Seating
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOOK
      ====================================================== */}

      <div className="flex h-full items-center justify-center px-3 sm:px-4 md:px-5">
        <BookNowButton />
      </div>
    </motion.div>
  );
}

/* =========================================================
   MOBILE PRICING CARD
========================================================= */

function MobilePricingCard({
  vehicle,
  index,
}: {
  vehicle: (typeof vehicles)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.07,
      }}
      viewport={{
        once: true,
      }}
      className="
        overflow-hidden
        rounded-2xl
        border
        border-[#e1e9d8]
        bg-white
        shadow-sm
      "
    >
      {/* TOP */}

      <div className="flex items-center gap-3 border-b border-[#edf1e9] p-3.5">
        <div
          className="
            relative
            h-[64px]
            w-[64px]
            shrink-0
            overflow-hidden
            rounded-full
            border-2
            border-[#d8efb9]
            bg-[#f7fceb]
          "
        >
          <Image
            src={vehicle.image}
            alt={vehicle.seater}
            fill
            sizes="70px"
            className="object-contain p-1"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-[16px] font-extrabold text-[#171d25]">
            {vehicle.seater}
          </h3>

          {/* <p className="mt-0.5 text-xs font-medium text-[#24282e]">
            {vehicle.model}
          </p> */}

          <p className="text-[11px] text-[#24282e]">{vehicle.type}</p>
        </div>

        <div className="text-right">
          <p className="text-[25px] font-extrabold leading-none text-[#188A31]">
            ₹{vehicle.price}
          </p>
          <span className="text-[11px] font-semibold text-[#188A31]">
            /KM
          </span>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="flex items-center justify-between gap-3 p-3.5">
        <div className="flex items-center gap-2.5">
          <FaUsers className="text-[23px] text-[#188A31]" />

          <div>
            <p className="text-[15px] font-extrabold leading-none text-[#24272b]">
              {vehicle.seating}
            </p>

            <p className="mt-1 text-[10px] text-[#555]">Seating</p>
          </div>
        </div>

        <BookNowButton />
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PricesCharges() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-8
        sm:py-10
        md:py-12
        lg:py-14
        xl:py-16
        2xl:py-20
      "
    >
      {/* GREEN BACKGROUND GLOW - MATCHING VEHICLEFORVERYGROUPSIZE */}
      <div className="pointer-events-none absolute left-[8%] top-[20%] h-[300px] w-[300px] rounded-full bg-[#03C35E]/5 blur-3xl sm:h-[400px] sm:w-[400px] lg:h-[550px] lg:w-[550px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[5%] h-[250px] w-[250px] rounded-full bg-[#03C35E]/5 blur-3xl sm:h-[350px] sm:w-[350px] lg:h-[500px] lg:w-[500px]" />

      {/* =====================================================
          MAIN CONTAINER - MATCHING VEHICLEFORVERYGROUPSIZE
      ====================================================== */}

      <div
        className="
          relative z-10 mx-auto w-full max-w-[1440px] px-4 min-[430px]:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-0
        "
      >
        {/* ===================================================
            HEADER - UPDATED WITH OURTRUSTEDPARTNER STYLE
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            grid
            min-h-[330px]
            grid-cols-1
            items-center
            overflow-hidden
            px-5
            pb-4
            pt-7
            sm:min-h-[350px]
            sm:px-8
            md:min-h-[365px]
            md:px-10
            lg:min-h-[390px]
            lg:grid-cols-[1.05fr_0.95fr]
            lg:px-12
            xl:min-h-[410px]
            xl:px-16
          "
        >
          {/* BACKGROUND IMAGE */}
          <div
            className="
              absolute
              inset-0
              z-0
            "
          >
            <Image
              src="/images/ourtrustedpartner/1.png"
              alt="MAHARAJA TEMPO TRAVELLER Background"
              fill
              sizes="100vw"
              className="
                object-contain
                object-right
                lg:object-right
              "
              priority
            />
          </div>

          {/* -----------------------------------------------
              LEFT HEADER CONTENT - OurTrustedPartner Style
          ------------------------------------------------ */}

          <div
            className="
              relative
              z-10
              mx-auto
              flex
              w-full
              max-w-[650px]
              flex-col
              items-start
              text-left
              lg:mx-0
              lg:items-start
              lg:pr-4
            "
          >
            {/* EYEBROW - Updated heading */}

            <div
              className="
                mb-2.5
                flex
                w-full
                items-center
                justify-start
                gap-1.5

                min-[375px]:mb-3
                min-[375px]:gap-2

                min-[430px]:mb-3.5
                min-[430px]:gap-2.5

                sm:mb-4
                sm:gap-3

                md:gap-3.5

                lg:gap-4
              "
            >
              <span
                className="
                  block
                  h-px
                  w-4
                  shrink-0
                  bg-gray-400/60

                  min-[375px]:w-5
                  min-[430px]:w-6

                  sm:w-7
                  md:w-9
                  lg:w-11
                  xl:w-12
                  2xl:w-14
                "
              />

              <span
                className="
                  whitespace-nowrap
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.10em]
                  text-[#03C35E]

                  min-[375px]:text-[8px]
                  min-[375px]:tracking-[0.12em]

                  min-[430px]:text-[8.5px]
                  min-[430px]:tracking-[0.14em]

                  sm:text-[9.5px]
                  sm:tracking-[0.16em]

                  md:text-[10px]

                  lg:text-[11px]

                  xl:text-xs
                "
              >
                PRICES &amp; CHARGES
              </span>

              <span
                className="
                  block
                  h-px
                  w-4
                  shrink-0
                  bg-gray-400/60

                  min-[375px]:w-5
                  min-[430px]:w-6

                  sm:w-7
                  md:w-9
                  lg:w-11
                  xl:w-12
                  2xl:w-14
                "
              />
            </div>

            {/* MAIN HEADING - Updated */}

            <h1
              className="
                max-w-full
                text-[23px]
                font-extrabold
                leading-[1.08]
                tracking-[-0.035em]
                text-[#142236]

                min-[375px]:text-[25px]

                min-[430px]:text-[27px]

                sm:text-[29px]

                md:text-[34px]

                lg:text-[40px]

                xl:text-[48px]

                2xl:text-[56px]
              "
            >
              Prices &amp; <span className="text-[#188A31]">Charges</span>
            </h1>

            {/* SUB HEADING - Updated */}

            <p
              className="
                mt-2.5
                font-serif
                text-[17px]
                italic
                leading-tight
                text-[#03C35E]

                min-[375px]:mt-3
                min-[375px]:text-[19px]

                min-[430px]:text-[20px]

                sm:mt-4
                sm:text-[22px]

                md:text-[24px]

                lg:text-[27px]

                xl:text-[30px]

                2xl:text-[32px]
              "
            >
              Maharaja Tempo Traveller Price Details!
            </p>

            {/* DESCRIPTION */}

            <div
              className="
                mt-3
                max-w-[530px]
                space-y-2
                text-[9.5px]
                leading-[1.65]
                text-[#303944]

                min-[375px]:mt-3.5
                min-[375px]:text-[10px]

                min-[430px]:text-[10.5px]

                sm:mt-4
                sm:text-[11px]

                md:mt-5
                md:text-xs

                lg:text-sm

                xl:text-base
              "
            >
              <p>
                Hire Tempo Traveller in Delhi for every occasion – weddings,
                pilgrimage trips, corporate events, tours, and Delhi Darshan.
                Comfortable, affordable travel for groups of all sizes.
              </p>
            </div>
          </div>

          {/* -----------------------------------------------
              RIGHT SIDE - Empty as per OurTrustedPartner
          ------------------------------------------------ */}

          <div
            className="
              relative
              hidden
              w-full
              items-center
              justify-center
              lg:flex
              lg:justify-end
            "
          />
        </motion.div>

        {/* ===================================================
            PRICING TABLE
        ==================================================== */}

        <div
          className="
            relative
            z-20
            mx-3
            mb-6
            overflow-hidden
            rounded-[17px]
            border
            border-[#e1e8da]
            bg-white
            shadow-[0_3px_15px_rgba(0,0,0,0.06)]
            sm:mx-5
            sm:mb-7
            md:mx-6
            lg:mx-7
            xl:mx-10
          "
        >
          {/* -----------------------------------------------
              TABLE HEADER - Updated to use #F7941E
          ------------------------------------------------ */}

          <div
            className="
              hidden
              min-h-[70px]
              grid-cols-[1.35fr_0.95fr_0.95fr_0.95fr]
              items-stretch
              bg-[#F7941E]
              sm:grid
            "
          >
            {/* VEHICLE HEADER */}

            <div className="flex items-center gap-3 border-r border-white/20 px-4 sm:px-5 md:px-6">
              <FaBus className="text-[24px] text-white md:text-[26px]" />

              <span
                className="
                  text-[11px]
                  font-extrabold
                  uppercase
                  leading-[1.35]
                  text-white
                  sm:text-xs
                  md:text-[13px]
                "
              >
                MAHARAJA 
                <br />
                TEMPO TRAVELLER
              </span>
            </div>

            {/* PRICE HEADER */}

            <div className="flex items-center gap-3 border-r border-white/20 px-4 sm:px-5 md:px-6">
              <FaTag className="text-[23px] text-white md:text-[25px]" />

              <span
                className="
                  text-[11px]
                  font-extrabold
                  uppercase
                  leading-[1.35]
                  text-white
                  sm:text-xs
                  md:text-[13px]
                "
              >
                START FROM
                <br />
                PRICE/KM
              </span>
            </div>

            {/* SEATING HEADER */}

            <div className="flex items-center gap-3 border-r border-white/20 px-4 sm:px-5 md:px-6">
              <FaUsers className="text-[23px] text-white md:text-[25px]" />

              <span
                className="
                  text-[11px]
                  font-extrabold
                  uppercase
                  leading-[1.35]
                  text-white
                  sm:text-xs
                  md:text-[13px]
                "
              >
                SEATING
                <br />
                ARRANGEMENT
              </span>
            </div>

            {/* BOOK HEADER */}

            <div className="flex items-center gap-3 px-4 sm:px-5 md:px-6">
              <FaCalendarAlt className="text-[23px] text-white md:text-[25px]" />

              <span
                className="
                  text-[11px]
                  font-extrabold
                  uppercase
                  leading-[1.35]
                  text-white
                  sm:text-xs
                  md:text-[13px]
                "
              >
                BOOK
                <br />
                NOW
              </span>
            </div>
          </div>

          {/* -----------------------------------------------
              DESKTOP/TABLET ROWS
          ------------------------------------------------ */}

          {vehicles.map((vehicle, index) => (
            <PricingRow
              key={vehicle.id}
              vehicle={vehicle}
              index={index}
            />
          ))}

          {/* -----------------------------------------------
              MOBILE HEADER - Updated to use #F7941E
          ------------------------------------------------ */}

          <div
            className="
              flex
              items-center
              justify-between
              bg-[#F7941E]
              px-4
              py-3
              sm:hidden
            "
          >
            <div className="flex items-center gap-2">
              <FaBus className="text-xl text-white" />

              <span className="text-[12px] font-extrabold uppercase text-white">
                MAHARAJA TEMPO TRAVELLER
              </span>
            </div>

            <FaCalendarAlt className="text-lg text-white" />
          </div>

          {/* -----------------------------------------------
              MOBILE CARDS
          ------------------------------------------------ */}

          <div className="space-y-3 bg-[#fafcf8] p-3 sm:hidden">
            {vehicles.map((vehicle, index) => (
              <MobilePricingCard
                key={vehicle.id}
                vehicle={vehicle}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}