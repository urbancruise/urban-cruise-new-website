"use client";

import dynamic from "next/dynamic";
import type { ServiceLocation } from "./types";

const sectionComponents = {
  delhi: dynamic(() => import("../../home/testimonial/DelhiTestimonial")),
  gurugram: dynamic(() => import("../../home/testimonial/GurugramTestimonial")),
  mumbai: dynamic(() => import("../../home/testimonial/MumbaiTestimonial")),
  pune: dynamic(() => import("../../home/testimonial/PuneTestimonial")),
  global: dynamic(() => import("../../home/testimonial/DefaultTestimonial")),
};

export default function Testimonial({
  location,
}: {
  location: ServiceLocation;
}) {
  const Component = sectionComponents[location];
  return <Component />;
}
