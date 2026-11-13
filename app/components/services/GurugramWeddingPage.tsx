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

export default function GurugramWeddingPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="gurugram"
        content={{
          eyebrow: "Wedding Vehicle Rental in Gurugram",
          title: "Gurugram Wedding",
          titleHighlight: "Vehicle Rental",
          description:
            "Arrange comfortable wedding travel in Gurugram with premium cars, tempo travellers, and buses driven by professional chauffeurs.",
          backgroundImageAlt: "Wedding vehicle rental in Gurugram",
          vehiclesImageAlt: "Cars and buses for wedding travel in Gurugram",
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
      <WeddingServicePageSections cmsSections={cmsSections} />
      <AboutService content={cmsSections?.aboutservice} />
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
