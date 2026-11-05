"use client";

import dynamic from "next/dynamic";
import type { ServiceLocation } from "./types";

const sectionComponents = {
  delhi: dynamic(() => import("../../home/howItworks/DelhiHowItWorks")),
  gurugram: dynamic(() => import("../../home/howItworks/GurugramHowItWorks")),
  mumbai: dynamic(() => import("../../home/howItworks/MumbaiHowItWorks")),
  pune: dynamic(() => import("../../home/howItworks/PuneHowItWorks")),
  global: dynamic(() => import("../../home/howItworks/DefaultHowItWorks")),
};

export default function HowItWorks({
  location,
}: {
  location: ServiceLocation;
}) {
  const Component = sectionComponents[location];
  return <Component />;
}
