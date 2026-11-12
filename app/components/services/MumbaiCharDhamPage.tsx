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

export default function MumbaiCharDhamPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="mumbai"
        content={{
          eyebrow: "Char Dham Yatra from Mumbai",
          title: "Mumbai to Char Dham",
          titleHighlight: "Yatra Package",
          description:
            "Travel from Mumbai to Yamunotri, Gangotri, Kedarnath, and Badrinath in a comfortable vehicle with a professional driver.",
          backgroundImageAlt: "Char Dham Yatra from Mumbai",
          vehiclesImageAlt: "Vehicles for Char Dham Yatra from Mumbai",
        }}
        cmsContent={cmsSections?.hero}
      />
      <About location="mumbai" content={cmsSections?.about} />
      <HowItWorks location="mumbai" content={cmsSections?.howitworks} />
      <VehicleForEveryGroupSize
        location="mumbai"
        content={cmsSections?.groupsize}
      />
      <VehicleForEveryOccasion
        location="mumbai"
        content={cmsSections?.occasion}
      />
      <Hotels
        location="mumbai"
        content={cmsSections?.hotels}
        yatra="Char Dham"
      />
      <CharDhamPageSections cmsSections={cmsSections} />
      <AboutService content={cmsSections?.aboutservice} />
      <SafariZones content={cmsSections?.safarizones} variant="char-dham" />
      <WhyChooseUrbanCruise
        location="mumbai"
        content={cmsSections?.whychoose}
      />
      <Testimonial location="mumbai" content={cmsSections?.testimonials} />
      <Faqs location="mumbai" content={cmsSections?.faq} />
      <VehicleRentalServiceInIndia
        location="mumbai"
        content={cmsSections?.servicelocations}
      />
      <OurTrustedPartner content={cmsSections?.partners} />
    </div>
  );
}
