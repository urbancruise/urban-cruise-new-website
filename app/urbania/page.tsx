import { createGlobalVehiclePage } from "@/app/lib/global-vehicle-page";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/urbania")) ?? {
      title: "Force Urbania Rental | Urban Cruise",
    }
  );
}

export default createGlobalVehiclePage("urbania", "Force Urbania");
