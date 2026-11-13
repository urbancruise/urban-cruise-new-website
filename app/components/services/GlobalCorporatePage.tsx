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

export default function GlobalCorporatePage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="global"
        content={{
          eyebrow: "Corporate Travel Rental Service",
          title: "Corporate",
          titleHighlight: "Travel Service",
          description:
            "Arrange reliable corporate transportation across India for employee commutes, executive travel, airport transfers, and business events.",
          backgroundImageAlt: "Corporate travel service across India",
          vehiclesImageAlt: "Vehicles for corporate travel",
        }}
        cmsContent={cmsSections?.hero}
      />
      <About location="global" content={cmsSections?.about} />
      <HowItWorks location="global" content={cmsSections?.howitworks} />
      <VehicleForEveryGroupSize
        location="global"
        content={cmsSections?.groupsize}
      />
      <VehicleForEveryOccasion
        location="global"
        content={cmsSections?.occasion}
      />
      <CorporateServicePageSections cmsSections={cmsSections} />
      <AboutService content={cmsSections?.aboutservice} />
      <WhyChooseUrbanCruise
        location="global"
        content={cmsSections?.whychoose}
      />
      <Testimonial location="global" content={cmsSections?.testimonials} />
      <Faqs location="global" content={cmsSections?.faq} />
      <VehicleRentalServiceInIndia
        location="global"
        content={cmsSections?.servicelocations}
      />
      <OurTrustedPartner content={cmsSections?.partners} />
    </div>
  );
}
