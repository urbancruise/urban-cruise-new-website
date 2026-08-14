// app/components/vehicles/DelhiCarSuvsPage.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaCar, FaUsers, FaStar, FaClock, FaShieldAlt, 
  FaGasPump, FaSnowflake, FaBluetooth, FaCamera,
  FaArrowRight, FaCheck, FaMapMarkerAlt, FaWhatsapp,
  FaPhone, FaEnvelope, FaCalendarCheck
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function DelhiCarSuvsPage() {
  const { getLocationUrl, location } = useLocation();
  const [selectedImage, setSelectedImage] = useState(0);

  const vehicleImages = [
    "/images/vehicles/car-suvs-main.jpg",
    "/images/vehicles/car-suvs-1.jpg",
    "/images/vehicles/car-suvs-2.jpg",
    "/images/vehicles/car-suvs-3.jpg",
  ];

  const features = [
    { icon: FaUsers, label: "Seats", value: "4-7" },
    { icon: FaGasPump, label: "Fuel Type", value: "Petrol/Diesel" },
    { icon: FaSnowflake, label: "AC", value: "Climate Control" },
    { icon: FaBluetooth, label: "Infotainment", value: "Touchscreen" },
    { icon: FaCamera, label: "Camera", value: "Rear View" },
    { icon: FaShieldAlt, label: "Safety", value: "Airbags" },
  ];

  const specs = [
    { label: "Model", value: "Various Models" },
    { label: "Engine", value: "1.2L - 2.4L" },
    { label: "Transmission", value: "Manual/Automatic" },
    { label: "Mileage", value: "15-20 km/L" },
    { label: "Fuel Tank", value: "45-60 L" },
    { label: "Boot Space", value: "300-600 L" },
  ];

  const packages = [
    {
      name: "Half Day",
      duration: "4 Hours",
      price: "₹2,500",
      km: "40 KM",
      features: ["Local travel", "Driver included", "Fuel included"]
    },
    {
      name: "Full Day",
      duration: "8 Hours",
      price: "₹4,500",
      km: "80 KM",
      features: ["Local travel", "Driver included", "Fuel included"]
    },
    {
      name: "Airport Transfer",
      duration: "Per Trip",
      price: "₹1,500",
      km: "Up to 25 KM",
      features: ["One way", "Driver included", "Fuel included"]
    },
    {
      name: "Outstation",
      duration: "Per Day",
      price: "₹6,000",
      km: "250 KM",
      features: ["Intercity travel", "Driver included", "Fuel included"]
    },
  ];

  const reviews = [
    {
      name: "Rahul Sharma",
      rating: 5,
      text: "Great car rental service in Delhi. The car was clean and well-maintained.",
      date: "2 days ago"
    },
    {
      name: "Priya Patel",
      rating: 5,
      text: "Excellent service! The driver was professional and punctual.",
      date: "1 week ago"
    },
    {
      name: "Amit Kumar",
      rating: 4,
      text: "Good experience overall. Would recommend to others.",
      date: "2 weeks ago"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e94560] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0f3460] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#e94560]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-[#e94560]/30">
                <span className="w-2 h-2 bg-[#e94560] rounded-full animate-pulse" />
                <span className="text-[#e94560] font-medium text-sm">Delhi - Car & SUVs</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Premium{' '}
                <span className="bg-gradient-to-r from-[#e94560] to-[#ff6b6b] bg-clip-text text-transparent">
                  Car & SUVs
                </span>
                <br />
                in Delhi
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Explore Delhi in style with our premium fleet of cars and SUVs. 
                From luxury sedans to spacious SUVs, we have the perfect vehicle 
                for every occasion.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={getLocationUrl("/book")}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#e94560] hover:bg-[#c73652] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#e94560]/30"
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
                    alt="Car & SUVs"
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
                        selectedImage === index ? 'border-[#e94560]' : 'border-transparent'
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

      {/* Features & Specs */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6">
                Vehicle Features
              </h2>
              <p className="text-gray-600 mb-8">
                Our Car & SUVs come equipped with modern features to ensure a 
                comfortable and safe journey.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#e94560]/10 flex items-center justify-center text-[#e94560]">
                        <feature.icon />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{feature.label}</p>
                        <p className="font-semibold text-[#1a1a2e]">{feature.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6">
                Specifications
              </h2>
              <p className="text-gray-600 mb-8">
                Technical specifications of our premium Car & SUVs.
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
                    <span className="font-semibold text-[#1a1a2e]">{spec.value}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Rental Packages
            </h2>
            <p className="text-gray-600 text-lg">
              Choose from our flexible rental packages designed to meet your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-[#e94560] mb-2">{pkg.price}</div>
                <div className="text-sm text-gray-500 mb-4">
                  {pkg.duration} • {pkg.km}
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCheck className="text-[#e94560] text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={getLocationUrl("/book")}
                  className="block text-center bg-[#e94560] hover:bg-[#c73652] text-white py-2 rounded-full transition-all duration-300"
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Customer Reviews
            </h2>
            <p className="text-gray-600 text-lg">
              What our customers say about our Car & SUVs in Delhi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#e94560]/10 flex items-center justify-center text-[#e94560] font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e]">{review.name}</h4>
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#e94560] to-[#ff6b6b]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Drive in Delhi?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Book your premium Car or SUV today and experience Delhi in comfort and style.
          </p>
          <Link
            href={getLocationUrl("/book")}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#e94560] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your Ride
            <IoMdArrowForward className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}


