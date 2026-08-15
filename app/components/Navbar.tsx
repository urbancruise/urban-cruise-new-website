// app/components/Navbar.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useLocation } from "@/app/context/LocationContext";
import { formatLocationName } from "@/app/lib/location";
import { getLocationConfig } from "@/app/lib/locationConfig";
import { getFullServiceUrl } from "@/app/lib/serviceUrlHelper";

import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { FaPhoneVolume, FaRegCalendar } from "react-icons/fa6";

import LocationModal from "./LocationModal";

//  ABOUT LINKS
const aboutLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/careers-at-urban-cruise", label: "Careers" },
  { href: "/testimonials", label: "Happy Customers" },
  { href: "/partner", label: "Partner Program" },
  { href: "/contact-us", label: "Contact Us" },
];

//  SERVICE LINKS
const serviceLinks = [
  {
    href: "/services",
    label: "All Services",
    type: "page",
  },
  {
    href: "/delhi-to-jim-corbett-vehicle-rental",
    label: "Jim Corbett",
    type: "service",
  },
  {
    href: "/do-dham-yatra-package",
    label: "Do Dham Yatra",
    type: "service",
  },
  {
    href: "/char-dham-yatra-package",
    label: "Char Dham Yatra",
    type: "service",
  },
  {
    href: "/pilgrimage-vehicle-rental",
    label: "Pilgrimage Travel",
    type: "service",
  },
  {
    href: "/wedding-cars-and-bus-rental-delhi",
    label: "Wedding Travel",
    type: "service",
  },
  {
    href: "/corporate-travel-rental-service",
    label: "Corporate Travel",
    type: "service",
  },
  {
    href: "/vacation-bus-and-car-rentals-in-delhi",
    label: "Vacations",
    type: "service",
  },
  {
    href: "/bus-and-car-rental-for-local-travel",
    label: "Local Travel",
    type: "service",
  },
];

