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

export default function GlobalDoDhamPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="global"
        content={{
          eyebrow: "Do Dham Yatra",
          title: "Explore Do Dham",
          titleHighlight: "Yatra Package",
          description:
            "Travel to Yamunotri and Gangotri on a comfortable, well-planned Do Dham Yatra.",
          backgroundImageAlt: "Do Dham Yatra",
          vehiclesImageAlt: "Vehicles for Do Dham Yatra",
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
      <Hotels location="global" content={cmsSections?.hotels} />
      <DoDhamPageSections cmsSections={cmsSections} />
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
