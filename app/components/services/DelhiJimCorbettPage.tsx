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
import AboutService from "./ui/AboutService";
import Wildlife from "./ui/Wildlife";
import SafariZones from "./ui/SafariZones";
import SafariTypes from "./ui/SafariTypes";
import SafariPlatforms from "./ui/SafariPlatforms";
import ResortGuide from "./ui/ResortGuide";
import TouristAttractions from "./ui/TouristAttractions";
import OurServices from "./ui/OurServices";

export default function DelhiJimCorbettPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
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
        cmsContent={cmsSections?.hero}
      />

      {/* About Section */}
      <About location="delhi" content={cmsSections?.about} />

      {/* How It Works Section */}
      <HowItWorks location="delhi" content={cmsSections?.howitworks} />

      {/* Vehicle For Every Group Size Section */}
      <VehicleForEveryGroupSize
        location="delhi"
        content={cmsSections?.groupsize}
      />

      {/* Discover Our Premium Vehicle Rentals Section */}
      <VehicleForEveryOccasion
        location="delhi"
        content={cmsSections?.occasion}
      />
      <OurServices content={cmsSections?.ourservices} location="delhi" />

      {/* About the Destination */}
      <AboutService content={cmsSections?.aboutservice} />

      {/* Wildlife Section */}
      <Wildlife content={cmsSections?.wildlife} />

      {/* Safari Zones Section */}
      <SafariZones content={cmsSections?.safarizones} />

      {/* SafariTypes Section */}
      <SafariTypes content={cmsSections?.safaritypes} />

      {/* Safari Platforms */}
      <SafariPlatforms content={cmsSections?.safariplatforms} />

      {/* Resort Guide */}
      <ResortGuide content={cmsSections?.resortguide} />

      {/* Tourist Attractions */}
      <TouristAttractions content={cmsSections?.touristattractions} />

      {/* Why Choose Urban Cruise Section */}
      <WhyChooseUrbanCruise
        location="delhi"
        content={cmsSections?.whychoose}
      />

      {/* Testimonials Section */}
      <Testimonial location="delhi" content={cmsSections?.testimonials} />

      {/* FAQs Section */}
      <Faqs location="delhi" content={cmsSections?.faq} />

      <VehicleRentalServiceInIndia
        location="delhi"
        content={cmsSections?.servicelocations}
      />
      <OurTrustedPartner content={cmsSections?.partners} />
    </div>
  );
}