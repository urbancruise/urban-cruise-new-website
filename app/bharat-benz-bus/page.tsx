import { createGlobalVehiclePage } from "@/app/lib/global-vehicle-page";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/bharat-benz-bus")) ?? {
      title: "Bharat Benz Bus Rental | Urban Cruise",
    }
  );
}

export default createGlobalVehiclePage("bharat-benz-bus", "Bharat Benz Bus");
