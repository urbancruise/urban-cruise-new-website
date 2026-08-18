// app/components/home/vehicleforeverybudget/DelhiVehicleForEveryBudget.tsx
"use client";

import Image from "next/image";

const GREEN = "#03C35E";
const ORANGE = "#F7941E";

const categories = [
  {
    title: "ECONOMY",
    description: "Vehicles with basic Amenities for Budget Travellers",
    icon: "/images/vehicleforeverybudget/1.webp",
    color: GREEN,
  },
  {
    title: "PREMIUM",
    description:
      "Vehicles with Best-in-class Amenities for Superior Passenger...",
    icon: "/images/vehicleforeverybudget/2.webp",
    color: ORANGE,
  },
  {
    title: "ROYAL",
    description:
      "New & Modified Vehicles with Best-in-class Amenities",
    icon: "/images/vehicleforeverybudget/3.webp",
    color: GREEN,
  },
  {
    title: "ROYAL VIP",
    description:
      "Ultra Luxury Vehicles with Custom Designed Amenities...",
    icon: "/images/vehicleforeverybudget/4.webp",
    color: ORANGE,
  },
];

export default function DelhiVehicleForEveryBudget() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white

        py-10
        sm:py-12
        md:py-14
        lg:py-16
        xl:py-20
        2xl:py-24
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]

          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
          2xl:px-16
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div
          className="
            mb-10
            w-full
            max-w-[720px]
            text-left

            sm:mb-12
            md:mb-14
            lg:mb-16
            xl:mb-18
            2xl:mb-20
          "
        >
          {/* TOP LABEL */}
          <div
            className="
              mb-3
              flex
              w-full
              items-center
              justify-start
              gap-2

              sm:mb-4
              sm:gap-2.5

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

                sm:text-[9px]
                sm:tracking-[0.18em]

                md:text-[10px]
                md:tracking-[0.2em]

                lg:text-[11px]
                lg:tracking-[0.23em]

                xl:text-xs
              "
            >
              We Offer Best Services
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
            A VEHICLE FOR EVERY BUDGET
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
            "
          >
            Vehicles For Every Journey, Every Budget
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
              From economical rides to premium and luxury vehicles, Urban
              Cruise offers a wide range of vehicles to match your travel
              needs, comfort, and budget.
            </p>
          </div>
        </div>

        {/* =====================================================
            CATEGORIES GRID
        ====================================================== */}
        <div
          className="
            grid
            w-full

            /* ================= MOBILE ================= */
            grid-cols-1
            gap-x-0
            gap-y-7

            /* ============== LARGE MOBILE ============== */
            sm:gap-x-0
            sm:gap-y-8

            /* ================= TABLET ================= */
            md:grid-cols-2
            md:gap-x-7
            md:gap-y-10

            /* ============ LARGE TABLET ================ */
            lg:gap-x-8
            lg:gap-y-12

            /* ================= LAPTOP ================= */
            xl:grid-cols-4
            xl:gap-x-7
            xl:gap-y-0

            /* ================ DESKTOP ================= */
            2xl:gap-x-9
            2xl:gap-y-0
          "
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="
                group
                relative
                flex
                w-full
                flex-col
                items-center
                rounded-[1.75rem]
                bg-white
                px-5
                pb-5
                pt-14
                text-center

                shadow-[0_8px_30px_rgba(0,0,0,0.06)]

                transition-all
                duration-300
                ease-out

                hover:-translate-y-2
                hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]

                /* ================= MOBILE ================= */
                min-h-[220px]

                /* ============== LARGE MOBILE ============== */
                sm:min-h-[225px]
                sm:px-6
                sm:pb-6
                sm:pt-14

                /* ================= TABLET ================= */
                md:min-h-[230px]
                md:px-6
                md:pb-6
                md:pt-14

                /* ============ LARGE TABLET ================ */
                lg:min-h-[235px]
                lg:px-7
                lg:pb-6
                lg:pt-14

                /* ================= LAPTOP ================= */
                xl:min-h-[240px]
                xl:px-6
                xl:pb-6
                xl:pt-14

                /* ================= DESKTOP ================ */
                2xl:min-h-[250px]
                2xl:px-7
                2xl:pb-7
                2xl:pt-14
              "
              style={{
                borderTop: `4px solid ${category.color}`,
              }}
            >
              {/* =================================================
                  ICON
              ================================================== */}
              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  flex
                  h-[78px]
                  w-[78px]
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border-[3px]
                  bg-white

                  transition-all
                  duration-300
                  ease-out

                  group-hover:scale-110

                  /* ================= MOBILE ================= */
                  sm:h-[84px]
                  sm:w-[84px]

                  /* ================= TABLET ================= */
                  md:h-[88px]
                  md:w-[88px]

                  /* ============ LARGE TABLET ================ */
                  lg:h-[94px]
                  lg:w-[94px]

                  /* ================= LAPTOP ================= */
                  xl:h-[96px]
                  xl:w-[96px]

                  /* ================= DESKTOP ================ */
                  2xl:h-[114px]
                  2xl:w-[114px]
                "
                style={{
                  borderColor: category.color,
                  boxShadow: `0 6px 18px ${category.color}22`,
                }}
              >
                <Image
                  src={category.icon}
                  alt={`${category.title} vehicle`}
                  width={100}
                  height={100}
                  className="
                    h-[48px]
                    w-[48px]
                    object-contain

                    transition-transform
                    duration-500
                    ease-out

                    group-hover:scale-110

                    /* ================= MOBILE ================= */
                    sm:h-[52px]
                    sm:w-[52px]

                    /* ================= TABLET ================= */
                    md:h-[56px]
                    md:w-[56px]

                    /* ============ LARGE TABLET ================ */
                    lg:h-[62px]
                    lg:w-[62px]

                    /* ================= LAPTOP ================= */
                    xl:h-[66px]
                    xl:w-[66px]

                    /* ================= DESKTOP ================ */
                    2xl:h-[94px]
                    2xl:w-[94px]
                  "
                />
              </div>

              {/* =================================================
                  TITLE
              ================================================== */}
              <h3
                className="
                  mb-2
                  text-[17px]
                  font-black
                  uppercase
                  leading-tight
                  tracking-[-0.02em]

                  sm:text-[18px]

                  md:text-[19px]

                  lg:text-[20px]

                  xl:text-[20px]

                  2xl:text-[22px]
                "
                style={{
                  color: category.color,
                }}
              >
                {category.title}
              </h3>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}
              <p
                className="
                  mx-auto
                  max-w-[270px]
                  text-[13px]
                  font-medium
                  leading-[1.5]
                  text-[#4B5563]

                  sm:max-w-[290px]
                  sm:text-[14px]

                  md:max-w-[300px]
                  md:text-[14px]

                  lg:max-w-[310px]
                  lg:text-[15px]

                  xl:max-w-[280px]
                  xl:text-[14px]

                  2xl:max-w-[300px]
                  2xl:text-[15px]
                "
              >
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM SPACER
        ====================================================== */}
        <div
          className="
            h-3

            sm:h-5

            md:h-7

            lg:h-9

            xl:h-12

            2xl:h-16
          "
        />
      </div>
    </section>
  );
}
