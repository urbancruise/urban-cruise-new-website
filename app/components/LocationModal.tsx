// app/components/LocationModal.tsx
"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useLocation } from "@/app/context/LocationContext";
import { formatLocationName, AVAILABLE_LOCATIONS } from "@/app/lib/location";
import {
  FaSearch,
  FaTimes,
  FaMapMarkerAlt,
  FaCheck,
  FaCity,
  FaLocationArrow,
} from "react-icons/fa";
import { IoClose, IoSearch } from "react-icons/io5";
import Image from "next/image";
import { TbCurrentLocation } from "react-icons/tb";

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// City image mappings
const CITY_IMAGES: Record<string, string> = {
  delhi: "/images/CitiesIcon/delhi.webp",
  mumbai: "/images/CitiesIcon/mumbai.webp",
  pune: "/images/CitiesIcon/pune.webp",
  gurugram: "/images/CitiesIcon/gurugram.webp",
};

const FALLBACK_IMAGE = "/images/CitiesIcon/fallback.webp";

function getCityImage(loc: string) {
  return CITY_IMAGES[loc] || FALLBACK_IMAGE;
}

export default function LocationModal({ isOpen, onClose }: LocationModalProps) {
  const { location, setLocation } = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  // Reset transient UI state each time the modal opens
  useEffect(() => {
    if (isOpen) {
      setSearchTerm("");
      setActiveFilter("all");
    }
  }, [isOpen]);

  const handleLocationSelect = (loc: string) => {
    setLocation(loc);
    onClose();
  };

  const handlePillClick = (loc: string) => {
    setActiveFilter(loc);
    setSearchTerm("");
  };

  const filteredLocations = useMemo(() => {
    return AVAILABLE_LOCATIONS.filter((loc) => {
      const matchesSearch = formatLocationName(loc)
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === "all" || activeFilter === loc;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-2 sm:p-4 animate-in fade-in duration-200">
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 mx-2 sm:mx-4"
      >
        {/* Close button - adjusted for all screens */}
        <button
          onClick={onClose}
          className="absolute right-2 sm:right-3 md:right-4 top-2 sm:top-3 md:top-4 z-10 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-all duration-300 hover:scale-110"
          aria-label="Close modal"
        >
          <IoClose className="text-base sm:text-lg md:text-xl" />
        </button>

        <div className="max-h-[85vh] overflow-y-auto px-3 sm:px-6 md:px-8 lg:px-10 pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6">
          {/* Header - responsive text sizes */}
          <div className="text-center mb-3 sm:mb-4 md:mb-5">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1 sm:mb-2">
              <span className="h-px w-4 sm:w-6 md:w-8 bg-[#03C35E]" />
              <span className="text-[#03C35E] font-semibold tracking-wide text-xs sm:text-sm md:text-base lg:text-lg">
                Choose Your City
              </span>
              <span className="h-px w-4 sm:w-6 md:w-8 bg-[#03C35E]" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              Find Our Services in Your City
            </h2>
          </div>

          {/* Search Bar - responsive sizing */}
          <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-4 sm:mb-5">
            <div className="relative">
              <IoSearch className="absolute text-base sm:text-lg md:text-xl left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search your city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 sm:pl-10 md:pl-11 pr-8 sm:pr-9 md:pr-10 py-1.5 sm:py-2 rounded-full border-2 border-gray-200 focus:ring-2 focus:ring-[#03C35E] focus:border-transparent outline-none transition-all duration-300 text-gray-700 placeholder:text-xs sm:placeholder:text-sm placeholder-gray-400"
                autoFocus
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimes className="text-xs sm:text-sm" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Pills - responsive sizing and wrapping */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 mb-4 sm:mb-6 md:mb-8 px-1">
            <button
              onClick={() => handlePillClick("all")}
              className={`flex items-center gap-1 px-2.5 sm:px-3 md:px-3.5 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === "all"
                  ? "bg-[#03C35E] border-[#03C35E] text-white shadow-sm"
                  : "bg-white border-gray-200 text-gray-700 hover:border-[#03C35E] hover:text-[#03C35E]"
              }`}
            >
              <TbCurrentLocation className="text-base sm:text-lg md:text-xl" />
              <span className="hidden xs:inline">All</span>
              <span className="xs:hidden">All</span>
            </button>
            {AVAILABLE_LOCATIONS.map((loc) => {
              const isActive = activeFilter === loc;
              const imageSrc = getCityImage(loc);
              return (
                <button
                  key={loc}
                  onClick={() => handlePillClick(loc)}
                  className={`flex items-center gap-1 px-2.5 sm:px-3 md:px-3.5 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#03C35E] border-[#03C35E] text-white shadow-sm"
                      : "bg-white border-gray-200 text-gray-700 hover:border-[#03C35E] hover:text-[#03C35E]"
                  }`}
                >
                  <div className="relative w-4 h-4 sm:w-5 sm:h-5 overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={formatLocationName(loc)}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="hidden xs:inline">{formatLocationName(loc)}</span>
                  <span className="xs:hidden">{formatLocationName(loc).substring(0, 3)}</span>
                </button>
              );
            })}
          </div>

          {/* City Grid - responsive columns */}
          {filteredLocations.length === 0 ? (
            <div className="text-center py-8 sm:py-10 md:py-12">
              <FaCity className="text-3xl sm:text-4xl text-gray-300 mx-auto mb-2 sm:mb-3" />
              <p className="text-sm sm:text-base text-gray-500">
                No cities found matching &ldquo;{searchTerm}&rdquo;
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
              {filteredLocations.map((loc) => {
                const isActive = location === loc;
                const imageSrc = getCityImage(loc);

                return (
                  <button
                    key={loc}
                    onClick={() => handleLocationSelect(loc)}
                    className={`group relative flex flex-col items-center gap-1.5 sm:gap-2 md:gap-3 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${
                      isActive
                        ? "border-[#03C35E] bg-[#F0FFF5] shadow-md shadow-[#03C35E]/10"
                        : "border-gray-100 hover:border-[#03C35E]/40 hover:bg-gray-50"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#03C35E] flex items-center justify-center">
                        <FaCheck className="text-white text-[8px] sm:text-xs" />
                      </div>
                    )}

                    {/* City Image - responsive sizing */}
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 p-2 sm:p-3 md:p-4 rounded-full overflow-hidden border transition-all duration-300 ${
                        isActive
                          ? "border-[#03C35E]/30 ring ring-[#03C35E]/20"
                          : "border-gray-100 group-hover:border-[#03C35E]/30"
                      }`}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={imageSrc}
                          alt={formatLocationName(loc)}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <h3
                      className={`font-bold text-xs sm:text-sm md:text-base transition-colors duration-300 ${
                        isActive ? "text-[#03C35E]" : "text-gray-800"
                      }`}
                    >
                      {formatLocationName(loc)}
                    </h3>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer - responsive */}
        <div className="px-3 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 bg-gray-50 border-t border-gray-100">
          <div className="flex flex-row xs:flex-row items-center justify-between text-[10px] sm:text-xs text-gray-500 gap-1 sm:gap-0">
            <span>{AVAILABLE_LOCATIONS.length} cities available</span>
            <span className="flex items-center gap-1 sm:gap-1.5">
              <FaMapMarkerAlt className="text-[#03C35E] text-xs sm:text-sm" />
              <span className="hidden xs:inline">Current:</span>
              <span className="font-semibold text-[#03C35E] text-[10px] sm:text-xs">
                {formatLocationName(location)}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
