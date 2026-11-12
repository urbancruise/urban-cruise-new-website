// app/components/services/DelhiDoDhamPage.tsx
"use client";

import Hero from "./ui/Hero";
import About from "./ui/About";
import HowItWorks from "./ui/HowItWorks";
import VehicleForEveryGroupSize from "./ui/VehicleForEveryGroupSize";
import VehicleForEveryOccasion from "./ui/VehicleForEveryOccasion";
import Hotels from "./ui/Hotels";
import DoDhamPageSections from "./ui/DoDhamPageSections";
import WhyChooseUrbanCruise from "./ui/WhyChooseUrbanCruise";
import Testimonial from "./ui/Testimonial";
import Faqs from "./ui/Faqs";
import VehicleRentalServiceInIndia from "./ui/VehicleRentalServiceInIndia";
import OurTrustedPartner from "./ui/OurTrustedPartner";

export default function DelhiDoDhamPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="delhi"
        content={{
          eyebrow: "Do Dham Yatra from Delhi",
          title: "Delhi to Do Dham",
          titleHighlight: "Yatra Package",
          description:
            "Travel from Delhi to Yamunotri and Gangotri on a comfortable, well-planned Do Dham Yatra.",
          backgroundImageAlt: "Do Dham Yatra from Delhi",
          vehiclesImageAlt: "Vehicles for Do Dham Yatra from Delhi",
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
      <Hotels location="delhi" content={cmsSections?.hotels} />
      <DoDhamPageSections cmsSections={cmsSections} />
      <WhyChooseUrbanCruise location="delhi" content={cmsSections?.whychoose} />
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
