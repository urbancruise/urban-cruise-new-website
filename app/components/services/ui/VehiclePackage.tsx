"use client";

import Link from "next/link";
import { FaArrowRight, FaBus, FaCalendarAlt, FaTag, FaStar } from "react-icons/fa";
import { useLocation } from "@/app/context/LocationContext";

const vehicles = [
  { vehicle: "Maruti Suzuki Ertiga",  layout: "6 Seater", charDham: "60,000", doDham: "35,000", amenities: "Captain Seats, AC, Music, Charging Point" },
  { vehicle: "Innova Crysta", layout: "6 Seater", charDham: "66,000", doDham: "38,500", amenities: "Premium Captain Seats, AC, Music, Charging Point" },
  { vehicle: "Maharaja Tempo Traveller 12 Seater VIP Seats", layout: "1x1", charDham: "1,14,000", doDham: "66,500", amenities: "VIP Pushback Maharaja Seats, Premium AC Vents, Music Headrest" },
  { vehicle: "Tempo Traveller 17 Seater", layout: "2x1", charDham: "1,20,000", doDham: "70,000", amenities: "Pushback Seats, AC, Ample Luggage Space, Music" },
  { vehicle: "Tempo Traveller 20 Seater", layout: "2x1", charDham: "1,32,000", doDham: "77,000", amenities: "Pushback Seats, AC, Ample Luggage Space, Music" },
  { vehicle: "Maharaja Tempo Traveller 20 Seater VIP", layout: "2x1", charDham: "1,44,000", doDham: "84,000", amenities: "Pushback Seats, AC, Luggage Space, Music, Spacious Cabin" },
  { vehicle: "Tempo Traveller 26 Seater", layout: "2x2", charDham: "1,44,000", doDham: "84,000", amenities: "Pushback Seats, AC, Large Luggage Space, Music" },
  { vehicle: "Force Urbania 13 Seater", layout: "2x1", charDham: "1,44,000", doDham: "84,000", amenities: "VIP Seats, Headrest, Panoramic Windows, Charging Ports" },
  { vehicle: "Force Urbania 17 Seater", layout: "2x1", charDham: "1,50,000", doDham: "87,500", amenities: "VIP Seats, Headrest, Panoramic Windows, Charging Ports" },
  { vehicle: "Bharat Benz 27 Seater Mini Bus", layout: "2x2", charDham: "2,16,000", doDham: "1,26,000", amenities: "Reclining Seats, AC Vents, USB Charging, Silent Cabin" },
];

const GRID_COLS =
  "grid-cols-[1.4fr_0.9fr_0.9fr_0.9fr_1fr_0.8fr]";

function BookNowLink() {
  const { getLocationUrl } = useLocation();

  return (
    <Link
      href={getLocationUrl("/book")}
      className="group inline-flex h-9 items-center justify-between gap-2 rounded-full bg-[#188A31] pl-4 pr-1 text-[11px] font-bold text-white shadow-sm transition-colors hover:bg-[#116d25]"
    >
      <span>Book Now</span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#188A31] transition-transform group-hover:translate-x-0.5">
        <FaArrowRight aria-hidden="true" />
      </span>
    </Link>
  );
}

