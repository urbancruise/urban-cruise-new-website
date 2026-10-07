import { createGlobalVehiclePage } from "@/app/lib/global-vehicle-page";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/luxury-cars-suvs")) ?? {
      title: "Luxury Cars & SUVs Rental | Urban Cruise",
    }
  );
}

export default createGlobalVehiclePage("luxury-cars-suvs", "Luxury Cars & SUVs");
