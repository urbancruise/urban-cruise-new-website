"use client";

import Hero from "./ui/Hero";
import DelhiVehicleRentalServiceInIndia from "../home/vehiclerentalserviceinindia/DelhiVehicleRentalServiceInIndia";
import OurTrustedPartner from "../ourtrustedpartner/OurTrustedPartner";
import About from "./ui/About";
import PartnershipProgram from "./ui/PartnershipProgram";
import PartnershipProgramContact from "./ui/PartnershipProgramContact";

export default function PunePartnerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero
        content={{
          eyebrow: "Partnering with Urban Cruise",
          title: "Your Trusted Travel Partner",
          titleHighlight: "Reliable, Comfortable, and Professional",
          description:
            "Join hands with Urban Cruise to provide top-notch car, tempo traveller, and bus rental services across Pune. Our well-maintained vehicles and experienced drivers ensure a seamless travel experience for your customers.",
          backgroundImageAlt: "Partner with Urban Cruise for premium travel services in Pune",
        }}
      />
      <About
        content={{
          eyebrow: "About Urban Cruise",
          title: "Your Trusted Travel Partner",
          titleHighlight: "Reliable, Comfortable, and Professional",
          paragraphs: [
            "Urban Cruise is a leading car, tempo traveller, and bus rental service based in Pune. We are committed to providing safe, comfortable, and hassle-free travel experiences for our customers.",
          ],
        }}
      />
      <PartnershipProgram
        content={{
          eyebrow: "Partnership Program",
          title: "Four steps to start earning with your vehicles",
          titleHighlight: "Join our fleet and start earning today",
          description: "Join our partnership program and start generating revenue with your fleet.",
        }}
      />
      <PartnershipProgramContact
        content={{
          eyebrow: "Partnership Program",
          title: "Contact Us",
          titleHighlight: "Get Started Today",
          description: "Have questions about our partnership program? Get in touch with our team.",
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
          titleHighlight: "Expanding Horizons",
          subtitle: "",
          description:
            "We take pride in delivering comfortable rides, on-time service and memorable journeys for every customer.",
        }}
      />
    </main>
  );
}
