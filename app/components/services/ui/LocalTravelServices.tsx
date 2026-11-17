"use client";

import { FaCity } from "react-icons/fa";

export default function LocalTravelServices({
  cityName,
}: {
  cityName: string;
}) {
  const services = [
    "Airport Transfers",
    "City Tours",
    "Local Sightseeing",
    "Corporate Transport",
    "Shopping Trips",
    "Event Travel",
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#142236] md:text-4xl">
            Local Travel Services in {cityName}
          </h2>
          <p className="text-lg text-gray-600">
            Flexible transport for airport transfers, sightseeing, business, and
            everyday travel.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <FaCity className="mx-auto mb-4 text-3xl text-[#03C35E]" />
              <h3 className="text-xl font-bold text-[#142236]">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
