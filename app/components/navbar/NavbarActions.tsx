"use client";

import Link from "next/link";
import { FaChevronDown, FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { formatLocationName } from "@/app/lib/location";
import type { NavbarState } from "./useNavbar";

export default function NavbarActions({ state }: { state: NavbarState }) {
  const { selectedLocation, setIsLocationModalOpen, getLocationUrl, locationConfig, isOpen, setIsOpen } = state;
  return <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-4">
    <button onClick={() => setIsLocationModalOpen(true)} className="flex items-center gap-1 sm:gap-1.5 bg-[#03C35E]/90 text-white font-medium px-2 sm:px-3 md:px-4 py-1.5 md:py-2.5 rounded-full hover:bg-[#03C35E]"><IoLocationSharp /><span className="text-[10px] sm:text-xs md:text-sm">{selectedLocation ? formatLocationName(selectedLocation) : "Select City"}</span><FaChevronDown /></button>
    <Link href={getLocationUrl("/book")} className="hidden lg:flex items-center gap-1.5 bg-[#03C35E]/90 text-white px-4 xl:px-5 py-2.5 rounded-full hover:bg-[#03C35E]">Get a Quote</Link>
    <a href={`tel:${locationConfig.phone.replace(/\s/g, "")}`} className="hidden lg:flex items-center gap-1.5 bg-[#03C35E]/90 text-white px-4 xl:px-5 py-2.5 rounded-full hover:bg-[#03C35E]"><FaPhoneVolume />{locationConfig.phone}</a>
    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-full bg-white/50 border border-white/70" aria-label="Toggle menu" aria-expanded={isOpen}><span className="text-xl">{isOpen ? "×" : "☰"}</span></button>
  </div>;
}
