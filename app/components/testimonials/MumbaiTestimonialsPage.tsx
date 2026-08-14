// app/components/testimonials/MumbaiTestimonialsPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaStar, FaUser, FaQuoteLeft, FaQuoteRight, 
  FaCalendar, FaMapMarkerAlt, FaStarHalfAlt,
  FaArrowRight, FaCheck, FaHeart, FaUsers,
  FaCar, FaFilm, FaUmbrellaBeach, FaUtensils
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function MumbaiTestimonialsPage() {
  const { getLocationUrl } = useLocation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 6;

  const stats = [
    { value: "300+", label: "Happy Customers", icon: FaUsers },
    { value: "4.8★", label: "Average Rating", icon: FaStar },
    { value: "97%", label: "Customer Satisfaction", icon: FaHeart },
    { value: "800+", label: "Trips Completed", icon: FaCar },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Shah Rukh Khan (Staff)",
      location: "Mumbai",
      category: "celebrity",
      rating: 5,
      date: "January 2026",
      avatar: "https://ui-avatars.com/api/?name=Shah+Rukh&background=ff6b6b&color=fff&size=80",
      content: "Urban Cruise Mumbai is our go-to service for all transportation needs. Their professionalism, punctuality, and fleet quality are exceptional. They understand the needs of our industry and deliver consistently.",
      service: "Celebrity Transport",
      image: "/images/mumbai-celebrity.jpg"
    },
    {
      id: 2,
      name: "Priyanka Chopra (Team)",
      location: "Mumbai",
      category: "entertainment",
      rating: 5,
      date: "December 2025",
      avatar: "https://ui-avatars.com/api/?name=Priyanka+Chopra&background=feca57&color=fff&size=80",
      content: "Urban Cruise provides excellent service for our production needs. They handle tight schedules with ease and maintain the highest standards of professionalism. Highly recommended for the entertainment industry.",
      service: "Entertainment Travel",
      image: "/images/mumbai-entertainment.jpg"
    },
    {
      id: 3,
      name: "Rahul Sharma",
      location: "Mumbai",
      category: "beach",
      rating: 5,
      date: "November 2025",
      avatar: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=ff6b6b&color=fff&size=80",
      content: "I used Urban Cruise for a beach drive along Marine Drive and Bandra. The experience was incredible! The driver knew all the best spots and made our trip unforgettable. The luxury car was perfect for the occasion.",
      service: "Coastal Drive",
      image: "/images/mumbai-coastal.jpg"
    },
    {
      id: 4,
      name: "Sneha Patel",
      location: "Mumbai",
      category: "food",
      rating: 4.5,
      date: "October 2025",
      avatar: "https://ui-avatars.com/api/?name=Sneha+Patel&background=feca57&color=fff&size=80",
      content: "Urban Cruise took us on a food tour of Mumbai and it was amazing! The driver was knowledgeable about all the best food spots. We visited places we would never have found on our own. Highly recommended!",
      service: "Food Tour",
      image: "/images/mumbai-food.jpg"
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Mumbai",
      category: "corporate",
      rating: 5,
      date: "September 2025",
      avatar: "https://ui-avatars.com/api/?name=Vikram+Singh&background=ff6b6b&color=fff&size=80",
      content: "Urban Cruise handles all our corporate travel needs in Mumbai. Their reliability and professionalism have made them an invaluable partner. The vehicles are always pristine and the drivers are courteous.",
      service: "Corporate Travel",
      image: "/images/mumbai-corporate.jpg"
    },
    {
      id: 6,
      name: "Ananya Rao",
      location: "Mumbai",
      category: "shopping",
      rating: 5,
      date: "August 2025",
      avatar: "https://ui-avatars.com/api/?name=Ananya+Rao&background=feca57&color=fff&size=80",
      content: "Urban Cruise made our shopping spree in Mumbai so much fun! The driver was patient and helpful, taking us to all the best shopping destinations. The vehicle was comfortable and spacious for all our shopping bags.",
      service: "Shopping Tour",
      image: "/images/mumbai-shopping.jpg"
    },
    {
      id: 7,
      name: "Raj Malhotra",
      location: "Mumbai",
      category: "movie",
      rating: 4.5,
      date: "July 2025",
      avatar: "https://ui-avatars.com/api/?name=Raj+Malhotra&background=ff6b6b&color=fff&size=80",
      content: "I booked Urban Cruise for a film city tour and it was a dream come true! The driver knew all about Bollywood history and took us to iconic film locations. An unforgettable experience for movie lovers.",
      service: "Film City Tour",
      image: "/images/mumbai-film-city.jpg"
    },
    {
      id: 8,
      name: "Meera Joshi",
      location: "Mumbai",
      category: "beach",
      rating: 5,
      date: "June 2025",
      avatar: "https://ui-avatars.com/api/?name=Meera+Joshi&background=feca57&color=fff&size=80",
      content: "Urban Cruise made our coastal drive along Mumbai's coastline absolutely magical. The sunset views from Marine Drive were breathtaking. It was the perfect romantic evening in the city of dreams.",
      service: "Romantic Drive",
      image: "/images/mumbai-romantic.jpg"
    },
  ];

  const categories = [
    { id: "all", label: "All Reviews" },
    { id: "celebrity", label: "Celebrity" },
    { id: "entertainment", label: "Entertainment" },
    { id: "beach", label: "Beach & Coastal" },
    { id: "food", label: "Food Tours" },
    { id: "shopping", label: "Shopping" },
    { id: "movie", label: "Movie Tours" },
    { id: "corporate", label: "Corporate" },
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c0c1e] via-[#1a0a2e] to-[#2d0a3e] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b6b] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#feca57] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#ff6b6b]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#ff6b6b]/30">
              <span className="w-2 h-2 bg-[#ff6b6b] rounded-full animate-pulse" />
              <span className="text-[#ff6b6b] font-medium text-sm">Testimonials</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              What Our Mumbai{' '}
              <span className="bg-gradient-to-r from-[#ff6b6b] to-[#feca57] bg-clip-text text-transparent">
                Customers Say
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Read reviews from our diverse clientele in Mumbai - from celebrities to 
              corporate executives and tourists exploring the city.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={getLocationUrl("/book")}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff6b6b] hover:bg-[#e55a5a] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#ff6b6b]/30"
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
      <section className="py-12 bg-gradient-to-r from-[#0c0c1e] to-[#1a0a2e]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-2">
                  <stat.icon className="text-[#ff6b6b] text-2xl" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">
              Featured Testimonial
            </h2>
            <p className="text-gray-600 text-lg">
              Hear from our customers about their experience with Urban Cruise Mumbai.
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
                    <h3 className="text-xl font-bold text-[#0c0c1e]">{testimonials[0].name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <FaMapMarkerAlt className="text-[#ff6b6b]" />
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
                <FaQuoteLeft className="text-[#ff6b6b]/20 text-4xl absolute -top-2 -left-2" />
                <p className="text-gray-700 text-lg leading-relaxed pl-8">
                  {testimonials[0].content}
                </p>
                <FaQuoteRight className="text-[#ff6b6b]/20 text-4xl absolute -bottom-2 -right-2" />
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                <span className="px-3 py-1 bg-[#ff6b6b]/10 text-[#ff6b6b] text-sm rounded-full">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">
              Customer Reviews
            </h2>
            <p className="text-gray-600 text-lg">
              Browse through our collection of customer testimonials from Mumbai.
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
                    ? "bg-[#ff6b6b] text-white shadow-lg shadow-[#ff6b6b]/30"
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
                    <h4 className="font-semibold text-[#0c0c1e]">{testimonial.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaMapMarkerAlt className="text-[#ff6b6b] text-xs" />
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
                  <span className="px-2 py-1 bg-[#ff6b6b]/10 text-[#ff6b6b] text-xs rounded-full">
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
                      ? "bg-[#ff6b6b] text-white shadow-lg shadow-[#ff6b6b]/30"
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#ff6b6b] to-[#ff9a9a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Mumbai?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join our happy customers in Mumbai and experience the best of 
            the city with Urban Cruise.
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

