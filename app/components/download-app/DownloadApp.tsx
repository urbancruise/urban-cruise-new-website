"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaCalendarCheck,
  FaMapPin,
  FaFileInvoice,
  FaShieldAlt,
  FaDownload,
  FaStar,
  FaUsers,
  FaWifi,
  FaUserCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { GiHamburgerMenu, GiNetworkBars } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { CiBatteryFull } from "react-icons/ci";
import { IoBriefcase, IoHome, IoLocationSharp } from "react-icons/io5";
import { BiTrip } from "react-icons/bi";

const features = [
  {
    icon: FaCalendarCheck,
    title: "Easy Booking",
    description: "Book in just a few taps",
  },
  {
    icon: FaMapPin,
    title: "Live Tracking",
    description: "Track your ride in real-time",
  },
  {
    icon: FaFileInvoice,
    title: "Smart Invoicing",
    description: "Get invoices instantly",
  },
  {
    icon: FaShieldAlt,
    title: "Safe & Trusted",
    description: "Verified drivers for your safety",
  },
];

const stats = [
  { icon: FaDownload, value: "10K+", label: "Downloads" },
  { icon: FaStar, value: "4.8", label: "Average Rating" },
  { icon: FaUsers, value: "10K+", label: "Happy Users" },
];

const vehicleCards = [
  {
    title: "Luxury Car",
    subtitle: "Mercedes, BMW...",
    image: "/images/downloadapp/luxurycar.png",
  },
  {
    title: "Force Urbania",
    subtitle: "9 to 17 Seater",
    image: "/images/downloadapp/forceurbania.png",
  },
  {
    title: "Luxury Bus",
    subtitle: "Volvo, Benz...",
    image: "/images/downloadapp/luxuarybus.png",
  },
];

/* =========================================================
   SCROLL REVEAL
========================================================= */

