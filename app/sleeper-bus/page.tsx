import { createGlobalVehiclePage } from "@/app/lib/global-vehicle-page";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/sleeper-bus")) ?? {
      title: "Sleeper Bus Rental | Urban Cruise",
    }
  );
}

export default createGlobalVehiclePage("sleeper-bus", "Sleeper Bus");
