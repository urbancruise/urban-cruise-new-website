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

export default function GurugramCorporatePage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="gurugram"
        content={{
          eyebrow: "Corporate Travel Rental Service in Gurugram",
          title: "Gurugram Corporate",
          titleHighlight: "Travel Service",
          description:
            "Arrange reliable corporate transportation in Gurugram for employee commutes, executive travel, airport transfers, and business events.",
          backgroundImageAlt: "Corporate travel service in Gurugram",
          vehiclesImageAlt: "Vehicles for corporate travel in Gurugram",
        }}
        cmsContent={cmsSections?.hero}
      />
      <About location="gurugram" content={cmsSections?.about} />
      <HowItWorks location="gurugram" content={cmsSections?.howitworks} />
      <VehicleForEveryGroupSize
        location="gurugram"
        content={cmsSections?.groupsize}
      />
      <VehicleForEveryOccasion
        location="gurugram"
        content={cmsSections?.occasion}
      />
      <CorporateServicePageSections cmsSections={cmsSections} />
      <AboutService content={cmsSections?.aboutservice} />
      <WhyChooseUrbanCruise
        location="gurugram"
        content={cmsSections?.whychoose}
      />
      <Testimonial
        location="gurugram"
        content={cmsSections?.testimonials}
      />
      <Faqs location="gurugram" content={cmsSections?.faq} />
      <VehicleRentalServiceInIndia
        location="gurugram"
        content={cmsSections?.servicelocations}
      />
      <OurTrustedPartner content={cmsSections?.partners} />
    </div>
  );
}
