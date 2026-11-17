"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import type { IconType } from "react-icons";
import {
  FaCar,
  FaCheck,
  FaCity,
  FaClock,
  FaShieldAlt,
  FaTaxi,
  FaTrophy,
  FaUsers,
  FaWifi,
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import About from "./About";
import AboutService from "./AboutService";
import Faqs from "./Faqs";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import OurTrustedPartner from "./OurTrustedPartner";
import Testimonial from "./Testimonial";
import VehicleForEveryGroupSize from "./VehicleForEveryGroupSize";
import VehicleForEveryOccasion from "./VehicleForEveryOccasion";
import VehicleRentalServiceInIndia from "./VehicleRentalServiceInIndia";
import WhyChooseUrbanCruise from "./WhyChooseUrbanCruise";
import type { ServiceLocation } from "./types";

interface LocalTravelPageSectionsProps {
  location: ServiceLocation;
  cityName: string;
  coverage: string;
  airport: string;
  airportPrice: string;
  tourPrice: string;
  hourlyPrice: string;
  dayPrice: string;
  cmsSections?: Record<string, unknown> | null;
}

interface LocalTravelFeature {
  icon: IconType;
  label: string;
  value: string;
}

export default function LocalTravelPageSections({
  location,
  cityName,
  coverage,
  airport,
  airportPrice,
  tourPrice,
  hourlyPrice,
  dayPrice,
  cmsSections,
}: LocalTravelPageSectionsProps) {
  const { getLocationUrl } = useLocation();

  const features: LocalTravelFeature[] = [
    { icon: FaClock, label: "Service", value: "24/7" },
    { icon: FaUsers, label: "Capacity", value: "Flexible" },
    { icon: FaShieldAlt, label: "Safety", value: "Priority" },
    { icon: FaCar, label: "Fleet", value: "Diverse" },
    { icon: FaCity, label: "Coverage", value: coverage },
    { icon: FaTrophy, label: "Rating", value: "4.8★" },
    { icon: FaTaxi, label: "Service", value: "Reliable" },
    { icon: FaWifi, label: "Connectivity", value: "Available" },
  ];

  const services = [
    "Airport Transfers",
    "City Tours",
    "Local Sightseeing",
    "Corporate Transport",
    "Shopping Trips",
    "Event Travel",
  ];

  const packages = [
    {
      name: "Airport Transfer",
      duration: "Per Trip",
      price: airportPrice,
      features: [airport, "Flexible Timing", "Professional Driver", "Comfortable Vehicle"],
    },
    {
      name: "City Tour",
      duration: "4-8 Hours",
      price: tourPrice,
      features: [`${cityName} Sightseeing`, "Guide Available", "Flexible Itinerary", "AC Vehicle"],
    },
    {
      name: "Local Travel",
      duration: "Per Hour",
      price: hourlyPrice,
      features: [coverage, "Flexible Routes", "Hourly Booking", "Professional Service"],
    },
    {
      name: "Day Package",
      duration: "Full Day",
      price: dayPrice,
      features: [coverage, "Multiple Stops", "All Inclusive", "Premium Service"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Hero
        location={location}
        content={{
          eyebrow: `Local Travel Service in ${cityName}`,
          title: `${cityName} Local`,
          titleHighlight: "Travel Service",
          description: `Book reliable local travel in ${coverage}, including airport transfers, city tours, and comfortable daily transportation.`,
          backgroundImageAlt: `Local travel service in ${cityName}`,
          vehiclesImageAlt: `Cars and buses for local travel in ${cityName}`,
        }}
        cmsContent={cmsSections?.hero}
      />
      <About location={location} content={cmsSections?.about} />
      <HowItWorks location={location} content={cmsSections?.howitworks} />
      <VehicleForEveryGroupSize
        location={location}
        content={cmsSections?.groupsize}
      />
      <VehicleForEveryOccasion
        location={location}
        content={cmsSections?.occasion}
      />

      <section className="bg-gradient-to-r from-[#03C35E]/10 to-[#55efc4]/10 py-12">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {features.map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto mb-2 text-3xl text-[#03C35E]" />
              <p className="text-sm text-gray-500">{label}</p>
              <p className="font-semibold text-[#142236]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#142236] md:text-4xl">
              Local Travel Services in {cityName}
            </h2>
            <p className="text-lg text-gray-600">
              Flexible transport for airport transfers, sightseeing, business, and everyday travel.
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
                <h3 className="mb-2 text-xl font-bold text-[#142236]">{pkg.name}</h3>
                <p className="mb-2 text-3xl font-bold text-[#03C35E]">{pkg.price}</p>
                <p className="mb-4 text-sm text-gray-500">{pkg.duration}</p>
                <ul className="mb-6 space-y-2">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
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

      <AboutService content={cmsSections?.aboutservice} />
      <WhyChooseUrbanCruise
        location={location}
        content={cmsSections?.whychoose}
      />
      <Testimonial location={location} content={cmsSections?.testimonials} />
      <Faqs location={location} content={cmsSections?.faq} />
      <VehicleRentalServiceInIndia
        location={location}
        content={cmsSections?.servicelocations}
      />
      <OurTrustedPartner content={cmsSections?.partners} />

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
    </div>
  );
}
