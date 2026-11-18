// app/components/services/GlobalLocalTravelPage.tsx
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

export default function GlobalLocalTravelPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="global"
        content={{
          eyebrow: "Global Local Travel Vehicle Rental",
          title: "Local Travel",
          titleHighlight: "Vehicle Rental",
          description:
            "Convenient and reliable local travel solutions wherever you are — airport transfers, city tours, and daily commuting services with professional drivers.",
          backgroundImageAlt: "Local travel vehicle rental service",
          vehiclesImageAlt: "Cars and buses for local travel",
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
      <VacationPageSections cmsSections={cmsSections} />
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