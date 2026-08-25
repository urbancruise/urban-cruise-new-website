"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCar,
  FaUserTie,
  FaHeadset,
  FaRupeeSign,
  FaBroom,
  FaBan,
  FaCheckCircle,
} from "react-icons/fa";

const GREEN = "#03C35E";
const DARK_GREEN = "#087F35";
const ORANGE = "#F7941E";
const DARK_ORANGE = "#E66F00";

type Benefit = {
  number: string;
  title: string;
  icon: React.ReactNode;
  description: string[];
  image: string;
  theme: "green" | "orange";
};

// BENEFIT CARD
function BenefitCard({
  benefit,
  index,
}: {
  benefit: Benefit;
  index: number;
}) {
  const isGreen = benefit.theme === "green";

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.15 }}
      className="
        group
        relative
        min-h-[265px]
        overflow-hidden
        rounded-[17px]
        border
        border-[#dce4dc]
        bg-white
        shadow-[0_5px_20px_rgba(0,0,0,0.08)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.13)]

        sm:min-h-[275px]
        md:min-h-[280px]
        lg:min-h-[270px]
        xl:min-h-[275px]
        2xl:min-h-[290px]
      "
    >
      {/* VERY LIGHT CARD BACKGROUND GLOW */}
      <div
        className={`
          pointer-events-none
          absolute
          -right-16
          bottom-[-90px]
          h-[230px]
          w-[230px]
          rounded-full
          blur-3xl
          transition-opacity
          duration-300
          group-hover:opacity-80

          ${
            isGreen
              ? "bg-[#03C35E]/[0.07]"
              : "bg-[#F7941E]/[0.08]"
          }
        `}
      />

      {/* NUMBER BADGE */}
      <div
        className={`
          absolute
          right-0
          top-0
          z-30
          flex
          h-[38px]
          w-[51px]
          items-center
          justify-center
          rounded-bl-[16px]
          font-extrabold
          text-[17px]
          text-white
          shadow-sm

          sm:h-[40px]
          sm:w-[53px]
          sm:text-[18px]

          ${
            isGreen
              ? "bg-gradient-to-br from-[#03C35E] to-[#087F35]"
              : "bg-gradient-to-br from-[#F7941E] to-[#E66F00]"
          }
        `}
      >
        {benefit.number}
      </div>

      {/* CARD CONTENT */}
      <div
        className="
          relative
          z-20
          flex
          h-full
          min-h-[265px]
          w-full
          flex-col
          justify-start
          px-4
          pb-4
          pt-5
          pr-[43%]

          sm:min-h-[275px]
          sm:px-5
          sm:pb-5
          sm:pt-5
          sm:pr-[44%]

          md:min-h-[280px]
          md:pr-[45%]

          lg:min-h-[270px]
          lg:px-5
          lg:pr-[43%]

          xl:min-h-[275px]
          xl:px-6
          xl:pr-[44%]

          2xl:min-h-[290px]
          2xl:px-7
        "
      >
        {/* ICON */}
        <div
          className={`
            mb-3
            flex
            h-[48px]
            w-[48px]
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            bg-white
            shadow-[0_2px_8px_rgba(0,0,0,0.12)]

            sm:h-[51px]
            sm:w-[51px]

            md:h-[54px]
            md:w-[54px]

            ${
              isGreen
                ? "border-[#03C35E]/30 text-[#078D3A]"
                : "border-[#F7941E]/40 text-[#F7941E]"
            }
          `}
        >
          <div
            className={`
              flex
              h-[37px]
              w-[37px]
              items-center
              justify-center
              rounded-full
              text-[20px]
              text-white

              sm:h-[40px]
              sm:w-[40px]
              sm:text-[21px]

              md:h-[42px]
              md:w-[42px]
              md:text-[22px]

              ${
                isGreen
                  ? "bg-gradient-to-br from-[#03C35E] to-[#087F35]"
                  : "bg-gradient-to-br from-[#F7941E] to-[#E66F00]"
              }
            `}
          >
            {benefit.icon}
          </div>
        </div>

        {/* TITLE */}
        <h3
          className="
            max-w-[220px]
            text-[14px]
            font-extrabold
            uppercase
            leading-[1.15]
            tracking-[-0.01em]
            text-[#12233F]

            sm:text-[15px]
            md:text-[16px]
            lg:text-[15px]
            xl:text-[16px]
            2xl:text-[17px]
          "
        >
          {benefit.title.split(" ").map((word, wordIndex) => {
            const shouldGreen =
              isGreen &&
              benefit.title === "WIDEST RANGE OF VEHICLES" &&
              (word === "RANGE" || word === "VEHICLES");

            const shouldOrange =
              !isGreen &&
              (benefit.title === "TRANSPARENT PRICING" ||
                benefit.title === "DEEP CLEANING & HYGIENE" ||
                benefit.title === "NO LAST MINUTE CANCELLATIONS") &&
              (word === "PRICING" ||
                word === "HYGIENE" ||
                word === "CANCELLATIONS");

            return (
              <span key={wordIndex}>
                <span
                  className={
                    shouldGreen
                      ? "text-[#087F35]"
                      : shouldOrange
                      ? "text-[#F7941E]"
                      : ""
                  }
                >
                  {word}
                </span>{" "}
              </span>
            );
          })}
        </h3>

        {/* SMALL UNDERLINE */}
        <div
          className={`
            mb-3
            mt-2
            h-[2px]
            w-[29px]

            sm:mt-2.5

            ${
              isGreen
                ? "bg-[#087F35]"
                : "bg-[#F7941E]"
            }
          `}
        />

        {/* DESCRIPTION */}
        <ul
          className="
            max-w-[160px]
            space-y-[8px]

            sm:max-w-[170px]
            sm:space-y-[9px]

            md:max-w-[175px]
            md:space-y-[10px]

            lg:max-w-[165px]

            xl:max-w-[175px]

            2xl:max-w-[190px]
          "
        >
          {benefit.description.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className="
                flex
                items-start
                gap-[7px]
                text-[10px]
                leading-[1.4]
                text-[#303944]

                sm:text-[10.5px]

                md:text-[11px]

                lg:text-[10.5px]

                xl:text-[11px]

                2xl:text-[12px]
              "
            >
              <FaCheckCircle
                className={`
                  mt-[2px]
                  shrink-0
                  text-[10px]

                  sm:text-[11px]

                  ${
                    isGreen
                      ? "text-[#139A45]"
                      : "text-[#F7941E]"
                  }
                `}
              />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div
        className="
          absolute
          bottom-0
          right-[-4px]
          z-10
          h-[68%]
          w-[47%]

          sm:right-0
          sm:h-[70%]
          sm:w-[48%]

          md:h-[74%]
          md:w-[48%]

          lg:h-[76%]
          lg:w-[49%]

          xl:h-[78%]
          xl:w-[49%]
        "
      >
        <Image
          src={benefit.image}
          alt={benefit.title}
          fill
          sizes="
            (max-width: 639px) 45vw,
            (max-width: 1023px) 30vw,
            18vw
          "
          className="
            object-contain
            object-right-bottom
            transition-transform
            duration-500
            group-hover:scale-[1.04]
          "
        />
      </div>
    </motion.div>
  );
}

// MAIN COMPONENT
export default function DelhiWhyChooseUrbanCruise() {
  const benefits: Benefit[] = [
    {
      number: "01",
      title: "WIDEST RANGE OF VEHICLES",
      icon: <FaCar />,
      theme: "green",
      image:
        "/images/whychooseicons/Widest range of vehicles.webp",
      description: [
        "5 seater to 56 seater luxury & Royal VIP Class Vehicles",
        "Designed for Superior wedding Travel Comfort",
        "Luxurious Amenities – Individual A/C Vents, Ambient Lighting, Mobile Charging Points",
      ],
    },

    {
      number: "02",
      title: "TRAINED & EXPERIENCED DRIVERS",
      icon: <FaUserTie />,
      theme: "orange",
      image:
        "/images/whychooseicons/Trained & Experirnced Drivers.webp",
      description: [
        "Trained for Defensive & Safe Driving and Google Maps",
        "Experienced, Polite & well behaved Drivers",
        "Drivers arrive on Time for Pick-up at your Door Step",
      ],
    },

    {
      number: "03",
      title: "24×7 CUSTOMER SUPPORT",
      icon: <FaHeadset />,
      theme: "green",
      image:
        "/images/whychooseicons/24x7 support icons.webp",
      description: [
        "Get the perfect bus for your trip with expert guidance",
        "Enjoy vehicles equipped with best-in-class amenities",
        "We stay connected throughout your journey for a smooth experience",
      ],
    },

    {
      number: "04",
      title: "TRANSPARENT PRICING",
      icon: <FaRupeeSign />,
      theme: "orange",
      image:
        "/images/whychooseicons/Transparent Pricing.webp",
      description: [
        "No Hidden Cost - Rate Quotation shows all charges",
        "No Over Pricing - Final Billing as per Rate Quotation only",
      ],
    },

    {
      number: "05",
      title: "DEEP CLEANING & HYGIENE",
      icon: <FaBroom />,
      theme: "green",
      image:
        "/images/whychooseicons/Deep Cleaning.webp",
      description: [
        "All vehicle are deep cleaned before every trip",
        "Regular maintenance ensures smooth travel",
        "Sanitized interiors for a safe & fresh journey",
      ],
    },

    {
      number: "06",
      title: "NO LAST MINUTE CANCELLATIONS",
      icon: <FaBan />,
      theme: "orange",
      image:
        "/images/whychooseicons/No Last Minute Cancelation.webp",
      description: [
        "Booking Confirmed = Guaranteed Service",
        "No last-minute cancellations",
        "Your vehicle always reserved once you booked",
      ],
    },
  ];

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
        2xl:py-[70px]
      "
    >
      {/* ======================================================
          BACKGROUND CITY IMAGE
          ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-0
          h-[300px]
          overflow-hidden

          sm:h-[360px]

          md:h-[420px]

          lg:h-[460px]

          xl:h-[500px]

          2xl:h-[540px]
        "
      >
        <Image
          src="/images/whychooseicons/bg.png"
          alt="Why Choose Urban Cruse background"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
            opacity-100
          "
        />

        {/* LIGHT WHITE OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-white/50
          "
        />

        {/* TOP FADE */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[90px]
            bg-gradient-to-b
            from-white/20
            to-transparent
          "
        />

        {/* BOTTOM FADE */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-[180px]
            bg-gradient-to-t
            from-white
            via-white/75
            to-transparent
          "
        />
      </div>

      {/* ======================================================
          MAIN CONTAINER
          ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-3
          min-[375px]:px-4
          min-[430px]:px-5
          sm:px-6
          md:px-8
          lg:px-9
          xl:px-10
          2xl:px-12
        "
      >
        {/* ====================================================
            HEADER
            ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            mb-9
            grid
            w-full
            items-center
            gap-7

            min-[375px]:mb-10
            min-[375px]:gap-8

            min-[430px]:mb-10
            min-[430px]:gap-8

            sm:mb-12
            sm:gap-9

            md:mb-14
            md:gap-10

            lg:mb-16
            lg:grid-cols-[1fr_1fr]
            lg:gap-6

            xl:mb-[72px]
            xl:gap-8

            2xl:mb-20
            2xl:gap-10
          "
        >
          {/* LEFT CONTENT */}
          <div className="w-full max-w-[720px] text-left">
            {/* EYEBROW */}
            <div
              className="
                mb-3
                flex
                w-full
                items-center
                justify-start
                gap-2

                min-[430px]:mb-3.5
                min-[430px]:gap-2.5

                sm:mb-4

                md:gap-3

                lg:gap-3.5

                xl:gap-4
              "
            >
              <span
                className="
                  block
                  h-px
                  w-5
                  shrink-0
                  bg-gray-400/60

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
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#03C35E]

                  min-[375px]:text-[8.5px]

                  min-[430px]:text-[9px]
                  min-[430px]:tracking-[0.16em]

                  sm:text-[9.5px]
                  sm:tracking-[0.18em]

                  md:text-[10px]

                  lg:text-[11px]

                  xl:text-xs
                "
              >
                Why Choose Urban Cruise
              </span>

              <span
                className="
                  block
                  h-px
                  w-5
                  shrink-0
                  bg-gray-400/60

                  sm:w-7
                  md:w-9
                  lg:w-11
                  xl:w-12
                  2xl:w-14
                "
              />
            </div>

            {/* MAIN HEADING */}
            <h2
              className="
                text-[24px]
                font-extrabold
                leading-[1.05]
                tracking-[-0.04em]
                text-black

                min-[375px]:text-[25px]

                min-[430px]:text-[27px]

                sm:text-[28px]

                md:text-[32px]

                lg:text-[40px]

                xl:text-[48px]

                2xl:text-[56px]
              "
            >
              WHY CHOOSE{" "}
              <span className="text-[#188A31]">
                URBAN CRUISE
              </span>
            </h2>

            {/* SUB HEADING */}
            <p
              className="
                mt-3
                font-serif
                text-[19px]
                italic
                leading-tight
                text-[#03C35E]

                min-[375px]:text-[20px]

                min-[430px]:text-[21px]

                sm:text-[22px]

                md:text-[25px]

                lg:text-[27px]

                xl:text-[30px]

                2xl:text-[32px]
              "
            >
              Reliable, Comfortable &amp; Hassle-Free Travel
            </p>

            {/* DESCRIPTION */}
            <div
              className="
                mt-4
                max-w-[620px]
                space-y-3
                text-[10px]
                leading-[1.7]
                text-[#303944]

                min-[375px]:text-[10.5px]

                min-[430px]:text-[11px]

                sm:mt-5
                sm:text-[11px]

                md:text-xs

                lg:text-sm

                xl:text-base
              "
            >
              <p>
                Choose Urban Cruise for reliable vehicle rentals in
                Delhi NCR, with well-maintained vehicles, trained
                drivers and dependable support for every journey.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE EMPTY AREA */}
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

        {/* ====================================================
            BENEFITS GRID
            ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:grid-cols-3
            lg:gap-5

            xl:gap-6

            2xl:gap-6
          "
        >
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.number}
              benefit={benefit}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}