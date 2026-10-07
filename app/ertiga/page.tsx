import { createGlobalVehiclePage } from "@/app/lib/global-vehicle-page";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/ertiga")) ?? {
      title: "Ertiga Rental in India | Urban Cruise",
    }
  );
}

export default createGlobalVehiclePage("ertiga", "Ertiga");
