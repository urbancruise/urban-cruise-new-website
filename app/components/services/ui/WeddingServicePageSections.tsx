"use client";

import { TourPackageCardSection } from "./Card";

export default function WeddingServicePageSections({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <TourPackageCardSection
      sectionKey="weddingpackages"
      content={cmsSections?.weddingpackages}
    />
  );
}
