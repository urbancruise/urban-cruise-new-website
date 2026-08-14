// app/components/faqs/DelhiFaqsPage.tsx
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

export default function DelhiFaqsPage() {
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
      question: "How do I book a vehicle in Delhi?",
      answer: "You can book a vehicle through our website, mobile app, or by calling our customer service. Simply select your preferred vehicle, choose your date and time, and complete the booking process.",
      category: "booking"
    },
    {
      question: "What is the cancellation policy?",
      answer: "Cancellations made 24 hours before the scheduled pickup time are eligible for a full refund. Cancellations within 24 hours may be subject to a cancellation fee.",
      category: "booking"
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 24-48 hours in advance for the best availability, especially during peak seasons and for special events in Delhi.",
      category: "booking"
    },
    // Vehicles
    {
      question: "What types of vehicles are available in Delhi?",
      answer: "We offer a wide range of vehicles including SUVs, sedans, luxury cars, tempo travellers, mini buses, and luxury buses. Our fleet includes Toyota Innova, Ertiga, Mercedes Sprinter, Volvo buses, and more.",
      category: "vehicles"
    },
    {
      question: "Are the vehicles well-maintained?",
      answer: "Yes, all our vehicles undergo regular maintenance checks and are thoroughly cleaned and sanitized before every trip. We ensure the highest standards of quality and safety.",
      category: "vehicles"
    },
    // Services
    {
      question: "Do you offer airport transfers in Delhi?",
      answer: "Yes, we provide reliable airport transfer services to and from Delhi's Indira Gandhi International Airport. Our drivers track flight schedules to ensure timely pickup.",
      category: "services"
    },
    {
      question: "Can I book a vehicle for a heritage tour in Delhi?",
      answer: "Absolutely! We specialize in heritage tours covering Delhi's iconic landmarks including Red Fort, Qutub Minar, Humayun's Tomb, India Gate, and more. Our knowledgeable drivers double as tour guides.",
      category: "services"
    },
    // Payment
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and cash. For corporate clients, we also offer flexible billing options.",
      category: "payment"
    },
    // Safety
    {
      question: "What safety measures do you follow?",
      answer: "We follow strict safety protocols including regular vehicle sanitization, mandatory seat belts, driver background verification, and GPS tracking for all trips.",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e94560] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0f3460] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#e94560]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#e94560]/30">
              <span className="w-2 h-2 bg-[#e94560] rounded-full animate-pulse" />
              <span className="text-[#e94560] font-medium text-sm">FAQs - Delhi</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-[#e94560] to-[#ff6b6b] bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Find answers to the most common questions about our services in Delhi.
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
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#e94560] focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-[#e94560] text-white shadow-lg shadow-[#e94560]/30"
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
                      <span className="text-base md:text-lg font-semibold text-[#1a1a2e] pr-4">
                        {faq.question}
                      </span>
                      {openFaqs.includes(index) ? (
                        <FaChevronUp className="text-[#e94560] flex-shrink-0" />
                      ) : (
                        <FaChevronDown className="text-[#e94560] flex-shrink-0" />
                      )}
                    </button>
                    {openFaqs.includes(index) && (
                      <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          <span className="inline-block mt-3 px-3 py-1 bg-[#e94560]/10 text-[#e94560] text-xs rounded-full">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Can't find what you're looking for? Our support team is here to help you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#e94560]/10 flex items-center justify-center text-[#e94560] text-2xl mx-auto mb-4">
                  <FaPhone />
                </div>
                <h3 className="font-semibold text-[#1a1a2e] mb-2">Call Us</h3>
                <p className="text-gray-500">+91 8928946056</p>
                <p className="text-sm text-gray-400">Mon-Sat, 6 AM - 11 PM</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#e94560]/10 flex items-center justify-center text-[#e94560] text-2xl mx-auto mb-4">
                  <FaEnvelope />
                </div>
                <h3 className="font-semibold text-[#1a1a2e] mb-2">Email Us</h3>
                <p className="text-gray-500">delhi@urbancruise.in</p>
                <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#e94560]/10 flex items-center justify-center text-[#e94560] text-2xl mx-auto mb-4">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="font-semibold text-[#1a1a2e] mb-2">Visit Us</h3>
                <p className="text-gray-500">C/o 4C Plus, 3rd Floor,<br />Mahalaxmi Plaza, Sector 3 Vaishali,<br />Gaziabad- UP-201010</p>
              </div>
            </div>

            <Link
              href={getLocationUrl("/contact-us")}
              className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-[#e94560] text-white rounded-full font-semibold hover:bg-[#c73652] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#e94560]/30"
            >
              Contact Our Support Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}