export default function VehiclePackage() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-12">
      <div className="mx-auto w-full max-w-[1400px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="relative mb-7 overflow-hidden rounded-xl sm:mb-8">
          <div className="relative max-w-[720px] py-2 md:py-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-px w-8 bg-gray-400/60 sm:w-10" />
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#03C35E] sm:text-[10px]">
                Vehicles &amp; Packages
              </span>
              <span className="h-px w-8 bg-gray-400/60 sm:w-10" />
            </div>
            <h2 className="text-[25px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#142236] sm:text-[32px] md:text-[38px]">
              Vehicle-wise Package Summary
            </h2>
            <p className="mt-2 font-serif text-[18px] italic leading-tight text-[#03C35E] sm:text-[22px] md:text-[25px]">
              Char Dham Yatra &amp; Do Dham Yatra packages 2026
            </p>
            <p className="mt-3 max-w-[620px] text-[11px] leading-relaxed text-[#303944] sm:text-xs">
              Choose a comfortable Tempo Traveller for your Do Dham pilgrimage.
              Available in multiple seating layouts for family and group
              journeys across scenic Himalayan routes.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[14px] border border-[#e1e8da] bg-white shadow-[0_3px_15px_rgba(0,0,0,0.06)]">
          {/* ============ HEADER ============ */}
          <div
            className={`hidden min-h-14 ${GRID_COLS} items-stretch bg-[#F7941E] sm:grid`}
          >
            <div className="flex items-center gap-3 border-r border-white/20 px-4 md:px-6">
              <FaBus className="text-xl text-white" aria-hidden="true" />
              <span className="text-[11px] font-extrabold uppercase text-white md:text-xs">
                Vehicle
              </span>
            </div>
            <div className="flex items-center gap-3 border-r border-white/20 px-4 md:px-6">
              <FaTag className="text-lg text-white" aria-hidden="true" />
              <span className="text-[11px] font-extrabold uppercase text-white md:text-xs">
                Seating Config
              </span>
            </div>
            <div className="flex items-center gap-3 border-r border-white/20 px-4 md:px-6">
              <FaTag className="text-lg text-white" aria-hidden="true" />
              <span className="text-[11px] font-extrabold uppercase text-white md:text-xs">
                Char Dham (12 Days)
              </span>
            </div>
            <div className="flex items-center gap-3 border-r border-white/20 px-4 md:px-6">
              <FaTag className="text-lg text-white" aria-hidden="true" />
              <span className="text-[11px] font-extrabold uppercase text-white md:text-xs">
                Do Dham (7 Days)
              </span>
            </div>
            <div className="flex items-center gap-3 border-r border-white/20 px-4 md:px-6">
              <FaStar className="text-lg text-white" aria-hidden="true" />
              <span className="text-[11px] font-extrabold uppercase text-white md:text-xs">
                Amenities
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 md:px-6">
              <FaCalendarAlt
                className="text-lg text-white"
                aria-hidden="true"
              />
              <span className="text-[11px] font-extrabold uppercase text-white md:text-xs">
                Book
              </span>
            </div>
          </div>

          {/* ============ DESKTOP ROWS ============ */}
          <div className="hidden sm:block">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className={`grid ${GRID_COLS} min-h-[62px] items-center border-b border-[#e5eadf] last:border-b-0 hover:bg-[#fbfdf8]`}
              >
                {/* 1. Vehicle */}
                <div className="flex h-full items-center border-r border-[#e5eadf] px-4 md:px-6">
                  <h3 className="text-[13px] font-extrabold leading-tight text-[#171d25] sm:text-sm">
                    {vehicle.vehicle}
                  </h3>
                </div>

                {/* 2. Seating Config */}
                <div className="flex h-full items-center border-r border-[#e5eadf] px-4 md:px-6">
                  <span className="inline-flex items-center rounded-full bg-[#eef8e1] px-2.5 py-1 text-[11px] font-bold text-[#188A31]">
                    {vehicle.layout}
                  </span>
                </div>

                {/* 3. Char Dham Price */}
                <div className="flex h-full items-center border-r border-[#e5eadf] px-4 md:px-6">
                  <div className="flex items-baseline">
                    <span className="text-[20px] font-extrabold leading-none text-[#188A31] sm:text-[22px]">
                      ₹{vehicle.charDham}
                    </span>
                    <span className="ml-1 text-[10px] font-semibold text-[#188A31]">
                      /KM
                    </span>
                  </div>
                </div>

                {/* 4. Do Dham Price */}
                <div className="flex h-full items-center border-r border-[#e5eadf] px-4 md:px-6">
                  <div className="flex items-baseline">
                    <span className="text-[20px] font-extrabold leading-none text-[#188A31] sm:text-[22px]">
                      ₹{vehicle.doDham}
                    </span>
                    <span className="ml-1 text-[10px] font-semibold text-[#188A31]">
                      /KM
                    </span>
                  </div>
                </div>

                {/* 5. Amenities */}
                <div className="flex h-full items-center border-r border-[#e5eadf] px-4 md:px-6">
                  <span className="text-[11px] font-medium leading-snug text-[#424a54]">
                    {vehicle.amenities}
                  </span>
                </div>

                {/* 6. Book */}
                <div className="flex h-full items-center px-4 md:px-6">
                  <BookNowLink />
                </div>
              </div>
            ))}
          </div>

          {/* ============ MOBILE CARDS ============ */}
          <div className="space-y-2 bg-[#fafcf8] p-3 sm:hidden">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="rounded-xl border border-[#e1e9d8] bg-white p-3 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-extrabold text-[#171d25]">
                      {vehicle.vehicle}
                    </h3>
                    <p className="text-[10px] text-[#424a54]">
                      {vehicle.layout} Config
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#eef8e1] px-2.5 py-1 text-[10px] font-bold text-[#188A31]">
                    {vehicle.layout}
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-[#f7fceb] px-3 py-2">
                    <p className="text-[9px] font-bold uppercase text-[#188A31]/70">
                      Char Dham
                    </p>
                    <p className="text-sm font-extrabold text-[#188A31]">
                      ₹{vehicle.charDham}
                      <span className="ml-1 text-[10px]">/KM</span>
                    </p>
                  </div>
                  <div className="rounded-lg bg-[#f7fceb] px-3 py-2">
                    <p className="text-[9px] font-bold uppercase text-[#188A31]/70">
                      Do Dham
                    </p>
                    <p className="text-sm font-extrabold text-[#188A31]">
                      ₹{vehicle.doDham}
                      <span className="ml-1 text-[10px]">/KM</span>
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-[#e5eadf] pt-2">
                  <p className="text-[10px] text-[#424a54]">
                    {vehicle.amenities}
                  </p>
                  <BookNowLink />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}