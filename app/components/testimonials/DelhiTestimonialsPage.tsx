// app/components/testimonials/DelhiTestimonialsPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaStar, FaUser, FaQuoteLeft, FaQuoteRight, 
  FaCalendar, FaMapMarkerAlt, FaStarHalfAlt,
  FaArrowRight, FaCheck, FaHeart, FaUsers,
  FaCar, FaBuilding, FaMonument
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function DelhiTestimonialsPage() {
  const { getLocationUrl } = useLocation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 6;

  const stats = [
    { value: "200+", label: "Happy Customers", icon: FaUsers },
    { value: "4.9★", label: "Average Rating", icon: FaStar },
    { value: "95%", label: "Customer Satisfaction", icon: FaHeart },
    { value: "500+", label: "Trips Completed", icon: FaCar },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      location: "Delhi",
      category: "heritage",
      rating: 5,
      date: "January 2026",
      avatar: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=e94560&color=fff&size=80",
      content: "Urban Cruise Delhi made our heritage tour unforgettable. The chauffeur was incredibly knowledgeable about Delhi's history and took us to all the iconic spots. The luxury vehicle was immaculate and comfortable. Highly recommend for anyone wanting to explore Delhi in style!",
      service: "Heritage Tour",
      image: "/images/delhi-heritage.jpg"
    },
    {
      id: 2,
      name: "Priya Patel",
      location: "Delhi NCR",
      category: "corporate",
      rating: 5,
      date: "December 2025",
      avatar: "https://ui-avatars.com/api/?name=Priya+Patel&background=ff6b6b&color=fff&size=80",
      content: "As a corporate executive, I rely on Urban Cruise for all my airport transfers and client meetings in Delhi. Their punctuality and professionalism are unmatched. The fleet is always top-notch and the drivers are courteous and professional.",
      service: "Corporate Travel",
      image: "/images/delhi-corporate.jpg"
    },
    {
      id: 3,
      name: "Amit Kumar",
      location: "Delhi",
      category: "wedding",
      rating: 4.5,
      date: "November 2025",
      avatar: "https://ui-avatars.com/api/?name=Amit+Kumar&background=0f3460&color=fff&size=80",
      content: "We hired Urban Cruise for our wedding transportation and they exceeded our expectations. The fleet looked stunning, and the coordination was flawless. Our guests were highly impressed with the service. Thank you for making our special day even more memorable!",
      service: "Wedding Transport",
      image: "/images/delhi-wedding.jpg"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      location: "Delhi NCR",
      category: "tourist",
      rating: 5,
      date: "October 2025",
      avatar: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=e94560&color=fff&size=80",
      content: "Being a tourist in Delhi, I was nervous about navigating the city. Urban Cruise made it so easy! My driver was patient, helpful, and knew all the best spots. I visited places I would have never found on my own. A must-use service for tourists!",
      service: "City Tour",
      image: "/images/delhi-tourist.jpg"
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Delhi",
      category: "business",
      rating: 5,
      date: "September 2025",
      avatar: "https://ui-avatars.com/api/?name=Vikram+Singh&background=ff6b6b&color=fff&size=80",
      content: "Urban Cruise has been my go-to service for business travel in Delhi for over two years. Their reliability is unmatched. The vehicles are always clean and well-maintained, and the drivers are professional. Highly recommended for business professionals.",
      service: "Business Travel",
      image: "/images/delhi-business.jpg"
    },
    {
      id: 6,
      name: "Ananya Verma",
      location: "Delhi",
      category: "family",
      rating: 5,
      date: "August 2025",
      avatar: "https://ui-avatars.com/api/?name=Ananya+Verma&background=0f3460&color=fff&size=80",
      content: "Our family trip to Delhi was made special by Urban Cruise. The SUV was spacious and comfortable for all five of us. The driver was friendly and suggested great family-friendly spots. The kids loved the experience!",
      service: "Family Travel",
      image: "/images/delhi-family.jpg"
    },
    {
      id: 7,
      name: "Deepak Malhotra",
      location: "Delhi NCR",
      category: "corporate",
      rating: 4.5,
      date: "July 2025",
      avatar: "https://ui-avatars.com/api/?name=Deepak+Malhotra&background=e94560&color=fff&size=80",
      content: "Our company has partnered with Urban Cruise for all our corporate events in Delhi. Their service is consistently excellent. They handle everything from logistics to client satisfaction with utmost professionalism.",
      service: "Corporate Events",
      image: "/images/delhi-corporate-events.jpg"
    },
    {
      id: 8,
      name: "Meera Gupta",
      location: "Delhi",
      category: "luxury",
      rating: 5,
      date: "June 2025",
      avatar: "https://ui-avatars.com/api/?name=Meera+Gupta&background=ff6b6b&color=fff&size=80",
      content: "I used Urban Cruise's luxury car service for my anniversary celebration in Delhi. The Mercedes was pristine, the driver was dressed professionally, and the service was impeccable. It made our special evening truly magical.",
      service: "Luxury Travel",
      image: "/images/delhi-luxury.jpg"
    },
  ];

  const categories = [
    { id: "all", label: "All Reviews" },
    { id: "heritage", label: "Heritage Tours" },
    { id: "corporate", label: "Corporate" },
    { id: "wedding", label: "Wedding" },
    { id: "tourist", label: "Tourist" },
    { id: "business", label: "Business" },
    { id: "family", label: "Family" },
    { id: "luxury", label: "Luxury" },
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e94560] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0f3460] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#e94560]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#e94560]/30">
              <span className="w-2 h-2 bg-[#e94560] rounded-full animate-pulse" />
              <span className="text-[#e94560] font-medium text-sm">Testimonials</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              What Our Delhi{' '}
              <span className="bg-gradient-to-r from-[#e94560] to-[#ff6b6b] bg-clip-text text-transparent">
                Customers Say
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Read real reviews from our valued customers in Delhi. Discover why we're 
              the most trusted luxury transportation service in the capital.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={getLocationUrl("/book")}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#e94560] hover:bg-[#c73652] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#e94560]/30"
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
      <section className="py-12 bg-gradient-to-r from-[#1a1a2e] to-[#16213e]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-2">
                  <stat.icon className="text-[#e94560] text-2xl" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Featured Testimonial
            </h2>
            <p className="text-gray-600 text-lg">
              Hear from our customers about their experience with Urban Cruise Delhi.
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
                    <h3 className="text-xl font-bold text-[#1a1a2e]">{testimonials[0].name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <FaMapMarkerAlt className="text-[#e94560]" />
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
                <FaQuoteLeft className="text-[#e94560]/20 text-4xl absolute -top-2 -left-2" />
                <p className="text-gray-700 text-lg leading-relaxed pl-8">
                  {testimonials[0].content}
                </p>
                <FaQuoteRight className="text-[#e94560]/20 text-4xl absolute -bottom-2 -right-2" />
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                <span className="px-3 py-1 bg-[#e94560]/10 text-[#e94560] text-sm rounded-full">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Customer Reviews
            </h2>
            <p className="text-gray-600 text-lg">
              Browse through our collection of customer testimonials from Delhi.
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
                    ? "bg-[#e94560] text-white shadow-lg shadow-[#e94560]/30"
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
                    <h4 className="font-semibold text-[#1a1a2e]">{testimonial.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaMapMarkerAlt className="text-[#e94560] text-xs" />
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
                  <span className="px-2 py-1 bg-[#e94560]/10 text-[#e94560] text-xs rounded-full">
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
                      ? "bg-[#e94560] text-white shadow-lg shadow-[#e94560]/30"
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#e94560] to-[#ff6b6b]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Delhi?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join our happy customers in Delhi and experience luxury transportation 
            at its finest. Book your ride today!
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

