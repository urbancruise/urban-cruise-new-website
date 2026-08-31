// app/components/vehicles/cars-suvs/pune/ui/Hero.tsx
"use client";

import QuickCallForm from "../../../../shared/QuickCallForm";

export default function Hero() {
  return (
    <section className="relative w-full bg-white">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          aspect-[3/4]
          xs:aspect-[4/5]
          sm:aspect-[16/12]
          md:aspect-[16/10]
          lg:aspect-[16/9]
          xl:aspect-[21/10]
        "
      >
        {/* =================================================
            BACKGROUND IMAGE
        ================================================== */}
        <img
          src="/images/hero/herobg.webp"
          alt="Premium car rental in Delhi"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        />

        {/* =================================================
            HERO → WHITE FADE
        ================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-10
            h-[30%]
            bg-gradient-to-b
            from-transparent
            via-white/70
            to-white
            sm:h-[28%]
            md:h-[26%]
            lg:h-[24%]
            xl:h-[22%]
          "
        />

        {/* =================================================
            TEXT CONTENT
        ================================================== */}
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            z-20
            w-full
            max-w-6xl
            mx-auto
            flex
            flex-col
            items-center
            text-center
            px-4
            sm:px-6
            lg:px-8
            top-[18%]
            xs:top-[19%]
            sm:top-[21%]
            md:top-[20%]
            lg:top-[19%]
            xl:top-[20%]
          "
        >
          {/* =================================================
              SMALL TITLE
          ================================================== */}
          <div
            className="
              flex
              items-center
              justify-center
              gap-1.5
              xs:gap-2
              sm:gap-2.5
              md:gap-3
              mb-1
              xs:mb-1.5
              sm:mb-2
              md:mb-2.5
            "
          >
            {/* LEFT LINE */}
            <span
              className="
                hidden
                sm:block
                w-6
                md:w-8
                lg:w-10
                h-px
                bg-gray-400/60
              "
            />

            {/* TITLE */}
            <span
              className="
                text-[8px]
                xs:text-[9px]
                sm:text-[9px]
                md:text-[10px]
                lg:text-[11px]
                xl:text-[15px]
                tracking-[0.15em]
                xs:tracking-[0.17em]
                sm:tracking-[0.2em]
                md:tracking-[0.22em]
                lg:tracking-[0.25em]
                xl:tracking-[0.28em]
                font-bold
                text-[#03C35E]
                uppercase
                whitespace-nowrap
              "
            >
              Urban Cruise bus & car rental
            </span>

            {/* RIGHT LINE */}
            <span
              className="
                hidden
                sm:block
                w-6
                md:w-8
                lg:w-10
                h-px
                bg-gray-400/60
              "
            />
          </div>

          {/* =================================================
              MAIN HEADING
          ================================================== */}
          <h1
            className="
              max-w-4xl
              xs:max-w-4xl
              sm:max-w-5xl
              md:max-w-5xl
              lg:max-w-6xl
              xl:max-w-6xl
              text-center
              text-[24px]
              xs:text-[26px]
              sm:text-[28px]
              md:text-[32px]
              lg:text-[42px]
              xl:text-[50px]
              2xl:text-[58px]
              leading-[1.06]
              xs:leading-[1.04]
              sm:leading-[1.02]
              md:leading-[1]
              lg:leading-[0.98]
              font-extrabold
              tracking-[-0.02em]
              xs:tracking-[-0.025em]
              sm:tracking-[-0.03em]
              md:tracking-[-0.035em]
              text-[#142236]
              px-2
            "
          >
            No. 1 Vehicle Rental service
            <br />
            <span className="text-[#03C35E]">Provider company in india</span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}
          <p
            className="
              max-w-md
              xs:max-w-lg
              sm:max-w-xl
              md:max-w-2xl
              mt-1.5
              xs:mt-2
              sm:mt-1.5
              md:mt-2
              lg:mt-2.5
              px-3
              xs:px-4
              text-[10px]
              xs:text-[11px]
              sm:text-[11px]
              md:text-xs
              lg:text-sm
              xl:text-base
              leading-relaxed
              font-medium
              text-gray-600
            "
          >
            Urban Cruise offers reliable car, luxury, tempo traveller, and bus
            rentals with professional drivers, transparent pricing, and 24/7
            support across India.
          </p>
        </div>

        {/* =================================================
            VEHICLES
        ================================================== */}
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            z-20

            w-full

            flex
            items-center
            justify-center

            px-2
            sm:px-4

            top-[52%]
            xs:top-[51%]
            sm:top-[30%]
            md:top-[26%]
            lg:top-[36%]
            xl:top-[34%]
          "
        >
          <img
            src="/images/hero/3 images.webp"
            alt="Premium cars and buses available for rental in Delhi"
            className="
              w-full
              h-auto
              object-contain
              mx-auto

              max-w-[400px]
              xs:max-w-[400px]
              sm:max-w-[560px]
              md:max-w-[700px]
              lg:max-w-[820px]
              xl:max-w-[960px]
              2xl:max-w-[1080px]

              scale-[1.15]
              xs:scale-[1.15]
              sm:scale-[1.12]
              md:scale-[1.12]
              lg:scale-[1.1]
              xl:scale-[1.1]
              2xl:scale-[1.08]
            "
          />
        </div>
      </div>

      {/* =====================================================
          QUICK CALL FORM
      ====================================================== */}
      <div
        className="
    relative
    z-30

    -mt-5
    xs:-mt-5
    sm:-mt-6
    md:-mt-10
    lg:-mt-24
    xl:-mt-18
  "
      >
        <div
          className="
      w-full
      max-w-[700px]
      mx-auto
      px-3
      xs:px-4
      sm:px-5
      md:px-6
    "
        >
          <QuickCallForm />
        </div>
      </div>

      {/* =====================================================
          SMALL GAP BEFORE DELHI ABOUT
      ====================================================== */}
      <div
        className="
          h-6
          xs:h-7
          sm:h-8
          md:h-10
          lg:h-12
          xl:h-14
          bg-white
        "
      />
    </section>
  );
}

