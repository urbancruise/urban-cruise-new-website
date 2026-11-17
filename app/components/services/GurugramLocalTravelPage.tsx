"use client";

import LocalTravelPageSections from "./ui/LocalTravelPageSections";

export default function GurugramLocalTravelPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <LocalTravelPageSections
      location="gurugram"
      cityName="Gurugram"
      coverage="Gurugram NCR"
      airport="Delhi Airport"
      airportPrice="₹800+"
      tourPrice="₹2,500+"
      hourlyPrice="₹500+"
      dayPrice="₹4,000+"
      cmsSections={cmsSections}
    />
  );
}
