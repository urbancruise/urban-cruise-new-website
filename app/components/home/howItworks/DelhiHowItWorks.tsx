// app/components/how-it-works/DelhiHowItWorks.tsx
"use client";

import Image from "next/image";

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
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-12
        xs:py-14
        sm:py-16
        md:py-20
        lg:py-24
        xl:py-28
      "
    >
      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1400px]
          px-4
          xs:px-5
          sm:px-8
          md:px-10
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            HEADER — SAME STYLE AS DELHI ABOUT
        ====================================================== */}
        <div
          className="
            mb-14
            w-full
            max-w-[650px]
            text-left
            sm:mb-16
            md:mb-20
          "
        >
          {/* =================================================
              SMALL LABEL
          ================================================== */}
          <div
            className="
              mb-4
              flex
              w-full
              items-center
              justify-start
              gap-1.5
              xs:gap-2
              sm:gap-2.5
              md:gap-3
            "
          >
            {/* LEFT LINE */}
            <span
              className="
                block
                h-px
                w-6
                bg-gray-400/60
                sm:w-8
                md:w-10
                lg:w-12
              "
            />

            {/* LABEL */}
            <span
              className="
                whitespace-nowrap
                text-[8px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#03C35E]
                xs:text-[9px]
                xs:tracking-[0.17em]
                sm:text-[9px]
                sm:tracking-[0.2em]
                md:text-[10px]
                md:tracking-[0.22em]
                lg:text-[11px]
                xl:text-xs
                lg:tracking-[0.25em]
              "
            >
              How It Works
            </span>

            {/* RIGHT LINE */}
            <span
              className="
                block
                h-px
                w-6
                bg-gray-400/60
                sm:w-8
                md:w-10
                lg:w-12
              "
            />
          </div>

          {/* =================================================
              MAIN TITLE
          ================================================== */}
          <h2
            className="
              text-[24px]
              xs:text-[26px]
              sm:text-[28px]
              md:text-[32px]
              lg:text-[42px]
              xl:text-[50px]
              2xl:text-[58px]
              font-extrabold
              leading-[1]
              tracking-[-0.04em]
              text-black
            "
          >
            HOW IT WORKS
          </h2>

          {/* =================================================
              SUBHEADING
          ================================================== */}
          <p
            className="
              mt-3
              font-serif
              text-[21px]
              italic
              leading-tight
              text-[#03C35E]
              xs:text-[23px]
              sm:text-[27px]
              md:text-[29px]
            "
          >
            Simple Steps, Smooth Journey
          </p>

          {/* =================================================
              DESCRIPTION
          ================================================== */}
          <div
            className="
              mt-5
              max-w-[590px]
              space-y-3
              xs:space-y-4
              leading-[1.75]
              text-[#303944]
              text-[10px]
              xs:text-[11px]
              sm:text-[11px]
              md:text-xs
              lg:text-sm
              xl:text-base
            "
          >
            <p>
              Booking your perfect ride with Urban Cruise is{" "}
              <strong className="font-bold text-[#03C35E]">
                simple
              </strong>{" "}
              and hassle-free. Just follow three easy steps to
              get started.
            </p>

            <p>
              Share your travel requirements, choose the{" "}
              <strong className="font-bold text-[#03C35E]">
                right vehicle
              </strong>{" "}
              for your journey, and confirm your booking with
              our professional team.
            </p>
          </div>
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
                className="
                  group
                  relative
                  flex
                  flex-col
                  items-center
                "
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
                    transition-transform
                    duration-300
                    group-hover:scale-105
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
                    style={{
                      color: step.color,
                    }}
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
                    {/* SOFT BACKGROUND */}
                    <div
                      className="
                        absolute
                        inset-x-[12%]
                        bottom-3
                        top-5
                        rounded-[30px]
                      "
                      style={{
                        backgroundColor: `${step.color}07`,
                      }}
                    />

                    {/* IMAGE */}
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

        {/* =====================================================
            BOTTOM SPACING
        ====================================================== */}
        <div
          className="
            h-2
            sm:h-10
            lg:h-16
            xl:h-20
          "
        />
      </div>
    </section>
  );
}
