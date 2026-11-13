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

export default function PunePilgrimagePage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="pune"
        content={{
          eyebrow: "Pilgrimage Vehicle Rental from Pune",
          title: "Pune Pilgrimage",
          titleHighlight: "Vehicle Rental",
          description:
            "Travel from Pune to sacred destinations across India in a comfortable car, tempo traveller, or bus with a professional driver.",
          backgroundImageAlt: "Pilgrimage vehicle rental from Pune",
          vehiclesImageAlt: "Vehicles for pilgrimage trips from Pune",
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
      <PilgrimagePageSections cmsSections={cmsSections} />
      <PlacesCard content={cmsSections?.places} />
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
