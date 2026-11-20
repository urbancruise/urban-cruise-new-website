import { locationConfigs } from "@/app/lib/locationConfig";
import OurTrustedPartner from "../ourtrustedpartner/OurTrustedPartner";
import ContactForm, { type ContactDetails } from "./ui/ContactForm";
import Hero from "./ui/Hero";

const globalContactDetails: ContactDetails = {
  officeHeading: "Our locations",
  phones: Object.entries(locationConfigs).map(([location, config]) => ({
    label: location.charAt(0).toUpperCase() + location.slice(1),
    value: config.phone,
  })),
  emails: Object.entries(locationConfigs).map(([location, config]) => ({
    label: location.charAt(0).toUpperCase() + location.slice(1),
    value: config.email,
  })),
  offices: Object.entries(locationConfigs).map(([location, config]) => ({
    location: location.charAt(0).toUpperCase() + location.slice(1),
    address: config.address,
  })),
};

export default function GlobalContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        content={{
          eyebrow: "Contact Urban Cruise",
          title: "We’re here to help",
          titleHighlight: "with your journey",
          description:
            "Get in touch with our team for bookings, travel questions, or support.",
          backgroundImageAlt: "Contact the Urban Cruise team",
        }}
      />
      <ContactForm
        content={{
          eyebrow: "Contact our team",
          title: "Reach out to",
          titleHighlight: "Urban Cruise",
        }}
        contactDetails={globalContactDetails}
      />
      <OurTrustedPartner
        content={{
          eyebrow: "Our trusted partners",
          title: "Building better",
          titleHighlight: "travel experiences",
          subtitle: "Working together to serve our customers",
          description:
            "We value the organisations and partners who help us deliver dependable travel services to customers.",
        }}
      />
    </div>
  );
}
