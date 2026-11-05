// app/components/services/DelhiJimCorbettPage.tsx
"use client";

import Hero from "./ui/Hero";
import About from "./ui/About";
import HowItWorks from "./ui/HowItWorks";
import VehicleForEveryGroupSize from "./ui/VehicleForEveryGroupSize";
import VehicleForEveryOccasion from "./ui/VehicleForEveryOccasion";
import WhyChooseUrbanCruise from "./ui/WhyChooseUrbanCruise";
import Testimonial from "./ui/Testimonial";
import Faqs from "./ui/Faqs";
import VehicleRentalServiceInIndia from "./ui/VehicleRentalServiceInIndia";
import OurTrustedPartner from "./ui/OurTrustedPartner";

export default function DelhiJimCorbettPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        location="delhi"
        content={{
          eyebrow: "Jim Corbett Vehicle Rental",
          title: "Delhi to Jim Corbett",
          titleHighlight: "Vehicle Rental",
          description:
            "Travel from Delhi to Jim Corbett National Park in a comfortable car, tempo traveller, or bus with a professional driver.",
          backgroundImageAlt: "Jim Corbett travel service from Delhi",
          vehiclesImageAlt: "Cars and buses for Delhi to Jim Corbett trips",
        }}
      />

      {/* About Section */}
      <About location="delhi" />

      {/* How It Works Section */}
      <HowItWorks location="delhi" />

      {/* Vehicle For Every Group Size Section */}
      <VehicleForEveryGroupSize location="delhi" />

      {/* Discover Our Premium Vehicle Rentals Section */}
      <VehicleForEveryOccasion location="delhi" />

      {/* Why Choose Urban Cruise Section */}
      <WhyChooseUrbanCruise location="delhi" />

      {/* Testimonials Section */}
      <Testimonial location="delhi" />

      {/* FAQs Section */}
      <Faqs location="delhi" />

      <VehicleRentalServiceInIndia location="delhi" />
      <OurTrustedPartner />
    </div>
  );
}