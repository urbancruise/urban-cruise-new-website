"use client";

import Hero from "./ui/Hero";
import About from "./ui/About";
import HowItWorks from "./ui/HowItWorks";
import VehicleForEveryGroupSize from "./ui/VehicleForEveryGroupSize";
import VehicleForEveryOccasion from "./ui/VehicleForEveryOccasion";
import PilgrimagePageSections from "./ui/PilgrimagePageSections";
import PlacesCard from "./ui/PlacesCard";
import WhyChooseUrbanCruise from "./ui/WhyChooseUrbanCruise";
import Testimonial from "./ui/Testimonial";
import Faqs from "./ui/Faqs";
import VehicleRentalServiceInIndia from "./ui/VehicleRentalServiceInIndia";
import OurTrustedPartner from "./ui/OurTrustedPartner";

export default function MumbaiPilgrimagePage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="mumbai"
        content={{
          eyebrow: "Pilgrimage Vehicle Rental from Mumbai",
          title: "Mumbai Pilgrimage",
          titleHighlight: "Vehicle Rental",
          description:
            "Travel from Mumbai to sacred destinations across India in a comfortable car, tempo traveller, or bus with a professional driver.",
          backgroundImageAlt: "Pilgrimage vehicle rental from Mumbai",
          vehiclesImageAlt: "Vehicles for pilgrimage trips from Mumbai",
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
      <PilgrimagePageSections cmsSections={cmsSections} />
      <PlacesCard content={cmsSections?.places} />
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
