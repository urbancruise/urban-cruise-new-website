import { createGlobalVehiclePage } from "@/app/lib/global-vehicle-page";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/luxury-vans")) ?? {
      title: "Luxury Vans Rental | Urban Cruise",
    }
  );
}

export default createGlobalVehiclePage("luxury-vans", "Luxury Vans");
