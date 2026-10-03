// app/components/vehicles/luxury-buses/pune/VolvoBus.tsx
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
import LookingForOtherVehicle from "./ui/LookingForOtherVehicle";
import CompressionWithVehicle from "./ui/CompressionWithVehicle";
import PricesCharges from "./ui/PricesCharges";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function VolvoBus({ cmsMeta, cmsSections }: Props) {
  const s = cmsSections ?? {};

  return (
    <section className="min-h-[calc(100vh-4rem)]">
      <Hero content={s.hero} meta={cmsMeta} />
      <About content={s.about} />
      <HowItWorks content={s.howitworks} />
      <VehicleForEveryBudget content={s.vehiclebudget} />
      <VehicleForEveryGroupSize content={s.groupsize} />
      <CompressionWithVehicle content={s.compare} />
      <PricesCharges content={s.prices} />
      <LookingForOtherVehicle content={s.lookingvehicle} />
      <VehicleForEveryOccasion content={s.occasion} />
      <WhyChooseUrbanCruise content={s.whychoose} />
      <Testimonials content={s.testimonials} />
      <Faqs content={s.faq} />
      <VehicleRentalServiceInIndia content={s.servicelocations} />
      <OurTrustedPartner content={s.partners} />
      <DownloadApp content={s.downloadapp} />
    </section>
  );
}

