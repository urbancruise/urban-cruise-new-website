// app/components/careers/GurugramCareersPage.tsx
"use client";

import Hero from "./ui/Hero";
import HiringProcess from "./ui/HiringProcess";
import Perks from "./ui/Perks";
import WhyJoin from "./ui/WhyJoin";
import DelhiVehicleRentalServiceInIndia from "../home/vehiclerentalserviceinindia/DelhiVehicleRentalServiceInIndia";
import OurTrustedPartner from "../ourtrustedpartner/OurTrustedPartner";

export default function GurugramCareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        content={{
          eyebrow: "Careers at Urban Cruise Gurugram",
          title: "Join our team and",
          titleHighlight: "drive your career forward",
          description:
            "At Urban Cruise Gurugram, we value our employees and offer opportunities for growth, learning, and making a difference in the travel industry.",
          backgroundImageAlt: "Careers at Urban Cruise Gurugram",
        }}
      />
      <WhyJoin
        content={{
          eyebrow: "Why Join Us",
          title: "Be a part of",
          titleHighlight: "Urban Cruise Gurugram",
        }}
      />
      <Perks
        content={{
          eyebrow: "Perks & Benefits",
          title: "What we offer",
          titleHighlight: "to our team members",
        }}
      />
      <HiringProcess
        content={{
          eyebrow: "Hiring Process",
          title: "How to",
          titleHighlight: "join our team",
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
    </div>
  );
}