function Reveal({
  children,
  delay = 0,
  className = "",
  y = 25,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : `translateY(${y}px)`,
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   PHONE MOCKUP
========================================================= */

function PhoneMockup() {
  return (
    <Reveal
      delay={0}
      y={40}
      className="
        relative
        z-20
        mx-auto
        w-[245px]
        min-[375px]:w-[260px]
        min-[430px]:w-[275px]
        sm:w-[290px]
        md:w-[310px]
        lg:w-[315px]
        xl:w-[335px]
        2xl:w-[350px]
      "
    >
      <div className="relative rotate-[5deg]">
        {/* PHONE BODY */}
        <div
          className="
            relative
            rounded-[42px]
            border-[7px]
            border-[#111]
            bg-[#111]
            p-[1.5px]
            shadow-[0_30px_70px_rgba(0,0,0,0.25)]
            sm:rounded-[46px]
            sm:border-[8px]
          "
        >
          {/* SCREEN */}
          <div className="relative overflow-hidden rounded-[34px] bg-white sm:rounded-[38px]">
            {/* STATUS BAR */}
            <div
              className="
                flex
                h-10
                items-center
                justify-between
                px-5
                pt-1
                text-[9px]
                text-gray-700
                sm:h-12
                sm:px-6
                sm:text-[10px]
              "
            >
              <span>9:41</span>

              <div
                className="
                  absolute
                  left-1/2
                  top-2
                  h-5
                  w-16
                  -translate-x-1/2
                  rounded-full
                  bg-black
                  sm:h-6
                  sm:w-20
                "
              />

              <div className="flex items-center gap-1">
                <GiNetworkBars />
                <FaWifi />
                <CiBatteryFull />
              </div>
            </div>

            {/* APP HEADER */}
            <div className="flex items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3">
              <div className="text-base text-gray-300 sm:text-lg">
                <GiHamburgerMenu />
              </div>

              <div className="flex-1 px-3 text-[11px] font-semibold text-[#17202b] sm:px-4 sm:text-sm">
                Hello,{" "}
                <span className="text-[#188A31]">DevPankajil</span>
              </div>

              <div className="text-base text-gray-700 sm:text-lg">
                <IoIosNotifications />
              </div>
            </div>

            {/* LOCATION CARD */}
            <div className="mx-3 rounded-2xl bg-white p-3 shadow-[0_5px_25px_rgba(0,0,0,0.10)] sm:mx-4 sm:p-4">
              <p className="mb-2.5 text-[10px] font-semibold text-gray-700 sm:mb-3 sm:text-[11px]">
                Where are you going?
              </p>

              <div className="relative space-y-2">
                <div className="absolute left-[5px] top-4 h-7 border-l border-dashed border-gray-300" />

                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="text-[#188A31]">
                    <IoLocationSharp />
                  </span>

                  <div className="flex-1 rounded-lg border border-gray-100 px-2.5 py-1.5 text-[8px] text-gray-400 sm:px-3 sm:py-2 sm:text-[9px]">
                    Current Location
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="text-red-500">
                    <IoLocationSharp />
                  </span>

                  <div className="flex-1 rounded-lg border border-gray-100 px-2.5 py-1.5 text-[8px] text-gray-400 sm:px-3 sm:py-2 sm:text-[9px]">
                    Destination
                  </div>
                </div>
              </div>
            </div>

            {/* QUICK BOOK */}
            <div className="px-3 pt-4 sm:px-4 sm:pt-5">
              <div className="mb-2.5 flex items-center justify-between sm:mb-3">
                <h3 className="text-xs font-bold text-[#17202b] sm:text-sm">
                  Quick Book
                </h3>

                <span className="text-[9px] font-semibold text-[#188A31] sm:text-[10px]">
                  View All
                </span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                {vehicleCards.map((vehicle) => (
                  <div
                    key={vehicle.title}
                    className="
                      min-w-0
                      rounded-xl
                      border
                      border-gray-100
                      bg-white
                      p-1.5
                      shadow-sm
                      sm:p-2
                    "
                  >
                    <div className="relative flex h-10 items-center justify-center overflow-visible sm:h-12">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.title}
                        width={90}
                        height={55}
                        className="
                          h-full
                          w-full
                          cursor-pointer
                          object-contain
                          transition-transform
                          duration-300
                          ease-out
                          hover:scale-110
                        "
                      />
                    </div>

                    <p className="mt-1 truncate text-[8px] font-bold text-gray-800 sm:text-[9px]">
                      {vehicle.title}
                    </p>

                    <p className="truncate text-[6.5px] text-gray-400 sm:text-[7px]">
                      {vehicle.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CORPORATE BANNER */}
            <div className="mx-3 mt-4 overflow-hidden rounded-xl bg-[#edf7e9] p-3 sm:mx-4 sm:mt-5 sm:p-4">
              <div className="max-w-[145px]">
                <p className="text-[10px] font-bold leading-4 text-[#1f3020] sm:text-[11px]">
                  Corporate travel,
                </p>

                <p className="text-[10px] font-bold leading-4 text-[#188A31] sm:text-[11px]">
                  made effortless.
                </p>

                <p className="mt-1.5 text-[6.5px] text-gray-500 sm:mt-2 sm:text-[7px]">
                  Comfortable rides for your business journeys.
                </p>
              </div>

              <div className="mt-2 flex justify-end">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#188A31] text-base text-white sm:h-9 sm:w-9 sm:text-lg">
                  <IoBriefcase />
                </div>
              </div>
            </div>

            {/* BOTTOM NAVIGATION */}
            <div className="mt-4 flex justify-between border-t border-gray-100 px-4 py-3 text-[7px] text-gray-400 sm:mt-5 sm:px-5 sm:py-4 sm:text-[8px]">
              <div className="flex flex-col items-center gap-0.5 text-[#188A31]">
                <span className="text-base sm:text-lg">
                  <IoHome />
                </span>
                <span>Home</span>
              </div>

              <div className="flex flex-col items-center gap-0.5">
                <span className="text-base sm:text-lg">
                  <FaCalendarCheck />
                </span>
                <span>Bookings</span>
              </div>

              <div className="flex flex-col items-center gap-0.5">
                <span className="text-base sm:text-lg">
                  <BiTrip />
                </span>
                <span>Trips</span>
              </div>

              <div className="flex flex-col items-center gap-0.5">
                <span className="text-base sm:text-lg">
                  <FaUserCircle />
                </span>
                <span>Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* =========================================================
   QR CODE
========================================================= */

function QRCode() {
  return (
    <div
      className="
        flex
        h-[68px]
        w-[68px]
        shrink-0
        items-center
        justify-center
        rounded-lg
        border-2
        border-[#198b13]
        bg-white
        p-1
        sm:h-[78px]
        sm:w-[78px]
      "
    >
      <div className="grid h-full w-full grid-cols-7 gap-[2px] bg-white p-1">
        {Array.from({ length: 49 }).map((_, index) => (
          <span
            key={index}
            className={
              (index * 17 + index * 3) % 5 === 0 ||
              index < 7 ||
              index > 41
                ? "bg-black"
                : "bg-white"
            }
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function DownloadApp() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-10
        min-[375px]:py-11
        min-[430px]:py-12
        sm:py-14
        md:py-16
        lg:py-20
        xl:py-24
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
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
            sm:h-[240px]
            sm:w-[450px]
            md:h-[300px]
            md:w-[600px]
            lg:top-20
          "
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
          px-4
          min-[375px]:px-5
          min-[430px]:px-6
          sm:px-7
          md:px-10
          lg:px-12
          xl:px-16
          2xl:px-20
        "
      >
        {/* ===================================================
            HEADER + PHONE
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            grid
            w-full
            items-center
            gap-10
            sm:gap-12
            md:gap-14
            lg:grid-cols-[minmax(0,1fr)_minmax(320px,430px)]
            lg:gap-8
            xl:grid-cols-[minmax(0,1fr)_minmax(350px,500px)]
            xl:gap-12
            2xl:gap-20
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              w-full
              max-w-[720px]
              lg:max-w-[720px]
            "
          >
            {/* EYEBROW */}

            <div
              className="
                mb-3
                flex
                w-full
                items-center
                justify-start
                gap-2
                min-[375px]:mb-3.5
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
                Download Our App
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

            {/* HEADING */}

            <h2
              className="
                text-[24px]
                font-extrabold
                leading-[1.05]
                tracking-[-0.04em]
                text-[#142236]
                min-[375px]:text-[25px]
                min-[430px]:text-[27px]
                sm:text-[30px]
                md:text-[34px]
                lg:text-[40px]
                xl:text-[48px]
                2xl:text-[56px]
              "
            >
              Your Journey,{" "}
              <span className="text-[#188A31]">
                <br />
                Simplified.
              </span>
            </h2>

            {/* SUB HEADING */}

            <p
              className="
                mt-3
                font-serif
                text-[18px]
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
              In Your Pocket.
            </p>

            {/* DESCRIPTION */}

            <div
              className="
                mt-4
                max-w-[620px]
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
                Book rides, track in real-time, manage trips and more – all
                from the{" "}
                <span className="font-bold text-[#188b10]">
                  Urban Cruise
                </span>{" "}
                app. Experience seamless travel management at your fingertips.
              </p>
            </div>

            {/* =================================================
                FEATURES
            ================================================= */}

            <div
              className="
                mt-7
                grid
                grid-cols-2
                gap-y-7
                min-[375px]:mt-8
                sm:mt-9
                sm:grid-cols-4
                sm:gap-y-0
                md:mt-10
              "
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className={`
                      flex
                      flex-col
                      items-center
                      px-2
                      text-center
                      sm:px-3
                      md:px-4
                      lg:px-5
                      ${
                        index !== 0
                          ? "sm:border-l sm:border-[#dce2dc]"
                          : ""
                      }
                    `}
                  >
                    <div
                      className="
                        mb-2.5
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-[#eef6eb]
                        shadow-sm
                        min-[375px]:h-14
                        min-[375px]:w-14
                        sm:mb-3
                        sm:h-16
                        sm:w-16
                      "
                    >
                      <Icon
                        className="
                          h-6
                          w-6
                          text-[#198b13]
                          sm:h-7
                          sm:w-7
                          md:h-8
                          md:w-8
                        "
                      />
                    </div>

                    <h3
                      className="
                        text-[11px]
                        font-bold
                        text-[#172333]
                        min-[375px]:text-xs
                        sm:text-sm
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        max-w-[120px]
                        text-[9px]
                        leading-4
                        text-[#58677a]
                        min-[375px]:text-[10px]
                        sm:text-xs
                        sm:leading-5
                      "
                    >
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* =================================================
                DOWNLOAD CARD
            ================================================= */}

            <div
              className="
                mt-8
                flex
                w-full
                max-w-[710px]
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5df]
                bg-white
                shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                sm:mt-9
                sm:flex-row
                md:mt-10
              "
            >
              {/* GREEN LOGO AREA */}

              <div
                className="
                  relative
                  flex
                  min-h-[125px]
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  bg-[#198b13]
                  sm:min-h-[150px]
                  sm:w-[165px]
                  md:w-[170px]
                "
              >
                <div
                  className="
                    absolute
                    -right-12
                    top-1/2
                    h-32
                    w-32
                    -translate-y-1/2
                    rotate-45
                    rounded-[30px]
                    bg-[#21991a]
                  "
                />

                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white
                      shadow-md
                      sm:h-16
                      sm:w-16
                    "
                  >
                    <span className="text-xl font-black tracking-[-2px] text-[#198b13] sm:text-2xl">
                      UC
                    </span>
                  </div>

                  <span className="mt-2 text-xs font-semibold text-white sm:text-sm">
                    Urban Cruise
                  </span>
                </div>
              </div>

              {/* DOWNLOAD CONTENT */}

              <div
                className="
                  flex
                  flex-1
                  flex-col
                  justify-center
                  px-4
                  py-5
                  min-[375px]:px-5
                  sm:px-6
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    justify-between
                    gap-5
                    sm:flex-row
                    sm:items-center
                  "
                >
                  <div>
                    <h3 className="text-base font-bold text-[#182536] sm:text-lg">
                      Download the App
                    </h3>

                    <p className="mt-1 text-xs text-[#627082] sm:text-sm">
                      Available on Android and iOS
                    </p>

                    {/* STORE BUTTONS */}

                    <div className="mt-4 flex flex-wrap gap-2">
                      <a
                        href="#"
                        className="
                          flex
                          h-10
                          items-center
                          gap-2
                          rounded-md
                          bg-black
                          px-3
                          text-white
                          transition
                          hover:scale-105
                        "
                      >
                        <span className="text-lg">▶</span>

                        <div className="leading-none">
                          <span className="block text-[7px]">
                            GET IT ON
                          </span>

                          <span className="text-xs font-medium">
                            Google Play
                          </span>
                        </div>
                      </a>

                      <a
                        href="#"
                        className="
                          flex
                          h-10
                          items-center
                          gap-2
                          rounded-md
                          bg-black
                          px-3
                          text-white
                          transition
                          hover:scale-105
                        "
                      >
                        <span className="text-lg">●</span>

                        <div className="leading-none">
                          <span className="block text-[7px]">
                            Download on the
                          </span>

                          <span className="text-xs font-medium">
                            App Store
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* QR */}

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      border-t
                      border-[#e5e9e5]
                      pt-4
                      sm:border-l
                      sm:border-t-0
                      sm:pl-5
                      sm:pt-0
                    "
                  >
                    <div>
                      <p className="text-[9px] font-bold text-[#198b13] sm:text-[10px]">
                        OR SCAN TO DOWNLOAD
                      </p>

                      <div className="mt-1.5 flex items-center text-[#198b13]">
                        <span className="text-[10px] font-medium sm:text-xs">
                          Scan
                        </span>
                      </div>
                    </div>

                    <QRCode />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT PHONE
          ================================================= */}

          <div
            className="
              relative
              flex
              w-full
              items-center
              justify-center
              lg:justify-end
            "
          >
            <PhoneMockup />
          </div>
        </motion.div>

        {/* ===================================================
            STATS
        =================================================== */}

        <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16">
          <div
            className="
              flex
              w-full
              max-w-[800px]
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5df]
              bg-white
              px-4
              py-3
              shadow-sm
              sm:flex-row
              sm:px-0
              sm:py-0
            "
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`
                    flex
                    items-center
                    gap-3
                    py-3
                    sm:flex-1
                    sm:justify-center
                    sm:py-4
                    ${
                      index !== 0
                        ? "border-t border-[#e1e6e1] sm:border-l sm:border-t-0"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#176d0e]
                      text-white
                      sm:h-12
                      sm:w-12
                    "
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>

                  <div>
                    <p className="text-lg font-bold text-[#176d0e] sm:text-xl">
                      {stat.value}
                    </p>

                    <p className="text-[10px] text-[#334155] sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
