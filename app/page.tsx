import LocationRedirect from "@/app/components/LocationRedirect";
import HeroSelector from "@/app/components/HeroSelector";
import AboutSelector from "@/app/components/AboutSelector";
import HowItWorksSelector from "@/app/components/HowItWorksSelector";
import VehicleForEveryBudgetSelector from "@/app/components/VehicleForEveryBudgetSelector";
import VehicleForEveryGroupSizeSelector from "@/app/components/VehicleForEveryGroupSizeSelector";
import VehicleForEveryOccasionSelector from "@/app/components/VehicleForEveryOccasionSelector";
import WhyChooseUrbanCruiseSelector from "@/app/components/WhyChooseUrbanCruiseSelector";
import TestimonialSelector from "@/app/components/TestimonialSelector";
import GlobalFaqsSelector from "@/app/components/GlobalFaqsSelector";
import VehicleRentalServiceInIndiaSelector from "@/app/components/VehicleRentalServiceInIndiaSelector";
import OurTrustedPartner from "@/app/components/ourtrustedpartner/OurTrustedPartner";
import DownloadApp from "@/app/components/download-app/DownloadApp";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <LocationRedirect />
      <HeroSelector />
      <AboutSelector />
      <HowItWorksSelector />
      <VehicleForEveryBudgetSelector />
      <VehicleForEveryGroupSizeSelector />
      <VehicleForEveryOccasionSelector />
      <WhyChooseUrbanCruiseSelector />
      <TestimonialSelector />
      <GlobalFaqsSelector />
      <VehicleRentalServiceInIndiaSelector />
      <OurTrustedPartner />
      <DownloadApp />
    </div>
  );
}
