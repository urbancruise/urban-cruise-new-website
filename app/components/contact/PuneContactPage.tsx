// app/components/contact/PuneContactPage.tsx
"use client";

import Hero from "./ui/Hero";
import ContactForm from "./ui/ContactForm";
import DelhiVehicleRentalServiceInIndia from "../home/vehiclerentalserviceinindia/DelhiVehicleRentalServiceInIndia";
import OurTrustedPartner from "../ourtrustedpartner/OurTrustedPartner";

export default function PuneContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        content={{
          eyebrow: "Contact Us",
          title: "Get in touch with",
          titleHighlight: "Urban Cruise Pune",
          description:
            "Have questions or feedback? We'd love to hear from you!",
          backgroundImageAlt: "Contact Us at Urban Cruise Pune",
        }}
      />
      <ContactForm content={{
        eyebrow: "Contact Form",
        title: "Reach out to",
        titleHighlight: "Urban Cruise Pune",
      }} />
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
