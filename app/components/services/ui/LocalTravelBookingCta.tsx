"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { IoMdArrowForward } from "react-icons/io";

export default function LocalTravelBookingCta({
  cityName,
}: {
  cityName: string;
}) {
  const { getLocationUrl } = useLocation();

  return (
    <section className="bg-gradient-to-r from-[#03C35E] to-[#55efc4] py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Ready for Local Travel?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
          Book your local travel vehicle in {cityName} today.
        </p>
        <Link
          href={getLocationUrl("/book")}
          className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 font-semibold text-[#03C35E] shadow-lg transition-transform hover:scale-105"
        >
          Book Your Ride <IoMdArrowForward className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
