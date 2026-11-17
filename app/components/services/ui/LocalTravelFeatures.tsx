"use client";

import {
  FaCar,
  FaCity,
  FaClock,
  FaShieldAlt,
  FaTaxi,
  FaTrophy,
  FaUsers,
  FaWifi,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface LocalTravelFeature {
  icon: IconType;
  label: string;
  value: string;
}

export default function LocalTravelFeatures({
  coverage,
}: {
  coverage: string;
}) {
  const features: LocalTravelFeature[] = [
    { icon: FaClock, label: "Service", value: "24/7" },
    { icon: FaUsers, label: "Capacity", value: "Flexible" },
    { icon: FaShieldAlt, label: "Safety", value: "Priority" },
    { icon: FaCar, label: "Fleet", value: "Diverse" },
    { icon: FaCity, label: "Coverage", value: coverage },
    { icon: FaTrophy, label: "Rating", value: "4.8★" },
    { icon: FaTaxi, label: "Service", value: "Reliable" },
    { icon: FaWifi, label: "Connectivity", value: "Available" },
  ];

  return (
    <section className="bg-gradient-to-r from-[#03C35E]/10 to-[#55efc4]/10 py-12">
      <div className="container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
        {features.map(({ icon: Icon, label, value }) => (
          <div key={`${label}-${value}`} className="text-center">
            <Icon className="mx-auto mb-2 text-3xl text-[#03C35E]" />
            <p className="text-sm text-gray-500">{label}</p>
            <p className="font-semibold text-[#142236]">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
