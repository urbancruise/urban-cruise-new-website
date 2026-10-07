import { createGlobalVehiclePage } from "@/app/lib/global-vehicle-page";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/volvo-bus")) ?? {
      title: "Volvo Bus Rental | Urban Cruise",
    }
  );
}

export default createGlobalVehiclePage("volvo-bus", "Volvo Bus");
