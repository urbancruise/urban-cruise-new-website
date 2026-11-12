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

export default function DelhiCharDhamPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="delhi"
        content={{
          eyebrow: "Char Dham Yatra from Delhi",
          title: "Delhi to Char Dham",
          titleHighlight: "Yatra Package",
          description:
            "Travel from Delhi to Yamunotri, Gangotri, Kedarnath, and Badrinath in a comfortable vehicle with a professional driver.",
          backgroundImageAlt: "Char Dham Yatra from Delhi",
          vehiclesImageAlt: "Vehicles for Char Dham Yatra from Delhi",
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
      <Hotels
        location="delhi"
        content={cmsSections?.hotels}
        yatra="Char Dham"
      />
      <CharDhamPageSections cmsSections={cmsSections} />
      <AboutService content={cmsSections?.aboutservice} />
      <SafariZones content={cmsSections?.safarizones} variant="char-dham" />
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
