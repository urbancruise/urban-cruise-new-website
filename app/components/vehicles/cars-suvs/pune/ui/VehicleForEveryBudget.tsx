// app/components/vehicles/cars-suvs/pune/ui/VehicleForEveryBudget.tsx
"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { FaHandHoldingUsd, FaStar } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { motion } from "framer-motion";

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
    description: "New & Modified Vehicles with Best-in-class Amenities",
    icon: "/images/vehicleforeverybudget/3.webp",
    color: GREEN,
  },
  {
    title: "ROYAL VIP",
    description: "Ultra Luxury Vehicles with Custom Designed Amenities...",
    icon: "/images/vehicleforeverybudget/4.webp",
    color: ORANGE,
  },
];

// TRUST BADGES
const trustBadges = [
  {
    label: "Transparent",
    label2: "Pricing",
    position: "left" as const,
    icon: <FaHandHoldingUsd className="text-black text-xl" />,
  },
  {
    label: "Affordable",
    label2: "pricing",
    position: "bottom" as const,
    icon: <FaStar className="text-yellow-500 text-xl" />,
  },
  {
    label: "Trusted &",
    label2: "Reliable",
    position: "right" as const,
    icon: <VscWorkspaceTrusted className="text-black text-xl" />,
  },
];

// TRUST BADGE COMPONENT WITH TEXT STABLE
function TrustBadge({
  icon,
  label,
  label2,
  position,
  delay = 0,
}: {
  icon: ReactNode;
  label: string;
  label2: string;
  position: "left" | "bottom" | "right";
  delay?: number;
}) {
  const positionClasses = {
    left: ` left-[-6px] top-[38%] min-[375px]:left-[-8px] min-[430px]:left-[-12px] sm:left-[-16px] sm:top-[36%] md:left-[-18px] lg:left-[-18px] xl:left-[-24px] 2xl:left-[100px] 2xl:top-[45%]
    `,
    bottom: ` bottom-[2%] left-1/2 -translate-x-1/2 sm:bottom-[4%] md:bottom-[3%] lg:bottom-[2%] xl:bottom-[6%] 2xl:bottom-[12%]
    `,
    right: ` right-[-6px] top-[42%] min-[375px]:right-[-8px] min-[430px]:right-[-12px] sm:right-[-16px] sm:top-[40%] md:right-[-18px] lg:right-[-18px] xl:right-[-24px] 2xl:right-[180px] 2xl:top-[10%]
    `,
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.6,
      y: position === "bottom" ? 40 : position === "left" ? -20 : 20,
      x: position === "left" ? -30 : position === "right" ? 30 : 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        delay: delay + 0.3,
      },
    },
    float: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay + 0.3,
      },
    },
    hover: {
      scale: 1.12,
      y: position === "bottom" ? -12 : -8,
      x: position === "left" ? -4 : position === "right" ? 4 : 0,
      boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  };

  const contentVariants = {
    hover: {},
  };

  return (
    <motion.div
      className={` absolute z-30 flex items-center gap-2 rounded-xl bg-white px-2.5 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.18)] cursor-default min-[375px]:gap-2.5 min-[375px]:px-3 min-[430px]:px-3.5 sm:gap-3 sm:px-4 sm:py-2.5 lg:px-3.5 lg:py-2 xl:gap-2 xl:px-4 xl:py-2.5 2xl:px-2.5 2xl:py-3
        ${positionClasses[position]}
      `}
      variants={containerVariants}
      initial="hidden"
      animate={["visible", "float"]}
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div
        className="flex items-center gap-2"
        variants={contentVariants}
        style={{ transform: "none" }}
      >
        <div
          className=" flex h-6 w-6 shrink-0 items-center justify-center min-[430px]:h-7 min-[430px]:w-7 sm:h-8 sm:w-8 lg:h-7 lg:w-7 xl:h-8 xl:w-8 2xl:h-6 2xl:w-6
          "
        >
          {icon}
        </div>

        <div
          className=" whitespace-nowrap text-left text-[9px] font-bold leading-[1.2] text-black min-[375px]:text-[9.5px] min-[430px]:text-[10px] sm:text-[11px] lg:text-[10px] xl:text-[11px] 2xl:text-[11.5px]
          "
        >
          <div>{label}</div>
          <div>{label2}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// MAIN COMPONENT
export default function VehicleForEveryBudget() {
  return (
    <section
      className=" relative w-full overflow-hidden bg-white py-10 min-[430px]:py-11 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24
      "
    >
      <div
        className=" pointer-events-none absolute inset-x-0 top-0 z-[20] hidden lg:block lg:h-[12%] xl:h-[11%] 2xl:h-[10%] bg-gradient-to-b from-white via-white/60 to-transparent
        "
      />

      <div
        className=" relative z-10 mx-auto w-full max-w-[1440px] px-4 min-[430px]:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16
        "
      >
        <motion.div
          className=" mb-9 grid w-full items-center gap-7 min-[375px]:mb-10 min-[375px]:gap-8 min-[430px]:mb-10 min-[430px]:gap-8 sm:mb-12 sm:gap-9 md:mb-14 md:gap-10 lg:mb-16 lg:grid-cols-[1fr_1fr] lg:gap-6 xl:mb-18 xl:grid-cols-[1fr_1fr] xl:gap-8 2xl:mb-20 2xl:gap-10
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="
              w-full
              max-w-[720px]
              text-left
            "
          >
            <motion.div
              className=" mb-3 flex w-full items-center justify-start gap-2 min-[430px]:mb-3.5 min-[430px]:gap-2.5 sm:mb-4 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4
              "
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span
                className=" block h-px w-5 shrink-0 bg-gray-400/60 min-[430px]:w-6 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14
                "
              />

              <span
                className=" whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.14em] text-[#03C35E] min-[375px]:text-[8.5px] min-[430px]:text-[9px] min-[430px]:tracking-[0.16em] sm:text-[9.5px] sm:tracking-[0.18em] md:text-[10px] md:tracking-[0.2em] lg:text-[11px] lg:tracking-[0.23em] xl:text-xs
                "
              >
                We Offer Best Services
              </span>

              <span
                className=" block h-px w-5 shrink-0 bg-gray-400/60 min-[430px]:w-6 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14
                "
              />
            </motion.div>

            <motion.h2
              className=" text-[24px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#142236] min-[375px]:text-[25px] min-[430px]:text-[27px sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px]
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              A VEHICLE FOR <span className="text-[#188A31]"> EVERY BUDGET </span>
            </motion.h2>

            <motion.p
              className=" mt-3 font-serif text-[19px] italic leading-tight text-[#03C35E] min-[375px]:text-[20px] min-[430px]:text-[21px] sm:text-[22px] md:text-[25px] lg:text-[27px] xl:text-[30px] 2xl:text-[32px]
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Vehicles For Every Journey, Every Budget
            </motion.p>

            <motion.div
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p>
                From economical rides to premium and luxury vehicles, Urban
                Cruise offers a wide range of vehicles to match your travel
                needs, comfort, and budget.
              </p>
            </motion.div>
          </div>

          <div
            className="
              relative
              flex
              w-full
              items-center
              justify-center

              lg:justify-end

              lg:overflow-visible
            "
          >
            <motion.div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                z-0

                h-[270px]
                w-[270px]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full
                blur-3xl

                min-[375px]:h-[300px]
                min-[375px]:w-[300px]

                min-[430px]:h-[330px]
                min-[430px]:w-[330px]

                sm:h-[370px]
                sm:w-[370px]

                md:h-[430px]
                md:w-[430px]

                lg:h-[450px]
                lg:w-[450px]

                xl:h-[520px]
                xl:w-[520px]

                2xl:h-[590px]
                2xl:w-[590px]
              "
              style={{
                background:
                  "radial-gradient(circle, rgba(3,195,94,0.38) 0%, rgba(3,195,94,0.20) 38%, rgba(3,195,94,0.08) 58%, rgba(3,195,94,0) 72%)",
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.2,
              }}
            />

            <motion.div
              className="
                relative
                z-10
                w-[340px]
                max-w-none
                shrink-0

                min-[375px]:w-[360px]

                min-[430px]:w-[390px]

                sm:w-[440px]

                md:w-[500px]

                lg:w-[540px]

                xl:w-[620px]

                2xl:w-[700px]

                lg:-mr-[40px]

                xl:-mr-[55px]

                2xl:-mr-[70px]
              "
              initial={{ scale: 0.7, opacity: 0, x: 50 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 100,
                delay: 0.3,
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                  },
                }}
              >
                <Image
                  src="/images/vehicleforeverybudget/5.webp"
                  alt="Urban Cruise Vehicles"
                  width={700}
                  height={475}
                  priority
                  className="
                    block
                    h-auto
                    w-full
                    object-contain
                  "
                />
              </motion.div>

              {trustBadges.map((badge, index) => (
                <TrustBadge
                  key={badge.label}
                  icon={badge.icon}
                  label={badge.label}
                  label2={badge.label2}
                  position={badge.position}
                  delay={index * 0.3}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* =========================================================
            CATEGORIES GRID - UPDATED ICON SIZES
        ========================================================= */}
        <motion.div
          className="
            grid
            w-full

            grid-cols-1
            gap-y-8

            min-[375px]:gap-y-9

            min-[430px]:gap-y-10

            sm:grid-cols-2
            sm:gap-x-5
            sm:gap-y-9

            md:grid-cols-2
            md:gap-x-6
            md:gap-y-10

            lg:grid-cols-4
            lg:gap-x-6
            lg:gap-y-0

            xl:grid-cols-4
            xl:gap-x-7

            2xl:grid-cols-4
            2xl:gap-x-9
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="
                group
                relative
                flex
                w-full
                flex-col
                items-center

                overflow-visible

                rounded-[1.5rem]
                bg-white

                px-4
                pb-5
                pt-14

                text-center

                shadow-[0_8px_30px_rgba(0,0,0,0.06)]

                transition-all
                duration-300
                ease-out

                hover:-translate-y-2
                hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]

                min-h-[210px]

                min-[430px]:min-h-[220px]
                min-[430px]:px-5

                sm:min-h-[225px]
                sm:px-5
                sm:pb-6
                sm:pt-14

                md:min-h-[235px]
                md:px-5
                md:pb-6
                md:pt-14

                lg:min-h-[235px]
                lg:px-5
                lg:pb-6
                lg:pt-14

                xl:min-h-[240px]
                xl:px-6
                xl:pb-6

                2xl:min-h-[250px]
                2xl:px-7
                2xl:pb-7
              "
              style={{
                borderTop: `4px solid ${category.color}`,
              }}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.6 + index * 0.1,
                duration: 0.5,
                type: "spring",
                damping: 15,
                stiffness: 100,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                },
              }}
            >
              {/* ICON CIRCLE - UPDATED SIZES */}
              <motion.div
                className="
                  absolute
                  left-1/2
                  top-0

                  flex
                  items-center
                  justify-center

                  -translate-x-1/2
                  -translate-y-1/2

                  rounded-full
                  border-[3px]
                  bg-white

                  transition-all
                  duration-300
                  ease-out

                  group-hover:scale-110

                  /* Circle container sizes - INCREASED */
                  h-[74px]
                  w-[74px]

                  min-[375px]:h-[80px]
                  min-[375px]:w-[80px]

                  min-[430px]:h-[88px]
                  min-[430px]:w-[88px]

                  sm:h-[96px]
                  sm:w-[96px]

                  md:h-[104px]
                  md:w-[104px]
                  md:border-[4px]

                  lg:h-[92px]
                  lg:w-[92px]

                  xl:h-[98px]
                  xl:w-[98px]

                  2xl:h-[112px]
                  2xl:w-[112px]
                "
                style={{
                  borderColor: category.color,
                  boxShadow: `0 6px 18px ${category.color}22`,
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
              >
                <Image
                  src={category.icon}
                  alt={`${category.title} vehicle`}
                  width={100}
                  height={100}
                  className="
                    object-contain

                    transition-transform
                    duration-500
                    ease-out

                    group-hover:scale-110

                    /* ICON SIZES - INCREASED for mobile & tablet */
                    h-[50px]
                    w-[50px]

                    min-[375px]:h-[56px]
                    min-[375px]:w-[56px]

                    min-[430px]:h-[64px]
                    min-[430px]:w-[64px]

                    sm:h-[72px]
                    sm:w-[72px]

                    md:h-[78px]
                    md:w-[78px]

                    lg:h-[62px]
                    lg:w-[62px]

                    xl:h-[68px]
                    xl:w-[68px]

                    2xl:h-[90px]
                    2xl:w-[90px]
                  "
                />
              </motion.div>

              <h3
                className="
                  mt-5
                  mb-2

                  text-[14px]
                  font-black
                  uppercase
                  leading-tight
                  tracking-[-0.02em]

                  min-[430px]:text-[15px]

                  sm:text-[16px]

                  md:text-[17px]

                  lg:text-[18px]

                  xl:text-[20px]

                  2xl:text-[22px]
                "
                style={{
                  color: category.color,
                }}
              >
                {category.title}
              </h3>

              <p
                className="
                  mx-auto
                  max-w-[260px]

                  text-[11px]
                  font-medium
                  leading-[1.5]
                  text-[#4B5563]

                  min-[375px]:max-w-[280px]

                  min-[430px]:max-w-[290px]
                  min-[430px]:text-[12px]

                  sm:max-w-[300px]
                  sm:text-[12px]

                  md:max-w-[310px]
                  md:text-[12px]

                  lg:max-w-[260px]
                  lg:text-[13px]

                  xl:max-w-[280px]
                  xl:text-[14px]

                  2xl:max-w-[300px]
                  2xl:text-[15px]
                "
              >
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div
          className="
            relative
            h-3

            min-[375px]:h-4

            min-[430px]:h-5

            sm:h-6

            md:h-7

            lg:h-9

            xl:h-12

            2xl:h-16
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-full

              bg-gradient-to-b
              from-transparent
              to-white
            "
          />
        </div>
      </div>
    </section>
  );
}
