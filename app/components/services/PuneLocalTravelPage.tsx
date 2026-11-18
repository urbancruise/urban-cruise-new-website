// app/components/services/PuneLocalTravelPage.tsx
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
import AboutService from "./ui/AboutService";

export default function PuneLocalTravelPage({
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
          eyebrow: "Pune Local Travel Vehicle Rental",
          title: "Local Travel",
          titleHighlight: "Vehicle Rental",
          description:
            "Convenient and reliable local travel solutions in Pune — airport transfers, city tours, and daily commuting services.",
          backgroundImageAlt: "Local travel service in Pune",
          vehiclesImageAlt: "Vehicles available for local travel in Pune",
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
      <AboutService content={cmsSections?.aboutservice} />
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