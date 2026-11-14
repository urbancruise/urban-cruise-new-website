// app/components/services/DelhiVacationsPage.tsx
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

export default function DelhiVacationsPage({
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
          eyebrow: "Delhi Vacations Vehicle Rental",
          title: "Vacation",
          titleHighlight: "Vehicle Rental",
          description:
            "Plan your perfect vacation from Delhi with comfortable cars, tempo travellers, and buses driven by professionals.",
          backgroundImageAlt: "Vacation travel service from Delhi",
          vehiclesImageAlt: "Vehicles available for vacations from Delhi",
        }}
        cmsContent={cmsSections?.hero}
      />
      <About location="delhi" content={cmsSections?.about} />
      <HowItWorks location="delhi" content={cmsSections?.howitworks} />
      <VehicleForEveryGroupSize
        location="delhi"
        content={cmsSections?.groupsize}
      />
      <VehicleForEveryOccasion
        location="delhi"
        content={cmsSections?.occasion}
      />
      <VacationPageSections cmsSections={cmsSections} />
      <SafariZones content={cmsSections?.safarizones} />

      <WhyChooseUrbanCruise
        location="delhi"
        content={cmsSections?.whychoose}
      />
      <Testimonial location="delhi" content={cmsSections?.testimonials} />
      <Faqs location="delhi" content={cmsSections?.faq} />
      <VehicleRentalServiceInIndia
        location="delhi"
        content={cmsSections?.servicelocations}
      />
      <OurTrustedPartner content={cmsSections?.partners} />
    </div>
  );
}
