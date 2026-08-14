// app/components/faqs/MumbaiFaqsPage.tsx
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

export default function MumbaiFaqsPage() {
  const { getLocationUrl, location } = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "booking", label: "Booking" },
    { id: "vehicles", label: "Vehicles" },
    { id: "services", label: "Services" },
    { id: "payment", label: "Payment" },
    { id: "safety", label: "Safety" },
  ];

  const faqs: FaqItem[] = [
    // Booking
    {
      question: "How do I book a vehicle in Mumbai?",
      answer: "You can book through our website, mobile app, or by calling our customer service. We offer 24/7 booking support for Mumbai clients.",
      category: "booking"
    },
    {
      question: "What is the cancellation policy?",
      answer: "Cancellations made 24 hours before the scheduled pickup time are eligible for a full refund. Cancellations within 24 hours may be subject to a fee.",
      category: "booking"
    },
    // Vehicles
    {
      question: "What types of vehicles are available in Mumbai?",
      answer: "We offer luxury sedans, SUVs, tempo travellers, mini buses, and luxury buses. Our fleet includes Mercedes, BMW, Volvo buses, and premium SUVs.",
      category: "vehicles"
    },
    {
      question: "Can I get a vehicle for a film shoot in Mumbai?",
      answer: "Yes! We specialize in providing vehicles for film shoots, celebrity transport, and production needs in Mumbai. We offer both standard and premium vehicles.",
      category: "services"
    },
    // Services
    {
      question: "Do you offer airport transfers in Mumbai?",
      answer: "Yes, we provide reliable airport transfer services to and from Chhatrapati Shivaji Maharaj International Airport. Our drivers track flight schedules for timely pickup.",
      category: "services"
    },
    {
      question: "Can you handle large group transportation in Mumbai?",
      answer: "Absolutely! We offer tempo travellers, mini buses, and luxury buses for group transportation. Perfect for corporate events, weddings, and group tours.",
      category: "services"
    },
    // Payment
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and cash. For corporate clients, we offer flexible billing options.",
      category: "payment"
    },
    // Safety
    {
      question: "What safety measures do you follow?",
      answer: "We follow strict safety protocols including regular vehicle sanitization, mandatory seat belts, driver background verification, and GPS tracking.",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c0c1e] via-[#1a0a2e] to-[#2d0a3e] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b6b] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#feca57] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#ff6b6b]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#ff6b6b]/30">
              <span className="w-2 h-2 bg-[#ff6b6b] rounded-full animate-pulse" />
              <span className="text-[#ff6b6b] font-medium text-sm">FAQs - Mumbai</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-[#ff6b6b] to-[#feca57] bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Find answers to the most common questions about our services in Mumbai.
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
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-[#ff6b6b] text-white shadow-lg shadow-[#ff6b6b]/30"
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
                      <span className="text-base md:text-lg font-semibold text-[#0c0c1e] pr-4">
                        {faq.question}
                      </span>
                      {openFaqs.includes(index) ? (
                        <FaChevronUp className="text-[#ff6b6b] flex-shrink-0" />
                      ) : (
                        <FaChevronDown className="text-[#ff6b6b] flex-shrink-0" />
                      )}
                    </button>
                    {openFaqs.includes(index) && (
                      <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          <span className="inline-block mt-3 px-3 py-1 bg-[#ff6b6b]/10 text-[#ff6b6b] text-xs rounded-full">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Can't find what you're looking for? Our support team is here to help you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#ff6b6b]/10 flex items-center justify-center text-[#ff6b6b] text-2xl mx-auto mb-4">
                  <FaPhone />
                </div>
                <h3 className="font-semibold text-[#0c0c1e] mb-2">Call Us</h3>
                <p className="text-gray-500">+91 8369681231</p>
                <p className="text-sm text-gray-400">24/7 Available</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#ff6b6b]/10 flex items-center justify-center text-[#ff6b6b] text-2xl mx-auto mb-4">
                  <FaEnvelope />
                </div>
                <h3 className="font-semibold text-[#0c0c1e] mb-2">Email Us</h3>
                <p className="text-gray-500">booking@urbancruise.in</p>
                <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#ff6b6b]/10 flex items-center justify-center text-[#ff6b6b] text-2xl mx-auto mb-4">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="font-semibold text-[#0c0c1e] mb-2">Visit Us</h3>
                <p className="text-gray-500">Laxmi Sadan, B-203, ठाकुर,<br />Phase 1, Thakur Village,<br />Kandivali East, Mumbai 400101</p>
              </div>
            </div>

            <Link
              href={getLocationUrl("/contact-us")}
              className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-[#ff6b6b] text-white rounded-full font-semibold hover:bg-[#e55a5a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#ff6b6b]/30"
            >
              Contact Our Support Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}