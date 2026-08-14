// app/components/testimonials/PuneTestimonialsPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaStar, FaUser, FaQuoteLeft, FaQuoteRight, 
  FaCalendar, FaMapMarkerAlt, FaStarHalfAlt,
  FaArrowRight, FaCheck, FaHeart, FaUsers,
  FaCar, FaUniversity, FaBook, FaTree, FaMountain
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function PuneTestimonialsPage() {
  const { getLocationUrl } = useLocation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 6;

  const stats = [
    { value: "180+", label: "Happy Customers", icon: FaUsers },
    { value: "4.8★", label: "Average Rating", icon: FaStar },
    { value: "96%", label: "Customer Satisfaction", icon: FaHeart },
    { value: "400+", label: "Trips Completed", icon: FaCar },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Dr. Meera Joshi",
      location: "Pune",
      category: "heritage",
      rating: 5,
      date: "January 2026",
      avatar: "https://ui-avatars.com/api/?name=Dr.+Meera+Joshi&background=00b894&color=fff&size=80",
      content: "Urban Cruise Pune made our heritage tour truly memorable. The driver was incredibly knowledgeable about Pune's history and took us to Shaniwar Wada, Aga Khan Palace, and other iconic sites. The vehicle was comfortable and the service was impeccable.",
      service: "Heritage Tour",
      image: "/images/pune-heritage.jpg"
    },
    {
      id: 2,
      name: "Prof. Rajesh Kumar",
      location: "Pune",
      category: "educational",
      rating: 5,
      date: "December 2025",
      avatar: "https://ui-avatars.com/api/?name=Prof.+Rajesh+Kumar&background=55efc4&color=fff&size=80",
      content: "Urban Cruise has been our trusted partner for educational tours. They understand the needs of students and faculty, and their service is always reliable. Highly recommended for educational institutions in Pune.",
      service: "Educational Tour",
      image: "/images/pune-educational.jpg"
    },
    {
      id: 3,
      name: "Ananya Patel",
      location: "Pune",
      category: "tourist",
      rating: 5,
      date: "November 2025",
      avatar: "https://ui-avatars.com/api/?name=Ananya+Patel&background=00b894&color=fff&size=80",
      content: "I visited Pune for the first time and Urban Cruise made it so easy to explore the city. The driver was friendly and suggested great places to visit. I got to see the real Pune, not just the tourist spots. Amazing experience!",
      service: "City Tour",
      image: "/images/pune-city-tour.jpg"
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Pune",
      category: "fort",
      rating: 4.5,
      date: "October 2025",
      avatar: "https://ui-avatars.com/api/?name=Vikram+Singh&background=55efc4&color=fff&size=80",
      content: "Urban Cruise took us on a fort tour of Pune and it was spectacular! The driver knew all about the history of Sinhagad Fort and made the trip educational and fun. The vehicle was perfect for the terrain.",
      service: "Fort Tour",
      image: "/images/pune-fort.jpg"
    },
    {
      id: 5,
      name: "Sneha Rao",
      location: "Pune",
      category: "corporate",
      rating: 5,
      date: "September 2025",
      avatar: "https://ui-avatars.com/api/?name=Sneha+Rao&background=00b894&color=fff&size=80",
      content: "Urban Cruise handles all our corporate travel needs in Pune. Their professionalism, punctuality, and service quality are exceptional. They have become an integral part of our operations.",
      service: "Corporate Travel",
      image: "/images/pune-corporate.jpg"
    },
    {
      id: 6,
      name: "Dr. Amit Sharma",
      location: "Pune",
      category: "nature",
      rating: 5,
      date: "August 2025",
      avatar: "https://ui-avatars.com/api/?name=Dr.+Amit+Sharma&background=55efc4&color=fff&size=80",
      content: "Urban Cruise took us on a nature tour around Pune and it was refreshing! We visited beautiful gardens, parks, and scenic spots. The driver was knowledgeable about flora and fauna. A must-try for nature lovers.",
      service: "Nature Tour",
      image: "/images/pune-nature.jpg"
    },
    {
      id: 7,
      name: "Priya Deshmukh",
      location: "Pune",
      category: "cultural",
      rating: 4.5,
      date: "July 2025",
      avatar: "https://ui-avatars.com/api/?name=Priya+Deshmukh&background=00b894&color=fff&size=80",
      content: "Urban Cruise arranged a cultural tour of Pune for our international guests. They were thoroughly impressed with the service, the driver's knowledge, and the comfort of the vehicle. Highly recommended for cultural experiences.",
      service: "Cultural Tour",
      image: "/images/pune-cultural.jpg"
    },
    {
      id: 8,
      name: "Rajesh Gupta",
      location: "Pune",
      category: "family",
      rating: 5,
      date: "June 2025",
      avatar: "https://ui-avatars.com/api/?name=Rajesh+Gupta&background=55efc4&color=fff&size=80",
      content: "Our family trip to Pune was made special by Urban Cruise. The SUV was spacious and comfortable for all five of us. The driver was friendly and suggested great family-friendly spots. The kids loved the experience!",
      service: "Family Travel",
      image: "/images/pune-family.jpg"
    },
  ];

  const categories = [
    { id: "all", label: "All Reviews" },
    { id: "heritage", label: "Heritage Tours" },
    { id: "educational", label: "Educational" },
    { id: "tourist", label: "Tourist" },
    { id: "fort", label: "Fort Tours" },
    { id: "nature", label: "Nature" },
    { id: "cultural", label: "Cultural" },
    { id: "family", label: "Family" },
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1a0a] via-[#1a2a1a] to-[#0a2a1a] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b894] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#55efc4] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#00b894]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#00b894]/30">
              <span className="w-2 h-2 bg-[#00b894] rounded-full animate-pulse" />
              <span className="text-[#55efc4] font-medium text-sm">Testimonials</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              What Our Pune{' '}
              <span className="bg-gradient-to-r from-[#00b894] to-[#55efc4] bg-clip-text text-transparent">
                Customers Say
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Read reviews from our customers who have explored Pune's rich culture, 
              heritage, and natural beauty with Urban Cruise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={getLocationUrl("/book")}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#00b894] hover:bg-[#00a381] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#00b894]/30"
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
      <section className="py-12 bg-gradient-to-r from-[#0a1a0a] to-[#1a2a1a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-2">
                  <stat.icon className="text-[#00b894] text-2xl" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0a] mb-4">
              Featured Testimonial
            </h2>
            <p className="text-gray-600 text-lg">
              Hear from our customers about their experience with Urban Cruise Pune.
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
                    <h3 className="text-xl font-bold text-[#0a1a0a]">{testimonials[0].name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <FaMapMarkerAlt className="text-[#00b894]" />
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
                <FaQuoteLeft className="text-[#00b894]/20 text-4xl absolute -top-2 -left-2" />
                <p className="text-gray-700 text-lg leading-relaxed pl-8">
                  {testimonials[0].content}
                </p>
                <FaQuoteRight className="text-[#00b894]/20 text-4xl absolute -bottom-2 -right-2" />
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                <span className="px-3 py-1 bg-[#00b894]/10 text-[#00b894] text-sm rounded-full">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0a] mb-4">
              Customer Reviews
            </h2>
            <p className="text-gray-600 text-lg">
              Browse through our collection of customer testimonials from Pune.
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
                    ? "bg-[#00b894] text-white shadow-lg shadow-[#00b894]/30"
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
                    <h4 className="font-semibold text-[#0a1a0a]">{testimonial.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaMapMarkerAlt className="text-[#00b894] text-xs" />
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
                  <span className="px-2 py-1 bg-[#00b894]/10 text-[#00b894] text-xs rounded-full">
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
                      ? "bg-[#00b894] text-white shadow-lg shadow-[#00b894]/30"
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#00b894] to-[#55efc4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore Pune?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join our happy customers in Pune and experience the cultural capital 
            of Maharashtra with Urban Cruise.
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

