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

export default function GlobalJimCorbettPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="global"
        content={{
          eyebrow: "Jim Corbett Vehicle Rental",
          title: "Explore Jim Corbett",
          titleHighlight: "Vehicle Rental",
          description:
            "Travel to Jim Corbett National Park in a comfortable car, tempo traveller, or bus with a professional driver.",
          backgroundImageAlt: "Jim Corbett travel service",
          vehiclesImageAlt: "Cars and buses for Jim Corbett trips",
        }}
      />
      <About location="global" />
      <HowItWorks location="global" />
      <VehicleForEveryGroupSize location="global" />
      <VehicleForEveryOccasion location="global" />
      <WhyChooseUrbanCruise location="global" />
      <Testimonial location="global" />
      <Faqs location="global" />
      <VehicleRentalServiceInIndia location="global" />
      <OurTrustedPartner />
    </div>
  );
}
