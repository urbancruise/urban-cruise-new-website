// app/components/about-us/GurugramAboutPage.tsx
"use client";

import DelhiVehicleRentalServiceInIndia from "../home/vehiclerentalserviceinindia/DelhiVehicleRentalServiceInIndia";
import OurTrustedPartner from "../ourtrustedpartner/OurTrustedPartner";
import About from "./ui/About";
import Hero from "./ui/Hero";
import OfficesTeam from "./ui/OfficesTeam";
import OurStory from "./ui/OurStory";

export default function GurugramAboutPage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        content={{
          eyebrow: "About Urban Cruise Gurugram",
          title: "Discover Gurugram with",
          titleHighlight: "Urban Cruise",
          description:
            "Experience the heart of India's capital in luxury and comfort. From historic monuments to modern marvels, we make every journey through Gurugram unforgettable.",
          backgroundImageAlt: "About Urban Cruise Gurugram",
        }}
      />
      <About content={{
        eyebrow: "Who we are",
        title: "Driven by comfort,",
        titleHighlight: "trusted by thousands",
      }} />
      <OurStory content={{
        eyebrow: "Our story",
        title: "How Urban Cruise",
        titleHighlight: "began and grew",
      }} />
      <OfficesTeam content={{
        eyebrow: "Meet our team",
        title: "The people behind",
        titleHighlight: "Urban Cruise Gurugram",
      }} />
      <OurTrustedPartner content={{
        eyebrow: "Our trusted partner",
        title: "Partnering with",
        titleHighlight: "the best in the industry",
      }} />
      <DelhiVehicleRentalServiceInIndia content={{
        eyebrow: "Our Network",
        title: "INDIA",
        titleHighlight: "",
        subtitle: "",
        description:
          "We take pride in delivering comfortable rides, on-time service and memorable journeys for every customer.",
      }} />
    </div>
  );
}