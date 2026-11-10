// app/components/services/PuneJimCorbettPage.tsx
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
import AboutService from "./ui/AboutService";
import Wildlife from "./ui/Wildlife";
import SafariZones from "./ui/SafariZones";
import SafariTypes from "./ui/SafariTypes";
import SafariPlatforms from "./ui/SafariPlatforms";
import ResortGuide from "./ui/ResortGuide";
import TouristAttractions from "./ui/TouristAttractions";
import OurServices from "./ui/OurServices";

export default function PuneJimCorbettPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        location="pune"
        content={{
          eyebrow: "Jim Corbett Vehicle Rental",
          title: "Pune to Jim Corbett",
          titleHighlight: "Vehicle Rental",
          description:
            "Travel from Pune to Jim Corbett National Park in a comfortable car, tempo traveller, or bus with a professional driver.",
          backgroundImageAlt: "Jim Corbett travel service from Pune",
          vehiclesImageAlt: "Cars and buses for Pune to Jim Corbett trips",
        }}
        cmsContent={cmsSections?.hero}
      />

      {/* About Section */}
      <About location="pune" content={cmsSections?.about} />

      {/* How It Works Section */}
      <HowItWorks location="pune" content={cmsSections?.howitworks} />

      {/* Vehicle For Every Group Size Section */}
      <VehicleForEveryGroupSize
        location="pune"
        content={cmsSections?.groupsize}
      />

      {/* Discover Our Premium Vehicle Rentals Section */}
      <VehicleForEveryOccasion
        location="pune"
        content={cmsSections?.occasion}
      />
      {/* <OurServices content={cmsSections?.ourservices} location="pune" /> */}

      {/* Jim Corbett destination and safari sections */}
      <AboutService content={cmsSections?.aboutservice} />
      <Wildlife content={cmsSections?.wildlife} />
      <SafariZones content={cmsSections?.safarizones} />
      <SafariTypes content={cmsSections?.safaritypes} />
      <SafariPlatforms content={cmsSections?.safariplatforms} />
      <ResortGuide content={cmsSections?.resortguide} />
      <TouristAttractions content={cmsSections?.touristattractions} />

      {/* Why Choose Urban Cruise Section */}
      <WhyChooseUrbanCruise
        location="pune"
        content={cmsSections?.whychoose}
      />

      {/* Reviews */}
      <Testimonial location="pune" content={cmsSections?.testimonials} />

      {/* FAQs Section */}
      <Faqs location="pune" content={cmsSections?.faq} />

      <VehicleRentalServiceInIndia
        location="pune"
        content={cmsSections?.servicelocations}
      />
      <OurTrustedPartner content={cmsSections?.partners} />
    </div>
  );
}
