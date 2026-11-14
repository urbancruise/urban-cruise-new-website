// app/components/services/PuneVacationsPage.tsx
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

export default function PuneVacationsPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {

  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="pune"
        content={{
          eyebrow: "Pune Vacations Vehicle Rental",
          title: "Vacation",
          titleHighlight: "Vehicle Rental",
          description:
            "Plan your perfect vacation from Pune with comfortable cars, tempo travellers, and buses driven by professionals.",
          backgroundImageAlt: "Vacation travel service from Pune",
          vehiclesImageAlt: "Vehicles available for vacations from Pune",
        }}
        cmsContent={cmsSections?.hero}
      />
      <About location="pune" content={cmsSections?.about} />
      <HowItWorks location="pune" content={cmsSections?.howitworks} />
      <VehicleForEveryGroupSize
        location="pune"
        content={cmsSections?.groupsize}
      />
      <VehicleForEveryOccasion
        location="pune"
        content={cmsSections?.occasion}
      />
      <VacationPageSections cmsSections={cmsSections} />
      <SafariZones content={cmsSections?.safarizones} />

      <WhyChooseUrbanCruise
        location="pune"
        content={cmsSections?.whychoose}
      />
      <Testimonial location="pune" content={cmsSections?.testimonials} />
      <Faqs location="pune" content={cmsSections?.faq} />

      <VehicleRentalServiceInIndia
        location="pune"
        content={cmsSections?.servicelocations}
      />
      <OurTrustedPartner content={cmsSections?.partners} />
    </div>
  );
}
