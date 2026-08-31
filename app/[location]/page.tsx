// app/[location]/page.tsx
import { notFound } from "next/navigation";
import {
  isValidLocation,
  formatLocationName,
} from "@/app/lib/location";

import HeroSelector from "@/app/components/HeroSelector";
import AboutSelector from "@/app/components/AboutSelector";
import HowItWorksSelector from "@/app/components/HowItWorksSelector";
import VehicleForEveryBudgetSelector from "@/app/components/VehicleForEveryBudgetSelector";
import VehicleForEveryGroupSizeSelector from "../components/VehicleForEveryGroupSizeSelector";
import VehicleForEveryOccasionSelector from "../components/VehicleForEveryOccasionSelector";
import WhyChooseUrbanCruiseSelector from "../components/WhyChooseUrbanCruiseSelector";
import TestimonialSelector from "../components/TestimonialSelector";
import FaqsSelector from "@/app/components/Faq'sSelector";
import VehicleRentalServiceInIndiaSelector from "@/app/components/VehicleRentalServiceInIndiaSelector";
import OurTrustedPartner from "../components/ourtrustedpartner/OurTrustedPartner";
import DownloadApp from "../components/download-app/DownloadApp";

interface LocationPageProps {
  params: Promise<{
    location: string;
  }>;
}

export default async function LocationHome({
  params,
}: LocationPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  return (
    <div className="min-h-[calc(100vh-4rem)]">

          {/* HERO */}
      <HeroSelector />

          {/* ABOUT */}
      <AboutSelector />

          {/* HOW IT WORKS */}
      <HowItWorksSelector />

          {/* VEHICLE FOR EVERY BUDGET */}
      <VehicleForEveryBudgetSelector />

      {/* VEHICLE FOR EVERY GROUP SIZE */}
      <VehicleForEveryGroupSizeSelector />

      {/* VEHICLE FOR EVERY OCCASION */}
      <VehicleForEveryOccasionSelector />

      {/* WHY CHOOSE URBAN CRUISE */}
      <WhyChooseUrbanCruiseSelector />

      {/* Testimonial */}
      <TestimonialSelector />

      {/* Faq's */}
      <FaqsSelector />

      {/* VEHICLE RENTAL SERVICE IN INDIA */}
      <VehicleRentalServiceInIndiaSelector />

      {/* Our Trusted Partner */}
      <OurTrustedPartner />

      {/* FEATURES */}
      <DownloadApp />
    </div>
  );
}


