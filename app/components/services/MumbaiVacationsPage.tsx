// app/components/services/MumbaiVacationsPage.tsx
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

export default function MumbaiVacationsPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {

  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="mumbai"
        content={{
          eyebrow: "Mumbai Vacations Vehicle Rental",
          title: "Vacation",
          titleHighlight: "Vehicle Rental",
          description:
            "Plan your perfect vacation from Mumbai with comfortable cars, tempo travellers, and buses driven by professionals.",
          backgroundImageAlt: "Vacation travel service from Mumbai",
          vehiclesImageAlt: "Vehicles available for vacations from Mumbai",
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
      <VacationPageSections cmsSections={cmsSections} />
      <SafariZones content={cmsSections?.safarizones} />

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
