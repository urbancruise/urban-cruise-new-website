// app/components/vehicles/MumbaiMercedesSprinterPage.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaCar, FaUsers, FaStar, FaClock, FaShieldAlt, 
  FaGasPump, FaSnowflake, FaBluetooth, FaCamera,
  FaArrowRight, FaCheck, FaMapMarkerAlt, FaWhatsapp,
  FaPhone, FaEnvelope, FaCalendarCheck, FaChair, FaRoad, FaTrophy, FaCrown,
  FaGem, FaWifi, FaMusic, FaTv,
  FaCoffee, FaChargingStation, FaFilm,
  FaUmbrellaBeach
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function MumbaiMercedesSprinterPage() {
  const { getLocationUrl, location } = useLocation();
  const [selectedImage, setSelectedImage] = useState(0);

  const vehicleImages = [
    "/images/vehicles/mercedes-sprinter-main.jpg",
    "/images/vehicles/mercedes-sprinter-1.jpg",
    "/images/vehicles/mercedes-sprinter-2.jpg",
    "/images/vehicles/mercedes-sprinter-3.jpg",
  ];

  const features = [
    { icon: FaUsers, label: "Seats", value: "12-16" },
    { icon: FaCrown, label: "Class", value: "Luxury Van" },
    { icon: FaGem, label: "Interior", value: "Premium Finish" },
    { icon: FaSnowflake, label: "AC", value: "3-Zone Climate" },
    { icon: FaTv, label: "Entertainment", value: "LED TV" },
    { icon: FaCoffee, label: "Amenities", value: "Refreshments" },
    { icon: FaChargingStation, label: "Charging", value: "USB Ports" },
    { icon: FaShieldAlt, label: "Safety", value: "6 Airbags" },
    { icon: FaTrophy, label: "Rating", value: "4.8★" },
    { icon: FaWifi, label: "Connectivity", value: "WiFi" },
  ];

  const specs = [
    { label: "Model", value: "Mercedes-Benz Sprinter" },
    { label: "Engine", value: "2.2L Diesel" },
    { label: "Transmission", value: "Automatic" },
    { label: "Mileage", value: "12-14 km/L" },
    { label: "Fuel Tank", value: "80 L" },
    { label: "Boot Space", value: "2000 L" },
  ];

  const packages = [
    {
      name: "Half Day",
      duration: "4 Hours",
      price: "₹10,500",
      km: "40 KM",
      features: ["Local travel", "Chauffeur included", "Fuel included", "Premium service"]
    },
    {
      name: "Full Day",
      duration: "8 Hours",
      price: "₹15,500",
      km: "80 KM",
      features: ["Local travel", "Chauffeur included", "Fuel included", "Premium service"]
    },
    {
      name: "Airport Transfer",
      duration: "Per Trip",
      price: "₹6,500",
      km: "Up to 25 KM",
      features: ["One way", "Chauffeur included", "Fuel included", "Meet & greet"]
    },
    {
      name: "Outstation",
      duration: "Per Day",
      price: "₹19,000",
      km: "250 KM",
      features: ["Intercity travel", "Chauffeur included", "Fuel included", "Luxury experience"]
    },
  ];

  const reviews = [
    {
      name: "Mr. Shah Rukh (Staff)",
      rating: 5,
      text: "The Mercedes Sprinter was perfect for our film shoot in Mumbai. Luxury and comfort redefined.",
      date: "1 day ago"
    },
    {
      name: "Ms. Priyanka (Team)",
      rating: 5,
      text: "Excellent service! The Sprinter was pristine and the chauffeur was very professional.",
      date: "3 days ago"
    },
    {
      name: "Mr. Amit Shah",
      rating: 5,
      text: "The best luxury van service in Mumbai. Perfect for celebrity transport and group events.",
      date: "1 week ago"
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
                <span className="text-[#ff6b6b] font-medium text-sm">Mumbai - Mercedes Sprinter</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Mercedes{' '}
                <span className="bg-gradient-to-r from-[#ff6b6b] to-[#feca57] bg-clip-text text-transparent">
                  Sprinter
                </span>
                <br />
                in Mumbai
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Experience the ultimate in luxury group travel with our Mercedes Sprinter. 
                Perfect for film shoots, celebrity transport, and group events in Mumbai.
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
                    alt="Mercedes Sprinter"
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
              <FaFilm className="text-[#ff6b6b] text-xl" />
              <span>Film Shoots</span>
            </div>
            <div className="flex items-center gap-2 text-[#0c0c1e]">
              <FaUmbrellaBeach className="text-[#ff6b6b] text-xl" />
              <span>Coastal Tours</span>
            </div>
            <div className="flex items-center gap-2 text-[#0c0c1e]">
              <FaCrown className="text-[#ff6b6b] text-xl" />
              <span>Celebrity Transport</span>
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
                The Mercedes Sprinter comes with premium features for luxury group travel.
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
                Technical specifications of the Mercedes Sprinter.
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
              Choose from our flexible rental packages for the Mercedes Sprinter.
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
              What our customers say about the Mercedes Sprinter in Mumbai.
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
            Ready for Luxury Group Travel?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Book the Mercedes Sprinter today and experience luxury group travel in Mumbai.
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

