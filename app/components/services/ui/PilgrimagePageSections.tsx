"use client";

import { TourPackageCardSection } from "./Card";

export default function PilgrimagePageSections({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <TourPackageCardSection
      sectionKey="pilgrimagepackages"
      content={cmsSections?.pilgrimagepackages}
    />
  );
}