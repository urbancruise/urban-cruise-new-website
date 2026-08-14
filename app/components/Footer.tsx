"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { formatLocationName } from "@/app/lib/location";
import { getLocationConfig } from "@/app/lib/locationConfig";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaCar,
  FaChevronRight,
  FaUser,
  FaUserFriends,
  FaUsers,
  FaNewspaper,
} from "react-icons/fa";
import { useState, type FormEvent } from "react";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { FaBus, FaVanShuttle } from "react-icons/fa6";
import { BsFillBusFrontFill } from "react-icons/bs";
import { TbBusFilled, TbCarSuvFilled, TbMessageQuestion } from "react-icons/tb";
import { IoCarSport, IoHome } from "react-icons/io5";
import { PiNotePencilBold, PiPhoneCallFill } from "react-icons/pi";
import { HiAcademicCap } from "react-icons/hi";
import { MdPrivacyTip, MdWifiCalling3 } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";

const quickLinks = [
  { label: "Home", icon: IoHome, href: "/" },
  { label: "About Us", icon: FaUser, href: "/about-us" },
  { label: "Career", icon: HiAcademicCap, href: "/careers-at-urban-cruise" },
  { label: "Partner", icon: FaUserFriends, href: "/partner" },
  { label: "Contact Us", icon: MdWifiCalling3, href: "/contact-us" },
  { label: "Happy Customers", icon: FaUsers, href: "/testimonials" },
];

// Vehicle links from Navbar
const vehicleLinks = [
  {
    category: "Car & SUVs",
    icon: FaCar,
    items: [
      { href: "/car-rental-delhi", label: "Car & SUVs" },
      { href: "/ertiga-on-rent", label: "Ertiga" },
      { href: "/innova-crysta-on-rent", label: "Innova Crysta" },
      { href: "/innova-hycross-on-rent", label: "Hycross" },
    ],
  },
  {
    category: "Luxury Cars, SUVs, Vans",
    icon: IoCarSport,
    items: [
      { href: "/luxury-car-rental-delhi", label: "Luxury Cars & SUVs" },
      { href: "/mercedes-sprinter-van-rental", label: "Mercedes Sprinter" },
      { href: "/luxury-van-rental-delhi", label: "Luxury Vans" },
    ],
  },
  {
    category: "Tempo Traveller",
    icon: FaVanShuttle,
    items: [
      { href: "/tempo-traveller-delhi", label: "Tempo Traveller" },
      {
        href: "/maharaja-tempo-traveller-delhi",
        label: "Maharaja Tempo Traveller",
      },
    ],
  },
  {
    category: "Urbania",
    icon: TbBusFilled,
    items: [{ href: "/force-urbania-on-rent", label: "Urbania" }],
  },
  {
    category: "Mini Bus",
    icon: FaBus,
    items: [{ href: "/mini-bus-delhi", label: "Mini Bus" }],
  },
  {
    category: "Luxury Buses",
    icon: BsFillBusFrontFill,
    items: [
      { href: "/bus-rental-delhi", label: "Luxury Bus" },
      { href: "/volvo-bus-on-rent", label: "Volvo Bus" },
      { href: "/bharat-benz-bus-on-rent", label: "Bharat Benz Bus" },
      { href: "/bus-with-washroom", label: "Bus With Washroom" },
      { href: "/sleeper-bus-on-rent", label: "Sleeper | Semi Sleeper Bus" },
    ],
  },
];

const infoLinks = [
  { label: "FAQ's", icon: TbMessageQuestion, href: "/faqs" },
  { label: "Blog", icon: PiNotePencilBold, href: "/blog" },
  { label: "News & Media", icon: FaNewspaper, href: "/news-media" },
  { label: "Privacy", icon: MdPrivacyTip, href: "/privacy-policy" },
  { label: "Terms & Conditions", icon: LuNotebookPen, href: "/terms-conditions" },
];

