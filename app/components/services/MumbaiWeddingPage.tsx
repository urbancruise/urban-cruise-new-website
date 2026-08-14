// app/components/services/MumbaiWeddingPage.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaCar, FaUsers, FaStar, FaClock, FaShieldAlt, 
  FaArrowRight, FaCheck, FaMapMarkerAlt, FaWhatsapp,
  FaPhone, FaEnvelope, FaCalendarCheck, FaRoad,
  FaTrophy, FaBus, FaWifi, FaHeart,
  FaRing, FaGem, FaCamera,
  FaMusic, FaUtensils, FaHotel, FaParking,
  FaFilm, FaUmbrellaBeach
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function MumbaiWeddingPage() {
  const { getLocationUrl, location } = useLocation();
  const [selectedImage, setSelectedImage] = useState(0);

  const vehicleImages = [
    "/images/services/wedding-main.jpg",
    "/images/services/wedding-1.jpg",
    "/images/services/wedding-2.jpg",
    "/images/services/wedding-3.jpg",
  ];

  const features = [
    { icon: FaCar, label: "Vehicles", value: "Premium" },
    { icon: FaUsers, label: "Capacity", value: "Flexible" },
    { icon: FaHeart, label: "Service", value: "Royal" },
    { icon: FaClock, label: "Duration", value: "Custom" },
    { icon: FaShieldAlt, label: "Safety", value: "Priority" },
    { icon: FaRing, label: "Weddings", value: "Special" },
    { icon: FaGem, label: "Luxury", value: "Available" },
    { icon: FaTrophy, label: "Rating", value: "4.9★" },
  ];

  const vehicles = [
    { name: "Luxury Cars", desc: "Mercedes, BMW, Audi" },
    { name: "SUVs", desc: "Innova, Fortuner" },
    { name: "Tempo Travellers", desc: "Group Transport" },
    { name: "Luxury Buses", desc: "Large Groups" },
  ];

  const packages = [
    {
      name: "Wedding Car",
      duration: "Custom",
      price: "₹5,500+",
      features: ["Luxury Car", "Chauffeur Included", "Decoration Available", "Premium Service"]
    },
    {
      name: "Wedding Convoy",
      duration: "Custom",
      price: "₹16,000+",
      features: ["Multiple Vehicles", "Coordinated Arrival", "Decoration", "Full Service"]
    },
    {
      name: "Guest Transport",
      duration: "Custom",
      price: "₹9,000+",
      features: ["Tempo Traveller/Bus", "Guest Pickup/Drop", "Flexible Timing", "Professional Drivers"]
    },
    {
      name: "Complete Package",
      duration: "Custom",
      price: "₹27,000+",
      features: ["All Vehicles", "Full Coordination", "VIP Service", "Complete Wedding Support"]
    },
  ];

  const reviews = [
    {
      name: "Mr. & Mrs. Khan",
      rating: 5,
      text: "Our wedding in Mumbai was made perfect by Urban Cruise. The cars were stunning and the service was impeccable.",
      date: "2 days ago"
    },
    {
      name: "Mr. Vikram Singh",
      rating: 5,
      text: "Excellent wedding transport service in Mumbai! The convoy was beautiful and everything was perfectly coordinated.",
      date: "5 days ago"
    },
    {
      name: "Ms. Priyanka (Team)",
      rating: 4,
      text: "Great service! The wedding cars were luxurious and the drivers were very professional.",
      date: "1 week ago"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
                <span className="text-[#ff6b6b] font-medium text-sm">Mumbai - Wedding Travel</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                <span className="bg-gradient-to-r from-[#ff6b6b] to-[#feca57] bg-clip-text text-transparent">Wedding</span><br />Cars & Bus Rental
              </h1>
              <p className="text-lg text-gray-300 mb-6">Make your special day even more memorable with our premium wedding vehicle rental service in Mumbai. Luxury cars, convoy arrangements, and guest transport.</p>
              <div className="flex flex-wrap gap-4">
                <Link href={getLocationUrl("/book")} className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff6b6b] hover:bg-[#e55a5a] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#ff6b6b]/30">Book Now <IoMdArrowForward className="w-4 h-4" /></Link>
                <a href="#packages" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10">View Packages</a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="relative h-[300px] md:h-[350px] rounded-xl overflow-hidden">
                  <Image src={vehicleImages[selectedImage]} alt="Wedding" fill className="object-cover" />
                </div>
                <div className="flex gap-2 mt-4">
                  {vehicleImages.map((img, index) => (
                    <button key={index} onClick={() => setSelectedImage(index)} className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${selectedImage === index ? 'border-[#ff6b6b]' : 'border-transparent'}`}>
                      <Image src={img} alt={`View ${index + 1}`} width={64} height={64} className="object-cover w-full h-full" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-[#ff6b6b]/10 to-[#feca57]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl text-[#ff6b6b] flex items-center justify-center mb-2"><feature.icon /></div>
                <p className="text-sm text-gray-500">{feature.label}</p>
                <p className="font-semibold text-[#0c0c1e]">{feature.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">Our Wedding Fleet</h2>
            <p className="text-gray-600 text-lg">Choose from our premium wedding vehicles in Mumbai.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-[#ff6b6b]/10 flex items-center justify-center text-[#ff6b6b] text-3xl mx-auto mb-4"><FaCar /></div>
                <h3 className="text-xl font-bold text-[#0c0c1e] mb-2">{vehicle.name}</h3>
                <p className="text-gray-600 text-sm">{vehicle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">Wedding Travel Service</h2>
              <p className="text-gray-600 mb-4">Make your wedding day perfect with our premium vehicle rental service in Mumbai. From luxury cars for the bride and groom to comfortable transport for guests, we handle it all.</p>
              <p className="text-gray-600 mb-6">Our wedding packages include decoration, professional chauffeurs, and coordinated convoy services to ensure everything runs smoothly.</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-[#ff6b6b]/10 text-[#ff6b6b] text-sm rounded-full">Luxury Cars</span>
                <span className="px-3 py-1 bg-[#ff6b6b]/10 text-[#ff6b6b] text-sm rounded-full">Convoy Service</span>
                <span className="px-3 py-1 bg-[#ff6b6b]/10 text-[#ff6b6b] text-sm rounded-full">Guest Transport</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0c0c1e] mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><FaCheck className="text-[#ff6b6b] mt-1" /><div><h4 className="font-semibold text-[#0c0c1e]">Premium Fleet</h4><p className="text-gray-600 text-sm">Luxury vehicles for your special day.</p></div></div>
                <div className="flex items-start gap-3"><FaCheck className="text-[#ff6b6b] mt-1" /><div><h4 className="font-semibold text-[#0c0c1e]">Professional Chauffeurs</h4><p className="text-gray-600 text-sm">Experienced and dressed professionally.</p></div></div>
                <div className="flex items-start gap-3"><FaCheck className="text-[#ff6b6b] mt-1" /><div><h4 className="font-semibold text-[#0c0c1e]">Full Coordination</h4><p className="text-gray-600 text-sm">Complete wedding travel management.</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">Wedding Packages</h2>
            <p className="text-gray-600 text-lg">Choose from our wedding vehicle packages in Mumbai.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0c0c1e] mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-[#ff6b6b] mb-2">{pkg.price}</div>
                <div className="text-sm text-gray-500 mb-4">{pkg.duration}</div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600"><FaCheck className="text-[#ff6b6b] text-xs" /> {feature}</li>
                  ))}
                </ul>
                <Link href={getLocationUrl("/book")} className="block text-center bg-[#ff6b6b] hover:bg-[#e55a5a] text-white py-2 rounded-full transition-all duration-300">Book Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">Customer Reviews</h2>
            <p className="text-gray-600 text-lg">What our customers say about our wedding service in Mumbai.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#ff6b6b]/10 flex items-center justify-center text-[#ff6b6b] font-bold text-lg">{review.name.charAt(0)}</div>
                  <div>
                    <h4 className="font-semibold text-[#0c0c1e]">{review.name}</h4>
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

      <section className="py-16 md:py-20 bg-gradient-to-r from-[#ff6b6b] to-[#ff9a9a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Make Your Day Special?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">Book your wedding vehicles in Mumbai today and make your special day unforgettable.</p>
          <Link href={getLocationUrl("/book")} className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#ff6b6b] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Your Ride <IoMdArrowForward className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
