"use client";

import Hero from "./ui/Hero";
import About from "./ui/About";
import HowItWorks from "./ui/HowItWorks";
import VehicleForEveryGroupSize from "./ui/VehicleForEveryGroupSize";
import VehicleForEveryOccasion from "./ui/VehicleForEveryOccasion";
import Hotels from "./ui/Hotels";
import CharDhamPageSections from "./CharDhamPageSections";
import WhyChooseUrbanCruise from "./ui/WhyChooseUrbanCruise";
import Testimonial from "./ui/Testimonial";
import Faqs from "./ui/Faqs";
import VehicleRentalServiceInIndia from "./ui/VehicleRentalServiceInIndia";
import OurTrustedPartner from "./ui/OurTrustedPartner";
import AboutService from "./ui/AboutService";
import SafariZones from "./ui/SafariZones";

export default function GlobalCharDhamPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="global"
        content={{
          eyebrow: "Char Dham Yatra",
          title: "Explore Char Dham",
          titleHighlight: "Yatra Package",
          description:
            "Travel to Yamunotri, Gangotri, Kedarnath, and Badrinath in a comfortable vehicle with a professional driver.",
          backgroundImageAlt: "Char Dham Yatra",
          vehiclesImageAlt: "Vehicles for Char Dham Yatra",
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
      <Hotels
        location="global"
        content={cmsSections?.hotels}
        yatra="Char Dham"
      />
      <CharDhamPageSections cmsSections={cmsSections} />
      <AboutService content={cmsSections?.aboutservice} />
      <SafariZones content={cmsSections?.safarizones} variant="char-dham" />
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
