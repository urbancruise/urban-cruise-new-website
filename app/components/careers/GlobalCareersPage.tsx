import OurTrustedPartner from "../ourtrustedpartner/OurTrustedPartner";
import Hero from "./ui/Hero";
import HiringProcess from "./ui/HiringProcess";
import Perks from "./ui/Perks";
import WhyJoin from "./ui/WhyJoin";

export default function GlobalCareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        content={{
          eyebrow: "Careers at Urban Cruise",
          title: "Build your career",
          titleHighlight: "with Urban Cruise",
          description:
            "Join a team helping people travel more comfortably. Explore opportunities across operations, sales, technology, customer support, and more.",
          backgroundImageAlt: "Careers at Urban Cruise",
        }}
      />
      <WhyJoin />
      <Perks />
      <HiringProcess />
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
