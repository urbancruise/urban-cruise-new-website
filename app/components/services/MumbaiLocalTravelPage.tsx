"use client";

import LocalTravelPageSections from "./ui/LocalTravelPageSections";

export default function MumbaiLocalTravelPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <LocalTravelPageSections
      location="mumbai"
      cityName="Mumbai"
      coverage="Mumbai"
      airport="Mumbai Airport"
      airportPrice="₹900+"
      tourPrice="₹2,800+"
      hourlyPrice="₹550+"
      dayPrice="₹4,500+"
      cmsSections={cmsSections}
    />
  );
}
