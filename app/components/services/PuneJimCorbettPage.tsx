// app/components/services/PuneJimCorbettPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import Hero from "./ui/Hero";
import About from "./ui/About";
import HowItWorks from "./ui/HowItWorks";
import VehicleForEveryGroupSize from "./ui/VehicleForEveryGroupSize";
import VehicleForEveryOccasion from "./ui/VehicleForEveryOccasion";
import WhyChooseUrbanCruise from "./ui/WhyChooseUrbanCruise";
import Testimonial from "./ui/Testimonial";
import Faqs from "./ui/Faqs";
import VehicleRentalServiceInIndia from "./ui/VehicleRentalServiceInIndia";
import OurTrustedPartner from "./ui/OurTrustedPartner";
import { 
  FaCar, FaUsers, FaClock, FaShieldAlt,
  FaArrowRight, FaCheck, FaMapMarkerAlt, FaWhatsapp,
  FaPhone, FaEnvelope, FaCalendarCheck, FaRoad,
  FaTrophy, FaBus, FaWifi, FaMountain,
  FaTree, FaCloudSun, FaCamera, FaUtensils,
  FaHotel, FaTint, FaCompass, FaDog,
  FaUniversity, FaBook, FaMountain as FaMountainIcon
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

export default function PuneJimCorbettPage() {
  const { getLocationUrl } = useLocation();

  const features = [
    { icon: FaUsers, label: "Group Size", value: "Flexible" },
    { icon: FaClock, label: "Duration", value: "3-5 Days" },
    { icon: FaRoad, label: "Distance", value: "300+ km" },
    { icon: FaMountain, label: "Terrain", value: "Hilly" },
    { icon: FaTree, label: "Wildlife", value: "Tiger Reserve" },
    { icon: FaCloudSun, label: "Climate", value: "Pleasant" },
    { icon: FaCamera, label: "Safari", value: "Available" },
    { icon: FaTrophy, label: "Rating", value: "4.9★" },
  ];

  const packages = [
    {
      name: "Weekend Getaway",
      duration: "3 Days",
      price: "₹15,000",
      features: ["Pune to Corbett", "2 Nights Stay", "Safari Included", "Meals Included"]
    },
    {
      name: "Extended Tour",
      duration: "5 Days",
      price: "₹25,000",
      features: ["Pune to Corbett", "4 Nights Stay", "Multiple Safaris", "All Meals Included"]
    },
    {
      name: "Luxury Package",
      duration: "4 Days",
      price: "₹35,000",
      features: ["Pune to Corbett", "Luxury Resort", "Private Safaris", "Fine Dining"]
    },
    {
      name: "Group Package",
      duration: "3 Days",
      price: "₹12,000",
      features: ["Pune to Corbett", "Group Stay", "Safari Included", "Meals Included"]
    },
  ];

  const itinerary = [
    { day: "Day 1", title: "Departure from Pune", desc: "Start your journey from Pune to Jim Corbett. Enjoy scenic views along the way." },
    { day: "Day 2", title: "Safari Adventure", desc: "Morning and evening safaris in the tiger reserve. Spot wildlife and enjoy nature." },
    { day: "Day 3", title: "Nature Walk & Return", desc: "Enjoy a nature walk, visit local attractions, and return to Pune." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        location="pune"
        content={{
          eyebrow: "Jim Corbett Vehicle Rental",
          title: "Pune to Jim Corbett",
          titleHighlight: "Vehicle Rental",
          description:
            "Travel from Pune to Jim Corbett National Park in a comfortable car, tempo traveller, or bus with a professional driver.",
          backgroundImageAlt: "Jim Corbett travel service from Pune",
          vehiclesImageAlt: "Cars and buses for Pune to Jim Corbett trips",
        }}
      />

      {/* Features Section */}
      <section className="py-12 bg-gradient-to-r from-[#00b894]/10 to-[#55efc4]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl text-[#00b894] flex items-center justify-center mb-2">
                  <feature.icon />
                </div>
                <p className="text-sm text-gray-500">{feature.label}</p>
                <p className="font-semibold text-[#0a1a0a]">{feature.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <About location="pune" />

      {/* How It Works Section */}
      <HowItWorks location="pune" />

      {/* Vehicle For Every Group Size Section */}
      <VehicleForEveryGroupSize location="pune" />

      {/* Discover Our Premium Vehicle Rentals Section */}
      <VehicleForEveryOccasion location="pune" />

      {/* Why Choose Urban Cruise Section */}
      <WhyChooseUrbanCruise location="pune" />

      {/* Itinerary Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0a] mb-4">
              Trip Itinerary
            </h2>
            <p className="text-gray-600 text-lg">
              Here's what your Pune to Jim Corbett trip looks like.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {itinerary.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#00b894]/10 flex items-center justify-center text-[#00b894] text-2xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-[#0a1a0a] mb-2">{item.day}</h3>
                <h4 className="font-semibold text-[#00b894] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0a] mb-4">
              Tour Packages
            </h2>
            <p className="text-gray-600 text-lg">
              Choose from our flexible packages for Pune to Jim Corbett.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-[#0a1a0a] mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-[#00b894] mb-2">{pkg.price}</div>
                <div className="text-sm text-gray-500 mb-4">{pkg.duration}</div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCheck className="text-[#00b894] text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={getLocationUrl("/book")}
                  className="block text-center bg-[#00b894] hover:bg-[#00a381] text-white py-2 rounded-full transition-all duration-300"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <Testimonial location="pune" />

      {/* FAQs Section */}
      <Faqs location="pune" />

      <VehicleRentalServiceInIndia location="pune" />
      <OurTrustedPartner />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#00b894] to-[#55efc4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for the Adventure?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Book your Pune to Jim Corbett trip today and experience the wilderness.
          </p>
          <Link
            href={getLocationUrl("/book")}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#00b894] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your Trip
            <IoMdArrowForward className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
