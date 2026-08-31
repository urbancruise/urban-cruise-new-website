// app/components/vehicles/cars-suvs/gurugram/CarSuvs.tsx
"use client";

import Hero from "./ui/Hero";
import About from "./ui/About";
import HowItWorks from "./ui/HowItWorks";
import VehicleForEveryBudget from "./ui/VehicleForEveryBudget";
import VehicleForEveryGroupSize from "./ui/VehicleForEveryGroupSize";
import VehicleForEveryOccasion from "./ui/VehicleForEveryOccasion";
import WhyChooseUrbanCruise from "./ui/WhyChooseUrbanCruise";
import Testimonials from "./ui/Testimonials";
import Faqs from "./ui/Faq's";
import VehicleRentalServiceInIndia from "./ui/VehicleRentalServiceInIndia";
import OurTrustedPartner from "../../../ourtrustedpartner/OurTrustedPartner";
import DownloadApp from "../../../download-app/DownloadApp";


export default function CarSuvs() {
  return (
    <section className="min-h-[calc(100vh-4rem)]">
      {/* Hero */}
      <Hero/>
      {/* About */}
      <About/>
      {/* HowItWorks */}
      <HowItWorks />
      {/* VehicleForEveryBudget */}
      <VehicleForEveryBudget/>
      {/* VehicleForEveryGroupSize */}
      <VehicleForEveryGroupSize/>
      {/* VehicleForEveryOccasion */}
      <VehicleForEveryOccasion/>
      {/* WhyChooseUrbanCruise */}
      <WhyChooseUrbanCruise/>
      {/* Testimonials */}
      <Testimonials/>
      {/* Faq's */}
      <Faqs/>
      {/* VehicleRentalServiceInIndia */}
      <VehicleRentalServiceInIndia/>
      {/* Our Trusted Partner */}
      <OurTrustedPartner />
      {/* FEATURES */}
      <DownloadApp />
    </section>
  );
}

