// app/components/services/DelhiDoDhamPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import {
  FaCheck,
  FaClock,
  FaCloudSun,
  FaCompass,
  FaMountain,
  FaPray,
  FaRoad,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import Hero from "./ui/Hero";
import About from "./ui/About";
import HowItWorks from "./ui/HowItWorks";
import WhyChooseUrbanCruise from "./ui/WhyChooseUrbanCruise";
import Testimonial from "./ui/Testimonial";
import Faqs from "./ui/Faqs";
import VehicleRentalServiceInIndia from "./ui/VehicleRentalServiceInIndia";
import OurTrustedPartner from "./ui/OurTrustedPartner";

export default function DelhiDoDhamPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  const { getLocationUrl } = useLocation();
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

  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="delhi"
        content={{
          eyebrow: "Do Dham Yatra from Delhi",
          title: "Delhi to Do Dham",
          titleHighlight: "Yatra Package",
          description:
            "Travel from Delhi to Yamunotri and Gangotri on a comfortable, well-planned Do Dham Yatra.",
          backgroundImageAlt: "Do Dham Yatra from Delhi",
          vehiclesImageAlt: "Vehicles for Do Dham Yatra from Delhi",
        }}
        cmsContent={cmsSections?.hero}
      />
      <About location="delhi" content={cmsSections?.about} />
      <HowItWorks location="delhi" content={cmsSections?.howitworks} />
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

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Trip Itinerary</h2>
            <p className="text-gray-600 text-lg">Here&apos;s what your Do Dham Yatra package includes.</p>
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

      <WhyChooseUrbanCruise
        location="delhi"
        content={cmsSections?.whychoose}
      />
      <Testimonial location="delhi" content={cmsSections?.testimonials} />
      <Faqs location="delhi" content={cmsSections?.faq} />

      <section className="py-16 md:py-20 bg-gradient-to-r from-[#e94560] to-[#feca57]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for the Spiritual Journey?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">Book your Do Dham Yatra today and seek divine blessings.</p>
          <Link href={getLocationUrl("/book")} className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#e94560] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Your Trip <IoMdArrowForward className="w-5 h-5" />
          </Link>
        </div>
      </section>
      <VehicleRentalServiceInIndia
        location="delhi"
        content={cmsSections?.servicelocations}
      />
      <OurTrustedPartner content={cmsSections?.partners} />
    </div>
  );
}
