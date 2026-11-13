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

export default function PuneWeddingPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="pune"
        content={{
          eyebrow: "Wedding Vehicle Rental in Pune",
          title: "Pune Wedding",
          titleHighlight: "Vehicle Rental",
          description:
            "Arrange comfortable wedding travel in Pune with premium cars, tempo travellers, and buses driven by professional chauffeurs.",
          backgroundImageAlt: "Wedding vehicle rental in Pune",
          vehiclesImageAlt: "Cars and buses for wedding travel in Pune",
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
      <WeddingServicePageSections cmsSections={cmsSections} />
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
