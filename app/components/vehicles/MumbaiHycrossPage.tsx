// app/components/vehicles/MumbaiHycrossPage.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaCar, FaUsers, FaStar, FaClock, FaShieldAlt, 
  FaGasPump, FaSnowflake, FaBluetooth, FaCamera,
  FaArrowRight, FaCheck, FaMapMarkerAlt, FaWhatsapp,
  FaPhone, FaEnvelope, FaCalendarCheck, FaChair, FaRoad, FaTrophy, FaBolt,
  FaWifi, FaMusic, FaUmbrellaBeach
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function MumbaiHycrossPage() {
  const { getLocationUrl, location } = useLocation();
  const [selectedImage, setSelectedImage] = useState(0);

  const vehicleImages = [
    "/images/vehicles/hycross-main.jpg",
    "/images/vehicles/hycross-1.jpg",
    "/images/vehicles/hycross-2.jpg",
    "/images/vehicles/hycross-3.jpg",
  ];

  const features = [
    { icon: FaUsers, label: "Seats", value: "7" },
    { icon: FaGasPump, label: "Fuel Type", value: "Hybrid" },
    { icon: FaBolt, label: "Performance", value: "Electric + Petrol" },
    { icon: FaSnowflake, label: "AC", value: "Auto Climate" },
    { icon: FaBluetooth, label: "Infotainment", value: "Touchscreen" },
    { icon: FaCamera, label: "Camera", value: "360° View" },
    { icon: FaShieldAlt, label: "Safety", value: "6 Airbags" },
    { icon: FaTrophy, label: "Rating", value: "4.9★" },
    { icon: FaWifi, label: "Connectivity", value: "Android Auto/Apple" },
    { icon: FaMusic, label: "Audio", value: "JBL Premium" },
  ];

  const specs = [
    { label: "Model", value: "Toyota Hycross" },
    { label: "Engine", value: "2.0L Hybrid" },
    { label: "Transmission", value: "CVT" },
    { label: "Mileage", value: "23-25 km/L" },
    { label: "Fuel Tank", value: "43 L" },
    { label: "Boot Space", value: "300 L" },
  ];

  const packages = [
    {
      name: "Half Day",
      duration: "4 Hours",
      price: "₹5,000",
      km: "40 KM",
      features: ["Local travel", "Driver included", "Fuel included"]
    },
    {
      name: "Full Day",
      duration: "8 Hours",
      price: "₹8,000",
      km: "80 KM",
      features: ["Local travel", "Driver included", "Fuel included"]
    },
    {
      name: "Airport Transfer",
      duration: "Per Trip",
      price: "₹3,000",
      km: "Up to 25 KM",
      features: ["One way", "Driver included", "Fuel included"]
    },
    {
      name: "Outstation",
      duration: "Per Day",
      price: "₹10,000",
      km: "250 KM",
      features: ["Intercity travel", "Driver included", "Fuel included"]
    },
  ];

  const reviews = [
    {
      name: "Rahul Mehta",
      rating: 5,
      text: "The Hycross is a game-changer! Premium comfort with hybrid efficiency.",
      date: "1 day ago"
    },
    {
      name: "Sneha Reddy",
      rating: 5,
      text: "Luxury meets eco-friendly. The Hycross is perfect for Mumbai's coastal drives.",
      date: "3 days ago"
    },
    {
      name: "Vikram Singh",
      rating: 5,
      text: "Incredible vehicle! The hybrid technology makes it super efficient.",
      date: "5 days ago"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c0c1e] via-[#1a0a2e] to-[#2d0a3e] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b6b] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#feca57] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#ff6b6b]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-[#ff6b6b]/30">
                <span className="w-2 h-2 bg-[#ff6b6b] rounded-full animate-pulse" />
                <span className="text-[#ff6b6b] font-medium text-sm">Mumbai - Hycross</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Toyota{' '}
                <span className="bg-gradient-to-r from-[#ff6b6b] to-[#feca57] bg-clip-text text-transparent">
                  Hycross
                </span>
                <br />
                in Mumbai
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                The future of luxury mobility! The Toyota Hycross combines premium 
                comfort with hybrid efficiency for an eco-friendly Mumbai experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={getLocationUrl("/book")}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff6b6b] hover:bg-[#e55a5a] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#ff6b6b]/30"
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
                    alt="Hycross"
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
                        selectedImage === index ? 'border-[#ff6b6b]' : 'border-transparent'
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

      {/* Mumbai Highlights */}
      <section className="py-8 bg-gradient-to-r from-[#ff6b6b]/10 to-[#feca57]/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="flex items-center gap-2 text-[#0c0c1e]">
              <FaUmbrellaBeach className="text-[#ff6b6b] text-xl" />
              <span>Marine Drive</span>
            </div>
            <div className="flex items-center gap-2 text-[#0c0c1e]">
              <FaRoad className="text-[#ff6b6b] text-xl" />
              <span>Sea Link</span>
            </div>
            <div className="flex items-center gap-2 text-[#0c0c1e]">
              <FaMapMarkerAlt className="text-[#ff6b6b] text-xl" />
              <span>Gateway of India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0c0c1e] mb-6">
                Vehicle Features
              </h2>
              <p className="text-gray-600 mb-8">
                The Hycross comes with premium features and hybrid technology.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#ff6b6b]/10 flex items-center justify-center text-[#ff6b6b]">
                        <feature.icon />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{feature.label}</p>
                        <p className="font-semibold text-[#0c0c1e]">{feature.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0c0c1e] mb-6">
                Specifications
              </h2>
              <p className="text-gray-600 mb-8">
                Technical specifications of the Toyota Hycross.
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
                    <span className="font-semibold text-[#0c0c1e]">{spec.value}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">
              Rental Packages
            </h2>
            <p className="text-gray-600 text-lg">
              Choose from our flexible rental packages for the Hycross.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-[#0c0c1e] mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-[#ff6b6b] mb-2">{pkg.price}</div>
                <div className="text-sm text-gray-500 mb-4">
                  {pkg.duration} • {pkg.km}
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCheck className="text-[#ff6b6b] text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={getLocationUrl("/book")}
                  className="block text-center bg-[#ff6b6b] hover:bg-[#e55a5a] text-white py-2 rounded-full transition-all duration-300"
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">
              Customer Reviews
            </h2>
            <p className="text-gray-600 text-lg">
              What our customers say about the Hycross in Mumbai.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#ff6b6b]/10 flex items-center justify-center text-[#ff6b6b] font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0c0c1e]">{review.name}</h4>
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#ff6b6b] to-[#ff9a9a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Drive the Hycross?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Experience the future of luxury mobility in Mumbai. Book your Hycross today.
          </p>
          <Link
            href={getLocationUrl("/book")}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#ff6b6b] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your Ride
            <IoMdArrowForward className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

