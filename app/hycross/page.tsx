import { createGlobalVehiclePage } from "@/app/lib/global-vehicle-page";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/hycross")) ?? {
      title: "Toyota Hycross Rental in India | Urban Cruise",
    }
  );
}

export default createGlobalVehiclePage("hycross", "Toyota Hycross");
