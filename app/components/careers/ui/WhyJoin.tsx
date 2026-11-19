import Image from "next/image";
import { FaBus, FaChartLine, FaLightbulb, FaRocket, FaUsers } from "react-icons/fa";
import type { IconType } from "react-icons";

type Perk = { icon: IconType; title: string; text: string };

const perks: Perk[] = [
  {
    icon: FaChartLine,
    title: "Fast Growth",
    text: "Work with a rapidly growing travel and transportation company.",
  },
  {
    icon: FaLightbulb,
    title: "Your Ideas Matter",
    text: "Bring your ideas to the table and help improve how India travels.",
  },
  {
    icon: FaRocket,
    title: "Grow With Us",
    text: "Take ownership of your work and build skills that move your career forward.",
  },
  {
    icon: FaUsers,
    title: "Great Team",
    text: "Collaborate with passionate people across technology, sales and operations.",
  },
];

function PerkItem({ perk, side }: { perk: Perk; side: "left" | "right" }) {
  const Icon = perk.icon;
  const isLeft = side === "left";

  return (
    <div
      className={`group flex items-start gap-4 ${
        isLeft ? "lg:flex-row-reverse lg:text-right" : ""
      }`}
    >
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#03C35E]/10 text-[#03C35E] transition duration-300 group-hover:bg-[#03C35E] group-hover:text-white">
        <Icon className="text-xl" />
        {/* connector toward the image (desktop only) */}
        <span
          className={`absolute top-1/2 hidden h-px w-10 border-t-2 border-dashed border-[#03C35E]/40 lg:block ${
            isLeft ? "left-full ml-2" : "right-full mr-2"
          }`}
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-[#142236]">{perk.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-600">{perk.text}</p>
      </div>
    </div>
  );
}

export default function WhyJoin() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      style={{
        backgroundImage:
          "linear-gradient(#142236 1px, transparent 1px), linear-gradient(90deg, #142236 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        backgroundBlendMode: "soft-light",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#03C35E]/40 bg-white px-4 py-1.5 text-sm font-semibold text-[#03C35E]">
            <FaBus />
            Careers at Urban Cruise
          </span>
          <h2 className="mt-4 text-4xl font-extrabold text-[#142236] md:text-5xl">
            Why work <span className="text-[#03C35E]">with us</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Urban Cruise started with a simple idea: travel should be safe, clean and on time.
            Our drivers, coordinators and support staff make that happen every day, and we treat
            them like the backbone of the company.
          </p>
        </div>

        {/* Radial layout */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-12">
          {/* Left perks */}
          <div className="order-2 space-y-8 lg:order-1 lg:space-y-14">
            <PerkItem perk={perks[0]} side="left" />
            <PerkItem perk={perks[1]} side="left" />
          </div>

          {/* Center image */}
          <div className="order-1 mx-auto lg:order-2">
            <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80 lg:h-[24rem] lg:w-[24rem]">
              {/* dashed outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#03C35E]/50" />
              {/* solid green ring */}
              <div className="absolute inset-4 rounded-full border-[6px] border-[#03C35E]" />
              {/* image */}
              <div className="relative h-[calc(100%-3.5rem)] w-[calc(100%-3.5rem)] overflow-hidden rounded-full shadow-2xl">
                <Image
                  src="/images/careers/team.jpg"
                  alt="Urban Cruise team standing beside a bus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right perks */}
          <div className="order-3 space-y-8 lg:space-y-14">
            <PerkItem perk={perks[2]} side="right" />
            <PerkItem perk={perks[3]} side="right" />
          </div>
        </div>
      </div>
    </section>
  );
}