// app/components/about/DelhiAbout.tsx
"use client";

import { BsFillBusFrontFill } from "react-icons/bs";
import {
  FaHeadset,
  FaCarSide,
  FaBus,
  FaCar,
  FaBusAlt,
} from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";

const fleet = [
  {
    icon: IoCarSport,
    label: "Cars",
  },
  {
    icon: FaCar ,
    label: "Sedans",
  },
  {
    icon: FaBus,
    label: "SUVs",
  },
  {
    icon: BsFillBusFrontFill,
    label: "Tempo Traveller",
  },
  {
    icon: FaBusAlt,
    label: "Luxury Bus",
  },
];

export default function DelhiAbout() {
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
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          xs:px-5
          sm:px-8
          md:px-10
          lg:px-12
          xl:px-16
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            sm:gap-12
            md:gap-14
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-10
            xl:gap-16
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div
            className="
              relative
              z-10
              mx-auto
              w-full
              max-w-[650px]
              lg:mx-0
            "
          >
            {/* =================================================
                ABOUT US — SAME BORDER STYLE AS DELHI HERO
            ================================================== */}
            <div
              className="
                mb-4
                flex
                w-full
                items-center
                justify-center
                gap-1.5
                xs:gap-2
                sm:gap-2.5
                md:gap-3
                lg:justify-start
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

              {/* ABOUT US TEXT */}
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
                About Us
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
              URBAN CRUISE
            </h2>

            {/* =================================================
                TAGLINE
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
              Your Journey, Our Passion
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
                Urban Cruise is India&apos;s trusted car &amp; bus rental
                company, offering{" "}
                <strong className="font-bold text-[#03C35E]">
                  affordable
                </strong>{" "}
                and{" "}
                <strong className="font-bold text-[#03C35E]">
                  reliable
                </strong>{" "}
                travel solutions for every journey.
              </p>

              <p>
                From outstation trips, tempo travellers, mini buses,
                luxury cars to wedding, corporate events, family
                vacations and pilgrimage tours — we make every ride{" "}
                <strong className="font-bold text-black">
                  safe, comfortable
                </strong>{" "}
                and memorable.
              </p>

              <p>
                With 15+ offices across India including Delhi, Gurugram,
                Faridabad, Noida, Ghaziabad, Mumbai, Pune and more —
                we are always near you to serve better.
              </p>

              <p>
                Our mission is simple: to deliver the best travel
                experience at the best price with{" "}
                <strong className="font-bold text-[#03C35E]">
                  24x7 customer support
                </strong>{" "}
                and professional drivers.
              </p>
            </div>
          </div>

          {/* =====================================================
              RIGHT VIDEO AREA
          ====================================================== */}
          <div
            className="
              relative
              z-10
              w-full
              pt-2

              sm:pt-3
              lg:pt-0
            "
          >
            {/* =================================================
                YOUTUBE VIDEO
            ================================================== */}
            <div
              className="
                relative
                z-0
                ml-auto
                aspect-[1.65/1]
                w-full
                overflow-hidden
                rounded-[20px]
                shadow-[0_18px_50px_rgba(0,0,0,0.12)]
                sm:rounded-[24px]
                md:rounded-[26px]
                lg:w-[96%]
                xl:w-full
              "
            >
              <iframe
                src="https://www.youtube.com/embed/yrUUVpiBL_Y"
                title="Urban Cruise - Bus Rental Services"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  border-0
                "
                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  web-share
                "
                allowFullScreen
              />

              {/* VIDEO OVERLAY */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/15
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* =================================================
                24x7 SUPPORT CARD
            ================================================== */}
            <div
              className="
                relative
                z-20
                mt-[-38px]
                ml-3
                flex
                h-[118px]
                w-[155px]
                flex-col
                items-center
                justify-center
                rounded-[18px]
                bg-[#03C35E]
                px-3
                py-4
                text-center
                shadow-[0_14px_35px_rgba(3,195,94,0.28)]

                xs:h-[125px]
                xs:w-[160px]

                sm:absolute
                sm:bottom-[-5px]
                sm:left-[-16px]
                sm:ml-0
                sm:mt-0
                sm:h-[130px]
                sm:w-[165px]

                md:h-[140px]
                md:w-[175px]

                lg:left-[-24px]

                xl:left-[-28px]
              "
            >
              <div
                className="
                  mb-1.5
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  text-white

                  sm:mb-2
                  sm:h-10
                  sm:w-10
                "
              >
                <FaHeadset
                  className="
                    text-[27px]
                    sm:text-[30px]
                  "
                />
              </div>

              <h3
                className="
                  text-[19px]
                  font-extrabold
                  leading-none
                  text-white

                  sm:text-[22px]
                "
              >
                24x7
              </h3>

              <p
                className="
                  mt-1.5
                  text-[12px]
                  font-medium
                  leading-4
                  text-white/95

                  sm:mt-2
                  sm:text-sm
                  sm:leading-5
                "
              >
                Customer
                <br />
                Support
              </p>
            </div>

            {/* =================================================
                WIDE RANGE OF VEHICLES CARD
            ================================================== */}
            <div
              className="
                relative
                z-30
                mt-4
                ml-auto
                flex
                w-[94%]
                max-w-[540px]
                items-center
                gap-3
                rounded-[18px]
                border
                border-gray-100
                bg-white
                px-3
                py-3.5
                shadow-[0_12px_35px_rgba(0,0,0,0.10)]
                xs:gap-4
                xs:px-4
                xs:py-4
                sm:absolute
                sm:bottom-[-48px]
                sm:right-[3%]
                sm:mt-0
                sm:w-[82%]
                sm:max-w-[560px]
                sm:px-5
                sm:py-5
                md:right-[2%]
                lg:right-0
                lg:w-[80%]
                xl:w-[78%]
              "
            >
              {/* VEHICLE ICONS */}
              <div
                className="
                  flex
                  shrink-0
                  items-center
                  -space-x-2
                  xs:-space-x-2.5
                  sm:-space-x-2.5
                "
              >
                {fleet.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border-[2px]
                      border-white
                      bg-[#F5F6F7]
                      shadow-sm
                      xs:h-10
                      xs:w-10
                      sm:h-12
                      sm:w-12
                      sm:border-[3px]
                      md:h-14
                      md:w-14
                    "
                    title={label}
                  >
                    <Icon
                      className="
                        text-[14px]
                        text-[#263238]
                        xs:text-[16px]
                        sm:text-xl
                        md:text-[22px]
                      "
                    />
                  </div>
                ))}
              </div>

              {/* FLEET TEXT */}
              <div className="min-w-0">
                <h3
                  className="
                    text-[11px]
                    font-extrabold
                    leading-tight
                    text-[#142238]

                    xs:text-[12px]

                    sm:text-sm

                    md:text-base
                  "
                >
                  Wide Range of Vehicles
                </h3>

                <p
                  className="
                    mt-0.5
                    text-[8px]
                    leading-4
                    text-[#4B5563]

                    xs:text-[9px]

                    sm:mt-1
                    sm:text-xs

                    md:text-[13px]
                  "
                >
                  Cars, Tempo Travellers,
                  <br />
                  Mini Buses &amp; Luxury Buses
                </p>
              </div>
            </div>
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


