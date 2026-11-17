"use client";

import About from "./ui/About";
import AboutService from "./ui/AboutService";
import Faqs from "./ui/Faqs";
import Hero from "./ui/Hero";
import HowItWorks from "./ui/HowItWorks";
import LocalTravelBookingCta from "./ui/LocalTravelBookingCta";
import LocalTravelFeatures from "./ui/LocalTravelFeatures";
import LocalTravelPackages from "./ui/LocalTravelPackages";
import LocalTravelServices from "./ui/LocalTravelServices";
import OurTrustedPartner from "./ui/OurTrustedPartner";
import Testimonial from "./ui/Testimonial";
import VehicleForEveryGroupSize from "./ui/VehicleForEveryGroupSize";
import VehicleForEveryOccasion from "./ui/VehicleForEveryOccasion";
import VehicleRentalServiceInIndia from "./ui/VehicleRentalServiceInIndia";
import WhyChooseUrbanCruise from "./ui/WhyChooseUrbanCruise";

export default function DelhiLocalTravelPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="delhi"
        content={{
          eyebrow: "Local Travel Service in Delhi",
          title: "Delhi Local",
          titleHighlight: "Travel Service",
          description:
            "Book reliable local travel in Delhi NCR, including airport transfers, city tours, and comfortable daily transportation.",
          backgroundImageAlt: "Local travel service in Delhi",
          vehiclesImageAlt: "Cars and buses for local travel in Delhi",
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
      <LocalTravelFeatures coverage="Delhi NCR" />
      <LocalTravelServices cityName="Delhi" />
      <LocalTravelPackages
        cityName="Delhi"
        coverage="Delhi NCR"
        airport="Delhi Airport"
        airportPrice="₹800+"
        tourPrice="₹2,500+"
        hourlyPrice="₹500+"
        dayPrice="₹4,000+"
      />
      <AboutService content={cmsSections?.aboutservice} />
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
      <LocalTravelBookingCta cityName="Delhi" />
    </div>
  );
}
