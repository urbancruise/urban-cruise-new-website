import { createGlobalVehiclePage } from "@/app/lib/global-vehicle-page";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/mercedes-sprinter")) ?? {
      title: "Mercedes Sprinter Rental | Urban Cruise",
    }
  );
}

export default createGlobalVehiclePage("mercedes-sprinter", "Mercedes Sprinter");
