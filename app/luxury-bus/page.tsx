import { createGlobalVehiclePage } from "@/app/lib/global-vehicle-page";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/luxury-bus")) ?? {
      title: "Luxury Bus Rental | Urban Cruise",
    }
  );
}

export default createGlobalVehiclePage("luxury-bus", "Luxury Bus");
