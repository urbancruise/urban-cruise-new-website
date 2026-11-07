'use client';

import React, { useEffect, useState } from 'react';

const stats = [
  { id: 1, value: '10', label: 'Handpicked resorts' },
  { id: 2, value: '1–15 km', label: 'Distance from park' },
  { id: 3, value: '₹1,500+', label: 'Starting per person' },
  { id: 4, value: 'Oct – Jun', label: 'Best visit season' },
];

const filters = ['All', 'Luxury', 'Budget', 'Riverside', 'Jungle view'];

const resorts = [
  {
    id: 1,
    name: 'Tiger Camp Resort',
    type: 'Jungle camp resort · 3 star',
    distance: '4 km from Corbett gate',
    images: [
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    ],
    tags: ['Sightseeing', 'Campfire', 'Jungle walk'],
    price: '₹1,500',
    category: 'Budget',
  },
  {
    id: 2,
    name: "Jim's Jungle Retreat",
    type: 'Nature retreat · 3 star',
    distance: '6 km from Corbett gate',
    images: [
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop',
    ],
    tags: ['Jungle view', 'Budget friendly', 'All meals'],
    price: '₹1,800',
    category: 'Jungle view',
  },
  {
    id: 3,
    name: 'Namah Resort',
    type: 'Luxury wilderness resort · 4 star',
    distance: '3 km from Corbett gate',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop',
    ],
    tags: ['Riverside', 'Infinity pool', 'Yoga deck'],
    price: '₹4,000',
    category: 'Luxury',
  },
  {
    id: 4,
    name: 'Namah Resort',
    type: 'Luxury wilderness resort · 4 star',
    distance: '3 km from Corbett gate',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop',
    ],
    tags: ['Riverside', 'Infinity pool', 'Yoga deck'],
    price: '₹4,000',
    category: 'Riverside',
  },
];

export default function ModernResortGuide() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredResorts =
    activeFilter === 'All'
      ? resorts
      : resorts.filter(
          (resort) =>
            resort.category === activeFilter ||
            resort.tags.some((tag) =>
              tag.toLowerCase().includes(activeFilter.toLowerCase())
            )
        );

  return (
    <section className="min-h-screen bg-[#f8fafc] font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="mb-12">
          <div className="mb-2 flex w-full items-center justify-start gap-1.5">
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
            <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.15em] text-[#03C35E] xs:text-[10px] sm:text-[10px] sm:tracking-[0.2em] md:text-[11px] lg:text-[12px] lg:tracking-[0.25em] xl:text-[13px]">
              RESORT GUIDE
            </span>
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
          </div>

          <h2 className="text-[21px] font-extrabold leading-[1] tracking-[-0.04em] text-[#142236] xs:text-[23px] sm:text-[27px] md:text-[29px]">
            Top 10 Resorts Near Jim Corbett National Park
          </h2>

          <p className="mt-2 font-serif text-[21px] italic leading-tight text-[#03C35E] xs:text-[23px] sm:text-[27px] md:text-[29px]">
            Find Your Perfect Stay in the Wild
          </p>

          <p className="mt-5 max-w-[900px] text-[10px] leading-[1.75] text-[#303944] xs:text-[11px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
            Discover the top resorts that add a five-star touch to your
            wildlife adventure. From premium jungle views to world-class
            service, these handpicked stays make every night memorable.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="mb-12 flex flex-col divide-y divide-[#E8E8E8] rounded-[18px] border border-[#E8E8E8] bg-white p-2 shadow-[0_12px_45px_rgba(0,0,0,0.10)] md:flex-row md:divide-x md:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-1 flex-col items-center justify-center p-6 text-center"
            >
              <span className="mb-2 inline-block rounded-lg bg-[#03C35E]/10 px-3 py-1 text-2xl font-black text-[#078B35]">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-[#4B5563]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Filter Pills */}
        <div className="mb-10 flex flex-wrap justify-start gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'border border-[#F7941E] bg-[#F7941E] text-white shadow-[0_8px_25px_rgba(247,148,30,0.28)]'
                    : 'border border-[#E8E8E8] bg-white text-[#344054] shadow-[0_4px_15px_rgba(0,0,0,0.06)] hover:border-[#03C35E] hover:text-[#03C35E]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Resort Carousel */}
        <ResortSlider resorts={filteredResorts} />

      </div>
    </section>
  );
}

