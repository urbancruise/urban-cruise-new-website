import { createGlobalVehiclePage } from "@/app/lib/global-vehicle-page";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/car-suvs")) ?? {
      title: "Cars & SUVs Rental in India | Urban Cruise",
    }
  );
}

export default createGlobalVehiclePage("car-suvs", "Cars & SUVs");

