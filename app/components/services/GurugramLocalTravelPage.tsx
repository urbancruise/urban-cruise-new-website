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

export default function GurugramLocalTravelPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="gurugram"
        content={{
          eyebrow: "Local Travel Service in Gurugram",
          title: "Gurugram Local",
          titleHighlight: "Travel Service",
          description:
            "Book reliable local travel in Gurugram NCR, including airport transfers, city tours, and comfortable daily transportation.",
          backgroundImageAlt: "Local travel service in Gurugram",
          vehiclesImageAlt: "Cars and buses for local travel in Gurugram",
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
      <LocalTravelFeatures coverage="Gurugram NCR" />
      <LocalTravelServices cityName="Gurugram" />
      <LocalTravelPackages
        cityName="Gurugram"
        coverage="Gurugram NCR"
        airport="Delhi Airport"
        airportPrice="₹800+"
        tourPrice="₹2,500+"
        hourlyPrice="₹500+"
        dayPrice="₹4,000+"
      />
      <AboutService content={cmsSections?.aboutservice} />
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
      <LocalTravelBookingCta cityName="Gurugram" />
    </div>
  );
}
