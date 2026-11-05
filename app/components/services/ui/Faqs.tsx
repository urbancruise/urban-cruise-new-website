"use client";

import dynamic from "next/dynamic";
import type { ServiceLocation } from "./types";

const sectionComponents = {
  delhi: dynamic(() => import("../../home/faq's/DelhiFaq’s")),
  gurugram: dynamic(() => import("../../home/faq's/GurugramFaq’s")),
  mumbai: dynamic(() => import("../../home/faq's/MumbaiFaq's")),
  pune: dynamic(() => import("../../home/faq's/PuneFaq’s")),
  global: dynamic(() => import("../../home/faq's/DefaultFaq's")),
};

export default function Faqs({ location }: { location: ServiceLocation }) {
  const Component = sectionComponents[location];
  return <Component />;
}
