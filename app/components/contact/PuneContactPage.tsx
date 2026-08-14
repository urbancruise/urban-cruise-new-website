// app/components/contact/PuneContactPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { getLocationConfig } from "@/app/lib/locationConfig";
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaFacebook, FaTwitter, FaLinkedin, FaPinterest,
  FaArrowRight, FaCheck, FaBuilding, FaCar,
  FaUsers, FaStar, FaWhatsapp, FaUniversity,
  FaBook, FaTree, FaMountain
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function PuneContactPage() {
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
    { value: "35+", label: "Vehicle Options", icon: FaCar },
    { value: "180+", label: "Happy Customers", icon: FaUsers },
    { value: "4.8★", label: "Average Rating", icon: FaStar },
    { value: "100%", label: "Heritage Certified", icon: FaClock },
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
      title: "Pune Office",
      value: locationConfig.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(locationConfig.address)}`,
      color: "from-purple-500 to-purple-600"
    },
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "6:00 AM - 11:00 PM" },
    { day: "Saturday", hours: "6:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "6:00 AM - 10:00 PM" },
    { day: "Heritage Tours", hours: "Available on Request" },
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1a0a] via-[#1a2a1a] to-[#0a2a1a] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b894] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#55efc4] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#00b894]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#00b894]/30">
              <span className="w-2 h-2 bg-[#00b894] rounded-full animate-pulse" />
              <span className="text-[#55efc4] font-medium text-sm">Contact Us - Pune</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Connect with{' '}
              <span className="bg-gradient-to-r from-[#00b894] to-[#55efc4] bg-clip-text text-transparent">
                Urban Cruise Pune
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Explore Pune's rich heritage with us. Our team is ready to help you 
              discover the cultural capital of Maharashtra.
            </p>
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

      {/* Contact Info & Form */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <FaUniversity className="text-[#00b894] text-2xl" />
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0a1a0a]">
                    Cultural Hub Contact
                  </h2>
                </div>
                <p className="text-gray-600 mb-8">
                  Reach out to our Pune team for heritage tours, educational trips, 
                  and cultural experiences in the Oxford of the East.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.icon === FaMapMarkerAlt ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-[#00b894]/5 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500">{info.title}</p>
                        <p className="text-[#0a1a0a] font-medium truncate">{info.value}</p>
                      </div>
                      <FaArrowRight className="text-gray-400 group-hover:text-[#00b894] transition-colors duration-300" />
                    </a>
                  ))}
                </div>

                {/* Working Hours */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-[#0a1a0a] mb-4">
                    Service Hours
                  </h3>
                  <div className="space-y-2">
                    {workingHours.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{item.day}</span>
                        <span className="text-[#0a1a0a] font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-[#0a1a0a] mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#00b894] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <FaFacebook />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#00b894] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <FaTwitter />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#00b894] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <FaLinkedin />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#00b894] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <FaPinterest />
                    </a>
                  </div>
                </div>

                {/* Pune Highlights */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-[#0a1a0a] mb-3">
                    Explore Pune With Us
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaUniversity className="text-[#00b894]" />
                      Heritage Tours
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaBook className="text-[#00b894]" />
                      Educational Trips
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaMountain className="text-[#00b894]" />
                      Fort Tours
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaTree className="text-[#00b894]" />
                      Nature Tours
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a1a0a] mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and our Pune team will get back to you 
                  as soon as possible.
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b894] focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b894] focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b894] focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b894] focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b894] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your travel needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#00b894] hover:bg-[#00a381] text-white font-semibold py-4 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-[#00b894]/30 flex items-center justify-center gap-2"
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0a] mb-4">
              Find Us in Pune
            </h2>
            <p className="text-gray-600 text-lg">
              Visit our Pune office in the cultural capital of Maharashtra.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[400px] bg-gray-200 flex items-center justify-center">
            <div className="text-center p-8">
              <FaMapMarkerAlt className="text-6xl text-[#00b894] mx-auto mb-4" />
              <p className="text-gray-600 font-medium">{locationConfig.address}</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(locationConfig.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#00b894] font-semibold hover:underline"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#00b894] to-[#55efc4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore Pune?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Book your premium cruise experience today and discover the cultural heart 
            of Maharashtra in comfort and style.
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

