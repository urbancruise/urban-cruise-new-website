// app/components/services/GurugramLocalTravelPage.tsx
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

export default function GurugramLocalTravelPage({
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
          eyebrow: "Gurugram Local Travel Vehicle Rental",
          title: "Local Travel",
          titleHighlight: "Vehicle Rental",
          description:
            "Convenient and reliable local travel solutions in Gurugram NCR — airport transfers, city tours, and daily commuting services.",
          backgroundImageAlt: "Local travel service in Gurugram",
          vehiclesImageAlt: "Vehicles available for local travel in Gurugram",
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
      <AboutService content={cmsSections?.aboutservice} />
      <WhyChooseUrbanCruise
        location="gurugram"
        content={cmsSections?.whychoose}
      />
      <Testimonial location="gurugram" content={cmsSections?.testimonials} />
      <Faqs location="gurugram" content={cmsSections?.faq} />
      <VehicleRentalServiceInIndia
        location="gurugram"
        content={cmsSections?.servicelocations}
      />
      <OurTrustedPartner content={cmsSections?.partners} />
    </div>
  );
}