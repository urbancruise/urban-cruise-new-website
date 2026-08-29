// components/social-media/SocialMedia.tsx
"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdEditDocument } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { useLocation } from "@/app/context/LocationContext";
import { getLocationConfig } from "@/app/lib/locationConfig";

const SocialMedia = () => {
  const [isLeftVisible, setIsLeftVisible] = useState(true);
  const [isRightVisible, setIsRightVisible] = useState(true);

  const { location } = useLocation();
  const locationConfig = getLocationConfig(location);

  // LEFT SIDE - SOCIAL MEDIA ICONS
  const leftIcons = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/UrbanCruiseIndia/",
      bg: "bg-[#03C35E]",
      hoverBg: "hover:bg-[#1877F2]",
      tooltipBg: "bg-[#1877F2]",
      tooltipArrow: "border-r-[#1877F2]",
    },
    {
      name: "X",
      icon: <FaXTwitter />,
      href: "https://x.com/UrbanCruiseIn/",
      bg: "bg-[#03C35E]",
      hoverBg: "hover:bg-[#000000]",
      tooltipBg: "bg-[#000000]",
      tooltipArrow: "border-r-[#000000]",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/company/urban-cruise-india/",
      bg: "bg-[#03C35E]",
      hoverBg: "hover:bg-[#0A66C2]",
      tooltipBg: "bg-[#0A66C2]",
      tooltipArrow: "border-r-[#0A66C2]",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      href: "https://www.youtube.com/channel/UCcJzR2o9S68CkZegozhQu2A",
      bg: "bg-[#03C35E]",
      hoverBg: "hover:bg-[#FF0000]",
      tooltipBg: "bg-[#FF0000]",
      tooltipArrow: "border-r-[#FF0000]",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/urbancruiseindia/",
      bg: "bg-[#03C35E]",
      hoverBg: "hover:bg-[#E4405F]",
      tooltipBg: "bg-[#E4405F]",
      tooltipArrow: "border-r-[#E4405F]",
    },
  ];

  // RIGHT SIDE - CONTACT ICONS
  const rightIcons = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      href: `https://wa.me/${locationConfig.phone.replace(/\s/g, "")}`,
      Bg: "bg-[#25D366]",
      hoverBg: "hover:bg-[#25D366]",
      tooltipBg: "bg-[#25D366]",
      tooltipArrow: "border-l-[#25D366]",
    },
    {
      name: "Get Quote",
      icon: <MdEditDocument />,
      href: "/contact",
      Bg: "bg-[#F7941E]",
      hoverBg: "hover:bg-[#F7941E]",
      tooltipBg: "bg-[#F7941E]",
      tooltipArrow: "border-l-[#F7941E]",
    },
    {
      name: "Call",
      icon: <TbPhoneCall />,
      href: `tel:${locationConfig.phone.replace(/\s/g, "")}`,
      Bg: "bg-[#0A66C2]",
      hoverBg: "hover:bg-[#0A66C2]",
      tooltipBg: "bg-[#0A66C2]",
      tooltipArrow: "border-l-[#0A66C2]",
    },
    {
      name: "Email",
      icon: <IoIosMail />,
      href: `mailto:${locationConfig.email}`,
      Bg: "bg-[#EA4335]",
      hoverBg: "hover:bg-[#EA4335]",
      tooltipBg: "bg-[#EA4335]",
      tooltipArrow: "border-l-[#EA4335]",
    },
  ];

  // TOGGLE FUNCTIONS
  const toggleLeft = () => {
    setIsLeftVisible(!isLeftVisible);
  };

  const toggleRight = () => {
    setIsRightVisible(!isRightVisible);
  };

  return (
    <>
      {/* LEFT SIDE - SOCIAL MEDIA Hidden on Mobile & Tablet Visible from lg */}
      <div className="fixed left-[10px] top-1/2 -translate-y-1/2 z-50 items-center gap-0 hidden lg:flex">
        {/* SOCIAL MEDIA ICONS CONTAINER */}
        <div
          className={`
            flex flex-col items-center gap-[10px]
            z-50
            bg-white/20
            backdrop-blur-xl
            backdrop-saturate-150
            p-[12px]
            rounded-2xl
            border border-white/30
            shadow-[0_8px_32px_rgba(0,0,0,0.12)]
            transition-all
            duration-500
            ease-in-out
            ${
              isLeftVisible
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-75 pointer-events-none absolute"
            }
          `}
        >
          {leftIcons.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className={`
                ${item.bg}
                ${item.hoverBg}
                group
                flex
                h-[45px]
                w-[45px]
                items-center
                justify-center
                rounded-full
                text-white
                shadow-[0_4px_12px_rgba(0,0,0,0.20)]
                transition-all
                duration-300
                hover:scale-110
                hover:shadow-[0_6px_18px_rgba(0,0,0,0.30)]
                relative
              `}
            >
              {/* ICON */}
              <span
                className="
                  text-[19px]
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                {item.icon}
              </span>

              {/* LEFT TOOLTIP SAME COLOR AS HOVER */}
              <span
                className={`
                  absolute
                  left-full
                  ml-2
                  px-3
                  py-1.5
                  ${item.tooltipBg}
                  text-white
                  text-xs
                  font-medium
                  rounded-lg
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                  whitespace-nowrap
                  pointer-events-none
                  shadow-lg
                  border
                  border-white/20
                  translate-x-[-4px]
                  group-hover:translate-x-0
                `}
              >
                {item.name}

                {/* Tooltip Arrow */}
                <span
                  className={`
                    absolute
                    right-full
                    top-1/2
                    -translate-y-1/2
                    border-8
                    border-transparent
                    ${item.tooltipArrow}
                  `}
                />
              </span>
            </a>
          ))}
        </div>

        {/* LEFT TOGGLE BUTTON */}
        <button
          onClick={toggleLeft}
          className={`
            flex
            h-[60px]
            w-[20px]
            items-center
            justify-center
            rounded-r-full
            backdrop-blur-xl
            backdrop-saturate-150
            border
            border-white/30
            shadow-[0_4px_15px_rgba(66,103,178,0.15)]
            transition-all
            duration-300
            active:scale-95
            ${
              !isLeftVisible
                ? "bg-[#03C35E] text-white rounded-l-full rounded-r-full ml-[-8px]"
                : "bg-white/20 text-[#03C35E]"
            }
          `}
          aria-label="Toggle social media"
        >
          <span
            className={`
              text-[16px] 
              transition-transform 
              duration-500 
              ease-in-out
              inline-block
              ${
                !isLeftVisible
                  ? "animate-[arrow-right-hint_0.9s_ease-in-out_infinite]"
                  : ""
              }
            `}
            style={{
              transform: isLeftVisible ? "rotate(0deg)" : "rotate(180deg)",
            }}
          >
            {isLeftVisible ? <FaChevronLeft /> : <FaChevronRight />}
          </span>
        </button>
      </div>

      {/* RIGHT SIDE - CONTACT Desktop Only */}
      <div className="fixed right-[10px] top-1/2 -translate-y-1/2 z-50 items-center gap-0 hidden lg:flex">
        {/* RIGHT TOGGLE BUTTON */}
        <button
          onClick={toggleRight}
          className={`
            flex
            h-[60px]
            w-[20px]
            items-center
            justify-center
            rounded-l-full
            backdrop-blur-xl
            backdrop-saturate-150
            border
            border-white/30
            shadow-[0_4px_15px_rgba(255,165,0,0.15)]
            transition-all
            duration-300
            active:scale-95
            ${
              !isRightVisible
                ? "bg-[#03C35E] text-white rounded-r-full rounded-l-full mr-[-8px]"
                : "bg-white/20 text-[#03C35E]"
            }
          `}
          aria-label="Toggle contact"
        >
          <span
            className={`
              text-[18px] 
              transition-transform 
              duration-500 
              ease-in-out
              inline-block
              ${
                !isRightVisible
                  ? "animate-[arrow-left-hint_0.9s_ease-in-out_infinite]"
                  : ""
              }
            `}
            style={{
              transform: isRightVisible ? "rotate(0deg)" : "rotate(180deg)",
            }}
          >
            {isRightVisible ? <FaChevronRight /> : <FaChevronLeft />}
          </span>
        </button>

        {/* CONTACT ICONS CONTAINER */}
        <div
          className={`
            flex
            z-50
            flex-col
            items-center
            gap-[10px]
            bg-white/20
            backdrop-blur-xl
            backdrop-saturate-150
            p-[12px]
            rounded-2xl
            border
            border-white/30
            shadow-[0_8px_32px_rgba(0,0,0,0.12)]
            transition-all
            duration-500
            ease-in-out
            ${
              isRightVisible
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-75 pointer-events-none absolute"
            }
          `}
        >
          {rightIcons.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={
                item.name === "WhatsApp" || item.name === "Get Quote"
                  ? "_blank"
                  : undefined
              }
              rel={
                item.name === "WhatsApp" || item.name === "Get Quote"
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={item.name}
              className={`
                group
                flex
                h-[45px]
                w-[45px]
                items-center
                justify-center
                rounded-full
                bg-[#03C35E]
                text-white
                ${item.hoverBg}
                shadow-[0_4px_12px_rgba(0,0,0,0.20)]
                transition-all
                duration-300
                hover:scale-110
                hover:shadow-[0_6px_18px_rgba(0,0,0,0.30)]
                relative
              `}
            >
              {/* ICON */}

              <span
                className="
                  text-[19px]
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                {item.icon}
              </span>

              {/* RIGHT TOOLTIP SAME COLOR AS HOVER */}
              <span
                className={`
                  absolute
                  right-full
                  mr-2
                  px-3
                  py-1.5
                  ${item.tooltipBg}
                  text-white
                  text-xs
                  font-medium
                  rounded-lg
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                  whitespace-nowrap
                  pointer-events-none
                  shadow-lg
                  border
                  border-white/20
                  translate-x-[4px]
                  group-hover:translate-x-0
                `}
              >
                {item.name}

                {/* Tooltip Arrow */}
                <span
                  className={`
                    absolute
                    left-full
                    top-1/2
                    -translate-y-1/2
                    border-8
                    border-transparent
                    ${item.tooltipArrow}
                  `}
                />
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* MOBILE & TABLET BOTTOM BAR - Visible below lg */}
      <div
        className=" fixed bottom-[8px] left-[8px] right-[8px] z-50 flex items-center justify-around bg-white px-2 py-2 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] lg:hidden max-[340px]:bottom-[6px] max-[340px]:left-[5px] max-[340px]:right-[5px] max-[340px]:px-1 max-[340px]:py-1.5 min-[341px]:max-[390px]:px-2 min-[341px]:max-[390px]:py-2 min-[391px]:max-[639px]:px-3 min-[391px]:max-[639px]:py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 md:left-[20px] md:right-[20px]
  "
      >
        {rightIcons.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={
              item.name === "WhatsApp" || item.name === "Get Quote"
                ? "_blank"
                : undefined
            }
            rel={
              item.name === "WhatsApp" || item.name === "Get Quote"
                ? "noopener noreferrer"
                : undefined
            }
            aria-label={item.name}
            className=" relative flex flex-col items-center justify-center gap-0.5 group flex-1 min-w-0 pt-[20px] max-[340px]:gap-0 max-[340px]:px-0 max-[340px]:pt-[17px] min-[341px]:max-[390px]:px-0.5 min-[341px]:max-[390px]:pt-[19px] min-[391px]:max-[639px]:pt-[21px] sm:gap-1 sm:px-2 sm:pt-[23px] md:px-3 md:pt-[24px] "
          >
            {/* MOBILE / TABLET ICON */}
            <div
              className={`
              ${item.Bg}
              ${item.hoverBg} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2/3 flex items-center
              justify-center rounded-full text-white shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-110 active:scale-95 h-[34px] w-[34px] min-[341px]:h-              [36px] min-[341px]:w-[36px] min-[391px]:h-[40px] min-[391px]:w-[40px] sm:h-[44px] sm:w-[44px] md:h-[46px] md:w-[46px]
            `}
            >
              <span className=" flex items-center justify-center text-[15px] min-[341px]:text-[16px] min-[391px]:text-[18px] sm:text-[20px] md:text-[21px] transition-transform duration-300 group-hover:scale-110 ">
                {item.icon}
              </span>
            </div>

            {/* MOBILE / TABLET LABEL */}
            <span className=" block max-w-full uppercase truncate text-center text-black font-extrabold leading-tight opacity-80 group-hover:opacity-100 transition-opacity duration-300 text-[7px] min-[341px]:text-[8px] min-[391px]:text-[9px] sm:text-[10px] md:text-[11px] ">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialMedia;
