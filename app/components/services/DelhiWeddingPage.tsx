"use client";

import Hero from "./ui/Hero";
import About from "./ui/About";
import HowItWorks from "./ui/HowItWorks";
import VehicleForEveryGroupSize from "./ui/VehicleForEveryGroupSize";
import VehicleForEveryOccasion from "./ui/VehicleForEveryOccasion";
import WhyChooseUrbanCruise from "./ui/WhyChooseUrbanCruise";
import Testimonial from "./ui/Testimonial";
import Faqs from "./ui/Faqs";
import VehicleRentalServiceInIndia from "./ui/VehicleRentalServiceInIndia";
import OurTrustedPartner from "./ui/OurTrustedPartner";
import AboutService from "./ui/AboutService";
import WeddingServicePageSections from "./ui/WeddingServicePageSections";

export default function DelhiWeddingPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="delhi"
        content={{
          eyebrow: "Wedding Vehicle Rental in Delhi",
          title: "Delhi Wedding",
          titleHighlight: "Vehicle Rental",
          description:
            "Arrange comfortable wedding travel in Delhi with premium cars, tempo travellers, and buses driven by professional chauffeurs.",
          backgroundImageAlt: "Wedding vehicle rental in Delhi",
          vehiclesImageAlt: "Cars and buses for wedding travel in Delhi",
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
      <WeddingServicePageSections cmsSections={cmsSections} />
      <AboutService content={cmsSections?.aboutservice} />
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
