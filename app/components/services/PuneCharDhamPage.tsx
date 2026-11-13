"use client";

import Hero from "./ui/Hero";
import About from "./ui/About";
import HowItWorks from "./ui/HowItWorks";
import VehicleForEveryGroupSize from "./ui/VehicleForEveryGroupSize";
import VehicleForEveryOccasion from "./ui/VehicleForEveryOccasion";
import Hotels from "./ui/Hotels";
import CharDhamPageSections from "./ui/CharDhamPageSections";
import WhyChooseUrbanCruise from "./ui/WhyChooseUrbanCruise";
import Testimonial from "./ui/Testimonial";
import Faqs from "./ui/Faqs";
import VehicleRentalServiceInIndia from "./ui/VehicleRentalServiceInIndia";
import OurTrustedPartner from "./ui/OurTrustedPartner";
import AboutService from "./ui/AboutService";
import SafariZones from "./ui/SafariZones";

export default function PuneCharDhamPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="pune"
        content={{
          eyebrow: "Char Dham Yatra from Pune",
          title: "Pune to Char Dham",
          titleHighlight: "Yatra Package",
          description:
            "Travel from Pune to Yamunotri, Gangotri, Kedarnath, and Badrinath in a comfortable vehicle with a professional driver.",
          backgroundImageAlt: "Char Dham Yatra from Pune",
          vehiclesImageAlt: "Vehicles for Char Dham Yatra from Pune",
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
      <Hotels
        location="pune"
        content={cmsSections?.hotels}
        yatra="Char Dham"
      />
      <CharDhamPageSections cmsSections={cmsSections} />
      <AboutService content={cmsSections?.aboutservice} />
      <SafariZones content={cmsSections?.safarizones} variant="char-dham" />
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
