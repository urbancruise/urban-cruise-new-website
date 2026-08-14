// app/components/contact/DelhiContactPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { getLocationConfig } from "@/app/lib/locationConfig";
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaFacebook, FaTwitter, FaLinkedin, FaPinterest,
  FaArrowRight, FaCheck, FaBuilding, FaCar,
  FaUsers, FaStar, FaWhatsapp
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function DelhiContactPage() {
  const { getLocationUrl, location } = useLocation();
  const locationConfig = getLocationConfig(location);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const stats = [
    { value: "50+", label: "Premium Vehicles", icon: FaCar },
    { value: "200+", label: "Happy Customers", icon: FaUsers },
    { value: "4.9★", label: "Average Rating", icon: FaStar },
    { value: "24/7", label: "Support Available", icon: FaClock },
  ];

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone Number",
      value: locationConfig.phone,
      href: `tel:${locationConfig.phone.replace(/\s/g, '')}`,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: locationConfig.phone,
      href: `https://wa.me/${locationConfig.phone.replace(/\s/g, '')}`,
      color: "from-green-500 to-green-600"
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      value: locationConfig.email,
      href: `mailto:${locationConfig.email}`,
      color: "from-red-500 to-red-600"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Office Address",
      value: locationConfig.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(locationConfig.address)}`,
      color: "from-purple-500 to-purple-600"
    },
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "6:00 AM - 11:00 PM" },
    { day: "Saturday", hours: "6:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "6:00 AM - 10:00 PM" },
    { day: "Holidays", hours: "Available on Request" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form:", formData);
    alert("Thank you! Our team will get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

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
              <span className="text-[#e94560] font-medium text-sm">Contact Us - Delhi</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Get in Touch with{' '}
              <span className="bg-gradient-to-r from-[#e94560] to-[#ff6b6b] bg-clip-text text-transparent">
                Urban Cruise Delhi
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Have questions about our services? Need a quote? Our Delhi team is here 
              to help you with all your transportation needs.
            </p>
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

      {/* Contact Info & Form */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us through any of the following channels. Our team is 
                  ready to assist you with any questions or requests.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.icon === FaMapMarkerAlt ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-[#e94560]/5 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500">{info.title}</p>
                        <p className="text-[#1a1a2e] font-medium truncate">{info.value}</p>
                      </div>
                      <FaArrowRight className="text-gray-400 group-hover:text-[#e94560] transition-colors duration-300" />
                    </a>
                  ))}
                </div>

                {/* Working Hours */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-4">
                    Working Hours
                  </h3>
                  <div className="space-y-2">
                    {workingHours.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{item.day}</span>
                        <span className="text-[#1a1a2e] font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#e94560] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <FaFacebook />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#e94560] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <FaTwitter />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#e94560] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <FaLinkedin />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#e94560] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <FaPinterest />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e94560] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e94560] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e94560] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e94560] focus:border-transparent transition-all duration-300"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e94560] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#e94560] hover:bg-[#c73652] text-white font-semibold py-4 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-[#e94560]/30 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <IoMdArrowForward className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Find Us in Delhi
            </h2>
            <p className="text-gray-600 text-lg">
              Visit our Delhi office. We'd love to meet you in person.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[400px] bg-gray-200 flex items-center justify-center">
            <div className="text-center p-8">
              <FaMapMarkerAlt className="text-6xl text-[#e94560] mx-auto mb-4" />
              <p className="text-gray-600 font-medium">{locationConfig.address}</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(locationConfig.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#e94560] font-semibold hover:underline"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#e94560] to-[#ff6b6b]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Delhi?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Book your premium cruise experience today and discover the magic of Delhi 
            in comfort and style.
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

