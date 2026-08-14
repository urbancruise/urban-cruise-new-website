// app/components/vehicles/PuneInnovaCrystaPage.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaCar, FaUsers, FaStar, FaClock, FaShieldAlt, 
  FaGasPump, FaSnowflake, FaBluetooth, FaCamera,
  FaArrowRight, FaCheck, FaMapMarkerAlt, FaWhatsapp,
  FaPhone, FaEnvelope, FaCalendarCheck, FaChair, FaRoad, FaTrophy, FaUniversity
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function PuneInnovaCrystaPage() {
  const { getLocationUrl, location } = useLocation();
  const [selectedImage, setSelectedImage] = useState(0);

  const vehicleImages = [
    "/images/vehicles/innova-crysta-main.jpg",
    "/images/vehicles/innova-crysta-1.jpg",
    "/images/vehicles/innova-crysta-2.jpg",
    "/images/vehicles/innova-crysta-3.jpg",
  ];

  const features = [
    { icon: FaUsers, label: "Seats", value: "7-8" },
    { icon: FaGasPump, label: "Fuel Type", value: "Diesel" },
    { icon: FaSnowflake, label: "AC", value: "Auto Climate" },
    { icon: FaBluetooth, label: "Infotainment", value: "Touchscreen" },
    { icon: FaCamera, label: "Camera", value: "360° View" },
    { icon: FaShieldAlt, label: "Safety", value: "7 Airbags" },
    { icon: FaChair, label: "Seating", value: "Captain Seats" },
    { icon: FaTrophy, label: "Rating", value: "4.9★" },
  ];

  const specs = [
    { label: "Model", value: "Toyota Innova Crysta" },
    { label: "Engine", value: "2.4L Diesel" },
    { label: "Transmission", value: "Manual/Automatic" },
    { label: "Mileage", value: "15-17 km/L" },
    { label: "Fuel Tank", value: "55 L" },
    { label: "Boot Space", value: "400 L" },
  ];

  const packages = [
    {
      name: "Half Day",
      duration: "4 Hours",
      price: "₹4,500",
      km: "40 KM",
      features: ["Local travel", "Driver included", "Fuel included"]
    },
    {
      name: "Full Day",
      duration: "8 Hours",
      price: "₹7,000",
      km: "80 KM",
      features: ["Local travel", "Driver included", "Fuel included"]
    },
    {
      name: "Airport Transfer",
      duration: "Per Trip",
      price: "₹2,500",
      km: "Up to 25 KM",
      features: ["One way", "Driver included", "Fuel included"]
    },
    {
      name: "Outstation",
      duration: "Per Day",
      price: "₹9,000",
      km: "250 KM",
      features: ["Intercity travel", "Driver included", "Fuel included"]
    },
  ];

  const reviews = [
    {
      name: "Amit Sharma",
      rating: 5,
      text: "The Innova Crysta is the best MPV for Pune roads. Comfortable and powerful.",
      date: "2 days ago"
    },
    {
      name: "Priya Verma",
      rating: 5,
      text: "Excellent service! The vehicle was in pristine condition.",
      date: "5 days ago"
    },
    {
      name: "Suresh Patel",
      rating: 5,
      text: "Perfect for family trips and heritage tours. Highly recommend this vehicle.",
      date: "1 week ago"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1a0a] via-[#1a2a1a] to-[#0a2a1a] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b894] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#55efc4] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#00b894]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-[#00b894]/30">
                <span className="w-2 h-2 bg-[#00b894] rounded-full animate-pulse" />
                <span className="text-[#55efc4] font-medium text-sm">Pune - Innova Crysta</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Toyota{' '}
                <span className="bg-gradient-to-r from-[#00b894] to-[#55efc4] bg-clip-text text-transparent">
                  Innova Crysta
                </span>
                <br />
                in Pune
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                The king of MPVs! The Innova Crysta offers unmatched comfort, 
                space, and performance for your Pune journeys.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={getLocationUrl("/book")}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#00b894] hover:bg-[#00a381] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#00b894]/30"
                >
                  Book Now
                  <IoMdArrowForward className="w-4 h-4" />
                </Link>
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
                >
                  View Packages
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="relative h-[300px] md:h-[350px] rounded-xl overflow-hidden">
                  <Image
                    src={vehicleImages[selectedImage]}
                    alt="Innova Crysta"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex gap-2 mt-4">
                  {vehicleImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index ? 'border-[#00b894]' : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`View ${index + 1}`}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pune Highlights */}
      <section className="py-8 bg-gradient-to-r from-[#00b894]/10 to-[#55efc4]/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="flex items-center gap-2 text-[#0a1a0a]">
              <FaUniversity className="text-[#00b894] text-xl" />
              <span>Heritage Tours</span>
            </div>
            <div className="flex items-center gap-2 text-[#0a1a0a]">
              <FaMapMarkerAlt className="text-[#00b894] text-xl" />
              <span>Shaniwar Wada</span>
            </div>
            <div className="flex items-center gap-2 text-[#0a1a0a]">
              <FaRoad className="text-[#00b894] text-xl" />
              <span>Fort Tours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1a0a] mb-6">
                Vehicle Features
              </h2>
              <p className="text-gray-600 mb-8">
                The Innova Crysta comes with premium features for a luxurious Pune experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#00b894]/10 flex items-center justify-center text-[#00b894]">
                        <feature.icon />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{feature.label}</p>
                        <p className="font-semibold text-[#0a1a0a]">{feature.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1a0a] mb-6">
                Specifications
              </h2>
              <p className="text-gray-600 mb-8">
                Technical specifications of the Toyota Innova Crysta.
              </p>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {specs.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-4 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-semibold text-[#0a1a0a]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0a] mb-4">
              Rental Packages
            </h2>
            <p className="text-gray-600 text-lg">
              Choose from our flexible rental packages for the Innova Crysta.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-[#0a1a0a] mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-[#00b894] mb-2">{pkg.price}</div>
                <div className="text-sm text-gray-500 mb-4">
                  {pkg.duration} • {pkg.km}
                </div>
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
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0a] mb-4">
              Customer Reviews
            </h2>
            <p className="text-gray-600 text-lg">
              What our customers say about the Innova Crysta in Pune.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#00b894]/10 flex items-center justify-center text-[#00b894] font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0a1a0a]">{review.name}</h4>
                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{review.text}</p>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#00b894] to-[#55efc4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Drive the Innova Crysta?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Experience the king of MPVs in Pune. Book your Innova Crysta today.
          </p>
          <Link
            href={getLocationUrl("/book")}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#00b894] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your Ride
            <IoMdArrowForward className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

