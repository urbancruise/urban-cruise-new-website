// app/components/vehicles/luxury-cars-suvs-vans/pune/LuxuryCarsSuvs.tsx
"use client";

import Hero from "./ui/Hero";
import About from "./ui/About";
import HowItWorks from "./ui/HowItWorks";
import VehicleForEveryBudget from "./ui/VehicleForEveryBudget";
import VehicleForEveryGroupSize from "./ui/VehicleForEveryGroupSize";
import VehicleForEveryOccasion from "./ui/VehicleForEveryOccasion";
import WhyChooseUrbanCruise from "./ui/WhyChooseUrbanCruise";
import Testimonials from "./ui/Testimonials";
import Faqs from "./ui/Faq's";
import VehicleRentalServiceInIndia from "./ui/VehicleRentalServiceInIndia";
import OurTrustedPartner from "../../../ourtrustedpartner/OurTrustedPartner";
import DownloadApp from "../../../download-app/DownloadApp";
import PlaceToVisit from "./ui/PlaceToVisit";
import LookingForOtherVehicle from "./ui/LookingForOtherVehicle";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function LuxuryCarsSuvs({ cmsMeta, cmsSections }: Props) {
  const s = cmsSections ?? {};
  return (
    <section className="min-h-[calc(100vh-4rem)]">
      <Hero content={s.hero} meta={cmsMeta} />
      <About content={s.about} />
      <HowItWorks content={s.howitworks} />
      <VehicleForEveryBudget content={s.vehiclebudget} />
      <VehicleForEveryGroupSize content={s.groupsize} />
      <LookingForOtherVehicle content={s.lookingvehicle} />
      <VehicleForEveryOccasion content={s.occasion} />
      <WhyChooseUrbanCruise content={s.whychoose} />
      <Testimonials content={s.testimonials} />
      <PlaceToVisit content={s.discover} />
      <Faqs content={s.faq} />
      <VehicleRentalServiceInIndia content={s.servicelocations} />
      <OurTrustedPartner content={s.partners} />
      <DownloadApp content={s.downloadapp} />
    </section>
  );
}