// ========================================
// RESORT SLIDER COMPONENT
// ========================================

function ResortSlider({ resorts }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItems();

    window.addEventListener('resize', updateItems);

    return () => window.removeEventListener('resize', updateItems);
  }, []);

  const maxIndex = Math.max(0, resorts.length - itemsPerView);

  useEffect(() => {
    setCurrentIndex(0);
  }, [resorts]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="relative">
      {/* Resort navigation */}
      <div className="relative">
        <button
          onClick={prevSlide}
          disabled={maxIndex === 0}
          aria-label="Previous resorts"
          className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D5EBD9] bg-[#E8F4E9] text-[#27843B] shadow-[0_4px_15px_rgba(3,195,94,0.12)] transition-all duration-300 hover:bg-[#DDF3E5] disabled:cursor-not-allowed disabled:opacity-40 sm:h-11 sm:w-11"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={maxIndex === 0}
          aria-label="Next resorts"
          className="absolute right-0 top-1/2 z-20 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#F7941E] bg-[#F7941E] text-white shadow-[0_6px_18px_rgba(247,148,30,0.28)] transition-all duration-300 hover:bg-[#E8840A] disabled:cursor-not-allowed disabled:opacity-40 sm:h-11 sm:w-11"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Carousel Track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {resorts.map((resort) => (
              <div
                key={resort.id}
                className="shrink-0 px-3 py-2"
                style={{
                  width: `${100 / itemsPerView}%`,
                }}
              >
                <ResortCard resort={resort} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      {maxIndex > 0 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'h-2 w-6 bg-[#03C35E]'
                  : 'h-2 w-2 bg-[#B9EACB] hover:bg-[#03C35E]'
              }`}
            />
          ))}
        </div>
      )}

    </div>
  );
}

// ========================================
// RESORT CARD COMPONENT
// ========================================

function ResortCard({ resort }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) =>
      prev === resort.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) =>
      prev === 0 ? resort.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="group flex h-full flex-col rounded-[18px] border border-[#E8E8E8] bg-white p-3 shadow-[0_8px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

      {/* Image Slider */}
      <div className="relative h-56 rounded-2xl overflow-hidden mb-5">

        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {resort.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${resort.name} - image ${idx + 1}`}
              className="w-full h-full object-cover shrink-0"
            />
          ))}
        </div>

        {/* Price Badge */}
        <div className="absolute right-4 top-4 z-10 rounded-xl bg-[#F7941E] px-3 py-1.5 text-white shadow-[0_6px_18px_rgba(247,148,30,0.22)]">
          <span className="font-bold">{resort.price}</span>
          <span className="text-xs font-medium text-white/85"> / night</span>
        </div>

        {/* Previous Image */}
        <button
          onClick={prevImage}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white text-gray-800 z-10"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next Image */}
        <button
          onClick={nextImage}
          aria-label="Next image"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white text-gray-800 z-10"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Image Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {resort.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Show image ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-4 bg-white'
                  : 'w-1.5 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Card Content */}
      <div className="px-3 pb-3 flex flex-col flex-grow">

        <div className="flex justify-between items-start mb-1">
          <h2 className="text-xl font-extrabold leading-tight text-[#142236]">
            {resort.name}
          </h2>
        </div>

        <div className="mb-4 text-sm text-[#6B7280]">
          <p>{resort.type}</p>
          <p className="mt-0.5 font-medium text-[#344054]">
            {resort.distance}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {resort.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${
                idx === 0
                  ? 'bg-[#03C35E]/10 text-[#078B35]'
                  : idx === 1
                    ? 'bg-[#F7941E]/10 text-[#D97706]'
                    : 'bg-[#F6F8F7] text-[#344054]'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-4">
          <button className="w-full rounded-full bg-[#F7941E] py-3.5 font-semibold text-white shadow-[0_6px_18px_rgba(247,148,30,0.22)] transition-colors duration-300 hover:bg-[#03C35E]">
            Enquire Now
          </button>
        </div>

      </div>
    </div>
  );
}