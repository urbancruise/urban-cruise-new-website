"use client";

import dynamic from "next/dynamic";
import type { ServiceLocation } from "./types";

const sectionComponents = {
  delhi: dynamic(
    () => import("../../home/whychooseurbancruise/DelhiWhyChooseUrbanCruise")
  ),
  gurugram: dynamic(
    () => import("../../home/whychooseurbancruise/GurugramWhyChooseUrbanCruise")
  ),
  mumbai: dynamic(
    () => import("../../home/whychooseurbancruise/MumbaiWhyChooseUrbanCruise")
  ),
  pune: dynamic(
    () => import("../../home/whychooseurbancruise/PuneWhyChooseUrbanCruise")
  ),
  global: dynamic(
    () => import("../../home/whychooseurbancruise/DefaultWhyChooseUrbanCruise")
  ),
};

export default function WhyChooseUrbanCruise({
  location,
}: {
  location: ServiceLocation;
}) {
  const Component = sectionComponents[location];
  return <Component />;
}
