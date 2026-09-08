"use client";

import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { aboutLinks, infoLinks, serviceLinks, vehicleLinks } from "./constants";
import type { NavbarState } from "./useNavbar";
import { getFullServiceUrl } from "@/app/lib/serviceUrlHelper";
import { formatLocationName } from "@/app/lib/location";

export default function MobileNavigation({ state }: { state: NavbarState }) {
  const { isOpen, mobileAboutOpen, mobileVehiclesOpen, mobileServicesOpen, mobileInfoOpen, expandedMobileCategory, setMobileAboutOpen, setMobileVehiclesOpen, setMobileServicesOpen, setMobileInfoOpen, setExpandedMobileCategory, getAboutLink, getLocationUrl, location, closeMobileMenu, setIsLocationModalOpen, locationConfig, selectedLocation } = state;
  if (!isOpen) return null;
  const toggle = (open: boolean) => open ? <FaChevronUp /> : <FaChevronDown />;
  const links = (items: { href: string; label: string }[], href: (path: string) => string, close: () => void) => items.map((item) => <Link key={item.href} href={href(item.href)} className="block px-4 py-2.5 text-xs sm:text-sm text-[#3A3D33] hover:bg-white/60 hover:text-[#03C35E] rounded-xl" onClick={close}>{item.label}</Link>);
  return <div className="relative z-30 lg:hidden mt-2 border-t border-white/60 px-2 pt-3 pb-5 max-h-[75vh] overflow-y-auto bg-white/25 backdrop-blur-xl rounded-b-2xl animate-in slide-in-from-top-4 duration-300">
    <button onClick={() => setMobileAboutOpen(!mobileAboutOpen)} className={`w-full flex items-center justify-between px-4 py-3 text-xs sm:text-sm font-medium rounded-xl ${mobileAboutOpen ? "text-[#03C35E] bg-white/60" : "text-[#3A3D33] hover:bg-white/50"}`}><span>About Us</span>{toggle(mobileAboutOpen)}</button>
    {mobileAboutOpen && <div className="pl-4 pb-2">{links(aboutLinks, getAboutLink, () => setMobileAboutOpen(false))}</div>}
    <button onClick={() => setMobileVehiclesOpen(!mobileVehiclesOpen)} className={`w-full flex items-center justify-between px-4 py-3 text-xs sm:text-sm font-medium rounded-xl ${mobileVehiclesOpen ? "text-[#03C35E] bg-white/60" : "text-[#3A3D33] hover:bg-white/50"}`}><span>Our Vehicles</span>{toggle(mobileVehiclesOpen)}</button>
    {mobileVehiclesOpen && <div className="pl-4 pb-2">{vehicleLinks.map((category) => <div key={category.category}><button onClick={() => setExpandedMobileCategory(expandedMobileCategory === category.category ? null : category.category)} className="w-full flex justify-between px-4 py-2.5 text-xs sm:text-sm rounded-xl">{category.category}<span>⌄</span></button>{expandedMobileCategory === category.category && <div className="pl-4">{links(category.items, getLocationUrl, closeMobileMenu)}</div>}</div>)}</div>}
    <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className={`w-full flex items-center justify-between px-4 py-3 text-xs sm:text-sm font-medium rounded-xl ${mobileServicesOpen ? "text-[#03C35E] bg-white/60" : "text-[#3A3D33] hover:bg-white/50"}`}><span>Our Services</span>{toggle(mobileServicesOpen)}</button>
    {mobileServicesOpen && <div className="pl-4 pb-2">{links(serviceLinks, (href) => getFullServiceUrl(location, href), closeMobileMenu)}</div>}
    <button onClick={() => setMobileInfoOpen(!mobileInfoOpen)} className={`w-full flex items-center justify-between px-4 py-3 text-xs sm:text-sm font-medium rounded-xl ${mobileInfoOpen ? "text-[#03C35E] bg-white/60" : "text-[#3A3D33] hover:bg-white/50"}`}><span>Info</span>{toggle(mobileInfoOpen)}</button>
    {mobileInfoOpen && <div className="pl-4 pb-2">{links(infoLinks, getLocationUrl, closeMobileMenu)}</div>}
    <button onClick={() => { closeMobileMenu(); setIsLocationModalOpen(true); }} className="w-full flex justify-between px-4 py-3 mt-2 rounded-xl bg-[#03C35E]/90 text-white text-sm"><span>Change City</span><span>{selectedLocation ? formatLocationName(selectedLocation) : "Select City"}</span></button>
    <Link href={getLocationUrl("/book")} onClick={closeMobileMenu} className="block mt-4 mx-4 text-center bg-[#2A2E22] text-white py-3 rounded-full text-sm">Get a Quote</Link>
    <a href={`tel:${locationConfig.phone.replace(/\s/g, "")}`} onClick={closeMobileMenu} className="block mt-3 mx-4 text-center bg-[#03C35E]/90 text-white py-3 rounded-full text-sm">{locationConfig.phone}</a>
    <a href={`tel:${locationConfig.phone.replace(/\s/g, "")}`} className="block px-4 py-3 text-[#6B6E62] underline text-center text-sm">Talk to our team</a>
  </div>;
}