//  INFO LINKS
const infoLinks = [
  {
    href: "/faqs",
    label: "FAQ's",
  },
  {
    href: "/news-media",
    label: "News & Media",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

//  VEHICLE LINKS
const vehicleLinks = [
  {
    category: "Car & SUVs",
    items: [
      {
        href: "/car-rental-delhi",
        label: "Car & SUVs",
      },
      {
        href: "/ertiga-on-rent",
        label: "Ertiga",
      },
      {
        href: "/innova-crysta-on-rent",
        label: "Innova Crysta",
      },
      {
        href: "/innova-hycross-on-rent",
        label: "Hycross",
      },
    ],
  },

  {
    category: "Luxury Cars, SUVs, Vans",
    items: [
      {
        href: "/luxury-car-rental-delhi",
        label: "Luxury Cars & SUVs",
      },
      {
        href: "/mercedes-sprinter-van-rental",
        label: "Mercedes Sprinter",
      },
      {
        href: "/luxury-van-rental-delhi",
        label: "Luxury Vans",
      },
    ],
  },

  {
    category: "Tempo Traveller",
    items: [
      {
        href: "/tempo-traveller-delhi",
        label: "Tempo Traveller",
      },
      {
        href: "/maharaja-tempo-traveller-delhi",
        label: "Maharaja Tempo Traveller",
      },
    ],
  },

  {
    category: "Urbania",
    items: [
      {
        href: "/force-urbania-on-rent",
        label: "Urbania",
      },
    ],
  },

  {
    category: "Mini Bus",
    items: [
      {
        href: "/mini-bus-delhi",
        label: "Mini Bus",
      },
    ],
  },

  {
    category: "Luxury Buses",
    items: [
      {
        href: "/bus-rental-delhi",
        label: "Luxury Bus",
      },
      {
        href: "/volvo-bus-on-rent",
        label: "Volvo Bus",
      },
      {
        href: "/bharat-benz-bus-on-rent",
        label: "Bharat Benz Bus",
      },
      {
        href: "/bus-with-washroom",
        label: "Bus With Washroom",
      },
      {
        href: "/sleeper-bus-on-rent",
        label: "Sleeper | Semi Sleeper Bus",
      },
    ],
  },
];

//  NAVBAR
export default function Navbar() {
  //  MAIN MENU STATES
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [infoOpen, setInfoOpen] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);
  //  VEHICLE STATES
  const [vehiclesOpen, setVehiclesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const vehiclesRef = useRef<HTMLDivElement>(null);
  //  SCROLL STATES
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  //  LOCATION MODAL
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  //  MOBILE STATES
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileVehiclesOpen, setMobileVehiclesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);

  const [expandedMobileCategory, setExpandedMobileCategory] = useState<
    string | null
  >(null);
  //  TIMERS
  const aboutCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const infoCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const vehiclesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const categoryCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // LOCATION

  const { location, getLocationUrl } = useLocation();

  const locationConfig = getLocationConfig(location);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollY(currentScrollY);

      if (currentScrollY > 30) {
        setIsScrolled(true);
      } else if (currentScrollY < 20) {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //     DROPDOWN HANDLERS
  const openAbout = () => {
    if (aboutCloseTimer.current) {
      clearTimeout(aboutCloseTimer.current);
    }

    setAboutOpen(true);
  };

  const scheduleCloseAbout = () => {
    if (aboutCloseTimer.current) {
      clearTimeout(aboutCloseTimer.current);
    }

    aboutCloseTimer.current = setTimeout(() => {
      setAboutOpen(false);
    }, 200);
  };

  const openServices = () => {
    if (servicesCloseTimer.current) {
      clearTimeout(servicesCloseTimer.current);
    }

    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    if (servicesCloseTimer.current) {
      clearTimeout(servicesCloseTimer.current);
    }

    servicesCloseTimer.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  const openInfo = () => {
    if (infoCloseTimer.current) {
      clearTimeout(infoCloseTimer.current);
    }

    setInfoOpen(true);
  };

  const scheduleCloseInfo = () => {
    if (infoCloseTimer.current) {
      clearTimeout(infoCloseTimer.current);
    }

    infoCloseTimer.current = setTimeout(() => {
      setInfoOpen(false);
    }, 200);
  };

  //     VEHICLE DROPDOWN
  const openVehicles = () => {
    if (vehiclesCloseTimer.current) {
      clearTimeout(vehiclesCloseTimer.current);
    }

    setVehiclesOpen(true);
  };

  const scheduleCloseVehicles = () => {
    if (vehiclesCloseTimer.current) {
      clearTimeout(vehiclesCloseTimer.current);
    }

    vehiclesCloseTimer.current = setTimeout(() => {
      setVehiclesOpen(false);
      setActiveCategory(null);
    }, 200);
  };

  const openCategory = (name: string) => {
    if (categoryCloseTimer.current) {
      clearTimeout(categoryCloseTimer.current);
    }

    setActiveCategory(name);
  };

  const scheduleCloseCategory = () => {
    if (categoryCloseTimer.current) {
      clearTimeout(categoryCloseTimer.current);
    }

    categoryCloseTimer.current = setTimeout(() => {
      setActiveCategory(null);
    }, 200);
  };

  //     CLEANUP
  useEffect(() => {
    return () => {
      if (vehiclesCloseTimer.current) {
        clearTimeout(vehiclesCloseTimer.current);
      }

      if (categoryCloseTimer.current) {
        clearTimeout(categoryCloseTimer.current);
      }

      if (aboutCloseTimer.current) {
        clearTimeout(aboutCloseTimer.current);
      }

      if (servicesCloseTimer.current) {
        clearTimeout(servicesCloseTimer.current);
      }

      if (infoCloseTimer.current) {
        clearTimeout(infoCloseTimer.current);
      }
    };
  }, []);

  //     SCROLL CALCULATIONS
  const scrollProgress = Math.min(scrollY / 100, 1);

  const logoScale = 1.2 - scrollProgress * 0.08;

  const navHeight = isScrolled
    ? "h-14 xs:h-16 sm:h-18 md:h-20"
    : "h-12 xs:h-14 sm:h-16 md:h-[68px] lg:h-[72px] xl:h-20";

  const logoHeight = isScrolled
    ? "h-8 xs:h-9 sm:h-10 md:h-14"
    : "h-8 xs:h-9 sm:h-10 md:h-11 lg:h-12 xl:h-14 2xl:h-16";

  //     NAVBAR
  return (
    <div
      className={`
        fixed
        top-0
        left-0
        right-0
        z-[999]

        transition-all
        duration-500
        ease-out

        ${
          isScrolled
            ? "px-0 pt-0"
            : "pt-1 xs:pt-2 sm:pt-3 md:pt-4 lg:pt-6 px-1 xs:px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8"
        }
      `}
    >
      {/* BACKGROUND GLASS GLOW */}

      <div
        className={`
          absolute
          inset-0
          pointer-events-none
          transition-opacity
          duration-700

          ${isScrolled ? "opacity-100" : "opacity-0"}
        `}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* NAV */}

      <nav
        className={`
          mx-auto
          relative
          overflow-visible
          transition-all
          duration-500
          ease-out
          /* PREMIUM GLASS */
          bg-white/40
          backdrop-blur-[24px]
          backdrop-saturate-150
          border
          border-white/70
          ring-1
          ring-black/[0.03]

          ${
            isScrolled
              ? `
                rounded-none
                max-w-full
                bg-white/65
                shadow-[0_8px_30px_rgba(0,0,0,0.10)]
              `
              : `
                rounded-xl
                sm:rounded-2xl
                md:rounded-3xl
                lg:rounded-full
                max-w-7xl
                shadow-[0_8px_35px_rgba(0,0,0,0.12)]
              `
          }

          px-2
          xs:px-3
          sm:px-4
          md:px-5
          lg:px-6
        `}
      >
        {/* GLASS TOP HIGHLIGHT */}

        <div
          className="
            absolute
            inset-0
            rounded-[inherit]
            pointer-events-none
            bg-gradient-to-b
            from-white/55
            via-white/15
            to-transparent
          "
        />

        {/* GLASS INNER BORDER */}

        <div
          className="
            absolute
            inset-[1px]
            rounded-[inherit]
            pointer-events-none
            border
            border-white/40
          "
        />

        {/* NAV CONTENT */}

        <div
          className={`
            relative
            z-20
            flex
            items-center
            justify-between
            transition-all
            duration-500
            ease-out
            ${navHeight}
          `}
        >
          {/* LOGO */}

          <Link
            href={getLocationUrl("/")}
            className="
              flex
              items-center
              px-5
              gap-1
              xs:gap-1.5
              sm:gap-2
              shrink-0
              transition-all
              duration-500
            "
          >
            <Image
              src="/images/logo.webp"
              alt="Urban Cruise"
              width={380}
              height={75}
              priority
              className={`
                w-auto
                object-contain
                transition-all
                duration-500
                ${logoHeight}
              `}
              style={{
                transform: `scale(${logoScale})`,
              }}
            />
          </Link>

          {/* DESKTOP NAVIGATION */}

          <div
            className="
              hidden
              lg:flex
              items-center
              gap-2
              lg:gap-3
              xl:gap-4
              2xl:gap-6
            "
          >
            {/* ABOUT */}
            <div
              ref={aboutRef}
              className="relative"
              onMouseEnter={openAbout}
              onMouseLeave={scheduleCloseAbout}
            >
              <button
                className={`
                  flex
                  items-center
                  gap-1.5
                  font-medium
                  cursor-pointer
                  whitespace-nowrap
                  transition-all
                  duration-300
                  ${
                    aboutOpen
                      ? "text-[#03C35E]"
                      : "text-[#3A3D33] hover:text-[#03C35E]"
                  }

                  ${
                    isScrolled
                      ? "text-xs sm:text-sm md:text-[14px]"
                      : "text-[11px] xs:text-xs sm:text-sm md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-base"
                  }
                `}
              >
                About Us
                {aboutOpen ? (
                  <IoIosArrowUp
                    className="
                      w-3
                      h-3
                      sm:w-3.5
                      sm:h-3.5
                    "
                  />
                ) : (
                  <IoIosArrowDown
                    className="
                      w-3
                      h-3
                      sm:w-3.5
                      sm:h-3.5
                    "
                  />
                )}
              </button>

              {aboutOpen && (
                <div
                  className="
                    absolute
                    top-full
                    left-1/2
                    -translate-x-1/2
                    mt-3
                    w-52
                    sm:w-56
                    md:w-60
                    lg:w-64
                    bg-white/90
                    backdrop-blur-2xl
                    backdrop-saturate-150
                    border
                    border-white/80
                    rounded-2xl
                    shadow-[0_15px_45px_rgba(0,0,0,0.14)]
                    overflow-hidden
                    py-2
                    animate-in
                    fade-in
                    slide-in-from-top-2
                    duration-200
                  "
                  onMouseEnter={openAbout}
                  onMouseLeave={scheduleCloseAbout}
                >
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={getLocationUrl(item.href)}
                      className="
                        block
                        px-4
                        py-2.5
                        text-xs
                        sm:text-sm
                        text-[#3A3D33]
                        hover:bg-[#F3EFE4]
                        hover:text-[#03C35E]
                        transition-all
                        duration-200
                      "
                      onClick={() => setAboutOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* VEHICLES */}

            <div
              ref={vehiclesRef}
              className="relative"
              onMouseEnter={openVehicles}
              onMouseLeave={scheduleCloseVehicles}
            >
              <button
                className={`
                  flex
                  items-center
                  gap-1.5
                  font-medium
                  cursor-pointer
                  whitespace-nowrap
                  transition-all
                  duration-300
                  ${
                    vehiclesOpen
                      ? "text-[#03C35E]"
                      : "text-[#3A3D33] hover:text-[#03C35E]"
                  }
                  ${
                    isScrolled
                      ? "text-xs sm:text-sm md:text-[14px]"
                      : "text-[11px] xs:text-xs sm:text-sm md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-base"
                  }
                `}
              >
                Our Vehicles
                {vehiclesOpen ? (
                  <IoIosArrowUp className="w-3.5 h-3.5" />
                ) : (
                  <IoIosArrowDown className="w-3.5 h-3.5" />
                )}
              </button>

              {vehiclesOpen && (
                <div
                  className="
                    absolute
                    top-full
                    left-1/2
                    -translate-x-1/2
                    mt-3
                    w-64
                    lg:w-72
                    xl:w-80
                    bg-white/90
                    backdrop-blur-2xl
                    backdrop-saturate-150
                    border
                    border-white/80
                    rounded-2xl
                    shadow-[0_15px_45px_rgba(0,0,0,0.14)]
                    overflow-visible
                    py-2
                    animate-in
                    fade-in
                    slide-in-from-top-2
                    duration-200
                  "
                  onMouseEnter={openVehicles}
                  onMouseLeave={scheduleCloseVehicles}
                >
                  {vehicleLinks.map((category) => (
                    <div
                      key={category.category}
                      className="relative"
                      onMouseEnter={() => openCategory(category.category)}
                      onMouseLeave={scheduleCloseCategory}
                    >
                      <div
                        className={`
                          flex
                          items-center
                          justify-between
                          px-4
                          py-2.5
                          cursor-pointer
                          transition-all
                          duration-200
                          ${
                            activeCategory === category.category
                              ? "bg-[#F3EFE4]"
                              : "hover:bg-[#F3EFE4]"
                          }
                        `}
                      >
                        <span
                          className={`
                            text-xs
                            sm:text-sm
                            font-medium
                            ${
                              activeCategory === category.category
                                ? "text-[#03C35E]"
                                : "text-[#3A3D33]"
                            }
                          `}
                        >
                          {category.category}
                        </span>

                        {category.items.length > 0 && (
                          <svg
                            className={`
                              w-4
                              h-4
                              transition-all
                              duration-200
                              ${
                                activeCategory === category.category
                                  ? "text-[#03C35E] rotate-90"
                                  : "text-[#6B6E62]"
                              }
                            `}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        )}
                      </div>

                      {/* SUB MENU */}
                      {activeCategory === category.category &&
                        category.items.length > 0 && (
                          <div
                            className="
                              absolute
                              left-full
                              top-0
                              w-64
                              xl:w-72
                              bg-white/90
                              backdrop-blur-2xl
                              backdrop-saturate-150
                              border
                              border-white/80
                              rounded-2xl
                              shadow-[0_15px_45px_rgba(0,0,0,0.14)]
                              overflow-hidden
                              py-2
                              animate-in
                              fade-in
                              slide-in-from-left-2
                              duration-200
                            "
                            onMouseEnter={() => openCategory(category.category)}
                            onMouseLeave={scheduleCloseCategory}
                          >
                            {category.items.map((item) => (
                              <Link
                                key={item.href}
                                href={getLocationUrl(item.href)}
                                className="
                                  block
                                  px-4
                                  py-2.5
                                  text-xs
                                  sm:text-sm
                                  text-[#3A3D33]
                                  hover:bg-[#F3EFE4]
                                  hover:text-[#03C35E]
                                  transition-all
                                  duration-200
                                "
                                onClick={() => {
                                  setVehiclesOpen(false);
                                  setActiveCategory(null);
                                }}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* SERVICES */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
            >
              <button
                className={`
                  flex
                  items-center
                  gap-1.5
                  font-medium
                  cursor-pointer
                  whitespace-nowrap
                  transition-all
                  duration-300
                  ${
                    servicesOpen
                      ? "text-[#03C35E]"
                      : "text-[#3A3D33] hover:text-[#03C35E]"
                  }
                  ${
                    isScrolled
                      ? "text-xs sm:text-sm md:text-[14px]"
                      : "text-[11px] xs:text-xs sm:text-sm md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-base"
                  }
                `}
              >
                Our Services
                {servicesOpen ? (
                  <IoIosArrowUp className="w-3.5 h-3.5" />
                ) : (
                  <IoIosArrowDown className="w-3.5 h-3.5" />
                )}
              </button>

              {servicesOpen && (
                <div
                  className="
                    absolute
                    top-full
                    left-1/2
                    -translate-x-1/2
                    mt-3
                    w-64
                    bg-white/90
                    backdrop-blur-2xl
                    backdrop-saturate-150
                    border
                    border-white/80
                    rounded-2xl
                    shadow-[0_15px_45px_rgba(0,0,0,0.14)]
                    overflow-hidden
                    py-2
                    animate-in
                    fade-in
                    slide-in-from-top-2
                    duration-200
                  "
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                >
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={getFullServiceUrl(location, item.href)}
                      className="
                        block
                        px-4
                        py-2.5
                        text-xs
                        sm:text-sm
                        text-[#3A3D33]
                        hover:bg-[#F3EFE4]
                        hover:text-[#03C35E]
                        transition-all
                        duration-200
                      "
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* INFO */}
            <div
              ref={infoRef}
              className="relative"
              onMouseEnter={openInfo}
              onMouseLeave={scheduleCloseInfo}
            >
              <button
                className={`
                  flex
                  items-center
                  gap-1.5
                  font-medium
                  cursor-pointer
                  whitespace-nowrap
                  transition-all
                  duration-300
                  ${
                    infoOpen
                      ? "text-[#03C35E]"
                      : "text-[#3A3D33] hover:text-[#03C35E]"
                  }

                  ${
                    isScrolled
                      ? "text-xs sm:text-sm md:text-[14px]"
                      : "text-[11px] xs:text-xs sm:text-sm md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-base"
                  }
                `}
              >
                Info
                {infoOpen ? (
                  <IoIosArrowUp className="w-3.5 h-3.5" />
                ) : (
                  <IoIosArrowDown className="w-3.5 h-3.5" />
                )}
              </button>

              {infoOpen && (
                <div
                  className="
                    absolute
                    top-full
                    left-1/2
                    -translate-x-1/2
                    mt-3
                    w-56
                    bg-white/90
                    backdrop-blur-2xl
                    backdrop-saturate-150
                    border
                    border-white/80
                    rounded-2xl
                    shadow-[0_15px_45px_rgba(0,0,0,0.14)]
                    overflow-hidden
                    py-2
                    animate-in
                    fade-in
                    slide-in-from-top-2
                    duration-200
                  "
                  onMouseEnter={openInfo}
                  onMouseLeave={scheduleCloseInfo}
                >
                  {infoLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={getLocationUrl(item.href)}
                      className="
                        block
                        px-4
                        py-2.5
                        text-xs
                        sm:text-sm
                        text-[#3A3D33]
                        hover:bg-[#F3EFE4]
                        hover:text-[#03C35E]
                        transition-all
                        duration-200
                      "
                      onClick={() => setInfoOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT ACTIONS */}

          <div
            className="
              flex
              items-center
              gap-1.5
              xs:gap-1.5
              sm:gap-2
              md:gap-2.5
              lg:gap-3
              xl:gap-4
            "
          >
            {/* LOCATION BUTTON */}

            <button
              onClick={() => setIsLocationModalOpen(true)}
              className="
                flex
                items-center
                gap-1
                sm:gap-1.5
                bg-[#03C35E]/90
                backdrop-blur-md
                border
                border-white/40
                text-white
                font-medium
                px-2
                xs:px-2.5
                sm:px-3
                md:px-4
                lg:px-4
                xl:px-5
                py-1.5
                sm:py-1.5
                md:py-2
                lg:py-2.5
                rounded-full
                shadow-[0_4px_18px_rgba(3,195,94,0.22)]
                transition-all
                duration-300
                whitespace-nowrap
                hover:bg-[#03C35E]
                hover:scale-105
                active:scale-95
              "
            >
              <IoLocationSharp
                className="
                  w-3
                  h-3
                  sm:w-4
                  sm:h-4
                "
              />

              <span
                className="
                  text-[10px]
                  xs:text-[11px]
                  sm:text-xs
                  md:text-sm
                "
              >
                {formatLocationName(location)}
              </span>

              <IoIosArrowDown
                className="
                  w-2.5
                  h-2.5
                  sm:w-4
                  sm:h-4
                "
              />
            </button>

            {/* GET QUOTE */}

            <Link
              href={getLocationUrl("/book")}
              className="
                hidden
                lg:flex
                items-center
                justify-center
                gap-1.5
                bg-[#03C35E]/90
                backdrop-blur-md
                border
                border-white/40
                text-white
                font-medium
                px-4
                xl:px-5
                py-2
                lg:py-2.5
                rounded-full
                shadow-[0_4px_18px_rgba(3,195,94,0.22)]
                transition-all
                duration-300
                whitespace-nowrap
                hover:bg-[#03C35E]
                hover:scale-105
                active:scale-95
              "
            >
              <FaRegCalendar className="w-4 h-4" />

              <span>Get a Quote</span>
            </Link>

            {/* PHONE */}
            <a
              href={`tel:${locationConfig.phone.replace(/\s/g, "")}`}
              className="
                hidden
                lg:flex
                items-center
                justify-center
                gap-1.5
                bg-[#03C35E]/90
                backdrop-blur-md
                border
                border-white/40
                text-white
                font-medium
                px-4
                xl:px-5
                py-2
                lg:py-2.5
                rounded-full
                shadow-[0_4px_18px_rgba(3,195,94,0.22)]
                transition-all
                duration-300
                whitespace-nowrap
                hover:bg-[#03C35E]
                hover:scale-105
                active:scale-95
              "
            >
              <FaPhoneVolume
                className="
                  w-4
                  h-4
                  animate-pulse
                "
              />

              <span>{locationConfig.phone}</span>
            </a>

            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                lg:hidden
                p-2
                rounded-full
                bg-white/50
                backdrop-blur-md
                border
                border-white/70
                text-[#2A2E22]
                transition-all
                duration-300
                hover:bg-white/80
                hover:scale-105
                active:scale-90
              "
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg
                className="
                  w-5
                  h-5
                  sm:w-6
                  sm:h-6
                "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {isOpen && (
          <div
            className="
              relative
              z-30
              lg:hidden
              mt-2
              border-t
              border-white/60
              px-2
              pt-3
              pb-5
              max-h-[75vh]
              overflow-y-auto
              bg-white/25
              backdrop-blur-xl
              rounded-b-2xl
              animate-in
              slide-in-from-top-4
              duration-300
            "
          >
            {/* MOBILE ABOUT */}
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className={`
                w-full
                flex
                items-center
                justify-between
                px-4
                py-3
                text-xs
                xs:text-[13px]
                sm:text-sm
                font-medium
                rounded-xl
                transition-all
                duration-300
                ${
                  mobileAboutOpen
                    ? "text-[#03C35E] bg-white/60"
                    : "text-[#3A3D33] hover:bg-white/50"
                }
              `}
            >
              <span>About Us</span>

              {mobileAboutOpen ? (
                <IoIosArrowUp className="w-4 h-4" />
              ) : (
                <IoIosArrowDown className="w-4 h-4" />
              )}
            </button>

            {mobileAboutOpen && (
              <div className="pl-4 pb-2">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={getLocationUrl(item.href)}
                    className="
                      block
                      px-4
                      py-2.5
                      text-xs
                      xs:text-[13px]
                      sm:text-sm
                      text-[#3A3D33]
                      hover:bg-white/60
                      hover:text-[#03C35E]
                      rounded-xl
                      transition-all
                      duration-200
                    "
                    onClick={() => {
                      setIsOpen(false);
                      setMobileAboutOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* MOBILE VEHICLES */}
            <button
              onClick={() => setMobileVehiclesOpen(!mobileVehiclesOpen)}
              className={`
                w-full
                flex
                items-center
                justify-between
                px-4
                py-3
                text-xs
                xs:text-[13px]
                sm:text-sm
                font-medium
                rounded-xl
                transition-all
                duration-300
                ${
                  mobileVehiclesOpen
                    ? "text-[#03C35E] bg-white/60"
                    : "text-[#3A3D33] hover:bg-white/50"
                }
              `}
            >
              <span>Our Vehicles</span>

              {mobileVehiclesOpen ? (
                <IoIosArrowUp className="w-4 h-4" />
              ) : (
                <IoIosArrowDown className="w-4 h-4" />
              )}
            </button>

            {mobileVehiclesOpen && (
              <div className="pl-4 pb-2">
                {vehicleLinks.map((category) => (
                  <div key={category.category} className="mb-1">
                    <button
                      onClick={() => {
                        setExpandedMobileCategory(
                          expandedMobileCategory === category.category
                            ? null
                            : category.category,
                        );
                      }}
                      className={`
                        w-full
                        flex
                        items-center
                        justify-between
                        px-4
                        py-2.5
                        text-xs
                        xs:text-[13px]
                        sm:text-sm
                        font-medium
                        rounded-xl
                        transition-all
                        duration-300

                        ${
                          expandedMobileCategory === category.category
                            ? "text-[#03C35E] bg-white/60"
                            : "text-[#3A3D33] hover:bg-white/50"
                        }
                      `}
                    >
                      <span>{category.category}</span>

                      {category.items.length > 0 &&
                        (expandedMobileCategory === category.category ? (
                          <IoIosArrowUp className="w-4 h-4" />
                        ) : (
                          <IoIosArrowDown className="w-4 h-4" />
                        ))}
                    </button>

                    {expandedMobileCategory === category.category && (
                      <div className="pl-4 pb-1">
                        {category.items.map((item) => (
                          <Link
                            key={item.href}
                            href={getLocationUrl(item.href)}
                            className="
                              block
                              px-4
                              py-2
                              ml-4
                              text-[11px]
                              xs:text-xs
                              sm:text-sm
                              text-[#3A3D33]
                              hover:bg-white/60
                              hover:text-[#03C35E]
                              rounded-xl
                              transition-all
                              duration-200
                            "
                            onClick={() => {
                              setIsOpen(false);
                              setMobileVehiclesOpen(false);
                              setExpandedMobileCategory(null);
                            }}
                          >
                            <span className="mr-2">•</span>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* MOBILE SERVICES */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`
                w-full
                flex
                items-center
                justify-between
                px-4
                py-3
                text-xs
                xs:text-[13px]
                sm:text-sm
                font-medium
                rounded-xl
                transition-all
                duration-300

                ${
                  mobileServicesOpen
                    ? "text-[#03C35E] bg-white/60"
                    : "text-[#3A3D33] hover:bg-white/50"
                }
              `}
            >
              <span>Our Services</span>

              {mobileServicesOpen ? (
                <IoIosArrowUp className="w-4 h-4" />
              ) : (
                <IoIosArrowDown className="w-4 h-4" />
              )}
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 pb-2">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={getFullServiceUrl(location, item.href)}
                    className="
                      block
                      px-4
                      py-2.5
                      text-xs
                      xs:text-[13px]
                      sm:text-sm
                      text-[#3A3D33]
                      hover:bg-white/60
                      hover:text-[#03C35E]
                      rounded-xl
                      transition-all
                      duration-200
                    "
                    onClick={() => {
                      setIsOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* MOBILE INFO */}
            <button
              onClick={() => setMobileInfoOpen(!mobileInfoOpen)}
              className={`
                w-full
                flex
                items-center
                justify-between
                px-4
                py-3
                text-xs
                xs:text-[13px]
                sm:text-sm
                font-medium
                rounded-xl
                transition-all
                duration-300

                ${
                  mobileInfoOpen
                    ? "text-[#03C35E] bg-white/60"
                    : "text-[#3A3D33] hover:bg-white/50"
                }
              `}
            >
              <span>Info</span>

              {mobileInfoOpen ? (
                <IoIosArrowUp className="w-4 h-4" />
              ) : (
                <IoIosArrowDown className="w-4 h-4" />
              )}
            </button>

            {mobileInfoOpen && (
              <div className="pl-4 pb-2">
                {infoLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={getLocationUrl(item.href)}
                    className="
                      block
                      px-4
                      py-2.5
                      text-xs
                      xs:text-[13px]
                      sm:text-sm
                      text-[#3A3D33]
                      hover:bg-white/60
                      hover:text-[#03C35E]
                      rounded-xl
                      transition-all
                      duration-200
                    "
                    onClick={() => {
                      setIsOpen(false);
                      setMobileInfoOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* MOBILE CITY */}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsLocationModalOpen(true);
              }}
              className="
                w-full
                flex
                items-center
                justify-between
                px-4
                py-3
                text-xs
                xs:text-[13px]
                sm:text-sm
                font-medium
                rounded-xl
                bg-[#03C35E]/90
                backdrop-blur-md
                border
                border-white/30
                text-white
                shadow-[0_5px_20px_rgba(3,195,94,0.18)]
                transition-all
                duration-300
                hover:bg-[#03C35E]
              "
            >
              <span className="flex items-center gap-2">
                <IoLocationSharp className="w-4 h-4" />
                Change City
              </span>

              <span className="text-white/80 text-xs">
                {formatLocationName(location)}
              </span>
            </button>

            {/* MOBILE GET QUOTE */}
            <Link
              href={getLocationUrl("/book")}
              className="
                block
                mt-4
                mx-4
                text-center
                bg-[#2A2E22]
                text-white
                py-3
                rounded-full
                font-medium
                text-xs
                xs:text-[13px]
                sm:text-sm
                shadow-[0_5px_20px_rgba(0,0,0,0.10)]
                transition-all
                duration-300
                hover:bg-[#03C35E]
                hover:scale-[1.02]
                active:scale-95
              "
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>

            {/* MOBILE PHONE */}
            <a
              href={`tel:${locationConfig.phone.replace(/\s/g, "")}`}
              className="
                block
                mt-3
                mx-4
                text-center
                bg-[#03C35E]/90
                backdrop-blur-md
                border
                border-white/30
                text-white
                py-3
                rounded-full
                font-medium
                text-xs
                xs:text-[13px]
                sm:text-sm
                shadow-[0_5px_20px_rgba(3,195,94,0.18)]
                transition-all
                duration-300
                hover:bg-[#03C35E]
                hover:scale-[1.02]
                active:scale-95
              "
              onClick={() => setIsOpen(false)}
            >
              {locationConfig.phone}
            </a>

            {/* TALK TO TEAM */}
            <a
              href={`tel:${locationConfig.phone.replace(/\s/g, "")}`}
              className="
                block
                px-4
                py-3
                text-[#6B6E62]
                underline
                underline-offset-4
                text-center
                text-xs
                xs:text-[13px]
                sm:text-sm
                transition-all
                duration-300
                hover:text-[#03C35E]
              "
            >
              Talk to our team
            </a>
          </div>
        )}
      </nav>

      {/* LOCATION MODAL */}

      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />
    </div>
  );
}
