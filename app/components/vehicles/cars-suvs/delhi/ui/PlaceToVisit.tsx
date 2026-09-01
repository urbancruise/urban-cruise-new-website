"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const GREEN = "#03C35E";
const ORANGE = "#F7941E";

/* =========================================================
   DESTINATION DATA
========================================================= */

const destinations = [
  {
    src: "/images/vehiclerentalserviceinindia/IndiaGate.webp",
    alt: "India Gate Destination",
  },
  {
    src: "/images/vehiclerentalserviceinindia/Gurugram.webp",
    alt: "Gurugram Destination",
  },
  {
    src: "/images/vehiclerentalserviceinindia/Pune.webp",
    alt: "Pune Destination",
  },
];

/* =========================================================
   DESTINATION IMAGE
========================================================= */

function DestinationImage({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.94,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      whileHover={{
        scale: 1.025,
        transition: {
          duration: 0.3,
        },
      }}
      className={`
        absolute
        overflow-hidden
        rounded-[42px]
        border-[3px]
        border-white
        bg-gray-100
        shadow-[0_10px_35px_rgba(0,0,0,0.10)]
        ${className ?? ""}
      `}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="
          (max-width: 639px) 90vw,
          (max-width: 1023px) 60vw,
          40vw
        "
      />
      
      {/* BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />
    </motion.div>
  );
}

/* =========================================================
   DESTINATION COLLAGE
========================================================= */

function DestinationCollage() {
  return (
    <div
      className="
        relative
        mx-auto
        h-[430px]
        w-full
        max-w-[610px]
        sm:h-[475px]
        lg:h-[520px]
      "
    >
      {/* VENICE IMAGE - LOWEST Z-INDEX */}
      <DestinationImage
        src={destinations[0].src}
        alt={destinations[0].alt}
        priority
        className="
          left-[1%]
          top-0
          z-10

          h-[350px]
          w-[62%]

          rounded-[45px]

          sm:h-[400px]
          sm:w-[64%]

          lg:h-[435px]
          lg:w-[63%]
        "
      />

      {/* BEACH IMAGE - MIDDLE Z-INDEX */}
      <DestinationImage
        src={destinations[2].src}
        alt={destinations[2].alt}
        className="
          bottom-0
          left-[38%]
          z-20

          h-[215px]
          w-[50%]

          rounded-[42px]

          sm:h-[260px]
          sm:w-[51%]

          lg:h-[290px]
          lg:w-[50%]
        "
      />

      {/* TAJ MAHAL IMAGE - HIGHEST Z-INDEX */}
      <DestinationImage
        src={destinations[1].src}
        alt={destinations[1].alt}
        className="
          right-[1%]
          top-[68px]
          z-50

          h-[205px]
          w-[42%]

          rounded-[42px]

          sm:top-[72px]
          sm:h-[235px]
          sm:w-[42%]

          lg:top-[72px]
          lg:h-[250px]
          lg:w-[41%]
        "
      />
    </div>
  );
}

/* =========================================================
   CARD CONTENT (RIGHT SIDE)
========================================================= */

function CardContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      className="
        w-full
        max-w-[650px]
      "
    >
      {/* ===================================================
          CARD EYEBROW / TOP LABEL
      =================================================== */}

      <div
        className="
          mb-4
          flex
          items-center
          gap-2

          sm:mb-5
          sm:gap-3
        "
      >
        <span
          className="
            whitespace-nowrap
            text-[8px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-[#F7941E]

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
          We Recommend
        </span>
      </div>

      {/* ===================================================
          CARD HEADING - EVEN SMALLER
      =================================================== */}

      <h2
        className="
          text-[14px]
          font-extrabold
          leading-[1.05]
          tracking-[-0.04em]
          text-[#142236]

          min-[375px]:text-[15px]

          min-[430px]:text-[16px]

          sm:text-[17px]

          md:text-[19px]

          lg:text-[22px]

          xl:text-[25px]

          2xl:text-[28px]
        "
      >
        Beautiful{" "}
        <span className="text-[#188A31]">
          <br /> Destinations
        </span>
      </h2>

      {/* ===================================================
          CARD SUB-HEADING - EVEN SMALLER
      =================================================== */}

      <p
        className="
          mt-3
          font-serif
          text-[12px]
          italic
          leading-tight
          text-[#03C35E]

          min-[375px]:text-[13px]

          min-[430px]:text-[14px]

          sm:text-[15px]

          md:text-[16px]

          lg:text-[18px]

          xl:text-[20px]

          2xl:text-[22px]
        "
      >
        Every month, handpicked for you
      </p>

      {/* ===================================================
          CARD DESCRIPTION
      =================================================== */}

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
          We offer amazing destinations every month, handpicked for the best travel experience. Start your next adventure with us! Our experts uncover hidden gems, consider weather and festivals, and provide insider tips. Enjoy flexible itineraries, vetted stays, and 24/7 support. Join our community for exclusive deals and inspiration—your unforgettable journey awaits!
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   TOP HEADER SECTION
========================================================= */

function TopHeader() {
  return (
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
        border
        border-gray-800
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
            Discover Your Next Adventure
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
            text-[#142236]

            min-[375px]:text-[25px]

            min-[430px]:text-[27px]

            sm:text-[28px]

            md:text-[32px]

            lg:text-[40px]

            xl:text-[48px]

            2xl:text-[56px]
          "
        >
          EXPLORE.{" "}
          <span className="text-[#188A31]">
            <br /> DREAM. DISCOVER.
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
          Unforgettable journeys await you
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
            We take pride in delivering comfortable rides, on-time
            service and memorable journeys for every customer.
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
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PlaceToVisit() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white

        py-10

        sm:py-14

        md:py-16

        lg:py-20

        xl:py-24
      "
    >
      {/* ===================================================
          BACKGROUND GREEN GLOW - LEFT
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          -left-[180px]
          top-[15%]

          h-[400px]
          w-[400px]

          rounded-full

          bg-[#03C35E]/[0.035]

          blur-3xl

          sm:h-[500px]
          sm:w-[500px]
        "
      />

      {/* ===================================================
          BACKGROUND GREEN GLOW - RIGHT
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          -right-[180px]
          bottom-[5%]

          h-[400px]
          w-[400px]

          rounded-full

          bg-[#03C35E]/[0.035]

          blur-3xl

          sm:h-[500px]
          sm:w-[500px]
        "
      />

      {/* ===================================================
          MAIN CONTAINER
      =================================================== */}

      <div
        className="
          relative
          z-10
          border
          border-gray-800
          mx-auto

          flex
          w-full
          max-w-[1400px]

          flex-col

          px-5

          min-[400px]:px-6

          sm:px-8

          md:px-10

          lg:px-12

          xl:px-16
        "
      >
        {/* =================================================
            TOP HEADER SECTION
        ================================================= */}

        <TopHeader />

        {/* =================================================
            BOTTOM SECTION - IMAGE & CARD
        ================================================= */}

        <div
          className="
            flex
            w-full
            flex-col
            items-center

            lg:flex-row
            lg:items-start 
            border
            border-gray-800
          "
        >
          {/* LEFT SIDE - IMAGE COLLAGE */}
          <div
            className="
              flex
              w-full
              items-center
              justify-center
              border
              border-gray-800
              lg:w-1/2
              lg:justify-start
            "
          >
            <DestinationCollage />
          </div>

          {/* RIGHT SIDE - CARD CONTENT */}
          <div
            className="
              mt-8

              flex
              w-full
              items-center

              lg:mt-0
              lg:w-1/2
              lg:justify-end

              lg:pl-8
              border
              border-gray-800
              xl:pl-12
            "
          >
            <CardContent />
          </div>
        </div>
      </div>
    </section>
  );
}
