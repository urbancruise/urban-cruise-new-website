// app/components/testimonials/GurugramTestimonialsPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaStar, FaUser, FaQuoteLeft, FaQuoteRight, 
  FaCalendar, FaMapMarkerAlt, FaStarHalfAlt,
  FaArrowRight, FaCheck, FaHeart, FaUsers,
  FaCar, FaBuilding, FaBriefcase, FaChartLine
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function GurugramTestimonialsPage() {
  const { getLocationUrl } = useLocation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 6;

  const stats = [
    { value: "150+", label: "Corporate Clients", icon: FaBuilding },
    { value: "4.9★", label: "Average Rating", icon: FaStar },
    { value: "98%", label: "On-Time Delivery", icon: FaCheck },
    { value: "1000+", label: "Trips Completed", icon: FaCar },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Gupta",
      location: "Gurugram",
      category: "corporate",
      rating: 5,
      date: "January 2026",
      avatar: "https://ui-avatars.com/api/?name=Rajesh+Gupta&background=6c5ce7&color=fff&size=80",
      content: "Urban Cruise Gurugram has been our preferred transportation partner for over two years. Their professionalism and punctuality are unmatched. Our executives always arrive on time for meetings, and the fleet is consistently top-notch.",
      service: "Corporate Travel",
      image: "/images/gurugram-corporate.jpg"
    },
    {
      id: 2,
      name: "Neha Singh",
      location: "Gurugram",
      category: "corporate",
      rating: 5,
      date: "December 2025",
      avatar: "https://ui-avatars.com/api/?name=Neha+Singh&background=a29bfe&color=fff&size=80",
      content: "As a project manager, I frequently travel between Gurugram and Delhi NCR. Urban Cruise has made my commute stress-free. The drivers are professional, the vehicles are clean, and the service is always reliable.",
      service: "Business Travel",
      image: "/images/gurugram-business.jpg"
    },
    {
      id: 3,
      name: "Vikram Rathore",
      location: "Gurugram",
      category: "events",
      rating: 5,
      date: "November 2025",
      avatar: "https://ui-avatars.com/api/?name=Vikram+Rathore&background=6c5ce7&color=fff&size=80",
      content: "We hired Urban Cruise for our company's annual gala in Gurugram. They handled transportation for 200+ guests flawlessly. The coordination was impeccable, and our guests were highly impressed with the service.",
      service: "Corporate Events",
      image: "/images/gurugram-events.jpg"
    },
    {
      id: 4,
      name: "Priya Sharma",
      location: "Gurugram",
      category: "airport",
      rating: 4.5,
      date: "October 2025",
      avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=a29bfe&color=fff&size=80",
      content: "Urban Cruise has been my go-to service for airport transfers. They've never been late, even during peak hours. The drivers are courteous and help with luggage. Highly recommended for business travelers.",
      service: "Airport Transfer",
      image: "/images/gurugram-airport.jpg"
    },
    {
      id: 5,
      name: "Amit Kumar",
      location: "Gurugram",
      category: "corporate",
      rating: 5,
      date: "September 2025",
      avatar: "https://ui-avatars.com/api/?name=Amit+Kumar&background=6c5ce7&color=fff&size=80",
      content: "Our partnership with Urban Cruise Gurugram has been exceptional. They understand the needs of corporate clients and deliver consistently excellent service. Their fleet management and driver professionalism are outstanding.",
      service: "Corporate Partnership",
      image: "/images/gurugram-partnership.jpg"
    },
    {
      id: 6,
      name: "Sneha Reddy",
      location: "Gurugram",
      category: "personal",
      rating: 5,
      date: "August 2025",
      avatar: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=a29bfe&color=fff&size=80",
      content: "I used Urban Cruise for my personal travel in Gurugram and was thoroughly impressed. The booking process was easy, the vehicle was immaculate, and the driver was professional and friendly. Will definitely use again!",
      service: "Personal Travel",
      image: "/images/gurugram-personal.jpg"
    },
    {
      id: 7,
      name: "Deepak Malhotra",
      location: "Gurugram",
      category: "conference",
      rating: 4.5,
      date: "July 2025",
      avatar: "https://ui-avatars.com/api/?name=Deepak+Malhotra&background=6c5ce7&color=fff&size=80",
      content: "Urban Cruise handled transportation for our international conference in Gurugram. The service was flawless, and our international delegates were impressed with the professionalism and comfort.",
      service: "Conference Transport",
      image: "/images/gurugram-conference.jpg"
    },
    {
      id: 8,
      name: "Meera Gupta",
      location: "Gurugram",
      category: "corporate",
      rating: 5,
      date: "June 2025",
      avatar: "https://ui-avatars.com/api/?name=Meera+Gupta&background=a29bfe&color=fff&size=80",
      content: "Urban Cruise has been our trusted partner for employee transportation. Their commitment to safety, punctuality, and customer service has made them an invaluable part of our operations in Gurugram.",
      service: "Employee Transport",
      image: "/images/gurugram-employee.jpg"
    },
  ];

  const categories = [
    { id: "all", label: "All Reviews" },
    { id: "corporate", label: "Corporate" },
    { id: "events", label: "Events" },
    { id: "airport", label: "Airport" },
    { id: "conference", label: "Conference" },
    { id: "business", label: "Business" },
    { id: "personal", label: "Personal" },
  ];

  const filteredTestimonials = activeFilter === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);

  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = filteredTestimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);
  const totalPages = Math.ceil(filteredTestimonials.length / testimonialsPerPage);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c0c1d] via-[#1a1a3e] to-[#2d1b4e] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6c5ce7] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00b894] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#6c5ce7]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#6c5ce7]/30">
              <span className="w-2 h-2 bg-[#6c5ce7] rounded-full animate-pulse" />
              <span className="text-[#a29bfe] font-medium text-sm">Testimonials</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              What Our Gurugram{' '}
              <span className="bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] bg-clip-text text-transparent">
                Clients Say
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Read testimonials from our corporate clients and partners in Gurugram. 
              Discover why we're the preferred choice for business travel.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={getLocationUrl("/book")}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#6c5ce7] hover:bg-[#5a4bd1] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#6c5ce7]/30"
              >
                Book Your Ride
                <IoMdArrowForward className="w-4 h-4" />
              </Link>
              <Link
                href={getLocationUrl("/vehicles")}
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
              >
                View Our Fleet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-[#0c0c1d] to-[#1a1a3e]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-2">
                  <stat.icon className="text-[#6c5ce7] text-2xl" />
                  {stat.value}
                </div>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1d] mb-4">
              Corporate Testimonial
            </h2>
            <p className="text-gray-600 text-lg">
              Hear from our corporate partners about their experience with Urban Cruise Gurugram.
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img src={testimonials[0].avatar} alt={testimonials[0].name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-[#0c0c1d]">{testimonials[0].name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <FaMapMarkerAlt className="text-[#6c5ce7]" />
                        {testimonials[0].location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-yellow-400">
                      {renderStars(testimonials[0].rating)}
                    </div>
                    <span className="text-sm text-gray-500">({testimonials[0].rating})</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{testimonials[0].date}</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <FaQuoteLeft className="text-[#6c5ce7]/20 text-4xl absolute -top-2 -left-2" />
                <p className="text-gray-700 text-lg leading-relaxed pl-8">
                  {testimonials[0].content}
                </p>
                <FaQuoteRight className="text-[#6c5ce7]/20 text-4xl absolute -bottom-2 -right-2" />
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                <span className="px-3 py-1 bg-[#6c5ce7]/10 text-[#6c5ce7] text-sm rounded-full">
                  {testimonials[0].service}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials with Filters */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1d] mb-4">
              Client Reviews
            </h2>
            <p className="text-gray-600 text-lg">
              Browse through our collection of corporate and client testimonials from Gurugram.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveFilter(category.id);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-[#6c5ce7] text-white shadow-lg shadow-[#6c5ce7]/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#0c0c1d]">{testimonial.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaMapMarkerAlt className="text-[#6c5ce7] text-xs" />
                      {testimonial.location}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {renderStars(testimonial.rating)}
                      <span className="text-sm text-gray-500 ml-1">({testimonial.rating})</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {testimonial.content}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="px-2 py-1 bg-[#6c5ce7]/10 text-[#6c5ce7] text-xs rounded-full">
                    {testimonial.service}
                  </span>
                  <span className="text-xs text-gray-400">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full transition-all duration-300 ${
                    currentPage === i + 1
                      ? "bg-[#6c5ce7] text-white shadow-lg shadow-[#6c5ce7]/30"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#6c5ce7] to-[#8b7cf7]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Corporate Excellence?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join our satisfied corporate clients in Gurugram and experience 
            premium business travel services.
          </p>
          <Link
            href={getLocationUrl("/book")}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#6c5ce7] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your Ride
            <IoMdArrowForward className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

