"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useLocation } from "@/app/context/LocationContext";
import { getLocationConfig } from "@/app/lib/locationConfig";

export type DesktopMenu = "about" | "vehicles" | "services" | "info" | null;

export function useNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<DesktopMenu>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileVehiclesOpen, setMobileVehiclesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  const vehiclesRef = useRef<HTMLDivElement>(null);
  const closeTimers = useRef<Partial<Record<Exclude<DesktopMenu, null> | "category", ReturnType<typeof setTimeout>>>>({});
  const { location, selectedLocation, getLocationUrl } = useLocation();
  const pathname = usePathname();
  const locationConfig = getLocationConfig(location);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      if (currentScrollY > 30) setIsScrolled(true);
      else if (currentScrollY < 20) setIsScrolled(false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => () => {
    Object.values(closeTimers.current).forEach((timer) => {
      if (timer) clearTimeout(timer);
    });
  }, []);

  const openMenu = (menu: Exclude<DesktopMenu, null>) => {
    const timer = closeTimers.current[menu];
    if (timer) clearTimeout(timer);
    setDesktopMenu(menu);
  };

  const closeMenu = (menu: Exclude<DesktopMenu, null>) => {
    const timer = closeTimers.current[menu];
    if (timer) clearTimeout(timer);
    closeTimers.current[menu] = setTimeout(() => {
      setDesktopMenu((current) => current === menu ? null : current);
      if (menu === "vehicles") setActiveCategory(null);
    }, 200);
  };

  const openCategory = (category: string) => {
    if (closeTimers.current.category) clearTimeout(closeTimers.current.category);
    setActiveCategory(category);
  };

  const closeCategory = () => {
    if (closeTimers.current.category) clearTimeout(closeTimers.current.category);
    closeTimers.current.category = setTimeout(() => setActiveCategory(null), 200);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileAboutOpen(false);
    setMobileVehiclesOpen(false);
    setMobileServicesOpen(false);
    setMobileInfoOpen(false);
    setExpandedMobileCategory(null);
  };

  const firstPathSegment = pathname?.split("/").filter(Boolean)[0];
  const isGlobalNavigation =
    !firstPathSegment || !["delhi", "gurugram", "mumbai", "pune"].includes(firstPathSegment);
  const getAboutLink = (path: string) => isGlobalNavigation ? path : getLocationUrl(path);

  return {
    isOpen, setIsOpen, desktopMenu, activeCategory, isScrolled, scrollY,
    isLocationModalOpen, setIsLocationModalOpen, mobileAboutOpen, setMobileAboutOpen,
    mobileVehiclesOpen, setMobileVehiclesOpen, mobileServicesOpen, setMobileServicesOpen,
    mobileInfoOpen, setMobileInfoOpen, expandedMobileCategory, setExpandedMobileCategory,
    vehiclesRef, location, selectedLocation, locationConfig, getLocationUrl,
    getAboutLink, openMenu, closeMenu, openCategory, closeCategory, closeMobileMenu,
    navHeight: isScrolled ? "h-14 xs:h-16 sm:h-18 md:h-20" : "h-12 xs:h-14 sm:h-16 md:h-[68px] lg:h-[72px] xl:h-20",
    logoHeight: isScrolled ? "h-8 xs:h-9 sm:h-10 md:h-14" : "h-8 xs:h-9 sm:h-10 md:h-11 lg:h-12 xl:h-14 2xl:h-16",
    logoScale: 1.2 - Math.min(scrollY / 100, 1) * 0.08,
  };
}

export type NavbarState = ReturnType<typeof useNavbar>;
