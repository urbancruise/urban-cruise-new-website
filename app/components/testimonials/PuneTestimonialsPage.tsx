"use client";

import Hero from "./ui/Hero";
import TestimonialsSection from "./ui/TestimonialsSection";
import DelhiVehicleRentalServiceInIndia from "../home/vehiclerentalserviceinindia/DelhiVehicleRentalServiceInIndia";
import OurTrustedPartner from "../ourtrustedpartner/OurTrustedPartner";

export default function PuneTestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero
        content={{
          eyebrow: "Customer Experiences",
          title: "Real Stories.",
          titleHighlight: "Real Journeys.",
          description:
            "Discover why customers across Pune trust Urban Cruise for comfortable, reliable and memorable journeys.",
          backgroundImageAlt: "Customer testimonials at Urban Cruise Pune",
        }}
      />
      <TestimonialsSection
        content={{
          eyebrow: "Customer Testimonials",
          title: "Experiences That",
          titleHighlight: "Matter",
        }}
      />
      <OurTrustedPartner
        content={{
          eyebrow: "Our trusted partner",
          title: "Partnering with",
          titleHighlight: "the best in the industry",
        }}
      />
      <DelhiVehicleRentalServiceInIndia
        content={{
          eyebrow: "Our Network",
          title: "INDIA",
          titleHighlight: "",
          subtitle: "",
          description:
            "We take pride in delivering comfortable rides, on-time service and memorable journeys for every customer.",
        }}
      />
    </main>
  );
}
