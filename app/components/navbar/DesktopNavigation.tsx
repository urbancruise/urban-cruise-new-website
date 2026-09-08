"use client";

import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { getFullServiceUrl } from "@/app/lib/serviceUrlHelper";
import { aboutLinks, dropdownClassName, infoLinks, linkClassName, serviceLinks, vehicleLinks } from "./constants";
import type { NavbarState } from "./useNavbar";

interface DesktopNavigationProps {
  state: NavbarState;
}

function MenuButton({ label, open }: { label: string; open: boolean }) {
  return (
    <button className={`flex items-center gap-1.5 font-medium cursor-pointer whitespace-nowrap transition-all duration-300 ${open ? "text-[#03C35E]" : "text-[#3A3D33] hover:text-[#03C35E]"}`}>
      {label}
      {open ? <FaChevronUp className="w-2.5 h-2.5 sm:w-[14px] sm:h-[14px]" /> : <FaChevronDown className="w-2.5 h-2.5 sm:w-[14px] sm:h-[14px]" />}
    </button>
  );
}

export default function DesktopNavigation({ state }: DesktopNavigationProps) {
  const { desktopMenu, activeCategory, getAboutLink, getLocationUrl, location, openMenu, closeMenu, openCategory, closeCategory, vehiclesRef } = state;
  const renderLinks = (links: { href: string; label: string }[], getHref: (href: string) => string, close: () => void) =>
    links.map((item) => <Link key={item.href} href={getHref(item.href)} className={linkClassName} onClick={close}>{item.label}</Link>);

  return (
    <div className="hidden lg:flex items-center gap-2 lg:gap-3 xl:gap-4 2xl:gap-6">
      <div className="relative" onMouseEnter={() => openMenu("about")} onMouseLeave={() => closeMenu("about")}>
        <MenuButton label="About Us" open={desktopMenu === "about"} />
        {desktopMenu === "about" && <div className={`${dropdownClassName} w-52 sm:w-56 md:w-60 lg:w-64`} onMouseEnter={() => openMenu("about")} onMouseLeave={() => closeMenu("about")}>{renderLinks(aboutLinks, getAboutLink, () => closeMenu("about"))}</div>}
      </div>
      <div ref={vehiclesRef} className="relative" onMouseEnter={() => openMenu("vehicles")} onMouseLeave={() => closeMenu("vehicles")}>
        <MenuButton label="Our Vehicles" open={desktopMenu === "vehicles"} />
        {desktopMenu === "vehicles" && <div className={`${dropdownClassName} w-64 lg:w-72 xl:w-80 overflow-visible`} onMouseEnter={() => openMenu("vehicles")} onMouseLeave={() => closeMenu("vehicles")}>
          {vehicleLinks.map((category) => <div key={category.category} className="relative" onMouseEnter={() => openCategory(category.category)} onMouseLeave={closeCategory}>
            <div className={`flex items-center justify-between px-4 py-2.5 cursor-pointer hover:bg-[#F3EFE4] ${activeCategory === category.category ? "bg-[#F3EFE4] text-[#03C35E]" : "text-[#3A3D33]"}`}>
              <span className="text-xs sm:text-sm font-medium">{category.category}</span><span className="text-lg">›</span>
            </div>
            {activeCategory === category.category && <div className="absolute left-full top-0 w-64 xl:w-72 bg-white/90 backdrop-blur-2xl border border-white/80 rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.14)] overflow-hidden py-2" onMouseEnter={() => openCategory(category.category)} onMouseLeave={closeCategory}>{renderLinks(category.items, getLocationUrl, () => closeMenu("vehicles"))}</div>}
          </div>)}
        </div>}
      </div>
      <div className="relative" onMouseEnter={() => openMenu("services")} onMouseLeave={() => closeMenu("services")}>
        <MenuButton label="Our Services" open={desktopMenu === "services"} />
        {desktopMenu === "services" && <div className={`${dropdownClassName} w-64`} onMouseEnter={() => openMenu("services")} onMouseLeave={() => closeMenu("services")}>{renderLinks(serviceLinks, (href) => getFullServiceUrl(location, href), () => closeMenu("services"))}</div>}
      </div>
      <div className="relative" onMouseEnter={() => openMenu("info")} onMouseLeave={() => closeMenu("info")}>
        <MenuButton label="Info" open={desktopMenu === "info"} />
        {desktopMenu === "info" && <div className={`${dropdownClassName} w-56`} onMouseEnter={() => openMenu("info")} onMouseLeave={() => closeMenu("info")}>{renderLinks(infoLinks, getLocationUrl, () => closeMenu("info"))}</div>}
      </div>
    </div>
  );
}
