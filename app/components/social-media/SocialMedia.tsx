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

  const leftIcons = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/UrbanCruiseIndia/",
      bg: "bg-[#03C35E]",
    },
    {
      name: "X",
      icon: <FaXTwitter />,
      href: "https://x.com/UrbanCruiseIn/",
      bg: "bg-[#03C35E]",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/company/urban-cruise-india/",
      bg: "bg-[#03C35E]",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      href: "https://www.youtube.com/channel/UCcJzR2o9S68CkZegozhQu2A",
      bg: "bg-[#03C35E]",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/urbancruiseindia/",
      bg: "bg-[#03C35E]",
    },
  ];

  // Dynamic right icons based on location
  const rightIcons = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      href: `https://wa.me/${locationConfig.phone.replace(/\s/g, "")}`,
    },
    {
      name: "Enquiry",
      icon: <MdEditDocument />,
      href: "/contact",
    },
    {
      name: "Call",
      icon: <TbPhoneCall />,
      href: `tel:${locationConfig.phone.replace(/\s/g, "")}`,
    },
    {
      name: "Email",
      icon: <IoIosMail />,
      href: `mailto:${locationConfig.email}`,
    },
  ];

  const toggleLeft = () => {
    setIsLeftVisible(!isLeftVisible);
  };

  const toggleRight = () => {
    setIsRightVisible(!isRightVisible);
  };

  return (
    <>
      {/* LEFT SIDE - SOCIAL MEDIA with Toggle Button */}
      {/* Hidden on mobile and tablet (hidden below lg screen) */}
      <div className="fixed left-[10px] top-1/2 -translate-y-1/2 z-50 items-center gap-0 hidden lg:flex">
        {/* Social Media Icons */}
        <div
          className={`flex flex-col items-center gap-[10px] bg-white/20 backdrop-blur-xl backdrop-saturate-150 p-[12px] rounded-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500 ease-in-out
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
          group flex h-[45px] w-[45px] items-center justify-center rounded-full text-white shadow-[0_4px_12px_rgba(0,0,0,0.20)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_18px_rgba(0,0,0,0.30)] relative
        `}
            >
              <span className="text-[19px] transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>

              {/* Tooltip - Positioned to the right */}
              <span className="absolute left-full ml-2 px-3 py-1.5 bg-[#03C35E] text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg border border-white/20 translate-x-[-4px] group-hover:translate-x-0">
                {item.name}
                {/* Tooltip Arrow */}
                <span className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-[#03C35E]" />
              </span>
            </a>
          ))}
        </div>

        {/* Left Toggle Button */}
        <button
          onClick={toggleLeft}
          className={`flex h-[45px] w-[18px] items-center justify-center rounded-r-full bg-white/20 backdrop-blur-xl backdrop-saturate-150 text-[#03C35E] border border-white/30 shadow-[0_4px_15px_rgba(66,103,178,0.15)] transition-all duration-300 active:scale-95
      ${!isLeftVisible ? "rounded-l-full rounded-r-full ml-[-8px]" : ""}
    `}
          aria-label="Toggle social media"
        >
          <span className="text-[12px] transition-transform duration-300">
            {isLeftVisible ? <FaChevronLeft /> : <FaChevronRight />}
          </span>
        </button>
      </div>

      {/* RIGHT SIDE - CONTACT with Toggle Button */}
      {/* On desktop: right side fixed position */}
      <div className="fixed right-[10px] top-1/2 -translate-y-1/2 z-50 items-center gap-0 hidden lg:flex">
        {/* Right Toggle Button */}
        <button
          onClick={toggleRight}
          className={`flex h-[45px] w-[18px] items-center justify-center rounded-l-full bg-white/20 backdrop-blur-xl backdrop-saturate-150 text-[#03C35E] border border-white/30 shadow-[0_4px_15px_rgba(255,165,0,0.15)] transition-all duration-300 active:scale-95
      ${!isRightVisible ? "rounded-r-full rounded-l-full mr-[-8px]" : ""}
    `}
          aria-label="Toggle contact"
        >
          <span className="text-[12px] transition-transform duration-300">
            {isRightVisible ? <FaChevronRight /> : <FaChevronLeft />}
          </span>
        </button>
        {/* Contact Icons */}
        <div
          className={`flex flex-col items-center gap-[10px] bg-white/20 backdrop-blur-xl backdrop-saturate-150 p-[12px] rounded-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500 ease-in-out
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
                item.name === "WhatsApp" || item.name === "Enquiry"
                  ? "_blank"
                  : undefined
              }
              rel={
                item.name === "WhatsApp" || item.name === "Enquiry"
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={item.name}
              className="group flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#03C35E] text-white shadow-[0_4px_12px_rgba(0,0,0,0.20)] transition-all duration-300 hover:scale-110 hover:bg-[#03C35E] hover:shadow-[0_6px_18px_rgba(0,0,0,0.30)] relative"
            >
              <span className="text-[19px] transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>

              {/* Tooltip - Positioned to the left */}
              <span className="absolute right-full mr-2 px-3 py-1.5 bg-[#03C35E] text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg border border-white/20 translate-x-[4px] group-hover:translate-x-0">
                {item.name}
                {/* Tooltip Arrow */}
                <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-[#03C35E]" />
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* MOBILE & TABLET BOTTOM BAR - Contact Icons */}
      {/* Visible only on mobile and tablet (lg and below) */}
      <div className="fixed bottom-[10px] left-0 right-0 z-50 flex items-center justify-around bg-white/20 backdrop-blur-xl backdrop-saturate-150 p-3 mx-[10px] rounded-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.12)] lg:hidden">
        {rightIcons.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={
              item.name === "WhatsApp" || item.name === "Enquiry"
                ? "_blank"
                : undefined
            }
            rel={
              item.name === "WhatsApp" || item.name === "Enquiry"
                ? "noopener noreferrer"
                : undefined
            }
            aria-label={item.name}
            className="flex flex-col items-center gap-0.5 group"
          >
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#03C35E] text-white shadow-[0_4px_12px_rgba(0,0,0,0.20)] transition-all duration-300 hover:scale-110 active:scale-95">
              <span className="text-[18px]">{item.icon}</span>
            </div>
            <span className="text-[8px] text-black font-bold font-medium opacity-80 group-hover:opacity-100 transition-opacity">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialMedia;
