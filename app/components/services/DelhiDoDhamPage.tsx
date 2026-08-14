// app/components/services/DelhiDoDhamPage.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaCar, FaUsers, FaStar, FaClock, FaShieldAlt, 
  FaArrowRight, FaCheck, FaMapMarkerAlt, FaWhatsapp,
  FaPhone, FaEnvelope, FaCalendarCheck, FaRoad,
  FaTrophy, FaBus, FaWifi, FaMountain,
  FaTree, FaCloudSun, FaCamera, FaUtensils,
  FaHotel, FaTint, FaCompass, FaPray
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function DelhiDoDhamPage() {
  const { getLocationUrl, location } = useLocation();
  const [selectedImage, setSelectedImage] = useState(0);

  const vehicleImages = [
    "/images/services/do-dham-main.jpg",
    "/images/services/do-dham-1.jpg",
    "/images/services/do-dham-2.jpg",
    "/images/services/do-dham-3.jpg",
  ];

  const features = [
    { icon: FaUsers, label: "Group Size", value: "Flexible" },
    { icon: FaClock, label: "Duration", value: "7-9 Days" },
    { icon: FaRoad, label: "Distance", value: "500+ km" },
    { icon: FaMountain, label: "Terrain", value: "Hilly" },
    { icon: FaPray, label: "Temples", value: "2 Dham" },
    { icon: FaCloudSun, label: "Climate", value: "Pleasant" },
    { icon: FaCompass, label: "Guide", value: "Available" },
    { icon: FaTrophy, label: "Rating", value: "4.9★" },
  ];

  const packages = [
    {
      name: "Do Dham Yatra",
      duration: "7 Days",
      price: "₹25,000",
      features: ["Delhi to Do Dham", "6 Nights Stay", "Temple Visits", "Meals Included"]
    },
    {
      name: "Do Dham Premium",
      duration: "9 Days",
      price: "₹35,000",
      features: ["Delhi to Do Dham", "8 Nights Stay", "All Temple Visits", "Luxury Stay"]
    },
    {
      name: "Do Dham Group",
      duration: "7 Days",
      price: "₹18,000",
      features: ["Delhi to Do Dham", "6 Nights Stay", "Temple Visits", "Meals Included"]
    },
    {
      name: "Do Dham Luxury",
      duration: "8 Days",
      price: "₹45,000",
      features: ["Delhi to Do Dham", "7 Nights Stay", "VIP Darshan", "Premium Service"]
    },
  ];

  const itinerary = [
    { day: "Day 1", title: "Departure from Delhi", desc: "Start your spiritual journey from Delhi to Yamunotri." },
    { day: "Day 2-3", title: "Yamunotri", desc: "Visit the sacred Yamunotri temple and take a holy dip." },
    { day: "Day 4-6", title: "Gangotri", desc: "Visit the Gangotri temple and experience the divine atmosphere." },
    { day: "Day 7", title: "Return to Delhi", desc: "Return journey with divine blessings." },
  ];

  const reviews = [
    {
      name: "Mr. Rajesh Khanna",
      rating: 5,
      text: "A divine experience! The Do Dham Yatra was well-organized and comfortable.",
      date: "2 days ago"
    },
    {
      name: "Mrs. Priya Malhotra",
      rating: 5,
      text: "Spiritual journey made easy. The vehicle was comfortable and the driver was professional.",
      date: "5 days ago"
    },
    {
      name: "Mr. Vikram Singh",
      rating: 4,
      text: "Great service! The Do Dham Yatra package was perfect for our family.",
      date: "1 week ago"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
                <span className="text-[#e94560] font-medium text-sm">Delhi - Do Dham Yatra</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                <span className="bg-gradient-to-r from-[#e94560] to-[#feca57] bg-clip-text text-transparent">
                  Do Dham Yatra
                </span>
                <br />
                Package from Delhi
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Embark on a spiritual journey to the sacred Do Dham (Yamunotri and Gangotri). 
                Our comprehensive package ensures a comfortable and divine experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={getLocationUrl("/book")} className="inline-flex items-center gap-2 px-8 py-3 bg-[#e94560] hover:bg-[#c73652] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#e94560]/30">Book Now <IoMdArrowForward className="w-4 h-4" /></Link>
                <a href="#packages" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10">View Packages</a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="relative h-[300px] md:h-[350px] rounded-xl overflow-hidden">
                  <Image src={vehicleImages[selectedImage]} alt="Do Dham" fill className="object-cover" />
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

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Do Dham Yatra from Delhi</h2>
              <p className="text-gray-600 mb-4">Experience the divine journey to Yamunotri and Gangotri, two of the most sacred pilgrimage sites in India. Our Do Dham Yatra package from Delhi offers a perfect blend of spirituality and comfort.</p>
              <p className="text-gray-600 mb-6">Our package includes comfortable vehicles, experienced drivers, and well-planned itineraries to make your pilgrimage memorable.</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-[#e94560]/10 text-[#e94560] text-sm rounded-full">Yamunotri</span>
                <span className="px-3 py-1 bg-[#e94560]/10 text-[#e94560] text-sm rounded-full">Gangotri</span>
                <span className="px-3 py-1 bg-[#e94560]/10 text-[#e94560] text-sm rounded-full">Spiritual Tour</span>
                <span className="px-3 py-1 bg-[#e94560]/10 text-[#e94560] text-sm rounded-full">Pilgrimage</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><FaCheck className="text-[#e94560] mt-1" /><div><h4 className="font-semibold text-[#1a1a2e]">Comfortable Journey</h4><p className="text-gray-600 text-sm">Well-maintained vehicles for a comfortable pilgrimage.</p></div></div>
                <div className="flex items-start gap-3"><FaCheck className="text-[#e94560] mt-1" /><div><h4 className="font-semibold text-[#1a1a2e]">Experienced Drivers</h4><p className="text-gray-600 text-sm">Professional drivers familiar with mountain terrain.</p></div></div>
                <div className="flex items-start gap-3"><FaCheck className="text-[#e94560] mt-1" /><div><h4 className="font-semibold text-[#1a1a2e]">Flexible Packages</h4><p className="text-gray-600 text-sm">Customizable itineraries to suit your needs.</p></div></div>
                <div className="flex items-start gap-3"><FaCheck className="text-[#e94560] mt-1" /><div><h4 className="font-semibold text-[#1a1a2e]">Spiritual Guidance</h4><p className="text-gray-600 text-sm">Expert guidance for the pilgrimage experience.</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Trip Itinerary</h2>
            <p className="text-gray-600 text-lg">Here's what your Do Dham Yatra package includes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {itinerary.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#e94560]/10 flex items-center justify-center text-[#e94560] text-2xl mx-auto mb-4">{index + 1}</div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{item.day}</h3>
                <h4 className="font-semibold text-[#e94560] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Tour Packages</h2>
            <p className="text-gray-600 text-lg">Choose from our flexible packages for Do Dham Yatra.</p>
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

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Customer Reviews</h2>
            <p className="text-gray-600 text-lg">What our customers say about the Do Dham Yatra.</p>
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

      <section className="py-16 md:py-20 bg-gradient-to-r from-[#e94560] to-[#feca57]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for the Spiritual Journey?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">Book your Do Dham Yatra today and seek divine blessings.</p>
          <Link href={getLocationUrl("/book")} className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#e94560] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Your Trip <IoMdArrowForward className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
