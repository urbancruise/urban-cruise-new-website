import { createGlobalVehiclePage } from "@/app/lib/global-vehicle-page";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/mini-bus")) ?? {
      title: "Mini Bus Rental | Urban Cruise",
    }
  );
}

export default createGlobalVehiclePage("mini-bus", "Mini Bus");
