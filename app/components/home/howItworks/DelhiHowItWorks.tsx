"use client";

import Image from "next/image";
import { MdDirectionsCar } from "react-icons/md";

const GREEN = "#03C35E";
const ORANGE = "#F7941E";

const steps = [
  {
    number: "01",
    title: "ENQUIRY",
    description:
      "Share your Travel Plan with us through Call, Email, WhatsApp, or Request a Quote",
    image: "/images/how-it-works/enquiry.webp",
    color: GREEN,
  },
  {
    number: "02",
    title: "SELECT VEHICLE",
    description:
      "Our Team will provide Best Suitable Vehicle Options with Best Value Pricing.",
    image: "/images/how-it-works/select-vehicle.webp",
    color: ORANGE,
  },
  {
    number: "03",
    title: "BOOK VEHICLE",
    description:
      "Book our Economy to Royal Quality Vehicles on Rent & Enjoy a memorable journey.",
    image: "/images/how-it-works/book-vehicle.webp",
    color: GREEN,
  },
];

export default function DelhiHowItWorks() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-14 sm:py-16 md:py-20 lg:py-24">
      {/* =====================================================
          BACKGROUND DOTS - TOP LEFT
      ====================================================== */}
      <div
        className="pointer-events-none absolute left-4 top-5 h-20 w-20 opacity-50 sm:left-8 sm:top-7 sm:h-24 sm:w-24"
        style={{
          backgroundImage: `radial-gradient(${GREEN}70 1.5px, transparent 1.5px)`,
          backgroundSize: "11px 11px",
        }}
      />

      {/* =====================================================
          BACKGROUND DOTS - TOP RIGHT
      ====================================================== */}
      <div
        className="pointer-events-none absolute right-4 top-5 h-20 w-20 opacity-50 sm:right-8 sm:top-7 sm:h-24 sm:w-24"
        style={{
          backgroundImage: `radial-gradient(${GREEN}70 1.5px, transparent 1.5px)`,
          backgroundSize: "11px 11px",
        }}
      />

      {/* =====================================================
          LIGHT DECORATIVE BUILDINGS
      ====================================================== */}
      <div className="pointer-events-none absolute bottom-[25%] left-0 hidden opacity-[0.10] lg:block">
        <div className="flex items-end gap-2">
          <div className="h-28 w-10 border border-[#03C35E]" />
          <div className="h-40 w-12 border border-[#03C35E]" />
          <div className="h-24 w-8 border border-[#03C35E]" />
          <div className="h-32 w-10 border border-[#03C35E]" />
          <div className="h-20 w-7 border border-[#03C35E]" />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[25%] right-0 hidden opacity-[0.10] lg:block">
        <div className="flex items-end gap-2">
          <div className="h-20 w-7 border border-[#03C35E]" />
          <div className="h-32 w-10 border border-[#03C35E]" />
          <div className="h-24 w-8 border border-[#03C35E]" />
          <div className="h-40 w-12 border border-[#03C35E]" />
          <div className="h-28 w-10 border border-[#03C35E]" />
        </div>
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mb-14 text-center sm:mb-16 md:mb-20">
          {/* Small pill */}
          <div
            className="
              mx-auto mb-4
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              bg-white
              px-5
              py-2
              shadow-sm
              sm:px-6
              sm:py-2.5
            "
            style={{
              borderColor: `${GREEN}55`,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: ORANGE }}
            />

            <span
              className="
                text-[11px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                sm:text-xs
                md:text-sm
              "
              style={{ color: "#145A27" }}
            >
              How It Works
            </span>

            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: ORANGE }}
            />
          </div>

          {/* Main heading */}
          <h2
            className="
              text-[42px]
              font-black
              leading-[0.95]
              tracking-[-0.04em]
              text-[#111827]
              sm:text-[54px]
              md:text-[64px]
              lg:text-[76px]
              xl:text-[82px]
            "
          >
            How It{" "}
            <span style={{ color: "#087C26" }}>
              Works
            </span>
          </h2>

          {/* Orange divider */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-4">
            <span className="h-[2px] w-16 bg-[#F7941E] sm:w-24" />

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F7941E] text-white shadow-md">
              <MdDirectionsCar className="text-xl" />
            </div>

            <span className="h-[2px] w-16 bg-[#F7941E] sm:w-24" />
          </div>

          {/* Subtitle */}
          <p
            className="
              mx-auto
              mt-5
              max-w-[650px]
              px-3
              text-sm
              leading-relaxed
              text-[#252B35]
              sm:text-base
              md:text-lg
            "
          >
            Simple steps to book your perfect ride with Urban Cruise
          </p>
        </div>

        {/* =====================================================
            STEPS WRAPPER
        ====================================================== */}
        <div className="relative">
          {/* =====================================================
              WAVY CONNECTOR - DESKTOP
          ====================================================== */}
          <svg
            className="
              pointer-events-none
              absolute
              left-[4%]
              right-[4%]
              top-[35px]
              z-0
              hidden
              h-[100px]
              w-[92%]
              md:block
            "
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              d="
                M 80 45
                C 170 5, 260 5, 350 45
                C 440 85, 500 85, 600 45
                C 700 5, 760 5, 850 45
                C 940 85, 1030 85, 1120 45
              "
              fill="none"
              stroke={GREEN}
              strokeWidth="2"
              strokeDasharray="7 7"
              strokeLinecap="round"
              opacity="0.85"
            />
          </svg>

          {/* =====================================================
              CARDS
          ====================================================== */}
          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              gap-14
              md:grid-cols-3
              md:gap-7
              lg:gap-9
              xl:gap-10
            "
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center"
              >
                {/* =================================================
                    NUMBER BADGE
                ================================================== */}
                <div
                  className="
                    relative
                    z-30
                    flex
                    h-[76px]
                    w-[76px]
                    items-center
                    justify-center
                    rounded-full
                    border-[6px]
                    border-white
                    text-[25px]
                    font-black
                    text-white
                    shadow-[0_8px_20px_rgba(0,0,0,0.18)]
                    sm:h-[82px]
                    sm:w-[82px]
                    sm:text-[28px]
                  "
                  style={{
                    backgroundColor: step.color,
                    boxShadow: `0 8px 20px ${step.color}55`,
                  }}
                >
                  {step.number}
                </div>

                {/* =================================================
                    CARD
                ================================================== */}
                <div
                  className="
                    relative
                    -mt-9
                    flex
                    min-h-[570px]
                    w-full
                    flex-col
                    overflow-visible
                    rounded-[32px]
                    border
                    border-[#E9E9E9]
                    bg-white
                    px-5
                    pb-8
                    pt-14
                    text-center
                    shadow-[0_15px_45px_rgba(0,0,0,0.10)]
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_22px_55px_rgba(0,0,0,0.15)]
                    sm:px-7
                    md:min-h-[555px]
                    lg:min-h-[570px]
                    lg:px-8
                    xl:min-h-[590px]
                  "
                  style={{
                    borderBottom: `7px solid ${step.color}`,
                  }}
                >
                  {/* =================================================
                      TITLE
                  ================================================== */}
                  <h3
                    className="
                      mb-4
                      text-[21px]
                      font-black
                      uppercase
                      tracking-[-0.02em]
                      sm:text-[23px]
                      lg:text-[25px]
                    "
                    style={{ color: step.color }}
                  >
                    {step.title}
                  </h3>

                  {/* =================================================
                      ILLUSTRATION
                  ================================================== */}
                  <div
                    className="
                      relative
                      mx-auto
                      mb-5
                      flex
                      h-[285px]
                      w-full
                      items-center
                      justify-center
                      overflow-hidden
                      sm:h-[300px]
                      md:h-[285px]
                      lg:h-[310px]
                      xl:h-[325px]
                    "
                  >
                    {/* Soft background */}
                    <div
                      className="absolute inset-x-[12%] bottom-3 top-5 rounded-[30px]"
                      style={{
                        backgroundColor: `${step.color}07`,
                      }}
                    />

                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="
                        (max-width: 768px) 90vw,
                        (max-width: 1200px) 30vw,
                        400px
                      "
                      className="
                        relative
                        z-10
                        object-contain
                        p-1
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                      priority={step.number === "01"}
                    />
                  </div>

                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}
                  <p
                    className="
                      mx-auto
                      mt-auto
                      max-w-[300px]
                      text-[15px]
                      font-medium
                      leading-[1.55]
                      text-[#303640]
                      sm:text-base
                      lg:text-[17px]
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
