"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { FaCheck } from "react-icons/fa";

interface LocalTravelPackagesProps {
  cityName: string;
  coverage: string;
  airport: string;
  airportPrice: string;
  tourPrice: string;
  hourlyPrice: string;
  dayPrice: string;
}

export default function LocalTravelPackages({
  cityName,
  coverage,
  airport,
  airportPrice,
  tourPrice,
  hourlyPrice,
  dayPrice,
}: LocalTravelPackagesProps) {
  const { getLocationUrl } = useLocation();

  const packages = [
    {
      name: "Airport Transfer",
      duration: "Per Trip",
      price: airportPrice,
      features: [
        airport,
        "Flexible Timing",
        "Professional Driver",
        "Comfortable Vehicle",
      ],
    },
    {
      name: "City Tour",
      duration: "4-8 Hours",
      price: tourPrice,
      features: [
        `${cityName} Sightseeing`,
        "Guide Available",
        "Flexible Itinerary",
        "AC Vehicle",
      ],
    },
    {
      name: "Local Travel",
      duration: "Per Hour",
      price: hourlyPrice,
      features: [
        coverage,
        "Flexible Routes",
        "Hourly Booking",
        "Professional Service",
      ],
    },
    {
      name: "Day Package",
      duration: "Full Day",
      price: dayPrice,
      features: [coverage, "Multiple Stops", "All Inclusive", "Premium Service"],
    },
  ];

  return (
    <section id="packages" className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#142236] md:text-4xl">
            Local Travel Packages
          </h2>
          <p className="text-lg text-gray-600">
            Choose a convenient package for your {cityName} journey.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="rounded-xl border border-gray-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-2 text-xl font-bold text-[#142236]">
                {pkg.name}
              </h3>
              <p className="mb-2 text-3xl font-bold text-[#03C35E]">
                {pkg.price}
              </p>
              <p className="mb-4 text-sm text-gray-500">{pkg.duration}</p>
              <ul className="mb-6 space-y-2">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <FaCheck className="text-xs text-[#03C35E]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={getLocationUrl("/book")}
                className="block rounded-full bg-[#03C35E] py-2 text-center text-white transition-colors hover:bg-[#188A31]"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
