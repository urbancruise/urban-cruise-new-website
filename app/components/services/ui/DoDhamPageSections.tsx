"use client";

import VehiclePackage from "./VehiclePackage";
import { DoDhamCardSection } from "./Card";

export default function DoDhamPageSections({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <>
      <VehiclePackage content={cmsSections?.vehiclepackage} />
      <DoDhamCardSection
        sectionKey="dodhampackages"
        content={cmsSections?.dodhampackages}
      />
      <DoDhamCardSection
        sectionKey="majorstartingpoints"
        content={cmsSections?.majorstartingpoints}
      />
      <DoDhamCardSection
        sectionKey="othertourpackages"
        content={cmsSections?.othertourpackages}
      />
    </>
  );
}
