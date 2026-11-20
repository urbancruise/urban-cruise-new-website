import About from "./ui/About";
import Hero from "./ui/Hero";
import OurStory from "./ui/OurStory";
import OurTrustedPartner from "../ourtrustedpartner/OurTrustedPartner";

export default function GlobalAboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        content={{
          eyebrow: "About Urban Cruise India",
          title: "Travel better across",
          titleHighlight: "India with Urban Cruise",
          description:
            "We make personal, family, group, and business travel easier with comfortable vehicle rentals and dependable service in the cities we serve.",
          backgroundImageAlt: "Urban Cruise vehicle rental services across India",
        }}
      />
      <About
        content={{
          eyebrow: "Who we are",
          title: "Comfortable journeys,",
          titleHighlight: "thoughtfully arranged",
          paragraphs: [
            "Urban Cruise helps people and businesses arrange vehicle rentals for everyday travel, airport transfers, outstation trips, events, and more.",
            "From choosing a vehicle to planning the journey, our team focuses on clear communication, reliable service, and a comfortable ride.",
          ],
          highlights: [
            "Cars, SUVs, tempo travellers, and buses",
            "Options for local and outstation travel",
            "Professional drivers",
            "Support with planning your trip",
          ],
          imageAlt: "Urban Cruise vehicles ready for customer journeys",
          badgeValue: "India",
          badgeLabel: "Travel support",
          ctaText: "Explore our services",
          ctaHref: "/car-suvs",
        }}
      />
      <OurStory
        content={{
          eyebrow: "Our story",
          title: "A better way",
          titleHighlight: "to travel together",
          intro:
            "Urban Cruise brings vehicle choices and travel support together to help make every journey more comfortable and straightforward.",
          milestones: [
            {
              year: "Our approach",
              title: "Start with your journey",
              description:
                "We help travellers choose suitable vehicles for individual, family, and group travel.",
            },
            {
              year: "Our fleet",
              title: "Options for different plans",
              description:
                "Choose from cars, SUVs, tempo travellers, and buses based on your route and group size.",
            },
            {
              year: "Our promise",
              title: "Support along the way",
              description:
                "We work to make planning and booking a vehicle rental clear and convenient.",
            },
          ],
        }}
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