// Static social links (without Mail and WhatsApp)
const socials = [
  {
    label: "Facebook",
    icon: FaFacebook,
    href: "https://www.facebook.com/UrbanCruiseIndia/",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/urbancruiseindia/",
  },
  { label: "Twitter", icon: FaTwitter, href: "https://x.com/UrbanCruiseIn" },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/urban-cruise-india/",
  },
  {
    label: "YouTube",
    icon: FaYoutube,
    href: "https://www.youtube.com/channel/UCcJzR2o9S68CkZegozhQu2A",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { location, getLocationUrl } = useLocation();
  const locationConfig = getLocationConfig(location);
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // State for dropdown toggles
  const [openCategories, setOpenCategories] = useState<{
    [key: string]: boolean;
  }>({});

  // Hover handlers
  const handleMouseEnter = (category: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: true,
    }));
  };

  const handleMouseLeave = (category: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: false,
    }));
  };

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubscribeStatus("success");
      setEmail("");
      setTimeout(() => setSubscribeStatus("idle"), 3000);
    }
  };

  // Responsive logo sizes
  const getLogoDimensions = () => {
    return {
      width: 400,
      height: 96,
      className:
        "h-[52px] xs:h-[56px] sm:h-[62px] ms:h-[68px] md:h-[78px] lg:h-[85px] xl:h-[95px] 2xl:h-[110px] w-auto",
    };
  };

  // Dynamic social links with Mail and WhatsApp from locationConfig
  const dynamicSocials = [
    ...socials,
    {
      label: "Mail",
      icon: IoMdMail,
      href: `mailto:${locationConfig.email}`,
    },
    {
      label: "Whatsapp",
      icon: FaWhatsapp,
      href: `https://wa.me/${locationConfig.phone.replace(/\s/g, "")}`,
    },
  ];

  return (
    <footer className="bg-[#fefefe] w-full overflow-x-hidden">
      {/* Main Footer */}
      <div
        className="relative pt-8 xs:pt-9 sm:pt-10 md:pt-14 lg:pt-16 xl:pt-20"
        style={{ paddingBottom: "clamp(190px, 16vw, 300px)" }}
      >
        <div className="pt-6 xs:pt-7 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-16 pb-4 xs:pb-5 sm:pb-6 md:pb-8 lg:pb-9 xl:pb-10">
          <div className="container max-w-[1800px] mx-auto px-4 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10">
            {/* Responsive Grid — no orphaned item at any breakpoint */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-7 xs:gap-8 sm:gap-8 md:gap-9 lg:gap-10 xl:gap-12">
              {/* Brand / Get in touch */}
              <div className="md:col-span-2 lg:col-span-1 xl:col-span-1">
                {/* Logo */}
                <Link
                  href={getLocationUrl("/")}
                  className="flex items-center gap-1.5 sm:gap-2 shrink-0 transition-all duration-500 ease-out"
                >
                  <Image
                    src="/images/logo.webp"
                    alt="Urban Cruise"
                    width={400}
                    height={96}
                    priority
                    className={`w-auto object-contain transition-all duration-500 ease-out ${getLogoDimensions().className}`}
                    style={{
                      transform: "scale(1)",
                      transition:
                        "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  />
                </Link>

                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-light leading-[22px] sm:leading-[24px] md:leading-[26px] text-[#6a7695] mb-4 sm:mb-5 mt-3 sm:mt-4">
                  Reliable and comfortable car &amp; bus rental services for
                  outstation trips, corporate travel, events and more.
                </p>

                {/* Follow Us */}
                <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-[#1c2b45] mb-1">
                  Follow Us
                </h3>
                <span className="block w-6 sm:w-8 h-[2px] sm:h-[3px] bg-[#03C35E] rounded mb-4 sm:mb-5" />
                <div className="flex flex-wrap gap-5 sm:gap-3 mb-6 sm:mb-8">
                  {dynamicSocials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[32px] sm:w-[38px] lg:w-[42px] h-[32px] sm:h-[38px] lg:h-[42px] rounded-full border border-[#03C35E]/60 flex items-center justify-center text-[13px] sm:text-[15px] lg:text-[16px] text-[#03C35E] hover:bg-[#03C35E] hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label={s.label}
                    >
                      <s.icon />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links with Icons */}
              <div>
                <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-[#1c2b45] mb-1">
                  Quick Links
                </h3>
                <span className="block w-6 sm:w-8 h-[2px] sm:h-[3px] bg-[#03C35E] rounded mb-4 sm:mb-5" />
                <ul className="space-y-[10px] sm:space-y-[13px] lg:space-y-[15px]">
                  {quickLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={getLocationUrl(item.href)}
                        className="flex items-center gap-2 text-[13px] sm:text-[15px] lg:text-[16px] text-[#6a7695] hover:text-[#03C35E] transition-colors duration-300"
                      >
                        <span className="text-[#03C35E] text-[14px] sm:text-[16px]">
                          {item.icon ? <item.icon /> : <FaChevronRight />}
                        </span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Vehicles with Hover Dropdown */}
              <div>
                <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-[#1c2b45] mb-1">
                  Our Vehicles
                </h3>
                <span className="block w-6 sm:w-8 h-[2px] sm:h-[3px] bg-[#03C35E] rounded mb-4 sm:mb-5" />
                <ul className="space-y-[10px] sm:space-y-[13px] lg:space-y-[15px]">
                  {vehicleLinks.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <li
                        key={category.category}
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(category.category)}
                        onMouseLeave={() => handleMouseLeave(category.category)}
                      >
                        <div className="flex items-center justify-between w-full text-[13px] sm:text-[15px] lg:text-[16px] text-[#6a7695] hover:text-[#03C35E] transition-colors duration-300 cursor-default">
                          <span className="flex items-center gap-2">
                            <span className="text-[#03C35E] text-[14px] sm:text-[16px]">
                              <IconComponent />
                            </span>
                            {category.category}
                          </span>
                        </div>
                        {openCategories[category.category] && (
                          <ul className="ml-6 sm:ml-7 md:ml-8 mt-2 space-y-[6px] sm:space-y-[8px] lg:space-y-[10px]">
                            {category.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={getLocationUrl(item.href)}
                                  className="flex items-center gap-2 sm:gap-2.5 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-[#6a7695] hover:text-[#03C35E] transition-colors duration-300"
                                >
                                  <span className="text-[#03C35E] text-[10px] sm:text-[11px] md:text-[12px] transition-transform duration-300">
                                    <FaChevronRight />
                                  </span>
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Info Section with Icons */}
              <div>
                <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-[#1c2b45] mb-1">
                  Info
                </h3>
                <span className="block w-6 sm:w-8 h-[2px] sm:h-[3px] bg-[#03C35E] rounded mb-4 sm:mb-5" />
                <ul className="space-y-[10px] sm:space-y-[13px] lg:space-y-[15px]">
                  {infoLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={getLocationUrl(item.href)}
                        className="flex items-center gap-2 text-[13px] sm:text-[15px] lg:text-[16px] text-[#6a7695] hover:text-[#03C35E] transition-colors duration-300"
                      >
                        <span className="text-[#03C35E] text-[14px] sm:text-[16px] lg:text-[18px]">
                          {item.icon ? <item.icon /> : <FaChevronRight />}
                        </span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Us with dynamic location info */}
              <div className="md:col-span-2 lg:col-span-1 xl:col-span-1">
                <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-[#1c2b45] mb-1">
                  Contact Us
                </h3>
                <span className="block w-6 sm:w-8 h-[2px] sm:h-[3px] bg-[#03C35E] rounded mb-4 sm:mb-5" />
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center gap-2 sm:gap-3">
                    <span className="w-[30px] sm:w-[38px] md:w-[40px] h-[30px] sm:h-[38px] md:h-[40px] rounded-full border border-[#03C35E]/60 flex items-center justify-center text-[#03C35E] text-[11px] sm:text-[13px] md:text-[14px] shrink-0">
                      <FaPhoneAlt />
                    </span>
                    <a
                      href={`tel:${locationConfig.phone.replace(/\s/g, "")}`}
                      className="text-[13px] sm:text-[15px] lg:text-[16px] text-[#6a7695] hover:text-[#03C35E] transition-colors duration-300 break-all sm:break-normal"
                    >
                      {locationConfig.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3">
                    <span className="w-[30px] sm:w-[38px] md:w-[40px] h-[30px] sm:h-[38px] md:h-[40px] rounded-full border border-[#03C35E]/60 flex items-center justify-center text-[#03C35E] text-[11px] sm:text-[13px] md:text-[14px] shrink-0">
                      <FaEnvelope />
                    </span>
                    <a
                      href={`mailto:${locationConfig.email}`}
                      className="text-[13px] sm:text-[15px] lg:text-[16px] text-[#6a7695] hover:text-[#03C35E] transition-colors duration-300 break-all sm:break-normal"
                    >
                      {locationConfig.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="w-[30px] sm:w-[38px] md:w-[40px] h-[30px] sm:h-[38px] md:h-[40px] rounded-full border border-[#03C35E]/60 flex items-center justify-center text-[#03C35E] text-[11px] sm:text-[13px] md:text-[14px] shrink-0 mt-0.5">
                      <FaMapMarkerAlt />
                    </span>
                    <span className="text-[13px] sm:text-[15px] lg:text-[16px] text-[#6a7695] leading-snug">
                      {locationConfig.address}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Background Animations */}
        <div
          className="absolute bottom-0 w-full pointer-events-none"
          style={{ height: "clamp(180px, 15.5vw, 400px)" }}
        >
          {/* Background pattern */}
          <div
            className="absolute bottom-0 w-full h-full bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url("/images/Footer final 2.webp")`,
            }}
          />

          {/* Animated car (Gif.gif) */}
          <div
            className="absolute animate-[myfirst_22s_linear_infinite] bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url("/images/Gif.gif")`,
              width: "clamp(180px, 13.6vw, 350px)",
              height: "clamp(60px, 4.1vw, 105px)",
              left: "30%",
              bottom: "0",
            }}
          />

          {/* Animated car (car.gif) */}
          <div
            className="absolute animate-[myfirst_30s_linear_infinite] bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url("/images/car.gif")`,
              width: "clamp(150px, 6vw, 250px)",
              height: "clamp(60px, 3.9vw, 100px)",
              left: "38%",
              bottom: "-2%",
            }}
          />

          {/* Animated cyclist */}
          <div
            className="absolute animate-[myfirst_38s_linear_infinite] bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyLGwEUVwPK6Vi8xXMymsc-ZXVwLWyXhogZxbcXQYSY55REw_0D4VTQnsVzCrL7nsyjd0P7RVOI5NKJbQ75koZIalD8mqbMquP20fL3DxsWngKkOLOzoOf9sMuxlbyfkIBTsDw5WFUj-YJiI50yzgVjF8cZPHhEjkOP_PRTQXDHEq8AyWpBiJdN9SfQA/s16000/cyclist.gif")`,
              width: "clamp(60px, 3.4vw, 88px)",
              height: "clamp(50px, 3.1vw, 80px)",
              left: "46%",
              bottom: "1%",
            }}
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-5 sm:pt-6 md:pt-7 lg:pt-8 pb-7 sm:pb-9 md:pb-10 lg:pb-12 text-[12px] sm:text-[14px] lg:text-[15px] font-light leading-5 text-[#7f88a6]">
        <div className="container max-w-[1800px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="mb-0 text-center sm:text-left text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px]">
              &copy; Urban Cruise {currentYear}. All rights reserved. | Serving
              in {formatLocationName(location)}
            </p>
            <p className="text-center sm:text-right text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px]">
              Made with <span className="text-[#D94b2b]">❤️</span> in{" "}
              <a
                href="#"
                target="_blank"
                className="text-[#D94b2b] font-bold hover:underline transition-colors duration-300"
              >
                Urban Cruise
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes myfirst {
          0% {
            left: -18%;
          }
          100% {
            left: 112%;
          }
        }
        .animate-\\[myfirst_22s_linear_infinite\\] {
          animation: myfirst 22s linear infinite;
        }
        .animate-\\[myfirst_30s_linear_infinite\\] {
          animation: myfirst 30s linear infinite;
        }
        .animate-\\[myfirst_38s_linear_infinite\\] {
          animation: myfirst 38s linear infinite;
        }
        .rotate-180 {
          transform: rotate(180deg);
        }
      `}</style>
    </footer>
  );
}
