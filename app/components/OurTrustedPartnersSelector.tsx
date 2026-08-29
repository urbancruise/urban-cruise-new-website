// components/OurTrustedPartnersSelector.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLocation } from "@/app/context/LocationContext";

// ======================================================
// DELHI
// ======================================================

const DelhiOurTrustedPartner = dynamic(
  () =>
    import(
      "./home/ourtrustedpartner/DelhiOurTrustedPartner"
    ),
  {
    loading: () => (
      <div className="min-h-[400px] w-full bg-white" />
    ),
  }
);

// ======================================================
// FUTURE LOCATIONS
// ======================================================

// const GurugramOurTrustedPartner = dynamic(
//   () =>
//     import(
//       "./home/ourtrustedpartner/GurugramOurTrustedPartner"
//     ),
//   {
//     loading: () => (
//       <div className="min-h-[400px] w-full bg-white" />
//     ),
//   }
// );

// const MumbaiOurTrustedPartner = dynamic(
//   () =>
//     import(
//       "./home/ourtrustedpartner/MumbaiOurTrustedPartner"
//     ),
//   {
//     loading: () => (
//       <div className="min-h-[400px] w-full bg-white" />
//     ),
//   }
// );

// const PuneOurTrustedPartner = dynamic(
//   () =>
//     import(
//       "./home/ourtrustedpartner/PuneOurTrustedPartner"
//     ),
//   {
//     loading: () => (
//       <div className="min-h-[400px] w-full bg-white" />
//     ),
//   }
// );

// ======================================================
// COMPONENT
// ======================================================

export default function OurTrustedPartnersSelector() {
  const { location } = useLocation();

  // ====================================================
  // NORMALIZE LOCATION
  // ====================================================

  const currentLocation = String(location || "")
    .trim()
    .toLowerCase();

  // ====================================================
  // LOCATION → COMPONENT
  // ====================================================

  const partnerMap: Record<
    string,
    React.ComponentType
  > = {
    delhi: DelhiOurTrustedPartner,

    // Future locations
    // gurugram: GurugramOurTrustedPartner,
    // mumbai: MumbaiOurTrustedPartner,
    // pune: PuneOurTrustedPartner,
  };

  // ====================================================
  // GET COMPONENT
  // ====================================================

  const PartnerComponent =
    partnerMap[currentLocation];

  // ====================================================
  // IF COMPONENT DOES NOT EXIST
  // ====================================================

  if (!PartnerComponent) {
    return null;
  }

  // ====================================================
  // RENDER
  // ====================================================

  return <PartnerComponent />;
}