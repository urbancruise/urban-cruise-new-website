import OurTrustedPartner from "../ourtrustedpartner/OurTrustedPartner";
import Hero from "./ui/Hero";
import TestimonialsSection from "./ui/TestimonialsSection";

export default function GlobalTestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero
        content={{
          eyebrow: "Customer experiences",
          title: "Real stories.",
          titleHighlight: "Real journeys.",
          description:
            "Read what customers have shared about their journeys with Urban Cruise.",
          backgroundImageAlt: "Customer testimonials for Urban Cruise",
        }}
      />
      <TestimonialsSection />
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
    </main>
  );
}
