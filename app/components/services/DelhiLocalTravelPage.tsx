// app/components/services/DelhiLocalTravelPage.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaCar, FaUsers, FaStar, FaClock, FaShieldAlt, 
  FaArrowRight, FaCheck, FaMapMarkerAlt, FaWhatsapp,
  FaPhone, FaEnvelope, FaCalendarCheck, FaRoad,
  FaTrophy, FaBus, FaWifi, FaCity,
  FaPlane, FaTrain, FaTaxi, FaBuilding,
  FaCompass, FaUmbrella, FaShoppingBag, FaUtensils
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function DelhiLocalTravelPage() {
  const { getLocationUrl, location } = useLocation();
  const [selectedImage, setSelectedImage] = useState(0);

  const vehicleImages = [
    "/images/services/local-travel-main.jpg",
    "/images/services/local-travel-1.jpg",
    "/images/services/local-travel-2.jpg",
    "/images/services/local-travel-3.jpg",
  ];

  const features = [
    { icon: FaClock, label: "Service", value: "24/7" },
    { icon: FaUsers, label: "Capacity", value: "Flexible" },
    { icon: FaShieldAlt, label: "Safety", value: "Priority" },
    { icon: FaCar, label: "Fleet", value: "Diverse" },
    { icon: FaCity, label: "Coverage", value: "Delhi NCR" },
    { icon: FaTrophy, label: "Rating", value: "4.8★" },
    { icon: FaTaxi, label: "Service", value: "Reliable" },
    { icon: FaWifi, label: "Connectivity", value: "Available" },
  ];

  const services = [
    { name: "Airport Transfers", desc: "Pickup & Drop Service" },
    { name: "City Tours", desc: "Explore Delhi" },
    { name: "Local Sightseeing", desc: "Cultural Tours" },
    { name: "Corporate Transport", desc: "Business Travel" },
    { name: "Shopping Trips", desc: "Market Visits" },
    { name: "Event Travel", desc: "Special Occasions" },
  ];

  const packages = [
    {
      name: "Airport Transfer",
      duration: "Per Trip",
      price: "₹800+",
      features: ["Delhi Airport", "Flexible Timing", "Professional Driver", "Comfortable Vehicle"]
    },
    {
      name: "City Tour",
      duration: "4-8 Hours",
      price: "₹2,500+",
      features: ["Delhi Sightseeing", "Guide Available", "Flexible Itinerary", "AC Vehicle"]
    },
    {
      name: "Local Travel",
      duration: "Per Hour",
      price: "₹500+",
      features: ["Delhi NCR", "Flexible Routes", "Hourly Booking", "Professional Service"]
    },
    {
      name: "Day Package",
      duration: "Full Day",
      price: "₹4,000+",
      features: ["Delhi NCR", "Multiple Stops", "All Inclusive", "Premium Service"]
    },
  ];

  const reviews = [
    {
      name: "Mr. Rajesh Kumar",
      rating: 5,
      text: "Excellent local travel service! The driver was punctual and the vehicle was very comfortable.",
      date: "2 days ago"
    },
    {
      name: "Mrs. Priya Sharma",
      rating: 5,
      text: "Great service for local travel in Delhi. Reliable and professional.",
      date: "5 days ago"
    },
    {
      name: "Mr. Vikram Singh",
      rating: 4,
      text: "Good local travel service. The rates are reasonable and service is prompt.",
      date: "1 week ago"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e94560] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#feca57] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#e94560]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-[#e94560]/30">
                <span className="w-2 h-2 bg-[#e94560] rounded-full animate-pulse" />
                <span className="text-[#e94560] font-medium text-sm">Delhi - Local Travel</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                <span className="bg-gradient-to-r from-[#e94560] to-[#feca57] bg-clip-text text-transparent">
                  Local
                </span>
                <br />
                Bus & Car Rental
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Convenient and reliable local travel solutions in Delhi NCR. Airport transfers, 
                city tours, and daily commuting services.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={getLocationUrl("/book")} className="inline-flex items-center gap-2 px-8 py-3 bg-[#e94560] hover:bg-[#c73652] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#e94560]/30">
                  Book Now <IoMdArrowForward className="w-4 h-4" />
                </Link>
                <a href="#packages" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10">View Packages</a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="relative h-[300px] md:h-[350px] rounded-xl overflow-hidden">
                  <Image src={vehicleImages[selectedImage]} alt="Local Travel" fill className="object-cover" />
                </div>
                <div className="flex gap-2 mt-4">
                  {vehicleImages.map((img, index) => (
                    <button key={index} onClick={() => setSelectedImage(index)} className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${selectedImage === index ? 'border-[#e94560]' : 'border-transparent'}`}>
                      <Image src={img} alt={`View ${index + 1}`} width={64} height={64} className="object-cover w-full h-full" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gradient-to-r from-[#e94560]/10 to-[#feca57]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl text-[#e94560] flex items-center justify-center mb-2"><feature.icon /></div>
                <p className="text-sm text-gray-500">{feature.label}</p>
                <p className="font-semibold text-[#1a1a2e]">{feature.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Local Travel Services</h2>
            <p className="text-gray-600 text-lg">Comprehensive local travel solutions in Delhi NCR.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-[#e94560]/10 flex items-center justify-center text-[#e94560] text-3xl mx-auto mb-4"><FaCity /></div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Local Travel Service</h2>
              <p className="text-gray-600 mb-4">Reliable and convenient local travel solutions for Delhi NCR. We offer a range of services including airport transfers, city tours, and daily commuting.</p>
              <p className="text-gray-600 mb-6">Our vehicles are well-maintained and our drivers are experienced professionals who know Delhi's roads and traffic patterns.</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-[#e94560]/10 text-[#e94560] text-sm rounded-full">Airport Transfer</span>
                <span className="px-3 py-1 bg-[#e94560]/10 text-[#e94560] text-sm rounded-full">City Tour</span>
                <span className="px-3 py-1 bg-[#e94560]/10 text-[#e94560] text-sm rounded-full">Daily Commute</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><FaCheck className="text-[#e94560] mt-1" /><div><h4 className="font-semibold text-[#1a1a2e]">24/7 Service</h4><p className="text-gray-600 text-sm">Available round the clock for your convenience.</p></div></div>
                <div className="flex items-start gap-3"><FaCheck className="text-[#e94560] mt-1" /><div><h4 className="font-semibold text-[#1a1a2e]">Professional Drivers</h4><p className="text-gray-600 text-sm">Experienced drivers with local knowledge.</p></div></div>
                <div className="flex items-start gap-3"><FaCheck className="text-[#e94560] mt-1" /><div><h4 className="font-semibold text-[#1a1a2e]">Flexible Booking</h4><p className="text-gray-600 text-sm">Hourly, daily, or trip-based options.</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Local Travel Packages</h2>
            <p className="text-gray-600 text-lg">Choose from our local travel packages.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-[#e94560] mb-2">{pkg.price}</div>
                <div className="text-sm text-gray-500 mb-4">{pkg.duration}</div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600"><FaCheck className="text-[#e94560] text-xs" /> {feature}</li>
                  ))}
                </ul>
                <Link href={getLocationUrl("/book")} className="block text-center bg-[#e94560] hover:bg-[#c73652] text-white py-2 rounded-full transition-all duration-300">Book Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Customer Reviews</h2>
            <p className="text-gray-600 text-lg">What our customers say about our local travel service.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#e94560]/10 flex items-center justify-center text-[#e94560] font-bold text-lg">{review.name.charAt(0)}</div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e]">{review.name}</h4>
                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => <FaStar key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'} />)}
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#e94560] to-[#feca57]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Local Travel?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">Book your local travel vehicle today and experience convenience.</p>
          <Link href={getLocationUrl("/book")} className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#e94560] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Your Ride <IoMdArrowForward className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

