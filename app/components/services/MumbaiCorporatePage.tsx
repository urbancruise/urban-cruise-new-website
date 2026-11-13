"use client";

import Hero from "./ui/Hero";
import About from "./ui/About";
import HowItWorks from "./ui/HowItWorks";
import VehicleForEveryGroupSize from "./ui/VehicleForEveryGroupSize";
import VehicleForEveryOccasion from "./ui/VehicleForEveryOccasion";
import CorporateServicePageSections from "./ui/CorporateServicePageSections";
import AboutService from "./ui/AboutService";
import WhyChooseUrbanCruise from "./ui/WhyChooseUrbanCruise";
import Testimonial from "./ui/Testimonial";
import Faqs from "./ui/Faqs";
import VehicleRentalServiceInIndia from "./ui/VehicleRentalServiceInIndia";
import OurTrustedPartner from "./ui/OurTrustedPartner";

export default function MumbaiCorporatePage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="mumbai"
        content={{
          eyebrow: "Corporate Travel Rental Service in Mumbai",
          title: "Mumbai Corporate",
          titleHighlight: "Travel Service",
          description:
            "Arrange reliable corporate transportation in Mumbai for employee commutes, executive travel, airport transfers, and business events.",
          backgroundImageAlt: "Corporate travel service in Mumbai",
          vehiclesImageAlt: "Vehicles for corporate travel in Mumbai",
        }}
        cmsContent={cmsSections?.hero}
      />
      <About location="mumbai" content={cmsSections?.about} />
      <HowItWorks location="mumbai" content={cmsSections?.howitworks} />
      <VehicleForEveryGroupSize
        location="mumbai"
        content={cmsSections?.groupsize}
      />
      <VehicleForEveryOccasion
        location="mumbai"
        content={cmsSections?.occasion}
      />
      <CorporateServicePageSections cmsSections={cmsSections} />
      <AboutService content={cmsSections?.aboutservice} />
      <WhyChooseUrbanCruise
        location="mumbai"
        content={cmsSections?.whychoose}
      />
      <Testimonial location="mumbai" content={cmsSections?.testimonials} />
      <Faqs location="mumbai" content={cmsSections?.faq} />
      <VehicleRentalServiceInIndia
        location="mumbai"
        content={cmsSections?.servicelocations}
      />
      <OurTrustedPartner content={cmsSections?.partners} />
    </div>
  );
}
