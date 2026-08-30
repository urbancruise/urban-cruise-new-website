/* eslint-disable react/no-unescaped-entities */
// components/home/ourtrustedpartner/DelhiOurTrustedPartner.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  {
    name: "TATA",
    logo: "/images/ourtrustedpartner/tata.png",
  },
  {
    name: "Infosys",
    logo: "/images/ourtrustedpartner/infosys.png",
  },
  {
    name: "Wipro",
    logo: "/images/ourtrustedpartner/wipro.png",
  },
  {
    name: "HDFC Bank",
    logo: "/images/ourtrustedpartner/hdfc.png",
  },
  {
    name: "ICICI Bank",
    logo: "/images/ourtrustedpartner/icici.png",
  },
  {
    name: "Mahindra",
    logo: "/images/ourtrustedpartner/mahindra.png",
  },
  {
    name: "Bajaj",
    logo: "/images/ourtrustedpartner/bajaj.png",
  },
  {
    name: "Adani",
    logo: "/images/ourtrustedpartner/adani.png",
  },
  {
    name: "LIC",
    logo: "/images/ourtrustedpartner/lic.png",
  },
  {
    name: "Maruti Suzuki",
    logo: "/images/ourtrustedpartner/maruti.png",
  },
  {
    name: "Asian Paints",
    logo: "/images/ourtrustedpartner/asian-paints.png",
  },
  {
    name: "Kotak",
    logo: "/images/ourtrustedpartner/kotak.png",
  },
];

/* =========================================================
   DESKTOP / TABLET COMPANY LOGO
========================================================= */

function CompanyLogo({
  company,
}: {
  company: (typeof companies)[number];
}) {
  return (
    <div
      className="
        flex
        h-[72px]
        w-[145px]
        min-w-[145px]
        shrink-0
        items-center
        justify-center
        px-3

        sm:h-[82px]
        sm:w-[170px]
        sm:min-w-[170px]
        sm:px-4

        md:h-[90px]
        md:w-[185px]
        md:min-w-[185px]

        lg:h-[100px]
        lg:w-[205px]
        lg:min-w-[205px]

        xl:h-[105px]
        xl:w-[220px]
        xl:min-w-[220px]

        2xl:h-[110px]
        2xl:w-[225px]
        2xl:min-w-[225px]
      "
    >
      <div
        className="
          relative
          flex
          h-[40px]
          w-[110px]
          items-center
          justify-center

          sm:h-[44px]
          sm:w-[125px]

          md:h-[48px]
          md:w-[140px]

          lg:h-[54px]
          lg:w-[150px]

          xl:h-[58px]
          xl:w-[160px]

          2xl:h-[62px]
          2xl:w-[170px]
        "
      >
        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          fill
          sizes="
            (max-width: 640px) 110px,
            (max-width: 768px) 125px,
            (max-width: 1024px) 140px,
            (max-width: 1280px) 150px,
            170px
          "
          className="
            object-contain
            p-1

            sm:p-1.5
            md:p-2
          "
        />
      </div>
    </div>
  );
}

/* =========================================================
   MOBILE COMPANY LOGO
========================================================= */

function MobileCompanyLogo({
  company,
}: {
  company: (typeof companies)[number];
}) {
  return (
    <div
      className="
        flex
        h-[68px]
        w-[125px]
        min-w-[125px]
        shrink-0
        items-center
        justify-center
        px-2

        min-[375px]:h-[72px]
        min-[375px]:w-[135px]
        min-[375px]:min-w-[135px]

        min-[430px]:h-[76px]
        min-[430px]:w-[145px]
        min-[430px]:min-w-[145px]
      "
    >
      <div
        className="
          relative
          flex
          h-[34px]
          w-[92px]
          items-center
          justify-center

          min-[375px]:h-[37px]
          min-[375px]:w-[102px]

          min-[430px]:h-[40px]
          min-[430px]:w-[112px]
        "
      >
        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          fill
          sizes="
            (max-width: 374px) 92px,
            (max-width: 429px) 102px,
            112px
          "
          className="
            object-contain
            p-1
          "
        />
      </div>
    </div>
  );
}

/* =========================================================
   DESKTOP / TABLET SLIDER ROW
========================================================= */

