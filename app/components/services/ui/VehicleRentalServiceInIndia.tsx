"use client";

import dynamic from "next/dynamic";
import type { ServiceLocation } from "./types";

const sectionComponents = {
  delhi: dynamic(
    () =>
      import(
        "../../home/vehiclerentalserviceinindia/DelhiVehicleRentalServiceInIndia"
      )
  ),
  gurugram: dynamic(
    () =>
      import(
        "../../home/vehiclerentalserviceinindia/GurugramVehicleRentalServiceInIndia"
      )
  ),
  mumbai: dynamic(
    () =>
      import(
        "../../home/vehiclerentalserviceinindia/MumbaiVehicleRentalServiceInIndia"
      )
  ),
  pune: dynamic(
    () =>
      import(
        "../../home/vehiclerentalserviceinindia/PuneVehicleRentalServiceInIndia"
      )
  ),
  global: dynamic(
    () =>
      import(
        "../../home/vehiclerentalserviceinindia/DefaultVehicleRentalServiceInIndia"
      )
  ),
};

export default function VehicleRentalServiceInIndia({
  location,
}: {
  location: ServiceLocation;
}) {
  const Component = sectionComponents[location];
  return <Component />;
}
