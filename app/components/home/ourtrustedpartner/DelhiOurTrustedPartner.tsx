// components/home/ourtrustedpartner/DelhiOurTrustedPartner.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const companies = [
  {
    name: "TATA",
    logo: "/images/company-logos/tata.webp",
  },
  {
    name: "Infosys",
    logo: "/images/company-logos/infosys.webp",
  },
  {
    name: "Wipro",
    logo: "/images/company-logos/wipro.webp",
  },
  {
    name: "HDFC Bank",
    logo: "/images/company-logos/hdfc.webp",
  },
  {
    name: "ICICI Bank",
    logo: "/images/company-logos/icici.webp",
  },
  {
    name: "Mahindra",
    logo: "/images/company-logos/mahindra.webp",
  },
  {
    name: "Bajaj",
    logo: "/images/company-logos/bajaj.webp",
  },
  {
    name: "Adani",
    logo: "/images/company-logos/adani.webp",
  },
  {
    name: "LIC",
    logo: "/images/company-logos/lic.webp",
  },
  {
    name: "Maruti Suzuki",
    logo: "/images/company-logos/maruti.webp",
  },
  {
    name: "Asian Paints",
    logo: "/images/company-logos/asian-paints.webp",
  },
  {
    name: "Kotak",
    logo: "/images/company-logos/kotak.webp",
  },
];

function CompanyLogo({
  company,
  index,
}: {
  company: (typeof companies)[number];
  index: number;
}) {
  return (
    <div
      className={`
        flex
        h-[85px]
        items-center
        justify-center
        px-5
        sm:h-[95px]
        sm:px-7
        lg:h-[105px]
        lg:px-8
        ${index % 6 !== 0 ? "border-l border-[#e5e9e5]" : ""}
      `}
    >
      <div className="relative h-[45px] w-[130px] sm:h-[50px] sm:w-[145px] lg:h-[55px] lg:w-[155px]">
        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          fill
          sizes="155px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function DelhiOurTrustedPartner() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-14 md:py-16 lg:py-20">
      
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">

        {/* Soft green glow */}
        <div className="absolute left-1/2 top-20 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#087F35]/[0.025] blur-3xl" />

        {/* Skyline */}
        <div
          className="
            absolute
            bottom-[260px]
            left-0
            h-[170px]
            w-full
            bg-contain
            bg-bottom
            bg-no-repeat
            opacity-[0.12]
          "
          style={{
            backgroundImage:
              "url('/images/trusted-partners/india-skyline.webp')",
          }}
        />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-3 min-[375px]:px-4 min-[430px]:px-5 sm:px-6 md:px-8 lg:px-9 xl:px-10 2xl:px-12">

        {/* ================= HEADER - SAME AS TESTIMONIALS ================= */}
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
            bg-cover
    bg-center
    bg-no-repeat
    rounded-lg
    p-8
          "
          style={{
    backgroundImage: `url('/images/ourtrustedpartner/1.png')`,
  }}
        >
          {/* LEFT CONTENT */}
          <div className="w-full max-w-[720px] text-left">
            {/* EYEBROW / BADGE */}
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
                Our Trusted Partners
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
              Trusted by{" "}
              <span className="text-[#188A31]">
                <br /> 100+ Companies
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
              India's most trusted travel partner
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
                We are proud to be the preferred travel partner for
                leading businesses across India. Our commitment to
                excellence and reliability has earned us the trust of
                over 100 companies nationwide.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - EMPTY (LIKE TESTIMONIALS) */}
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

        {/* ================= COMPANY LOGOS ================= */}
        <div
          className="
            relative
            mx-auto
            max-w-[1140px]
            overflow-hidden
            rounded-[24px]
            border
            border-[#e8ece8]
            bg-white/95
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            backdrop-blur-sm
          "
        >

          {/* Desktop grid */}
          <div className="hidden grid-cols-6 md:grid">

            {companies.map((company, index) => (
              <CompanyLogo
                key={company.name}
                company={company}
                index={index}
              />
            ))}

          </div>

          {/* Mobile grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden">

            {companies.map((company, index) => (
              <div
                key={company.name}
                className={`
                  flex
                  h-[90px]
                  items-center
                  justify-center
                  border-b
                  border-[#e5e9e5]
                  px-5
                  ${
                    index % 2 !== 0
                      ? "border-l"
                      : ""
                  }
                `}
              >
                <div className="relative h-[45px] w-[125px]">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    sizes="125px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}