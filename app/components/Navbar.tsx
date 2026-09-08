"use client";

import Link from "next/link";
import Image from "next/image";
import LocationModal from "./LocationModal";
import DesktopNavigation from "./navbar/DesktopNavigation";
import MobileNavigation from "./navbar/MobileNavigation";
import NavbarActions from "./navbar/NavbarActions";
import { useNavbar } from "./navbar/useNavbar";

export default function Navbar() {
  const state = useNavbar();
  const { isScrolled, navHeight, logoHeight, logoScale, getLocationUrl, isLocationModalOpen, setIsLocationModalOpen } = state;

  return <div className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ease-out ${isScrolled ? "px-0 pt-0" : "pt-1 xs:pt-2 sm:pt-3 md:pt-4 lg:pt-6 px-1 xs:px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8"}`}>
    <nav className={`mx-auto relative overflow-visible transition-all duration-500 ease-out bg-white/40 backdrop-blur-[24px] border border-white/70 ring-1 ring-black/[0.03] ${isScrolled ? "rounded-none max-w-full bg-white/65 shadow-[0_8px_30px_rgba(0,0,0,0.10)]" : "rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-full max-w-7xl shadow-[0_8px_35px_rgba(0,0,0,0.12)]"} px-2 sm:px-4 md:px-5 lg:px-6`}>
      <div className="absolute inset-0 rounded-[inherit] pointer-events-none bg-gradient-to-b from-white/55 via-white/15 to-transparent" />
      <div className={`relative z-20 flex items-center justify-between transition-all duration-500 ease-out ${navHeight}`}>
        <Link href={getLocationUrl("/")} className="flex items-center px-5 gap-2 shrink-0">
          <Image src="/images/logo.webp" alt="Urban Cruise" width={380} height={75} priority className={`w-auto object-contain transition-all duration-500 ${logoHeight}`} style={{ transform: `scale(${logoScale})` }} />
        </Link>
        <DesktopNavigation state={state} />
        <NavbarActions state={state} />
      </div>
      <MobileNavigation state={state} />
    </nav>
    <LocationModal isOpen={isLocationModalOpen} onClose={() => setIsLocationModalOpen(false)} />
  </div>;
}
