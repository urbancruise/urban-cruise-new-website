// app/components/faqs/GurugramFaqsPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { FaChevronDown, FaChevronUp, FaSearch, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export default function GurugramFaqsPage() {
  const { getLocationUrl, location } = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "booking", label: "Booking" },
    { id: "corporate", label: "Corporate" },
    { id: "vehicles", label: "Vehicles" },
    { id: "payment", label: "Payment" },
    { id: "safety", label: "Safety" },
  ];

  const faqs: FaqItem[] = [
    // Booking
    {
      question: "How do I book a corporate vehicle in Gurugram?",
      answer: "You can book through our website, mobile app, or by contacting our corporate sales team. We offer dedicated account managers for corporate clients in Gurugram.",
      category: "booking"
    },
    {
      question: "What is the cancellation policy for corporate bookings?",
      answer: "Corporate bookings have flexible cancellation policies. Please refer to your corporate agreement or contact your account manager for specific terms.",
      category: "booking"
    },
    // Corporate
    {
      question: "Do you offer dedicated vehicles for corporate clients?",
      answer: "Yes, we provide dedicated vehicles and drivers for corporate clients in Gurugram. We also offer fleet management solutions for businesses.",
      category: "corporate"
    },
    {
      question: "Can you handle large corporate events?",
      answer: "Absolutely! We specialize in corporate events, conferences, and team outings. Our fleet includes tempo travellers, mini buses, and luxury buses for groups of all sizes.",
      category: "corporate"
    },
    // Vehicles
    {
      question: "What vehicles are available for corporate travel in Gurugram?",
      answer: "We offer luxury sedans, SUVs, tempo travellers, mini buses, and luxury buses. Our fleet includes Mercedes Sprinter, Volvo buses, and premium SUVs.",
      category: "vehicles"
    },
    // Payment
    {
      question: "What payment options are available for corporate clients?",
      answer: "Corporate clients can choose from monthly billing, prepaid accounts, or per-trip payments. We also offer customized payment solutions for long-term partnerships.",
      category: "payment"
    },
    // Safety
    {
      question: "What safety measures are followed for corporate travel?",
      answer: "We maintain the highest safety standards including regular vehicle maintenance, driver background verification, GPS tracking, and real-time trip monitoring.",
      category: "safety"
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c0c1d] via-[#1a1a3e] to-[#2d1b4e] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6c5ce7] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00b894] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#6c5ce7]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#6c5ce7]/30">
              <span className="w-2 h-2 bg-[#6c5ce7] rounded-full animate-pulse" />
              <span className="text-[#a29bfe] font-medium text-sm">FAQs - Gurugram</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Find answers to the most common questions about our corporate services in Gurugram.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search your question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#6c5ce7] focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-[#6c5ce7] text-white shadow-lg shadow-[#6c5ce7]/30"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No questions found matching your search.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                    >
                      <span className="text-base md:text-lg font-semibold text-[#0c0c1d] pr-4">
                        {faq.question}
                      </span>
                      {openFaqs.includes(index) ? (
                        <FaChevronUp className="text-[#6c5ce7] flex-shrink-0" />
                      ) : (
                        <FaChevronDown className="text-[#6c5ce7] flex-shrink-0" />
                      )}
                    </button>
                    {openFaqs.includes(index) && (
                      <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          <span className="inline-block mt-3 px-3 py-1 bg-[#6c5ce7]/10 text-[#6c5ce7] text-xs rounded-full">
                            {categories.find(c => c.id === faq.category)?.label || faq.category}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1d] mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Can't find what you're looking for? Our corporate support team is here to help you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#6c5ce7]/10 flex items-center justify-center text-[#6c5ce7] text-2xl mx-auto mb-4">
                  <FaPhone />
                </div>
                <h3 className="font-semibold text-[#0c0c1d] mb-2">Call Us</h3>
                <p className="text-gray-500">+91 8928946056</p>
                <p className="text-sm text-gray-400">Mon-Sat, 6 AM - 11 PM</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#6c5ce7]/10 flex items-center justify-center text-[#6c5ce7] text-2xl mx-auto mb-4">
                  <FaEnvelope />
                </div>
                <h3 className="font-semibold text-[#0c0c1d] mb-2">Email Us</h3>
                <p className="text-gray-500">gurugram@urbancruise.in</p>
                <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#6c5ce7]/10 flex items-center justify-center text-[#6c5ce7] text-2xl mx-auto mb-4">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="font-semibold text-[#0c0c1d] mb-2">Visit Us</h3>
                <p className="text-gray-500">C/o 4C Plus, 3rd Floor,<br />Mahalaxmi Plaza, Sector 3 Vaishali,<br />Gaziabad- UP-201010</p>
              </div>
            </div>

            <Link
              href={getLocationUrl("/contact-us")}
              className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-[#6c5ce7] text-white rounded-full font-semibold hover:bg-[#5a4bd1] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#6c5ce7]/30"
            >
              Contact Our Support Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}