function DesktopSliderRow({
  items,
  reverse = false,
}: {
  items: typeof companies;
  reverse?: boolean;
}) {
  /*
    Duplicate the logos for a seamless continuous loop.
  */
  const sliderItems = [...items, ...items];

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex w-max"
        initial={{
          x: reverse ? "-50%" : "0%",
        }}
        animate={{
          x: reverse ? "0%" : "-50%",
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        {sliderItems.map((company, index) => (
          <CompanyLogo
            key={`${company.name}-${index}`}
            company={company}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* =========================================================
   MOBILE SLIDER ROW
========================================================= */

function MobileSliderRow({
  items,
  reverse = false,
}: {
  items: typeof companies;
  reverse?: boolean;
}) {
  const sliderItems = [...items, ...items];

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex w-max"
        initial={{
          x: reverse ? "-50%" : "0%",
        }}
        animate={{
          x: reverse ? "0%" : "-50%",
        }}
        transition={{
          x: {
            duration: 24,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        {sliderItems.map((company, index) => (
          <MobileCompanyLogo
            key={`${company.name}-${index}`}
            company={company}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function DelhiOurTrustedPartner() {
  const rowOne = companies.slice(0, 6);
  const rowTwo = companies.slice(6, 12);

  return (
    <section
      className="
        relative
        w-full
        max-w-full
        overflow-hidden
        bg-white

        py-8

        min-[375px]:py-9
        min-[430px]:py-10

        sm:py-12
        md:py-14
        lg:py-16
        xl:py-20
        2xl:py-24
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft Green Glow */}

        <div
          className="
            absolute
            left-1/2
            top-16
            h-[180px]
            w-[320px]
            -translate-x-1/2
            rounded-full
            bg-[#087F35]/[0.025]
            blur-3xl

            sm:top-20
            sm:h-[220px]
            sm:w-[420px]

            md:h-[260px]
            md:w-[520px]

            lg:h-[300px]
            lg:w-[600px]
          "
        />

        {/* Skyline */}

        <div
          className="
            absolute
            bottom-[190px]
            left-0
            h-[90px]
            w-full
            bg-contain
            bg-bottom
            bg-no-repeat
            opacity-[0.10]

            sm:bottom-[210px]
            sm:h-[110px]

            md:bottom-[230px]
            md:h-[130px]

            lg:bottom-[260px]
            lg:h-[170px]
          "
          style={{
            backgroundImage:
              "url('/images/trusted-partners/india-skyline.webp')",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          overflow-hidden

          px-3

          min-[375px]:px-4
          min-[430px]:px-5

          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
          2xl:px-16
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            mb-7
            grid
            w-full
            items-center
            gap-5
            overflow-hidden
            rounded-lg
            bg-cover
            bg-center
            bg-no-repeat
            p-5

            min-[375px]:mb-8
            min-[375px]:gap-6
            min-[375px]:p-6

            min-[430px]:mb-9
            min-[430px]:gap-7
            min-[430px]:p-7

            sm:mb-10
            sm:gap-8
            sm:p-8

            md:mb-12
            md:gap-9

            lg:mb-14
            lg:grid-cols-[1fr_1fr]
            lg:gap-10

            xl:mb-16
            xl:p-10

            2xl:mb-20
            2xl:p-12
          "
          style={{
            backgroundImage:
              "url('/images/ourtrustedpartner/1.png')",
          }}
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="w-full max-w-[720px] min-w-0 text-left">
            {/* EYEBROW */}

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
                Our Trusted Partners
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

            {/* MAIN HEADING */}

            <h2
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
              Trusted by{" "}
              <span className="text-[#188A31]">
                <br />
                100+ Companies
              </span>
            </h2>

            {/* SUB HEADING */}

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
              India's most trusted travel partner
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
                We are proud to be the preferred travel partner for
                leading businesses across India. Our commitment to
                excellence and reliability has earned us the trust of
                over 100 companies nationwide.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

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

        {/* =====================================================
            COMPANY LOGO SLIDER
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1140px]
            overflow-hidden
            rounded-[16px]
            bg-white/95
            shadow-[0_8px_30px_rgba(0,0,0,0.07)]
            backdrop-blur-sm

            min-[375px]:rounded-[18px]

            sm:rounded-[20px]

            lg:rounded-[24px]
          "
        >
          {/* =================================================
              LEFT FADE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-30
              h-full
              w-5
              bg-gradient-to-r
              from-white
              to-transparent

              min-[375px]:w-7

              min-[430px]:w-8

              sm:w-10

              md:w-12

              lg:w-16
            "
          />

          {/* =================================================
              RIGHT FADE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-30
              h-full
              w-5
              bg-gradient-to-l
              from-white
              to-transparent

              min-[375px]:w-7

              min-[430px]:w-8

              sm:w-10

              md:w-12

              lg:w-16
            "
          />

          {/* =================================================
              DESKTOP / TABLET
          ================================================= */}

          <div className="hidden md:block">
            {/* ROW 1 */}

            <DesktopSliderRow items={rowOne} />

            {/* DIVIDER */}

            <div className="h-px w-full bg-[#e5e9e5]" />

            {/* ROW 2 */}

            <DesktopSliderRow items={rowTwo} reverse />
          </div>

          {/* =================================================
              MOBILE
          ================================================= */}

          <div className="block md:hidden">
            {/* ROW 1 */}

            <MobileSliderRow items={rowOne} />

            {/* DIVIDER */}

            <div className="h-px w-full bg-[#e5e9e5]" />

            {/* ROW 2 */}

            <MobileSliderRow items={rowTwo} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}

