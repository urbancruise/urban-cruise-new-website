"use client";

import dynamic from "next/dynamic";
import type { ServiceLocation } from "./types";

const aboutComponents = {
  delhi: dynamic(() => import("../../home/about/DelhiAbout")),
  gurugram: dynamic(() => import("../../home/about/GurugramAbout")),
  mumbai: dynamic(() => import("../../home/about/MumbaiAbout")),
  pune: dynamic(() => import("../../home/about/PuneAbout")),
  global: dynamic(() => import("../../home/about/DefaultAbout")),
};

export default function About({ location }: { location: ServiceLocation }) {
  const Component = aboutComponents[location];
  return <Component />;
}
