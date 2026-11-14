// app/components/services/GurugramVacationsPage.tsx
"use client";

import Hero from "./ui/Hero";
import About from "./ui/About";
import HowItWorks from "./ui/HowItWorks";
import VehicleForEveryGroupSize from "./ui/VehicleForEveryGroupSize";
import VehicleForEveryOccasion from "./ui/VehicleForEveryOccasion";
import VacationPageSections from "./ui/VacationPageSections";
import WhyChooseUrbanCruise from "./ui/WhyChooseUrbanCruise";
import Testimonial from "./ui/Testimonial";
import Faqs from "./ui/Faqs";
import VehicleRentalServiceInIndia from "./ui/VehicleRentalServiceInIndia";
import OurTrustedPartner from "./ui/OurTrustedPartner";
import SafariZones from "./ui/SafariZones";

export default function GurugramVacationsPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        location="gurugram"
        content={{
          eyebrow: "Gurugram Vacations Vehicle Rental",
          title: "Vacation",
          titleHighlight: "Vehicle Rental",
          description:
            "Plan your perfect vacation from Gurugram with comfortable cars, tempo travellers, and buses driven by professionals.",
          backgroundImageAlt: "Vacation travel service from Gurugram",
          vehiclesImageAlt: "Vehicles available for vacations from Gurugram",
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
      <VacationPageSections cmsSections={cmsSections} />
      <SafariZones content={cmsSections?.safarizones} />

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
