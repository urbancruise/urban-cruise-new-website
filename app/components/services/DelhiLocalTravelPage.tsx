"use client";

import LocalTravelPageSections from "./ui/LocalTravelPageSections";

export default function DelhiLocalTravelPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <LocalTravelPageSections
      location="delhi"
      cityName="Delhi"
      coverage="Delhi NCR"
      airport="Delhi Airport"
      airportPrice="₹800+"
      tourPrice="₹2,500+"
      hourlyPrice="₹500+"
      dayPrice="₹4,000+"
      cmsSections={cmsSections}
    />
  );
}
