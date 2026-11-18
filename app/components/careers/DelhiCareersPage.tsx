// app/components/careers/DelhiCareersPage.tsx
"use client";

import ApplyForm from "./ui/ApplyForm";
import Gallery from "./ui/Gallery";
import Hero from "./ui/Hero";
import HiringProcess from "./ui/HiringProcess";
import OpenRoles from "./ui/OpenRoles";
import Perks from "./ui/Perks";
import WhyJoin from "./ui/WhyJoin";

export default function DelhiCareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        content={{
          eyebrow: "Careers at Urban Cruise Delhi",
          title: "Join our team and",
          titleHighlight: "drive your career forward",
          description:
            "At Urban Cruise Delhi, we value our employees and offer opportunities for growth, learning, and making a difference in the travel industry.",
          backgroundImageAlt: "Careers at Urban Cruise Delhi",
        }}
      />
      <WhyJoin
        content={{
          eyebrow: "Why Join Us",
          title: "Be a part of",
          titleHighlight: "Urban Cruise Delhi",
        }}
      />
      <Perks
        content={{
          eyebrow: "Perks & Benefits",
          title: "What we offer",
          titleHighlight: "to our team members",
        }}
      />
      <Gallery
        content={{
          eyebrow: "Life at Urban Cruise Delhi",
          title: "A glimpse into",
          titleHighlight: "our work culture",
        }}
      />
      <OpenRoles
        content={{
          eyebrow: "Open Roles",
          title: "Current",
          titleHighlight: "job openings",
        }}
      />
      <HiringProcess
        content={{
          eyebrow: "Hiring Process",
          title: "How to",
          titleHighlight: "join our team",
        }}
      />
      <ApplyForm
        content={{
          eyebrow: "Ready to Apply?",
          title: "Take the next step",
          titleHighlight: "in your career",
        }}
      />
    </div>
  );
}