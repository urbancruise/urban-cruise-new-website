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

export default function GurugramCharDhamPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="gurugram"
        content={{
          eyebrow: "Char Dham Yatra from Gurugram",
          title: "Gurugram to Char Dham",
          titleHighlight: "Yatra Package",
          description:
            "Travel from Gurugram to Yamunotri, Gangotri, Kedarnath, and Badrinath in a comfortable vehicle with a professional driver.",
          backgroundImageAlt: "Char Dham Yatra from Gurugram",
          vehiclesImageAlt: "Vehicles for Char Dham Yatra from Gurugram",
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
      <Hotels
        location="gurugram"
        content={cmsSections?.hotels}
        yatra="Char Dham"
      />
      <CharDhamPageSections cmsSections={cmsSections} />
      <AboutService content={cmsSections?.aboutservice} />
      <SafariZones content={cmsSections?.safarizones} variant="char-dham" />
      <WhyChooseUrbanCruise
        location="gurugram"
        content={cmsSections?.whychoose}
      />
      <Testimonial location="gurugram" content={cmsSections?.testimonials} />
      <Faqs location="gurugram" content={cmsSections?.faq} />
      <VehicleRentalServiceInIndia
        location="gurugram"
        content={cmsSections?.servicelocations}
      />
      <OurTrustedPartner content={cmsSections?.partners} />
    </div>
  );
}
